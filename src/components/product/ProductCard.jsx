import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button } from '@mui/material';

const ProductCard = ({ product, onClick, isReversed = false }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: isReversed ? 'row-reverse' : 'row' },
      boxShadow: 4,
      borderRadius: 3,
      overflow: 'hidden',
      border: '1px solid #f7941d',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.015)',
        boxShadow: 8,
      },
      cursor: 'pointer',
      bgcolor: '#ffffff',
    }}
    onClick={onClick}
  >
    <CardMedia
      component="img"
      image={product.image}
      alt={product.name}
      sx={{
        width: { md: 360 },
        height: 240,
        objectFit: 'cover',
      }}
    />
    <CardContent sx={{ flex: 1, p: { xs: 2, md: 3 } }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 1,
          color: '#1e2a38',
        }}
      >
        {product.name}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {product.features.map((feat) => (
          <Chip
            key={feat}
            label={feat}
            size="small"
            sx={{
              backgroundColor: '#f5f5f5',
              color: '#1e2a38',
              fontWeight: 500,
              px: 1,
              '&:hover': {
                backgroundColor: '#f7941d',
                color: 'white',
              },
            }}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: '#f7941d',
          color: 'white',
          borderRadius: 2,
          fontWeight: 500,
          textTransform: 'none',
          px: 3,
          '&:hover': {
            backgroundColor: '#1e2a38',
          },
        }}
      >
        Detayları Gör
      </Button>
    </CardContent>
  </Card>
);

export default ProductCard;
