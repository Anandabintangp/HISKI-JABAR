/* =============================================================
   HISKI Jabar — Portal Pengurus (DEMO)
   Autentikasi di sini hanya SIMULASI di sisi peramban.
   Untuk produksi, ganti dengan autentikasi server (mis. Supabase Auth).
   ============================================================= */
(function () {
  'use strict';

  var D = window.HISKI_DATA || {};
  var KEY = 'hiski_portal_sesi';

  /* ---------- Ikon ---------- */
  var I = {
    dash:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
    mail:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    file:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16.5 5.3a3.2 3.2 0 0 1 0 5.4M18 20a6.4 6.4 0 0 0-2.2-4.8"/></svg>',
    out:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 17l5-5-5-5"/><path d="M20 12H9"/><path d="M12 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/></svg>',
    home:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/></svg>',
    down:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M4 21h16"/></svg>',
    cal:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13h4l2 3h6l2-3h4"/><path d="M5 5h14l2 8v6H3v-6z"/></svg>'
  };
  var BULAN = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

  function tanggalID(iso) {
    var d = new Date(iso + 'T00:00:00');
    if (isNaN(d)) return iso;
    return d.getDate() + ' ' + BULAN[d.getMonth()] + ' ' + d.getFullYear();
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  /* ---------- Sesi (aman jika penyimpanan diblokir) ---------- */
  var memori = null;
  function simpanSesi(s) {
    memori = s;
    try { sessionStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* diabaikan */ }
  }
  function ambilSesi() {
    if (memori) return memori;
    try {
      var raw = sessionStorage.getItem(KEY);
      if (raw) { memori = JSON.parse(raw); return memori; }
    } catch (e) { /* diabaikan */ }
    return null;
  }
  function hapusSesi() {
    memori = null;
    try { sessionStorage.removeItem(KEY); } catch (e) { /* diabaikan */ }
  }

  function toast(msg) {
    var old = document.querySelector('.toast');
    if (old) old.remove();
    var t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  }

  /* ---------- Login ---------- */
  function pasangLogin() {
    var form = document.getElementById('formLogin');
    if (!form) return;
    var pesan = document.getElementById('loginPesan');

    document.querySelectorAll('[data-isi-akun]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        form.email.value = btn.getAttribute('data-isi-akun');
        form.sandi.value = 'hiski2026';
        form.email.focus();
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.email.value.trim().toLowerCase();
      var sandi = form.sandi.value;
      var user = (D.akun || []).filter(function (a) {
        return a.email.toLowerCase() === email && a.sandi === sandi;
      })[0];

      if (!user) {
        pesan.hidden = false;
        pesan.className = 'note';
        pesan.style.borderLeftColor = '#A8482F';
        pesan.style.background = '#FBE9E6';
        pesan.style.color = '#93301D';
        pesan.textContent = 'Surel atau kata sandi tidak cocok. Gunakan salah satu akun demo di bawah.';
        return;
      }
      simpanSesi({ email: user.email, nama: user.nama, jabatan: user.jabatan, peran: user.peran, inisial: user.inisial });
      location.href = 'dashboard.html';
    });
  }

  /* ---------- Kerangka portal ---------- */
  function jagaAkses() {
    var s = ambilSesi();
    if (!s) { location.replace('index.html'); return null; }
    return s;
  }

  function pasangKerangka(opsi) {
    var s = jagaAkses();
    if (!s) return null;

    var menu = [
      { id: 'dashboard', label: 'Dasbor',       href: 'dashboard.html', ikon: I.dash },
      { id: 'surat',     label: 'Arsip Surat',  href: 'surat.html',     ikon: I.mail },
      { id: 'dokumen',   label: 'Dokumen',      href: 'dokumen.html',   ikon: I.file },
      { id: 'anggota',   label: 'Data Anggota', href: 'anggota.html',   ikon: I.users, peran: ['ketua', 'sekretaris'] }
    ];

    var sisi = document.getElementById('portalSide');
    if (sisi) {
      sisi.innerHTML =
        '<a class="brand" href="dashboard.html">' + tandaLogo() +
          '<span class="brand-text"><strong>HISKI Jabar</strong><small>Portal Pengurus</small></span></a>' +
        '<div class="side-label">Menu</div>' +
        '<nav class="side-nav">' +
          menu.filter(function (m) { return !m.peran || m.peran.indexOf(s.peran) > -1; })
              .map(function (m) {
                return '<a href="' + m.href + '"' + (m.id === opsi.aktif ? ' class="active"' : '') + '>' + m.ikon + m.label + '</a>';
              }).join('') +
        '</nav>' +
        '<div class="side-label">Lainnya</div>' +
        '<nav class="side-nav">' +
          '<a href="../index.html">' + I.home + 'Situs Publik</a>' +
          '<a href="#" id="btnKeluar">' + I.out + 'Keluar</a>' +
        '</nav>' +
        '<div class="side-foot"><p class="small" style="color:#6C7F95;margin:0">Versi demo 1.0 · data contoh</p></div>';

      var keluar = document.getElementById('btnKeluar');
      if (keluar) keluar.addEventListener('click', function (e) { e.preventDefault(); hapusSesi(); location.replace('index.html'); });
    }

    var atas = document.getElementById('portalTop');
    if (atas) {
      atas.innerHTML =
        '<div><h1>' + esc(opsi.judul) + '</h1><div class="sub">' + esc(opsi.sub || '') + '</div></div>' +
        '<div class="portal-user"><div class="who"><b>' + esc(s.nama) + '</b><span>' + esc(s.jabatan) + '</span></div>' +
        '<div class="av">' + esc(s.inisial) + '</div></div>';
    }
    return s;
  }

  function tandaLogo() {
    return '<img class="brand-mark" src="../assets/img/lambang-hiski-putih.png" ' +
      'width="30" height="42" style="width:30px;height:42px" alt="Lambang HISKI">';
  }

  /* ---------- Modal ---------- */
  function bukaModal(judul, isiHTML, tombolHTML) {
    tutupModal();
    var wrap = document.createElement('div');
    wrap.className = 'modal-backdrop';
    wrap.id = 'modalBackdrop';
    wrap.innerHTML =
      '<div class="modal" role="dialog" aria-modal="true" aria-label="' + esc(judul) + '">' +
        '<div class="modal-head"><h3>' + esc(judul) + '</h3>' +
          '<button class="modal-close" aria-label="Tutup">&times;</button></div>' +
        '<div class="modal-body">' + isiHTML + '</div>' +
        '<div class="modal-foot">' + (tombolHTML || '<button class="btn btn-outline btn-sm" data-tutup>Tutup</button>') + '</div>' +
      '</div>';
    document.body.appendChild(wrap);
    wrap.addEventListener('click', function (e) {
      if (e.target === wrap || e.target.closest('.modal-close') || e.target.closest('[data-tutup]')) tutupModal();
    });
    document.addEventListener('keydown', escTutup);
  }
  function escTutup(e) { if (e.key === 'Escape') tutupModal(); }
  function tutupModal() {
    var m = document.getElementById('modalBackdrop');
    if (m) m.remove();
    document.removeEventListener('keydown', escTutup);
  }

  /* ---------- Pratinjau surat ---------- */
  function pratinjauSurat(sr) {
    var kop =
      '<div class="letter-head">' +
        '<img class="mark" src="../assets/img/logo-hiski.png" alt="Logo HISKI">' +
        '<div><h4>HIMPUNAN SARJANA-KESUSASTRAAN INDONESIA</h4>' +
        '<p><b>KOMISARIAT JAWA BARAT</b><br>Gedung Fakultas Ilmu Budaya Universitas Padjadjaran, Jatinangor, Sumedang 45363<br>' +
        'Surel: sekretariat@hiskijabar.or.id · Telepon: (022) 7796-XXXX</p></div>' +
      '</div>';

    var badan = esc(sr.isi).split('\n').map(function (p) {
      return p.trim() ? '<p>' + p + '</p>' : '';
    }).join('');

    var alamat = sr.jenis === 'keluar'
      ? '<p style="margin-bottom:18px">Yth. ' + esc(sr.pihak) + '<br>di Tempat</p>'
      : '<p style="margin-bottom:18px">Kepada Yth.<br>Ketua HISKI Komisariat Jawa Barat<br>di Jatinangor</p>';

    return '<div class="letter-note">Pratinjau contoh — bukan surat resmi HISKI Komisariat Jawa Barat.</div>' +
      '<div class="letter">' + kop +
      '<table style="width:100%;font-size:.86rem;margin-bottom:16px"><tr><td style="width:80px;padding:1px 0">Nomor</td><td style="padding:1px 0">: ' + esc(sr.nomor) + '</td>' +
      '<td style="text-align:right;padding:1px 0">' + (sr.jenis === 'keluar' ? 'Jatinangor' : '') + ', ' + tanggalID(sr.tanggal) + '</td></tr>' +
      '<tr><td style="padding:1px 0">Lampiran</td><td colspan="2" style="padding:1px 0">: ' + (sr.lampiran ? sr.lampiran + ' berkas' : '—') + '</td></tr>' +
      '<tr><td style="padding:1px 0">Sifat</td><td colspan="2" style="padding:1px 0">: ' + esc(sr.sifat) + '</td></tr>' +
      '<tr><td style="padding:1px 0;vertical-align:top">Perihal</td><td colspan="2" style="padding:1px 0"><b>: ' + esc(sr.perihal) + '</b></td></tr></table>' +
      alamat + '<p>Dengan hormat,</p>' + badan +
      '<div class="sign"><p style="margin:0">Hormat kami,</p>' +
      '<p class="name" style="margin:0">' + esc((sr.penandatangan || '').split(' — ')[0]) + '</p>' +
      '<p style="margin:0;font-size:.8rem;color:#69788C">' + esc((sr.penandatangan || '').split(' — ')[1] || '') + '</p></div>' +
      '</div>';
  }

  function detailSurat(id) {
    var sr = (D.surat || []).filter(function (x) { return x.id === id; })[0];
    if (!sr) return;

    var disp = (sr.disposisi || []).length
      ? '<h4 style="margin:26px 0 10px;font-family:var(--font-body);font-size:.95rem">Riwayat disposisi</h4>' +
        '<ul class="timeline-mini">' + sr.disposisi.map(function (d) {
          return '<li><span class="dot"></span><div><b>' + esc(d.kepada) + '</b>' +
            '<span>' + esc(d.catatan) + '</span>' +
            '<span style="opacity:.75">' + esc(d.oleh) + ' · ' + tanggalID(d.tanggal) + '</span></div></li>';
        }).join('') + '</ul>'
      : '';

    var meta =
      '<dl class="kv" style="margin:0 0 24px">' +
        '<dt>Nomor surat</dt><dd class="mono">' + esc(sr.nomor) + '</dd>' +
        '<dt>Jenis</dt><dd>' + labelJenis(sr.jenis) + '</dd>' +
        '<dt>Tanggal</dt><dd>' + tanggalID(sr.tanggal) + '</dd>' +
        '<dt>' + (sr.jenis === 'masuk' ? 'Asal surat' : 'Tujuan') + '</dt><dd>' + esc(sr.pihak) + '</dd>' +
        '<dt>Klasifikasi</dt><dd>' + esc(sr.klasifikasi) + '</dd>' +
        '<dt>Sifat</dt><dd>' + labelSifat(sr.sifat) + '</dd>' +
        '<dt>Status</dt><dd>' + labelStatus(sr.status) + '</dd>' +
        '<dt>Lampiran</dt><dd>' + (sr.lampiran ? sr.lampiran + ' berkas' : 'Tidak ada') + '</dd>' +
        '<dt>Ringkasan</dt><dd>' + esc(sr.ringkasan) + '</dd>' +
      '</dl>';

    bukaModal(sr.perihal, meta + pratinjauSurat(sr) + disp,
      '<button class="btn btn-outline btn-sm" data-tutup>Tutup</button>' +
      '<button class="btn btn-outline btn-sm" id="btnCetak">Cetak</button>' +
      '<button class="btn btn-primary btn-sm" id="btnUnduh">Unduh PDF</button>');

    var c = document.getElementById('btnCetak');
    if (c) c.addEventListener('click', function () { window.print(); });
    var u = document.getElementById('btnUnduh');
    if (u) u.addEventListener('click', function () { toast('Demo: berkas PDF asli belum ditautkan.'); });
  }

  function labelJenis(j) {
    return j === 'masuk'
      ? '<span class="badge badge-masuk">Surat masuk</span>'
      : '<span class="badge badge-keluar">Surat keluar</span>';
  }
  function labelSifat(s) {
    var k = s === 'Segera' ? 'badge-urgent' : (s === 'Penting' ? 'badge-wait' : 'badge-neutral');
    return '<span class="badge ' + k + '">' + esc(s) + '</span>';
  }
  function labelStatus(s) {
    var k = (s === 'Selesai' || s === 'Terkirim') ? 'badge-ok' : (s === 'Baru' ? 'badge-urgent' : 'badge-wait');
    return '<span class="badge ' + k + '">' + esc(s) + '</span>';
  }

  /* ---------- Halaman: Arsip Surat ---------- */
  function halamanSurat() {
    var tbody = document.getElementById('suratBody');
    if (!tbody) return;
    var cari = document.getElementById('cariSurat');
    var fJenis = document.getElementById('filterJenis');
    var fStatus = document.getElementById('filterStatus');
    var fTahun = document.getElementById('filterTahun');
    var info = document.getElementById('suratInfo');

    function gambar() {
      var q = (cari.value || '').toLowerCase().trim();
      var hasil = (D.surat || []).filter(function (s) {
        if (fJenis.value && s.jenis !== fJenis.value) return false;
        if (fStatus.value && s.status !== fStatus.value) return false;
        if (fTahun.value && s.tanggal.slice(0, 4) !== fTahun.value) return false;
        if (!q) return true;
        return (s.nomor + ' ' + s.perihal + ' ' + s.pihak + ' ' + s.klasifikasi).toLowerCase().indexOf(q) > -1;
      });

      info.textContent = hasil.length + ' dari ' + (D.surat || []).length + ' surat';

      if (!hasil.length) {
        tbody.innerHTML = '<tr><td colspan="6"><div class="empty">' + I.inbox +
          '<p style="margin:0">Tidak ada surat yang cocok dengan penyaring.</p></div></td></tr>';
        return;
      }

      tbody.innerHTML = hasil.map(function (s) {
        return '<tr>' +
          '<td class="mono" style="white-space:nowrap">' + esc(s.nomor) + '</td>' +
          '<td style="min-width:260px"><b style="color:var(--navy-900);font-weight:600">' + esc(s.perihal) + '</b>' +
            '<div class="small muted" style="margin-top:3px">' + esc(s.klasifikasi) + ' · ' +
            (s.lampiran ? s.lampiran + ' lampiran' : 'tanpa lampiran') + '</div></td>' +
          '<td style="min-width:200px">' + labelJenis(s.jenis) + '<div class="small muted" style="margin-top:5px">' + esc(s.pihak) + '</div></td>' +
          '<td style="white-space:nowrap">' + tanggalID(s.tanggal) + '</td>' +
          '<td>' + labelStatus(s.status) + '</td>' +
          '<td><button class="row-action" data-surat="' + esc(s.id) + '">Lihat</button></td>' +
        '</tr>';
      }).join('');
    }

    [cari, fJenis, fStatus, fTahun].forEach(function (el) {
      el.addEventListener('input', gambar);
      el.addEventListener('change', gambar);
    });
    tbody.addEventListener('click', function (e) {
      var b = e.target.closest('[data-surat]');
      if (b) detailSurat(b.getAttribute('data-surat'));
    });
    var reset = document.getElementById('resetFilter');
    if (reset) reset.addEventListener('click', function () {
      cari.value = ''; fJenis.value = ''; fStatus.value = ''; fTahun.value = ''; gambar();
    });
    var tambah = document.getElementById('btnTambahSurat');
    if (tambah) tambah.addEventListener('click', function () {
      toast('Demo: formulir tambah surat aktif pada versi berbayar/hosting sendiri.');
    });
    gambar();
  }

  /* ---------- Halaman: Dokumen ---------- */
  function halamanDokumen() {
    var wrap = document.getElementById('dokumenGrid');
    if (!wrap) return;
    var cari = document.getElementById('cariDokumen');
    var fKat = document.getElementById('filterKategori');

    var kategori = [];
    (D.dokumen || []).forEach(function (d) { if (kategori.indexOf(d.kategori) < 0) kategori.push(d.kategori); });
    fKat.innerHTML = '<option value="">Semua kategori</option>' +
      kategori.map(function (k) { return '<option>' + esc(k) + '</option>'; }).join('');

    function warna(f) {
      return f === 'PDF' ? 'i-terra' : (f === 'XLSX' ? 'i-green' : 'i-blue');
    }
    function gambar() {
      var q = (cari.value || '').toLowerCase().trim();
      var hasil = (D.dokumen || []).filter(function (d) {
        if (fKat.value && d.kategori !== fKat.value) return false;
        if (!q) return true;
        return (d.nama + ' ' + d.kategori + ' ' + d.pemilik).toLowerCase().indexOf(q) > -1;
      });
      if (!hasil.length) {
        wrap.innerHTML = '<div class="empty" style="grid-column:1/-1">' + I.file + '<p style="margin:0">Dokumen tidak ditemukan.</p></div>';
        return;
      }
      wrap.innerHTML = hasil.map(function (d) {
        return '<article class="stat" style="align-items:flex-start">' +
          '<span class="ico ' + warna(d.format) + '">' + I.file + '</span>' +
          '<div style="min-width:0;flex:1">' +
            '<b style="font-family:var(--font-body);font-size:.95rem;line-height:1.35;display:block">' + esc(d.nama) + '</b>' +
            '<span style="display:block;margin:5px 0 10px">' + esc(d.kategori) + ' · ' + esc(d.format) + ' · ' + esc(d.ukuran) + '</span>' +
            '<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">' +
              '<span class="badge badge-neutral">' + tanggalID(d.tanggal) + '</span>' +
              '<button class="row-action" data-unduh="' + esc(d.nama) + '">Unduh</button>' +
            '</div>' +
          '</div></article>';
      }).join('');
    }
    cari.addEventListener('input', gambar);
    fKat.addEventListener('change', gambar);
    wrap.addEventListener('click', function (e) {
      var b = e.target.closest('[data-unduh]');
      if (b) toast('Demo: “' + b.getAttribute('data-unduh') + '” belum ditautkan ke berkas asli.');
    });
    gambar();
  }

  /* ---------- Halaman: Anggota ---------- */
  function halamanAnggota() {
    var tbody = document.getElementById('anggotaBody');
    if (!tbody) return;
    var cari = document.getElementById('cariAnggota');
    var fKat = document.getElementById('filterKategoriAnggota');
    var info = document.getElementById('anggotaInfo');

    var kategori = [];
    (D.anggota || []).forEach(function (a) { if (kategori.indexOf(a.kategori) < 0) kategori.push(a.kategori); });
    fKat.innerHTML = '<option value="">Semua unsur</option>' +
      kategori.map(function (k) { return '<option>' + esc(k) + '</option>'; }).join('');

    function gambar() {
      var q = (cari.value || '').toLowerCase().trim();
      var hasil = (D.anggota || []).filter(function (a) {
        if (fKat.value && a.kategori !== fKat.value) return false;
        if (!q) return true;
        return (a.nama + ' ' + a.kategori + ' ' + a.jabatan + ' ' + a.institusi).toLowerCase().indexOf(q) > -1;
      });
      info.textContent = hasil.length + ' dari ' + (D.anggota || []).length + ' nama';
      if (!hasil.length) {
        tbody.innerHTML = '<tr><td colspan="6"><div class="empty">' + I.users + '<p style="margin:0">Tidak ada nama yang cocok.</p></div></td></tr>';
        return;
      }
      tbody.innerHTML = hasil.map(function (a) {
        var k = a.status === 'Aktif' ? 'badge-ok' : (a.status === 'Baru' ? 'badge-masuk' : 'badge-wait');
        return '<tr><td class="mono">' + esc(a.id) + '</td>' +
          '<td><b style="color:var(--navy-900);font-weight:600">' + esc(a.nama) + '</b></td>' +
          '<td>' + esc(a.jabatan) + '</td>' +
          '<td>' + esc(a.kategori) + '</td>' +
          '<td>' + esc(a.institusi) + '</td>' +
          '<td><span class="badge ' + k + '">' + esc(a.status) + '</span></td></tr>';
      }).join('');
    }
    cari.addEventListener('input', gambar);
    fKat.addEventListener('change', gambar);
    gambar();
  }

  /* ---------- Halaman: Dasbor ---------- */
  function halamanDasbor() {
    var wrap = document.getElementById('dasborStat');
    if (!wrap) return;
    var surat = D.surat || [];
    var masuk = surat.filter(function (s) { return s.jenis === 'masuk'; }).length;
    var keluar = surat.filter(function (s) { return s.jenis === 'keluar'; }).length;
    var perluTindak = surat.filter(function (s) { return s.status === 'Baru' || s.status === 'Didisposisi'; }).length;
    var anggotaAktif = (D.anggota || []).filter(function (a) { return a.status !== 'Cuti'; }).length;

    wrap.innerHTML =
      kartuStat(I.inbox, 'i-blue', masuk, 'Surat masuk (2026)', '+3 bulan ini') +
      kartuStat(I.mail, 'i-gold', keluar, 'Surat keluar (2026)', '+2 bulan ini') +
      kartuStat(I.file, 'i-green', (D.dokumen || []).length, 'Dokumen organisasi', '') +
      kartuStat(I.cal, 'i-terra', perluTindak, 'Surat perlu ditindaklanjuti', '');

    var terbaru = document.getElementById('suratTerbaru');
    if (terbaru) {
      terbaru.innerHTML = surat.slice(0, 5).map(function (s) {
        return '<tr><td class="mono" style="white-space:nowrap">' + esc(s.nomor) + '</td>' +
          '<td><b style="color:var(--navy-900);font-weight:600">' + esc(s.perihal) + '</b>' +
          '<div class="small muted">' + esc(s.pihak) + '</div></td>' +
          '<td>' + labelJenis(s.jenis) + '</td>' +
          '<td style="white-space:nowrap">' + tanggalID(s.tanggal) + '</td>' +
          '<td><button class="row-action" data-surat="' + esc(s.id) + '">Lihat</button></td></tr>';
      }).join('');
      terbaru.addEventListener('click', function (e) {
        var b = e.target.closest('[data-surat]');
        if (b) detailSurat(b.getAttribute('data-surat'));
      });
    }

    var ag = document.getElementById('agendaInternal');
    if (ag) {
      ag.innerHTML = (D.agendaInternal || []).map(function (a) {
        return '<li><span class="dot"></span><div><b>' + esc(a.judul) + '</b>' +
          '<span>' + tanggalID(a.tanggal) + ' · ' + esc(a.tempat) + '</span></div></li>';
      }).join('');
    }

    var ak = document.getElementById('aktivitasTerbaru');
    if (ak) {
      ak.innerHTML = (D.aktivitas || []).map(function (a) {
        return '<li><span class="dot"></span><div><b style="font-weight:500">' + a.teks + '</b>' +
          '<span>' + esc(a.waktu) + '</span></div></li>';
      }).join('');
    }

    var stat = document.getElementById('statAnggota');
    if (stat) stat.textContent = anggotaAktif;
  }

  function kartuStat(ikon, warna, angka, label, delta) {
    return '<article class="stat"><span class="ico ' + warna + '">' + ikon + '</span>' +
      '<div><b>' + angka + '</b><span>' + label + '</span>' +
      (delta ? '<div class="delta">' + delta + '</div>' : '') + '</div></article>';
  }

  /* ---------- Ekspor ---------- */
  window.HISKI_PORTAL = {
    pasangLogin: pasangLogin,
    pasangKerangka: pasangKerangka,
    halamanSurat: halamanSurat,
    halamanDokumen: halamanDokumen,
    halamanAnggota: halamanAnggota,
    halamanDasbor: halamanDasbor,
    tanggalID: tanggalID,
    toast: toast
  };
})();
