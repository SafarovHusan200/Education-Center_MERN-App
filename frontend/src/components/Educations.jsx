import * as React from "react";

import Typography from "@mui/material/Typography";
import Time from "react-time-format";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import { baseURLApi } from "../repositories/client";
import { Link } from "react-router-dom";
import StartIcon from "@mui/icons-material/Start";

export default function EduComponent({ educations }) {
  return (
    <div>
      {educations.length > 0 ? (
        educations.map((item) => (
          <Card
            // sx={{ maxWidth: 345 }}
            style={{ width: "700px", marginTop: "1rem" }}
            key={item._id}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              style={{ height: "300px" }}
              image={baseURLApi + item.image}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>

                <Typography variant="div">
                  <Time
                    value={item.updatedAt}
                    format="hh:mm DD.MM.YYYY"
                    style={{ color: "gray" }}
                  />
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/edu/${item._id}`}>
                  <Button
                    size="small"
                    variant="outlined"
                    endIcon={<StartIcon />}
                  >
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </div>
          </Card>
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
