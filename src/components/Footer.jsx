"use client"
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Facebook, Twitter, Instagram, LinkedIn, ElectricBolt } from "@mui/icons-material"


const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box
      sx={{
        backgroundColor: "#1e2a38", // koyu lacivert zemin
        color: "#f5f5f5",           // açık gri yazılar
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <ElectricBolt sx={{ mr: 1, fontSize: 30, color: "#f7941d" }} />
              <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: "#f7941d" }}>
                EMI ELEKTRIK
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Profesyonel elektrik çözümleri sunan firmamız, 20 yılı aşkın deneyimi ile sektörde lider konumdadır. Müşteri memnuniyeti ve kaliteli hizmet anlayışımızla her zaman yanınızdayız.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                <IconButton
                  key={index}
                  color="inherit"
                  aria-label={Icon.name}
                  size="small"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.08)",
                    "&:hover": { bgcolor: "#f7941d", color: "#1e2a38" },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography variant="body2" sx={{ mb: isMobile ? 1 : 0 }}>
            &copy; {new Date().getFullYear()} EMI Elektrik. Tüm hakları saklıdır.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Gizlilik Politikası
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Kullanım Şartları
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
