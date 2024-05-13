import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Modal from "@mui/material/Modal";
import SMCountryBar from "./SMCountryBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchBar from "./SMSearchBar";
import SMIcon from "./SMIcon";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { ImageAspectRatioSharp } from "@mui/icons-material";
import SMSellButton from "./SMSellButton";
import SMTags from "./SMTags";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AuthenticationButton from "./AuthenticationButton ";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";
import { socialMediaAuth } from "../Config/FirebaseSetup/FirebaseMethods";
import {googleProvider} from "../Config/FirebaseSetup/FirebaseMethods";


const SabHeader = () => {
  const fbsvgData = `<svg
  //           className="m-2"
  //           style="fill: white; width: 20px; height: 20px;"
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
  //         </svg>`;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: '2px solid #000',
    // boxShadow: 24,
    // marginBottom:'1.6rem',
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    p: 4,
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State to manage modal visibility
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false); // State to manage modal visibility

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Here you can perform any action based on the search term
  };

  const handleLoginClick = () => {
    setIsSignUpModalOpen(false);
    setIsLoginModalOpen(true); // Open the modal when "Login" is clicked
    console.log(isLoginModalOpen);
  };

  const handleSignupClick = () => {
    setIsSignUpModalOpen(true); // Open the modal when "SignUp" is clicked
    console.log(isSignUpModalOpen);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false); // Close the modal
    setIsSignUpModalOpen(false); // Close the modal
  };

  // const handleclick = () => {
  //     navigate('/Login')
  // }


  const handleOnClick = (provider) => {
    socialMediaAuth(provider)
    .then((res) => {
        console.log('done');
    })
    .catch((err) => {
        console.log(err);
    });
    // console.log("click")
};


  return (
    <div
      className="row"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "1px solid #d8dfe0",
      }}
    >
      <div className="col-md-3 col-sm-6">
        <SMCountryBar
          getValue={(e) => {
            console.log("Apps.js", e);
          }}
          countries={[
            {
              code: "AD",
              label: "Andorra",
              phone: "376",
            },
            {
              code: "AE",
              label: "United Arab Emirates",
              phone: "971",
            },
            { code: "AF", label: "Afghanistan", phone: "93" },
            {
              code: "AG",
              label: "Antigua and Barbuda",
              phone: "1-268",
            },
            { code: "AI", label: "Anguilla", phone: "1-264" },
            { code: "AL", label: "Albania", phone: "355" },
            { code: "AM", label: "Armenia", phone: "374" },
            { code: "AO", label: "Angola", phone: "244" },
            { code: "AQ", label: "Antarctica", phone: "672" },
            { code: "AR", label: "Argentina", phone: "54" },
            { code: "AS", label: "American Samoa", phone: "1-684" },
            { code: "AT", label: "Austria", phone: "43" },
          ]}
        />
      </div>

      <div className="col-md-6 col-sm-12" style={{ position: "relative" }}>
        <SearchBar
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div
        className="col-md-3 col-sm-6 "
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Button className="m-2" onClick={handleLoginClick}>
          Login
        </Button>
        <SMIcon iconName={<ChatBubbleOutlineOutlinedIcon />} />

        <SMIcon iconName={<NotificationsOutlinedIcon />} />

        <SMSellButton />
      </div>

      {/* Login Modal Component */}
      <Modal
        keepMounted
        open={isLoginModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <img
            src="https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg"
            height="50px"
            style={{ margin: "15px" }}
          />
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h1"
            style={{ fontWeight: "700", lineHeight: "3.6" }}
          >
            Login into your OLX account
          </Typography>

          {/* <button type="button" style={{backgroundColor:"blue"}} className="text-white bg-blue-900 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                        <svg className='m-2' style={{width:"20px", height:"20px"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                        </svg>
                        Sign in with Facebook
                    </button> */}

          <AuthenticationButton
            icon={<FacebookIcon color="primary" />}
            label="Sign in with Facebook"
          />
          <AuthenticationButton
            icon={<GoogleIcon color="success" />}
            label="Sign in with Google"
            onClick={() => handleOnClick(googleProvider)}
          />

          <p className="my-2"> OR </p>

          <AuthenticationButton
            icon={<MailIcon color="#002f34" />}
            label="Sign in with Email"
          />
          <AuthenticationButton
            icon={<PhoneIcon color="#002f34" />}
            label="Sign in with Phone"
          />

          <Button
            className="my-2"
            style={{ color: "#3a77ff", fontWeight: "700" }}
            onClick={handleSignupClick}
          >
            {" "}
            New to OLX ? Create an Account{" "}
          </Button>
        </Box>
      </Modal>

      {/* Signup Modal Component */}
      <Modal
        keepMounted
        open={isSignUpModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <img
            src="https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg"
            height="50px"
            style={{ margin: "15px" }}
          />
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h1"
            style={{ fontWeight: "700", lineHeight: "3.6" }}
          >
            Login into your OLX account
          </Typography>

          {/* <button type="button" style={{backgroundColor:"blue"}} className="text-white bg-blue-900 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                        <svg className='m-2' style={{width:"20px", height:"20px"}} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                            <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                        </svg>
                        Sign in with Facebook
                    </button> */}

          <AuthenticationButton
            icon={<FacebookIcon color="primary" />}
            label="Join with Facebook"
          />
          <AuthenticationButton
            icon={<GoogleIcon color="success" />}
            label="Join with Google"
            onClick={() => handleOnClick(googleProvider)}
          />

          <p className="my-2"> OR </p>

          <AuthenticationButton
            icon={<MailIcon color="#002f34" />}
            label="Join with Email"
          />
          <AuthenticationButton
            icon={<PhoneIcon color="#002f34" />}
            label="Join with Phone"
          />

          <Button
            className="my-2"
            style={{ color: "#3a77ff", fontWeight: "700" }}
            onClick={handleLoginClick}
          >
            {" "}
            Already have an Account ? Log in{" "}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
    
export default SabHeader;
