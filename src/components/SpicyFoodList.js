import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
    const [foods, setFoods] = useState(spicyFoods);
    const [filterBy, setFilterBy] = useState("All");

    function handleAddFood() {
        const newFood = getNewSpicyFood();
        setFoods([...foods, newFood]);
        console.log(newFood);
    }

    function handleLiClick(id, index) {
        // Delete a food from the array
        //   const newArray = foods.filter(food => food.id !== id);

        // Update the heatlevel of the food clicked by the user using the index
        foods[index].heatLevel++;
        setFoods([...foods]);
    }

    const foodsToDisplay = foods.filter(food => {
        if (filterBy === "All") {
            return true;
        } else {
            return food.cuisine === filterBy;
        }
    });

    const foodList = foodsToDisplay.map((food, index) => (
        <li key={food.id} onClick={() => handleLiClick(food.id, index)}>
            {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
        </li>
    ));

    function handleFilterChange(event) {
        setFilterBy(event.target.value);
    }

    return (
        <div>
            <select name="filter" onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="American">American</option>
                <option value="Sichuan">Sichuan</option>
                <option value="Thai">Thai</option>
                <option value="Mexican">Mexican</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="French">French</option>
                <option value="Italian">Italian</option>
                <option value="Chinese">Chinese</option>
            </select>            

            <div>
                <button onClick={handleAddFood}>Add New Food</button>
                <ul>{foodList}</ul>
            </div>
        </div>
    );
}

export default SpicyFoodList;
