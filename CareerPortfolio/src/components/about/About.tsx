import { motion } from 'framer-motion'
import { Card, CardBody, CardHead } from '../../components/ui/Card'

const SUMMARY = `I design, secure, and automate enterprise infrastructure across hybrid Microsoft 365 / Azure
and on-premises environments. I'm a subject matter expert in Exchange (on-premises, Online, and
Hybrid), Entra ID / Microsoft Graph API architecture, and Microsoft 365 security, with growing
expertise in Zero Trust operations (Microsoft Sentinel, Defender), infrastructure automation
(PowerShell, Terraform, Azure DevOps CI/CD), and cloud-native architecture (AKS, containers).

I've led complex migrations, hardened identity and email security posture, and maintained
high-availability systems across multi-site datacenters supporting roughly 500 virtual machines and
95+ applications.`

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <h2>About</h2>
          <p>Systems Administrator — infrastructure, identity, and cloud.</p>
        </div>
        <div className="grid grid-2">
          <div className="space-y-6">
            <motion.p
              className="text-lg leading-relaxed text-soft"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {SUMMARY}
            </motion.p>
          </div>
          <div className="space-y-6">
            <Card className="stats-card">
              <CardHead>Systems managed</CardHead>
              <CardBody>
                <div className="stat">
                  <div className="stat-value">~500</div>
                  <div className="stat-label">VMs across multi-site HA</div>
                </div>
                <div className="stat">
                  <div className="stat-value">95+</div>
                  <div className="stat-label">applications supported</div>
                </div>
                <div className="stat">
                  <div className="stat-value">4+ yrs</div>
                  <div className="stat-label">enterprise IT experience</div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
