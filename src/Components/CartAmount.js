import React, { useState } from "react";
import CartMinusIcon from "./SvgIcons/CartMinusIcon";
import CartPlusIcon from "./SvgIcons/CartPlusIcon";

const CartAmount = () => {
  const [count, setCount] = useState(1);


  const handleSubtractOne = () => {
    setCount(count => Math.max(count - 1, 1));
 }

  const handleAddOne = () => {
    setCount(count => Math.min(count + 1, 3));
 }

 const handleOnChange = (event) => {
    setCount(event.target.value);
 }


  return (
    <div className="prouduct-addTocart counter">
      <button className={(count===1) ? "locked":""} onClick={handleSubtractOne}><CartPlusIcon /></button>
      <label htmlFor="input">
      <input id="input "type="text" value={count} onChange={handleOnChange} disabled />
      </label>
      <button className={(count===3) ? "locked":""} onClick={handleAddOne}><CartMinusIcon /></button>
    </div>
  );
};

export default CartAmount;
