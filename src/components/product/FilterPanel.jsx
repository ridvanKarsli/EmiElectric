import React from 'react';
import { Box, Paper, Typography, Chip } from '@mui/material';
import { ElectricBolt } from '@mui/icons-material';

const FilterPanel = ({ filters, onChange }) => (
  <Paper
    elevation={2}
    sx={{
      p: 2,
      mb: 4,
      borderRadius: 2,
      backgroundColor: '#ffffff',
      border: '1px solid #f7941d', // turuncu kenarlık
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <ElectricBolt sx={{ mr: 1, color: '#f7941d' }} />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          color: '#1e2a38', // koyu başlık
        }}
      >
        Kategorilere Göre Filtrele
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {filters.map((f) => (
        <Chip
          key={f.id}
          label={f.label}
          clickable
          onClick={() => onChange(f.id)}
          sx={{
            fontSize: '0.875rem',
            px: 1.5,
            borderRadius: '16px',
            bgcolor: f.active ? '#f7941d' : '#f5f5f5',
            color: f.active ? 'white' : '#1e2a38',
            '&:hover': {
              backgroundColor: f.active ? '#1e2a38' : '#e0e0e0',
              color: f.active ? '#fff' : '#1e2a38',
            },
          }}
        />
      ))}
    </Box>
  </Paper>
);

export default FilterPanel;
