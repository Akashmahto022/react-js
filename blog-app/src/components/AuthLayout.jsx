import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authtication = true }) => {

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        if (authtication && authStatus !== authtication) {
            navigate('/login')
        }else if(!authtication && authStatus !== authtication){
            navigate('/')
        }
        setLoading(false)
    },[authStatus, navigate, authtication])



  return loading ? <h1>Loading...</h1> : <>{children}</>
};

export default AuthLayout;
