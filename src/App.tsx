import { useState } from 'react'
import {
  ArrowRight,
  PlayCircle,
  Award,
  Laptop,
  Check,
  Plus,
  Minus,
  Video,
  FileText,
  FolderOpen,
  RefreshCw,
  Zap,
  BadgeCheck,
  ShieldCheck,
  Star,
  Quote,
} from 'lucide-react'

import professorImg from './assets/professor.jpg'
import professor2Img from './assets/professor-2.jpg'
import mod1 from './assets/modulos/modulo-1.jpg'
import mod2 from './assets/modulos/modulo-2.jpg'
import mod3 from './assets/modulos/modulo-3.jpg'
import mod4 from './assets/modulos/modulo-4.jpg'
import mod5 from './assets/modulos/modulo-5.jpg'
import fundoInvestimento from './assets/fundo-investimento.png'
import certificadoImg from './assets/certificado.jpg'

const nav = [
  ['Início', '#inicio'],
  ['Conteúdo', '#conteudo'],
  ['Sobre o curso', '#sobre'],
  ['Professor', '#professor'],
  ['Investimento', '#investimento'],
  ['Dúvidas', '#faq'],
] as const

const modules = [
  { title: 'Fundamentos da perícia grafotécnica', img: mod1 },
  { title: 'Leis e normas aplicáveis', img: mod2 },
  { title: 'Critérios objetivos e subjetivos', img: mod3 },
  { title: 'Elaboração do laudo pericial', img: mod4 },
  { title: 'Casos práticos e exercícios guiados', img: mod5 },
]

const features = [
  [Video, 'Aulas objetivas e didáticas'],
  [FileText, 'Material de apoio completo'],
  [FolderOpen, 'Exemplos de casos reais'],
  [RefreshCw, 'Atualizações sem custo adicional'],
] as const

const reviews = [
  [
    'Juliana S.',
    'O curso superou minhas expectativas. A didática é excelente!',
  ],
  [
    'Rafael M.',
    'Conteúdo completo e muito bem explicado. Já estou aplicando no meu dia a dia.',
  ],
  [
    'Camila R.',
    'A estrutura do curso é ótima e me deu muita segurança para começar na área.',
  ],
  [
    'Thiago L.',
    'Recomendo de olhos fechados! É um investimento que realmente vale a pena!',
  ],
  [
    'Mariana C.',
    'A linguagem é muito acessível. Mesmo sem base jurídica, consegui entender tudo perfeitamente.',
  ],
  [
    'Felipe A.',
    'Os exemplos de casos reais fazem toda a diferença. É a melhor parte do curso.',
  ],
  [
    'Bruno M.',
    'Já atuo na área e mesmo assim o curso agregou bastante. O laudo pericial é impecável.',
  ],
]

const perks = [
  [Zap, 'Acesso imediato após a confirmação do pagamento.'],
  [BadgeCheck, 'Certificado de conclusão.'],
  [ShieldCheck, 'Garantia de 7 dias.'],
] as const

const faq = [
  {
    q: 'O curso tem certificado?',
    a: 'Sim! Ao concluir todas as aulas e exercícios, você receberá um Certificado de Conclusão válido em todo o território nacional, com a carga horária de 22 horas e o título de Perito Grafotécnico.',
  },
  {
    q: 'Qual é a carga horária?',
    a: 'O curso possui uma carga horária total de 22 horas, distribuídas entre videoaulas objetivas, leitura do material de apoio e resolução de exercícios práticos.',
  },
  {
    q: 'Por quanto tempo terei acesso?',
    a: 'O acesso ao curso é vitalício. Você pode assistir e revisar as aulas quantas vezes quiser, no seu próprio ritmo, sem prazo de validade.',
  },
  {
    q: 'Posso assistir pelo celular?',
    a: 'Com certeza! A plataforma é 100% online e responsiva, o que significa que você pode assistir às aulas pelo computador, tablet ou celular, de onde estiver.',
  },
  {
    q: 'O curso é indicado para iniciantes?',
    a: 'Sim, o curso foi desenhado do zero. Começamos desde os fundamentos da perícia grafotécnica até a elaboração do laudo pericial, garantindo que você tenha toda a base necessária para atuar na área.',
  },
]

