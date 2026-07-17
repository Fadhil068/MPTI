const MENU_DATA = {
  'rendang': {
    id: 'rendang',
    nama: 'Rendang Daging',
    harga: 25000,
    kategori: 'Makanan Utama',
    deskripsi: 'Daging sapi pilihan dimasak perlahan dengan bumbu rempah-rempah khas Padang hingga empuk dan meresap sempurna.',
    tags: ['Daging Sapi', 'Pedas'],
    pedas: 4,
    berat: '± 150 gram',
    kalori: '320 kkal',
    rating: 4.8,
    ulasan: 125,
    img: 'img/071114000_1522751934-Resep-Rendang-Ayam-Kering.jpg',
    thumbnails: [
      'img/071114000_1522751934-Resep-Rendang-Ayam-Kering.jpg',
      'img/30825f62038ff446435a521c0237f561.jpg',
      'img/d3f1a9ad74bb9ce6050ae1f6ee87763a.jpg',
      'img/ef425d5c417882455b49f2948c032384.jpg'
    ]
  },
  'ayam-pop': {
    id: 'ayam-pop',
    nama: 'Ayam Pop',
    harga: 20000,
    kategori: 'Lauk',
    deskripsi: 'Ayam kampung goreng khas Padang yang gurih, empuk, disajikan dengan sambal khas yang manis gurih.',
    tags: ['Ayam', 'Gurih'],
    pedas: 1,
    berat: '± 120 gram',
    kalori: '240 kkal',
    rating: 4.7,
    ulasan: 98,
    img: 'img/451c3a2537616f5d5d06750972b5458e.jpg',
    thumbnails: [
      'img/451c3a2537616f5d5d06750972b5458e.jpg',
      'img/d3f1a9ad74bb9ce6050ae1f6ee87763a.jpg',
      'img/30825f62038ff446435a521c0237f561.jpg'
    ]
  },
  'dendeng-balado': {
    id: 'dendeng-balado',
    nama: 'Dendeng Balado',
    harga: 28000,
    kategori: 'Lauk',
    deskripsi: 'Dendeng sapi dengan sambal balado pedas manis yang menggugah selera, renyah di luar lembut di dalam.',
    tags: ['Daging Sapi', 'Pedas'],
    pedas: 5,
    berat: '± 100 gram',
    kalori: '290 kkal',
    rating: 4.9,
    ulasan: 142,
    img: 'img/ac649842c150745962b88a60234d9091.jpg',
    thumbnails: [
      'img/ac649842c150745962b88a60234d9091.jpg',
      'img/071114000_1522751934-Resep-Rendang-Ayam-Kering.jpg',
      'img/d3f1a9ad74bb9ce6050ae1f6ee87763a.jpg'
    ]
  },
  'gulai-singkong': {
    id: 'gulai-singkong',
    nama: 'Gulai Daun Singkong',
    harga: 15000,
    kategori: 'Sayur',
    deskripsi: 'Daun singkong dimasak gulai santan khas Padang dengan cita rasa gurih dan bumbu rempah pilihan.',
    tags: ['Sayur', 'Santan'],
    pedas: 2,
    berat: '± 180 gram',
    kalori: '180 kkal',
    rating: 4.6,
    ulasan: 80,
    img: 'img/d3f1a9ad74bb9ce6050ae1f6ee87763a.jpg',
    thumbnails: [
      'img/d3f1a9ad74bb9ce6050ae1f6ee87763a.jpg',
      'img/ef425d5c417882455b49f2948c032384.jpg',
      'img/30825f62038ff446435a521c0237f561.jpg'
    ]
  },
  'es-jeruk': {
    id: 'es-jeruk',
    nama: 'Es Jeruk',
    harga: 8000,
    kategori: 'Minuman',
    deskripsi: 'Minuman perasan jeruk manis asli yang segar dan dingin, pas sebagai penutup hidangan pedas.',
    tags: ['Minuman', 'Dingin'],
    pedas: 0,
    berat: '± 300 ml',
    kalori: '90 kkal',
    rating: 4.8,
    ulasan: 110,
    img: 'img/30825f62038ff446435a521c0237f561.jpg',
    thumbnails: [
      'img/30825f62038ff446435a521c0237f561.jpg',
      'img/d3f1a9ad74bb9ce6050ae1f6ee87763a.jpg'
    ]
  },
  'gulai-ayam': {
    id: 'gulai-ayam',
    nama: 'Gulai Ayam',
    harga: 22000,
    kategori: 'Makanan Utama',
    deskripsi: 'Ayam dimasak gulai santan kuning khas Minang, kaya rempah-rempah khas Padang dan sangat gurih.',
    tags: ['Ayam', 'Pedas'],
    pedas: 3,
    berat: '± 150 gram',
    kalori: '280 kkal',
    rating: 4.7,
    ulasan: 95,
    img: 'img/ef425d5c417882455b49f2948c032384.jpg',
    thumbnails: [
      'img/ef425d5c417882455b49f2948c032384.jpg',
      'img/d3f1a9ad74bb9ce6050ae1f6ee87763a.jpg',
      'img/30825f62038ff446435a521c0237f561.jpg'
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MENU_DATA;
}
