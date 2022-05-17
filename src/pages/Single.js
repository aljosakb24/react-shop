import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";

const Single = ({ items, cart, setCart }) => {
  let params = useParams();
  const qty = useRef(0);

  const addToCart = () => {
    let newCartItem = {
      id: items[params.singleID].id,
      title: items[params.singleID].title,
      price: items[params.singleID].price,
      desc: items[params.singleID].desc,
      qty: qty.current.value,
      img: items[params.singleID].img,
    };

    setCart((prev) => {
      return [...prev, newCartItem];
    });
  };

  let options = [];
  for (let i = 1; i <= items[params.singleID].qty; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <>
      <section className="shopHeading text-center bg-light py-5">
        <h2 className="fw-bolder">Single product page</h2>
        <p className="fw-lighter">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>

      <section className="single py-5">
        <article className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={"../" + items[params.singleID].img}
                className="img-fluid shadow-lg border border-text rounded-3"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="price d-flex justify-content-between">
                <h5 className="card-title">{items[params.singleID].title}</h5>
                <h5>${items[params.singleID].price}</h5>
              </div>
              <select
                ref={qty}
                className="form-select bg-light d-flex"
                aria-label="Default select example"
              >
                {options}
                {/* <option selected>Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option> */}
              </select>
              <hr />
              <p className="card-text">{items[params.singleID].desc}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nam sequi provident nihil omnis distinctio laudantium
                ut, tempora quidem deleniti?
              </p>
              <hr />
              <Link onClick={addToCart} className="button" to="/">
                Add to cart
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Single;
