"use client"

import { useEffect, useState } from "react"
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
  InputAdornment,
  Divider,
  Grid,
  Paper,
  createTheme,
  ThemeProvider,
  Tooltip,
  Alert,
  CircularProgress,
  useMediaQuery,
} from "@mui/material"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import DeleteIcon from "@mui/icons-material/Delete"
import AddIcon from "@mui/icons-material/Add"
import CloseIcon from "@mui/icons-material/Close"
import TitleIcon from "@mui/icons-material/Title"
import ImageIcon from "@mui/icons-material/Image"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"

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
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#F7941D",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 12,
        },
      },
    },
  },
})

const ProductModal = ({ open, onClose, onSubmit, initialData = null }) => {
  const [name, setName] = useState("")
  const [images, setImages] = useState([])
  const [featureInput, setFeatureInput] = useState("")
  const [features, setFeatures] = useState([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "")
      setImages(initialData.gallery || [initialData.image].filter(Boolean))
      setFeatures(initialData.features || [])
    } else {
      setName("")
      setImages([])
      setFeatures([])
    }
    setErrors({})
  }, [initialData, open])

  const validateForm = () => {
    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = "Ürün adı zorunludur"
    }

    if (images.length === 0) {
      newErrors.images = "En az bir görsel eklemelisiniz"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleFeatureAdd = () => {
    if (featureInput.trim()) {
      setFeatures((prev) => [...prev, featureInput.trim()])
      setFeatureInput("")
    }
  }

  const handleFeatureKeyPress = (e) => {
    if (e.key === "Enter" && featureInput.trim()) {
      e.preventDefault()
      handleFeatureAdd()
    }
  }

  const handleFeatureDelete = (index) => {
    setFeatures((prev) => prev.filter((_, i) => i !== index))
  }

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    const previews = selectedFiles.map((file) => URL.createObjectURL(file))
    setImages((prev) => [...prev, ...previews])

    // Clear any image-related errors
    if (errors.images) {
      setErrors((prev) => ({ ...prev, images: undefined }))
    }
  }

  const handleImageDelete = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setLoading(true)

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800))

      const updatedProduct = {
        ...initialData,
        id: initialData?.id || Date.now(),
        name,
        image: images[0],
        gallery: images,
        features,
        technicalData: initialData?.technicalData || [],
        tdsFile: initialData?.tdsFile || "",
        drawingFile: initialData?.drawingFile || "",
      }

      onSubmit(updatedProduct)
    } catch (error) {
      console.error("Error submitting product:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={loading ? undefined : onClose} fullWidth maxWidth="md" fullScreen={fullScreen}>
        <DialogTitle
          sx={{
            bgcolor: "#1e2a38",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ElectricBoltIcon sx={{ mr: 1.5, color: "#f7941d" }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
              {initialData ? "Ürünü Düzenle" : "Yeni Ürün Ekle"}
            </Typography>
          </Box>

          <IconButton edge="end" color="inherit" onClick={onClose} disabled={loading} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ p: 3 }}>
            {/* Ürün Adı */}
            <TextField
              label="Ürün Adı"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                if (errors.name) {
                  setErrors((prev) => ({ ...prev, name: undefined }))
                }
              }}
              margin="normal"
              required
              error={!!errors.name}
              helperText={errors.name}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon sx={{ color: errors.name ? "error.main" : "action.active" }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Görsel Yükleme */}
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "#1e2a38",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ImageIcon sx={{ mr: 1, color: errors.images ? "error.main" : "#f7941d" }} />
                Ürün Görselleri
                <Typography component="span" color="error" sx={{ ml: 0.5 }}>
                  *
                </Typography>
              </Typography>

              {errors.images && (
                <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
                  {errors.images}
                </Alert>
              )}

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<PhotoCamera />}
                  sx={{
                    borderColor: "#f7941d",
                    color: "#1e2a38",
                    "&:hover": {
                      borderColor: "#e67e00",
                      backgroundColor: "rgba(247, 148, 29, 0.08)",
                    },
                  }}
                >
                  Görsel Ekle
                  <input hidden accept="image/*" type="file" multiple onChange={handleImageChange} />
                </Button>

                <Typography variant="caption" color="text.secondary" sx={{ ml: 2 }}>
                  Birden fazla görsel ekleyebilirsiniz
                </Typography>
              </Box>

              {images.length > 0 && (
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  {images.map((img, index) => (
                    <Grid item key={index} xs={6} sm={4} md={3}>
                      <Paper
                        elevation={2}
                        sx={{
                          position: "relative",
                          borderRadius: 2,
                          overflow: "hidden",
                          paddingTop: "100%", // 1:1 aspect ratio
                          "&:hover": {
                            boxShadow: 4,
                          },
                          transition: "box-shadow 0.3s ease",
                        }}
                      >
                        <Box
                          component="img"
                          src={img}
                          alt={`preview-${index}`}
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <Tooltip title="Görseli Sil">
                          <IconButton
                            onClick={() => handleImageDelete(index)}
                            size="small"
                            sx={{
                              position: "absolute",
                              top: 8,
                              right: 8,
                              bgcolor: "rgba(255, 255, 255, 0.8)",
                              "&:hover": {
                                bgcolor: "#f7941d",
                                color: "white",
                              },
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>

                        {index === 0 && (
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              bgcolor: "rgba(247, 148, 29, 0.8)",
                              color: "white",
                              py: 0.5,
                              textAlign: "center",
                              fontSize: "0.75rem",
                              fontWeight: 500,
                            }}
                          >
                            Ana Görsel
                          </Box>
                        )}
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Özellikler */}
            <Box>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: "#1e2a38",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LocalOfferIcon sx={{ mr: 1, color: "#f7941d" }} />
                Ürün Özellikleri
              </Typography>

              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <TextField
                  label="Özellik Ekle"
                  size="small"
                  value={featureInput}
                  onChange={(e) => setFeatureInput(e.target.value)}
                  onKeyPress={handleFeatureKeyPress}
                  fullWidth
                  placeholder="Örn: Enerji Verimli"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip title="Özellik Ekle">
                          <IconButton
                            onClick={handleFeatureAdd}
                            disabled={!featureInput.trim()}
                            edge="end"
                            size="small"
                          >
                            <AddIcon />
                          </IconButton>
                        </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {features.length > 0 ? (
                  features.map((feat, i) => (
                    <Chip
                      key={i}
                      label={feat}
                      onDelete={() => handleFeatureDelete(i)}
                      sx={{
                        backgroundColor: "#f5f5f5",
                        color: "#1e2a38",
                        fontWeight: 500,
                        "&:hover": {
                          backgroundColor: "rgba(247, 148, 29, 0.1)",
                        },
                      }}
                    />
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                    Henüz özellik eklenmemiş
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2, bgcolor: "#f5f5f5" }}>
          <Button
            onClick={onClose}
            disabled={loading}
            sx={{
              textTransform: "none",
              color: "#1e2a38",
              "&:hover": {
                backgroundColor: "rgba(30, 42, 56, 0.08)",
              },
            }}
          >
            İptal
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              backgroundColor: "#f7941d",
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#e67e00",
              },
            }}
          >
            {loading ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1, color: "white" }} />
                İşleniyor...
              </>
            ) : initialData ? (
              "Güncelle"
            ) : (
              "Kaydet"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}

export default ProductModal
