import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  CardMedia,
  Tabs,
  Tab,
  Typography,
  Button,
  Chip,
} from '@mui/material';
import { ElectricBolt } from '@mui/icons-material';

const ProductModal = ({ product, open, onClose }) => {
  const [tab, setTab] = useState(0);
  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
        <ElectricBolt color="secondary" sx={{ mr: 1 }} />{product.name}
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              src={product.image}
              alt={product.name}
              sx={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 2 }}
            />
          </Box>
          <Box sx={{ flex: 2 }}>
            <Tabs value={tab} onChange={(e, v) => setTab(v)} indicatorColor="primary" textColor="primary" sx={{ mb: 2 }}>
              <Tab label="Özellikler" />
              <Tab label="Teknik Veri" />
              <Tab label="Dokümanlar" />
            </Tabs>
            {tab === 0 && (
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                  <ElectricBolt fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} /> Ürün Özellikleri:</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {product.features.map((feat) => (
                    <Chip key={feat} label={feat} variant="outlined" />
                  ))}
                </Box>
              </Box>
            )}
            {tab === 1 && (
              <Box>
                <Typography variant="subtitle1" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                  <ElectricBolt fontSize="small" sx={{ mr: 0.5, color: 'text.secondary' }} /> Teknik Veri:</Typography>
                <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
                  <Box component="thead">
                    <Box component="tr">
                      <Box component="th" sx={{ textAlign: 'left', p: 1, fontWeight: 'bold' }}>Parametre</Box>
                      <Box component="th" sx={{ textAlign: 'left', p: 1, fontWeight: 'bold' }}>Değer</Box>
                    </Box>
                  </Box>
                  <Box component="tbody">
                    {product.technicalData.map((row) => (
                      <Box component="tr" key={row.label}>
                        <Box component="td" sx={{ p: 1 }}>{row.label}</Box>
                        <Box component="td" sx={{ p: 1 }}>{row.value}</Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
            {tab === 2 && (
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="outlined" startIcon={<ElectricBolt />} onClick={() => window.open(product.tdsFile, '_blank')}>TDS İndir</Button>
                <Button variant="outlined" startIcon={<ElectricBolt />} onClick={() => window.open(product.drawingFile, '_blank')}>Çizimi İndir</Button>
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions><Button onClick={onClose}>Kapat</Button></DialogActions>
    </Dialog>
  );
};

export default ProductModal;