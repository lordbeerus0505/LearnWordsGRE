
from flask import (Flask, render_template)

import time
import hashlib
import random
import pandas as pd
import socket
from flask import request
from server.words import WordLists
app = Flask(__name__)
from mongoengine import *
connect("barrons",host='mongodb+srv://abhiram:abhiram@cluster0-snm3i.mongodb.net/test?retryWrites=true&w=majority')


class ExtractFile :
    def create_word_list(self):
        data_frame = pd.read_excel('Barrons.xlsx')
        word_list = {}
        for k,v in data_frame.iterrows():
            word_list.update({v[0]:[{"meaning":v[1],"sentence":"","learnt":False}]})
        return word_list

#Direction of the messages, True means from the user False means from person in Chatwith
class Messages(EmbeddedDocument):
    message = StringField(max_length=200)
    timestamp = IntField(default=int(time.time()))
    direction = BooleanField(default=True)
    
class Chats(EmbeddedDocument):
    chatWith = StringField(max_length=100,required=True)
    chatMessages = ListField(EmbeddedDocumentField(Messages))
    
class Users(Document):
    userId = StringField(max_length=100, unique=True, required=True)
    password = StringField(max_length=105, required=True)
    firstName = StringField(max_length=25, required=True)
    lastName = StringField(max_length=25, required=True)
    ipAddress = StringField(max_length=16, required=True)
    hostName = StringField(max_length=100, required=True)
    chatData = ListField(EmbeddedDocumentField(Chats))

class Words(Document):
    userId = StringField(max_length=100, unique=True, required=True)
    password = StringField(max_length=105, required=True)
    firstName = StringField(max_length=25, required=True)
    lastName = StringField(max_length=25, required=True)
    ipAddress = StringField(max_length=16, required=True)
    hostName = StringField(max_length=100, required=True)
    word_list = DictField()
    flagged_words = DictField()

def saveMessageSender(userId, chatWith, message):
    user = Users.objects(userId = userId)
    if not user:
        user = Users(userId = userId)
        print("new user created")
    else:
        user = Users.objects(userId = userId).get()  
    
    chat = Chats(
        chatWith = chatWith
    )  
    messages = Messages(message = message)
    chat.chatMessages.append(messages)
    user.chatData.append(chat)
    user.save()

def saveMessageReceiver(userId, chatWith, message):
    user = Users.objects(userId = userId)
    if not user:
        user = Users(userId = userId)
        print("new user created")
    else:
        user = Users.objects(userId = userId).get()  
    
    chat = Chats(
        chatWith = chatWith
    )  
    messages = Messages(message = message, direction=False)
    chat.chatMessages.append(messages)
    user.chatData.append(chat)
    user.save()

@app.route('/')
def home():
    obj = ExtractFile()
    """ 
    Use when you need to update list of words
    
    word_list = obj.create_word_list()
    userId = 'abhiram'
    wordUser = Words.objects(userId = userId)
    if not wordUser:
        wordUser = Words(userId = userId)
        print("new user created")
    else:
        wordUser = Words.objects(userId = userId).get()  
    wordUser.word_list.update(word_list)
    wordUser.save() 
    """
    
    return render_template("index.html")

@app.route('/get-words', methods=['GET'])
def get_words():

    learnt = True

    wordUser = Words.objects(hostName = socket.gethostname())
    while learnt != False:
        wordUser = Words.objects.get(hostName = socket.gethostname())

        word_list = wordUser.word_list

        word = random.choice(list(word_list.keys()))
        meaning = word_list[word]
        learnt = meaning[0]['learnt']

    meaning = meaning[0]['meaning']

    return {"word" : word, "meaning" : meaning, "Success" : True}

@app.route('/get-flagged-word', methods=['GET'])
def get_flagged_words():

    wordUser = Words.objects.get(hostName = socket.gethostname())
    print('Found user')
    flagged_words = wordUser.flagged_words

    word = random.choice(list(flagged_words.keys()))
    meaning = flagged_words[word]
    print('found words')

    return {"word" : word, "meaning" : meaning, "Success" : True}

