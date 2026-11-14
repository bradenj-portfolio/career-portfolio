import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { SoftOrbit } from './SoftOrbit'

export function Hero() {
  return (
    <section className="section" id="hero">
      <div className="container">
        <div className="grid grid-2 mb-40">
          <div>
            <motion.h1
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Braden Johnson
            </motion.h1>
            <motion.p
              className="text-lg text-soft max-w-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              IT Systems Administrator — hybrid infrastructure, identity &{' '}
              email security, automation.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-8 mt-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button variant="primary" size="lg">Contact me</Button>
              <Button variant="outline" size="lg">Download résumé</Button>
            </motion.div>
          </div>
          <div className="self-center">
            <SoftOrbit />
          </div>
        </div>
      </div>
    </section>
  )
}
