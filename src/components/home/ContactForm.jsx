import { Box, Paper, Typography, Grid, TextField, Button, Stack } from "@mui/material"
import { Phone, Email, LocationOn } from "@mui/icons-material"

const ContactForm = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "900px",
        mx: "auto",
        borderRadius: 4,
        overflow: "hidden",
        border: "1px solid rgba(247, 148, 29, 0.2)",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            bgcolor: "#1E2A38",
            color: "white",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
              İletişim Bilgileri
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, opacity: 0.75 }}>
              Sorularınız veya projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
            </Typography>
          </Box>
          <Stack spacing={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Phone sx={{ color: "#F7941D", mr: 1.5 }} />
              <Typography variant="body2">+90 (212) 123 45 67</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ color: "#F7941D", mr: 1.5 }} />
              <Typography variant="body2">info@emielektrik.com</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOn sx={{ color: "#F7941D", mr: 1.5 }} />
              <Typography variant="body2">İstanbul, Türkiye</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8} sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4, color: "#1E2A38" }}>
            İletişim Formu
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Ad Soyad"
                  variant="outlined"
                  required
                  InputProps={{
                    sx: {
                      borderRadius: 2,
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#F7941D",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#F7941D",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Şirket (İsteğe Bağlı)"
                  variant="outlined"
                  InputProps={{
                    sx: {
                      borderRadius: 2,
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#F7941D",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#F7941D",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="E-mail"
                  variant="outlined"
                  required
                  type="email"
                  InputProps={{
                    sx: {
                      borderRadius: 2,
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#F7941D",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#F7941D",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mesajınız"
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  InputProps={{
                    sx: {
                      borderRadius: 2,
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        borderColor: "#F7941D",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#F7941D",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    borderRadius: 2,
                    backgroundColor: "#F7941D",
                    color: "white",
                    fontWeight: 500,
                    "&:hover": {
                      backgroundColor: "#1E2A38",
                    },
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Gönder
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ContactForm
