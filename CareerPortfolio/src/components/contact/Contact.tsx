import { motion } from 'framer-motion'
import { Card, CardBody, CardHead } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'

const CONTACTS = [
  { kind: '✉️', label: 'Email', text: 'braden.psn@hotmail.com', href: 'mailto:braden.psn@hotmail.com' },
  { kind: '📞', label: 'Phone', text: '(270) 903-3820', href: 'tel:+12709033820' },
  { kind: '📍', label: 'Location', text: 'Owensboro, Kentucky', href: '#' },
]

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <h2>Get in touch</h2>
          <p>Open to conversations about infrastructure, identity, and cloud opportunities.</p>
        </div>
        <div className="grid grid-2">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHead>Contact</CardHead>
                <CardBody>
                  {CONTACTS.map((c) => (
                    <div key={c.label} className="contact-item">
                      <span className="contact-kind" aria-hidden="true">{c.kind}</span>
                      <div className="contact-text">
                        <div>{c.label}</div>
                        {c.href ? (
                          <a href={c.href} rel="noreferrer">{c.text}</a>
                        ) : (
                          <span>{c.text}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </CardBody>
              </Card>
            </motion.div>
          </div>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHead>Send a note</CardHead>
                <CardBody>
                  <form className="note-form" onSubmit={(e) => { e.preventDefault(); }}>
                    <div className="form-row">
                      <label className="form-label">Name</label>
                      <input className="form-input" type="text" required />
                    </div>
                    <div className="form-row">
                      <label className="form-label">Email</label>
                      <input className="form-input" type="email" required />
                    </div>
                    <div className="form-row">
                      <label className="form-label">Message</label>
                      <textarea className="form-input" rows={4} required />
                    </div>
                    <Button variant="primary">Send message</Button>
                  </form>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