const heroBenefits = [
  [PlayCircle, '22 horas', 'de aula'],
  [Award, 'Certificado', 'de conclusão'],
  [Laptop, '100% online', 'com acesso imediato'],
] as const

const Cta = ({
  children,
  href = '#investimento',
  className = '',
}: {
  children: string
  href?: string
  className?: string
}) => (
  <a href={href} className={`btn ${className}`}>
    {children}
    <ArrowRight size={16} />
  </a>
)

const Logo = () => (
  <a href="#inicio" className="flex items-center gap-3">
    <span className="flex shrink-0 items-center justify-center">
      <svg
        width="44"
        height="48"
        viewBox="0 0 44 48"
        className="shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="logo-g-degrade"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#ffe5c2" />
            <stop offset="40%" stopColor="#f5c18a" />
            <stop offset="100%" stopColor="#e8934a" />
          </linearGradient>
        </defs>

        <path
          d="M22 2 L41 13 L41 35 L22 46 L3 35 L3 13 Z"
          fill="none"
          stroke="url(#logo-g-degrade)"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        <text
          x="22"
          y="25"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="url(#logo-g-degrade)"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '27px',
            fontWeight: 600,
          }}
        >
          G
        </text>
      </svg>
    </span>

    <span className="leading-none">
      <span
        className="block text-lg sm:text-xl"
        style={{
          fontFamily: "'Cinzel', serif",
          fontWeight: 600,
          letterSpacing: '0.015em',
          color: '#f4eadb',
        }}
      >
        GRAFOANALISIS
      </span>

      <span
        className="mt-1 block text-[7px] sm:text-[8px]"
        style={{
          fontWeight: 500,
          letterSpacing: '0.15em',
          lineHeight: 1.4,
          backgroundImage:
            'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        CURSO DE PERÍCIA GRAFOTÉCNICA
      </span>
    </span>
  </a>
)

export default function App() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* HEADER + HERO */}
      <header id="inicio" className="relative bg-ink">
        <div
          className="absolute inset-y-0 right-0 hidden w-full md:block md:w-[75%] lg:w-[60%]"
          aria-hidden
        >
          <img
            src={professorImg}
            alt="Carlos Alves Jr."
            className="h-full w-full object-cover object-[center_20%]"
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0%, black 45%, black 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0%, black 45%, black 100%)',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-90" />
        </div>

        <div
          className="absolute inset-0 w-full bg-gradient-to-r from-ink via-ink/80 to-transparent md:w-[60%]"
          aria-hidden
        />

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
          <Logo />

          <ul className="hidden gap-7 text-[11px] font-medium lg:flex">
            {nav.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#investimento"
            className="btn !px-4 !py-2 !text-[10px] sm:!px-5 sm:!py-2.5 sm:!text-xs"
          >
            <span className="hidden sm:inline">Quero me inscrever</span>
            <span className="sm:hidden">Inscrever</span>
            <ArrowRight size={14} />
          </a>
        </nav>

        <div className="wrap relative z-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:pb-28">
          <div className="max-w-xl">
            {/* FOTO NO CELULAR */}
            <div className="relative -mx-4 -mt-6 -mb-16 h-[320px] overflow-hidden sm:-mx-6 sm:h-[360px] md:hidden">
              <img
                src={professorImg}
                alt="Carlos Alves Jr., professor do curso"
                className="h-full w-full object-cover"
                style={{
                  objectPosition: 'center 20%',
                }}
              />

              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(8,7,6,0.15) 0%, transparent 45%, #080706 100%)',
                }}
              />
            </div>

            <p
              className="eyebrow relative z-10"
              style={{
                display: 'inline-block',
                backgroundImage:
                  'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Curso online
            </p>

            <h1
              className="relative z-10 mt-4"
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                fontSize: 'clamp(30px, 4.5vw, 60px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
              }}
            >
              <span className="text-cream">PERÍCIA</span>

              <br />

              <span
                style={{
                  display: 'inline-block',
                  paddingRight: '0.1em',
                  paddingBottom: '0.08em',
                  backgroundImage:
                    'linear-gradient(135deg, #ffe5c2 0%, #f5c18a 40%, #e8934a 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                GRAFOTÉCNICA
              </span>
            </h1>

            <p className="mt-2 text-base font-bold uppercase leading-snug sm:text-lg">
              Aprenda a analisar assinaturas e documentos com segurança e atue
              na área judicial.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Curso completo, com metodologia prática, material didático e
              certificado de conclusão. Tudo o que você precisa para iniciar na
              Perícia Grafotécnica.
            </p>

            <div className="mt-8">
              <Cta href="#conteudo">Quero conhecer o curso</Cta>
            </div>

            <ul className="mt-10 grid grid-cols-3 gap-2 text-[9px] font-semibold uppercase sm:flex sm:flex-row sm:gap-8 sm:text-[10px]">
              {heroBenefits.map(([Icon, title, description]) => (
                <li key={title} className="flex items-center gap-3">
                  <Icon
                    className="shrink-0 text-gold"
                    size={30}
                    strokeWidth={1.3}
                  />

                  <span>
                    {title}
                    <br />
                    <span className="font-normal text-cream/60">
                      {description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section id="conteudo" className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[320px_1fr]">
          <div>
            <h2
              className="uppercase text-cream"
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                fontSize: 'clamp(28px, 2.8vw, 42px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
              }}
            >
              Da base teórica
              <br />

              <span
                style={{
                  display: 'inline-block',
                  paddingRight: '0.1em',
                  paddingBottom: '0.08em',
                  backgroundImage:
                    'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                à aplicação
                <br />
                prática.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Um conteúdo completo e estruturado para você aprender, na prática,
              como realizar análises grafotécnicas com segurança e embasamento
              técnico.
            </p>

            <a
              href="#conteudo"
              className="mt-8 inline-flex items-center gap-3 text-xs font-semibold"
            >
              <ArrowRight className="text-gold" size={20} />
              CONHEÇA OS MÓDULOS
            </a>
          </div>

          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {modules.map((module, index) => (
              <li
                key={module.title}
                className="group relative flex h-64 flex-col justify-end overflow-hidden border-b-2 border-gold bg-coal p-4 transition-transform duration-300 hover:-translate-y-2 sm:h-72"
              >
                <img
                  src={module.img}
                  alt={module.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-100 ${
                    index === 1 || index === 4
                      ? 'opacity-100 brightness-110'
                      : 'opacity-60'
                  }`}
                />

                <div
                  className={`absolute inset-0 ${
                    index === 1 || index === 4
                      ? 'bg-gradient-to-t from-ink via-ink/30 to-transparent'
                      : 'bg-gradient-to-t from-ink via-ink/80 to-transparent'
                  }`}
                />

                <div className="relative z-10">
                  <span
                    style={{
                      display: 'inline-block',
                      fontFamily: "'Cinzel', serif",
                      fontSize: '28px',
                      fontWeight: 500,
                      lineHeight: 1.3,
                      paddingRight: '0.1em',
                      backgroundImage:
                        'linear-gradient(135deg, #ffe5c2 0%, #f5c18a 40%, #e8934a 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="mt-2 block text-[11px] font-bold uppercase leading-tight">
                    {module.title}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section
        id="sobre"
        className="section relative overflow-hidden bg-coal"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #e8934a 1px, transparent 1px), linear-gradient(to bottom, #e8934a 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              maskImage:
                'radial-gradient(ellipse at center, black 20%, transparent 80%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at center, black 20%, transparent 80%)',
            }}
          />

          <div className="absolute -right-[10%] -top-[20%] h-[400px] w-[400px] rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute -bottom-[20%] -left-[10%] h-[300px] w-[300px] rounded-full bg-gold/5 blur-[80px]" />
        </div>

        <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2
              className="uppercase text-cream"
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                fontSize: 'clamp(25px, 2.5vw, 38px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.25,
              }}
            >
              Estude no seu tempo,
              <br />
              com aulas em vídeo
              <br />

              <span
                style={{
                  display: 'inline-block',
                  paddingRight: '0.1em',
                  paddingBottom: '0.08em',
                  backgroundImage:
                    'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                e foco na prática.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
              Você terá acesso a um ambiente completo, organizado e intuitivo,
              com aulas em vídeo, material didático, exemplos reais e exercícios
              práticos.
            </p>

            <ul className="mt-6 space-y-3 text-xs text-cream/70">
              {features.map(([Icon, text], index) => (
                <li key={text} className="flex items-center gap-4">
                  <Icon
                    size={18}
                    className="shrink-0"
                    style={{
                      stroke: `url(#formacao-icone-${index})`,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id={`formacao-icone-${index}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#ffe5c2" />
                        <stop offset="40%" stopColor="#f5c18a" />
                        <stop offset="100%" stopColor="#e8934a" />
                      </linearGradient>
                    </defs>
                  </Icon>

                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Cta>Quero acesso agora</Cta>
            </div>
          </div>

          <div className="group relative mt-12 flex flex-col items-center lg:mt-0">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[80px] transition-all duration-700 group-hover:bg-gold/30 group-hover:blur-[100px]" />

            <p
              className="pointer-events-none absolute -top-10 right-0 z-20 -rotate-6 font-script text-3xl drop-shadow-lg sm:-top-12 sm:text-4xl"
              style={{
                padding: '0.1em 0.25em',
                backgroundImage:
                  'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              A prática te leva mais longe.
            </p>

            <div className="relative z-10 w-full max-w-md rotate-1 overflow-hidden rounded-md border border-gold/30 shadow-2xl shadow-black/80 transition-all duration-500 hover:rotate-0 hover:scale-[1.03] hover:shadow-gold/20">
              <img
                src={certificadoImg}
                alt="Certificado de Conclusão - Perito Grafotécnico"
                className="h-auto w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20" />

              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 mix-blend-overlay transition-all duration-1000 ease-in-out group-hover:translate-x-full group-hover:opacity-100" />
            </div>

            <div className="mt-10 text-center">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                <Award size={18} />

                <span
                  className="text-xs font-bold uppercase"
                  style={{
                    display: 'inline-block',
                    backgroundImage:
                      'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Certificado de conclusão incluso
                </span>
              </p>

              <p className="mx-auto mt-2 max-w-xs text-[11px] leading-relaxed text-cream/60">
                Ao concluir todas as aulas e exercícios, você recebe o título
                de Perito Grafotécnico com carga horária de 22 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSOR */}
      <section id="professor" className="section">
        <div className="wrap grid items-center gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_240px]">
          <div>
            <p
              className="eyebrow relative z-10"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            />

            <h2
              className="mt-4 uppercase"
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                fontSize: 'clamp(28px, 3.2vw, 46px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
                paddingBottom: '0.08em',
                backgroundImage:
                  'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Carlos Alves Jr.
            </h2>

            <p className="mt-2 text-sm font-medium uppercase">
              Perito grafotécnico e professor
            </p>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              Profissional com experiência na área de Perícia Grafotécnica,
              atuante em processos judiciais e extrajudiciais e já ajudou
              diversos alunos a aplicarem seu conhecimento com segurança.
            </p>

            <div className="mt-8">
              <Cta href="#professor">
                Conheça mais sobre o professor
              </Cta>
            </div>
          </div>

          <div className="group relative order-first md:order-none">
            <div className="absolute inset-0 -z-10 rounded-lg bg-gold/10 blur-xl transition-all duration-500 group-hover:bg-gold/20" />

            <div className="relative overflow-hidden rounded-lg border border-gold/20 shadow-2xl shadow-black/50">
              <img
                src={professor2Img}
                alt="Carlos Alves Jr."
                className="h-80 w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          <blockquote className="text-sm leading-relaxed text-cream/80 md:col-span-2 lg:col-span-1">
            <span className="font-serif text-3xl text-gold">“</span>
            {' '}
            Mais do que ensinar técnicas, meu objetivo é preparar você para
            atuar com segurança e responsabilidade.

            <p
              className="font-script"
              style={{
                display: 'inline-block',
                fontSize: 'clamp(26px, 2.3vw, 34px)',
                lineHeight: 1.5,
                padding: '0.1em 0.3em 0.15em 0',
                backgroundImage:
                  'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Carlos Alves Jr.
            </p>
          </blockquote>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section relative overflow-hidden border-y border-gold/10 bg-coal">
        <div className="wrap relative z-10">
          <div className="mb-10">
            <h2
              className="uppercase text-cream"
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                fontSize: 'clamp(28px, 3.5vw, 50px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
              }}
            >
              O que nossos alunos
              <br />

              <span
                style={{
                  display: 'inline-block',
                  backgroundImage:
                    'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                acham do curso
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-coal to-transparent" />

            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-coal to-transparent" />

            <div className="custom-scrollbar-horizontal flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8">
              {reviews.map(([name, text]) => (
                <article
                  key={name}
                  className="w-[300px] flex-none snap-start rounded-lg border border-gold/10 bg-ink/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-ink/80 sm:w-[350px]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <Quote className="text-gold opacity-40" size={24} />

                    <div className="flex gap-1 text-gold">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={index}
                          size={12}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote
                    className="min-h-[120px] text-sm leading-relaxed text-cream/90"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontWeight: 400,
                    }}
                  >
                    "{text}"
                  </blockquote>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-6 bg-gold/50" />

                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      {name}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-2 animate-pulse text-center text-[10px] text-cream/40">
            ← Arraste para o lado para ver mais depoimentos →
          </p>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section
        id="investimento"
        className="section relative isolate overflow-hidden bg-ink"
      >
        {/* FUNDO */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <img
            src={fundoInvestimento}
            alt=""
            className="h-full w-full object-cover object-center"
          />

          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to bottom,
                  #080706 0%,
                  rgba(8,7,6,0.95) 8%,
                  rgba(8,7,6,0.55) 25%,
                  transparent 50%
                ),
                linear-gradient(
                  90deg,
                  rgba(8,7,6,0.96) 0%,
                  rgba(8,7,6,0.85) 45%,
                  rgba(8,7,6,0.70) 100%
                )
              `,
            }}
          />
        </div>

        <div className="wrap relative z-10 grid items-center gap-12 lg:grid-cols-2">
          {/* LATERAL */}
          <div className="min-w-0">
            <div className="flex items-center gap-4" />

            <h2
              className="mt-5 uppercase text-cream"
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                fontSize: 'clamp(30px, 3.5vw, 50px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
              }}
            >
              Sua formação
              <br />
              completa em
              <br />

              <span
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                um só lugar.
              </span>
            </h2>

            <ul className="mt-9 space-y-5 text-sm text-cream/90">
              {perks.map(([Icon, text], index) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center">
                    <Icon
                      size={29}
                      strokeWidth={1.3}
                      stroke={`url(#perk-gradient-${index})`}
                    >
                      <defs>
                        <linearGradient
                          id={`perk-gradient-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#ffe5c2" />
                          <stop offset="40%" stopColor="#f5c18a" />
                          <stop offset="100%" stopColor="#e8934a" />
                        </linearGradient>
                      </defs>
                    </Icon>
                  </span>

                  <span className="max-w-xs leading-relaxed">
                    {text === 'Acesso imediato após a confirmação do pagamento.' ? (
                      <>
                        Acesso imediato após
                        <br />
                        a confirmação do pagamento.
                      </>
                    ) : (
                      text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CARD */}
          <article
            className="relative w-full min-w-0 max-w-md justify-self-center rounded-lg border border-gold/80 p-6 sm:p-8"
            style={{
              background:
                'linear-gradient(145deg, rgba(15,15,14,0.97), rgba(7,8,8,0.98))',
              boxShadow:
                '0 0 0 3px rgba(232,147,74,0.07), 0 20px 60px rgba(0,0,0,0.45)',
            }}
          >
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-4 py-1 text-[9px] font-bold uppercase text-ink"
              style={{
                background: 'linear-gradient(135deg, #f5c18a, #e8934a)',
              }}
            >
              Formação completa
            </span>

            <h3
              className="mt-2 text-xl uppercase sm:text-2xl"
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                lineHeight: 1.3,
                backgroundImage:
                  'linear-gradient(135deg, #fff0d9 0%, #f5c18a 40%, #e8934a 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PERÍCIA GRAFOTÉCNICA
            </h3>

            <p className="mt-2 text-xs text-cream/65">
              Curso + Material Extra + Bônus
            </p>

            {/* PREÇO */}
            <div className="mt-7">
              <div
                className="whitespace-nowrap"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                <span
                  className="relative inline-block mr-2"
                  style={{ fontSize: '32px' }}
                >
                  <span
                    className="absolute left-0 whitespace-nowrap text-sm font-medium text-cream/80"
                    style={{
                      bottom: 'calc(100% + 8px)',
                      fontFamily: "'Montserrat', sans-serif",
                      lineHeight: 1,
                    }}
                  >
                    10x de
                  </span>

                  <span
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, #fff0d9, #f5c18a 35%, #e8934a 80%, #c97532)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    R$
                  </span>
                </span>

                <span
                  style={{
                    fontSize: 'clamp(76px, 6.5vw, 100px)',
                    display: 'inline-block',
                    paddingRight: '0.12em',
                    letterSpacing: '-0.035em',
                    backgroundImage:
                      'linear-gradient(135deg, #fff0d9, #f5c18a 35%, #e8934a 80%, #c97532)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  22<span className="text-3xl sm:text-4xl">,00</span>
                </span>
              </div>

              <p className="mt-4 text-xs text-cream/60">
                ou R$ 220,00 à vista
              </p>
            </div>

            {/* BENEFÍCIOS */}
            <ul className="my-7 space-y-3 text-xs text-cream/85">
              {[
                'Acesso completo ao curso',
                'Material didático em PDF',
                'Certificado de conclusão',
                'Atualizações do conteúdo',
                'Apostila complementar',
                'Bônus exclusivos',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0 text-gold"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* COMPRA */}
            <a
              href="https://go.hotmart.com/k65844449l?dp=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full !gap-3 !px-4 !text-[11px]"
              style={{
                background: 'linear-gradient(135deg, #f5c18a, #e8934a)',
                border: '1px solid rgba(255,220,177,0.55)',
                boxShadow: '0 4px 18px rgba(232,147,74,0.15)',
              }}
            >
              Quero comprar agora
              <ArrowRight size={16} />
            </a>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-coal">
        <div className="wrap grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2
              className="uppercase text-cream"
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 500,
                fontSize: 'clamp(30px, 3.5vw, 50px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.2,
              }}
            >
              Dúvidas
              <br />

              <span
                style={{
                  display: 'inline-block',
                  paddingRight: '0.08em',
                  paddingBottom: '0.08em',
                  backgroundImage:
                    'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                frequentes
              </span>
            </h2>

            <p className="mb-6 mt-3 text-sm text-cream/70">
              Tire aqui as principais dúvidas sobre o curso.
            </p>

            <Cta href="#faq">Ver todas as dúvidas</Cta>
          </div>

          <ul className="divide-y divide-gold/20 rounded-md border border-gold/20 bg-ink/30 backdrop-blur-sm">
            {faq.map((item, index) => (
              <li key={item.q}>
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  aria-expanded={open === index}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-xs font-semibold transition-colors hover:text-gold"
                >
                  {item.q}

                  {open === index ? (
                    <Minus
                      size={14}
                      className="ml-2 shrink-0 text-gold"
                    />
                  ) : (
                    <Plus size={14} className="ml-2 shrink-0" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    open === index
                      ? 'max-h-40 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-4 text-xs leading-relaxed text-cream/70">
                    {item.a}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gold/20 bg-ink">
        <div className="wrap px-4 py-10 sm:px-6 sm:py-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <Logo />

              <p className="mt-4 max-w-xs text-xs leading-relaxed text-cream/60">
                Conhecimento e prática para dar o próximo passo
                na Perícia Grafotécnica.
              </p>
            </div>

            <nav aria-label="Navegação do rodapé">
              <ul className="flex flex-wrap gap-x-6 gap-y-4 text-xs font-medium text-cream/75">
                {nav.map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="transition-colors hover:text-gold"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="#inicio"
              className="inline-flex shrink-0 items-center gap-2 rounded-md border border-gold/30 px-4 py-3 text-xs transition-colors hover:bg-white/5"
            >
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #ffe5c2, #f5c18a 40%, #e8934a)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Voltar ao topo
              </span>

              <ArrowRight
                size={15}
                className="-rotate-90 text-gold"
              />
            </a>
          </div>

          <div className="mt-9 flex flex-col gap-3 border-t border-gold/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] leading-relaxed text-cream/50">
              © {new Date().getFullYear()} Grafoanalisis.
              Todos os direitos reservados.
            </p>

            <p className="text-[11px] text-cream/50">
              Curso online de Perícia Grafotécnica
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}