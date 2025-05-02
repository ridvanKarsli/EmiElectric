import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

const AddProductForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      image,
      gallery: [image],
      features: [],
      technicalData: [],
      tdsFile: '',
      drawingFile: ''
    };
    onAdd(newProduct);
    setName("");
    setImage("");
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        mb: 4,
        backgroundColor: "#ffffff",
        border: "1px solid #f7941d",
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <Typography
          variant="h6"
          mb={2}
          sx={{ fontWeight: 600, color: "#1e2a38" }}
        >
          Yeni Ürün Ekle
        </Typography>
        <TextField
          fullWidth
          label="Ürün Adı"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Görsel URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#f7941d",
            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1e2a38",
            },
          }}
        >
          Ekle
        </Button>
      </Box>
    </Paper>
  );
};

export default AddProductForm;
