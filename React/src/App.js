import React from 'react'
import Search from './components/Search';
import Navbar from './components/Navbar';
import { productSearch } from './services/ProductService';

function App() {
const [searchResults, setSearchResults] = useState([]);

async function handleSearch(query) {
    try {
      await productSearch(query).then(res=>{
        setSearchResults(res.data.result);
      })
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className="App">
    <Navbar handleSearch={handleSearch} />
    <Search searchResults={searchResults} />
  </div>
  )
}

export default App