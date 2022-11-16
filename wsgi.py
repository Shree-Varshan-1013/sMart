from flask import Flask, render_template, request, redirect, url_for, flash
from tinydb import TinyDB, Query

app = Flask(__name__)
db = TinyDB("./products.json")


@app.route("/")
def home():
    products = db.all()
    return render_template("index.html", products=products)


@app.route("/about-us/")
def about():
    return render_template("about-us.html")


@app.route("/contact/")
def contact():
    return render_template("contact.html")


@app.route("/product/<product_id>")
def product(product_id):
    User = Query()
    product = db.search(User.id == int(product_id))[0]
    return render_template("product.html", product=product)


@app.route("/auth/sign-in")
def sign_in():
    return render_template("sign-in.html")


@app.route("/auth/sign-up")
def sign_up():
    return render_template("sign-up.html")


if __name__ == "__main__":
    app.run(debug=True, port=5000, host="localhost")
