"use client"

import { useState } from "react"
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
  Stack,
  Container,
  Grid,
  InputAdornment,
  IconButton,
  Alert,
  Snackbar,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import SearchIcon from "@mui/icons-material/Search"
import AddIcon from "@mui/icons-material/Add"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"

import AdminProductCard from "../components/admin/AdminProductCard";
import ProductModal from "../components/admin/ProductModal";
import AddProductForm from "../components/admin/AddProductForm";

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
  },
})

const initialProducts = [
  {
    id: 1,
    name: "Ürün A",
    image: "/placeholder.svg?height=600&width=800",
    gallery: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    features: ["Dayanıklı", "Enerji Verimli", "Kolay Kurulum"],
    technicalData: [
      { label: "Güç (W)", value: "50" },
      { label: "Voltaj (V)", value: "220" },
      { label: "IP Sınıfı", value: "IP65" },
    ],
    tdsFile: "#",
    drawingFile: "#",
  },
  {
    id: 2,
    name: "Ürün B",
    image: "/placeholder.svg?height=600&width=800",
    gallery: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    features: ["Yüksek Performans", "Düşük Maliyet"],
    technicalData: [
      { label: "Güç (W)", value: "100" },
      { label: "Voltaj (V)", value: "110" },
      { label: "IP Sınıfı", value: "IP54" },
    ],
    tdsFile: "#",
    drawingFile: "#",
  },
  {
    id: 3,
    name: "Ürün C",
    image: "/placeholder.svg?height=600&width=800",
    gallery: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
    features: ["Çevre Dostu", "Uzun Ömürlü"],
    technicalData: [
      { label: "Güç (W)", value: "75" },
      { label: "Voltaj (V)", value: "240" },
      { label: "IP Sınıfı", value: "IP67" },
    ],
    tdsFile: "#",
    drawingFile: "#",
  },
]

