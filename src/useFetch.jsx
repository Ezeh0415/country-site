import { useEffect, useState } from "react";
import axios from "axios";

    
    
          
          const useFetch = (url) => {
            const [data, setData] = useState([]);
            const [isLoading, setIsLoading] = useState(true);
            const [ error, setError ] = useState(null);


            useEffect(() => {
              axios
              .get(url)
              .then((response) => {
                // Destructure the "flags" field from the response data
                const { datas } = response.data;
                setData(datas);
                setIsLoading(false);
              })
              .catch((error) => {
                setError(true)
                setIsLoading(false);
              });
            }, [url]);
          
            return { data, isLoading ,error};
            

          };
              
           
            


        
    
    export default useFetch;