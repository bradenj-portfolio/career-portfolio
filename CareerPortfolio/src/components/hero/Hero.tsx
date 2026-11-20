import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Card, CardBody, CardHead } from '../ui/Card'
import { TiltCard } from '../ui/TiltCard'

const PROJECTS = [
  {
    title: 'Qwen — AI on my machine',
    type: 'AI / Local LLM',
    description:
      'A local LLM (Qwen) running on my machine as a coding and design partner. This site was designed and built alongside it. It helps with infrastructure as code, UI design, and debugging — a true force multiplier for a solo admin.',
    featured: true,
  },
  {
    title: 'Infrastructure & Identity',
    type: 'Work',
    description:
      'Enterprise hybrid Microsoft 365 / Azure and on-premises environments. Exchange (on-prem, Online, Hybrid), Entra ID / Microsoft Graph, Zero Trust (Sentinel, Defender), DKIM/DMARC, and automation with PowerShell, Terraform, and Azure DevOps.',
  },
  {
    title: 'Home Lab',
    type: 'Personal',
    description:
      'A home server and networking sandbox for learning and experimentation. Self-hosted services, NAS, and a place to test what breaks (and how to fix it) before it hits production.',
  },
  {
    title: 'Dead Exodus',
    type: 'Game Development',
    description:
      'Co-op zombie extraction shooter in Unity 6 (URP), now in playtest on Steam. Networking, extraction flow, combat and dev tools.',
  },
]

export function Hero() {
  return (
    <section className="section" id="hero">
      <div className="container">
        <div className="grid grid-2 items-center">
          <div>
            <motion.h1
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Projects
            </motion.h1>
            <motion.p
              className="text-lg text-soft max-w-lg mb-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Things I build, break, and learn with.
            </motion.p>

            {/* Featured project spotlight */}
            {PROJECTS.map((p) => {
              if (!p.featured) return null
              return (
                <motion.div
                  key="featured"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <TiltCard className="featured-project">
                    <CardHead>
                      <div className="flex flex-wrap justify-between items-start gap-2">
                        <div className="flex items-center gap-2">
                          <span className="chip featured-chip">Featured</span>
                          <span className="chip text-xs">{p.type}</span>
                        </div>
                      </div>
                      <div className="font-bold text-ink">{p.title}</div>
                    </CardHead>
                    <CardBody>
                      <p className="text-soft leading-relaxed">{p.description}</p>
                    </CardBody>
                  </TiltCard>
                </motion.div>
              )
            })}

            {/* Other career projects */}
            <motion.p
              className="text-lg font-bold text-ink mb-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Also in my career
            </motion.p>
            <div className="grid grid-2 gap-6">
              {PROJECTS.map((p, i) => {
                if (p.featured) return null
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="mb-6"
                  >
                    <Card>
                      <CardHead>
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <div className="font-bold">{p.title}</div>
                          <span className="chip text-xs">{p.type}</span>
                        </div>
                      </CardHead>
                      <CardBody>
                        <p className="text-soft leading-relaxed">{p.description}</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              className="flex flex-wrap gap-8 mt-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button variant="primary" size="lg">Contact me</Button>
              <Button variant="outline" size="lg">Download résumé</Button>
            </motion.div>
          </div>
          <div className="self-center">
            <div className="hero-visual">
              <div className="hero-orb" />
              <div className="hero-label">Project Showcase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
