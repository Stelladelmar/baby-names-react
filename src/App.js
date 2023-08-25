import {useState} from "react"

import './App.css';
import { names } from "./names"

import NameCard from"./components/NameCard";
import SearchInput from "./components/SearchInput";

function App() {
  const [namesList, setNamesList] = useState(names)
  const [searchInput, setSearchInput] = useState ("")
  
  const handleSearch = (searchQuery) => {
    setSearchInput(searchQuery)
    const babyFilter = names.filter((baby) => {
      return baby.name.toLowerCase().match(searchQuery.toLowerCase())
    })
    setNamesList(babyFilter)
  }
  
  
  return (
    <div className = "App">
      <div className = "container">
      <SearchInput searchInput ={searchInput} handleSearch={handleSearch}/>
        <div className ="name-container">
          {namesList
          .sort((a,b)=> a.name.localeCompare(b.name))
          .map((name)=>{
            return(
              <NameCard key={name.id} data ={name} />
            )
          })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
