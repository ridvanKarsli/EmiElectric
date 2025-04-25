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
  List,
  ListItem,
} from "@mui/material"
import { Facebook, Twitter, Instagram, LinkedIn, Phone, Email, LocationOn, ElectricBolt } from "@mui/icons-material"

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", pt: 6, pb: 3 }}>
      <Container maxWidth={false} disableGutters={true}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <ElectricBolt sx={{ mr: 1, fontSize: 30 }} />
              <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                ELEKTRIK
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Profesyonel elektrik çözümleri sunan firmamız, 20 yılı aşkın deneyimi ile sektörde lider konumdadır.
              Müşteri memnuniyeti ve kaliteli hizmet anlayışımızla her zaman yanınızdayız.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="inherit" aria-label="Facebook" size="small" sx={{ bgcolor: "rgba(255,255,255,0.1)" }}>
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter" size="small" sx={{ bgcolor: "rgba(255,255,255,0.1)" }}>
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram" size="small" sx={{ bgcolor: "rgba(255,255,255,0.1)" }}>
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn" size="small" sx={{ bgcolor: "rgba(255,255,255,0.1)" }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: "bold" }}>
              Hızlı Erişim
            </Typography>
            <List dense disablePadding>
              <ListItem disablePadding>
                <Link href="#" color="inherit" underline="hover">
                  Ana Sayfa
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="#" color="inherit" underline="hover">
                  Hizmetlerimiz
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="#" color="inherit" underline="hover">
                  Projeler
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="#" color="inherit" underline="hover">
                  Kurumsal
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="#" color="inherit" underline="hover">
                  İletişim
                </Link>
              </ListItem>
            </List>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: "bold" }}>
              Hizmetlerimiz
            </Typography>
            <List dense disablePadding>
              <ListItem disablePadding>
                <Link href="#" color="inherit" underline="hover">
                  Elektrik Tesisatı
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="#" color="inherit" underline="hover">
                  Enerji Danışmanlığı
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="#" color="inherit" underline="hover">
                  Bakım ve Onarım
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="#" color="inherit" underline="hover">
                  Yenilenebilir Enerji
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href="#" color="inherit" underline="hover">
                  Aydınlatma Çözümleri
                </Link>
              </ListItem>
            </List>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="div" sx={{ mb: 2, fontWeight: "bold" }}>
              İletişim Bilgileri
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant="body2">Elektrik Caddesi, No:123, Enerji Plaza, Kat:4, İstanbul</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">+90 (212) 123 45 67</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ mr: 1 }} />
              <Typography variant="body2">info@elektrikfirmasi.com</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

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
            &copy; {new Date().getFullYear()} Elektrik Firması. Tüm hakları saklıdır.
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
