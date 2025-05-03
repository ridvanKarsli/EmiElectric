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
          borderRadius: 12,
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
            py: 2,
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
                width: { xs: "100%", md: "45%" },
                bgcolor: "#f5f5f5",
                p: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Main Image */}
              <Box sx={{ position: "relative", mb: 2 }}>
                <Fade in={true} key={currentImage}>
                  <CardMedia
                    component="img"
                    src={images[currentImage] || "/placeholder.svg?height=600&width=800"}
                    alt={product.name}
                    sx={{
                      width: "100%",
                      height: { xs: 250, md: 350 },
                      objectFit: "cover",
                      borderRadius: 2,
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      border: "3px solid white",
                    }}
                  />
                </Fade>

                {images.length > 1 && (
                  <>
                    <IconButton
                      onClick={handlePrevImage}
                      sx={{
                        position: "absolute",
                        left: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(255,255,255,0.8)",
                        "&:hover": {
                          backgroundColor: "#f7941d",
                          color: "white",
                        },
                      }}
                    >
                      <ArrowBackIosNewIcon />
                    </IconButton>

                    <IconButton
                      onClick={handleNextImage}
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(255,255,255,0.8)",
                        "&:hover": {
                          backgroundColor: "#f7941d",
                          color: "white",
                        },
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </>
                )}
              </Box>

              {/* Thumbnails */}
              {images.length > 1 && (
                <Grid container spacing={1} sx={{ mt: 1 }}>
                  {images.map((img, index) => (
                    <Grid item xs={3} key={index}>
                      <Box
                        component="img"
                        src={img}
                        alt={`${product.name} - görsel ${index + 1}`}
                        onClick={() => handleThumbnailClick(index)}
                        sx={{
                          width: "100%",
                          height: 60,
                          objectFit: "cover",
                          borderRadius: 1,
                          cursor: "pointer",
                          border: index === currentImage ? "2px solid #f7941d" : "2px solid transparent",
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
              <Box sx={{ width: "100%", mt: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: "#1e2a38" }}>
                  Ürün Özellikleri
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
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
            <Box sx={{ flex: 1, p: 3 }}>
              <Tabs
                value={tab}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  mb: 3,
                  "& .MuiTabs-indicator": {
                    height: 3,
                    borderRadius: 1.5,
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
                        boxShadow: "none",
                        border: "1px solid #eee",
                        borderRadius: 2,
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
                              <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                                {row.label}
                              </TableCell>
                              <TableCell>{row.value}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  ) : (
                    <Box sx={{ p: 4, textAlign: "center" }}>
                      <InfoIcon sx={{ fontSize: 48, color: "text.secondary", mb: 2, opacity: 0.5 }} />
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
                <Box sx={{ p: 2 }}>
                  <Typography variant="subtitle1" sx={{ mb: 3, color: "#666" }}>
                    Ürün ile ilgili teknik dokümanları indirebilirsiniz. İndirmek için lütfen aşağıdaki butonlara
                    tıklayınız.
                  </Typography>

                  <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
                    <Button
                      variant="contained"
                      startIcon={<PictureAsPdfIcon />}
                      onClick={() => handleDownload("tds")}
                      sx={{
                        backgroundColor: "#f7941d",
                        color: "white",
                        py: 1.5,
                        px: 3,
                        "&:hover": {
                          backgroundColor: "#e67e00",
                          transform: "translateY(-2px)",
                          boxShadow: "0 4px 12px rgba(247, 148, 29, 0.3)",
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
                        py: 1.5,
                        px: 3,
                        "&:hover": {
                          borderColor: "#f7941d",
                          color: "#f7941d",
                          backgroundColor: "rgba(247, 148, 29, 0.05)",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Teknik Çizim
                    </Button>
                  </Box>

                  <Box sx={{ mt: 4, p: 3, bgcolor: "#f5f5f5", borderRadius: 2, border: "1px dashed #ccc" }}>
                    <Typography variant="body2" sx={{ color: "#666", display: "flex", alignItems: "center" }}>
                      <DownloadIcon sx={{ mr: 1.5, fontSize: 20, color: "#f7941d" }} />
                      Dokümanları indirmek için form doldurmanız gerekebilir.
                    </Typography>
                  </Box>
                </Box>
              )}

              {/* Tab 3 - Ürün Bilgisi */}
              {tab === 2 && (
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: "#1e2a38", fontWeight: 600 }}>
                    {product.name}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="body1" paragraph>
                    Bu ürün, EMI Elektrik'in yüksek kalite standartlarında üretilmiştir. Dayanıklı yapısı ve güvenilir
                    performansı ile uzun yıllar sorunsuz kullanım sağlar.
                  </Typography>

                  <Typography variant="body1" paragraph>
                    Ürünlerimiz, uluslararası standartlara uygun olarak üretilmekte ve test edilmektedir. Tüm
                    ürünlerimiz 2 yıl garanti kapsamındadır.
                  </Typography>

                  <Box sx={{ bgcolor: "#1e2a38", color: "white", p: 2, borderRadius: 2, mt: 3 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, display: "flex", alignItems: "center" }}>
                      <ElectricBoltIcon sx={{ mr: 1, color: "#f7941d" }} />
                      Teknik Destek
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                      Ürünlerimiz hakkında daha fazla bilgi almak veya teknik destek için bizimle iletişime
                      geçebilirsiniz.
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        mt: 2,
                        bgcolor: "#f7941d",
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

        <DialogActions sx={{ p: 2, bgcolor: "#f5f5f5" }}>
          <Button
            onClick={onClose}
            sx={{
              color: "#1e2a38",
              "&:hover": {
                backgroundColor: "rgba(30, 42, 56, 0.05)",
              },
            }}
          >
            Kapat
          </Button>

          <Tooltip title="Ürün sayfasına git">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f7941d",
                color: "white",
                "&:hover": {
                  backgroundColor: "#e67e00",
                },
              }}
              onClick={() => (window.location.href = `/urunler/${product.id}`)}
            >
              Ürün Sayfasına Git
            </Button>
          </Tooltip>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}

export default ProductModal
