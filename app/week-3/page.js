import Item from "./item";
// import Item-list from "./item-list";
// import React from 'react';
import ItemList from './item-list';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className=" max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Shopping List
        </h1>
        <ItemList />
        <Link href="http://localhost:3000/">
              <p className="font-bold hover:text-blue-500 text-[20px]">Back</p>
        </Link>
      </div>
    </main>


  );
}




