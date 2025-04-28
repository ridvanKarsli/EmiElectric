import { Box, Container, Typography, Grid, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/placeholder.svg?height=800&width=1600)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "70vh", md: "80vh" },
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={6}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Profesyonel Elektrik Çözümleri
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
              }}
            >
              20 yılı aşkın deneyimimizle elektrik sektöründe güvenilir çözümler sunuyoruz.
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  backgroundColor: "#dc004e", // Theme yerine doğrudan renk kodu
                  "&:hover": {
                    backgroundColor: "#9b0034", // Hover durumunda farklı bir renk
                  },
                }}
              >
                    Hakkımızda
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  borderColor: "white",
                  color: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Tarihçemiz
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
