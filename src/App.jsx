import { useState } from "react"
import Navbar from "./Components/navbar"
import Newsboard from "./Components/Newsboard"

const App = () => {

  const[category,setCategory] = useState("general")
  const[country,setCountry] = useState("in")
  const [searchQuery, setSearchQuery] = useState("");


  return (
    <>
    <Navbar setCategory={setCategory} setCountry={setCountry} setSearchQuery={setSearchQuery} />
    <Newsboard category={category} country={country} searchQuery={searchQuery}/>
    </>
  )
}

export default App