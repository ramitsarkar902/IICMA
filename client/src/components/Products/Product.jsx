import moment from "moment";
import React from "react";
import { AiFillShopping, AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ data }) => {
  return (
    <div className="product__wrapper flex justify-between">
      {/* <img src={data.img} alt="product__image" /> */}

      <div class="product-info flex flex-col w-[68%] justify-between">
        <div class="product-text flex flex-col">
          <h1>{data.title}</h1>
          <h2>{data.createdBy}</h2>
          <p>{data.desc}</p>
        </div>
        <div class="product-price-btn flex justify-between mt-3 mr-3">
          <p className="flex items-center">
            <span>Date of Release:</span>
            <span className="text-red-500">
              {" "}
              {moment(data.dateOfRelease).utc().format("DD-MM-YYYY")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
