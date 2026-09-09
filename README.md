# HISKI Komisariat Jawa Barat — Situs Demo

Situs statis (HTML + CSS + JavaScript murni, **tanpa proses build**) berisi situs publik
dan portal internal pengurus untuk melihat arsip surat serta dokumen organisasi.

Karena tanpa build, berkas yang sama bisa dipasang di **Vercel sekarang** dan
dipindahkan ke **hosting cPanel biasa nanti** tanpa mengubah satu baris kode pun.

---

## Struktur berkas

```
.
├── index.html              Beranda
├── profil.html             Sejarah, visi, misi, struktur
├── pengurus.html           Susunan pengurus & perwakilan wilayah
├── program.html            Program kerja + kalender agenda
├── berita.html             Berita & pengumuman
├── publikasi.html          Jurnal, prosiding, buku, panduan naskah
├── keanggotaan.html        Manfaat, syarat, alur, formulir pendaftaran
├── kontak.html             Alamat, jam layanan, formulir pesan
├── 404.html                Halaman tidak ditemukan
├── portal/
│   ├── index.html          Masuk portal pengurus
│   ├── dashboard.html      Ringkasan surat, agenda, aktivitas
│   ├── surat.html          Arsip surat masuk & keluar + pratinjau kop surat
│   ├── dokumen.html        Dokumen organisasi (AD/ART, notula, laporan)
│   └── anggota.html        Basis data keanggotaan (Ketua & Sekretaris saja)
├── assets/
│   ├── img/                Logo resmi HISKI (biru, putih, favicon)
│   ├── css/style.css       Seluruh gaya situs
│   └── js/
│       ├── site.js         Menu, animasi, formulir demo
│       ├── data.js         SEMUA ISI PORTAL ADA DI SINI (surat, dokumen, anggota, akun)
│       └── portal.js       Logika portal: masuk, tabel, penyaring, pratinjau surat
├── vercel.json             Header keamanan + portal tidak diindeks mesin pencari
├── robots.txt, sitemap.xml
└── htaccess-untuk-hosting.txt   Untuk cPanel nanti (ganti nama jadi .htaccess)
```

## Akun demo portal

Kata sandi ketiganya: `hiski2026`

| Surel | Peran | Akses |
|---|---|---|
| `ketua@hiskijabar.or.id` | Ketua Umum | Semua menu |
| `sekretaris@hiskijabar.or.id` | Sekretaris | Semua menu |
| `bendahara@hiskijabar.or.id` | Bendahara | Tanpa Data Anggota |

## Data yang sudah resmi vs masih contoh

| Sudah resmi | Masih contoh |
|---|---|
| Susunan pengurus periode 2026–2030 (SK Nomor 19/SK/HISKI/VIII/2026, 13 Agustus 2026) | Berita, agenda, program kerja |
| Nomor SK, tanggal, dan nama Ketua Umum HISKI Pusat | Seluruh isi arsip surat & dokumen di portal |
| Tanggal pendirian HISKI (17 November 1988, Tugu, Puncak) | Nama jurnal, prosiding, dan buku di halaman Publikasi |
| Wilayah kerja 27 kabupaten/kota se-Jawa Barat | Alamat sekretariat, nomor telepon, surel |

---

## Menaikkan ke Vercel lewat GitHub

```bash
cd hiski-jabar
git init
git add .
git commit -m "Situs demo HISKI Jabar"
git branch -M main
git remote add origin https://github.com/<akun-anda>/hiski-jabar.git
git push -u origin main
```

Lalu di **vercel.com** → *Add New… → Project* → pilih repo `hiski-jabar` → **Deploy**.

Pengaturan yang dipilih saat impor:

| Kolom | Isi |
|---|---|
| Framework Preset | **Other** |
| Root Directory | `./` |
| Build Command | *kosongkan* |
| Output Directory | *kosongkan* |
| Install Command | *kosongkan* |

Setiap `git push` berikutnya otomatis tayang ulang. Alamat demo akan berbentuk
`https://hiski-jabar.vercel.app`.

## Memindahkan ke hosting sendiri nanti

1. Beli hosting + domain (mis. `hiskijabar.or.id`).
2. Unggah **seluruh isi folder ini** ke `public_html` lewat File Manager cPanel atau FTP.
3. Ganti nama `htaccess-untuk-hosting.txt` menjadi `.htaccess`.
4. Aktifkan SSL gratis (Let's Encrypt) di cPanel.
5. Ganti alamat pada `robots.txt` dan `sitemap.xml` dengan domain baru.

Tidak ada Node.js, PHP, atau basis data yang perlu dipasang.

---

## Mengubah isi situs

- **Teks halaman publik** → sunting langsung berkas `.html` yang bersangkutan.
- **Isi portal** (daftar surat, dokumen, anggota, akun) → sunting `assets/js/data.js`.
  Formatnya JavaScript biasa; tinggal menyalin satu blok dan mengganti isinya.
- **Warna dan huruf** → ubah nilai variabel di bagian `:root` pada `assets/css/style.css`.
- **Logo** → ganti berkas di `assets/img/` dengan nama yang sama:
  `lambang-hiski.png` (lambang biru, untuk latar terang), `lambang-hiski-putih.png`
  (untuk latar biru tua), `logo-hiski.png` (logo penuh dengan tulisan HISKI, dipakai
  pada kop surat di portal), serta `favicon.png` dan `apple-touch-icon.png`.

---

## Yang perlu diganti sebelum dipakai sungguhan

Demo ini aman untuk dipertontonkan, **belum aman untuk data asli**:

1. **Autentikasi portal masih di sisi peramban.** Kata sandi tertulis di `data.js`
   dan siapa pun dapat membacanya. Untuk produksi, gunakan autentikasi server —
   cara termurah yang tetap cocok dengan situs statis ini adalah
   [Supabase](https://supabase.com) (paket gratis): Auth untuk login pengurus,
   Storage untuk berkas PDF surat, dan Postgres untuk data surat/anggota.
   Situsnya tetap statis, hanya `data.js` yang diganti pemanggilan API.
   Alternatif lain: hosting dengan PHP + MySQL, atau Google Apps Script bila
   arsip surat sudah terlanjur rapi di Google Drive.
2. **Berkas surat belum ditautkan.** Tombol *Unduh PDF* masih menampilkan pesan demo.
3. **Formulir belum terkirim ke mana pun.** Bisa disambungkan ke Formspree, Google Form,
   atau surel lewat layanan seperti Resend.
4. **Berita, agenda, arsip surat, dan halaman publikasi masih contoh** — perlu diganti
   data resmi komisariat. Logo dan warna sudah memakai identitas resmi HISKI
   (biru `#122E80`, diambil langsung dari berkas logo).
5. **Data anggota adalah data pribadi.** Batasi aksesnya per peran dan catat setiap
   pembukaan dokumen.

## Lisensi

Kode boleh dipakai dan diubah bebas oleh HISKI Komisariat Jawa Barat.
