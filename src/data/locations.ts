export interface Location {
  id: string;
  name: string;
  city: string;
  category: string;
  image: string;
  status: 'complete' | 'partial' | 'not-accessible';
  score: number;
  description: string;
  facilities: {
    ramp: boolean;
    toilet: boolean;
    guidingBlock: boolean;
    lift: boolean;
  };
  gallery: string[];
  coordinates: [number, number];
}

export const locations: Location[] = [
  {
    id: '1',
    name: 'Universitas Indonesia',
    city: 'Depok',
    category: 'Kampus',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800',
    status: 'complete',
    score: 92,
    description: 'Universitas Indonesia memiliki fasilitas aksesibilitas yang sangat baik. Kampus ini dilengkapi dengan ramp di setiap gedung, lift untuk akses multi-lantai, toilet khusus difabel, dan guiding block untuk membantu mahasiswa dengan disabilitas visual.',
    facilities: { ramp: true, toilet: true, guidingBlock: true, lift: true },
    gallery: [
      'https://images.unsplash.com/photo-1562774053-701939374585?w=600',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600',
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600',
    ],
    coordinates: [-6.3605, 106.8303],
  },
  {
    id: '2',
    name: 'Masjid Istiqlal',
    city: 'Jakarta',
    category: 'Masjid',
    image: 'https://images.unsplash.com/photo-1590076082989-83c6ce3da922?w=800',
    status: 'complete',
    score: 88,
    description: 'Masjid Istiqlal sebagai masjid terbesar di Asia Tenggara telah memiliki fasilitas ramah difabel yang lengkap termasuk lift, ramp, dan toilet aksesibel.',
    facilities: { ramp: true, toilet: true, guidingBlock: true, lift: true },
    gallery: [
      'https://images.unsplash.com/photo-1590076082989-83c6ce3da922?w=600',
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600',
      'https://images.unsplash.com/photo-1590076215667-875d4ef2d7de?w=600',
    ],
    coordinates: [-6.1700, 106.8312],
  },
  {
    id: '3',
    name: 'Halte TransJakarta Bundaran HI',
    city: 'Jakarta',
    category: 'Halte',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800',
    status: 'partial',
    score: 65,
    description: 'Halte TransJakarta di Bundaran HI memiliki lift dan ramp, namun guiding block masih perlu ditingkatkan kondisinya.',
    facilities: { ramp: true, toilet: false, guidingBlock: true, lift: true },
    gallery: [
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600',
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600',
    ],
    coordinates: [-6.1944, 106.8229],
  },
  {
    id: '4',
    name: 'RSUP Dr. Cipto Mangunkusumo',
    city: 'Jakarta',
    category: 'Rumah Sakit',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800',
    status: 'complete',
    score: 95,
    description: 'RSCM sebagai rumah sakit rujukan nasional memiliki standar aksesibilitas tertinggi dengan semua fasilitas ramah difabel.',
    facilities: { ramp: true, toilet: true, guidingBlock: true, lift: true },
    gallery: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600',
    ],
    coordinates: [-6.1972, 106.8456],
  },
  {
    id: '5',
    name: 'Institut Teknologi Bandung',
    city: 'Bandung',
    category: 'Kampus',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800',
    status: 'partial',
    score: 72,
    description: 'ITB telah memulai program aksesibilitas kampus dengan pembangunan ramp di beberapa gedung utama.',
    facilities: { ramp: true, toilet: true, guidingBlock: false, lift: true },
    gallery: [
      'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600',
    ],
    coordinates: [-6.8915, 107.6107],
  },
  {
    id: '6',
    name: 'RS Hasan Sadikin',
    city: 'Bandung',
    category: 'Rumah Sakit',
    image: 'https://images.unsplash.com/photo-1587351021759-3772687c8b78?w=800',
    status: 'complete',
    score: 85,
    description: 'Rumah sakit rujukan Jawa Barat ini memiliki fasilitas aksesibilitas yang cukup lengkap.',
    facilities: { ramp: true, toilet: true, guidingBlock: true, lift: true },
    gallery: [
      'https://images.unsplash.com/photo-1587351021759-3772687c8b78?w=600',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600',
    ],
    coordinates: [-6.8969, 107.6150],
  },
  {
    id: '7',
    name: 'Stasiun MRT Lebak Bulus',
    city: 'Jakarta',
    category: 'Halte',
    image: 'https://images.unsplash.com/photo-1565109441189-ad5e67e40tried?w=800',
    status: 'complete',
    score: 90,
    description: 'Stasiun MRT Jakarta didesain dengan standar aksesibilitas internasional dengan lift dan guiding block di seluruh area.',
    facilities: { ramp: true, toilet: true, guidingBlock: true, lift: true },
    gallery: [
      'https://images.unsplash.com/photo-1565109441189-ad5e67e40c8a?w=600',
    ],
    coordinates: [-6.2894, 106.7746],
  },
  {
    id: '8',
    name: 'Masjid Raya Bandung',
    city: 'Bandung',
    category: 'Masjid',
    image: 'https://images.unsplash.com/photo-1545167496-c1e1cd26e5da?w=800',
    status: 'not-accessible',
    score: 35,
    description: 'Masjid bersejarah ini masih memerlukan perbaikan aksesibilitas terutama untuk akses kursi roda.',
    facilities: { ramp: false, toilet: false, guidingBlock: false, lift: false },
    gallery: [
      'https://images.unsplash.com/photo-1545167496-c1e1cd26e5da?w=600',
    ],
    coordinates: [-6.9211, 107.6077],
  },
];

export const categories = [
  { id: 'kampus', name: 'Kampus', count: 25 },
  { id: 'masjid', name: 'Masjid', count: 42 },
  { id: 'halte', name: 'Halte', count: 38 },
  { id: 'rumah-sakit', name: 'Rumah Sakit', count: 20 },
];

export const cities = [
  'Jakarta',
  'Bandung',
  'Surabaya',
  'Depok',
  'Yogyakarta',
  'Semarang',
  'Medan',
  'Makassar',
];
