import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Loader2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { EVENT_NAME, FORM_CARD_ID, FORM_SECTION_ID } from '../../lib/constants';

type FormState = {
  businessType: string;
  monthlyRevenue: string;
  teamSize: string;
  teamChallenges: string[];
  businessImpact: string;
  ownerDependence: string;
  desiredOutcome: string;
  workshopFocus: string;
};

type RouteType = 'priority_1' | 'priority_2' | 'unqualified';

type ResultState = {
  type: RouteType;
  href?: string;
  leadId: string;
  referenceCode: string;
};

type SubmitState =
  | { status: 'idle'; message: string }
  | { status: 'submitting'; message: string }
  | { status: 'preview'; message: string; leadId: string }
  | { status: 'success'; message: string; leadId: string }
  | { status: 'error'; message: string };

type Step = {
  key: keyof FormState;
  label: string;
  headline: string;
  helper: string;
  kind?: 'input' | 'single' | 'multi' | 'scale';
  placeholder?: string;
  options?: string[];
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  autoComplete?: string;
};

const initialForm: FormState = {
  businessType: '',
  monthlyRevenue: '',
  teamSize: '',
  teamChallenges: [],
  businessImpact: '',
  ownerDependence: '',
  desiredOutcome: '',
  workshopFocus: '',
};

const STEPS: Step[] = [
  {
    key: 'businessType',
    label: 'Jenis Bisnis',
    headline: 'Bisnis Anda bergerak di bidang apa?',
    helper: 'Ceritakan kategori utama bisnis Anda agar tim kami memahami konteksnya.',
    kind: 'input',
    placeholder: 'Contoh: kuliner, distribusi, jasa profesional',
    autoComplete: 'organization-title',
  },
  {
    key: 'monthlyRevenue',
    label: 'Omset Rata-rata Bulanan',
    headline: 'Berapa kisaran omset usaha Anda setiap bulan?',
    helper: 'Rentang ini membantu proses validasi awal sebelum percakapan WhatsApp dimulai.',
    kind: 'single',
    options: ['< Rp100 juta', 'Rp100 juta - Rp500 juta', 'Rp500 juta - Rp1 miliar', 'Rp1 miliar - Rp5 miliar', '> Rp5 miliar'],
  },
  {
    key: 'teamSize',
    label: 'Jumlah Tim',
    headline: 'Saat ini, berapa orang yang aktif bekerja di tim Anda?',
    helper: 'Hitung tim inti, operasional, sales, admin, dan manajemen.',
    kind: 'single',
    options: ['1-5 orang', '6-15 orang', '16-50 orang', '51-100 orang', '> 100 orang'],
  },
  {
    key: 'teamChallenges',
    label: 'Tantangan Tim',
    headline: 'Situasi mana yang paling sering memperlambat tim Anda?',
    helper: 'Pilih maksimal tiga situasi yang paling sering terasa saat ini.',
    kind: 'multi',
    options: [
      'Tim masih menunggu arahan untuk bergerak',
      'Manager belum mantap mengambil keputusan',
      'Delegasi sering berhenti di tengah jalan',
      'Leader punya jabatan, tetapi ownership belum terasa',
      'Banyak persoalan tetap kembali ke owner',
      'Koordinasi antar tim belum rapi',
      'Target kerja belum tercapai secara konsisten',
      'SOP belum menjadi kebiasaan tim',
    ],
  },
  {
    key: 'businessImpact',
    label: 'Dampak Utama',
    headline: 'Dampak apa yang paling terasa dari situasi tersebut?',
    helper: 'Pilih dampak yang paling perlu segera diperbaiki.',
    kind: 'single',
    options: [
      'Owner masih terseret ke operasional harian',
      'Eksekusi pekerjaan berjalan lambat',
      'Target tim sulit tercapai dengan stabil',
      'Pengalaman pelanggan ikut menurun',
      'Profit atau arus kas ikut tertekan',
      'Pertumbuhan bisnis tertahan',
      'Tim mudah saling menunggu atau menyalahkan',
      'Waktu habis untuk follow-up pekerjaan',
    ],
  },
  {
    key: 'ownerDependence',
    label: 'Ketergantungan Operasional',
    headline: 'Seberapa besar operasional masih bergantung pada keputusan Anda?',
    helper: 'Pilih kondisi yang paling mendekati situasi bisnis Anda saat ini.',
    kind: 'scale',
    options: [
      'Tim berjalan mandiri',
      'Sesekali perlu arahan',
      'Cukup sering kembali bertanya',
      'Mayoritas keputusan perlu persetujuan',
      'Hampir semua hal kembali ke saya',
    ],
  },
  {
    key: 'desiredOutcome',
    label: 'Perubahan yang Diinginkan',
    headline: 'Dalam tiga bulan ke depan, perubahan apa yang paling ingin Anda lihat?',
    helper: 'Pilih satu hasil yang paling penting untuk tim Anda.',
    kind: 'single',
    options: [
      'Manager lebih mandiri',
      'Owner lebih lepas dari operasional',
      'Eksekusi tim lebih cepat',
      'Struktur kerja lebih jelas',
      'Target lebih konsisten tercapai',
      'Koordinasi antar tim lebih rapi',
      'SOP lebih dijalankan',
      'Leader lebih bertanggung jawab',
    ],
  },
  {
    key: 'workshopFocus',
    label: 'Fokus Workshop',
    headline: 'Kemampuan apa yang paling ingin Anda perkuat melalui workshop ini?',
    helper: 'Pilih topik yang paling relevan untuk kondisi tim Anda saat ini.',
    kind: 'single',
    options: [
      'Membangun manager yang siap memimpin',
      'Membuat tim lebih mandiri',
      'Delegasi sampai tuntas',
      'Membangun ritme meeting dan kontrol kerja',
      'Menyusun KPI yang dipahami tim',
      'Mengurangi ketergantungan bisnis pada owner',
      'Membangun accountability manager',
      'Merapikan komunikasi antar divisi',
    ],
  },
];

