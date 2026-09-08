const BRANDS = ['Prodesk', 'Nexus', 'Aura', 'Titan', 'Apex', 'Vanguard', 'Velocity', 'Zenith'];
const CATEGORIES = [
  { id: 'mobiles', name: 'Smartphones & Mobiles', icon: 'Smartphone' },
  { id: 'laptops', name: 'Laptops & Workstations', icon: 'Laptop' },
  { id: 'appliances', name: 'Home Appliances & TVs', icon: 'Tv' },
  { id: 'fashion', name: 'Wearables & Smartwatches', icon: 'Shirt' },
  { id: 'audio', name: 'Headphones & Speakers', icon: 'Headphones' },
  { id: 'sports', name: 'Fitness & Gear', icon: 'Activity' }
];

const OPTIMIZED_IMAGES = [
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80'
];

/**
 * Generate 5,000 performance-optimized products with WebP images and explicit dimensions
 */
export const generateProducts = (count = 5000) => {
  const list = [];
  for (let i = 1; i <= count; i++) {
    const brand = BRANDS[i % BRANDS.length];
    const cat = CATEGORIES[i % CATEGORIES.length];
    const basePrice = 49 + (i * 17) % 1950;
    const discount = (i % 5 === 0) ? 15 : (i % 3 === 0) ? 25 : 0;
    const price = discount > 0 ? Math.round(basePrice * (1 - discount / 100)) : basePrice;

    list.push({
      id: `prod-${i}`,
      numId: i,
      name: `${brand} ${cat.name.split(' ')[0]} Model X-${i}`,
      brand: brand,
      category: cat.name,
      categoryId: cat.id,
      price: price,
      originalPrice: basePrice,
      discountPct: discount,
      rating: (3.8 + (i % 13) * 0.1).toFixed(1),
      reviewCount: 45 + (i * 23) % 850,
      image: OPTIMIZED_IMAGES[i % OPTIMIZED_IMAGES.length],
      width: 400,
      height: 400,
      inStock: true,
      stockQuantity: 20 + (i % 60),
      isAssured: i % 2 === 0,
      freeDelivery: i % 3 === 0
    });
  }
  return list;
};

export { CATEGORIES };
