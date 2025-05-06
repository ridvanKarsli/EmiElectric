"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  CardMedia,
  Tabs,
  Tab,
  Typography,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  Grid,
  Divider,
  Fade,
  Zoom,
  Tooltip,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"
import DownloadIcon from "@mui/icons-material/Download"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"
import DescriptionIcon from "@mui/icons-material/Description"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import InfoIcon from "@mui/icons-material/Info"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

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
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1rem",
          minWidth: 100,
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
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontWeight: 700,
          backgroundColor: "#f7941d",
          color: "white",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
          overflow: "hidden",
        },
      },
    },
  },
})

const ProductModal = ({ product, open, onClose, onDownloadClick }) => {
  const [tab, setTab] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"))
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const images = product?.gallery || [product?.image]

  useEffect(() => {
    // Reset to first image when modal opens with a new product
    setCurrentImage(0)
  }, [product])

  if (!product) return null

  const handleTabChange = (event, newValue) => {
    setTab(newValue)
  }

  const handleDownload = (documentType) => {
    const document = {
      type: documentType,
      name: `${product.name} - ${documentType === "tds" ? "Teknik Veri" : "Çizim"}`,
      url: documentType === "tds" ? product.tdsFile : product.drawingFile,
    }

    if (onDownloadClick) {
      onDownloadClick(document)
    } else {
      window.open(document.url, "_blank")
    }
  }

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleThumbnailClick = (index) => {
    setCurrentImage(index)
  }

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="lg"
        fullScreen={fullScreen}
        TransitionComponent={Zoom}
        transitionDuration={300}
      >
        <DialogTitle
          sx={{
            bgcolor: "#1e2a38",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2.5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ElectricBoltIcon sx={{ mr: 1.5, color: "#f7941d" }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
              {product.name}
            </Typography>
          </Box>
          <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close" sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ p: 0 }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
            {/* Left side - Images */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" }, // Increased from 45% to 50%
                bgcolor: "#f5f5f5",
                p: 4, // Increased padding
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Main Image */}
              <Box sx={{ position: "relative", mb: 3 }}>
                <Fade in={true} key={currentImage}>
                  <CardMedia
                    component="img"
                    src={images[currentImage] || "/placeholder.svg?height=800&width=1000"}
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: { xs: 300, md: 450 }, // Increased from 250/350 to 300/450
                      objectFit: "cover",
                      borderRadius: 3, // Increased border radius
                      boxShadow: "0 8px 24px rgba(0,0,0,0.15)", // Enhanced shadow
                      border: "4px solid white", // Thicker border
                    }}
                  />
                </Fade>

                {images.length > 1 && (
                  <>
                    <IconButton
                      onClick={handlePrevImage}
                      sx={{
                        position: "absolute",
                        left: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(255,255,255,0.8)",
                        "&:hover": {
                          backgroundColor: "#f7941d",
                          color: "white",
                        },
                        size: "large", // Larger button
                      }}
                    >
                      <ArrowBackIosNewIcon fontSize="medium" />
                    </IconButton>

                    <IconButton
                      onClick={handleNextImage}
                      sx={{
                        position: "absolute",
                        right: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(255,255,255,0.8)",
                        "&:hover": {
                          backgroundColor: "#f7941d",
                          color: "white",
                        },
                        size: "large", // Larger button
                      }}
                    >
                      <ArrowForwardIosIcon fontSize="medium" />
                    </IconButton>
                  </>
                )}
              </Box>

              {/* Thumbnails */}
              {images.length > 1 && (
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  {" "}
                  {/* Increased spacing */}
                  {images.map((img, index) => (
                    <Grid item xs={3} key={index}>
                      <Box
                        component="img"
                        src={img}
                        alt={`${product.name} - görsel ${index + 1}`}
                        onClick={() => handleThumbnailClick(index)}
                        sx={{
                          width: "100%",
                          height: 80, // Increased from 60 to 80
                          objectFit: "cover",
                          borderRadius: 2, // Increased border radius
                          cursor: "pointer",
                          border: index === currentImage ? "3px solid #f7941d" : "3px solid transparent", // Thicker border
                          opacity: index === currentImage ? 1 : 0.7,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            opacity: 1,
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}

              {/* Product Features */}
              <Box sx={{ width: "100%", mt: 4 }}>
                {" "}
                {/* Increased margin */}
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: "#1e2a38", fontSize: "1.1rem" }}>
                  Ürün Özellikleri
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {" "}
                  {/* Increased gap */}
                  {product.features && product.features.length > 0 ? (
                    product.features.map((feat) => (
                      <Chip
                        key={feat}
                        label={feat}
                        icon={<CheckCircleIcon />}
                        sx={{
                          backgroundColor: "#fff",
                          color: "#1e2a38",
                          border: "1px solid #f7941d",
                          fontWeight: 500,
                          fontSize: "0.9rem", // Increased font size
                          py: 2.5, // Increased padding
                          "&:hover": {
                            backgroundColor: "#f7941d",
                            color: "white",
                          },
                          "& .MuiChip-icon": {
                            color: "#f7941d",
                          },
                          "&:hover .MuiChip-icon": {
                            color: "white",
                          },
                        }}
                      />
                    ))
                  ) : (
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                      Bu ürün için henüz özellik girilmemiştir.
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>

            {/* Right side - Content */}
            <Box sx={{ flex: 1, p: 4 }}>
              {" "}
              {/* Increased padding */}
              <Tabs
                value={tab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  mb: 4, // Increased margin
                  "& .MuiTabs-indicator": {
                    height: 4, // Thicker indicator
                    borderRadius: 2,
                  },
                }}
              >
                <Tab label="Teknik Veri" />
                <Tab label="Dokümanlar" />
                <Tab label="Ürün Bilgisi" />
              </Tabs>
              {/* Tab 1 - Teknik Veri */}
              {tab === 0 && (
                <>
                  {product.technicalData && product.technicalData.length > 0 ? (
                    <TableContainer
                      component={Paper}
                      sx={{
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)", // Added shadow
                        border: "1px solid #eee",
                        borderRadius: 3, // Increased border radius
                        overflow: "hidden",
                      }}
                    >
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Parametre</TableCell>
                            <TableCell>Değer</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {product.technicalData.map((row) => (
                            <TableRow key={row.label} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                              <TableCell component="th" scope="row" sx={{ fontWeight: 500, fontSize: "1rem" }}>
                                {row.label}
                              </TableCell>
                              <TableCell sx={{ fontSize: "1rem" }}>{row.value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  ) : (
                    <Box sx={{ p: 5, textAlign: "center" }}>
                      {" "}
                      {/* Increased padding */}
                      <InfoIcon sx={{ fontSize: 60, color: "text.secondary", mb: 3, opacity: 0.5 }} />{" "}
                      {/* Larger icon */}
                      <Typography variant="h6" color="text.secondary">
                        Teknik veri bulunmamaktadır
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Bu ürün için henüz teknik veri girilmemiştir.
                      </Typography>
                    </Box>
                  )}
                </>
              )}
              {/* Tab 2 - Dokümanlar */}
              {tab === 1 && (
                <Box sx={{ p: 3 }}>
                  {" "}
                  {/* Increased padding */}
                  <Typography variant="subtitle1" sx={{ mb: 4, color: "#666", fontSize: "1.05rem" }}>
                    {" "}
                    {/* Increased margin and font size */}
                    Ürün ile ilgili teknik dokümanları indirebilirsiniz. İndirmek için lütfen aşağıdaki butonlara
                    tıklayınız.
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3 }}>
                    {" "}
                    {/* Increased gap */}
                    <Button
                      variant="contained"
                      startIcon={<PictureAsPdfIcon />}
                      onClick={() => handleDownload("tds")}
                      sx={{
                        backgroundColor: "#f7941d",
                        color: "white",
                        py: 2, // Increased padding
                        px: 4, // Increased padding
                        fontSize: "1rem", // Increased font size
                        "&:hover": {
                          backgroundColor: "#e67e00",
                          transform: "translateY(-3px)", // More pronounced hover effect
                          boxShadow: "0 8px 16px rgba(247, 148, 29, 0.3)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Teknik Veri Sayfası (TDS)
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DescriptionIcon />}
                      onClick={() => handleDownload("drawing")}
                      sx={{
                        borderColor: "#1e2a38",
                        color: "#1e2a38",
                        py: 2, // Increased padding
                        px: 4, // Increased padding
                        fontSize: "1rem", // Increased font size
                        "&:hover": {
                          borderColor: "#f7941d",
                          color: "#f7941d",
                          backgroundColor: "rgba(247, 148, 29, 0.05)",
                          transform: "translateY(-3px)", // More pronounced hover effect
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Teknik Çizim
                    </Button>
                  </Box>
                  <Box sx={{ mt: 5, p: 4, bgcolor: "#f5f5f5", borderRadius: 3, border: "1px dashed #ccc" }}>
                    {" "}
                    {/* Increased margin, padding, and border radius */}
                    <Typography
                      variant="body2"
                      sx={{ color: "#666", display: "flex", alignItems: "center", fontSize: "0.95rem" }}
                    >
                      {" "}
                      {/* Increased font size */}
                      <DownloadIcon sx={{ mr: 1.5, fontSize: 24, color: "#f7941d" }} /> {/* Larger icon */}
                      Dokümanları indirmek için form doldurmanız gerekebilir.
                    </Typography>
                  </Box>
                </Box>
              )}
              {/* Tab 3 - Ürün Bilgisi */}
              {tab === 2 && (
                <Box sx={{ p: 3 }}>
                  {" "}
                  {/* Increased padding */}
                  <Typography variant="h5" gutterBottom sx={{ color: "#1e2a38", fontWeight: 600 }}>
                    {" "}
                    {/* Increased from h6 to h5 */}
                    {product.name}
                  </Typography>
                  <Divider sx={{ my: 3 }} /> {/* Increased margin */}
                  <Typography variant="body1" paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
                    {" "}
                    {/* Increased font size and line height */}
                    Bu ürün, EMI Elektrik'in yüksek kalite standartlarında üretilmiştir. Dayanıklı yapısı ve güvenilir
                    performansı ile uzun yıllar sorunsuz kullanım sağlar.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ fontSize: "1.05rem", lineHeight: 1.6 }}>
                    {" "}
                    {/* Increased font size and line height */}
                    Ürünlerimiz, uluslararası standartlara uygun olarak üretilmekte ve test edilmektedir. Tüm
                    ürünlerimiz 2 yıl garanti kapsamındadır.
                  </Typography>
                  <Box sx={{ bgcolor: "#1e2a38", color: "white", p: 4, borderRadius: 3, mt: 4 }}>
                    {" "}
                    {/* Increased padding, border radius, and margin */}
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, display: "flex", alignItems: "center", fontSize: "1.1rem" }}
                    >
                      {" "}
                      {/* Increased font size */}
                      <ElectricBoltIcon sx={{ mr: 1.5, color: "#f7941d", fontSize: 24 }} /> {/* Larger icon */}
                      Teknik Destek
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, opacity: 0.9, fontSize: "0.95rem", lineHeight: 1.5 }}>
                      {" "}
                      {/* Increased margin, font size, and line height */}
                      Ürünlerimiz hakkında daha fazla bilgi almak veya teknik destek için bizimle iletişime
                      geçebilirsiniz.
                    </Typography>
                    <Button
                      variant="contained"
                      size="large" // Changed from small to large
                      sx={{
                        mt: 3, // Increased margin
                        bgcolor: "#f7941d",
                        px: 3, // Increased padding
                        "&:hover": {
                          bgcolor: "#e67e00",
                        },
                      }}
                      onClick={() => (window.location.href = "/iletisim")}
                    >
                      İletişime Geç
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3, bgcolor: "#f5f5f5" }}>
          {" "}
          {/* Increased padding */}
          <Button
            onClick={onClose}
            sx={{
              color: "#1e2a38",
              fontSize: "0.95rem", // Increased font size
              "&:hover": {
                backgroundColor: "rgba(30, 42, 56, 0.05)",
              },
            }}
          >
            Kapat
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}

export default ProductModal