const CAMPAIGN_PREFIX = 'cfr-august-zenith';
const DEFAULT_UTM_CAMPAIGN = 'alpha-managers-august-zenith-2026';
const DEFAULT_UTM_SOURCE = 'alpha-managers-august-zenith-lp';
const PRIORITY_ONE_CTA =
  'https://zenichat.com/api/wa/52c7314c-e9b8-406e-aa5a-690d5e83afbb/august-zenith-prior1';
const PRIORITY_TWO_CTA =
  'https://zenichat.com/api/wa/52c7314c-e9b8-406e-aa5a-690d5e83afbb/august-event-prior2';
const PRIORITY_ONE_CAMPAIGN = '@august_zen';
const PRIORITY_TWO_CAMPAIGN = '@august_zen2';
const THANK_YOU_MESSAGE = 'Terimakasih, jika anda terpilih tim kami akan menghubungi anda';

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : '';
};

const createEventId = () => {
  if (window.crypto?.randomUUID) {
    return `${CAMPAIGN_PREFIX}-${window.crypto.randomUUID()}`;
  }

  return `${CAMPAIGN_PREFIX}-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const generateReferenceCode = () => Math.random().toString(36).slice(2, 6).toUpperCase();

const getRouteType = (monthlyRevenue: string): RouteType => {
  if (monthlyRevenue === '< Rp100 juta' || monthlyRevenue === 'Rp100 juta - Rp500 juta') {
    return 'unqualified';
  }

  if (monthlyRevenue === '> Rp5 miliar') {
    return 'priority_1';
  }

  return 'priority_2';
};

const buildCtaMessage = (route: RouteType, answers: FormState, referenceCode: string) =>
  [
    'Halo tim Coach Ferly, saya sudah mengisi form Exclusive Workshop ini',
    '',
    `Ref: #${referenceCode}`,
    `Campaign: ${route === 'priority_1' ? PRIORITY_ONE_CAMPAIGN : PRIORITY_TWO_CAMPAIGN}`,
    `Jenis Bisnis: ${answers.businessType || '-'}`,
    `Omset Rata-rata Bulanan: ${answers.monthlyRevenue || '-'}`,
    `Jumlah Tim: ${answers.teamSize || '-'}`,
    `Tantangan Tim: ${answers.teamChallenges.join('; ') || '-'}`,
    `Dampak Utama: ${answers.businessImpact || '-'}`,
    `Ketergantungan Operasional: ${answers.ownerDependence || '-'}`,
    `Fokus 3 Bulan: ${answers.desiredOutcome || '-'}`,
    `Topik Workshop: ${answers.workshopFocus || '-'}`,
  ].join('\n');

