/* =============================================================
   HISKI Jabar — Data Portal Pengurus (DEMO)

   • Bagian "anggota" berisi SUSUNAN PENGURUS ASLI periode 2026–2030
     sesuai SK Nomor 19/SK/HISKI/VIII/2026 tanggal 13 Agustus 2026.
   • Bagian "surat", "dokumen", "agendaInternal", dan "aktivitas"
     masih CONTOH untuk memperagakan tampilan portal.
   • Bagian "akun" hanya untuk demo — kata sandi tertulis terbuka
     di berkas ini, jadi JANGAN dipakai di versi produksi.

   Pada versi produksi, seluruh data ini diganti sumber sungguhan
   (Supabase / API / basis data).
   ============================================================= */
window.HISKI_DATA = {

  /* --- Akun demo. JANGAN dipakai di produksi. --- */
  akun: [
    { email: 'ketua@hiskijabar.or.id',      sandi: 'hiski2026', nama: 'Dr. Mochamad Irfan Hidayatullah, M.Hum.', jabatan: 'Ketua Umum', peran: 'ketua',      inisial: 'MI' },
    { email: 'sekretaris@hiskijabar.or.id', sandi: 'hiski2026', nama: 'Desie Natalia, S.S.',                     jabatan: 'Sekretaris', peran: 'sekretaris', inisial: 'DN' },
    { email: 'bendahara@hiskijabar.or.id',  sandi: 'hiski2026', nama: 'Dr. Yostiani Noor Asmi Harini, M.Hum.',   jabatan: 'Bendahara',  peran: 'bendahara',  inisial: 'YH' }
  ],

  /* --- Arsip surat --- */
  surat: [
    {
      id: 'S-2026-041', jenis: 'keluar', nomor: '041/HISKI-JB/A/IX/2026', tanggal: '2026-09-05',
      perihal: 'Undangan Rapat Kerja Komisariat Semester Ganjil 2026/2027',
      pihak: 'Seluruh Pengurus HISKI Komisariat Jawa Barat', sifat: 'Penting', klasifikasi: 'Undangan',
      status: 'Terkirim', lampiran: 1, penandatangan: 'Dr. Mochamad Irfan Hidayatullah, M.Hum. — Ketua Umum',
      ringkasan: 'Rapat kerja membahas evaluasi program semester genap dan penyusunan agenda Bulan Bahasa dan Sastra 2026.',
      isi: 'Sehubungan dengan berakhirnya periode program semester genap 2025/2026, dengan hormat kami mengundang Bapak/Ibu Pengurus HISKI Komisariat Jawa Barat untuk hadir dalam Rapat Kerja Komisariat yang akan diselenggarakan pada:\n\nHari, tanggal : Sabtu, 19 September 2026\nWaktu : 09.00 – 14.00 WIB\nTempat : Ruang Sidang FIB, Universitas Padjadjaran, Jatinangor\nAgenda : Evaluasi program semester genap, penyusunan agenda Bulan Bahasa dan Sastra 2026, serta persiapan Konferensi Sastra Jawa Barat V.\n\nMengingat pentingnya agenda tersebut, kami mohon kehadiran Bapak/Ibu tepat waktu. Atas perhatian dan kerja samanya, kami ucapkan terima kasih.'
    },
    {
      id: 'S-2026-040', jenis: 'masuk', nomor: '117/UNPAD-FIB/PP/IX/2026', tanggal: '2026-09-03',
      perihal: 'Permohonan Narasumber Kuliah Umum "Sastra Sunda Kontemporer"',
      pihak: 'Fakultas Ilmu Budaya, Universitas Padjadjaran', sifat: 'Biasa', klasifikasi: 'Permohonan',
      status: 'Didisposisi', lampiran: 2, penandatangan: 'Dekan FIB Unpad',
      ringkasan: 'Permohonan satu narasumber dari HISKI Jabar untuk kuliah umum tanggal 14 Oktober 2026.',
      isi: 'Dalam rangka memperkaya khazanah keilmuan mahasiswa Program Studi Sastra Indonesia, kami bermaksud menyelenggarakan Kuliah Umum bertema "Sastra Sunda Kontemporer: Antara Tradisi dan Media Baru".\n\nSehubungan dengan hal tersebut, kami memohon kesediaan HISKI Komisariat Jawa Barat untuk mengutus satu orang narasumber pada kegiatan yang akan dilaksanakan pada hari Rabu, 14 Oktober 2026, pukul 09.00 WIB di Auditorium FIB Unpad.\n\nDemikian permohonan ini kami sampaikan. Atas perhatian dan kerja sama Bapak/Ibu, kami mengucapkan terima kasih.',
      disposisi: [
        { kepada: 'Bidang Penelitian dan Pengembangan', catatan: 'Mohon disiapkan nama narasumber dan konfirmasi paling lambat 20 September.', oleh: 'Ketua Umum', tanggal: '2026-09-04' }
      ]
    },
    {
      id: 'S-2026-039', jenis: 'masuk', nomor: '208/HISKI-PUSAT/B/VIII/2026', tanggal: '2026-08-28',
      perihal: 'Edaran Pendaftaran Konferensi Internasional Kesusastraan (KIK) XXXIV',
      pihak: 'HISKI Pusat, Jakarta', sifat: 'Penting', klasifikasi: 'Surat Edaran',
      status: 'Didisposisi', lampiran: 3, penandatangan: 'Ketua Umum HISKI',
      ringkasan: 'Pendaftaran abstrak KIK XXXIV dibuka hingga 30 Oktober 2026; setiap komisariat diminta mengirim delegasi.',
      isi: 'Bersama surat ini kami sampaikan bahwa pendaftaran abstrak untuk Konferensi Internasional Kesusastraan (KIK) XXXIV telah dibuka dan akan ditutup pada tanggal 30 Oktober 2026.\n\nSetiap komisariat diharapkan mengirimkan sekurang-kurangnya tiga orang delegasi serta menyosialisasikan kegiatan ini kepada seluruh anggota di wilayahnya. Panduan penulisan abstrak, tema pilihan, dan tautan pendaftaran terlampir.\n\nDemikian edaran ini disampaikan untuk dilaksanakan sebagaimana mestinya.',
      disposisi: [
        { kepada: 'Sekretaris', catatan: 'Sebarkan ke seluruh anggota melalui milis dan grup komisariat.', oleh: 'Ketua Umum', tanggal: '2026-08-29' },
        { kepada: 'Bidang Media dan Penerbitan', catatan: 'Buat pengumuman di situs dan media sosial.', oleh: 'Sekretaris', tanggal: '2026-08-29' }
      ]
    },
    {
      id: 'S-2026-038', jenis: 'keluar', nomor: '038/HISKI-JB/C/VIII/2026', tanggal: '2026-08-22',
      perihal: 'Surat Tugas Delegasi Seminar Nasional Bahasa dan Sastra di Yogyakarta',
      pihak: 'Sdr. Ananda Bintang Purwaramdhona, M.Hum. dan 2 orang lainnya', sifat: 'Biasa', klasifikasi: 'Surat Tugas',
      status: 'Terkirim', lampiran: 0, penandatangan: 'Dr. Mochamad Irfan Hidayatullah, M.Hum. — Ketua Umum',
      ringkasan: 'Penugasan tiga anggota sebagai delegasi komisariat pada seminar nasional 5–6 September 2026.',
      isi: 'Yang bertanda tangan di bawah ini, Ketua HISKI Komisariat Jawa Barat, dengan ini menugaskan nama-nama sebagaimana terlampir untuk mengikuti Seminar Nasional Bahasa dan Sastra yang diselenggarakan pada tanggal 5–6 September 2026 di Universitas Negeri Yogyakarta.\n\nSegala biaya yang timbul akibat penugasan ini dibebankan pada anggaran kegiatan komisariat tahun 2026. Surat tugas ini agar dilaksanakan dengan penuh tanggung jawab dan melaporkan hasilnya kepada pengurus setelah kegiatan selesai.'
    },
    {
      id: 'S-2026-037', jenis: 'masuk', nomor: '045/PSJ-ITB/K/VIII/2026', tanggal: '2026-08-18',
      perihal: 'Tawaran Kerja Sama Program Residensi Penulis Muda Jawa Barat',
      pihak: 'Pusat Studi Kebudayaan, Institut Teknologi Bandung', sifat: 'Biasa', klasifikasi: 'Kerja Sama',
      status: 'Selesai', lampiran: 1, penandatangan: 'Kepala Pusat Studi Kebudayaan ITB',
      ringkasan: 'Ajakan kerja sama penyelenggaraan residensi penulis muda selama dua minggu pada Februari 2027.',
      isi: 'Sehubungan dengan rencana penyelenggaraan Program Residensi Penulis Muda Jawa Barat, kami bermaksud menjalin kerja sama dengan HISKI Komisariat Jawa Barat sebagai mitra kurasi dan pendampingan akademik.\n\nProgram direncanakan berlangsung selama dua minggu pada bulan Februari 2027 dengan peserta sebanyak 12 orang penulis muda dari berbagai kabupaten/kota di Jawa Barat. Kerangka acuan kegiatan terlampir untuk menjadi bahan pertimbangan.'
    },
    {
      id: 'S-2026-036', jenis: 'keluar', nomor: '036/HISKI-JB/B/VIII/2026', tanggal: '2026-08-11',
      perihal: 'Permohonan Audiensi kepada Dinas Pendidikan Provinsi Jawa Barat',
      pihak: 'Kepala Dinas Pendidikan Provinsi Jawa Barat', sifat: 'Penting', klasifikasi: 'Permohonan',
      status: 'Terkirim', lampiran: 2, penandatangan: 'Dr. Mochamad Irfan Hidayatullah, M.Hum. — Ketua Umum',
      ringkasan: 'Permohonan audiensi terkait program literasi sastra untuk guru SMA/SMK se-Jawa Barat.',
      isi: 'Dengan hormat, dalam rangka mendukung penguatan literasi sastra di lingkungan pendidikan menengah, HISKI Komisariat Jawa Barat bermaksud memohon kesempatan audiensi dengan Bapak/Ibu Kepala Dinas Pendidikan Provinsi Jawa Barat.\n\nPokok bahasan yang ingin kami sampaikan meliputi rencana pelatihan apresiasi sastra bagi guru SMA/SMK, penyusunan modul pendamping, serta kemungkinan sinergi program pada tahun anggaran 2027.\n\nBesar harapan kami permohonan ini dapat dipertimbangkan. Atas perhatian Bapak/Ibu, kami ucapkan terima kasih.'
    },
    {
      id: 'S-2026-035', jenis: 'masuk', nomor: '312/DISDIK-JABAR/UM/VIII/2026', tanggal: '2026-08-06',
      perihal: 'Undangan Focus Group Discussion Kurikulum Muatan Lokal Bahasa dan Sastra Sunda',
      pihak: 'Dinas Pendidikan Provinsi Jawa Barat', sifat: 'Segera', klasifikasi: 'Undangan',
      status: 'Selesai', lampiran: 1, penandatangan: 'Sekretaris Dinas Pendidikan',
      ringkasan: 'Undangan FGD pada 13 Agustus 2026 di Bandung; komisariat diminta mengirim dua perwakilan.',
      isi: 'Dalam rangka penyempurnaan kurikulum muatan lokal Bahasa dan Sastra Sunda jenjang SMA/SMK, kami mengundang HISKI Komisariat Jawa Barat untuk hadir dalam Focus Group Discussion yang akan dilaksanakan pada hari Kamis, 13 Agustus 2026, pukul 08.30 WIB, bertempat di Aula Dinas Pendidikan Provinsi Jawa Barat, Bandung.\n\nMohon kehadiran dua orang perwakilan beserta konfirmasi paling lambat dua hari sebelum pelaksanaan.',
      disposisi: [
        { kepada: 'Bidang Penelitian dan Pengembangan', catatan: 'Hadir bersama Sekretaris. Siapkan catatan usulan komisariat.', oleh: 'Ketua Umum', tanggal: '2026-08-07' }
      ]
    },
    {
      id: 'S-2026-034', jenis: 'keluar', nomor: '034/HISKI-JB/A/VII/2026', tanggal: '2026-07-29',
      perihal: 'Pemberitahuan Hasil Seleksi Anggota Baru Periode Juli 2026',
      pihak: 'Calon Anggota HISKI Komisariat Jawa Barat', sifat: 'Biasa', klasifikasi: 'Pemberitahuan',
      status: 'Terkirim', lampiran: 1, penandatangan: 'Desie Natalia, S.S. — Sekretaris',
      ringkasan: 'Pengumuman 23 anggota baru yang dinyatakan diterima pada periode pendaftaran Juli 2026.',
      isi: 'Berdasarkan hasil rapat verifikasi berkas yang dilaksanakan pada tanggal 26 Juli 2026, dengan ini diberitahukan bahwa sebanyak 23 orang pendaftar dinyatakan diterima sebagai anggota HISKI Komisariat Jawa Barat periode Juli 2026.\n\nDaftar nama terlampir. Kepada seluruh anggota baru diharapkan mengikuti orientasi keanggotaan yang akan diselenggarakan secara daring pada tanggal 9 Agustus 2026.'
    },
    {
      id: 'S-2026-033', jenis: 'masuk', nomor: '019/KOMSAS-UPI/VII/2026', tanggal: '2026-07-21',
      perihal: 'Permohonan Dukungan Publikasi Festival Sastra Kampus 2026',
      pihak: 'Komunitas Sastra Universitas Pendidikan Indonesia', sifat: 'Biasa', klasifikasi: 'Permohonan',
      status: 'Selesai', lampiran: 1, penandatangan: 'Ketua Panitia Festival',
      ringkasan: 'Permintaan dukungan publikasi dan satu juri untuk lomba esai festival.',
      isi: 'Sehubungan dengan penyelenggaraan Festival Sastra Kampus 2026, kami memohon dukungan HISKI Komisariat Jawa Barat berupa publikasi kegiatan melalui kanal resmi komisariat serta kesediaan mengutus satu orang juri untuk lomba esai sastra.\n\nKegiatan akan berlangsung pada tanggal 3–5 September 2026 di Kampus UPI Bandung. Kerangka acuan kegiatan kami lampirkan bersama surat ini.'
    },
    {
      id: 'S-2026-032', jenis: 'keluar', nomor: '032/HISKI-JB/D/VII/2026', tanggal: '2026-07-14',
      perihal: 'Laporan Pertanggungjawaban Kegiatan Bengkel Kritik Sastra Angkatan IV',
      pihak: 'HISKI Pusat, Jakarta', sifat: 'Biasa', klasifikasi: 'Laporan',
      status: 'Terkirim', lampiran: 4, penandatangan: 'Dr. Yostiani Noor Asmi Harini, M.Hum. — Bendahara',
      ringkasan: 'LPJ kegiatan bengkel kritik sastra yang diikuti 48 peserta pada Mei–Juni 2026.',
      isi: 'Bersama surat ini kami sampaikan Laporan Pertanggungjawaban penyelenggaraan Bengkel Kritik Sastra Angkatan IV yang berlangsung pada tanggal 17 Mei sampai dengan 21 Juni 2026 dengan jumlah peserta 48 orang.\n\nLaporan memuat rekapitulasi kegiatan, laporan keuangan, daftar hadir peserta, serta dokumentasi kegiatan. Demikian laporan ini kami sampaikan untuk menjadi periksa.'
    },
    {
      id: 'S-2026-031', jenis: 'masuk', nomor: '088/PERPUSDA-JB/VI/2026', tanggal: '2026-06-30',
      perihal: 'Undangan Peluncuran Katalog Naskah Sunda Kuno Digital',
      pihak: 'Dinas Perpustakaan dan Kearsipan Daerah Jawa Barat', sifat: 'Biasa', klasifikasi: 'Undangan',
      status: 'Selesai', lampiran: 1, penandatangan: 'Kepala Dinas Perpustakaan dan Kearsipan',
      ringkasan: 'Undangan menghadiri peluncuran katalog digital naskah Sunda kuno pada 8 Juli 2026.',
      isi: 'Dengan hormat kami mengundang Ketua dan Pengurus HISKI Komisariat Jawa Barat untuk menghadiri Peluncuran Katalog Naskah Sunda Kuno Digital, yang akan dilaksanakan pada hari Rabu, 8 Juli 2026, pukul 09.00 WIB, di Gedung Perpustakaan Daerah Provinsi Jawa Barat, Bandung.\n\nAtas kehadiran Bapak/Ibu, kami ucapkan terima kasih.'
    },
    {
      id: 'S-2026-030', jenis: 'keluar', nomor: '030/HISKI-JB/A/VI/2026', tanggal: '2026-06-19',
      perihal: 'Undangan Diskusi Bulanan "Membaca Ulang Sastra Buruh"',
      pihak: 'Anggota HISKI Komisariat Jawa Barat', sifat: 'Biasa', klasifikasi: 'Undangan',
      status: 'Terkirim', lampiran: 0, penandatangan: 'Desie Natalia, S.S. — Sekretaris',
      ringkasan: 'Undangan diskusi bulanan daring pada 27 Juni 2026 pukul 19.30 WIB.',
      isi: 'Dengan hormat kami mengundang seluruh anggota untuk mengikuti Diskusi Bulanan HISKI Jabar dengan tema "Membaca Ulang Sastra Buruh dalam Arsip Sastra Indonesia", yang akan dilaksanakan pada hari Sabtu, 27 Juni 2026, pukul 19.30 WIB, secara daring.\n\nTautan ruang pertemuan akan dibagikan melalui grup anggota satu hari sebelum pelaksanaan.'
    },
    {
      id: 'S-2026-029', jenis: 'masuk', nomor: '007/PENERBIT-AK/VI/2026', tanggal: '2026-06-09',
      perihal: 'Penawaran Kerja Sama Penerbitan Bunga Rampai Sastra Jawa Barat',
      pihak: 'Penerbit Aksara Kanaya, Bandung', sifat: 'Biasa', klasifikasi: 'Kerja Sama',
      status: 'Baru', lampiran: 2, penandatangan: 'Direktur Penerbit Aksara Kanaya',
      ringkasan: 'Tawaran menerbitkan bunga rampai esai anggota komisariat dengan skema bagi hasil royalti.',
      isi: 'Kami menawarkan kerja sama penerbitan bunga rampai esai sastra karya anggota HISKI Komisariat Jawa Barat dengan skema bagi hasil royalti dan dukungan penyuntingan penuh dari pihak kami.\n\nRancangan perjanjian kerja sama dan contoh tata letak buku kami lampirkan sebagai bahan pertimbangan Bapak/Ibu pengurus.'
    },
    {
      id: 'S-2026-028', jenis: 'keluar', nomor: '028/HISKI-JB/C/V/2026', tanggal: '2026-05-27',
      perihal: 'Surat Keterangan Keanggotaan atas nama Topik Mulyana, S.S., M.Hum.',
      pihak: 'Topik Mulyana, S.S., M.Hum.', sifat: 'Biasa', klasifikasi: 'Surat Keterangan',
      status: 'Terkirim', lampiran: 0, penandatangan: 'Desie Natalia, S.S. — Sekretaris',
      ringkasan: 'Keterangan status keanggotaan aktif untuk keperluan pengajuan hibah penelitian.',
      isi: 'Yang bertanda tangan di bawah ini menerangkan bahwa nama tersebut di atas benar merupakan anggota aktif HISKI Komisariat Jawa Barat sejak tahun 2019 sampai dengan saat ini.\n\nSurat keterangan ini dibuat untuk keperluan pengajuan hibah penelitian dan dapat dipergunakan sebagaimana mestinya.'
    },
    {
      id: 'S-2026-027', jenis: 'masuk', nomor: '156/UIN-SGD/FAH/V/2026', tanggal: '2026-05-15',
      perihal: 'Permohonan Reviewer Prosiding Seminar Sastra dan Keislaman',
      pihak: 'Fakultas Adab dan Humaniora, UIN Sunan Gunung Djati', sifat: 'Biasa', klasifikasi: 'Permohonan',
      status: 'Selesai', lampiran: 1, penandatangan: 'Wakil Dekan Bidang Akademik',
      ringkasan: 'Permintaan tiga reviewer untuk 40 artikel prosiding seminar.',
      isi: 'Sehubungan dengan penyusunan prosiding Seminar Nasional Sastra dan Keislaman, kami memohon bantuan HISKI Komisariat Jawa Barat untuk merekomendasikan tiga orang reviewer yang kompeten dalam bidang kajian sastra.\n\nJumlah artikel yang akan ditelaah sebanyak 40 naskah, dengan tenggat penelaahan pada akhir Juni 2026.'
    },
    {
      id: 'S-2026-026', jenis: 'keluar', nomor: '026/HISKI-JB/A/V/2026', tanggal: '2026-05-04',
      perihal: 'Pemberitahuan Perubahan Sekretariat Komisariat',
      pihak: 'HISKI Pusat dan seluruh komisariat', sifat: 'Penting', klasifikasi: 'Pemberitahuan',
      status: 'Terkirim', lampiran: 0, penandatangan: 'Dr. Mochamad Irfan Hidayatullah, M.Hum. — Ketua Umum',
      ringkasan: 'Pemberitahuan pindah sekretariat ke Gedung FIB Unpad, Jatinangor, terhitung 1 Juni 2026.',
      isi: 'Dengan ini kami beritahukan bahwa terhitung mulai tanggal 1 Juni 2026, sekretariat HISKI Komisariat Jawa Barat berpindah ke Gedung Fakultas Ilmu Budaya Universitas Padjadjaran, Jalan Raya Bandung–Sumedang KM 21, Jatinangor, Sumedang 45363.\n\nSeluruh korespondensi resmi setelah tanggal tersebut mohon dialamatkan ke alamat baru di atas.'
    }
  ],

  /* --- Dokumen organisasi --- */
  dokumen: [
    { id: 'D-01', nama: 'AD/ART HISKI (Hasil Munas 2024)',                 kategori: 'Dasar Organisasi', tanggal: '2024-11-17', ukuran: '1,8 MB', format: 'PDF', pemilik: 'Sekretaris' },
    { id: 'D-02', nama: 'SK Kepengurusan Komisariat Jawa Barat 2026–2030', kategori: 'Dasar Organisasi', tanggal: '2026-08-13', ukuran: '640 KB', format: 'PDF', pemilik: 'Sekretaris' },
    { id: 'D-03', nama: 'Program Kerja Komisariat Tahun 2026',             kategori: 'Perencanaan',      tanggal: '2026-01-15', ukuran: '1,1 MB', format: 'PDF', pemilik: 'Ketua' },
    { id: 'D-04', nama: 'Notula Rapat Pengurus — 21 Februari 2026',        kategori: 'Notula',           tanggal: '2026-02-21', ukuran: '320 KB', format: 'DOCX', pemilik: 'Sekretaris' },
    { id: 'D-05', nama: 'Notula Rapat Pengurus — 18 April 2026',           kategori: 'Notula',           tanggal: '2026-04-18', ukuran: '298 KB', format: 'DOCX', pemilik: 'Sekretaris' },
    { id: 'D-06', nama: 'Notula Rapat Pengurus — 20 Juni 2026',            kategori: 'Notula',           tanggal: '2026-06-20', ukuran: '341 KB', format: 'DOCX', pemilik: 'Sekretaris' },
    { id: 'D-07', nama: 'LPJ Bengkel Kritik Sastra Angkatan IV',           kategori: 'Laporan',          tanggal: '2026-07-12', ukuran: '4,2 MB', format: 'PDF', pemilik: 'Bendahara' },
    { id: 'D-08', nama: 'Laporan Keuangan Semester I 2026',                kategori: 'Keuangan',         tanggal: '2026-07-05', ukuran: '890 KB', format: 'XLSX', pemilik: 'Bendahara' },
    { id: 'D-09', nama: 'Proposal Konferensi Sastra Jawa Barat V',         kategori: 'Perencanaan',      tanggal: '2026-08-14', ukuran: '2,6 MB', format: 'PDF', pemilik: 'Ketua' },
    { id: 'D-10', nama: 'Nota Kesepahaman dengan Perpusda Jawa Barat',     kategori: 'Kerja Sama',       tanggal: '2026-03-27', ukuran: '1,4 MB', format: 'PDF', pemilik: 'Ketua' },
    { id: 'D-11', nama: 'Basis Data Anggota (rekap per Agustus 2026)',     kategori: 'Keanggotaan',      tanggal: '2026-08-31', ukuran: '512 KB', format: 'XLSX', pemilik: 'Sekretaris' },
    { id: 'D-12', nama: 'Templat Kop Surat & Nomor Surat Komisariat',      kategori: 'Templat',          tanggal: '2025-03-02', ukuran: '180 KB', format: 'DOCX', pemilik: 'Sekretaris' }
  ],

  /* --- Data pengurus & anggota.
         Baris pengurus di bawah SUDAH SESUAI SK Nomor 19/SK/HISKI/VIII/2026.
         Kolom institusi masih kosong ("—") karena datanya belum ada. --- */
  anggota: [
    { id: 'P-001', nama: 'Dr. Lina Meilinawati Rahayu, M.Hum.',      jabatan: 'Penasihat',    kategori: 'Dewan Penasihat',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-002', nama: 'Dr. Safrina Norman, M.Hum.',               jabatan: 'Penasihat',    kategori: 'Dewan Penasihat',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-003', nama: 'Dr. Ari J. Adipurwawidjana, M.A.',         jabatan: 'Penasihat',    kategori: 'Dewan Penasihat',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-004', nama: 'Dr. Herawati, S.S., M.A.',                 jabatan: 'Penasihat',    kategori: 'Dewan Penasihat',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-005', nama: 'Prof. Anton Sutandio, Ph.D.',              jabatan: 'Penasihat',    kategori: 'Dewan Penasihat',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-006', nama: 'Dr. Mochamad Irfan Hidayatullah, M.Hum.',  jabatan: 'Ketua Umum',   kategori: 'Pengurus Harian',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-007', nama: 'Erik Rusmana, S.S., M.Hum.',               jabatan: 'Wakil Ketua',  kategori: 'Pengurus Harian',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-008', nama: 'Desie Natalia, S.S.',                      jabatan: 'Sekretaris',   kategori: 'Pengurus Harian',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-009', nama: 'Sukmawati, S.Hum.',                        jabatan: 'Sekretaris',   kategori: 'Pengurus Harian',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-010', nama: 'Dr. Yostiani Noor Asmi Harini, M.Hum.',    jabatan: 'Bendahara',    kategori: 'Pengurus Harian',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-011', nama: 'Dheka Dwi Agustiningsih, S.S., M.Hum.',    jabatan: 'Bendahara',    kategori: 'Pengurus Harian',                    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-012', nama: 'Ananda Bintang Purwaramdhona, M.Hum.',     jabatan: 'Anggota',      kategori: 'Bidang Media dan Penerbitan',        institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-013', nama: 'Mohamad Noor Rizal, M.A.',                 jabatan: 'Anggota',      kategori: 'Bidang Media dan Penerbitan',        institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-014', nama: 'Fariz, S.Hum.',                            jabatan: 'Anggota',      kategori: 'Bidang Media dan Penerbitan',        institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-015', nama: 'Dr. Heri Isnaini, M.Hum.',                 jabatan: 'Anggota',      kategori: 'Bidang Pendidikan dan Pelatihan',    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-016', nama: 'Ismail Kusmayadi, S.Pd., M.Pd.',           jabatan: 'Anggota',      kategori: 'Bidang Pendidikan dan Pelatihan',    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-017', nama: 'Yudianto, S.Pd.',                          jabatan: 'Anggota',      kategori: 'Bidang Pendidikan dan Pelatihan',    institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-018', nama: 'Sarip Hidayat, S.Pd., M.Hum.',             jabatan: 'Anggota',      kategori: 'Bidang Pengembangan Jaringan',       institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-019', nama: 'Nandang R. Pamungkas, M.Pd.',              jabatan: 'Anggota',      kategori: 'Bidang Pengembangan Jaringan',       institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-020', nama: 'Nizar Machyuzaar, S.S.',                   jabatan: 'Anggota',      kategori: 'Bidang Pengembangan Jaringan',       institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-021', nama: 'Dr. Muhamad Adji, M.Hum.',                 jabatan: 'Anggota',      kategori: 'Bidang Penelitian dan Pengembangan', institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-022', nama: 'Dr. Lili Awaludin, M.A.',                  jabatan: 'Anggota',      kategori: 'Bidang Penelitian dan Pengembangan', institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-023', nama: 'Dr. Baban Banita, M.Hum.',                 jabatan: 'Anggota',      kategori: 'Bidang Penelitian dan Pengembangan', institusi: '—', status: 'Aktif', sejak: 2026 },
    { id: 'P-024', nama: 'Topik Mulyana, S.S., M.Hum.',              jabatan: 'Anggota',      kategori: 'Bidang Penelitian dan Pengembangan', institusi: '—', status: 'Aktif', sejak: 2026 }
  ],

  /* --- Agenda internal pengurus --- */
  agendaInternal: [
    { tanggal: '2026-09-19', judul: 'Rapat Kerja Komisariat Semester Ganjil', tempat: 'Ruang Sidang FIB Unpad, Jatinangor' },
    { tanggal: '2026-09-26', judul: 'Rapat Panitia Bulan Bahasa dan Sastra',  tempat: 'Daring (Zoom)' },
    { tanggal: '2026-10-14', judul: 'Kuliah Umum Sastra Sunda Kontemporer',   tempat: 'Auditorium FIB Unpad' },
    { tanggal: '2026-10-30', judul: 'Batas akhir pengiriman abstrak KIK XXXIV', tempat: 'Daring' }
  ],

  /* --- Aktivitas terbaru --- */
  aktivitas: [
    { waktu: '2 jam lalu',   teks: 'Desie Natalia mengunggah <b>Notula Rapat Pengurus — 20 Juni 2026</b>' },
    { waktu: 'Kemarin',      teks: 'Ketua Umum mendisposisikan surat <b>117/UNPAD-FIB/PP/IX/2026</b> ke Bidang Penelitian dan Pengembangan' },
    { waktu: '4 hari lalu',  teks: 'Surat keluar <b>041/HISKI-JB/A/IX/2026</b> diterbitkan dan dikirim' },
    { waktu: '1 minggu lalu',teks: 'Dr. Yostiani Noor Asmi Harini memperbarui <b>Laporan Keuangan Semester I 2026</b>' },
    { waktu: '2 minggu lalu',teks: '23 anggota baru ditambahkan ke basis data keanggotaan' }
  ]
};
