import React, { useState, useMemo, useEffect } from "react";
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
import Grid from "@mui/material/Grid";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function slowFunc(num: number) {
  console.log("Calling slow function.");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

function App() {
  const [num, setNum] = useState<number>(0);
  const [dark, setDark] = useState<Boolean>(true);
  const [parm, setParm] = useState<number>(0);
  const doubleNumber = useMemo(() => {
    return slowFunc(num);
  }, [num]);

  // let color = { color: dark ? "Black" : " White" }; //caled each time

  let color = useMemo(() => {
    return { color: dark ? "Black" : " White" };
  }, [dark]);

  useEffect(() => {
    console.log("Color changed");
  }, [color]);

  const handleIncrement = () => {
    console.log("handleIncrement function called.");
    let new_parm = dark ? parm + 1 : parm - 1;
    setParm(new_parm);
  };

  return (
    <React.Fragment>
      <Container>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
                      onChange={(e) => setNum(parseInt(e.target.value))}
                      value={num}
                    ></TextField>
                  </Box>

                  <Box
                    component="div"
                    sx={{
                      m: 2,
                      width: "15%",
                      textAlign: "center",
                      color: "secondary.main",
                      bgcolor: dark ? "warning.main" : "text.disabled",
                      border: 1,
                      borderRadius: "8px",
                      borderColor: "primary.main",
                    }}
                  >
                    <Typography variant="h5">{doubleNumber}</Typography>
                  </Box>
                </ThemeProvider>
              </div>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" sx={{ m: 2 }}>
                {color.color}
              </Typography>

              <Button variant="contained" onClick={() => handleIncrement()}>
                Change Parameter
              </Button>

              <Typography
                variant="h6"
                sx={{
                  m: 2,
                }}
              >
                Parameter
              </Typography>

              <Box
                component="div"
                sx={{
                  m: 2,
                  width: "15%",
                  textAlign: "center",
                  color: "secondary.main",
                  bgcolor: dark ? "warning.main" : "text.disabled",
                  border: 1,
                  borderRadius: "8px",
                  borderColor: "primary.main",
                }}
              >
                <Typography variant="h5">{parm}</Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
