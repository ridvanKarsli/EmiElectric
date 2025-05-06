"use client"

import { useState } from "react"
import {
  Container,
  Typography,
  Box,
  TextField,
  InputAdornment,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  Pagination,
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

import FilterPanel from '../components/product/FilterPanel';
import ProductCard from '../components/product/ProductCard';
import ProductModal from '../components/product/ProductModal';
import DocumentDownloadForm from '../components/product/DocumentDownloadForm';

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
  const [page, setPage] = useState(1)
  const productsPerPage = 6

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // Sample product data with multiple images
  const products = [
    {
      id: 1,
      name: "NYY Kablo 3x2.5mm²",
      image: "/test.png",
      gallery: ["/test.png", "/test.png", "/test.png"],
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
      image: "/test.png",
      gallery: ["/test.png", "/test.png", "/test.png", "/test.png"],
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
      image: "/test.png",
      gallery: ["/test.png", "/test.png", "/test.png"],
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
    {
      id: 4,
      name: "Endüstriyel Sensör",
      image: "/test.png",
      gallery: ["/test.png", "/test.png"],
      features: ["Endüktif", "IP67 Koruma", "PNP Çıkış", "M18 Gövde"],
      technicalData: [
        { label: "Tip", value: "Endüktif" },
        { label: "Koruma Sınıfı", value: "IP67" },
        { label: "Çıkış Tipi", value: "PNP" },
        { label: "Gövde", value: "M18" },
        { label: "Algılama Mesafesi", value: "8mm" },
      ],
      tdsFile: "#",
      drawingFile: "#",
      category: "Otomasyon",
    },
    {
      id: 5,
      name: "NHXMH Kablo 5x1.5mm²",
      image: "/test.png",
      gallery: ["/test.png", "/test.png", "/test.png"],
      features: ["Halojen Free", "Bakır İletken", "Alev Geciktirici", "TSE Belgeli"],
      technicalData: [
        { label: "Kesit", value: "5x1.5mm²" },
        { label: "İletken", value: "Bakır" },
        { label: "Dış Kılıf", value: "HFFR" },
        { label: "Çalışma Sıcaklığı", value: "-15°C / +70°C" },
        { label: "Standart", value: "TS EN 50525-3-31" },
      ],
      tdsFile: "#",
      drawingFile: "#",
      category: "Kablolar",
    },
    {
      id: 6,
      name: "LED Projektör 100W",
      image: "/test.png",
      gallery: ["/test.png", "/test.png"],
      features: ["100W Güç", "6500K Renk Sıcaklığı", "IP65 Koruma", "Alüminyum Gövde"],
      technicalData: [
        { label: "Güç", value: "100W" },
        { label: "Renk Sıcaklığı", value: "6500K" },
        { label: "Koruma Sınıfı", value: "IP65" },
        { label: "Gövde", value: "Alüminyum" },
        { label: "Ömür", value: "30.000 saat" },
      ],
      tdsFile: "#",
      drawingFile: "#",
      category: "Aydınlatma",
    },
  ]
  

  // Filtering and search operations
  const filteredProducts = products.filter((product) => {
    // Category filter
    const activeFilter = filters.find((f) => f.active)
    const categoryMatch = activeFilter.id === 1 || product.category === activeFilter.label

    // Search filter
    const searchMatch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()))

    return categoryMatch && searchMatch
  })

  // Pagination
  const indexOfLastProduct = page * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handleFilterChange = (filterId) => {
    setFilters(
      filters.map((f) => ({
        ...f,
        active: f.id === filterId,
      })),
    )
    setPage(1) // Reset to first page when filter changes
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

    // Here you can send form data to API

    // After successful form submission, download document
    setTimeout(() => {
      setShowDownloadForm(false)
      // In a real application, document download would happen here
    }, 3000)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setPage(1) // Reset to first page when search changes
  }

  const handlePageChange = (event, value) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Filter Panel */}
        <Box sx={{ mb: 3 }}>
          <FilterPanel filters={filters} onChange={handleFilterChange} />
        </Box>

        {/* Search - Now below the filter panel */}
        <Box sx={{ mb: 4 }}>
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
        </Box>

        {/* Product List */}
        {currentProducts.length > 0 ? (
          <Box sx={{ mb: 4 }}>
            {currentProducts.map((product, index) => (
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

        {/* Pagination */}
        {filteredProducts.length > productsPerPage && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              size={isMobile ? "small" : "medium"}
              showFirstButton
              showLastButton
            />
          </Box>
        )}

        {/* Product Detail Modal */}
        {showModal && selectedProduct && (
          <ProductModal
            product={selectedProduct}
            open={showModal}
            onClose={handleCloseModal}
            onDownloadClick={handleDownloadClick}
          />
        )}

        {/* Document Download Form */}
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
