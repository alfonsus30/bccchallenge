import React from 'react'
import "./SearchBox.css"
function SearchBox() {
    return (
        <div className="search-box">
            <input type="text" placeholder="Search image..."></input>
            <button>Search</button>
        </div>
    )
}

export default SearchBox
