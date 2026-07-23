import { useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, Pause, Play, X } from 'lucide-react';
import { LeadCapture } from './LeadCapture';
import { openRegistrationCTA } from '../../lib/constants';

const navigation = [
  ['Masalah', 'masalah'], ['Untuk Siapa', 'untuk-siapa'], ['Materi', 'materi'],
  ['Mentor', 'mentor'], ['Detail', 'detail'], ['FAQ', 'faq'],
];

const problems = [
  'KPI baru bergerak ketika owner ikut mendorong.',
  'Delegasi terjadi, tetapi standar hasilnya tidak jelas.',
  'Meeting bertambah; komitmen dan follow-up tetap lemah.',
  'Manager kembali mengerjakan operasional alih-alih memimpin.',
  'Tim menunggu arahan untuk keputusan yang seharusnya bisa mereka ambil.',
];

const loop = [
  ['01', 'Terjemahkan target', 'Ubah angka perusahaan menjadi prioritas dan standar kerja tim.'],
  ['02', 'Tetapkan ownership', 'Pastikan setiap hasil memiliki penanggung jawab yang jelas.'],
  ['03', 'Delegasikan dengan standar', 'Samakan definisi selesai, batas keputusan, dan waktu follow-up.'],
  ['04', 'Coach performa', 'Bedakan kapan tim perlu arahan, pertanyaan, feedback, atau koreksi.'],
  ['05', 'Tutup loop', 'Review komitmen, pelajari gap, lalu perbaiki ritme kerja berikutnya.'],
];

const disciplines = [
  ['Driving Team Targets', 'Menghubungkan aktivitas tim dengan outcome bisnis.'],
  ['Accountability System', 'Membangun ownership, review, dan follow-up yang konsisten.'],
  ['Effective Delegation', 'Mendelegasikan hasil, standar, ruang keputusan, dan batas waktu.'],
  ['Coaching & Performance Management', 'Membantu anggota tim memperbaiki kemampuan dan hasil.'],
  ['Leadership Communication', 'Memberikan arahan, feedback, dan ekspektasi dengan jelas.'],
  ['Building a High-Performance Team', 'Menyatukan disiplin, kemandirian, dan fokus pada hasil.'],
];

const faqs = [
  ['Apakah peserta harus sudah menjadi manager?', 'Program ini juga relevan untuk supervisor, team leader, atau kandidat manager yang sudah memegang tanggung jawab tim dan target.'],
  ['Apakah pembahasannya lebih banyak teori atau praktik?', 'Fokusnya adalah framework dan penerapan pada target, accountability, delegasi, coaching, komunikasi, dan performa tim.'],
  ['Apakah ada sesi tanya jawab?', 'Ya. Q&A termasuk dalam format program yang sudah tercantum pada detail event.'],
  ['Bagaimana seat dikonfirmasi?', 'Tim Alpha Leaders meninjau profil dan konteks kebutuhan lebih dulu, lalu melakukan follow-up melalui WhatsApp.'],
  ['Apakah peserta menerima sertifikat?', 'Ya. Sertifikat termasuk dalam komponen program yang tercantum pada halaman ini.'],
];

const Eyebrow = ({ children }: { children: string }) => <p className="az-eyebrow">{children}</p>;
const ApplyButton = ({ placement = 'approved-lp' }: { placement?: string }) => (
  <button type="button" onClick={() => openRegistrationCTA(placement)} className="az-cta">
    Daftar via WA <ArrowRight size={17} aria-hidden="true" />
  </button>
);

function TestimonialPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
    }
  };

  return (
    <section className="az-testimonial" aria-labelledby="testimonial-title">
      <div className="az-section-heading">
        <Eyebrow>BUKTI DARI RUANG KERJA</Eyebrow>
        <h2 id="testimonial-title">Apa Kata Mereka Tentang Coach Ferly &amp; Alpha Leaders</h2>
      </div>
      <div className="az-player-shell">
        <video
          ref={videoRef}
          className="az-player-video"
          poster="/august-horizontal.webp"
          preload="metadata"
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          <source src="/august-client-session.mp4" type="video/mp4" />
          Browser Anda tidak mendukung pemutaran video.
        </video>
        <button
          type="button"
          className="az-player-toggle"
          onClick={togglePlayback}
          aria-label={playing ? 'Jeda testimoni video' : 'Putar testimoni video'}
          aria-pressed={playing}
        >
          {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
          <span>{playing ? 'Jeda' : 'Putar testimoni'}</span>
        </button>
      </div>
    </section>
  );
}

