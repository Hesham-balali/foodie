import MealCard from "./MealCard";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const MealList = (props) => {
  const { items } = props;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={2}>
        {items.map((item) => (
          <Grid item xs={2} key={item.id}>
            <MealCard id={item.id} name={item.name} thumb={item.thumb} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MealList;
