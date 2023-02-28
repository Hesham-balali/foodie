import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Category from "./Category";
import { Divider, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import { CardActionArea, ListItemButton } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function MediaCard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ maxWidth: 1500, marginLeft: "auto", marginRight: "auto" }}
    >
      <Grid marginTop={5} container justifyContent="center" item xs={12}>
        {/* <Box marginTop={5} sx={{ flexGrow: 1, maxWidth: 600 }}> */}
        <TextField
          // label="Search for a meal"
          sx={{ minWidth: 500, marginRight: 3 }}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/search/${searchTerm}`)}
        >
          Search For Meals
        </Button>
      </Grid>
      <Divider />
      <Typography variant="h4" marginTop={6}>
        Popular Ingredients{" "}
      </Typography>
      <Grid container justifyContent="center" marginTop={2} spacing={3}>
        <Grid item xs={3}>
          <Card>
            <ListItemButton
              alignItems="center"
              onClick={() => {
                navigate(`ingredient/Chicken`);
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://www.themealdb.com/images/ingredients/Chicken.png`}
                  alt="chicken"
                />
                <CardContent>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Chicken
                  </Typography>
                </CardContent>
              </CardActionArea>
            </ListItemButton>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <ListItemButton
              alignItems="center"
              onClick={() => {
                navigate(`ingredient/Salmon`);
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://www.themealdb.com/images/ingredients/Salmon.png`}
                  alt="Salmon"
                />
                <CardContent>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Salmon
                  </Typography>
                </CardContent>
              </CardActionArea>
            </ListItemButton>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <ListItemButton
              alignItems="center"
              onClick={() => {
                navigate(`ingredient/Beef`);
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://www.themealdb.com/images/ingredients/Beef.png`}
                  alt="Beef"
                />
                <CardContent>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Beef
                  </Typography>
                </CardContent>
              </CardActionArea>
            </ListItemButton>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <ListItemButton
              alignItems="center"
              onClick={() => {
                navigate(`ingredient/Lamb`);
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={
                    "https://www.themealdb.com/images/ingredients/Lamb%20Shoulder.png"
                  }
                  alt="Lamb"
                />
                <CardContent>
                  <Typography
                    align="center"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Lamb
                  </Typography>
                </CardContent>
              </CardActionArea>
            </ListItemButton>
          </Card>
        </Grid>
      </Grid>

      {/* </Box> */}
    </Grid>
  );
}
