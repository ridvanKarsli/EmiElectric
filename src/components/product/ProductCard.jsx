import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Button } from '@mui/material';

const ProductCard = ({ product, onClick, isReversed = false }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: isReversed ? 'row-reverse' : 'row' },
      boxShadow: 3,
      borderRadius: 2,
      transition: 'transform 0.2s, boxShadow 0.2s',
      '&:hover': { transform: 'scale(1.02)', boxShadow: 6 }
    }}
    onClick={onClick}
  >
    <CardMedia component="img" image={product.image} alt={product.name} sx={{ width: { md: 360 }, height: 240, objectFit: 'cover' }} />
    <CardContent sx={{ flex: 1, p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>{product.name}</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {product.features.map((feat) => (<Chip key={feat} label={feat} size="small" />))}
      </Box>
      <Button variant="outlined" size="small">Detayları Gör</Button>
    </CardContent>
  </Card>
);

export default ProductCard;