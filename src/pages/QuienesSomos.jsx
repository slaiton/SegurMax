import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, TrendingUp, Heart } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import { TEAM, VALUES, STATS } from '../constants/products'

function Timeline() {
  const milestones = [
    { year: '2009', title: 'Fundación', desc: 'SeguroMax nace en Bogotá con la misión de democratizar los seguros en Colombia.' },
    { year: '2013', title: 'Expansión nacional', desc: 'Llegamos a 10 ciudades principales del país con más de 5,000 clientes.' },
    { year: '2018', title: 'Transformación digital', desc: 'Lanzamos nuestra plataforma 100% digital para cotización en tiempo real.' },
    { year: '2022', title: 'Liderazgo de mercado', desc: 'Superamos los 50,000 clientes activos y lanzamos el seguro empresarial.' },
    { year: '2024', title: 'Innovación continua', desc: 'Integramos IA para personalizar coberturas y detectar fraudes en tiempo real.' },
  ]

  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-30" />
      <div className="space-y-8">
        {milestones.map((m, i) => (
          <AnimatedSection key={m.year} variant="slideLeft" delay={i * 0.1}>
            <div className="flex gap-8 items-start">
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center z-10 relative shadow-lg shadow-blue-500/25">
                  <span className="text-white font-black text-xs">{m.year}</span>
                </div>
              </div>
              <div className="pt-2 pb-4">
                <h4 className="text-white font-bold text-lg mb-1">{m.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

export default function QuienesSomos() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Equipo"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
        </div>
        <div className="orb orb-blue w-[500px] h-[500px] -top-20 right-0 opacity-15" />
        <div className="orb orb-purple w-80 h-80 bottom-0 left-0 opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4"
              >
                Nuestra historia
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl font-black text-white mb-6"
              >
                Más de 15 años<br />
                <span className="gradient-text">protegiendo</span><br />
                familias
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-lg leading-relaxed mb-6"
              >
                Somos una compañía colombiana especializada en soluciones de seguros integrales,
                vigilados por la Superintendencia Financiera de Colombia. Nacimos con la convicción
                de que protegerse no debería ser complicado ni costoso.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-400 leading-relaxed"
              >
                Hoy somos líderes en la distribución digital de seguros, con presencia en las
                34 ciudades principales de Colombia y más de 50,000 clientes satisfechos que
                confían en nosotros para proteger lo más valioso de sus vidas.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Nuestro equipo"
                className="w-full h-[460px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/50 to-transparent" />

              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                {STATS.slice(0, 2).map((s) => (
                  <div key={s.label} className="glass-dark border border-white/10 rounded-2xl p-3 text-center">
                    <p className="text-xl font-black text-white">{s.value}</p>
                    <p className="text-slate-400 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats full */}
      <section className="py-16 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { Icon: Users, value: '50K+', label: 'Clientes protegidos', color: 'text-blue-400' },
              { Icon: Award, value: '15+', label: 'Años de experiencia', color: 'text-purple-400' },
              { Icon: TrendingUp, value: '98%', label: 'Satisfacción', color: 'text-emerald-400' },
              { Icon: Heart, value: '24/7', label: 'Atención continua', color: 'text-rose-400' },
            ].map((s, i) => (
              <AnimatedSection key={s.label} variant="scaleUp" delay={i * 0.1}>
                <div className="glass border border-white/5 rounded-2xl p-6 text-center group hover:border-white/10 transition-colors">
                  <s.Icon className={`w-7 h-7 ${s.color} mx-auto mb-3`} />
                  <p className={`text-3xl font-black text-white mb-1`}>{s.value}</p>
                  <p className="text-slate-400 text-sm">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              Lo que nos guía
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
              Nuestros <span className="gradient-text">valores</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.title} variant="fadeUp" delay={i * 0.1}>
                <div className="glass border border-white/5 rounded-3xl p-6 text-center hover:border-blue-500/20 transition-all duration-300 h-full group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-900/50 relative overflow-hidden">
        <div className="orb orb-purple w-96 h-96 top-0 right-0 opacity-8" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
              Las personas detrás
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
              Nuestro <span className="gradient-text">equipo</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Profesionales apasionados por hacer de los seguros una experiencia simple y confiable.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <AnimatedSection key={member.name} variant="scaleUp" delay={i * 0.1}>
                <div className="card-hover group relative rounded-3xl overflow-hidden border border-white/5 bg-slate-800/30">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold">{member.name}</h3>
                    <p className="text-blue-400 text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-slate-400 text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <AnimatedSection>
                <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                  Nuestra trayectoria
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
                  Una historia de <span className="gradient-text">crecimiento</span>
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Desde una pequeña oficina en el centro de Bogotá hasta convertirnos en la
                  plataforma de seguros digitales más confiable de Colombia.
                </p>
              </AnimatedSection>

              <div className="relative overflow-hidden rounded-3xl h-64">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Oficina"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <p className="text-white font-bold">Sede principal</p>
                  <p className="text-slate-400 text-sm">Bogotá D.C., Colombia</p>
                </div>
              </div>
            </div>

            <div className="lg:pt-16">
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl font-black text-white mb-4">
              Sé parte de nuestra historia
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Únete a las más de 50,000 personas que ya confían en SeguroMax.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Contáctanos hoy
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
