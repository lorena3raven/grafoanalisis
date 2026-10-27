import { useState } from 'react'
import { ArrowRight, PlayCircle, Award, Laptop, Check, Plus, Minus, Video, FileText, FolderOpen, Search, RefreshCw, Instagram, Youtube, MessageCircle, Zap, BadgeCheck, Headphones, ShieldCheck, Star, Quote } from 'lucide-react'

// 👇 IMPORTS DAS IMAGENS
import professorImg from './assets/professor.jpg' 
import professor2Img from './assets/professor-2.jpg' 
import mod1 from './assets/modulos/modulo-1.jpg'
import mod2 from './assets/modulos/modulo-2.jpg'
import mod3 from './assets/modulos/modulo-3.jpg'
import mod4 from './assets/modulos/modulo-4.jpg'
import mod5 from './assets/modulos/modulo-5.jpg'
import certificadoImg from './assets/certificado.jpg' 

const nav = [['Início', '#inicio'], ['Sobre o curso', '#sobre'], ['Conteúdo', '#conteudo'], ['Professor', '#professor'], ['Investimento', '#investimento'], ['FAQ', '#faq']]

const modules = [
  { title: 'Fundamentos da perícia grafotécnica', img: mod1 },
  { title: 'Leis e normas aplicáveis', img: mod2 },
  { title: 'Análise de critérios objetivos e subjetivos', img: mod3 },
  { title: 'Elaboração do laudo pericial', img: mod4 },
  { title: 'Casos práticos e exercícios guiados', img: mod5 },
]

const features = [[Video, 'Aulas objetivas e didáticas'], [FileText, 'Material de apoio completo'], [FolderOpen, 'Exemplos de casos reais'], [Search, 'Suporte durante o período de acesso'], [RefreshCw, 'Atualizações sem custo adicional']] as const

const reviews = [
  ['Juliana S.', 'O curso superou minhas expectativas. A didática é excelente e o suporte é incrível!'],
  ['Rafael M.', 'Conteúdo completo e muito bem explicado. Já estou aplicando no meu dia a dia.'],
  ['Camila R.', 'A estrutura do curso é ótima e me deu muita segurança para começar na área.'],
  ['Thiago L.', 'Recomendo de olhos fechados! É um investimento que realmente vale a pena!'],
  ['Mariana C.', 'A linguagem é muito acessível. Mesmo sem base jurídica, consegui entender tudo perfeitamente.'],
  ['Felipe A.', 'Os exemplos de casos reais fazem toda a diferença. É a melhor parte do curso.'],
  ['Amanda S.', 'O suporte responde rápido e o material em PDF é muito bem organizado.'],
  ['Bruno M.', 'Já atuo na área e mesmo assim o curso agregou bastante. O laudo pericial é impecável.']
]

const perks = [[Zap, 'Acesso imediato após a confirmação do pagamento.'], [BadgeCheck, 'Certificado de conclusão.'], [Headphones, 'Suporte especializado.'], [ShieldCheck, 'Garantia de 7 dias.']] as const
const plans = [
  { name: 'Curso online', title: 'Perícia Grafotécnica', price: '59,90', full: '597,00', items: ['Acesso completo ao curso', 'Material didático em PDF', 'Certificado de conclusão', 'Suporte e atualizações'] },
  { name: 'Curso + Material Extra + Bônus', title: 'Combo Completo', price: '79,90', full: '797,00', items: ['Tudo do plano anterior', 'Apostila complementar', 'Bônus exclusivos', 'Suporte prioritário'], best: true },
]

