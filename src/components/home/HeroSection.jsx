import { Box, Container, Typography, Button, Stack } from "@mui/material"

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: "90vh",
        backgroundImage:
          "linear-gradient(rgba(30, 42, 56, 0.8), rgba(30, 42, 56, 0.9)), url(/placeholder.svg?height=800&width=1600)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#F5F5F5",
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
          opacity: 0.1,
          borderRadius: "50%",
          transform: "translate(33%, -33%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "24rem",
          height: "24rem",
          bgcolor: "#F7941D",
          opacity: 0.1,
          borderRadius: "50%",
          transform: "translate(-33%, 33%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10 }}>
        <Box maxWidth="xl">
          <Box
            sx={{
              display: "inline-block",
              px: 2,
              py: 0.5,
              mb: 3,
              bgcolor: "#F7941D",
              color: "white",
              borderRadius: "9999px",
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            20 Yıllık Deneyim
          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4.5rem" },
              fontWeight: 700,
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            Profesyonel{" "}
            <Box component="span" sx={{ color: "#F7941D" }}>
              Elektrik
            </Box>{" "}
            Çözümleri
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              mb: 4,
              opacity: 0.9,
              lineHeight: 1.6,
              maxWidth: "42rem",
            }}
          >
            Sektördeki deneyimimiz ve uzman ekibimizle elektrik alanında güvenilir, yenilikçi ve sürdürülebilir çözümler
            sunuyoruz.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              href="/hakkimizda"
              variant="contained"
              size="large"
              sx={{
                borderRadius: "9999px",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                backgroundColor: "#F7941D",
                color: "#FFFFFF",
                boxShadow: 3,
                "&:hover": {
                  backgroundColor: "#e68100",
                  boxShadow: 6,
                  transform: "translateY(-4px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Hakkımızda
            </Button>
            <Button
              href="/tarihcemiz"
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "9999px",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                borderColor: "#F5F5F5",
                color: "#F5F5F5",
                boxShadow: 3,
                "&:hover": {
                  borderColor: "#F5F5F5",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  boxShadow: 6,
                  transform: "translateY(-4px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Tarihçemiz
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

export default HeroSection