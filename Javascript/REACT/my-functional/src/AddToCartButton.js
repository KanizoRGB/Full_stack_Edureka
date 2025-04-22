import { color } from "chart.js/helpers";
import React from "react";

function AddToCartButton(){
  const handleClick = () => {
    alert("Item added to cart!");
  };

  return (
  <button onClick={handleClick} style={Styles.button}>
    Add to Cart
    </button>
);
}

const Styles = {
    button:{
    padding:"10px",
    backgroundColor:"yellow",
    color:"white",
    border:"none",
    borderRadius:"5px",
    cursor:"pointer",   
    },
};

export default AddToCartButton;
