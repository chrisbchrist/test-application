import React, {FunctionComponent} from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";

export const Cart: FunctionComponent<{ count: number }> = ({ count }) => {

  return (
    <div className="cart__wrapper">
      {count > 0 && <div className="cart__count">{count}</div>}
      <FaShoppingCart className="cart__icon" />
    </div>
  );
};
