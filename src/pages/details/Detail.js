import React, { useEffect,useState } from "react";
import Header from "../../components/header/Header";
import "./Detail.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// let a = []
function Detail({ details }) {
  const [totalNutrients,setTotalNutrients] = useState([])

  useEffect(() => {
    // console.log(Object.values(details.totalNutrients));
    setTotalNutrients(Object.values(details.totalNutrients))
  },[details]);

  // console.log(a);


  // console.log("ok", details);
  return (
    <div className="details-page">
      <Header />
      <h1>{details.label}</h1>
      <Box sx={{ width: "100%" }} className="boxs">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <h3>Total Nutrients</h3>
            <br />
            {
              totalNutrients.map((e) => {
                return(
                  <p>{e.label}    : {Math.round(e.quantity)} {e.unit}</p>
                )
              })
            }
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img src={details.image} alt="" style={{width:"100%"}}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <h3>İngredientlines</h3>
            <br />
            {
              details.ingredientLines.map((a) => {
                return(
                  <p>{a}</p>
                )
              })
            }
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Detail;
