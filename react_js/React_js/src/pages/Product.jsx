import React from "react";
import "../assets/t-shirt.png";

const Products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "t-shirt",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "t-shirt",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "t-shirt",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "t-shirt",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
];

function Product() {
  return (
    <>
      <div className="card">
        <p>{Products.id}</p>
        <img src={Products.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Products.title}</h5>
          <p className="card-text">{Products.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{Products.category}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            {Products.price}
          </a>
          <a href="#" className="card-link">
            {Products.rating}
          </a>
        </div>
      </div>
    </>
  );
}

export default Product;
