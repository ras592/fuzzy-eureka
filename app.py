from flask import Flask, render_template, session, url_for, flash, redirect

app = Flask(__name__)

@app.route('/')
def index():
    errors = []
    return render_template('index.html', errors=errors)

if __name__ == '__main__':
    app.run(debug=True)