export function ApprovedLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <main className="az-page">
      <header className="az-nav">
        <a href="#top" className="az-brand" aria-label="Alpha Leaders ke bagian atas">
          <img src="/alpha-leaders-logo-yellow.png" alt="" />
          <span>Alpha Leaders</span>
        </a>
        <nav className="az-nav-links" aria-label="Navigasi utama">
          {navigation.map(([label, id]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}
        </nav>
        <div className="az-nav-action"><ApplyButton placement="navigation" /></div>
        <button className="az-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && <nav className="az-mobile-nav" aria-label="Navigasi mobile">
          {navigation.map(([label, id]) => <button key={id} onClick={() => goTo(id)}>{label}</button>)}
          <ApplyButton placement="mobile-navigation" />
        </nav>}
      </header>

      <section id="top" className="az-hero" aria-labelledby="hero-title">
        <div className="az-hero-copy">
          <Eyebrow>ALPHA MANAGERS · 13 AGUSTUS 2026 · JAKARTA</Eyebrow>
          <h1 id="hero-title">Manager Anda Seharusnya Membawa Target Menjadi Eksekusi.</h1>
          <p className="az-hero-lead">Bukan membuat owner kembali turun tangan setiap kali delegasi macet, KPI meleset, atau tim kehilangan arah.</p>
          <p className="az-hero-body">Alpha Managers adalah sesi kerja satu hari untuk manager dan team leader yang perlu memperkuat accountability, delegation, coaching, komunikasi, dan disiplin eksekusi tim.</p>
          <div className="az-hero-actions"><ApplyButton placement="hero" /><p>Isi profil perusahaan dan tantangan manager Anda. Tim Alpha Leaders akan meninjau kecocokan sebelum mengonfirmasi seat.</p></div>
          <dl className="az-fact-rail"><div><dt>Tanggal</dt><dd>Kamis, 13 Agustus 2026</dd></div><div><dt>Waktu</dt><dd>09.00–17.00 WIB</dd></div><div><dt>Lokasi</dt><dd>Jakarta</dd></div><div><dt>Akses</dt><dd>By invitation only</dd></div></dl>
        </div>
        <div className="az-hero-media" aria-label="Poster Alpha Managers dan Manager Performance Command Board">
          <figure className="az-poster"><picture><source media="(max-width: 700px)" srcSet="/hero-poster-mobile.jpg" /><img src="/hero-poster.jpg" alt="Poster event Alpha Managers 13 Agustus 2026" /></picture></figure>
          <aside className="az-command-board"><p>Manager Performance Command Board</p><ol>{['Target', 'Accountability', 'Delegation', 'Coaching', 'Execution'].map((item, index) => <li key={item}><span>{index + 1}</span>{item}</li>)}</ol><div className="az-board-progress"><i /></div></aside>
        </div>
      </section>

      <section id="masalah" className="az-section az-problem" aria-labelledby="problem-title">
        <div className="az-section-heading"><Eyebrow>BUKAN SEKADAR MASALAH SKILL</Eyebrow><h2 id="problem-title">Saat Manager Belum Menjadi Management Layer, Owner Tetap Menjadi Titik Eskalasi.</h2><p>Manager bisa sangat kuat secara teknis, tetapi tim tetap tersendat ketika target tidak diterjemahkan menjadi standar, ownership, dan follow-up.</p></div>
        <ol className="az-signal-list">{problems.map((problem, index) => <li key={problem}><span>0{index + 1}</span>{problem}</li>)}</ol>
        <p className="az-bridge">Masalahnya bukan kurang sibuk. Masalahnya adalah belum ada ritme manajemen yang membuat target benar-benar bergerak.</p>
      </section>

      <section className="az-section az-loop" aria-labelledby="loop-title">
        <div className="az-section-heading"><Eyebrow>DARI TARGET KE EKSEKUSI</Eyebrow><h2 id="loop-title">Lima Gerakan yang Harus Bisa Dipimpin Manager.</h2></div>
        <ol className="az-loop-list">{loop.map(([number, title, body]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
        <p className="az-bridge">Alpha Managers menyatukan disiplin ini agar leadership tidak berhenti sebagai konsep.</p>
      </section>

      <section id="untuk-siapa" className="az-section az-fit" aria-labelledby="fit-title">
        <div className="az-section-heading"><Eyebrow>SIAPA YANG PALING RELEVAN</Eyebrow><h2 id="fit-title">Untuk Perusahaan yang Sudah Punya Manager—Tetapi Belum Merasakan Daya Ungkitnya.</h2></div>
        <div className="az-fit-grid"><article><h3>Untuk pengambil keputusan</h3><p>Untuk owner, founder, GM/COO, HR, atau L&amp;D yang sedang membangun management layer lebih kuat.</p></article><article><h3>Untuk peserta</h3><p>Untuk manager, supervisor, dan team leader yang memegang target, tim, delegasi, dan kualitas eksekusi.</p></article></div>
        <ul className="az-checks"><li>Owner masih sering menjadi pemecah masalah terakhir.</li><li>Manager butuh ritme accountability yang lebih tegas.</li><li>Training sebelumnya belum menjadi perilaku kerja.</li></ul>
        <p className="az-not-for">Bukan untuk perusahaan yang hanya mencari motivasi singkat atau janji hasil instan.</p>
      </section>

      <section id="materi" className="az-section az-curriculum" aria-labelledby="curriculum-title">
        <div className="az-section-heading"><Eyebrow>ENAM DISIPLIN MANAJEMEN</Eyebrow><h2 id="curriculum-title">Bukan Enam Topik Terpisah. Satu Sistem Kerja Manager.</h2></div>
        <ol className="az-ledger">{disciplines.map(([title, body], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol>
      </section>

      <section id="mentor" className="az-section az-mentors" aria-labelledby="mentor-title">
        <div className="az-section-heading"><Eyebrow>PRACTITIONER CONTEXT</Eyebrow><h2 id="mentor-title">Dibahas Bersama Praktisi yang Memahami Bisnis dan Kepemimpinan.</h2></div>
        <div className="az-mentor-grid"><article className="az-mentor-primary"><img src="/coach-ferly-august.png" alt="Coach Ferly F. Raya" /><div><p className="az-role">COACH FERLY F. RAYA · MAIN SPEAKER</p><h3>Senior Head Coach for Trillion-Scale Business Owner</h3><p>Alpha Leaders Community</p><ul><li>10+ tahun sebagai Senior Head Business Coach di salah satu coaching firm terbaik di Asia Tenggara.</li><li>Former Vice President di perusahaan telekomunikasi multinasional.</li><li>Pengalaman lebih dari 20 tahun di industri garmen dengan klien brand-brand multinasional.</li><li>Business Owner dengan visi membawa bisnis menuju IPO Ready 2030.</li><li>Founder &amp; Advisor Alpha Leaders Community.</li><li>Telah diliput di berbagai podcast dan media entrepreneur nasional.</li><li>Membantu ratusan business owner dengan skala bisnis ratusan miliar hingga triliunan rupiah membangun sistem bisnis yang lebih autopilot dan scalable.</li></ul></div></article><article className="az-mentor-secondary"><img src="/shoeb-kagda.jpg" alt="Shoeb Kagda" /><div><p className="az-role">SHOEB KAGDA · SPECIAL GUEST SPEAKER</p><h3>Country Director SMU Indonesia</h3><p>Business, economy, and leadership observer.</p><ul><li>Founder Globe Asia &amp; Indonesia Economic Forum.</li><li>Mantan Group Editor in Chief BeritaSatu Media Holdings.</li><li>Pengalaman lebih dari 35 tahun meliput dan menganalisis dunia bisnis, ekonomi, dan kepemimpinan di Asia Tenggara.</li><li>Telah mewawancarai dan berdiskusi langsung dengan ratusan CEO, investor, entrepreneur, dan business leader terkemuka di Indonesia.</li><li>Pembicara dan moderator pada berbagai forum bisnis, ekonomi, dan kepemimpinan tingkat nasional maupun internasional.</li></ul></div></article></div>
        <div className="az-proof"><img src="/industry-trust-cropped.webp" alt="Kolase industri yang telah bekerja bersama Coach Ferly" /><p>Gunakan hanya video, logo, dan media yang sudah ada pada paket August. Jangan mengubah media menjadi klaim tertulis tanpa sumber.</p></div>
      </section>

      <TestimonialPlayer />

      <section id="detail" className="az-section az-dossier" aria-labelledby="detail-title">
        <div className="az-section-heading"><Eyebrow>DETAIL PROGRAM</Eyebrow><h2 id="detail-title">Satu Hari untuk Menguatkan Cara Manager Memimpin Eksekusi.</h2></div>
        <div className="az-dossier-grid"><div><p>Exclusive Community Sharing</p><p>By Invitation Only</p><p>Kamis, 13 Agustus 2026</p><p>09.00–17.00 WIB</p><p>Jakarta</p></div><div><h3>Termasuk dalam program</h3><ul><li>Lunch &amp; 2x Coffee Break</li><li>Handbook Materi</li><li>Sertifikat</li><li>Q&amp;A dengan Mentor</li><li>Pre-Test &amp; Post-Test</li><li>Networking Eksklusif Managers</li></ul></div></div>
        <div className="az-flow"><span>Kirim profil</span><ArrowRight aria-hidden="true" /><span>Review kecocokan</span><ArrowRight aria-hidden="true" /><span>Konfirmasi via WhatsApp</span></div>
      </section>

      <section className="az-consequence" aria-labelledby="consequence-title"><div><Eyebrow>PERTANYAAN UNTUK OWNER DAN HR</Eyebrow><h2 id="consequence-title">Berapa Lama Lagi Target Harus Menunggu Owner Turun Tangan?</h2><p>Jika manager belum mampu mengubah target menjadi ownership, delegasi, dan follow-up, pertumbuhan perusahaan akan terus memakai energi owner sebagai penyangga.</p><ApplyButton placement="consequence" /><small>Mulai dari profil perusahaan. Tim Alpha Leaders akan menilai apakah konteksnya sesuai untuk Alpha Managers.</small></div></section>

      <section className="az-form-transition" aria-label="Profil undangan"><div className="az-transition-rule" /><p>Profil undangan</p><LeadCapture /></section>

      <section id="faq" className="az-section az-faq" aria-labelledby="faq-title"><div className="az-section-heading"><Eyebrow>SEBELUM MENGIRIM PROFIL</Eyebrow><h2 id="faq-title">Sebelum Mengirim Profil</h2></div><div>{faqs.map(([question, answer], index) => <article key={question} className="az-faq-item"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`}><span>{question}</span><ChevronDown className={openFaq === index ? 'az-rotate' : ''} /></button><div id={`faq-answer-${index}`} hidden={openFaq !== index}><p>{answer}</p></div></article>)}</div></section>

      <section className="az-closing" aria-labelledby="closing-title"><Eyebrow>ALPHA MANAGERS</Eyebrow><h2 id="closing-title">Bangun Manager yang Tidak Hanya Mengawasi Aktivitas—Tetapi Memimpin Hasil.</h2><p>Kirim profil perusahaan dan tantangan manager yang paling penting. Tim Alpha Leaders akan meninjau kecocokan konteks sebelum konfirmasi.</p><ApplyButton placement="closing" /></section>
      <footer className="az-footer">Alpha Leaders Community · Alpha Managers Event · 13 Agustus 2026 · Jakarta</footer>
    </main>
  );
}
