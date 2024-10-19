"use client"

import React, { useState } from 'react';
import ItemList from './item-list';
import Link from 'next/link';
import NewItem from "./new-item";
import itemsData from "./items.json"; // import items from the items.json JSON file





export default function Page() {

  // Initialize state with items from items.json
  const [items, setItems] = useState(itemsData);
  
  // Event handler to add a new item
  const handleAddItem = (NewItem) => {
    setItems((prevItems) => [...prevItems, NewItem]);
  };

  


  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className=" max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={items}/>


        <Link href="http://localhost:3000/">
              <p className="font-bold hover:text-blue-500 text-[20px]">Back</p>
        </Link>
      </div>
    </main>


  );
}




