import { motion } from 'framer-motion'
import { CardBody, CardHead } from '../ui/Card'
import { TiltCard } from '../ui/TiltCard'

const SYSTEMS = [
  {
    title: 'Netplay & Steam',
    desc:
      'Mirror networking over Steamworks. Dead Exodus is in playtest on Steam (App 5367660). Lobby, fireteam and strike matchmaking run over Steam.',
  },
  {
    title: 'Isometric conversion',
    desc:
      'Whole game moved to a Diablo 2 / Path of Exile-style isometric view with click-to-move and a WASD toggle.',
  },
  {
    title: 'Combat systems',
    desc: 'Parry, Elden Ring-style lock-on, head weak spots, and grab & throw with impact tiers.',
  },
  {
    title: 'Progression & loot',
    desc: 'Level 100 cap, classless skill trees, six loot tiers, affixes and crafting (10 into 1).',
  },
  {
    title: 'Tools & kits',
    desc: 'Offline dev tools, Blender pipelines, reusable prefab kits and rules tests for pure C# assemblies.',
  },
  {
    title: 'Strike flow',
    desc: 'Linear strikes — drop in, push to the final boss, get loot. Solo, host and join flows.',
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
              Co-op strike shooter in Unity 6 (URP). Linear strikes — drop in, push to the final
              boss, get loot. Built with Mirror over Steam networking.
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
