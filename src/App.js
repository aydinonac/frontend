import React from "react"
import {useState, useEffect} from "react"

export default function App() {
    const [categories, setCategories] = useState([])
    const [items, setItems] = useState([]);

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
    useEffect(()=> {
        fetch ("http://localhost:3001/items/id")
        .then (response => response.json())
        // .then ???
    }, [])
    
    return (
        <div>
            <h1 style={{color: 'blue'}}> My Selection</h1>
            <hr></hr>
            {/* ??? */}
            <hr></hr>

            <h1 style={{color: 'blue'}}> My Categories</h1>
            <hr></hr>
            {categories.map(category => (
                <p>
                    {"Category " + category.id + " = " + category.name}
                </p>
            )
            )} 
            <hr></hr>

            <h1 style={{color: 'blue'}}> My Items</h1>
            <hr></hr>
            {items.map(item => (
                <>
                    <p style={{color: 'red'}}>{"My item number: " + item.id}</p>
                    <p>{"Name: " + item.name}</p>
                    <p>{"Price: " + item.price}</p>
                    <p>{"Description: " + item.description}</p>
                    <p>{"Category: " + item.category.name}</p>
                    <hr></hr>
                </>
            )
            )}      
        </div>
    )
}