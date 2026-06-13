import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight, X } from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import { PRODUCTS } from '../constants/products'

function ProductModal({ product, onClose }) {
  if (!product) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative max-w-2xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative h-56 overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`} />
            <div className="absolute bottom-5 left-6">
              <span className={`inline-block px-3 py-1 rounded-full ${product.badgeColor} text-white text-xs font-bold mb-2`}>
                {product.badge}
              </span>
              <h2 className="text-3xl font-black text-white">{product.name}</h2>
              <p className="text-slate-300 text-sm">{product.fullName}</p>
            </div>
          </div>

          <div className="p-6">
            <p className="text-slate-300 leading-relaxed mb-6">{product.description}</p>

            <h4 className="text-white font-bold mb-3">¿Qué incluye?</h4>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {product.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  {feat}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div>
                <p className="text-slate-400 text-xs mb-0.5">Precio desde</p>
                <p className="text-2xl font-black" style={{ color: product.accentColor }}>{product.price}</p>
              </div>
              <Link
                to="/contacto"
                className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${product.color} text-white font-bold hover:shadow-lg transition-all duration-300`}
              >
                Cotizar ahora
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Productos() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('todos')

  const FILTERS = [
    { key: 'todos', label: 'Todos' },
    { key: 'personal', label: 'Personal', ids: ['vida', 'salud', 'hogar', 'auto'] },
    { key: 'empresarial', label: 'Empresarial', ids: ['arl', 'empresarial'] },
    { key: 'obligatorio', label: 'Obligatorios', ids: ['arl', 'auto'] },
  ]

  const activeFilter = FILTERS.find(f => f.key === filter)
  const visible = filter === 'todos' ? PRODUCTS : PRODUCTS.filter(p => activeFilter?.ids?.includes(p.id))

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover opacity-8"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
        </div>
        <div className="orb orb-blue w-96 h-96 top-0 right-0 opacity-15" />
        <div className="orb orb-purple w-64 h-64 bottom-0 left-10 opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4"
          >
            Catálogo completo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl font-black text-white mb-4"
          >
            Nuestros <span className="gradient-text">productos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            Encuentra el seguro ideal para cada momento de tu vida y de tu empresa.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  filter === f.key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'glass border border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div
                    className="card-hover group relative rounded-3xl overflow-hidden border border-white/5 bg-slate-800/40 cursor-pointer h-full flex flex-col"
                    onClick={() => setSelected(product)}
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-25 mix-blend-overlay`} />
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full ${product.badgeColor} text-white text-xs font-bold`}>
                        {product.badge}
                      </span>
                      <div className="absolute top-4 right-4 text-2xl">{product.icon}</div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-black text-white mb-1">{product.name}</h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>

                      <div className="space-y-1.5 mb-5">
                        {product.features.slice(0, 3).map((f) => (
                          <div key={f} className="flex items-center gap-2 text-slate-300 text-xs">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                        {product.features.length > 3 && (
                          <p className="text-slate-500 text-xs pl-5">+{product.features.length - 3} más...</p>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-sm font-semibold" style={{ color: product.accentColor }}>
                          {product.price}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-blue-400 font-medium group-hover:gap-2 transition-all">
                          Ver detalles
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </main>
  )
}
