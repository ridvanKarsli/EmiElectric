import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Chip,
  Typography,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductModal = ({ open, onClose, onSubmit, initialData = null }) => {
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [featureInput, setFeatureInput] = useState("");
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "");
      setImages(initialData.gallery || []);
      setFeatures(initialData.features || []);
    } else {
      setName("");
      setImages([]);
      setFeatures([]);
    }
  }, [initialData, open]);

  const handleFeatureAdd = () => {
    if (featureInput.trim()) {
      setFeatures((prev) => [...prev, featureInput.trim()]);
      setFeatureInput("");
    }
  };

  const handleFeatureDelete = (index) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index));
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const previews = selectedFiles.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...previews]);
  };

  const handleImageDelete = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!name || images.length === 0) {
      alert("Başlık ve en az bir görsel zorunludur.");
      return;
    }

    const updatedProduct = {
      ...initialData,
      name,
      image: images[0],
      gallery: images,
      features,
      technicalData: [],
      tdsFile: "",
      drawingFile: "",
    };

    onSubmit(updatedProduct);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          fontWeight: "bold",
          color: "#1e2a38",
          borderBottom: "1px solid #eee",
        }}
      >
        {initialData ? "Ürünü Güncelle" : "Yeni Ürün Ekle"}
      </DialogTitle>

      <DialogContent sx={{ backgroundColor: "#f5f5f5", py: 3 }}>
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Ürün Başlığı"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Görsel Yükleme */}
          <Box>
            <Button
              variant="outlined"
              component="label"
              startIcon={<PhotoCamera />}
              sx={{
                borderColor: "#f7941d",
                color: "#1e2a38",
                "&:hover": {
                  backgroundColor: "#f7941d",
                  color: "#fff",
                },
              }}
            >
              Görsel Ekle
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleImageChange}
              />
            </Button>

            {images.length > 0 && (
              <Box mt={2} display="flex" gap={2} flexWrap="wrap">
                {images.map((img, index) => (
                  <Box key={index} sx={{ position: "relative" }}>
                    <img
                      src={img}
                      alt={`preview-${index}`}
                      style={{
                        width: 100,
                        height: 100,
                        objectFit: "cover",
                        borderRadius: 8,
                        border: "2px solid #f7941d",
                      }}
                    />
                    <IconButton
                      onClick={() => handleImageDelete(index)}
                      size="small"
                      sx={{
                        position: "absolute",
                        top: -10,
                        right: -10,
                        bgcolor: "#f7941d",
                        color: "white",
                        "&:hover": {
                          bgcolor: "#1e2a38",
                        },
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          {/* Özellikler */}
          <Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: 600, color: "#1e2a38" }}
            >
              Özellikler
            </Typography>
            <Box display="flex" gap={1} mb={1}>
              <TextField
                label="Özellik Ekle"
                size="small"
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
              />
              <Button
                variant="outlined"
                onClick={handleFeatureAdd}
                sx={{
                  borderColor: "#f7941d",
                  color: "#1e2a38",
                  "&:hover": {
                    backgroundColor: "#f7941d",
                    color: "#fff",
                  },
                }}
              >
                Ekle
              </Button>
            </Box>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {features.map((feat, i) => (
                <Chip
                  key={i}
                  label={feat}
                  onDelete={() => handleFeatureDelete(i)}
                  sx={{
                    backgroundColor: "#f5f5f5",
                    color: "#1e2a38",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "#f7941d",
                      color: "white",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button
          onClick={onClose}
          sx={{ textTransform: "none", color: "#1e2a38" }}
        >
          İptal
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            backgroundColor: "#f7941d",
            color: "white",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1e2a38",
            },
          }}
        >
          {initialData ? "Güncelle" : "Yükle"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
