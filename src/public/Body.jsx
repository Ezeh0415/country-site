import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Body = () => {
    const [data,setData] = useState(null)
    const [flags, setFlags] = useState(null);
    const [lang, setLang ] = useState(null)
    const [continents, setContinets] = useState(null)
    const [region, setRegion] = useState(null)
    const [subregion, setSubRegion] = useState(null)
    const [timezone, setTimezone] = useState(null)
    const [name, setName] = useState([]);


    useEffect(() => {
        // Fetch data from the API
        axios
          .get('https://restcountries.com/v3.1/all')
          .then((response) => {
            // Extract flags from the API response
            const flags = response.data.map((country) => country.flags.png);
            //const name = response.data.map((country) => country.name.common);
            const lang = response.data.map((country) => country.languages);
            const continents = response.data.map((country) => country.continents);


            setData(response.data)
            setFlags(flags);
            setLang(lang)
            setContinets(continents)
            //setName(name)
          })
          .catch((error) => {
            
          });
      }, []);

      const [filterData, setFilterData ] = useState([]);
      const [query,setQuery] = useState('');

      useEffect(() => {
        // Fetch data from the API
        axios
          .get('https://restcountries.com/v3.1/all')
          .then((response) => {
            // Extract flags from the API response
             const name = response.data.map((country) => country.name.common);

            //setName(response.data)
             setName(name)
             setFilterData(name)
          })
          .catch((error) => {
            
          });
      }, []);

      const handleSearch = (query) => {
        setQuery(query);

        const filterd = name.filter((item) =>
         item.toLowerCase().includes(query.toLowerCase())
        );

        setFilterData(filterd)
      }

console.log(flags)
    
    return ( 
        <>
         <div className="body-section">
            <div className="drawer">
                    <>
                            <input 
                              type="text" 
                              placeholder="Search" 
                              value={query}
                              onChange={(e) => handleSearch(e.target.value)}
                            />
                    </>
                <ul>
                    {name  && filterData.map( (names,nameIndex) => 
                        <div className="next" key={nameIndex}>
                            <div key={nameIndex}>
                            <a href="/">{names}</a>
                            </div>
                        </div>
                    )}
                </ul>
            </div>
            <div className="flags">
               
                {flags  && flags.map((flag, flagindex) => 
                  <div className="card" key={flagindex}>
                
                            <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={flag}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                   
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                    </Card>
                         
                  </div>
                    
                )}
            </div>
         </div>
        </>
     );
}
 
export default Body;