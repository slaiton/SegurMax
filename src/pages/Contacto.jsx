import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare, ChevronDown } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'

const CONTACT_INFO = [
  {
    Icon: Phone,
    title: 'Llámanos',
    lines: ['+57 300 123 4567', '+57 601 234 5678'],
    color: 'from-blue-600 to-cyan-500',
    iconColor: 'text-blue-400',
  },
  {
    Icon: Mail,
    title: 'Escríbenos',
    lines: ['info@seguromax.co', 'siniestros@seguromax.co'],
    color: 'from-purple-600 to-pink-500',
    iconColor: 'text-purple-400',
  },
  {
    Icon: MapPin,
    title: 'Visítanos',
    lines: ['Calle 72 #10-34 Of. 502', 'Bogotá D.C., Colombia'],
    color: 'from-emerald-600 to-teal-500',
    iconColor: 'text-emerald-400',
  },
  {
    Icon: Clock,
    title: 'Horarios',
    lines: ['Lun - Vie: 8:00am - 6:00pm', 'Emergencias: 24/7'],
    color: 'from-orange-500 to-amber-400',
    iconColor: 'text-orange-400',
  },
]

const FAQS = [
  {
    q: '¿En cuánto tiempo recibo mi póliza?',
    a: 'Una vez aprobada tu solicitud, recibes tu póliza al correo electrónico en menos de 2 horas hábiles. Para SOAT, la expedición es inmediata.',
  },
  {
    q: '¿Qué documentos necesito para contratar un seguro?',
    a: 'Dependiendo del producto, generalmente solo necesitas tu cédula de ciudadanía y datos básicos. Para seguros de vida, puede requerirse un cuestionario médico.',
  },
  {
    q: '¿Cómo reporto un siniestro?',
    a: 'Puedes reportar un siniestro llamando a nuestra línea 24/7, a través de la app móvil, o enviando un correo a siniestros@seguromax.co. Tiempo de respuesta: máximo 48 horas.',
  },
  {
    q: '¿Puedo cancelar mi seguro en cualquier momento?',
    a: 'Sí, puedes cancelar tu póliza en cualquier momento. Se realizará el reintegro proporcional de la prima según el tiempo no transcurrido.',
  },
  {
    q: '¿Tienen cobertura en todo Colombia?',
    a: 'Sí, operamos en las 34 ciudades principales de Colombia y ofrecemos atención virtual para cualquier municipio del país.',
  },
]

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border border-white/5 rounded-2xl overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/3 transition-colors"
      >
        <span className="text-white font-medium text-sm pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contacto() {
  const [openFaq, setOpenFaq] = useState(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nombre: '', email: '', telefono: '', asunto: '', mensaje: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
        </div>
        <div className="orb orb-cyan w-96 h-96 top-0 right-0 opacity-15" />
        <div className="orb orb-blue w-64 h-64 bottom-0 left-0 opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-600/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4"
          >
            Estamos aquí para ti
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl font-black text-white mb-4"
          >
            Hablemos sobre<br />
            <span className="gradient-text">tu protección</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            Nuestros asesores expertos están disponibles para ayudarte a encontrar el seguro perfecto.
          </motion.p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_INFO.map((info, i) => (
              <AnimatedSection key={info.title} variant="fadeUp" delay={i * 0.1}>
                <div className="glass border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all h-full">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <info.Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-slate-400 text-sm">{line}</p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection variant="slideLeft">
              <div className="glass border border-white/5 rounded-3xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Solicita tu cotización</h2>
                    <p className="text-slate-400 text-sm">Respuesta en menos de 24 horas</p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">¡Mensaje enviado!</h3>
                      <p className="text-slate-400">
                        Un asesor se comunicará contigo en las próximas horas.
                      </p>
                      <button
                        onClick={() => { setSent(false); setForm({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' }) }}
                        className="mt-6 px-6 py-2.5 rounded-xl glass border border-white/10 text-slate-300 hover:text-white text-sm transition-colors"
                      >
                        Enviar otro mensaje
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                            Nombre completo *
                          </label>
                          <input
                            type="text"
                            required
                            value={form.nombre}
                            onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))}
                            placeholder="Tu nombre"
                            className="input-modern w-full px-4 py-3 rounded-xl text-white text-sm placeholder-slate-500"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                            Teléfono *
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.telefono}
                            onChange={e => setForm(p => ({ ...p, telefono: e.target.value }))}
                            placeholder="+57 300 000 0000"
                            className="input-modern w-full px-4 py-3 rounded-xl text-white text-sm placeholder-slate-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                          Correo electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                          placeholder="tu@correo.com"
                          className="input-modern w-full px-4 py-3 rounded-xl text-white text-sm placeholder-slate-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                          ¿Qué seguro te interesa?
                        </label>
                        <select
                          value={form.asunto}
                          onChange={e => setForm(p => ({ ...p, asunto: e.target.value }))}
                          className="input-modern w-full px-4 py-3 rounded-xl text-sm text-white"
                        >
                          <option value="" className="bg-slate-800">Selecciona un producto</option>
                          <option value="arl" className="bg-slate-800">ARL</option>
                          <option value="vida" className="bg-slate-800">Seguro de Vida</option>
                          <option value="salud" className="bg-slate-800">Seguro de Salud</option>
                          <option value="hogar" className="bg-slate-800">Seguro de Hogar</option>
                          <option value="soat" className="bg-slate-800">SOAT</option>
                          <option value="empresarial" className="bg-slate-800">Seguro Empresarial</option>
                          <option value="otro" className="bg-slate-800">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wider">
                          Mensaje
                        </label>
                        <textarea
                          rows={4}
                          value={form.mensaje}
                          onChange={e => setForm(p => ({ ...p, mensaje: e.target.value }))}
                          placeholder="Cuéntanos más sobre lo que necesitas..."
                          className="input-modern w-full px-4 py-3 rounded-xl text-white text-sm placeholder-slate-500 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Solicitar cotización gratis
                          </>
                        )}
                      </button>

                      <p className="text-center text-slate-500 text-xs">
                        Al enviar este formulario aceptas nuestra política de privacidad y tratamiento de datos.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>

            {/* Right side: image + WhatsApp CTA */}
            <AnimatedSection variant="slideRight">
              <div className="space-y-6 h-full flex flex-col">
                <div className="relative rounded-3xl overflow-hidden flex-1 min-h-56">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Atención al cliente"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-lg mb-1">Atención personalizada</p>
                    <p className="text-slate-300 text-sm">Tu asesor dedicado, siempre disponible</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-all">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-bold">Chat por WhatsApp</p>
                    <p className="text-slate-400 text-sm">Respuesta inmediata · 24/7</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-emerald-500/20 transition-all">
                      →
                    </div>
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              Preguntas frecuentes
            </span>
            <h2 className="font-display text-4xl font-black text-white">
              Resolvemos tus <span className="gradient-text">dudas</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
