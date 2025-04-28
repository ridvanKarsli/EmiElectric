import React from 'react';
import { Box, Paper, Typography, Chip } from '@mui/material';
import { ElectricBolt } from '@mui/icons-material';

const FilterPanel = ({ filters, onChange }) => (
  <Paper elevation={2} sx={{ p: 2, mb: 4, borderRadius: 2, bgcolor: 'background.paper' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <ElectricBolt color="primary" sx={{ mr: 1 }} />
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Kategorilere Göre Filtrele
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {filters.map((f) => (
        <Chip
          key={f.id}
          label={f.label}
          clickable
          color={f.active ? 'primary' : 'default'}
          onClick={() => onChange(f.id)}
          sx={{ fontSize: '0.875rem', px: 1.5, borderRadius: '16px' }}
        />
      ))}
    </Box>
  </Paper>
);

export default FilterPanel;