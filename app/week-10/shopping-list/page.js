"use client"

import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import Link from 'next/link';
import NewItem from "./new-item";
// import itemsData from "./items.json"; // import items from the items.json JSON file
import MealIdeas from './meal-ideas'; 
import { useUserAuth } from "../_utils/auth-context";

import { addItem, getItems } from '../_services/shopping-list-service';





export default function Page() {

  const {user} = useUserAuth();

  // Initialize state with items from items.json
  // const [items, setItems] = useState(itemsData);
  const [items, setItems] = useState([]);

  // Event handler to add a new item
  // const handleAddItem = (newItem) => {
  //   setItems((prevItems) => [...prevItems, newItem]);
  // };

  // Async function to load shopping list items from Firestore
  const loadItems = async () => {
    if (!user) return;
    try {
      const fetchedItems = await getItems(user.uid); // Fetch items for the current user
      setItems(fetchedItems); // Update state with the fetched items
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };


  
  // useEffect(() => {
  //   loadItems(); // Call loadItems only if user is available
  // }, [user]); // Depend on user

  useEffect(() => {
    if (user) {
      loadItems(); // Call loadItems only if user is available
    }
  }, [user]); // Depend on user

  const handleAddItem = async (newItem) => {
    if (!user) return;
    try {
      // Save the new item to Firestore for the current user
      const newItemId = await addItem(user.uid, newItem);

      // Update the local state with the new item (add Firestore ID)
      setItems((prevItems) => [
        ...prevItems,
        { ...newItem, id: newItemId }, // Add the new item's ID
      ]);

      console.log("Item added successfully:", newItemId);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  // State to hold the name of the selected item from the shopping list
  const [selectedItemName, setSelectedItemName] = useState("");
  
  // Event handler to extract the name of the selected item, cleans it up, and updates the selectedItemName state.
  const handleItemSelect = (item) => {
    // console.log("item name: " + item.ingredient.replace(/[^a-zA-Z ]/g, '').trim());
    console.log("Selected item:", item);

    // if (!item || !item.ingredient) {
    //   console.error("Item or ingredient is undefined!");
    //   return;
    // }
    // carson: have problem on delete the icon
    // const cleanedName = item.ingredient 
    const cleanedName = item.name
      .split(",")[0]
      .replace(/([^a-zA-Z ][\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '')
      .trim();
    // console.log("Cleaned name:", cleanedName);
    setSelectedItemName(cleanedName);
  };

  

  if(!user){
    return(
        <main><p>You must be logged in first.</p></main>
  );
}

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




