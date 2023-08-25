import React from 'react'
const SearchInput =({SearchInput, handleSearch}) => {
    return(
<div className ='search-container'>
<input 
className ="search-input"
type = "text"
placeholder='Search for a name'
onChange ={(e) => handleSearch(e.target.value)}
value = {SearchInput}
/>


</div>
    );




}

export default SearchInput;