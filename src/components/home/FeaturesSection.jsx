import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import FeatureCard from "./FeatureCard";
import { Engineering, CheckCircle, Lightbulb, Phone } from "@mui/icons-material";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Engineering sx={{ fontSize: 40, color: "#F7941D" }} />,
      title: "Uzman Ekip",
      description: "Alanında uzman mühendis ve teknisyenlerden oluşan deneyimli ekibimiz.",
    },
    {
      icon: <CheckCircle sx={{ fontSize: 40, color: "#F7941D" }} />,
      title: "Kaliteli Malzeme",
      description: "Tüm projelerimizde yüksek kaliteli ve garantili malzemeler kullanıyoruz.",
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40, color: "#F7941D" }} />,
      title: "Yenilikçi Çözümler",
      description: "Sektördeki en son teknolojileri takip ederek yenilikçi çözümler sunuyoruz.",
    },
    {
      icon: <Phone sx={{ fontSize: 41, color: "#F7941D" }} />,
      title: "7/24 Destek",
      description: "Acil durumlar için günün her saati teknik destek ve müşteri hizmetleri sunuyoruz.",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(to bottom, #F5F5F5, white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Arka plan dairesi */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "-8rem", md: "-5rem" },
          top: { xs: "8rem", md: "10rem" },
          width: { xs: "16rem", md: "20rem" },
          height: { xs: "16rem", md: "20rem" },
          backgroundColor: "#1E2A38",
          opacity: 0.05,
          borderRadius: "50%",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              px: 3,
              py: 1,
              mb: 3,
              bgcolor: "rgba(30, 42, 56, 0.05)",
              color: "#F7941D",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: { xs: "1.2rem", md: "1.5rem", lg: "2rem" },
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            NEDEN BİZİ SEÇMELİSİNİZ
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
              color: "#1E2A38",
            }}
          >
            Kaliteli Hizmet <Box component="span" sx={{ color: "#F7941D" }}>Anlayışımız</Box>
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
              fontSize: "1.125rem",
              color: "#4A4A4A",
              lineHeight: 1.6,
            }}
          >
            Elektrik sektöründeki deneyimimiz ve uzman ekibimizle müşterilerimize en iyi hizmeti sunmak için
            çalışıyoruz. Kalite ve güven bizim için önceliktir.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;