import React, { useEffect, useState, } from "react";
import {useLoaderData} from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/Akashmahto022")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className=" text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture" className="" />
    </div>
  );
};

export default Github;

export  const githubLoader = async ()=>{
    const response = await fetch ('https://api.github.com/users/Akashmahto022') ;
    return response.json()
} 
