import { Box, Input, Button, InputLabel, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function Form({ onSubmit, sectionTitle, values }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const created = new FormData();
    created.append("name", name);
    created.append("description", description);
    created.append("image", file);

    onSubmit(created);
  };

  useEffect(() => {
    setName(values?.name);
    setDescription(values?.description);
  }, [values]);
  return (
    <form onSubmit={handleSubmit}>
      <Box
        width={"60%"}
        borderRadius={4}
        padding={3}
        margin="auto"
        boxShadow={"10px 10px 20px #ccc"}
        display="flex"
        flexDirection={"column"}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          padding={3}
        >
          {sectionTitle} Education Center
        </Typography>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <InputLabel htmlFor="description" style={{ marginTop: "20px" }}>
          Description
        </InputLabel>
        <CKEditor
          editor={ClassicEditor}
          data={description ? description : "Hello"}
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();

            setDescription(data);
          }}
        />
        <InputLabel
          htmlFor="image"
          style={{
            marginTop: "20px",
            padding: "0.5rem 1rem",
            borderBottom: "1px solid gray",
            cursor: "pointer",
          }}
        >
          Image upload
        </InputLabel>
        <Input
          type="file"
          id="image"
          name="image"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <Button type="submit" variant="contained" style={{ marginTop: "30px" }}>
          {sectionTitle}
        </Button>
      </Box>
    </form>
  );
}
