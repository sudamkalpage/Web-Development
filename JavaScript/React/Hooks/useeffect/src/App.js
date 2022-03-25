import React, { useState } from "react";
import "./App.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  const [resourceType, setResourceType] = useState("Posts");
  return (
    <React.Fragment>
      <Container>
        <div>
          <Button variant="contained" sx={{ m: 2, textTransform: "none" }}>
            Posts
          </Button>
          <Button variant="contained" sx={{ m: 2, textTransform: "none" }}>
            Users
          </Button>
          <Button variant="contained" sx={{ m: 2, textTransform: "none" }}>
            Comments
          </Button>
        </div>
        <div>
          <Box component="div" sx={{ display: "inline", m: 2 }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h3">Responsive h3</Typography>
              <Typography variant="h4">Responsive h4</Typography>
              <Typography variant="h5">Responsive h5</Typography>
            </ThemeProvider>
          </Box>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
