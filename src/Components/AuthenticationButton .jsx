import { Box, Icon, IconButton, Typography } from "@mui/material";
import React from "react";

const AuthenticationButton = ({ icon, label }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  //   "https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg"
  return (
    // <button
    //         type="button"
    //         style={{ backgroundColor: "blue" }}
    //         className="text-white bg-blue-900 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
    //       >
    //         <svg
    //           className="m-2"
    //           style={{ width: "20px", height: "20px" }}
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="currentColor"
    //           viewBox="0 0 8 19"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
    //             clip-rule="evenodd"
    //           />
    //         </svg>
    //         Sign in with Facebook
    //       </button>

    <button
      type="button"
      // style={{ backgroundColor: "blue" }}
      className="text-black focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
    >
     <IconButton > {icon} </IconButton>
      <span style={{fontSize:"16px"}}>{label}</span>
    </button>
  );
};

export default AuthenticationButton;
