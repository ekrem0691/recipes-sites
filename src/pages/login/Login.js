import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./Login.css";
import loginPage from "../../assets/meal2.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  let navigate = useNavigate();
  const [logins ,setLogins] = useState({"username" : "", "password":""})
  const handleChange = (e) => {
    setLogins({...logins,[e.target.name]:e.target.value})
  }
  const handleClick = (e) => {
    if(logins.username === "Ekrem" && logins.password === "1354"){
      navigate("/recipes-sites/home", { replace:true })
    }else{
      alert(`
      username : Ekrem
      password : 1354
      `)
    }
  }
  console.log(logins);
  return (
    <div className="login-page">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img src={loginPage} alt="" style={{ width: "120px" }} />
          </Grid>
          <Grid item xs={12}>
            <h2 style={{color:"white",fontWeight:"700"}}>/Ekrem/ Recipe</h2>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="User Name"
              variant="outlined"
              name="username"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              name="password"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleClick}
            >
              Login
            </Button>

          </Grid>

        </Grid>
      </form>
    </div>
  );
}

export default Login;
