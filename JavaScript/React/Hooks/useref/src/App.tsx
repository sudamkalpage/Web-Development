import React, { useRef, useEffect } from "react";
import "./App.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function App() {
  const [name, setName] = React.useState("Cat in the Hat");
  const renderCount = useRef(0);
  //rendercount = {current:0}

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  useEffect(() => {
    // each time rerender
    renderCount.current++;
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 2, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-name"
                  label="Name"
                  value={name}
                  onChange={handleChange}
                />
              </Box>
              <Box
                component="div"
                sx={{
                  m: 2,
                  width: "15%",
                  textAlign: "center",
                }}
              >
                <div>Name:</div>
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
                <Typography variant="h5">{name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                component="div"
                sx={{
                  m: 2,
                  width: "35%",
                  textAlign: "center",
                }}
              >
                <div>Render count:</div>
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
                <Typography variant="h3">{renderCount.current}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
