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
  createTheme,
  ThemeProvider,
  Fade,
  IconButton,
  Tooltip,
  Badge,
} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary"
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

const ProductCard = ({ product, onClick, isReversed = false }) => {
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
            flexDirection: { xs: "column", md: isReversed ? "row-reverse" : "row" },
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            borderRadius: 3,
            overflow: "hidden",
            border: "1px solid rgba(247, 148, 29, 0.3)",
            backgroundColor: "#ffffff",
            mb: 4,
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
              width: { xs: "100%", md: 360 },
              height: { xs: 240, md: 280 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#f5f5f5",
              overflow: "hidden",
            }}
          >
            {images.length > 1 && (
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
            )}

            {images.length > 1 && (
              <>
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
              </>
            )}

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
          </Box>

          {/* Content */}
          <CardContent
            sx={{
              flex: 1,
              p: { xs: 3, md: 4 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <ElectricBoltIcon sx={{ color: "#f7941d", mr: 1, fontSize: 20 }} />
                <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600 }}>
                  EMI Elektrik
                </Typography>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#1e2a38",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {product.name}
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
                        transition: "all 0.3s ease",
                      }}
                    />
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                    Ürün özellikleri yükleniyor...
                  </Typography>
                )}
              </Box>
            </Box>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={() => onClick(product)}
              sx={{
                mt: 2,
                backgroundColor: "#f7941d",
                color: "white",
                borderRadius: 8,
                alignSelf: "flex-start",
                px: 3,
                py: 1.2,
                "&:hover": {
                  backgroundColor: "#1e2a38",
                  transform: "translateX(5px)",
                },
                transition: "all 0.3s ease",
                boxShadow: "0 4px 8px rgba(247, 148, 29, 0.25)",
              }}
            >
              Detayları Gör
            </Button>
          </CardContent>
        </Card>
      </Fade>
    </ThemeProvider>
  )
}

export default ProductCard
