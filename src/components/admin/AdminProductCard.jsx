import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  Stack,
  IconButton,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const AdminProductCard = ({ product, onEdit, onDelete }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = product.gallery || [product.image];

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        boxShadow: 4,
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid #f7941d',
        backgroundColor: '#ffffff',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': { transform: 'scale(1.01)', boxShadow: 6 },
      }}
    >
      {/* Content */}
      <CardContent sx={{ flex: 1, p: 3 }}>
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
                '&:hover': {
                  backgroundColor: '#f7941d',
                  color: '#fff',
                },
              }}
            />
          ))}
        </Box>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#f7941d',
              color: 'white',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#1e2a38',
              },
            }}
            onClick={() => onEdit(product)}
          >
            Güncelle
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: '#f7941d',
              color: '#f7941d',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#f7941d',
                color: '#fff',
                borderColor: '#f7941d',
              },
            }}
            onClick={() => onDelete(product.id)}
          >
            Sil
          </Button>
        </Stack>
      </CardContent>

      {/* Image with controls */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', md: 360 },
          height: 240,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#000',
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 8,
            backgroundColor: 'rgba(255,255,255,0.8)',
            '&:hover': { backgroundColor: '#f7941d', color: 'white' },
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>

        <CardMedia
          component="img"
          image={images[currentImage]}
          alt={product.name}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 8,
            backgroundColor: 'rgba(255,255,255,0.8)',
            '&:hover': { backgroundColor: '#f7941d', color: 'white' },
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
};

export default AdminProductCard;
