import MUIModal from "@mui/material/Modal";

interface DialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactElement<
    unknown,
    string | React.JSXElementConstructor<any>
  >;
}

const Modal: React.FC<DialogProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <MUIModal
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </MUIModal>
  );
};

export default Modal;
