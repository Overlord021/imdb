import React, { useEffect, useState } from 'react'
import TopImdbItem from './TopImdbItem/TopImdbItem'
import axios from 'axios';
// import { Link } from 'react-router-dom';
export const MyContext = React.createContext();

const TopImdb = () => {
    const [topten, setTopten] = useState([]);
    const [error, setError] = useState("");
    const fetchTopten = async () => {
      try {
        let res = await axios(
          "https://662e2b04a7dda1fa378c4088.mockapi.io/TopTen"
        );
        setTopten(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    useEffect(() => {
      fetchTopten();
    }, []);
    return (
      <>
        <MyContext.Provider value={{topten,error}}>
          <TopImdbItem/>
        </MyContext.Provider>
      </>
    )
  }
  
  export default TopImdb