const buildWaHref = (route: RouteType, answers: FormState, referenceCode: string) => {
  if (route === 'unqualified') return undefined;

  const baseUrl = route === 'priority_1' ? PRIORITY_ONE_CTA : PRIORITY_TWO_CTA;
  return `${baseUrl}?text=${encodeURIComponent(buildCtaMessage(route, answers, referenceCode))}`;
};

const LeadCapture: React.FC = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<ResultState | null>(null);
  const [fieldError, setFieldError] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>({
    status: 'idle',
    message:
      'Jawab 8 pertanyaan singkat. Detail peserta akan dilanjutkan di percakapan WhatsApp.',
  });

  const currentStep = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;
  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  const sourceMeta = useMemo(() => {
    const params = new URLSearchParams(window.location.search);

    return {
      pageUrl: window.location.href,
      utmCampaign: params.get('utm_campaign') || DEFAULT_UTM_CAMPAIGN,
      utmMedium: params.get('utm_medium') || '',
      utmSource: params.get('utm_source') || DEFAULT_UTM_SOURCE,
      utmContent: params.get('utm_content') || '',
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc'),
    };
  }, []);

  useEffect(() => {
    if (!result) return;

    document.getElementById(FORM_CARD_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [result]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setFieldError('');
    if (result) {
      setResult(null);
    }
    if (submitState.status === 'error') {
      setSubmitState({ status: 'idle', message: 'Periksa lagi datanya, lalu kirim ulang.' });
    }
  };

  const validateCurrentStep = () => {
    const value = form[currentStep.key];
    const isEmpty = Array.isArray(value) ? value.length === 0 : !value.trim();

    if (isEmpty) {
      setFieldError(`${currentStep.label} wajib diisi sebelum lanjut.`);
      return false;
    }

    setFieldError('');
    return true;
  };

  const toggleChallenge = (challenge: string) => {
    const exists = form.teamChallenges.includes(challenge);
    if (!exists && form.teamChallenges.length >= 3) {
      setFieldError('Pilih maksimal tiga situasi yang paling terasa.');
      return;
    }

    setForm((current) => ({
      ...current,
      teamChallenges: exists
        ? current.teamChallenges.filter((item) => item !== challenge)
        : [...current.teamChallenges, challenge],
    }));
    setFieldError('');
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    setStepIndex((current) => Math.min(current + 1, STEPS.length - 1));
  };

  const handlePrev = () => {
    setFieldError('');
    setStepIndex((current) => Math.max(current - 1, 0));
  };

  const resetForm = () => {
    setResult(null);
    setForm(initialForm);
    setStepIndex(0);
    setFieldError('');
    setSubmitState({
      status: 'idle',
      message:
        'Jawab 8 pertanyaan singkat. Detail peserta akan dilanjutkan di percakapan WhatsApp.',
    });
    window.setTimeout(() => {
      document.getElementById(FORM_CARD_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateCurrentStep()) return;

    const route = getRouteType(form.monthlyRevenue);
    const referenceCode = generateReferenceCode();
    setSubmitState({ status: 'submitting', message: 'Mengirim profil undangan...' });

    try {
      const eventId = createEventId();
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          business_type: form.businessType,
          monthly_revenue: form.monthlyRevenue,
          team_size: form.teamSize,
          team_challenges: form.teamChallenges,
          manager_challenge: form.teamChallenges.join('; '),
          business_impact: form.businessImpact,
          owner_dependence: form.ownerDependence,
          desired_outcome: form.desiredOutcome,
          workshop_focus: form.workshopFocus,
          route_type: route,
          event_id: eventId,
          fbp: sourceMeta.fbp,
          fbc: sourceMeta.fbc,
          source: sourceMeta.utmSource,
          page_url: sourceMeta.pageUrl,
          utm_source: sourceMeta.utmSource,
          utm_medium: sourceMeta.utmMedium,
          utm_campaign: sourceMeta.utmCampaign,
          utm_content: sourceMeta.utmContent,
        }),
      });
      const body = await response.json();

      if (!response.ok || !body.ok) {
        throw new Error(body.error || 'Form belum berhasil dikirim.');
      }

      if (body.preview) {
        setResult({
          type: route,
          href: buildWaHref(route, form, referenceCode),
          leadId: body.leadId,
          referenceCode,
        });
        setSubmitState({
          status: 'preview',
          leadId: body.leadId,
          message:
            body.message ||
            'Profil undangan sudah diterima dalam mode preview. Tim akan memvalidasi slot setelah webhook produksi aktif.',
        });
        return;
      }

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
          content_name: EVENT_NAME,
          content_category: 'Alpha Managers Workshop',
          lead_id: body.leadId,
          event_id: eventId,
        });
      }

      setResult({
        type: route,
        href: buildWaHref(route, form, referenceCode),
        leadId: body.leadId,
        referenceCode,
      });
      setSubmitState({
        status: 'success',
        leadId: body.leadId,
        message:
          'Profil undangan sudah diterima. Tim Coach Ferly akan meninjau kecocokan dan menghubungi Anda untuk validasi slot.',
      });
    } catch (error) {
      setSubmitState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Form belum berhasil dikirim.',
      });
    }
  };

  const renderResultPanel = () => {
    if (!result) return null;

    const isUnqualified = result.type === 'unqualified';

    return (
      <div className="space-y-6">
        <div
          className={[
            'rounded-[2rem] border p-6 md:p-8',
            isUnqualified
              ? 'border-red-300/25 bg-red-500/8'
              : result.type === 'priority_2'
                ? 'border-amber-300/35 bg-amber-300/10'
                : 'border-emerald-300/35 bg-emerald-300/10',
          ].join(' ')}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">
            Terima kasih
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-normal text-white md:text-3xl">
            {THANK_YOU_MESSAGE}
          </h3>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          {result.href ? (
            <a
              href={result.href}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-semibold text-[#052d17] shadow-[0_18px_44px_rgba(37,211,102,0.24)] transition hover:bg-[#1ebe5d]"
            >
              {result.type === 'priority_2' ? 'Kirim Data ke WhatsApp' : 'Lanjut ke WhatsApp'}
              {result.type === 'priority_2' ? (
                <MessageCircle className="h-4 w-4" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </a>
          ) : null}

          <button
            type="button"
            onClick={resetForm}
            className={[
              'inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition',
              result.href
                ? 'border border-white/15 text-white hover:border-gold-300 hover:text-gold-200'
                : 'bg-gold-200 text-black hover:bg-white',
            ].join(' ')}
          >
            Selesai
          </button>
        </div>
      </div>
    );
  };

  return (
    <section
      id={FORM_SECTION_ID}
      className="scroll-mt-24 overflow-hidden bg-black py-16 text-white md:py-24"
      aria-label="Validasi slot undangan Alpha Managers"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <FadeIn direction="up">
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[28px] border border-gold-400/25 bg-zinc-950 shadow-[0_32px_90px_rgba(0,0,0,0.5)]">
                <img
                  src="/main-poster.png"
                  alt="Alpha Managers 3.0 Exclusive Full Day Workshop poster"
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <form
              id={FORM_CARD_ID}
              onSubmit={handleSubmit}
              className="relative scroll-mt-24 overflow-hidden rounded-[28px] border border-gold-400/30 bg-[rgba(17,17,17,0.94)] p-5 shadow-[0_32px_90px_rgba(0,0,0,0.45)] md:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gold-400/15 blur-3xl" />
              <div className="relative">
                <div className="mb-6 flex flex-col gap-5 border-b border-gold-400/20 pb-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-200">
                      <Sparkles className="h-3.5 w-3.5" />
                      Validasi Slot
                    </p>
                    <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-normal md:text-5xl">
                      Validasi awal dalam 8 langkah.
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gold-200/75 md:text-base">
                      Halo! Terima kasih antusiasmenya untuk Exclusive Workshop ini. Isi konteks bisnis
                      dan tantangan tim Anda; detail peserta akan dilanjutkan di WhatsApp.
                    </p>
                  </div>
                  <ShieldCheck className="hidden h-10 w-10 shrink-0 text-gold-300 md:block" />
                </div>

                {result ? (
                  renderResultPanel()
                ) : (
                  <>
                    <div className="mb-7">
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-200/70">
                          Langkah {stepIndex + 1} dari {STEPS.length}
                        </p>
                        <p className="text-xs font-semibold text-gold-200/70">{Math.round(progress)}%</p>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gold-400 transition-all duration-500 ease-out"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div key={currentStep.key} className="hero-reveal min-h-[22rem] rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">
                        {currentStep.label}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-normal text-white md:text-3xl">
                        {currentStep.headline}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/62">
                        {currentStep.helper}
                      </p>

                      {currentStep.kind === 'multi' && currentStep.options ? (
                        <div className="mt-6 grid gap-3" role="group" aria-label={currentStep.label}>
                          <p className="text-xs font-semibold text-gold-200/70">
                            Dipilih {form.teamChallenges.length}/3
                          </p>
                          {currentStep.options.map((option) => {
                            const selected = form.teamChallenges.includes(option);
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => toggleChallenge(option)}
                                aria-pressed={selected}
                                className={[
                                  'group flex min-h-14 items-center justify-between gap-4 rounded-xl border px-4 text-left text-sm font-semibold transition',
                                  selected
                                    ? 'border-gold-300 bg-gold-300 text-black shadow-[0_16px_40px_rgba(212,175,106,0.22)]'
                                    : 'border-white/12 bg-black/25 text-white hover:border-gold-300/70 hover:bg-gold-300/10',
                                ].join(' ')}
                              >
                                <span>{option}</span>
                                <CheckCircle2
                                  className={[
                                    'h-5 w-5 shrink-0 transition',
                                    selected ? 'text-black' : 'text-white/25 group-hover:text-gold-300',
                                  ].join(' ')}
                                />
                              </button>
                            );
                          })}
                        </div>
                      ) : currentStep.options ? (
                        <div className="mt-6 grid gap-3">
                          {currentStep.options.map((option) => {
                            const value = form[currentStep.key];
                            const selected = !Array.isArray(value) && value === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => updateField(currentStep.key, option)}
                                aria-pressed={selected}
                                className={[
                                  'group flex min-h-14 items-center justify-between gap-4 rounded-xl border px-4 text-left text-sm font-semibold transition',
                                  selected
                                    ? 'border-gold-300 bg-gold-300 text-black shadow-[0_16px_40px_rgba(212,175,106,0.22)]'
                                    : 'border-white/12 bg-black/25 text-white hover:border-gold-300/70 hover:bg-gold-300/10',
                                ].join(' ')}
                              >
                                <span>{option}</span>
                                <CheckCircle2
                                  className={[
                                    'h-5 w-5 shrink-0 transition',
                                    selected ? 'text-black' : 'text-white/25 group-hover:text-gold-300',
                                  ].join(' ')}
                                />
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <input
                          required
                          autoFocus
                          name={currentStep.key}
                          value={form[currentStep.key]}
                          onChange={(event) => updateField(currentStep.key, event.target.value)}
                          className="mt-7 min-h-14 w-full rounded-xl border border-white/12 bg-black/35 px-4 text-base font-semibold text-white outline-none placeholder:text-white/35 focus:border-gold-300 focus:ring-4 focus:ring-gold-300/20"
                          placeholder={currentStep.placeholder}
                          inputMode={currentStep.inputMode}
                          autoComplete={currentStep.autoComplete}
                        />
                      )}

                      {fieldError ? (
                        <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-100">
                          {fieldError}
                        </p>
                      ) : null}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 border-t border-gold-400/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <button
                        type="button"
                        onClick={handlePrev}
                        disabled={stepIndex === 0 || submitState.status === 'submitting'}
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-gold-300 hover:text-gold-200 disabled:cursor-not-allowed disabled:opacity-35"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Kembali
                      </button>

                      {isLastStep ? (
                        <button
                          type="submit"
                          disabled={submitState.status === 'submitting'}
                          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-300 px-7 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {submitState.status === 'submitting' ? 'Mengirim...' : 'Kirim Validasi Slot'}
                          {submitState.status === 'submitting' ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <ArrowRight className="h-4 w-4" />
                          )}
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={handleNext}
                          disabled={submitState.status === 'submitting'}
                          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold-300 px-7 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          Lanjut
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    {submitState.status !== 'idle' ? (
                      <p
                        className={[
                          'mt-5 rounded-xl border px-4 py-3 text-sm font-semibold leading-relaxed',
                          submitState.status === 'error'
                            ? 'border-red-400/30 bg-red-500/10 text-red-100'
                            : submitState.status === 'preview'
                              ? 'border-amber-300/40 bg-amber-300/10 text-amber-100'
                              : 'border-emerald-300/40 bg-emerald-300/10 text-emerald-100',
                        ].join(' ')}
                      >
                        {submitState.message}
                      </p>
                    ) : null}
                  </>
                )}
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export { LeadCapture };
