import { Box, Container, Typography, Grid, Divider } from "@mui/material"
import FeatureCard from "./FeatureCard"
import { Engineering, CheckCircle, Lightbulb, Phone } from "@mui/icons-material"

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(to bottom, #F5F5F5, white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "1px",
          background: "linear-gradient(to right, transparent, #F7941D, transparent)",
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          right: "-5rem",
          top: "10rem",
          width: "20rem",
          height: "20rem",
          backgroundColor: "#1E2A38",
          opacity: 0.05,
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              display: "inline-block",
              px: 2,
              py: 0.5,
              mb: 2,
              bgcolor: "rgba(30, 42, 56, 0.1)",
              color: "#F7941D",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            NEDEN BİZİ SEÇMELİSİNİZ
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem", lg: "3.25rem" },
              fontWeight: 700,
              mb: 2,
              color: "#1E2A38",
            }}
          >
            Kaliteli Hizmet{" "}
            <Box component="span" sx={{ color: "#F7941D" }}>
              Anlayışımız
            </Box>
          </Typography>
          <Divider
            sx={{
              width: "6rem",
              height: "0.25rem",
              backgroundColor: "#F7941D",
              mx: "auto",
              mb: 3,
              borderRadius: "9999px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              maxWidth: "48rem",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "#4A4A4A",
              lineHeight: 1.6,
            }}
          >
            Elektrik sektöründeki deneyimimiz ve uzman ekibimizle müşterilerimize en iyi hizmeti sunmak için
            çalışıyoruz. Kalite ve güven bizim için önceliktir.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<Engineering sx={{ fontSize: 40, color: "#F7941D" }} />}
              title="Uzman Ekip"
              description="Alanında uzman mühendis ve teknisyenlerden oluşan deneyimli ekibimiz."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<CheckCircle sx={{ fontSize: 40, color: "#F7941D" }} />}
              title="Kaliteli Malzeme"
              description="Tüm projelerimizde yüksek kaliteli ve garantili malzemeler kullanıyoruz."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<Lightbulb sx={{ fontSize: 40, color: "#F7941D" }} />}
              title="Yenilikçi Çözümler"
              description="Sektördeki en son teknolojileri takip ederek yenilikçi çözümler sunuyoruz."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<Phone sx={{ fontSize: 40, color: "#F7941D" }} />}
              title="7/24 Destek"
              description="Acil durumlar için 7/24 teknik destek ve müşteri hizmetleri."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default FeaturesSection