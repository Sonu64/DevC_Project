from flask import Flask, render_template, session, request, redirect
import pyrebase
app = Flask(__name__)
config = {
    "apiKey": "AIzaSyBaKDrFEaJ4TcIMI0Uo_SxpHZ3N0BnLBug",
    "authDomain": "devcproject-9968f.firebaseapp.com",
    "projectId": "devcproject-9968f",
    "storageBucket": "devcproject-9968f.appspot.com",
    "messagingSenderId": "259891437629",
    "appId": "1:259891437629:web:4ced70228cf40a727c0a54",
    "measurementId": "G-M7SXRSPHGM",
    "databaseURL": ""
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
app.secret_key = "thisisasecretkeyfordevcproject202226Batch"


@app.route("/", methods = ["GET", "POST"])
def index():
    # SIGN IN
    if request.method == "POST" and ('login' in request.form):
        print("LOGIN")
        email = request.form.get("email")
        password = request.form.get("password")
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            session['user'] = email
            return render_template('login.html')
        except:
            return "Invalid Credentials !"
    # REGISTRATION
    elif request.method == "POST" and ('reg' in request.form):
        print("REG")
        try:
            email = request.form.get("email")
            password = request.form.get("password")
            auth.create_user_with_email_and_password(email, password)
        except:
            return "Most Probably the Credentials already exist !!"
        return render_template("index.html")
    # NO REQUEST
    else:
        return render_template("index.html")

@app.route("/logout", methods=["GET", "POST"])
def logout():
    session.pop('user')
    return redirect('/')
    
@app.route('/premium', methods=["GET", "POST"])
def premium():
    return render_template("premium.html")

@app.route('/contact', methods=["GET", "POST"])
def contact():
    return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True, port=1111)