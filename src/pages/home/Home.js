import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import NativeSelect from "@mui/material/NativeSelect";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home({setDetails,details}) {
  const [meal, setMeal] = useState({ d: "", mealtype: "breakfast" });
  const [recipe, setRecipe] = useState([]);
  // const [details, setDetails] = useState({
  //   label: "",
  //   image: "",
  //   ingredientLines: [],
  //   totalNutrients: {},
  // });
  let navigate = useNavigate();
  console.log(meal);

  const handleChange = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${meal.d}&app_id=8f40eb70&app_key=382d9cee119390200fc044d88b747af2&mealType=${meal.mealtype}`
      )
      .then((result) => {
        console.log(result.data.hits);
        setRecipe(result.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClickDetails = async (e) => {
    console.log(
      e.target.parentElement.parentElement.firstChild.firstChild.innerHTML
    );
    let a = await e.target.parentElement.parentElement.firstChild.firstChild
      .innerText;
    let b = await recipe.filter((e) => {return e.recipe.label === a});
    await setDetails({
      ...details,
      label: b[0].recipe.label,
      image: b[0].recipe.image,
      ingredientLines: b[0].recipe.ingredientLines,
      totalNutrients: b[0].recipe.totalNutrients,
    });
    await navigate("/recipes-sites/home/detail", { replace:true })
  };
  useEffect(()=> {
    console.log(details);
  })

  // useEffect(() =>{
  //   axios.get("https://api.edamam.com/search?q=hamburger&app_id=8f40eb70&app_key=382d9cee119390200fc044d88b747af2")
  //   .then((result) => {
  //     console.log(result.data.hits);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // },[])
  return (
    <div className="home-page">
      <Header />
      <h2 style={{ margin: "1rem" }}>Food App</h2>
      <div className="search">
        <TextField
          id="outlined-basic"
          label="Recipe"
          variant="outlined"
          className="element"
          name={"d"}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="success"
          className="element"
          onClick={handleClick}
        >
          Search
        </Button>
        <div>
          <NativeSelect
            defaultValue={"breakfast"}
            className="native"
            name={"mealtype"}
            onChange={handleChange}
          >
            <option value={"breakfast"}>Breakfast</option>
            <option value={"lunch"}>Lunch</option>
            <option value={"dinner"}>Dinner</option>
            <option value={"snack"}>Snack</option>
            <option value={"teatime"}>Teatime</option>
          </NativeSelect>
        </div>
      </div>
      <Box sx={{ width: "100%" }} className="box">
        <Grid container rowSpacing={1}>
          {recipe.map((item, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} className="card" key={index}>
                <Card sx={{ width: 250 }} className="card-container">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.recipe.label}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={item.recipe.image}
                  />
                  <CardActions >
                    <Button variant="contained" size="small" onClick={handleClickDetails} color="success">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
