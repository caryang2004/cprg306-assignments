import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Add the getItems function
// This async function retrieves all items for a specific user from Firestore. 
// It takes a userId as a parameter, and uses it to query a subcollection named items under a 
// document in the users collection with the same userId. It fetches the documents in the items subcollection, 
// and for each document, it adds an object to the items array containing the document ID and data. It then returns this items array.
export async function getItems(userId){

    try {
        const items = [];
        // Reference to the 'items' subcollection for the given user
        const itemsRef = collection(db, "users", userId, "items");
        
        const getItemsQuery = query(itemsRef);

        // Fetch all documents in the subcollection
        const querySnapshot = await getDocs(getItemsQuery);
        
        // Map each document into an array with its ID and data
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });
        
        return items;
        // itemsListStateSetter(items);
    } catch (error) {
        console.error("Error fetching items:", error);
        throw new Error("Failed to fetch items.");
    }
}

// Add the addItem function
// This function adds a new item to a specific user's list of items in Firestore. 
// It takes a userId and an item as parameters. It uses the userId to reference the items 
// subcollection of a document in the users collection, and then adds the item to this subcollection. 
// It returns the id of the newly created document.
export async function addItem(userId, itemObj) {
    try {
        // Reference to the 'items' subcollection for the given user
        const itemsRef = collection(db, "users", userId, "items");
        
        // Add the item to the subcollection
        const docRef = await addDoc(itemsRef, itemObj);
        
        // Return the ID of the newly created document
        // return docRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
        throw new Error("Failed to add item.");
    }
}


