"use client"

import { useState } from "react"
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  InputAdornment,
  Breadcrumbs,
  Link,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"
import HomeIcon from "@mui/icons-material/Home"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

import FilterPanel from '../components/product/FilterPanel';
import ProductCard from '../components/product/ProductCard';
import ProductModal from '../components/product/ProductModal';
import DocumentDownloadForm from '../components/product/DocumentDownloadForm';

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

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showDownloadForm, setShowDownloadForm] = useState(false)
  const [selectedDocument, setSelectedDocument] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState([
    { id: 1, label: "Tüm Ürünler", active: true },
    { id: 2, label: "Kablolar", active: false },
    { id: 3, label: "Şalt Malzemeleri", active: false },
    { id: 4, label: "Aydınlatma", active: false },
    { id: 5, label: "Otomasyon", active: false },
  ])

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // Örnek ürün verileri
  const products = [
    {
      id: 1,
      name: "NYY Kablo 3x2.5mm²",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Bakır İletken", "PVC Kılıf", "Alev Geciktirici", "TSE Belgeli"],
      technicalData: [
        { label: "Kesit", value: "3x2.5mm²" },
        { label: "İletken", value: "Bakır" },
        { label: "Dış Kılıf", value: "PVC" },
        { label: "Çalışma Sıcaklığı", value: "-15°C / +70°C" },
        { label: "Standart", value: "TS EN 50525-3-31" },
      ],
      tdsFile: "#",
      drawingFile: "#",
      category: "Kablolar",
    },
    {
      id: 2,
      name: "Kompakt Şalter 3x63A",
      image: "/placeholder.svg?height=600&width=800",
      features: ["Termik Koruma", "10kA Kesme Kapasitesi", "DIN Ray Montaj", "CE Belgeli"],
      technicalData: [
        { label: "Anma Akımı", value: "63A" },
        { label: "Kutup Sayısı", value: "3" },
        { label: "Kesme Kapasitesi", value: "10kA" },
        { label: "Montaj Tipi", value: "DIN Ray" },
        { label: "Standart", value: "IEC 60947-2" },
      ],
      tdsFile: "#",
      drawingFile: "#",
      category: "Şalt Malzemeleri",
    },
    {
      id: 3,
      name: "LED Panel 60x60 40W",
      image: "/placeholder.svg?height=600&width=800",
      features: ["40W Güç", "4000K Renk Sıcaklığı", "3600lm Işık Akısı", "Slim Tasarım"],
      technicalData: [
        { label: "Güç", value: "40W" },
        { label: "Renk Sıcaklığı", value: "4000K" },
        { label: "Işık Akısı", value: "3600lm" },
        { label: "Boyutlar", value: "595x595x10mm" },
        { label: "Ömür", value: "50.000 saat" },
      ],
      tdsFile: "#",
      drawingFile: "#",
      category: "Aydınlatma",
    },
  ]

  // Filtreleme ve arama işlemleri
  const filteredProducts = products.filter((product) => {
    // Kategori filtresi
    const activeFilter = filters.find((f) => f.active)
    const categoryMatch = activeFilter.id === 1 || product.category === activeFilter.label

    // Arama filtresi
    const searchMatch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()))

    return categoryMatch && searchMatch
  })

  const handleFilterChange = (filterId) => {
    setFilters(
      filters.map((f) => ({
        ...f,
        active: f.id === filterId,
      })),
    )
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleDownloadClick = (document) => {
    setSelectedDocument(document)
    setShowDownloadForm(true)
    setShowModal(false)
  }

  const handleFormSubmit = async (formData) => {
    console.log("Form submitted:", formData)
    console.log("Document:", selectedDocument)

    // Burada form verilerini API'ye gönderme işlemi yapılabilir

    // Başarılı form gönderimi sonrası doküman indirme işlemi
    setTimeout(() => {
      setShowDownloadForm(false)
      // Gerçek bir uygulamada burada doküman indirme işlemi yapılır
    }, 3000)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Arama ve Filtreleme */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={8}>
            <FilterPanel filters={filters} onChange={handleFilterChange} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Ürün Ara..."
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#f7941d" }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 2,
                  bgcolor: "#fff",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f0f0f0",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f7941d",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#f7941d",
                  },
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Ürün Listesi */}
        {filteredProducts.length > 0 ? (
          <Box sx={{ mb: 4 }}>
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
                isReversed={index % 2 !== 0}
              />
            ))}
          </Box>
        ) : (
          <Box sx={{ textAlign: "center", py: 8, bgcolor: "#f5f5f5", borderRadius: 2 }}>
            <Typography variant="h6" sx={{ color: "#666", mb: 2 }}>
              Arama kriterlerinize uygun ürün bulunamadı.
            </Typography>
            <Typography variant="body2" sx={{ color: "#888" }}>
              Lütfen farklı bir arama terimi deneyin veya filtreleri değiştirin.
            </Typography>
          </Box>
        )}

        {/* Ürün Detay Modalı */}
        {showModal && selectedProduct && (
          <ProductModal
            product={selectedProduct}
            open={showModal}
            onClose={handleCloseModal}
            onDownloadClick={handleDownloadClick}
          />
        )}

        {/* Doküman İndirme Formu */}
        {showDownloadForm && selectedDocument && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1300,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px",
            }}
            onClick={() => setShowDownloadForm(false)}
          >
            <Box onClick={(e) => e.stopPropagation()}>
              <DocumentDownloadForm document={selectedDocument} onSubmit={handleFormSubmit} />
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default ProductsPage
