import { useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

type PageConfig = {
  eyebrow: string;
  brand: string;
  date: string;
  heroTitle: string;
  heroLead: string;
  poster: string;
  posterAlt: string;
  primaryCta: string;
  painIntro: string;
  pains: { title: string; body: string }[];
  shiftTitle: string;
  shiftBody: string;
  curriculumTitle: string;
  curriculum: { day: string; title: string; points: string[] }[];
  proofTitle: string;
  proofBody: string;
  investmentTitle: string;
  investmentBody: string;
  waUrl: string;
};

const config: PageConfig = {
  eyebrow: 'Alpha Managers Exclusive Workshop',
  brand: 'Coach Ferly',
  date: 'Aloft Jakarta Barat - 1 Oktober 2026',
  heroTitle: 'Manager Anda Belum Kerja Seperti Yang Anda Harapkan? Semua Masih Anda Yang Harus Kerjakan Sendiri?',
  heroLead: 'Untuk bisnis dengan omzet 5M+/bulan yang ingin manager lebih jelas memegang target, keputusan, dan hasil kerja tim.',
  poster: '/october-event-poster.png',
  posterAlt: 'Alpha Managers October 2026 workshop poster',
  primaryCta: 'Hubungi via WhatsApp',
  painIntro: 'Manager sudah ada. Tapi hasil tetap sering harus dikejar owner.',
  pains: [
    { title: 'Manager sibuk, tetapi belum memegang hasil', body: 'Aktivitas terlihat berjalan. Namun target, keputusan, dan follow-up penting masih sering kembali ke owner.' },
    { title: 'KPI tidak menjadi alat kendali', body: 'Angka sudah dibuat, tetapi belum cukup dipakai untuk membaca prioritas dan memperbaiki eksekusi harian.' },
    { title: 'Standar kerja berbeda-beda', body: 'Setiap orang punya cara sendiri. Owner akhirnya menjadi pengingat, penengah, dan penjaga kualitas.' },
    { title: 'Feedback datang terlambat', body: 'Performa rendah baru dibahas saat masalah sudah terasa besar. Coaching belum menjadi ritme yang konsisten.' },
  ],
  shiftTitle: 'Manager yang kuat bukan hanya banyak bergerak. Mereka tahu hasil apa yang harus dipegang.',
  shiftBody: 'Sesi ini membantu bisnis membangun ritme manajemen yang lebih tegas: target jelas, KPI hidup, feedback berjalan, dan tanggung jawab tidak mudah kabur.',
  curriculumTitle: 'Yang dirapikan dalam Alpha Managers',
  curriculum: [
    { day: '01', title: 'KPI yang benar-benar dipakai', points: ['KPI sederhana dan terukur', 'Target turun ke aktivitas harian', 'Manager membaca angka sebelum masalah membesar'] },
    { day: '02', title: 'Ritme performance management', points: ['Feedback lebih tenang dan jelas', 'Coaching lebih terstruktur', 'Evaluasi performa lebih objektif'] },
    { day: '03', title: 'Accountability manager', points: ['Manager tidak hanya menunggu instruksi', 'Follow-up lebih tegas', 'Owner tidak menjadi pengingat utama'] },
  ],
  proofTitle: 'Untuk owner dan leader yang ingin manager naik kelas secara nyata.',
  proofBody: 'Coach Ferly membantu melihat apakah masalah bisnis ada pada orangnya, ritmenya, atau sistem manajemen yang belum cukup tegas.',
  investmentTitle: 'Jika manager belum memegang hasil, owner akan terus memikul beban eksekusi.',
  investmentBody: 'Diskusikan kondisi manager dan kebutuhan bisnis Anda langsung bersama tim Alpha Leaders melalui WhatsApp.',
  waUrl: 'https://zenichat.id/api/wa/52c7314c-e9b8-406e-aa5a-690d5e83afbb/oct-2026',
};

function App() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('section, .poster-frame, .pain-grid article, .curriculum-list article'));
    revealItems.forEach((item, index) => {
      item.classList.add('reveal');
      item.style.setProperty('--reveal-delay', item.classList.contains('hero') ? '1000ms' : `${Math.min(index * 90, 540)}ms`);
    });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="lp-shell">
      <nav className="lp-nav">
        <img src="/alpha-leaders-logo-yellow.png" alt="Alpha Leaders" />
        <strong>{config.eyebrow}</strong>
        <span>{config.date}</span>
        <a href={config.waUrl}>{config.primaryCta}</a>
      </nav>

      <section className="hero section-band reveal">
        <div className="hero-copy">
          <p className="kicker">{config.brand}</p>
          <h1>{config.heroTitle}</h1>
          <p className="lead">{config.heroLead}</p>
          <div className="hero-actions">
            <a className="gold-button" href={config.waUrl}>{config.primaryCta}<ArrowRight size={18} /></a>
            <span>Diskusikan kebutuhan manager Anda langsung via WhatsApp.</span>
          </div>
        </div>
        <figure className="poster-frame reveal"><img src={config.poster} alt={config.posterAlt} /></figure>
      </section>

      <section className="section-band narrow reveal">
        <p className="kicker">Cek kondisi tim Anda</p>
        <h2>{config.painIntro}</h2>
        <div className="pain-grid">
          {config.pains.map((pain) => <article key={pain.title} className="reveal"><h3>{pain.title}</h3><p>{pain.body}</p></article>)}
        </div>
      </section>

      <section className="statement-band reveal"><h2>{config.shiftTitle}</h2><p>{config.shiftBody}</p></section>

      <section className="section-band narrow reveal">
        <p className="kicker">Workshop flow</p>
        <h2>{config.curriculumTitle}</h2>
        <div className="curriculum-list">
          {config.curriculum.map((item) => <article key={item.title} className="reveal"><span>{item.day}</span><div><h3>{item.title}</h3><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}
        </div>
      </section>

      <section className="proof-band reveal">
        <div><p className="kicker">Proof & fit</p><h2>{config.proofTitle}</h2><p>{config.proofBody}</p></div>
        <img src="/industry-trust-october.png" alt="Client and company proof" />
      </section>

      <section id="contact" className="form-band reveal">
        <div className="form-copy"><p className="kicker">Hubungi kami</p><h2>{config.investmentTitle}</h2><p>{config.investmentBody}</p></div>
        <a className="wa-button" href={config.waUrl}><MessageCircle size={18} /> Chat via WhatsApp</a>
      </section>
    </main>
  );
}

export default App;
