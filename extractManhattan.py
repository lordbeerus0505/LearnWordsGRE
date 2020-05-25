import re
with open("manhattan.txt","r") as f:
    word_dict = {}
    sentences = f.readlines()
    # import pdb; pdb.set_trace()
    for sent in sentences:
        t= sent.split("    ")
        index, wordMeaning = t[0], t[1]
        wordMeaning = wordMeaning.strip()
        data = re.split("([A-Z][a-zA-Z ;.,?!()]*)", wordMeaning)
        word , meaning = data[0], data[1]
        word = word.strip()
        meaning = meaning.strip()
        word_dict.update({word:[{'meaning':meaning, "sentence":"", "learnt":False}]})
    # import pdb; pdb.set_trace()
    print(word_dict)
