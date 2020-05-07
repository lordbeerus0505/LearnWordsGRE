<h1 align="center">React + Flask based app to learn words from the Barron's guide for GRE</h1>

## Project overview

This project shows how to render a full stack application with ReactJS Front End and Python Flask back end

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the following tools available on your machine;

- [Git](https://git-scm.com/) A distributed version control system
- [Python](https://www.python.org/) A general purpose programming language
- [Pip](https://pypi.org/project/pip/) A tool for installing python packages
- [create-react-app](https://create-react-app.dev/) A supported way of creating single-page React applications
- [npm]() Node package manager to install dependencies for React

### Installing

Start by cloning the repository to your local machine

```bash
git clone https://github.com/learningdollars/sushan-reactapp-flask.git

cd sushan-reactapp-flask/
```

Make and activate a python virtual environment using `conda` or any other virtual environment

```bash
conda create --name "name" python = 3.7

source activate "name"
```

With the virtual environment activated, install the project dependencies for the flask server

```bash
pip3 install -r requirements.txt
```

```bash
cd react-app/
```

```bash
npm install
npm run build
```

## Serving the application

You can start a local server by running

```bash
cd ..
python wsgi.py

```
visit http://127.0.0.1:5000/ to view your application.

## Built With

- [Flask](http://flask.palletsprojects.com/en/1.1.x/) -A python web framework
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## Authors

Abhiram Natarajan (lordbeerus0505)
