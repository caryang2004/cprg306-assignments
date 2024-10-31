"use client"

import React, { useState } from 'react';
import ItemList from './item-list';
import Link from 'next/link';
import NewItem from "./new-item";
import itemsData from "./items.json"; // import items from the items.json JSON file
import MealIdeas from './meal-ideas'; 





export default function Page() {

  // Initialize state with items from items.json
  const [items, setItems] = useState(itemsData);
  
  // Event handler to add a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // State to hold the name of the selected item from the shopping list
  const [selectedItemName, setSelectedItemName] = useState("");
  
  // Event handler to extract the name of the selected item, cleans it up, and updates the selectedItemName state.
  const handleItemSelect = (item) => {
    console.log("item name: " + item.ingredient.replace(/[^a-zA-Z ]/g, '').trim());
    
    // carson: have problem on delete the icon
    const cleanedName = item.ingredient 
      .split(",")[0]
      .replace(/([^a-zA-Z ][\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '')
      .trim();
    setSelectedItemName(cleanedName);
  };


  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className=" max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Shopping List
        </h1>
        
        <div className = "flex space-x-8">
          {/* Left side: NewItem and ItemList components */}
          <div className='w-[50%] h-[75vh] overflow-y-auto border border-gray-300 p-4 rounded-lg bg-white'>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        
          {/* Right side: MealIdeas component */}
          <div className='w-[50%] h-[75vh] overflow-y-auto border border-gray-300 p-4 rounded-lg bg-white'>
            {selectedItemName && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Meal Ideas for {selectedItemName};
                </h2>
                <MealIdeas ingredient={selectedItemName}/>
              </div>
            )};
          </div>
        </div>
        

        <Link href="http://localhost:3000/">
              <p className="font-bold hover:text-blue-500 text-[20px]">Back</p>
        </Link>
      </div>
    </main>


  );
}




