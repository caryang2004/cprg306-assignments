// 1. Import Necessary Hooks and Begin Component Definition
// Since this component uses useState and useEffect, start with the "use client" directive.
// Import the useEffect and useState hooks from react.
// This component should receive a single prop: ingredient.

"use client"
import { useState, useEffect } from 'react';

// 2. Define State Variables
// Inside your component, define a state variable using the useState hook: meals. 
// meals will hold the list of meal ideas fetched from the API. Initialize it to an empty array.
const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);

    // 3. Define API Fetching Function
    // Next, outside your component, define a function called fetchMealIdeas, which fetch data from the API. 
    // fetchMealIdeas should take an ingredient as a parameter, make a fetch request to the TheMealDB API, 
    // and return the meals that include that ingredient.
    // The API endpoint for fetching meal ideas is: https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}. 
    // For example, if the ingredient is "chicken", the API endpoint would be: 
    // https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken. 
    // The API returns a list of meals that include the specified ingredient. Each meal has three properties:
    // idMeal: id of the meal
    // strMeal: name of the meal
    // strMealThumb: URL of an image of the meal

    const fetchMealIdeas = async (ingredient) => {
        try{
            const response =  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];
        } catch (err){
            throw new Error(`No meal ideas found for ${ingredient}`);
        }
        
    };

    // 4. Define Load Function
    // Next, inside your component, define a function called loadMealIdeas. 
    // This function should call fetchMealIdeas with the ingredient prop and store the result in the meals state variable.
    const loadMealIdeas = async () => {
        setError(null);
        try {
            const mealIdeas = await fetchMealIdeas(ingredient);
            // console.log("Fetched meal ideas:", mealIdeas);
            setMeals(mealIdeas);
        } catch(err){
            setError(err.message);
        }
    };

    // 5. Use the useEffect Hook
    // Use the useEffect hook to call loadMealIdeas whenever the ingredient prop changes.
    useEffect(() => {
        if (ingredient){
            // console.log("useEffect");
            // console.log("Fetched meal ideas:", ingredient);
            loadMealIdeas();
        }
    }, [ingredient]);

    // 6. Render the Component
    // Finally, define your component's render method. This should return a div that includes a header and a list of meals. 
    // Each meal should be a list item that displays the meal's name.
    return (
        <div>
            {meals.length===0 ? (
                <h2>No meal ideas found for "{ingredient}"</h2>
            ) : (
                <>
                    <h2>Here are some meal ideas using "{ingredient}"</h2>
                    
                    {/* console.log(meals) */}

                    <ul>
                        
                        {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                            <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                        </li>
                        ))}
                    </ul>  
                </>
            )}          
        </div>
    );
  
};

export default MealIdeas;
