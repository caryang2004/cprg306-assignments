// In item.js, create a functional component named Item. 
// This component should accept name, quantity, and category as props and display them in a list item element. 
// Use Tailwind classes for styling.

// item.js

import React from "react";

const Item = ({name, quantity, category}) =>{
    return(
        <li className="flex items-center justify-between">
            <div className="flex w-full h-full">
            <div className="flex-1 border border-sky-500 border-r-gray-300 bg-gray-300">
                <h3 className="text-lg font-semibold text-blue-600">Name: {name}</h3>
                <p className="text-sm text-green-500">Category: {category}</p>

            </div>
            <div className="border border-sky-500 border-l-gray-300 bg-gray-300 ">
            <span className="text-xl font-medium">Quantity: {quantity}</span></div>
            </div>
        </li>
        /*<div className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2"></div>*/
    );
};

export default Item;
