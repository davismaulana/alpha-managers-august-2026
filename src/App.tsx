import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';

type FormState = {
  monthlyRevenue: string;
  teamSize: string;
  ownerLoad: string;
  mainPain: string;
  desiredFix: string;
};

type FormKey = keyof FormState;

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
  campaign: string;
};

const config: PageConfig = {
  eyebrow: 'Alpha Managers Exclusive Workshop',
  brand: 'Coach Ferly',
  date: 'Aloft Jakarta Barat - 13 Agustus 2026',
  heroTitle: 'Manager Anda Sibuk. Tapi Hasilnya Masih Harus Anda Kejar?',
  heroLead:
    'Untuk bisnis yang ingin manager lebih memegang target, KPI, ritme eksekusi, dan tanggung jawab performa tim.',
  poster: '/main-poster.png',
  posterAlt: 'Alpha Managers August workshop poster',
  primaryCta: 'Cek Kesiapan Manager Anda',
  painIntro: 'Kalau semua masih harus dikejar owner, masalahnya bukan kurang orang. Masalahnya akuntabilitas.',
  pains: [
    {
      title: 'KPI ada, tapi tidak jadi kendali',
      body: 'Angka sudah dibuat, tetapi tidak benar-benar menggerakkan keputusan dan prioritas harian tim.',
    },
    {
      title: 'Manager melapor aktivitas, bukan hasil',
      body: 'Meeting jalan, update ada, namun ownership terhadap target belum terasa kuat.',
    },
    {
      title: 'Tim berjalan dengan standar masing-masing',
      body: 'Setiap divisi punya ritme sendiri. Owner akhirnya kembali menjadi pengingat utama.',
    },
    {
      title: 'Feedback terasa tidak konsisten',
      body: 'Performa rendah dibahas terlambat, coaching tidak rutin, dan accountability mudah kabur.',
    },
  ],
  shiftTitle: 'Manager yang baik bukan hanya sibuk. Mereka memegang hasil.',
  shiftBody:
    'Sesi ini membantu bisnis membangun ritme manager: target jelas, KPI dipakai, feedback berjalan, dan tim punya standar eksekusi yang sama.',
  curriculumTitle: 'Yang dibangun dalam Alpha Managers',
  curriculum: [
    {
      day: '01',
      title: 'KPI yang benar-benar dipakai',
      points: ['KPI sederhana dan terukur', 'Target turun ke aktivitas harian', 'Manager membaca angka sebelum masalah membesar'],
    },
    {
      day: '02',
      title: 'Ritme performance management',
      points: ['Feedback tanpa drama', 'Coaching lebih terstruktur', 'Evaluasi performa lebih objektif'],
    },
    {
      day: '03',
      title: 'Accountability manager',
      points: ['Manager tidak hanya menunggu instruksi', 'Follow-up lebih tegas', 'Owner tidak menjadi pengingat utama'],
    },
  ],
  proofTitle: 'Untuk owner, HR, dan leader yang ingin manager naik kelas.',
  proofBody:
    'Halaman ini sengaja menyeleksi kecocokan. Yang dicari bukan peserta sebanyak-banyaknya, tetapi bisnis yang memang siap membangun sistem manajemen lebih tegas.',
  investmentTitle: 'Jika manager belum memegang hasil, owner akan terus memikul beban eksekusi.',
  investmentBody:
    'Isi validasi singkat. Detail nama, WhatsApp, dan bisnis akan dilanjutkan di chatbot setelah Anda masuk ke percakapan.',
  waUrl: 'https://zenichat.com/api/wa/52c7314c-e9b8-406e-aa5a-690d5e83afbb/august-zenith-prior1',
  campaign: '@august_zen',
};

const initialForm: FormState = {
  monthlyRevenue: '',
  teamSize: '',
  ownerLoad: '',
  mainPain: '',
  desiredFix: '',
};

const options: Record<FormKey, string[]> = {
  monthlyRevenue: ['< Rp500 juta', 'Rp500 juta - Rp1 miliar', 'Rp1 miliar - Rp5 miliar', '> Rp5 miliar'],
  teamSize: ['1-5 orang', '6-15 orang', '16-50 orang', '51-100 orang', '> 100 orang'],
  ownerLoad: ['Sesekali turun tangan', 'Masih sering mengejar manager', 'Hampir semua hasil tetap saya follow-up'],
  mainPain: ['KPI tidak berjalan', 'Manager belum ownership', 'Tim tidak konsisten', 'Performance review tidak rapi'],
  desiredFix: ['Manager lebih accountable', 'KPI lebih hidup', 'Ritme eksekusi lebih jelas', 'Owner tidak terus mengejar hasil'],
};

const formSteps: { key: FormKey; label: string; prompt: string }[] = [
  { key: 'monthlyRevenue', label: 'Omset per bulan', prompt: 'Saat ini bisnis Anda ada di level omset yang mana?' },
  { key: 'teamSize', label: 'Jumlah tim', prompt: 'Seberapa besar tim yang sekarang dikelola manager?' },
  { key: 'ownerLoad', label: 'Beban owner', prompt: 'Seberapa sering owner masih mengejar hasil?' },
  { key: 'mainPain', label: 'Tantangan utama', prompt: 'Masalah manager mana yang paling terasa sekarang?' },
  { key: 'desiredFix', label: 'Prioritas', prompt: 'Apa yang paling ingin dibereskan lebih dulu?' },
];

