import { motion } from 'framer-motion'
import { CardBody, CardHead } from '../ui/Card'
import { TiltCard } from '../ui/TiltCard'

const SYSTEMS = [
  {
    title: 'Netplay & Steam',
    desc:
      'Co-op zombie extraction shooter. Mirror networking over Steamworks; Dead Exodus is in playtest on Steam (App 5367660).',
  },
  {
    title: 'Unity 6 (URP)',
    desc:
      'Built in Unity 6 with the Universal Render Pipeline — custom lighting, post-processing and rendering systems.',
  },
  {
    title: 'Extraction & strike flow',
    desc:
      'Drop-in co-op extraction: push with your team to objectives, exfil with loot. Solo, host and join flows.',
  },
  {
    title: 'Combat & systems',
    desc:
      'Tactical gunplay, parry, lock-on, and weapon systems built from the ground up in-house.',
  },
  {
    title: 'Dev tools & pipelines',
    desc:
      'Offline rules tests, Blender asset pipelines, reusable prefab kits and build automation tools.',
  },
]

export function DeadExodus() {
  return (
    <section className="section section-dark" id="deadexodus">
      <div className="container">
        <div className="de-head">
          <div className="de-brand">
            <span className="de-badge">In Playtest</span>
            <motion.h2
              className="de-title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Dead Exodus
            </motion.h2>
            <p className="de-sub">
              Co-op zombie extraction shooter in Unity 6 (URP). Drop in with your team, push to
              objectives and exfil with loot. Mirror over Steam networking.
            </p>
          </div>
          <div className="de-actions">
            <a
              href="https://store.steampowered.com/app/5367660/Dead_Exodus/"
              target="_blank"
              rel="noopener"
              className="de-steam-link"
            >
              View on Steam <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="de-body">
          <div className="grid grid-3 gap-6">
            {SYSTEMS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
              >
                <TiltCard className="de-system-card">
                  <CardHead>{s.title}</CardHead>
                  <CardBody>{s.desc}</CardBody>
                </TiltCard>
              </motion.div>
            ))}
          </div>
          <div className="de-visual-wrap">
            <div className="de-visual">
              <div className="de-grid" />
              <div className="de-node" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
