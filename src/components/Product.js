import { useEffect, useState } from "react";
import { ethers } from "ethers";

// Components
import Rating from "./Rating";

import close from "../assets/close.svg";

const Product = ({ item, provider, account, dappazon, togglePop }) => {
  const [order, setOrder] = useState(null);
  const buyHandler = async () => {
    console.log("buying");
  };

  return (
    <div className="product">
      <div className="product__details">
        <div className="product__image">
          <img src={item.image} alt="Product" />
        </div>
        <div className="product__overview">
          <h1>{item.name}</h1>
          <Rating value={item.rating} />
          <hr />
          <p>{item.address}</p>
          <h2>{ethers.utils.formatUnits(item.cost.toString(), "ether")}</h2>
          <hr />
          <h2>Overview</h2>
          <p>
            {item.description}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
            tincidunt felis. Morbi efficitur quis nulla ut laoreet. Suspendisse
            feugiat sit amet tortor at gravida. Curabitur dictum scelerisque
            fermentum. Nulla pulvinar pulvinar suscipit. Vestibulum quam dolor,
            molestie vitae consequat vel, porta imperdiet massa. Suspendisse
            potenti. Cras mattis metus felis. Duis ut augue ultricies, vulputate
            mauris ut, congue lectus. Nunc commodo condimentum nisl quis tempor.
            Nunc pulvinar erat vel neque venenatis, non laoreet dolor tincidunt.
            Etiam suscipit ipsum ut sapien eleifend lobortis. Nam ultricies
            risus id ante sodales accumsan. Vivamus non nunc dolor.
          </p>
        </div>

        <div className="product__order">
          <h1>{ethers.utils.formatUnits(item.cost.toString(), "ether")} ETH</h1>
          <p>
            FREE delivery
            <br />
            <strong>
              {new Date(Date.now() + 345600000).toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </strong>
          </p>

          {item.stock > 0 ? <p>In Stock.</p> : <p>Out of Stock.</p>}

          <button className="product__buy" onClick={buyHandler}>
            Buy Now
          </button>
          <p>
            <small>Ships from</small> Dappazon
          </p>
          <p>
            <small>Sold by</small> Dappazon
          </p>

          {order && (
            <div className="product__bought">
              Item bought on <br />
              <strong>
                {new Date(
                  Number(order.time.toString() + "000")
                ).toLocaleDateString(undefined, {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </strong>
            </div>
          )}
        </div>

        <button onClick={togglePop} className="product__close">
          <img src={close} alt="Close" />
        </button>
      </div>
    </div>
  );
};

export default Product;
