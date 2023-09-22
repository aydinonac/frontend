import React from "react"
import {useState, useEffect} from "react"

export default function App() {
    const [categories, setCategories] = useState([])
    const [items, setItems] = useState([]);
    const [selection, setSelection] = useState(null)

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
            {/* Show Selected item */}
            <h1 style={{color: 'blue'}}> My Selection</h1>
            <hr></hr>
            {selection ? <h3 style={{color: 'purple'}}>
                {'"' + selection.name + '"' + " by " + selection.description}</h3> :
                <h2 style={{color: 'red'}}>Click a 'Select' button to choose an item</h2>}
            <hr></hr>
            {/* List all categories */}
            <h1 style={{color: 'blue'}}> My Categories</h1>
            <hr></hr>
            {categories.map(category => (
                <p>
                    {"Category " + category.id + " = " + category.name}
                </p>
            )
            )} 
            <hr></hr>
            {/* List all items */}
            <h1 style={{color: 'blue'}}> My Items</h1>
            <hr></hr>
            {items.map(item => (
                <>
                    <p style={{color: 'red'}}>{"My item number: " + item.id}</p>
                    <p>{"Name: " + item.name}</p>
                    <p>{"Price: " + item.price}</p>
                    <p>{"Description: " + item.description}</p>
                    <p>{"Category: " + item.category.name}</p>
                    <button style={{background:"turquoise"}} onClick ={ () => {setSelection(item)}}>Select</button>
                    <hr></hr>
                </>
                )
            )}      
        </div>
    )
}