import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
}

const StyledCustom = styled("button")(({ theme }) => ({
  backgroundColor: "transparente",
  border: "1px solid ${theme.palette.primary.contrastText}",
  borderRadius: "3px",
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    scale: "1.1",
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
