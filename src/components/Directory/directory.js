import React from "react";
import ShopNewArrivals from "../../assets/shopNewArrivals.jpeg";
import ShopTops from "../../assets/shopTops.jpeg";
import ShopBottoms from "../../assets/shopBottoms.jpeg";
import ShopDresses from "../../assets/shopDresses.jpeg";
import ShopShoes from "../../assets/shopShoes.jpeg";
import ShopOuterwear from "../../assets/shopOuterwear.jpeg";
import ShopMasks from "../../assets/shopMasks.jpeg";

import "./directory.styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div
        className="item"
        style={{
          backgroundImage: `url(${ShopNewArrivals})`,
        }}
      >
        <a>New Arrivals</a>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${ShopTops})`,
        }}
      >
        <a>Tops</a>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${ShopBottoms})`,
        }}
      >
        <a>Bottoms</a>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${ShopDresses})`,
        }}
      >
        <a>Dresses</a>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${ShopShoes})`,
        }}
      >
        <a>Shoes</a>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${ShopOuterwear})`,
        }}
      >
        <a>Outer Wear</a>
      </div>
      <div
        className="item"
        style={{
          backgroundImage: `url(${ShopMasks})`,
        }}
      >
        <a>Masks</a>
      </div>
    </div>
  );
};

export default Directory;
