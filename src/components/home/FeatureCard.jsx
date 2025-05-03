import { Box, Paper, Typography, Divider } from "@mui/material"

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 4,
        border: "1px solid #f0f0f0",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 8,
          "& .icon-container": {
            transform: "scale(1.1)",
          },
          "& .title": {
            color: "#F7941D",
          },
          "& .divider": {
            opacity: 1,
          },
        },
      }}
    >
      <Box className="icon-container" sx={{ mb: 3, transition: "transform 0.3s ease" }}>
        {icon}
      </Box>
      <Typography
        variant="h6"
        className="title"
        sx={{
          fontWeight: "bold",
          mb: 1.5,
          color: "#1E2A38",
          transition: "color 0.3s ease",
        }}
      >
        {title}
      </Typography>
      <Divider
        className="divider"
        sx={{
          width: "3rem",
          height: "0.25rem",
          backgroundColor: "#F7941D",
          mb: 2,
          opacity: 0.5,
          transition: "opacity 0.3s ease",
          borderRadius: "9999px",
        }}
      />
      <Typography variant="body2" sx={{ color: "#4A4A4A" }}>
        {description}
      </Typography>
    </Paper>
  )
}

export default FeatureCard
