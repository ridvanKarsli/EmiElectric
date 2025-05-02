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
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          color: '#1e2a38',
        }}
      >
        <ElectricBolt sx={{ mr: 1, color: '#f7941d' }} />
        {product.name}
      </DialogTitle>
      <DialogContent sx={{ bgcolor: '#f5f5f5' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          <Box sx={{ flex: 1 }}>
            <CardMedia
              component="img"
              src={product.image}
              alt={product.name}
              sx={{
                width: '100%',
                height: 300,
                objectFit: 'cover',
                borderRadius: 2,
                border: '2px solid #f7941d',
              }}
            />
          </Box>
          <Box sx={{ flex: 2 }}>
            <Tabs
              value={tab}
              onChange={(e, v) => setTab(v)}
              indicatorColor="primary"
              textColor="primary"
              sx={{
                mb: 2,
                '.MuiTab-root': {
                  fontWeight: 600,
                },
              }}
            >
              <Tab label="Özellikler" />
              <Tab label="Teknik Veri" />
              <Tab label="Dokümanlar" />
            </Tabs>

            {/* Tab 1 - Özellikler */}
            {tab === 0 && (
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 600,
                    color: '#1e2a38',
                  }}
                >
                  <ElectricBolt fontSize="small" sx={{ mr: 0.5, color: '#f7941d' }} />
                  Ürün Özellikleri:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {product.features.map((feat) => (
                    <Chip
                      key={feat}
                      label={feat}
                      variant="outlined"
                      sx={{
                        borderColor: '#f7941d',
                        color: '#1e2a38',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: '#f7941d',
                          color: 'white',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {/* Tab 2 - Teknik Veri */}
            {tab === 1 && (
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 600,
                    color: '#1e2a38',
                  }}
                >
                  <ElectricBolt fontSize="small" sx={{ mr: 0.5, color: '#f7941d' }} />
                  Teknik Veri:
                </Typography>
                <Box
                  component="table"
                  sx={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    backgroundColor: '#ffffff',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 1,
                  }}
                >
                  <Box component="thead" sx={{ bgcolor: '#f7941d', color: 'white' }}>
                    <Box component="tr">
                      <Box component="th" sx={{ textAlign: 'left', p: 1, fontWeight: 600 }}>
                        Parametre
                      </Box>
                      <Box component="th" sx={{ textAlign: 'left', p: 1, fontWeight: 600 }}>
                        Değer
                      </Box>
                    </Box>
                  </Box>
                  <Box component="tbody">
                    {product.technicalData.map((row) => (
                      <Box component="tr" key={row.label}>
                        <Box component="td" sx={{ p: 1, borderBottom: '1px solid #eee' }}>{row.label}</Box>
                        <Box component="td" sx={{ p: 1, borderBottom: '1px solid #eee' }}>{row.value}</Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}

            {/* Tab 3 - Dokümanlar */}
            {tab === 2 && (
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  startIcon={<ElectricBolt />}
                  onClick={() => window.open(product.tdsFile, '_blank')}
                  sx={{
                    backgroundColor: '#f7941d',
                    color: '#fff',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#1e2a38',
                    },
                  }}
                >
                  TDS İndir
                </Button>
                <Button
                  variant="contained"
                  startIcon={<ElectricBolt />}
                  onClick={() => window.open(product.drawingFile, '_blank')}
                  sx={{
                    backgroundColor: '#f7941d',
                    color: '#fff',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: '#1e2a38',
                    },
                  }}
                >
                  Çizimi İndir
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} sx={{ textTransform: 'none', color: '#1e2a38' }}>
          Kapat
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
