import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EduService from "../repositories/edu.repository";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { baseURLApi } from "../repositories/client";
import { toast } from "react-toastify";

export default function Education() {
  const navigation = useNavigate();
  const id = useParams().id;
  const [edu, setEdu] = useState();
  const handleData = async () => {
    const result = await EduService.getEduById(id);
    if (result.success) {
      setEdu(result.data);
    }
  };

  const deleteHandle = async () => {
    const result = await EduService.deleteEdu(id);
    if (result.success) {
      toast.success(result.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: false,
      });
      navigation("/");
    }
  };
  useEffect(() => {
    handleData();
  }, []);
  return (
    <div
      style={{
        width: "700px",
        margin: "2rem auto",
      }}
    >
      <Link to={"/"} style={{ marginTop: "5rem" }}>
        <Button variant="outlined" startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Link>
      {edu ? (
        <Card
          // sx={{ maxWidth: 345 }}
          style={{ width: "700px", marginTop: "1rem" }}
          key={edu._id}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            style={{ height: "100%" }}
            image={baseURLApi + edu.image}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {edu.name}
            </Typography>
            <Typography dangerouslySetInnerHTML={{ __html: edu.description }} />
          </CardContent>
          <CardActions>
            <Link to={`/edit/${edu._id}`}>
              <Button variant="outlined" startIcon={<EditIcon />}>
                Edit
              </Button>
            </Link>
            <Link to={"/"} onClick={deleteHandle}>
              <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
              </Button>
            </Link>
          </CardActions>
        </Card>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
