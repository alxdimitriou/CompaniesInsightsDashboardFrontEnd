//this is a styled component

//this our reusable styled component
//using styled from mui
//and it is used in our pages

import { Box } from "@mui/material";
import { styled } from "@mui/system"

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export default FlexBetween;


/*

styled component with tailwind

type FlexBetweenProps = {
  children: React.ReactNode;
};

const FlexBetween = ({ children }: FlexBetweenProps) => {
  return (
    <div className="flex justify-between items-center">
      {children}
    </div>
  );
}; 
*/