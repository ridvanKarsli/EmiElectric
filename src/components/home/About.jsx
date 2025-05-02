import { Box, Container, Typography, Grid, Button } from "@mui/material";

const About = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                boxShadow: 3,
                bgcolor: '#1e2a38', // koyu lacivert zemin
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'scale(1.01)',
                  boxShadow: 6,
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: '#f7941d', // turuncu başlık
                }}
              >
                Hakkımızda
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  color: '#f5f5f5', // açık gri yazı
                  lineHeight: 1.8,
                }}
              >
                EMI Elektrik olarak, sektördeki 20 yılı aşkın tecrübemizle, en son teknolojiyle
                donatılmış ekipman ve çözümlerle hizmet vermekteyiz. Müşterilerimize güvenilir ve
                kaliteli elektrik çözümleri sunma amacını gütmekteyiz.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  color: '#f5f5f5',
                  lineHeight: 1.8,
                }}
              >
                Sadece kaliteli ürünler sunmakla kalmıyor, aynı zamanda enerjinin verimli
                kullanılmasını sağlayarak çevreye duyarlı çözümler de geliştiriyoruz.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
