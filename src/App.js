import React from "react"
import {useState, useEffect} from "react"

export default function App() {
    const [categories, setCategories] = useState([])
    const [items, setItems] = useState([]);
    // const [newCat, setNewCat] = useState([]);
    useEffect(()=> {
        fetch ("http://localhost:3001/categories")
        .then (response => response.json())
        .then (categoryData => {setCategories(categoryData)})
    }, [])
    useEffect(()=> {
        fetch ("http://localhost:3001/items")
        .then (response => response.json())
        .then (itemData => {setItems(itemData)})
    }, [])
    
    return (
        <div>
            <h1> My Categories</h1>
            {categories.map(category => (
                <p>
                    {"Category " + category.id + " = " + category.name}
                </p>
            )
            )} 
            {/* {setNewCat(categories.filter((x) => x.id === 2))} */}
            
            <h1> My Items</h1>
            {items.map(item => (
                <p>
                    {item.name + ", Price: "}
                    {item.price + ". Description: "}
                    {item.description + "; Category: "}
                    {/* {item.category_id} */}
                    {categories[item.category_id]}
                    {/* What I really want: equivalent sql query}
                    {SELECT categories.name
                    FROM categories 
                    INNER JOIN items
                    ON items.category_id = categories.id} */}
                </p>
            )
            )}      
        </div>
    )
}