const scrollToForm = () => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

function buildWaText(form: FormState) {
  return [
    'Halo tim Coach Ferly, saya sudah mengisi validasi awal Alpha Managers.',
    '',
    `Campaign: ${config.campaign}`,
    `Omset: ${form.monthlyRevenue}`,
    `Jumlah tim: ${form.teamSize}`,
    `Kondisi owner: ${form.ownerLoad}`,
    `Tantangan utama: ${form.mainPain}`,
    `Yang ingin dibereskan: ${form.desiredFix}`,
  ].join('\n');
}

function App() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const waHref = useMemo(() => `${config.waUrl}?text=${encodeURIComponent(buildWaText(form))}`, [form]);
  const canSubmit = Object.values(form).every(Boolean);
  const currentStep = formSteps[stepIndex];
  const currentValue = form[currentStep.key];
  const isLastStep = stepIndex === formSteps.length - 1;

  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>('section, .poster-frame, .pain-grid article, .curriculum-list article, .fit-form'),
    );

    revealItems.forEach((item, index) => {
      item.classList.add('reveal');
      item.style.setProperty('--reveal-delay', item.classList.contains('hero') ? '1000ms' : `${Math.min(index * 90, 540)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  const update = (key: FormKey, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const goNext = () => {
    if (!currentValue) return;
    if (isLastStep) {
      if (canSubmit) setSubmitted(true);
      return;
    }
    setStepIndex((current) => current + 1);
  };

  return (
    <main className="lp-shell">
      <nav className="lp-nav">
        <img src="/alpha-leaders-logo-yellow.png" alt="Alpha Leaders" />
        <strong>{config.eyebrow}</strong>
        <span>{config.date}</span>
        <button type="button" onClick={scrollToForm}>{config.primaryCta}</button>
      </nav>

      <section className="hero section-band reveal">
        <div className="hero-copy">
          <p className="kicker">{config.brand}</p>
          <h1>{config.heroTitle}</h1>
          <p className="lead">{config.heroLead}</p>
          <div className="hero-actions">
            <button type="button" className="gold-button" onClick={scrollToForm}>{config.primaryCta}<ArrowRight size={18} /></button>
            <span>Validasi singkat dulu. Identitas lanjut di chatbot.</span>
          </div>
        </div>
        <figure className="poster-frame reveal">
          <img src={config.poster} alt={config.posterAlt} />
        </figure>
      </section>

      <section className="section-band narrow reveal">
        <p className="kicker">Cek kondisi tim Anda</p>
        <h2>{config.painIntro}</h2>
        <div className="pain-grid">
          {config.pains.map((pain) => (
            <article key={pain.title} className="reveal">
              <h3>{pain.title}</h3>
              <p>{pain.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-band reveal">
        <h2>{config.shiftTitle}</h2>
        <p>{config.shiftBody}</p>
      </section>

      <section className="section-band narrow reveal">
        <p className="kicker">Workshop flow</p>
        <h2>{config.curriculumTitle}</h2>
        <div className="curriculum-list">
          {config.curriculum.map((item) => (
            <article key={item.title} className="reveal">
              <span>{item.day}</span>
              <div>
                <h3>{item.title}</h3>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof-band reveal">
        <div>
          <p className="kicker">Proof & fit</p>
          <h2>{config.proofTitle}</h2>
          <p>{config.proofBody}</p>
        </div>
        <img src="/industry-trust-client.png" alt="Client and company proof" />
      </section>

      <section id="lead-form" className="form-band reveal">
        <div className="form-copy">
          <p className="kicker">Validasi seat</p>
          <h2>{config.investmentTitle}</h2>
          <p>{config.investmentBody}</p>
        </div>
        <form
          className="fit-form reveal"
          onSubmit={(event) => {
            event.preventDefault();
            goNext();
          }}
        >
          {submitted ? (
            <div className="submit-result">
              <h3>Cocok. Lanjutkan ke WhatsApp untuk data peserta.</h3>
              <a className="wa-button" href={waHref}><MessageCircle size={18} /> Lanjut ke Chatbot WhatsApp</a>
            </div>
          ) : (
            <>
              <div className="form-progress">
                <span>Langkah {stepIndex + 1} dari {formSteps.length}</span>
                <div><i style={{ width: `${((stepIndex + 1) / formSteps.length) * 100}%` }} /></div>
              </div>
              <fieldset key={currentStep.key} className="step-panel">
                <legend>{currentStep.label}</legend>
                <h3>{currentStep.prompt}</h3>
                <div className="choice-grid">
                  {options[currentStep.key].map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={currentValue === option ? 'selected' : ''}
                      onClick={() => update(currentStep.key, option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div className="form-actions">
                <button
                  type="button"
                  className="ghost-button"
                  onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
                  disabled={stepIndex === 0}
                >
                  <ArrowLeft size={17} /> Kembali
                </button>
                <button className="gold-button" type="submit" disabled={!currentValue}>
                  {isLastStep ? 'Selesaikan Validasi' : 'Lanjut'}<ArrowRight size={18} />
                </button>
              </div>
            </>
          )}
        </form>
      </section>
    </main>
  );
}

export default App;



