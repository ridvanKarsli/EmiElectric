import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const ContactForm = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 5 },
        borderRadius: 4,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        backgroundColor: "white",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: "bold",
          mb: 4,
          textAlign: "center",
          fontSize: { xs: "1.75rem", md: "2rem" },
          color: "text.primary",
        }}
      >
        İletişim Formu
      </Typography>

      <Box component="form" noValidate autoComplete="off" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <TextField
          fullWidth
          label="Ad Soyad"
          variant="outlined"
          required
        />

        <TextField
          fullWidth
          label="Şirket (İsteğe Bağlı)"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="E-mail"
          variant="outlined"
          required
          type="email"
        />

        <TextField
          fullWidth
          label="Mesajınız"
          variant="outlined"
          required
          multiline
          rows={5}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            borderRadius: "30px",
            px: 5,
            py: 1.5,
            fontSize: "1rem",
            alignSelf: "center",
            backgroundColor: "#dc004e",
            "&:hover": {
              backgroundColor: "#9b0034",
            },
          }}
        >
          Gönder
        </Button>
      </Box>
    </Paper>
  );
};

export default ContactForm;
