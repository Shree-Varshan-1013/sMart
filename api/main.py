from fastapi import FastAPI, HTTPException
from tinydb import TinyDB, Query
from pydantic import FileUrl
from fastapi.middleware.cors import CORSMiddleware
import uvicorn


app = FastAPI()


# origins = [
#     "http://localhost:3000",
#     "https://localhost:3000",
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )


def connect_to_products():
    return TinyDB("../db/products.json")


def connect_to_teammates():
    return TinyDB("../db/teammates.json")


@app.get("/products")
async def all_products():
    db = connect_to_products()
    products = db.all()
    return products


@app.get("/product/{ID}")
async def product_by_id(ID: int):
    db = connect_to_products()
    Product = Query()
    product = db.search(Product.id == ID)[0]
    if product == []:
        raise HTTPException(status_code=404, detail="Item not found")
    return product


@app.get("/products/{category}")
async def products_by_category(category: str):
    db = connect_to_products()
    category = category.upper()
    Product = Query()
    products = db.search(Product.category == category)
    return products


@app.post("/product/add/")
def add_product(
    name: str,
    brand: str,
    price: int,
    image: FileUrl,
    description: str,
    category: str,
):
    db = connect_to_products()
    product = {
        "id": len(db.all()) + 1,
        "name": name.title(),
        "brand": brand,
        "price": price,
        "image": image,
        "description": description,
        "category": category.upper(),
    }
    db.insert(product)
    return product


@app.get("/teammates")
async def all_teammates():
    db = connect_to_teammates()
    teammates = db.all()
    return teammates


@app.get("/teammate/{ID}")
async def get_teammate_by_id(ID: int):
    db = connect_to_teammates()
    Teammate = Query()
    teammate = db.search(Teammate.id == ID)[0]
    if teammate == []:
        raise HTTPException(status_code=404, detail="Teammate ID not found")
    return teammate


@app.post("/teammate/add/")
def add_teammate(
    name: str,
    role: str,
    image: FileUrl,
    description: str,
):
    db = connect_to_teammates()
    teammate = {
        "id": len(db.all()) + 1,
        "name": name.title(),
        "role": role,
        "image": image,
        "description": description,
    }
    db.insert(teammate)
    return teammate


@app.get("/user/profile")
async def user_profile(name: str):
    return {
        "name": name,
        "image": f"https://avatars.dicebear.com/api/initials/{name}.svg",
    }


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
