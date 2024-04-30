import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div style={{ display:"flex", flexDirection:"row",}}>
      <input 
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          margin: '10px',
          paddingLeft: '10px', // To accommodate the icon
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '100%',
          // display: 'flex',
          height:"52px",
          fontSize:"20px"
        }}
      />
      <div style={{
          position: 'absolute',
          top: '11%',
          // transform: 'translateY(-50%)',
          right: '5px',
          color: 'white',
          backgroundColor:"black",
          padding:"14px",
          borderRadius:"0px 20px 20px 0px"
          // cursor: 'pointer',
        }}>
      <SearchIcon/>
      </div>
        
    


      
    </div>
  );
};

export default SearchBar;
