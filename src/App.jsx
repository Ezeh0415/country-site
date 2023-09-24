import './App.css'
import './scss/App.scss'
import Template from './public/template'
import Head from './public/Head'
import Body from './public/Body'
import { useEffect, useState } from "react";
import axios from "axios";




function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        // Extract flags from the API response
        const flags = response.data.map((country) => country.flags.png);

        setCountries(flags);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);
  

  return (
    <>
      {/* <Template /> */}
      {isLoading ? (
        <div>loading...</div>
        ) : 
        error ? (<div><h2>error check network conection</h2></div>
        ) : countries ? (
          <div>
            <Head />
            <Body countries={countries}/>
          </div>
        ) : (
           <div>
            <p>no data to display</p>
           </div>
        )}
    </>
  )

}

export default App
