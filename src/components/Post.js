import {
  Avatar,
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
import React from "react";

function Post() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => { setChecked(event.target.checked); };
  return (
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: "red"}} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Watching the falls"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        width="20%"
        image="https://images.nationalgeographic.org/image/upload/v1638882947/EducationHub/photos/tourists-at-victoria-falls.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Standing by this huge waterfall was an amazing experience. The sound of the water was deafening and the mist
          was so thick that it was hard to see. I was soaked to the skin but it was worth it. I would love to go back
          and see it again. I would recommend it to anyone.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder/>} onChange={handleChange} checkedIcon={<Favorite/>} color={"error"}
                    checked={checked}/>
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon/>
        </IconButton>
      </CardActions>
  </Card>
  )
}

export default Post