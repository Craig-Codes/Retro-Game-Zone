import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./index.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.default",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  text: string;
};

const Popup = ({ open, onClose, title, text }: ModalProps) => {
  return (
    <Modal
      keepMounted
      id="popup"
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box id="modal-content" sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          color="secondary"
        >
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {text}
        </Typography>
        <br />
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default Popup;
