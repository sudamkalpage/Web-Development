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
import TextField from "@mui/material/TextField";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  const [resourceType, setResourceType] = useState("Posts");
  const [items, setItems] = useState([]);
  const [dark, setDark] = useState(true);

  return (
    <React.Fragment>
      <Container>
        <div>
          <Button
            variant="contained"
            sx={{ m: 2, textTransform: "none" }}
            onClick={() => setDark((prevDark) => !prevDark)}
          >
            Change Theme
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
              <TextField
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </Box>

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
              <Typography variant="h5">{"dark"}</Typography>
            </Box>
          </ThemeProvider>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
