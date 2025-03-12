import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [maps, setMaps] = useState([]);


  //fetch the data
  useEffect(()=>{
    const getData= async () =>{
      try{
        const response = await axios.get(`https://xcountries-backend.azurewebsites.net/all`);
        setMaps(response.data);
        
      }catch(error){
        console.error('Error fetching data:', error);
      }
    }


    getData();
  },[])




  return (
      <>
      </>
    
  );
}

export default App;
