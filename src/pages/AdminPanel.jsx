"use client";
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AdminProductCard from "../components/admin/AdminProductCard";
import ProductModal from "../components/admin/ProductModal";

const initialProducts = [
  {
    id: 1,
    name: "Ürün A",
    image: "/product-a-1.png",
    gallery: ["/product-a-1.png", "/product-a-2.png", "/product-a-3.png"],
    features: ["Dayanıklı", "Enerji Verimli", "Kolay Kurulum"],
    technicalData: [
      { label: "Güç (W)", value: "50" },
      { label: "Voltaj (V)", value: "220" },
      { label: "IP Sınıfı", value: "IP65" },
    ],
    tdsFile: "/tds/urun-a.pdf",
    drawingFile: "/drawings/urun-a.dwg",
  },
  {
    id: 2,
    name: "Ürün B",
    image: "/product-b-1.png",
    gallery: ["/react.svg", "/react.svg"],
    features: ["Yüksek Performans", "Düşük Maliyet"],
    technicalData: [
      { label: "Güç (W)", value: "100" },
      { label: "Voltaj (V)", value: "110" },
      { label: "IP Sınıfı", value: "IP54" },
    ],
    tdsFile: "/tds/urun-b.pdf",
    drawingFile: "/drawings/urun-b.dwg",
  },
  {
    id: 3,
    name: "Ürün C",
    image: "/product-c-1.png",
    gallery: ["/product-c-1.png", "/product-c-2.png", "/product-c-3.png"],
    features: ["Çevre Dostu", "Uzun Ömürlü"],
    technicalData: [
      { label: "Güç (W)", value: "75" },
      { label: "Voltaj (V)", value: "240" },
      { label: "IP Sınıfı", value: "IP67" },
    ],
    tdsFile: "/tds/urun-c.pdf",
    drawingFile: "/drawings/urun-c.dwg",
  },
];

const AdminPanel = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleLogin = () => {
    if (username === "admin123" && password === "admin") {
      setIsAuthenticated(true);
    } else {
      alert("Hatalı kullanıcı adı veya şifre");
    }
  };

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  const handleDelete = (id) => {
    if (confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setModalOpen(true);
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setModalOpen(true);
  };

  if (!isAuthenticated) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="#f5f5f5"
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: 350,
            textAlign: "center",
            border: "1px solid #f7941d",
            borderRadius: 3,
          }}
        >
          <Avatar sx={{ bgcolor: "#f7941d", mx: "auto", mb: 2 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h6" gutterBottom sx={{ color: "#1e2a38" }}>
            Admin Girişi
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Kullanıcı Adı"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Şifre"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#f7941d",
              color: "white",
              "&:hover": {
                backgroundColor: "#1e2a38",
              },
            }}
            onClick={handleLogin}
          >
            Giriş Yap
          </Button>
        </Paper>
      </Box>
    );
  }

  return (
    <Box p={2} sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h4" mb={3} sx={{ color: "#1e2a38", fontWeight: 600 }}>
        Admin Paneli - Ürün Yönetimi
      </Typography>

      <Button
        variant="contained"
        sx={{
          mb: 3,
          backgroundColor: "#f7941d",
          color: "white",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#1e2a38",
          },
        }}
        onClick={openAddModal}
      >
        + Ürün Ekle
      </Button>

      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={editingProduct}
        onSubmit={(product) => {
          editingProduct
            ? handleUpdateProduct(product)
            : handleAddProduct(product);
          setModalOpen(false);
        }}
      />

      <Stack spacing={3}>
        {products.map((product, index) => (
          <AdminProductCard
            key={product.id}
            product={product}
            onEdit={openEditModal}
            onDelete={handleDelete}
            isReversed={index % 2 === 1}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default AdminPanel;
