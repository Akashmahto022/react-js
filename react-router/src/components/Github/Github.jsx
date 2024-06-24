import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Akashmahto022')
    //     .then(res => res.json())
    //     .then((data)=>{
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-3xl ">
      Github User Name: {data.followers}
      <img src={data.avatar_url} alt="" />
    </div>

  );
};

export default Github;

export const githubInfoLoader = async()=>{
   const responce = await fetch('https://api.github.com/users/Akashmahto022')
   return responce.json()
}
