import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Card, CardBody, CardHead } from '../../components/ui/Card'

const EDU = [
  {
    year: '2017 – 2020',
    school: "Bachelor of Science, Biology",
    detail: "Western Kentucky University, Bowling Green, KY",
    note:
      'Conducted phytochemical and phylogenetic research under Dr. Chandrakanth Emani, applying C++ and R/Rust-based computational analysis.',
  },
  {
    year: '2013 – 2017',
    school: 'Associate in Science',
    detail: "Owensboro Community and Technical College, Owensboro, KY",
    note:
      "Interned in oncological alternative therapeutics research under Dr. Chad Wilkerson at Mitchell Memorial Cancer Center.",
  },
]

const CERTS = [
  'CompTIA A+',
  'CompTIA Network+',
  'CompTIA Security+',
  'Microsoft MS-900',
  'Microsoft AZ-900',
  'Microsoft AZ-800',
]

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="section-head">
          <h2>Education &amp; certifications</h2>
          <p>Academic background and credentials.</p>
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
                <CardHead>Education</CardHead>
                <CardBody>
                  {EDU.map((e) => (
                    <div key={e.year} className="edu-row">
                      <span className="edu-year">{e.year}</span>
                      <div className="edu-text">
                        <div className="font-medium">{e.school}</div>
                        <div>{e.detail}</div>
                        <div className="mt-2 text-xs text-soft">{e.note}</div>
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
                <CardHead>Certifications</CardHead>
                <CardBody>
                  <div className="chips">
                    {CERTS.map((c, i) => (
                      <Chip key={i}>{c}</Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return <span className="chip">{children}</span>
}
