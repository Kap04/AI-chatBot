import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function Logo() {
  return (
    <div style={{
      display:"flex",
      marginRight: "auto",
      alignItems:"center",
      gap:"15px",
    }}>
      <Link to={"/"}>
        <img src='logo.png' alt='chatai' width=  {'40px'} height = {'40px'} className='image-inverted'/>
        
      </Link>
      <Typography sx={{display : {md:"block" , sm:"none" , xs:"none"}  , mr:"auto",fontWeight:"800", textShadow:"2px 2px 20px #000"}}>
          <span style={{fontSize:"20px"}}>MERN</span>-GPT
        </Typography>
    </div>
  )
}

export default Logo