/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import {Button} from "@chakra-ui/react"
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Homepage = () => {

    const navigate = useNavigate();

    function nav(value){
        console.log(value)

            if(value === "admin"){
                navigate("/admin", { replace: true });
            }
            if(value === "user"){
                navigate("/user", { replace: true });
            }
    }

  return (
    <div>
        <Button type='submit' value="admin" onClick={(e) => nav(e.target.value)} >Admin</Button>
        <Button type='submit' value="user" onClick={(e) => nav(e.target.value)} >User</Button>
    </div>
  )
}

export default Homepage