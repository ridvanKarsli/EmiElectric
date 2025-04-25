"use client"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Paper,
  TextField,
  Stack,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material"
import {
  ElectricBolt,
  Engineering,
  Lightbulb,
  Construction,
  WbSunny,
  CheckCircle,
  ArrowForward,
  Phone,
} from "@mui/icons-material"

const services = [
  {
    title: "Elektrik Tesisatı",
    description:
      "Konut, işyeri ve endüstriyel tesisler için profesyonel elektrik tesisatı kurulumu ve yenileme hizmetleri.",
    icon: <ElectricBolt sx={{ fontSize: 40 }} />,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Enerji Danışmanlığı",
    description: "Enerji verimliliği, tasarruf çözümleri ve enerji yönetimi konularında uzman danışmanlık hizmetleri.",
    icon: <Engineering sx={{ fontSize: 40 }} />,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Bakım ve Onarım",
    description: "Elektrik sistemlerinizin düzenli bakımı ve arıza durumlarında hızlı onarım hizmetleri.",
    icon: <Construction sx={{ fontSize: 40 }} />,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Yenilenebilir Enerji",
    description: "Güneş enerjisi sistemleri kurulumu ve yenilenebilir enerji çözümleri ile geleceğe yatırım yapın.",
    icon: <WbSunny sx={{ fontSize: 40 }} />,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const projects = [
  {
    title: "Endüstriyel Tesis Elektrik Altyapısı",
    description: "İstanbul'daki büyük bir üretim tesisinin komple elektrik altyapısının yenilenmesi projesi.",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    title: "Akıllı Bina Otomasyon Sistemi",
    description: "Modern bir iş merkezinin enerji tasarrufu sağlayan akıllı bina otomasyon sisteminin kurulumu.",
    image: "/placeholder.svg?height=250&width=400",
  },
  {
    title: "Güneş Enerjisi Santrali",
    description: "500kW kapasiteli güneş enerjisi santralinin kurulumu ve devreye alınması projesi.",
    image: "/placeholder.svg?height=250&width=400",
  },
]

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    position: "İnşaat Firması Yöneticisi",
    comment:
      "Elektrik firması ile çalışmak gerçekten profesyonel bir deneyimdi. Projemizi zamanında ve bütçe dahilinde tamamladılar.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Ayşe Kaya",
    position: "Fabrika Müdürü",
    comment:
      "Fabrikamızın elektrik altyapısının yenilenmesi sürecinde gösterdikleri titiz çalışma için teşekkür ederiz.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Mehmet Demir",
    position: "Site Yöneticisi",
    comment:
      "Sitemizin aydınlatma sisteminin yenilenmesi projesi tam istediğimiz gibi oldu. Enerji tasarrufu sağladık.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

const Home = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Box>      
      {/* Hero Section */}
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
                    backgroundColor: theme.palette.secondary.main,
                    "&:hover": {
                      backgroundColor: theme.palette.secondary.dark,
                    },
                  }}
                >
                  Hizmetlerimiz
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
                  İletişime Geçin
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: "bold" }}>
              NEDEN BİZİ SEÇMELİSİNİZ
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Kaliteli Hizmet Anlayışımız
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", color: "text.secondary" }}>
              Elektrik sektöründeki deneyimimiz ve uzman ekibimizle müşterilerimize en iyi hizmeti sunmak için
              çalışıyoruz.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2, display: "flex", justifyContent: "center" }}>
                  <Engineering fontSize="large" />
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: "bold" }}>
                  Uzman Ekip
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Alanında uzman mühendis ve teknisyenlerden oluşan deneyimli ekibimiz.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2, display: "flex", justifyContent: "center" }}>
                  <CheckCircle fontSize="large" />
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: "bold" }}>
                  Kaliteli Malzeme
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tüm projelerimizde yüksek kaliteli ve garantili malzemeler kullanıyoruz.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2, display: "flex", justifyContent: "center" }}>
                  <Lightbulb fontSize="large" />
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: "bold" }}>
                  Yenilikçi Çözümler
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Sektördeki en son teknolojileri takip ederek yenilikçi çözümler sunuyoruz.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: "100%",
                  textAlign: "center",
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2, display: "flex", justifyContent: "center" }}>
                  <Phone fontSize="large" />
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: "bold" }}>
                  7/24 Destek
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Acil durumlar için 7/24 teknik destek ve müşteri hizmetleri.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: "bold" }}>
              HİZMETLERİMİZ
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Sunduğumuz Hizmetler
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", color: "text.secondary" }}>
              Elektrik sektöründe ihtiyacınız olan tüm hizmetleri profesyonel bir şekilde sunuyoruz.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardMedia component="img" height="140" image={service.image} alt={service.title} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <Box sx={{ color: "primary.main", mr: 1 }}>{service.icon}</Box>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" endIcon={<ArrowForward />}>
                      Detaylı Bilgi
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: "bold" }}>
              REFERANSLARIMIZ
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Tamamlanan Projelerimiz
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", color: "text.secondary" }}>
              Başarıyla tamamladığımız projelerimizden bazı örnekler.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardMedia component="img" height="200" image={project.image} alt={project.title} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: "bold", mb: 1 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" endIcon={<ArrowForward />}>
                      Proje Detayları
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button variant="outlined" endIcon={<ArrowForward />} sx={{ borderRadius: "30px", px: 4 }}>
              Tüm Projelerimiz
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="overline" sx={{ color: "primary.main", fontWeight: "bold" }}>
              MÜŞTERİ YORUMLARI
            </Typography>
            <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Müşterilerimiz Ne Diyor?
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto", color: "text.secondary" }}>
              Hizmetlerimizden memnun kalan müşterilerimizin değerli yorumları.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    borderRadius: 4,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="body1" sx={{ mb: 3, fontStyle: "italic", flexGrow: 1 }}>
                    "{testimonial.comment}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/placeholder.svg?height=600&width=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
              Profesyonel Elektrik Çözümleri İçin Bize Ulaşın
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: "800px", mx: "auto" }}>
              Elektrik projeleriniz için ücretsiz keşif ve fiyat teklifi almak için hemen iletişime geçin.
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone />}
              sx={{
                borderRadius: "30px",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                backgroundColor: theme.palette.secondary.main,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                },
              }}
            >
              Hemen Arayın: (212) 123 45 67
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="overline" sx={{ color: "primary.main", fontWeight: "bold" }}>
                  İLETİŞİM
                </Typography>
                <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                  Bize Ulaşın
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
                  Sorularınız, önerileriniz veya projeleriniz için bizimle iletişime geçebilirsiniz. En kısa sürede size
                  dönüş yapacağız.
                </Typography>
              </Box>

              <Stack spacing={3}>
                <TextField label="Adınız Soyadınız" fullWidth variant="outlined" />
                <TextField label="E-posta Adresiniz" fullWidth variant="outlined" />
                <TextField label="Telefon Numaranız" fullWidth variant="outlined" />
                <TextField label="Mesajınız" fullWidth variant="outlined" multiline rows={4} />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: "30px",
                    py: 1.5,
                    fontSize: "1rem",
                  }}
                >
                  Mesaj Gönder
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src="/placeholder.svg?height=500&width=600"
                alt="İletişim"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>      
    </Box>
  )
}

export default Home
