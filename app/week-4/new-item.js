"use client"

import { useState } from "react"


export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

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

    let buttonStyles ="px-4 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded disabled:bg-gray-400"
    
    return(
        // <main className="bg-black">
        // justify-center
        <div className="flex flex-col items-center justify-start space-y-4 bg-black h-screen"> 
      
            <div className="flex justify-between items-center p-4 bg-white border-2 border-gray-500 rounded-lg w-[200px] h-[60px] ">

                <span className="text-xl">{quantity}</span>
                <div className="flex space-x-1">
                    <button
                    className={buttonStyles}
                    onClick={decrement}
                    disabled={quantity === 1}
                    > - </button>
            
                    <button
                    className={buttonStyles}
                    onClick={increment}
                    disabled={quantity === 20}
                    > + </button>
                </div>
            </div>
        </div>
    );
}
