import React from 'react'
import { Typography ,Box} from '@mui/material'
import TextField from '@mui/material/TextField';

function Input(props) {
  return (
    <div>
      <Typography sx={{marginBottom:"8px",fontWeight:400,fontSize:"0.875rem",color:"#94a0b8"}} >{props.lable}</Typography>
          <Box sx={{width:"100%",backgroundColor:"#05070A",border:"1px solid  #333b4d99",borderRadius:"8px"}}>
          <TextField id="outlined-basic" variant="outlined" sx={{width:"100%"}} {...props}/>
          </Box>  
    </div>
  )
}

export default Input