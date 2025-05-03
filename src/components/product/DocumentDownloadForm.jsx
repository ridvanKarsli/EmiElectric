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

// Özel tema oluşturma
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
        elevation={3}
        sx={{
          maxWidth: "500px",
          width: "100%",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Box sx={{ bgcolor: "#1e2a38", color: "white", p: 3, display: "flex", alignItems: "center" }}>
          <ElectricBoltIcon sx={{ mr: 1.5, color: "#f7941d" }} />
          <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
            Doküman İndirme Formu
          </Typography>
        </Box>

        {isSuccess ? (
          <Box sx={{ p: 4, textAlign: "center" }}>
            <CheckCircleIcon sx={{ fontSize: 60, color: "success.main", mb: 2 }} />
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: "success.main" }}>
              İşlem Başarılı!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Doküman indirme bağlantısı e-posta adresinize gönderilmiştir.
            </Typography>
            <Button variant="outlined" color="primary" onClick={() => setIsSuccess(false)} sx={{ borderRadius: 2 }}>
              Tamam
            </Button>
          </Box>
        ) : (
          <>
            {document && (
              <Box sx={{ p: 3, bgcolor: "#f5f5f5", display: "flex", alignItems: "center" }}>
                <DescriptionIcon sx={{ mr: 1.5, color: "#f7941d" }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#1e2a38" }}>
                    İndirilecek Doküman:
                  </Typography>
                  <Typography variant="body2">{document.name}</Typography>
                </Box>
              </Box>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ p: 3 }}>
              <Typography variant="body2" sx={{ mb: 3, color: "#666" }}>
                Dokümanı indirmek için lütfen aşağıdaki formu doldurunuz. <span style={{ color: "#f7941d" }}>*</span>{" "}
                ile işaretli alanlar zorunludur.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5, mb: 3 }}>
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
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
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
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
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
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
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
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                />
              </Box>

              <FormControlLabel
                control={
                  <Checkbox name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} color="primary" />
                }
                label={
                  <Typography variant="body2">
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
                  mt: 2,
                  py: 1.5,
                  bgcolor: "#f7941d",
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "#e67e00",
                  },
                }}
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress size={24} sx={{ mr: 1, color: "white" }} />
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
