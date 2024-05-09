import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AuthenticationButton from "./AuthenticationButton ";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const fbsvgData = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>`;


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <img
            src="https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg"
            height="50px"
            style={{ marginBottom: "5px" }}
          />
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h1"
            style={{ fontWeight: "700", lineHeight: "3.6" }}
          >
            Login into your OLX account
          </Typography>

          <AuthenticationButton svg={fbsvgData} label="Download" />
          <AuthenticationButton svg={fbsvgData} label="Download" />
        </Box>
      </Modal>
    </div>
  );
}
