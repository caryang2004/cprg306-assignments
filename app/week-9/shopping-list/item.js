// In item.js, create a functional component named Item. 
// This component should accept name, quantity, and category as props and display them in a list item element. 
// Use Tailwind classes for styling.

// item.js


// week-8
// 3. Modify item.js
// The changes in the item.js file from Week 6 to Week 7 are relatively straightforward with just one main change. 
// The goal is to make each item in the list clickable so that when a user clicks on an item, it can trigger an action in the parent component.

// 3.1 Update Component Definition: Update your Item functional component's definition to accept an additional prop called onSelect.

// 3.2 Add onClick Handler to List Item: In the returned JSX, add the onClick prop. This makes the entire list item clickable and the provided onSelect function 
// will be triggered when a user clicks on the item.

import React from "react";

const Item = ({name, quantity, category, onSelect}) =>{
    return(
        <li className="flex items-center justify-between cursor-pointer" 
        onClick={() => onSelect({name, quantity, category})}
        >
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
