"use client"

// In item-list.js, create a functional component named ItemList. 
// Inside this component, copy paste the following item objects each with name, quantity, and category properties. 
// Render these items using the Item component you just created, passing item data as props.

// item-list.js

import React, { useState } from 'react';
import Item from './item';
// import itemsData from './items.json'; // import items from the items.json JSON file



const ItemList = ({items}) => { // Accept items as a prop
    
  // const [items] = useState(itemsData);
  // console.log(items);
  const [sortBy, setSortBy] = useState("name"); // Initialize sortBy state with "name"

  // Function to sort items based on the sortBy preference
  // Creates a copy of the original array
  // if no ..., It creates a new array with the items array as a single element inside it
  // const items = [1, 2, 3];
  // const spreadCopy = [...items]; // [1, 2, 3]
  // const nestedArray = [items];   // [[1, 2, 3]]
  const sortedItems = [...items].sort((a, b) => { 
    if (sortBy === "name"){
      return a.name.localeCompare(b.name);  // Sorted by name
    } else if (sortBy === "category"){
      return a.category.localeCompare(b.category);  // Sorted by category
    } else {
      return 0; // No sorting
    }
  });

  // Conditional button style based on sorting preference
  const buttonStyle = (active) =>
    `px-4 py-2 m-2 border rounded ${active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`;

  // Function to group and sort items by category
  const groupedItemsByCategory = items.reduce((acc, item) => {
    // Create a category key if it doesn't exist
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // Sort categories alphabetically and their items alphabetically as well
  const sortedGroupedItemsByCategory = Object.keys(groupedItemsByCategory)
    .sort((a, b) => a.localeCompare(b))  // Sort categories
    .map((category) => ({
      category,
      items: groupedItemsByCategory[category].sort((a, b) => a.name.localeCompare(b.name)),  // Sort items within category
  }));

  return (
    <div>
      {/* Sort Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => setSortBy('name')}
          className={buttonStyle(sortBy === 'name')}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={buttonStyle(sortBy === 'category')}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={buttonStyle(sortBy === 'group')}
        >
          Sort by Grouped Category
        </button>
      </div>

      {/* Render sorted or grouped items */}
      <ul className="space-y-4">
        {sortBy === 'group' ? (
          // Render grouped items by category
          sortedGroupedItemsByCategory.map((group) => (
            <li key={group.category}>
              <h2 className="text-xl font-bold capitalize text-blue-600">{group.category}</h2>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </li>
          ))
        ) : (
          // Render sorted items
          sortedItems.map((item) => (
            <Item
              key={item.id}   // Unique key using item id
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))
        )}
      </ul>    
    </div>
  );
};

export default ItemList;


