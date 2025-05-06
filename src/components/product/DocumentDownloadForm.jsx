"use client"

import { useState } from "react"
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Alert,
  CircularProgress,
  createTheme,
  ThemeProvider,
  InputAdornment,
} from "@mui/material"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import BusinessIcon from "@mui/icons-material/Business"
import PhoneIcon from "@mui/icons-material/Phone"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import DescriptionIcon from "@mui/icons-material/Description"

// Custom theme creation
const theme = createTheme({
  palette: {
    primary: {
      main: "#F7941D",
    },
    secondary: {
      main: "#1E2A38",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#F7941D",
          "&.Mui-checked": {
            color: "#F7941D",
          },
        },
      },
    },
  },
})

const DocumentDownloadForm = ({ document, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    acceptTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      })
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Ad Soyad alanı zorunludur"
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-posta alanı zorunludur"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon alanı zorunludur"
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Kullanım şartlarını kabul etmelisiniz"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Call the onSubmit prop with form data
      if (onSubmit) {
        await onSubmit(formData)
      }

      setIsSuccess(true)

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          acceptTerms: false,
        })
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error)
      setErrors({
        ...errors,
        form: "Bir hata oluştu. Lütfen tekrar deneyiniz.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={5} // Increased elevation
        sx={{
          maxWidth: "550px", // Increased from 500px
          width: "100%",
          borderRadius: 4, // Increased border radius
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)", // Enhanced shadow
        }}
      >
        <Box sx={{ bgcolor: "#1e2a38", color: "white", p: 3, display: "flex", alignItems: "center" }}>
          <ElectricBoltIcon sx={{ mr: 1.5, color: "#f7941d", fontSize: 28 }} /> {/* Larger icon */}
          <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
            Doküman İndirme Formu
          </Typography>
        </Box>

        {isSuccess ? (
          <Box sx={{ p: 5, textAlign: "center" }}>
            {" "}
            {/* Increased padding */}
            <CheckCircleIcon sx={{ fontSize: 70, color: "success.main", mb: 3 }} />{" "}
            {/* Larger icon and increased margin */}
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: "success.main" }}>
              {" "}
              {/* Increased from h6 to h5 and increased margin */}
              İşlem Başarılı!
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem" }}>
              {" "}
              {/* Increased margin and font size */}
              Doküman indirme bağlantısı e-posta adresinize gönderilmiştir.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => setIsSuccess(false)}
              sx={{
                borderRadius: 2,
                py: 1.2, // Increased padding
                px: 4, // Increased padding
                fontSize: "1rem", // Increased font size
              }}
            >
              Tamam
            </Button>
          </Box>
        ) : (
          <>
            {document && (
              <Box sx={{ p: 3, bgcolor: "#f5f5f5", display: "flex", alignItems: "center" }}>
                <DescriptionIcon sx={{ mr: 1.5, color: "#f7941d", fontSize: 28 }} /> {/* Larger icon */}
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#1e2a38", fontSize: "0.95rem" }}>
                    {" "}
                    {/* Increased font size */}
                    İndirilecek Doküman:
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: "0.95rem" }}>
                    {" "}
                    {/* Increased font size */}
                    {document.name}
                  </Typography>
                </Box>
              </Box>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ p: 4 }}>
              {" "}
              {/* Increased padding */}
              <Typography variant="body2" sx={{ mb: 3, color: "#666", fontSize: "0.95rem" }}>
                {" "}
                {/* Increased font size */}
                Dokümanı indirmek için lütfen aşağıdaki formu doldurunuz. <span style={{ color: "#f7941d" }}>*</span>{" "}
                ile işaretli alanlar zorunludur.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}>
                {" "}
                {/* Increased gap and margin */}
                <TextField
                  fullWidth
                  label="Ad Soyad *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: errors.name ? "error.main" : "action.active" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": { borderRadius: 2 },
                    "& .MuiInputBase-input": { fontSize: "1rem", py: 1.5 }, // Increased font size and padding
                  }}
                />
                <TextField
                  fullWidth
                  label="E-posta *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: errors.email ? "error.main" : "action.active" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": { borderRadius: 2 },
                    "& .MuiInputBase-input": { fontSize: "1rem", py: 1.5 }, // Increased font size and padding
                  }}
                />
                <TextField
                  fullWidth
                  label="Şirket"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BusinessIcon sx={{ color: "action.active" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": { borderRadius: 2 },
                    "& .MuiInputBase-input": { fontSize: "1rem", py: 1.5 }, // Increased font size and padding
                  }}
                />
                <TextField
                  fullWidth
                  label="Telefon *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon sx={{ color: errors.phone ? "error.main" : "action.active" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": { borderRadius: 2 },
                    "& .MuiInputBase-input": { fontSize: "1rem", py: 1.5 }, // Increased font size and padding
                  }}
                />
              </Box>
              <FormControlLabel
                control={
                  <Checkbox name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} color="primary" />
                }
                label={
                  <Typography variant="body2" sx={{ fontSize: "0.95rem" }}>
                    {" "}
                    {/* Increased font size */}
                    Kişisel verilerimin işlenmesine ilişkin{" "}
                    <Link href="/kullanim-sartlari" color="primary" underline="hover">
                      kullanım şartlarını
                    </Link>{" "}
                    okudum ve kabul ediyorum. *
                  </Typography>
                }
                sx={{ mb: 1 }}
              />
              {errors.acceptTerms && (
                <Typography variant="caption" color="error" sx={{ display: "block", mb: 2 }}>
                  {errors.acceptTerms}
                </Typography>
              )}
              {errors.form && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {errors.form}
                </Alert>
              )}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                sx={{
                  mt: 3, // Increased margin
                  py: 1.8, // Increased padding
                  bgcolor: "#f7941d",
                  borderRadius: 2,
                  fontSize: "1.05rem", // Increased font size
                  "&:hover": {
                    bgcolor: "#e67e00",
                  },
                }}
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress size={24} sx={{ mr: 1.5, color: "white" }} />
                    İşleniyor...
                  </>
                ) : (
                  "Dokümanı İndir"
                )}
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </ThemeProvider>
  )
}

export default DocumentDownloadForm
