"use client"

import { useState } from "react"
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  createTheme,
  ThemeProvider,
  InputAdornment,
  Divider,
  Alert,
  Fade,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import TitleIcon from "@mui/icons-material/Title"
import ImageIcon from "@mui/icons-material/Image"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"

// Özel tema oluşturma
const theme = createTheme({
  palette: {
    primary: {
      main: "#F7941D",
    },
    secondary: {
      main: "#1E2A38",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            "&.Mui-focused fieldset": {
              borderColor: "#F7941D",
              borderWidth: 2,
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#F7941D",
          },
        },
      },
    },
  },
})

const AddProductForm = ({ onAdd }) => {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [formError, setFormError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Form validation
    if (!name.trim()) {
      setFormError("Ürün adı zorunludur")
      return
    }

    if (!image.trim()) {
      setFormError("Görsel URL zorunludur")
      return
    }

    // Clear any previous errors
    setFormError("")

    const newProduct = {
      id: Date.now(),
      name,
      image,
      gallery: [image],
      features: [],
      technicalData: [],
      tdsFile: "",
      drawingFile: "",
    }

    onAdd(newProduct)

    // Show success message
    setShowSuccess(true)

    // Reset form
    setName("")
    setImage("")

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 3000)
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          mb: 4,
          backgroundColor: "#ffffff",
          border: "1px solid rgba(247, 148, 29, 0.3)",
          transition: "box-shadow 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <ElectricBoltIcon sx={{ mr: 1.5, color: "#f7941d", fontSize: 28 }} />
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#1e2a38" }}>
              Yeni Ürün Ekle
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {formError && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {formError}
            </Alert>
          )}

          {showSuccess && (
            <Fade in={showSuccess}>
              <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                Ürün başarıyla eklendi!
              </Alert>
            </Fade>
          )}

          <TextField
            fullWidth
            label="Ürün Adı"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TitleIcon sx={{ color: "action.active" }} />
                </InputAdornment>
              ),
            }}
            placeholder="Örn: LED Panel 60x60 40W"
            helperText="Ürün adını giriniz"
          />

          <TextField
            fullWidth
            label="Görsel URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ImageIcon sx={{ color: "action.active" }} />
                </InputAdornment>
              ),
            }}
            placeholder="Örn: https://example.com/image.jpg"
            helperText="Ürün görseli için URL giriniz"
          />

          <Button
            type="submit"
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
              mt: 3,
              py: 1.5,
              px: 4,
              backgroundColor: "#f7941d",
              color: "white",
              "&:hover": {
                backgroundColor: "#e67e00",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 12px rgba(247, 148, 29, 0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Ürün Ekle
          </Button>
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export default AddProductForm
