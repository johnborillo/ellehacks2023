import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const CharityItem = ({ charity }) => {
  const { image, name, email } = charity;
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "50px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        width="200px"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CharityItem;
