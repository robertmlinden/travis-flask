from flask import Flask, app, render_template

app = Flask(__name__, static_folder='static', static_url_path='/static')

@app.route('/')
def home():
	return render_template('index.html')