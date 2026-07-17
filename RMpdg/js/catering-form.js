const paketData = {
  A: { nama: 'Paket A', porsi: '50 Porsi', harga: 'Rp1.500.000', img: 'img/diskon20_.jpg' },
  B: { nama: 'Paket B', porsi: '100 Porsi', harga: 'Rp2.800.000', img: 'img/30825f62038ff446435a521c0237f561.jpg' },
  C: { nama: 'Paket C', porsi: '150 Porsi', harga: 'Rp4.000.000', img: 'img/d3f1a9ad74bb9ce6050ae1f6ee87763a.jpg' },
};

function updateRingkasan() {
  const paket  = document.getElementById('paketCatering').value;
  const tamu   = document.getElementById('jumlahTamu').value;
  const jenis  = document.getElementById('jenisAcara').value;
  const tgl    = document.getElementById('tglAcara')?.value;

  if (paket && paketData[paket]) {
    const p = paketData[paket];
    document.getElementById('ringkasanNama').textContent  = p.nama;
    document.getElementById('ringkasanPorsi').textContent = p.porsi;
    document.getElementById('ringkasanHarga').textContent = p.harga;
    document.getElementById('ringkasanImg').src           = p.img;
    document.getElementById('rdTotal').textContent        = p.harga;
  }

  if (tgl) {
    const d = new Date(tgl);
    document.getElementById('rdTanggal').textContent =
      d.toLocaleDateString('id-ID', { day:'2-digit', month:'long', year:'numeric' });
  }

  document.getElementById('rdTamu').textContent = tamu ? tamu + ' orang' : '-';
  document.getElementById('rdJenis').textContent = jenis || '-';
}

function previewFile(input) {
  const file = input.files[0];
  if (file) {
    document.getElementById('fileName').textContent = '✓ ' + file.name;
  }
}

function submitCatering() {
  const nama  = document.getElementById('nama').value.trim();
  const telp  = document.getElementById('telp').value.trim();
  const paket = document.getElementById('paketCatering').value;
  const tgl   = document.getElementById('tglAcara')?.value;

  if (!nama || !telp || !paket || !tgl) {
    alert('Mohon lengkapi semua field yang wajib diisi (*).');
    return;
  }

  alert(`Pesanan catering berhasil dikirim!\n\nNama: ${nama}\nPaket: ${paketData[paket]?.nama}\nKami akan menghubungi Anda segera.`);
}

// Auto-set paket dari URL query string
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const paket  = params.get('paket');
  if (paket && document.getElementById('paketCatering')) {
    document.getElementById('paketCatering').value = paket;
    updateRingkasan();
  }
});