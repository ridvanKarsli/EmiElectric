import { Box, Container, Typography, Grid, Button } from "@mui/material";
import FeatureCard from "./FeatureCard";
import { Engineering, CheckCircle, Lightbulb, Phone } from "@mui/icons-material";

const FeaturesSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#dc004e", // Matching the button color in HeroSection
              fontWeight: "bold",
            }}
          >
            NEDEN BİZİ SEÇMELİSİNİZ
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Kaliteli Hizmet Anlayışımız
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Elektrik sektöründeki deneyimimiz ve uzman ekibimizle müşterilerimize en iyi hizmeti sunmak için çalışıyoruz.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<Engineering fontSize="large" />}
              title="Uzman Ekip"
              description="Alanında uzman mühendis ve teknisyenlerden oluşan deneyimli ekibimiz."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<CheckCircle fontSize="large" />}
              title="Kaliteli Malzeme"
              description="Tüm projelerimizde yüksek kaliteli ve garantili malzemeler kullanıyoruz."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<Lightbulb fontSize="large" />}
              title="Yenilikçi Çözümler"
              description="Sektördeki en son teknolojileri takip ederek yenilikçi çözümler sunuyoruz."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<Phone fontSize="large" />}
              title="7/24 Destek"
              description="Acil durumlar için 7/24 teknik destek ve müşteri hizmetleri."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