@app.route('/learnt-word', methods=['POST'])
def learnt_word():

    wordUser = Words.objects.get(hostName = socket.gethostname())
    word = request.get_json()['word']
    wordUser.word_list[word][0].update({'learnt':True})
    wordUser.save()
    
    # Find the next word from DB
    learnt = True

    while learnt != False:
        wordUser = Words.objects.get(hostName = socket.gethostname())

        word_list = wordUser.word_list

        word = random.choice(list(word_list.keys()))
        meaning = word_list[word]
        learnt = meaning[0]['learnt']

    meaning = meaning[0]['meaning']

    return {"word" : word, "meaning" : meaning, "Success" : True}

@app.route('/add-flag', methods=['POST'])
def add_flag():

    wordUser = Words.objects.get(hostName = socket.gethostname())
    word = request.get_json()['word']
    meaning = request.get_json()['meaning']
    wordUser.flagged_words.update({word:meaning})

    wordUser.save()

    return {"Success" : True}

@app.route('/forgot-word', methods=['POST'])
def forgot_word():
    
    wordUser = Words.objects.get(hostName = socket.gethostname())

    """ 

    No use for now

    word = request.get_json()['word']
    wordUser.word_list[word][0].update({'learnt':False})
    wordUser.save()

    """
    # Find the next word from DB
    learnt = True

    while learnt != False:
        wordUser = Words.objects.get(hostName = socket.gethostname())

        word_list = wordUser.word_list

        word = random.choice(list(word_list.keys()))
        meaning = word_list[word]
        learnt = meaning[0]['learnt']

    meaning = meaning[0]['meaning']

    return {"word" : word, "meaning" : meaning, "Success" : True}

    
@app.route('/check_creds', methods=['GET'])
def check_creds():
    ipAddress = socket.gethostbyname("")
    hostName = socket.gethostname()
    user = Users.objects(ipAddress=ipAddress, hostName=hostName)
    if user:
        print("found user")
        import pdb; pdb.set_trace()
        messages = Users.objects(ipAddress=ipAddress, hostName=hostName).get()
        return {"Success":True, "messages":"hello"}
    else :
        print("failed miserably")

@app.route('/login',methods=['POST'])
def login():
    credentials = request.get_json()
    userId = credentials['emailAddress']
    password = credentials['password']

    wordUser = Words.objects(userId = userId, password = hashlib.md5(password.encode()).hexdigest())
    if wordUser:
        wordUser = Words.objects(userId = userId, password = hashlib.md5(password.encode()).hexdigest()).get()
        wordUser.hostName = socket.gethostname()
        wordUser.ipAddress = socket.gethostbyname("")
        wordUser.save()
        
        return {'Success':True}
    else:
        return {'Success':False}
    #need to update ip and hostname during login

@app.route('/signup',methods=['POST'])
def signup():
    credentials = request.get_json()
    userId = credentials['emailAddress']
    firstName = credentials['firstName']
    lastName = credentials['lastName']
    password = credentials['password']
    h = hashlib.md5(password.encode())
    # run some hash function here before saving to DB
    print("ABOUT TO READ")
    # import pdb; pdb.set_trace()
    obj = WordLists()
    
    word_list = obj.word_list()[0]
    print("READ SUCCESSFULLY")
    wordUser = Words(
        userId = userId,
        firstName = firstName,
        lastName = lastName,
        password = h.hexdigest(),
        hostName = socket.gethostname(),
        ipAddress = socket.gethostbyname("")
    )

    wordUser.word_list.update(word_list)
    wordUser.save() 

    return {'Success':True}

@app.route('/text_chat')
def text_chat():
    userId = "12345"
    chatWith = "12346"
    message = "Sending message from 12345 to 12346"
    saveMessageSender(userId,chatWith,message)
    saveMessageReceiver(chatWith,userId,message)
    return 'Yooooo'