const AdminPanel = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [products, setProducts] = useState(initialProducts)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [notification, setNotification] = useState({ open: false, message: "", severity: "success" })
  const [loginError, setLoginError] = useState("")

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // Filtreleme işlemi
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const handleLogin = (e) => {
    e.preventDefault()

    if (username === "admin123" && password === "admin") {
      setIsAuthenticated(true)
      setLoginError("")
      showNotification("Başarıyla giriş yapıldı", "success")
    } else {
      setLoginError("Hatalı kullanıcı adı veya şifre")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUsername("")
    setPassword("")
    showNotification("Çıkış yapıldı", "info")
  }

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }])
    showNotification("Ürün başarıyla eklendi", "success")
  }

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prev) => prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)))
    showNotification("Ürün başarıyla güncellendi", "success")
  }

  const handleDelete = (id) => {
    if (window.confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id))
      showNotification("Ürün silindi", "warning")
    }
  }

  const openEditModal = (product) => {
    setEditingProduct(product)
    setModalOpen(true)
  }

  const openAddModal = () => {
    setEditingProduct(null)
    setModalOpen(true)
  }

  const showNotification = (message, severity) => {
    setNotification({
      open: true,
      message,
      severity,
    })
  }

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false })
  }

  if (!isAuthenticated) {
    return (
      <ThemeProvider theme={theme}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5" p={2}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              width: "100%",
              maxWidth: 400,
              borderRadius: 3,
              border: "1px solid rgba(247, 148, 29, 0.3)",
            }}
          >
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Avatar sx={{ bgcolor: "#f7941d", mx: "auto", mb: 2, width: 56, height: 56 }}>
                <LockOutlinedIcon fontSize="large" />
              </Avatar>
              <Typography variant="h5" component="h1" sx={{ fontWeight: 700, color: "#1e2a38" }}>
                Admin Girişi
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 1 }}>
                <ElectricBoltIcon sx={{ color: "#f7941d", mr: 0.5 }} />
                <Typography variant="body2" color="text.secondary">
                  EMI Elektrik Yönetim Paneli
                </Typography>
              </Box>
            </Box>

            {loginError && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {loginError}
              </Alert>
            )}

            <Box component="form" onSubmit={handleLogin}>
              <TextField
                fullWidth
                margin="normal"
                label="Kullanıcı Adı"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  setLoginError("")
                }}
                required
                autoFocus
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Avatar sx={{ width: 24, height: 24, bgcolor: "#f7941d" }}>
                        <Typography variant="caption" sx={{ fontWeight: 700 }}>
                          A
                        </Typography>
                      </Avatar>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Şifre"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setLoginError("")
                }}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  backgroundColor: "#f7941d",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#e67e00",
                  },
                }}
              >
                Giriş Yap
              </Button>

              <Typography variant="caption" color="text.secondary" align="center" display="block">
                Demo için: Kullanıcı Adı: admin123, Şifre: admin
              </Typography>
            </Box>
          </Paper>
        </Box>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
        {/* Header */}
        <Box sx={{ bgcolor: "#1e2a38", color: "white", py: 2, px: 3, boxShadow: 2 }}>
          <Container maxWidth="xl">
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ElectricBoltIcon sx={{ mr: 1.5, color: "#f7941d", fontSize: 32 }} />
                <Typography variant="h5" component="h1" sx={{ fontWeight: 700 }}>
                  Admin Paneli
                </Typography>
              </Box>

              <Button
                variant="outlined"
                onClick={handleLogout}
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.5)",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Çıkış Yap
              </Button>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Grid container spacing={3}>
            {/* Sol Taraf - Ürün Ekleme Formu */}
            <Grid item xs={12} md={4} lg={3}>
              <AddProductForm onAdd={handleAddProduct} />
            </Grid>

            {/* Sağ Taraf - Ürün Listesi */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  mb: 3,
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(247, 148, 29, 0.3)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: { xs: "stretch", sm: "center" },
                    gap: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#1e2a38" }}>
                    Ürün Yönetimi
                  </Typography>

                  <Box sx={{ display: "flex", gap: 2, width: { xs: "100%", sm: "auto" } }}>
                    <TextField
                      placeholder="Ürün Ara..."
                      size="small"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      sx={{ width: { xs: "100%", sm: 200 } }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: "#f7941d" }} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Button
                      variant="contained"
                      startIcon={<AddIcon />}
                      onClick={openAddModal}
                      sx={{
                        backgroundColor: "#f7941d",
                        color: "white",
                        whiteSpace: "nowrap",
                        "&:hover": {
                          backgroundColor: "#e67e00",
                        },
                      }}
                    >
                      Yeni Ürün
                    </Button>
                  </Box>
                </Box>
              </Paper>

              {filteredProducts.length > 0 ? (
                <Stack spacing={3}>
                  {filteredProducts.map((product) => (
                    <AdminProductCard
                      key={product.id}
                      product={product}
                      onEdit={openEditModal}
                      onDelete={handleDelete}
                    />
                  ))}
                </Stack>
              ) : (
                <Paper
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: 3,
                    border: "1px dashed rgba(247, 148, 29, 0.5)",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#666", mb: 1 }}>
                    Ürün Bulunamadı
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {searchQuery
                      ? "Arama kriterlerinize uygun ürün bulunamadı."
                      : "Henüz ürün eklenmemiş. Yeni ürün eklemek için 'Yeni Ürün' butonuna tıklayın."}
                  </Typography>
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>

        {/* Ürün Ekleme/Düzenleme Modalı */}
        <ProductModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          initialData={editingProduct}
          onSubmit={(product) => {
            editingProduct ? handleUpdateProduct(product) : handleAddProduct(product)
            setModalOpen(false)
          }}
        />

        {/* Bildirimler */}
        <Snackbar
          open={notification.open}
          autoHideDuration={4000}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={notification.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  )
}

export default AdminPanel
