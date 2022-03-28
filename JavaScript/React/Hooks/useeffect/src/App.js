import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // each time resourcetype changed
    console.log("App Mounted");
  }, []);

  useEffect(() => {
    // each time rerender
    console.log("Rerendered again");
  });

  useEffect(() => {
    // each time resourcetype changed
    console.log("ResourceType changed");

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);

  return (
    <React.Fragment>
      <Container>
        <div>
          <Button
            variant="contained"
            sx={{ m: 2, textTransform: "none" }}
            onClick={() => setResourceType("Posts")}
          >
            Posts
          </Button>
          <Button
            variant="contained"
            sx={{ m: 2, textTransform: "none" }}
            onClick={() => setResourceType("Users")}
          >
            Users
          </Button>
          <Button
            variant="contained"
            sx={{ m: 2, textTransform: "none" }}
            onClick={() => setResourceType("Comments")}
          >
            Comments
          </Button>
        </div>
        <div>
          <ThemeProvider theme={theme}>
            <Box
              component="div"
              sx={{
                m: 2,
                width: "15%",
                textAlign: "center",
                color: "secondary.main",
                bgcolor: "warning.main",
                border: 1,
                borderRadius: "8px",
                borderColor: "primary.main",
              }}
            >
              <Typography variant="h5">{resourceType}</Typography>
            </Box>

            <Box component="div" sx={{ display: "inline", m: 2 }}>
              <Typography variant="h3">Responsive h3</Typography>
              <Typography variant="h4">Responsive h4</Typography>
              <Typography variant="h5">Responsive h5</Typography>
            </Box>
          </ThemeProvider>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
