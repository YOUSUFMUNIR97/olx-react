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
          width: '500px',
          // display: 'flex',
          height:"52px",
          fontSize:"20px"
        }}
      />
      <SearchIcon
        style={{
          position: 'absolute',
          top: '30%',
          // transform: 'translateY(-50%)',
          right: '20px',
          color: 'black',
          // cursor: 'pointer',
        }}
      />


      
    </div>
  );
};

export default SearchBar;
