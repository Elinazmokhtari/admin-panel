import React from 'react'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function MainButton(props) {
  return (
    <Stack>
    <Button variant="contained"  sx={{borderRadius:"8px",border:"1px solid ",padding:"8px 12px","&:hover":{bgcolor:"#c2c9d6"},fontWeight:400,textTransform:"none",background:props.backgroundColor,color:props.color}}>{props.title}</Button>
  </Stack>
  )
}

export default MainButton