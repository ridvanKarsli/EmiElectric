"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
  IconButton,
  createTheme,
  ThemeProvider,
  Tooltip,
  Divider,
  Badge,
  Fade,
} from "@mui/material"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import VisibilityIcon from "@mui/icons-material/Visibility"
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary"

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
    MuiCard: {
      styleOverrides: {
        root: {
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
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
  },
})

const AdminProductCard = ({ product, onEdit, onDelete, onView }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = product.gallery || [product.image]

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <ThemeProvider theme={theme}>
      <Fade in={true} timeout={500}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid rgba(247, 148, 29, 0.3)",
            backgroundColor: "#ffffff",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.12)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {/* Image with controls */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: 320 },
              height: { xs: 220, md: 280 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#f5f5f5",
              overflow: "hidden",
            }}
          >
            <Badge
              badgeContent={`${currentImage + 1}/${images.length}`}
              color="primary"
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 2,
                "& .MuiBadge-badge": {
                  fontSize: "0.75rem",
                  height: "22px",
                  minWidth: "22px",
                  padding: "0 6px",
                },
              }}
            >
              <PhotoLibraryIcon color="action" />
            </Badge>

            <Tooltip title="Önceki görsel">
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  left: 8,
                  zIndex: 2,
                  backgroundColor: "rgba(255,255,255,0.8)",
                  "&:hover": {
                    backgroundColor: "#f7941d",
                    color: "white",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.2s ease",
                }}
                size="small"
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>
            </Tooltip>

            <CardMedia
              component="img"
              image={images[currentImage] || "/placeholder.svg?height=600&width=800"}
              alt={product.name}
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            />

            <Tooltip title="Sonraki görsel">
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: 8,
                  zIndex: 2,
                  backgroundColor: "rgba(255,255,255,0.8)",
                  "&:hover": {
                    backgroundColor: "#f7941d",
                    color: "white",
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.2s ease",
                }}
                size="small"
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Content */}
          <CardContent
            sx={{
              flex: 1,
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 1.5,
                  color: "#1e2a38",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {product.name}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Ürün ID: #{product.id}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                {product.features && product.features.length > 0 ? (
                  product.features.map((feat) => (
                    <Chip
                      key={feat}
                      label={feat}
                      size="small"
                      sx={{
                        backgroundColor: "#f5f5f5",
                        color: "#1e2a38",
                        fontWeight: 500,
                        "&:hover": {
                          backgroundColor: "#f7941d",
                          color: "white",
                        },
                        transition: "all 0.2s ease",
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

            <Divider sx={{ my: 2 }} />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                sx={{
                  backgroundColor: "#f7941d",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#e67e00",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease",
                }}
                onClick={() => onEdit(product)}
              >
                Düzenle
              </Button>

              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                sx={{
                  borderColor: "#f7941d",
                  color: "#f7941d",
                  "&:hover": {
                    backgroundColor: "rgba(247, 148, 29, 0.08)",
                    borderColor: "#e67e00",
                    color: "#e67e00",
                  },
                }}
                onClick={() => onDelete(product.id)}
              >
                Sil
              </Button>

              {onView && (
                <Button
                  variant="text"
                  startIcon={<VisibilityIcon />}
                  sx={{
                    color: "#1e2a38",
                    "&:hover": {
                      backgroundColor: "rgba(30, 42, 56, 0.08)",
                    },
                  }}
                  onClick={() => onView(product)}
                >
                  Önizle
                </Button>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Fade>
    </ThemeProvider>
  )
}

export default AdminProductCard
