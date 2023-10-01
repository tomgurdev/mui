import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from "@mui/material";
import {Favorite, FavoriteBorder, MoreVert} from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Watching the falls"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          width="80%"
          image="https://images.nationalgeographic.org/image/upload/v1638882947/EducationHub/photos/tourists-at-victoria-falls.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Standing by this huge waterfall was an amazing experience. The sound of the water was deafening and the mist was so thick that it was hard to see. I was soaked to the skin but it was worth it. I would love to go back and see it again. I would recommend it to anyone.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} color={"error"} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
export default Feed;