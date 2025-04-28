import { Box, Container, Typography, Grid, Button } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
        <Grid container spacing={4}>
          {/* About Us Content */}
          <Grid item xs={12}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: 'background.paper',
                transition: 'transform 0.2s, boxShadow 0.2s',
                '&:hover': { transform: 'scale(1.02)', boxShadow: 6 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: 'text.primary',
                }}
              >
                Hakkımızda
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 'normal',
                  color: 'text.primary',
                }}
              >
                EMI Elektrik olarak, sektördeki 20 yılı aşkın tecrübemizle, en son teknolojiyle donatılmış ekipman ve çözümlerle hizmet vermekteyiz. Müşterilerimize güvenilir ve kaliteli elektrik çözümleri sunma amacını gütmekteyiz.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  fontWeight: 'normal',
                  color: 'text.primary',
                }}
              >
                Sadece kaliteli ürünler sunmakla kalmıyor, aynı zamanda enerjinin verimli kullanılmasını sağlayarak çevreye duyarlı çözümler de geliştiriyoruz.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
