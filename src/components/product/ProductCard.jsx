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
  useMediaQuery,
} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"

// Custom theme creation
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

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
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid rgba(247, 148, 29, 0.3)",
            backgroundColor: "#ffffff",
            mb: 5, // Increased margin for larger cards
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: "0 16px 32px rgba(0, 0, 0, 0.15)",
            },
            transition: "all 0.3s ease",
          }}
        >
          {/* Image with controls - LARGER */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", md: 450 }, // Increased from 360 to 450
              height: { xs: 300, md: 380 }, // Increased from 240/280 to 300/380
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
                  top: 16,
                  right: 16,
                  zIndex: 2,
                  "& .MuiBadge-badge": {
                    fontSize: "0.8rem",
                    height: "24px",
                    minWidth: "24px",
                    padding: "0 8px",
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
                      left: 16,
                      zIndex: 2,
                      backgroundColor: "rgba(255,255,255,0.8)",
                      "&:hover": {
                        backgroundColor: "#f7941d",
                        color: "white",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.2s ease",
                    }}
                    size="medium" // Increased from small
                  >
                    <ArrowBackIosNewIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Sonraki görsel">
                  <IconButton
                    onClick={handleNext}
                    sx={{
                      position: "absolute",
                      right: 16,
                      zIndex: 2,
                      backgroundColor: "rgba(255,255,255,0.8)",
                      "&:hover": {
                        backgroundColor: "#f7941d",
                        color: "white",
                        transform: "scale(1.1)",
                      },
                      transition: "all 0.2s ease",
                    }}
                    size="medium" // Increased from small
                  >
                    <ArrowForwardIosIcon />
                  </IconButton>
                </Tooltip>
              </>
            )}

            <CardMedia
              component="img"
              image={images[currentImage] || "/placeholder.svg?height=800&width=1000"}
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
              p: { xs: 3, md: 5 }, // Increased padding
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <ElectricBoltIcon sx={{ color: "#f7941d", mr: 1.5, fontSize: 24 }} />
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                  EMI Elektrik
                </Typography>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3, // Increased margin
                  color: "#1e2a38",
                  fontSize: { xs: "1.35rem", md: "1.7rem" }, // Increased font size
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  lineHeight: 1.3,
                }}
              >
                {product.name}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 4 }}>
                {" "}
                {/* Increased margin and gap */}
                {product.features && product.features.length > 0 ? (
                  product.features.map((feat) => (
                    <Chip
                      key={feat}
                      label={feat}
                      size="medium" // Changed from small to medium
                      sx={{
                        backgroundColor: "#f5f5f5",
                        color: "#1e2a38",
                        fontWeight: 500,
                        fontSize: "0.9rem", // Increased font size
                        py: 2.5, // Increased padding
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
                px: 4, // Increased padding
                py: 1.5, // Increased padding
                fontSize: "1rem", // Increased font size
                "&:hover": {
                  backgroundColor: "#1e2a38",
                  transform: "translateX(5px)",
                },
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(247, 148, 29, 0.3)",
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
