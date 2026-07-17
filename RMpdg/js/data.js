/**
 * data.js - Pusat pengelolaan data RM Padang via localStorage
 * Menghubungkan form publik ↔ halaman admin
 */

const RMData = {

  // ===== HELPER =====
  _get(key) {
    try { return JSON.parse(localStorage.getItem(key)) || []; }
    catch { return []; }
  },
  _set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },
  _nextId(list) {
    if (!list.length) return 1;
    return Math.max(...list.map(x => x.id || 0)) + 1;
  },
  _now() {
    return new Date().toLocaleString('id-ID', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  },

  // ===== RESERVASI =====
  getReservasi() { return this._get('rm_reservasi'); },
  tambahReservasi(data) {
    const list = this.getReservasi();
    const item = {
      id: String(this._nextId(list)).padStart(3, '0'),
      ...data,
      status: 'pending',
      waktuDaftar: this._now()
    };
    list.unshift(item);
    this._set('rm_reservasi', list);
    return item;
  },
  updateStatusReservasi(id, status) {
    const list = this.getReservasi();
    const idx = list.findIndex(x => x.id === id);
    if (idx !== -1) { list[idx].status = status; this._set('rm_reservasi', list); }
  },
  hapusReservasi(id) {
    const list = this.getReservasi().filter(x => x.id !== id);
    this._set('rm_reservasi', list);
  },

  // ===== PESANAN CATERING =====
  getPesanan() { return this._get('rm_pesanan'); },
  tambahPesanan(data) {
    const list = this.getPesanan();
    const item = {
      id: String(this._nextId(list)).padStart(3, '0'),
      ...data,
      status: 'pending',
      waktuDaftar: this._now()
    };
    list.unshift(item);
    this._set('rm_pesanan', list);
    return item;
  },
  updateStatusPesanan(id, status) {
    const list = this.getPesanan();
    const idx = list.findIndex(x => x.id === id);
    if (idx !== -1) { list[idx].status = status; this._set('rm_pesanan', list); }
  },
  hapusPesanan(id) {
    const list = this.getPesanan().filter(x => x.id !== id);
    this._set('rm_pesanan', list);
  },

  // ===== PESAN KONTAK =====
  getPesan() { return this._get('rm_pesan'); },
  tambahPesan(data) {
    const list = this.getPesan();
    const item = {
      id: this._nextId(list),
      ...data,
      dibaca: false,
      waktu: this._now()
    };
    list.unshift(item);
    this._set('rm_pesan', list);
    return item;
  },
  tandaiDibaca(id) {
    const list = this.getPesan();
    const idx = list.findIndex(x => x.id === id);
    if (idx !== -1) { list[idx].dibaca = true; this._set('rm_pesan', list); }
  },
  tandaiSemuaDibaca() {
    const list = this.getPesan().map(x => ({ ...x, dibaca: true }));
    this._set('rm_pesan', list);
  },
  hapusPesan(id) {
    const list = this.getPesan().filter(x => x.id !== id);
    this._set('rm_pesan', list);
  },
  jumlahBelumDibaca() {
    return this.getPesan().filter(x => !x.dibaca).length;
  },

  // ===== PROMOSI =====
  getPromo() { return this._get('rm_promo'); },
  simpanPromo(data) {
    const list = this.getPromo();
    if (data.id) {
      const idx = list.findIndex(x => x.id === data.id);
      if (idx !== -1) list[idx] = data; else list.unshift(data);
    } else {
      data.id = this._nextId(list);
      list.unshift(data);
    }
    this._set('rm_promo', list);
    return data;
  },
  hapusPromo(id) {
    const list = this.getPromo().filter(x => x.id !== id);
    this._set('rm_promo', list);
  },
  togglePromo(id, aktif) {
    const list = this.getPromo();
    const idx = list.findIndex(x => x.id === id);
    if (idx !== -1) { list[idx].aktif = aktif; this._set('rm_promo', list); }
  }
};