// 👇 FAQ ATUALIZADO COM PERGUNTAS E RESPOSTAS
const faq = [
  { 
    q: 'O curso tem certificado?', 
    a: 'Sim! Ao concluir todas as aulas e exercícios, você receberá um Certificado de Conclusão válido em todo o território nacional, com a carga horária de 22 horas e o título de Perito Grafotécnico.' 
  },
  { 
    q: 'Qual é a carga horária?', 
    a: 'O curso possui uma carga horária total de 22 horas, distribuídas entre videoaulas objetivas, leitura do material de apoio e resolução de exercícios práticos.' 
  },
  { 
    q: 'Por quanto tempo terei acesso?', 
    a: 'O acesso ao curso é vitalício. Você pode assistir e revisar as aulas quantas vezes quiser, no seu próprio ritmo, sem prazo de validade.' 
  },
  { 
    q: 'Posso assistir pelo celular?', 
    a: 'Com certeza! A plataforma é 100% online e responsiva, o que significa que você pode assistir às aulas pelo computador, tablet ou celular, de onde estiver.' 
  },
  { 
    q: 'O curso é indicado para iniciantes?', 
    a: 'Sim, o curso foi desenhado do zero. Começamos desde os fundamentos da perícia grafotécnica até a elaboração do laudo pericial, garantindo que você tenha toda a base necessária para atuar na área.' 
  }
]

const Cta = ({ children, href = '#investimento', className = '' }: { children: string; href?: string; className?: string }) => (
  <a href={href} className={`btn ${className}`}>{children}<ArrowRight size={16} /></a>
)

const Logo = () => (
  <a href="#inicio" className="flex items-center gap-3">
    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border-2 border-gold text-gold"><Search size={18} /></span>
    <span className="leading-none">
      <span className="block text-base font-bold tracking-wide sm:text-lg">GRAFOANALISIS</span>
      <span className="block text-[7px] tracking-[0.2em] text-gold sm:text-[8px]">CURSO DE PERÍCIA GRAFOTÉCNICA</span>
    </span>
  </a>
)

