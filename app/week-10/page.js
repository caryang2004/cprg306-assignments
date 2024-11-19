"use client"


// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";



export default function SignInPage(){
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    async function handleSignIn(){
        try {
            // Sign in to Firebase with GitHub authentication
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    async function handleSignOut(){
        try {
            // Sign out of Firebase
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }

    };


    // // If user is null (not yet loaded), show a loading state or nothing
    // if (user === null) return <p>Loading...</p>;

    return(
        <main className="m-5">
            <header>
                <h1 className="text-3xl text-center">Firebase Auth</h1>
            </header>
            { user ? (
                <div>
                    {/* Display some of the user's information */}
                    <div>
                        <p>Welcome, {user.displayName} ({user.email})</p>
                        <Link href="/week-10/shopping-list">Continue to your Shopping List</Link>
                    </div>

                    <div>
                        <button
                            type="button"
                            className="text-lg bg-blue-600 text-white p-2 rounded py-2 px-4"
                            onClick={handleSignOut}
                        >Sign Out</button>
                    </div>
                </div>
            ) : (
                <div>
                    <div>
                        <button
                            type="button"
                            className="text-lg bg-blue-600 text-white p-2 rounded py-2 px-4"
                            onClick={handleSignIn}
                        >Sign In</button>
                    </div>
                </div>
            ) }


            
        </main>
    );
}




 

 

 
