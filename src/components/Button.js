import React from "react";

const Button = (props) => {
  return (
    <button className="bg-sky-600 text-white py-2 px-6 rounded text-xl  hover:bg-sky-400 duration-500">
      {props.children}
    </button>
  );
};

export default Button;
