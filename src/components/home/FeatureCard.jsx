import { Box, Typography, Paper } from "@mui/material";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: "100%",
        textAlign: "center",
        borderRadius: 4,
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",  // Smooth transition
        "&:hover": {
          boxShadow: "0 8px 40px rgba(0, 0, 0, 0.1)", // Less intense shadow
          transform: "scale(1.05)", // Slightly scale up, but not too much
        },
      }}
    >
      <Box
        sx={{
          color: "#dc004e", // Matching the icon color
          mb: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        component="h3"
        sx={{
          mb: 1,
          fontWeight: "bold",
          fontSize: { xs: "1.25rem", md: "1.5rem" },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

export default FeatureCard;
