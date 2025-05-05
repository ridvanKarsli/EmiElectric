import { Box, Container, Typography, Grid, Paper, Button, Divider } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"

const AboutSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#F5F5F5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "16rem",
          height: "16rem",
          bgcolor: "#F7941D",
          opacity: 0.05,
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "24rem",
          height: "24rem",
          bgcolor: "#1E2A38",
          opacity: 0.05,
          borderRadius: "50%",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <Grid container spacing={6} alignItems="center">
          

          {/* Right side - Content */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                display: "inline-block",
                px: 2,
                py: 0.5,
                mb: 2,
                bgcolor: "rgba(30, 42, 56, 0.1)",
                color: "#F7941D",
                borderRadius: "9999px",
                fontSize: { xs: "1.2rem", md: "1.5rem", lg: "2rem" },
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              HAKKIMIZDA
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2.2rem", md: "2.5rem", lg: "3rem" },
                fontWeight: 700,
                mb: 2,
                color: "#1E2A38",
                lineHeight: 1.2,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Elektrik Sektöründe{" "}
              <Box component="span" sx={{ color: "#F7941D" }}>
                Güvenilir Çözüm
              </Box>{" "}
              Ortağınız
            </Typography>
            <Divider
              sx={{
                width: "5rem",
                height: "0.25rem",
                backgroundColor: "#F7941D",
                mb: 4,
                borderRadius: "9999px",
              }}
            />

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: "1.125rem",
                color: "#4A4A4A",
                lineHeight: 1.6,
              }}
            >
              <Box component="span" sx={{ fontWeight: 600, color: "#1E2A38" }}>
                EMI Elektrik
              </Box>{" "}
              olarak, sektördeki 20 yılı aşkın tecrübemizle, en son teknolojiyle donatılmış ekipman ve çözümlerle hizmet
              vermekteyiz. Müşterilerimize güvenilir ve kaliteli elektrik çözümleri sunma amacını gütmekteyiz.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: "1.125rem",
                color: "#4A4A4A",
                lineHeight: 1.6,
              }}
            >
              Sadece kaliteli ürünler sunmakla kalmıyor, aynı zamanda enerjinin verimli kullanılmasını sağlayarak
              çevreye duyarlı çözümler de geliştiriyoruz. Sürdürülebilirlik ve yenilikçilik ilkelerimizle sektörde öncü
              olmaya devam ediyoruz.
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: "bold", color: "#F7941D", mb: 1 }}>
                    500+
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: "#1E2A38" }}>
                    Tamamlanan Proje
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: "bold", color: "#F7941D", mb: 1 }}>
                    50+
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: "#1E2A38" }}>
                    Uzman Personel
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    textAlign: "center",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: "bold", color: "#F7941D", mb: 1 }}>
                    15+
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: "#1E2A38" }}>
                    Kurumsal Müşteri
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              href="/hakkimizda"
              sx={{
                bgcolor: "#1E2A38",
                color: "white",
                px: 3,
                py: 1.5,
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#F7941D",
                },
                transition: "background-color 0.3s ease",
              }}
            >
              Daha Fazla Bilgi
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutSection