"use client"

import { Paper, Typography, Box, Chip, createTheme, ThemeProvider } from "@mui/material"
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt"

// Custom theme creation
const theme = createTheme({
  palette: {
    primary: {
      main: "#F7941D",
    },
    secondary: {
      main: "#1E2A38",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          transition: "all 0.3s ease",
        },
      },
    },
  },
})

const FilterPanel = ({ filters, onChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: "#ffffff",
          border: "1px solid rgba(247, 148, 29, 0.3)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <ElectricBoltIcon sx={{ mr: 1.5, color: "#f7941d", fontSize: 28 }} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#1e2a38",
            }}
          >
            Kategorilere Göre Filtrele
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
          {filters.map((f) => (
            <Chip
              key={f.id}
              label={f.label}
              clickable
              onClick={() => onChange(f.id)}
              color={f.active ? "primary" : "default"}
              sx={{
                fontSize: "0.9rem",
                px: 2,
                py: 2.8,
                borderRadius: "20px",
                fontWeight: 500,
                backgroundColor: f.active ? "#f7941d" : "#f5f5f5",
                color: f.active ? "white" : "#1e2a38",
                "&:hover": {
                  backgroundColor: f.active ? "#e67e00" : "#e0e0e0",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                },
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export default FilterPanel
