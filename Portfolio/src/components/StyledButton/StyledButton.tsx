import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
}

const StyledCustom = styled("button")(({ theme }) => ({
  backgroundColor: "transparente",
  border: "1px solid ${theme.pallet.primary.contrastText}",
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.pallet.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.pallet.secondary.contrastText,
  },
}));
const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  return (
    <>
      <StyledCustom>{children}</StyledCustom>
    </>
  );
};

export default StyledButton;
