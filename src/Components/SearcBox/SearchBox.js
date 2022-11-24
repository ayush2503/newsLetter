import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { getSuggestedQuery } from '@testing-library/react';
export default function SearcBox() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [query, setquery] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
const handleSearch=(query)=>{

}
  return (
    <div>
      <Button aria-describedby={id} variant="contained" sx={{fontSize:"1.2vmax"}} onClick={handleClick}>
        Search
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        // sx={{height:"6vmax",width:"20vmax",p:"0"}}
      >
        {/* <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}> */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <TextField size='small' value={query} sx={{p:"0.5vmax",height:"5vmax",width:"20vmax"}} onChange={(e)=>setquery(e.target.value)} />
            <div style={{marginLeft:"1vmax",cursor:"pointer"}}  onClick={()=>handleSearch(query)}>

            <SearchIcon />
            </div>
        </div>
        {/* </Box> */}
      </Popover>
    </div>
  );
}