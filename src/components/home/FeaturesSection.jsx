import { Box, Container, Typography, Grid } from "@mui/material";
import FeatureCard from "../home/FeatureCard";
import { Engineering, CheckCircle, Lightbulb, Phone } from "@mui/icons-material";

const FeaturesSection = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#f5f5f5" /* Açık arka plan */ }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#f7941d", // Turuncu vurgulu başlık
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            NEDEN BİZİ SEÇMELİSİNİZ
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2.25rem", md: "3rem" },
              color: "#1e2a38", // Koyu başlık
            }}
          >
            Kaliteli Hizmet Anlayışımız
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              color: "#4a4a4a", // Gri ton yazı
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              lineHeight: 1.6,
            }}
          >
            Elektrik sektöründeki deneyimimiz ve uzman ekibimizle müşterilerimize en iyi hizmeti sunmak için çalışıyoruz.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<Engineering fontSize="large" sx={{ color: "#f7941d" }} />}
              title="Uzman Ekip"
              description="Alanında uzman mühendis ve teknisyenlerden oluşan deneyimli ekibimiz."
              bgcolor="#ffffff"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<CheckCircle fontSize="large" sx={{ color: "#f7941d" }} />}
              title="Kaliteli Malzeme"
              description="Tüm projelerimizde yüksek kaliteli ve garantili malzemeler kullanıyoruz."
              bgcolor="#ffffff"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<Lightbulb fontSize="large" sx={{ color: "#f7941d" }} />}
              title="Yenilikçi Çözümler"
              description="Sektördeki en son teknolojileri takip ederek yenilikçi çözümler sunuyoruz."
              bgcolor="#ffffff"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FeatureCard
              icon={<Phone fontSize="large" sx={{ color: "#f7941d" }} />}
              title="7/24 Destek"
              description="Acil durumlar için 7/24 teknik destek ve müşteri hizmetleri."
              bgcolor="#ffffff"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
