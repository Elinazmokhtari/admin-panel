import React from 'react'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from 'next/image';

function SocialLoginButton(props) {
  return (
    <Stack>
     
    <Button variant="contained"  sx={{gap:"10px",borderRadius:"8px",padding:"8px 12px","&: hover":{backgroundColor:"#05070A"},fontWeight:400,textTransform:"none",background:props.backgroundColor,color:props.color,border:props.border,}} > <Image src={props.icon} width={25}/>{props.title}</Button>
  </Stack>
  )
}

export default SocialLoginButton