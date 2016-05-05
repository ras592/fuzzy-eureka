from flask import Flask, render_template, session, url_for, flash, redirect, request

"""
Clean up remaining code
Make Facebook page reflect correct date
Make instagram relflect the right date
"""


app = Flask(__name__)

app.secret_key = 'a hard to guess string'

@app.route('/')
def index():
    errors = []
    return render_template('old_westfield.html', errors=errors)

@app.route('/services')
def services():
    errors = []
    return render_template('services.html', errors=errors)

@app.route('/contact', methods=["GET", "POST"])
def contact():
    errors = []
    if request.method == 'POST':
    	entry = {}
    	entry['name'] = request.form['name']
    	entry['email'] = request.form['email']
    	if 'phone' in request.form:
    		entry['phone'] = request.form['phone']
    	else:
    		entry['phone'] = ""
    	entry['message'] = request.form['message']
    	for m in entry:
    		print(entry[m])
    	flash('Thank you!')
    	redirect('/contact')
    return render_template('contact.html', errors=errors)

@app.route('/sign_up', methods=["GET", "POST"])
def sign_up():
    errors = []
    if request.method == 'POST':
    	entry = {}
    	entry['name'] = request.form['name']
    	entry['email'] = request.form['email']
    	if 'phone' in request.form:
    		entry['phone'] = request.form['phone']
    	else:
    		entry['phone'] = ""
    	for m in entry:
    		print(entry[m])
    	flash('Thank you! We will call to schedule an interview.')
    	redirect('/sign_up')
    return render_template('sign_up.html', errors=errors)

@app.route('/founders')
def founders():
    errors = []
    return render_template('founders.html', errors=errors)

@app.route('/gallery')
def gallery():
	errors = []
	return render_template('gallery.html', errors=errors)

if __name__ == '__main__':
    app.run(debug=True)
