import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Category = (props) => {
  const { name, description, thumb } = props;
  const navigate = useNavigate();
  return (
    <Card>
      {/* <Card sx={{ maxWidth: 345, minHeight: 300 }}> */}
      <CardActionArea>
        <CardMedia component="img" height="140" image={thumb} alt={name} />
        <CardContent>
          <ListItemButton
            onClick={() => {
              navigate(`categories/${name}`);
            }}
          >
            <Typography
              align="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              {name}
            </Typography>
          </ListItemButton>

          {/* <Typography variant="body2" color="text.secondary">
            {description.substring(0, 120)}...
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Category;
