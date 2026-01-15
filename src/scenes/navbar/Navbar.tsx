import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import ApiIcon from '@mui/icons-material/Api';


const Navbar = () => {

  // we are taking the palette form themeSettings from theme.ts
  const { palette } = useTheme();

  //we using in order to know which page is selected
  const [seletcted, setSelected] = useState("dashboard"); 

  return (
    //alignItems center meaning vertically
    //we can also add our own styling
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/* left side */}
        <FlexBetween gap="0.75rem">
          {/* using sx to customize our icon */}
          <ApiIcon sx={{ fontSize: "28px" }}/>
          <Typography variant="h4" fontSize="16px">
            CompanyInsights
          </Typography>
        </FlexBetween>

        {/* right side */}
        <FlexBetween className="mr-40" gap="2rem">
            {/* we are using sudo selector &:hover in order to refer to hover effect */}
            <Box sx={{ "&:hover": { color: palette.primary[100] }}}>
              {/* the react router component have the style prop in order to apply styling 
                  so when selected it will have a lighter colour else when not selected darker*/}
              <Link 
                to="/"  
                onClick={() => setSelected("dashboard")}
                style={{
                  color: seletcted === "dashboard" ? "inherit" : palette.grey[700],
                  textDecoration: "inherit"
                }}
              >
                dashboard
              </Link>
            </Box>

            <Box sx={{ "&:hover": { color: palette.primary[100] }}}>
              <Link 
                to="/management"  
                onClick={() => setSelected("management")}
                style={{
                  color: seletcted === "management" ? "inherit" : palette.grey[700],
                  textDecoration: "inherit"
                }}
              >
                management
              </Link>
            </Box>
        </FlexBetween>

    </FlexBetween>
  )
}

export default Navbar