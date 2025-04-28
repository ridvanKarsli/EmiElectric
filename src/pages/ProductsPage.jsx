import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import FilterPanel from '../components/product/FilterPanel';
import ProductModal from '../components/product/ProductModal';
import ProductCard from '../components/product/ProductCard';

// Örnek veri kaynağı (Products data)
const products = [
  {
    id: 1,
    name: 'Ürün A',
    image: '/product-a-1.png',
    gallery: ['/product-a-1.png', '/product-a-2.png', '/product-a-3.png'],
    features: ['Dayanıklı', 'Enerji Verimli', 'Kolay Kurulum'],
    technicalData: [
      { label: 'Güç (W)', value: '50' },
      { label: 'Voltaj (V)', value: '220' },
      { label: 'IP Sınıfı', value: 'IP65' },
    ],
    tdsFile: '/tds/urun-a.pdf',
    drawingFile: '/drawings/urun-a.dwg',
  },
  {
    id: 2,
    name: 'Ürün B',
    image: '/product-b-1.png',
    gallery: ['/react.svg', '/react.svg'],
    features: ['Yüksek Performans', 'Düşük Maliyet'],
    technicalData: [
      { label: 'Güç (W)', value: '100' },
      { label: 'Voltaj (V)', value: '110' },
      { label: 'IP Sınıfı', value: 'IP54' },
    ],
    tdsFile: '/tds/urun-b.pdf',
    drawingFile: '/drawings/urun-b.dwg',
  },
  {
    id: 3,
    name: 'Ürün C',
    image: '/product-c-1.png',
    gallery: ['/product-c-1.png', '/product-c-2.png', '/product-c-3.png'],
    features: ['Çevre Dostu', 'Uzun Ömürlü'],
    technicalData: [
      { label: 'Güç (W)', value: '75' },
      { label: 'Voltaj (V)', value: '240' },
      { label: 'IP Sınıfı', value: 'IP67' },
    ],
    tdsFile: '/tds/urun-c.pdf',
    drawingFile: '/drawings/urun-c.dwg',
  },
  {
    id: 1,
    name: 'Ürün A',
    image: '/product-a-1.png',
    gallery: ['/product-a-1.png', '/product-a-2.png', '/product-a-3.png'],
    features: ['Dayanıklı', 'Enerji Verimli', 'Kolay Kurulum'],
    technicalData: [
      { label: 'Güç (W)', value: '50' },
      { label: 'Voltaj (V)', value: '220' },
      { label: 'IP Sınıfı', value: 'IP65' },
    ],
    tdsFile: '/tds/urun-a.pdf',
    drawingFile: '/drawings/urun-a.dwg',
  },
  {
    id: 2,
    name: 'Ürün B',
    image: '/product-b-1.png',
    gallery: ['/react.svg', '/react.svg'],
    features: ['Yüksek Performans', 'Düşük Maliyet'],
    technicalData: [
      { label: 'Güç (W)', value: '100' },
      { label: 'Voltaj (V)', value: '110' },
      { label: 'IP Sınıfı', value: 'IP54' },
    ],
    tdsFile: '/tds/urun-b.pdf',
    drawingFile: '/drawings/urun-b.dwg',
  },
  {
    id: 3,
    name: 'Ürün C',
    image: '/product-c-1.png',
    gallery: ['/product-c-1.png', '/product-c-2.png', '/product-c-3.png'],
    features: ['Çevre Dostu', 'Uzun Ömürlü'],
    technicalData: [
      { label: 'Güç (W)', value: '75' },
      { label: 'Voltaj (V)', value: '240' },
      { label: 'IP Sınıfı', value: 'IP67' },
    ],
    tdsFile: '/tds/urun-c.pdf',
    drawingFile: '/drawings/urun-c.dwg',
  },
];

const ProductsPage = () => {
  const [filters, setFilters] = useState([
    { id: 'all', label: 'Tümü', active: true },
    { id: 'energy', label: 'Enerji', active: false },
    { id: 'lighting', label: 'Aydınlatma', active: false },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFilterChange = (id) => {
    setFilters(prev => prev.map(f => ({ ...f, active: f.id === id })));
  };

  const activeFilters = filters.filter(f => f.active);
  const activeProducts = activeFilters[0].id === 'all'
    ? products
    : products.filter(p => p.features.includes(activeFilters[0].label));

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
      <FilterPanel filters={filters} onChange={handleFilterChange} />
      <Grid container spacing={4}>
        {activeProducts.map((prod, index) => (
          <Grid item xs={12} key={prod.id}>
            <ProductCard
              product={prod}
              onClick={() => setSelectedProduct(prod)}
              isReversed={index % 2 !== 0}
            />
          </Grid>
        ))}
      </Grid>
      <ProductModal
        product={selectedProduct}
        open={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
      />
    </Container>
  );
};

export default ProductsPage;