export default function App() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* HEADER + HERO */}
      <header id="inicio" className="relative bg-ink">
        
        <div className="absolute inset-y-0 right-0 hidden w-full md:block md:w-[75%] lg:w-[60%]" aria-hidden>
          <img 
            src={professorImg} 
            alt="Carlos Alves Jr." 
            className="h-full w-full object-cover object-[center_20%]"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 45%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 45%, black 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-90" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent w-full md:w-[60%]" aria-hidden />

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
          <Logo />
          <ul className="hidden gap-7 text-[11px] font-medium lg:flex">
            {nav.map(([l, h]) => <li key={h}><a href={h} className="transition hover:text-gold">{l}</a></li>)}
          </ul>
          <a href="#investimento" className="btn !px-4 !py-2 !text-[10px] sm:!px-5 sm:!py-2.5 sm:!text-xs">
            <span className="hidden sm:inline">Quero me inscrever</span>
            <span className="sm:hidden">Inscrever</span>
            <ArrowRight size={14} />
          </a>
        </nav>
        
        <div className="wrap relative z-10 px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:pb-28">
          <div className="max-w-xl">
            <p className="eyebrow">Curso online</p>
            <h1 className="mt-4 text-4xl font-medium leading-none sm:text-5xl md:text-6xl">PERÍCIA<br /><span className="font-bold text-gold">GRAFOTÉCNICA</span></h1>
            <p className="mt-6 text-base font-bold uppercase leading-snug sm:text-lg">Aprenda a analisar assinaturas e documentos com segurança e atue na área judicial.</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">Curso completo, com metodologia prática, material didático e certificado de conclusão. Tudo o que você precisa para iniciar na Perícia Grafotécnica.</p>
            <div className="mt-8"><Cta href="#conteudo">Quero conhecer o curso</Cta></div>
            <ul className="mt-10 flex flex-col gap-4 text-[10px] font-semibold uppercase sm:flex-row sm:gap-8">
              {[[PlayCircle, '22 horas', 'de aula'], [Award, 'Certificado', 'de conclusão'], [Laptop, '100% online', 'com acesso imediato']].map(([Icon, a, b]) => {
                const I = Icon as typeof Award
                return <li key={a as string} className="flex items-center gap-3"><I className="text-gold shrink-0" size={30} strokeWidth={1.3} /><span>{a as string}<br /><span className="font-normal text-cream/60">{b as string}</span></span></li>
              })}
            </ul>
          </div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section id="conteudo" className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[320px_1fr]">
          <div>
            <p className="eyebrow">Conteúdo programático</p>
            <h2 className="h2 mt-4">Da base teórica à aplicação prática.</h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">Um conteúdo completo e estruturado para você aprender, na prática, como realizar análises grafotécnicas com segurança e embasamento técnico.</p>
            <a href="#conteudo" className="mt-8 inline-flex items-center gap-3 text-xs font-semibold"><ArrowRight className="text-gold" size={20} />CONHEÇA OS MÓDULOS</a>
          </div>
          
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {modules.map((m, i) => (
              <li 
                key={m.title} 
                className="group relative flex h-64 sm:h-72 flex-col justify-end overflow-hidden border-b-2 border-gold p-4 transition-transform duration-300 hover:-translate-y-2 bg-coal"
              >
                <img 
                  src={m.img} 
                  alt={m.title} 
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-100" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />

                <div className="relative z-10">
                  <span className="font-serif text-3xl text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mt-2 block text-[11px] font-bold uppercase leading-tight">{m.title}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FORMAÇÃO */}
      <section id="sobre" className="section bg-coal relative overflow-hidden">
        
        <div className="pointer-events-none absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-[0.05]" 
            style={{
              backgroundImage: `linear-gradient(to right, #e8934a 1px, transparent 1px), linear-gradient(to bottom, #e8934a 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
            }} 
          />
          <div className="absolute -top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute -bottom-[20%] -left-[10%] h-[300px] w-[300px] rounded-full bg-gold/5 blur-[80px]" />
        </div>

        <div className="wrap grid items-center gap-12 lg:grid-cols-2 relative z-10">
          <div>
            <p className="eyebrow">Uma formação completa</p>
            <h2 className="h2 mt-4">Estude no seu tempo, com acompanhamento e foco na prática.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">Você terá acesso a um ambiente completo, organizado e intuitivo, com aulas em vídeo, material didático, exemplos reais e exercícios práticos.</p>
            <ul className="mt-6 space-y-3 text-xs text-cream/70">
              {features.map(([Icon, t]) => <li key={t} className="flex items-center gap-4"><Icon size={18} className="text-gold shrink-0" />{t}</li>)}
            </ul>
            <div className="mt-8"><Cta>Quero acesso agora</Cta></div>
          </div>
          
          <div className="relative mt-12 lg:mt-0 flex flex-col items-center group">
            <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[80px] transition-all duration-700 group-hover:bg-gold/30 group-hover:blur-[100px]" />

            <p className="absolute -top-10 right-0 z-20 -rotate-6 font-script text-3xl text-gold sm:-top-12 sm:text-4xl pointer-events-none drop-shadow-lg">
              A prática te leva mais longe.
            </p>

            <div className="relative z-10 w-full max-w-md rotate-1 overflow-hidden rounded-md border border-gold/30 shadow-2xl shadow-black/80 transition-all duration-500 hover:rotate-0 hover:scale-[1.03] hover:shadow-gold/20">
              <img 
                src={certificadoImg} 
                alt="Certificado de Conclusão - Perito Grafotécnico" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 pointer-events-none" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-1000 ease-in-out group-hover:translate-x-full group-hover:opacity-100 pointer-events-none mix-blend-overlay" />
            </div>

            <div className="mt-10 text-center">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                <Award size={18} /> Certificado de conclusão incluso
              </p>
              <p className="mt-2 text-[11px] text-cream/60 max-w-xs mx-auto leading-relaxed">
                Ao concluir todas as aulas e exercícios, você recebe o título de Perito Grafotécnico com carga horária de 22 horas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSOR */}
      <section id="professor" className="section">
        <div className="wrap grid items-center gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_240px]">
          <div>
            <p className="eyebrow">Professor</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold uppercase sm:text-4xl">Carlos Alves Jr.</h2>
            <p className="mt-2 text-sm font-medium uppercase">Perito grafotécnico e professor</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              Profissional com experiência na área de Perícia Grafotécnica, atuante em processos judiciais e extrajudiciais e já ajudou diversos alunos a aplicarem seu conhecimento com segurança.
            </p>
            <div className="mt-8"><Cta href="#professor">Conheça mais sobre o professor</Cta></div>
          </div>
          
          <div className="relative group order-first md:order-none">
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
            <span className="font-serif text-3xl text-gold">“</span> Mais do que ensinar técnicas, meu objetivo é preparar você para atuar com segurança e responsabilidade.
            <p className="mt-4 font-script text-3xl text-gold">Carlos Alves Jr.</p>
          </blockquote>
        </div>
      </section>

      {/* DEPOIMENTOS (Grid com Carrossel Horizontal) */}
      <section className="section bg-coal relative border-y border-gold/10 overflow-hidden">
        <div className="wrap relative z-10">
          <div className="mb-10">
            <p className="eyebrow">Depoimentos</p>
            <h2 className="h2 mt-4">O que nossos alunos acham do curso</h2>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-coal to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-coal to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory custom-scrollbar-horizontal">
              {reviews.map(([n, t]) => (
                <article 
                  key={n} 
                  className="flex-none w-[300px] sm:w-[350px] snap-start bg-ink/40 border border-gold/10 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-ink/80 hover:border-gold/40 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="text-gold opacity-40" size={24} />
                    <div className="flex gap-1 text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="font-serif text-lg leading-relaxed text-cream/90 min-h-[120px]">
                    "{t}"
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-px w-6 bg-gold/50" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                      {n}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          <p className="text-[10px] text-cream/40 mt-2 text-center animate-pulse">
            ← Arraste para o lado para ver mais depoimentos →
          </p>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section id="investimento" className="section">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[300px_1fr]">
          <div>
            <p className="eyebrow">Investimentos</p>
            <h2 className="h2 mt-4">Escolha o plano ideal para o seu momento</h2>
            <ul className="mt-8 space-y-5 text-xs text-cream/80">
              {perks.map(([Icon, t]) => <li key={t} className="flex items-center gap-4"><Icon size={34} strokeWidth={1.2} className="shrink-0 text-gold" />{t}</li>)}
            </ul>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {plans.map(p => (
              <article key={p.title} className="relative rounded-lg border-2 border-gold/70 bg-coal p-6">
                {p.best && <span className="absolute -top-3 right-5 rounded-sm bg-gold px-3 py-1 text-[9px] font-bold uppercase text-ink">Mais escolhido</span>}
                <p className="text-[11px] text-cream/60">{p.name}</p>
                <h3 className="text-sm font-bold uppercase">{p.title}</h3>
                <p className="mt-5 text-sm">12x de</p>
                <p className="text-gold"><span className="text-lg font-semibold">R$</span> <span className="text-4xl font-bold text-cream sm:text-5xl">{p.price}</span></p>
                <p className="mt-1 text-[11px] text-cream/60">ou R$ {p.full} à vista</p>
                <ul className="my-5 space-y-2 text-[11px]">{p.items.map(i => <li key={i} className="flex items-center gap-2"><Check size={14} className="text-gold shrink-0" />{i}</li>)}</ul>
                <a href="#" className="btn w-full">Quero comprar agora<ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-coal">
        <div className="wrap grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:pl-24">
            <h2 className="h2">Dúvidas frequentes</h2>
            <p className="mb-6 mt-3 text-sm text-cream/70">Tire aqui as principais dúvidas sobre o curso.</p>
            <Cta href="#faq">Ver todas as dúvidas</Cta>
          </div>
          <ul className="divide-y divide-gold/20 rounded-md border border-gold/20 bg-ink/30 backdrop-blur-sm">
            {faq.map((item, i) => (
              <li key={item.q}>
                <button 
                  onClick={() => setOpen(open === i ? null : i)} 
                  aria-expanded={open === i} 
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-xs font-semibold transition-colors hover:text-gold"
                >
                  {item.q}
                  {open === i ? <Minus size={14} className="shrink-0 ml-2 text-gold" /> : <Plus size={14} className="shrink-0 ml-2" />}
                </button>
                {/* Animação suave de abertura (opcional, mas dá um tcham) */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
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
      <footer className="border-t border-gold/20 px-4 py-10 sm:px-6">
        <div className="wrap">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <Logo />
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] font-semibold uppercase">{nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}</ul>
            <div className="flex gap-4 text-gold"><Instagram size={20} /><Youtube size={20} /><MessageCircle size={20} /></div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gold/20 pt-6 text-[10px] text-cream/60 md:flex-row">
            <p>© 2025 Grafoanalisis. Todos os direitos reservados.</p>
            <p className="flex gap-6"><a className="underline" href="#">Política de Privacidade</a><a className="underline" href="#">Termos de Uso</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}