import React from "react";
import "./productsList.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const ProductsList = ({ data }) => {
  return (
    <div className="container">
      {data.map(({ id, category, description, image }) => {
        return (
          <Card key={id} mt={3} sx={{ maxWidth: 650, mt: 4 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="240"
                image={image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {category}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductsList;
