"use client"

import { useState } from "react"


export default function NewItem(){

    const [quantity, setQuantity] = useState(1);
    // step 2: Initialize State Variables
    const [name, setName] = useState("");   // Initialize as empty string
    const [category, setCategory] = useState("produce");    // Set default as 'produce'

    const increment  = () =>{

        let currentQuantity = quantity;
        if(currentQuantity<20){
            setQuantity(currentQuantity + 1);
        }
    }

    const decrement  = () =>{

        let currentQuantity = quantity;
        if(currentQuantity>1){
            setQuantity(currentQuantity - 1);
        }
    }

    // step 3: Form Submission Handler
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form's default behavior

        // Create an item object with current state values
        const item = {
        name: name,
        quantity: quantity,
        category: category
        };

        // Log the item object to the console
        console.log("Item added:", item);

        // Display an alert with the current state
        alert(`Item Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        // Reset the state to initial values
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    let buttonStyles ="px-4 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded disabled:bg-gray-400"
    
    return(
        // <main className="bg-black">
        // justify-center
        <div className="flex flex-col items-center justify-start space-y-6 p-10 bg-gray-200 h-screen"> 
            
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Item</h1>

            <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-6" 
                    onSubmit={handleSubmit}>

                {/* Item Name */}
                <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="font-medium text-gray-700">Item Name</label>
                <input
                    id="name"
                    type="text"
                    className="p-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter item name"
                    required
                />
                </div>

                {/* Quantity */}
                {/* <div className="flex justify-between items-center p-4 bg-white border-2 border-gray-500 rounded-lg w-[200px] h-[60px] "> */}
                <div className="flex justify-between items-center">
                    <label htmlFor="quantity" className="font-medium text-gray-700">
                        Quantity:
                    </label>
                    <div className="flex items-center space-x-2">
                        <button
                        type="button"  // Prevents the form submission
                        className={`${buttonStyles} text-lg px-3 py-2`}
                        onClick={decrement}
                        disabled={quantity === 1}
                        > - </button>

                        <span className="text-lg font-bold text-gray-700">{quantity}</span>

                        <button
                        type="button"  // Prevents the form submission
                        className={`${buttonStyles} text-lg px-3 py-2`}
                        onClick={increment}
                        disabled={quantity === 20}
                        > + </button>
                    </div>
                </div>

                {/* Category */}
                <div className="flex flex-col">
                <label htmlFor="category" className="font-medium text-gray-700">Category</label>
                <select
                    id="category"
                    className="p-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-bold shadow-lg">
                Add Item
                </button>
            </form>
        </div>
    );
}
