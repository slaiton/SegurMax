import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, ChevronDown } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import { PRODUCTS, STATS } from '../constants/products'

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
          alt="Hero"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-blue-950/80" />
      </div>

      {/* Orbs */}
      <div className="orb orb-blue w-[600px] h-[600px] top-0 -right-40 opacity-20" />
      <div className="orb orb-purple w-[400px] h-[400px] bottom-20 -left-20 opacity-15" />
      <div className="orb orb-cyan w-[300px] h-[300px] top-40 left-1/2 opacity-10" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Más de 50,000 familias protegidas
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
            >
              Tu seguridad,{' '}
              <span className="gradient-text">nuestra</span>{' '}
              <br className="hidden lg:block" />
              <span className="gradient-text-warm">prioridad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Protege lo que más importa con seguros diseñados para el colombiano moderno.
              ARL, vida, salud, hogar y más — todo en un solo lugar, con la mejor cobertura al mejor precio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                to="/productos"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                Ver todos los seguros
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contacto"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                Cotizar gratis
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {['Vigilados Superfinanciera', 'Pago 100% seguro', 'Atención 24/7'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — floating cards */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=700&q=80"
                alt="Familia protegida"
                className="w-full h-[520px] object-cover rounded-3xl shadow-2xl shadow-black/50"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-16 glass border border-white/10 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">🛡️</div>
                  <div>
                    <p className="text-white font-bold text-lg">50K+</p>
                    <p className="text-slate-400 text-xs">Asegurados</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 bottom-24 glass border border-white/10 rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-xl">⭐</div>
                  <div>
                    <p className="text-white font-bold text-lg">98%</p>
                    <p className="text-slate-400 text-xs">Satisfacción</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [-3, 7, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-6 top-12 glass border border-white/10 rounded-2xl p-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-white text-sm font-medium">Cotización aprobada</p>
                </div>
                <p className="text-slate-400 text-xs mt-1">hace 2 minutos</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="glass border border-white/5 rounded-2xl p-5 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1.2 }, y: { duration: 2, repeat: Infinity } }}
          className="flex justify-center mt-12"
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Descubre más</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 3)
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="orb orb-blue w-96 h-96 top-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            Nuestros productos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
            Seguros para cada{' '}
            <span className="gradient-text">etapa de tu vida</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Desde protección laboral hasta el cuidado de tu familia — tenemos la solución perfecta para ti.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((product, i) => (
            <AnimatedSection key={product.id} variant="fadeUp" delay={i * 0.1}>
              <div className="card-hover group relative rounded-3xl overflow-hidden border border-white/5 bg-slate-800/50 h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-30 mix-blend-overlay`} />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full ${product.badgeColor} text-white text-xs font-bold`}>
                    {product.badge}
                  </span>
                  <div className="absolute bottom-4 left-4 text-3xl">{product.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold text-sm">{product.price}</span>
                    <Link
                      to="/productos"
                      className="flex items-center gap-1 text-sm text-slate-300 hover:text-white font-medium group/link transition-colors"
                    >
                      Ver detalles
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/productos"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-blue-500/30 text-blue-400 font-semibold hover:bg-blue-600/10 hover:border-blue-400 transition-all duration-300"
          >
            Ver todos los productos ({PRODUCTS.length})
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const benefits = [
    {
      icon: '⚡',
      title: 'Cotización en 2 minutos',
      desc: 'Proceso 100% digital. Sin papeleos, sin visitas. Obtén tu póliza desde el celular.',
      img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80',
    },
    {
      icon: '💰',
      title: 'Los mejores precios',
      desc: 'Comparamos entre las principales aseguradoras del país para darte la mejor tarifa.',
      img: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&q=80',
    },
    {
      icon: '🤝',
      title: 'Asesoría personalizada',
      desc: 'Un experto disponible para ti 24/7 vía WhatsApp, llamada o videollamada.',
      img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
    },
  ]

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="orb orb-purple w-80 h-80 bottom-0 left-0 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
            La experiencia que <span className="gradient-text">mereces</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} variant="scaleUp" delay={i * 0.15}>
              <div className="group relative rounded-3xl overflow-hidden bg-slate-800/30 border border-white/5 hover:border-white/10 transition-all duration-500 h-full">
                <div className="relative h-56 overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/30" />
                  <div className="absolute bottom-4 left-5 text-4xl">{b.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    {
      name: 'Alejandra Moreno',
      role: 'Emprendedora, Medellín',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&q=80',
      text: 'Nunca pensé que contratar un seguro pudiera ser tan fácil. En menos de 5 minutos tenía mi ARL y seguro de vida listos. ¡Increíble!',
      rating: 5,
    },
    {
      name: 'Roberto Gómez',
      role: 'Constructor, Bogotá',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      text: 'Cuando tuve un accidente laboral, el equipo de SeguroMax me atendió de inmediato. La reclamación fue aprobada en 48 horas. Muy recomendados.',
      rating: 5,
    },
    {
      name: 'Sandra Pérez',
      role: 'Gerente Financiera, Cali',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      text: 'Los seguros empresariales son excelentes. Nos ahorramos un 30% respecto a nuestra aseguradora anterior con mejor cobertura.',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/95" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-600/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white">
            Lo que dicen nuestros <span className="gradient-text-warm">clientes</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <AnimatedSection key={r.name} variant="fadeUp" delay={i * 0.12}>
              <div className="glass border border-white/5 rounded-3xl p-6 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-white font-semibold text-sm">{r.name}</p>
                    <p className="text-slate-400 text-xs">{r.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="orb orb-blue w-[500px] h-[500px] -top-32 left-1/4 opacity-20" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <AnimatedSection>
          <div className="glass border border-white/5 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5" />
            <div className="relative">
              <div className="text-5xl mb-5">🛡️</div>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
                ¿Listo para proteger<br />
                <span className="gradient-text">lo que más amas?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Únete a más de 50,000 colombianos que confían en SeguroMax. Cotización gratuita y sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/productos"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  Explorar seguros
                </Link>
                <Link
                  to="/contacto"
                  className="px-8 py-4 rounded-2xl glass border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                >
                  Hablar con un asesor
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </main>
  )
}
