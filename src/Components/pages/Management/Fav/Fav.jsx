import React, { useEffect, useState } from 'react'
import FavItem from './FavItem/FavItem'
import axios from 'axios';
export const MyContext = React.createContext();
const Fav = () => {
  const [favorite, setFavorite] = useState([]);
  const [error, setError] = useState("");
  const fetchFavorite = async () => {
    try {
      let res = await axios(
        "https://662e2b04a7dda1fa378c4088.mockapi.io/FanFav"
      );
      setFavorite(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchFavorite();
  }, []);
  return (
    <>
      <MyContext.Provider value={{favorite,error}}>
        <FavItem/>
      </MyContext.Provider>
    </>
  )
}

export default Fav
