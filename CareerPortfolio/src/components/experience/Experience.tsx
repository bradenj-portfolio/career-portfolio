import { motion } from 'framer-motion'
import { Card, CardBody, CardHead } from '../../components/ui/Card'
import { TiltCard } from '../../components/ui/TiltCard'

const JOBS = [
  {
    role: 'Systems Administrator',
    company: 'Southern Star Central Gas Pipeline',
    location: 'Owensboro, KY',
    date: 'May 2025 – Present',
    highlight:
      'Administer multi-site physical/virtual infrastructure with split-brain DNS and high availability. SME for Exchange (on-premises, Online, Hybrid); led migration from Exchange 2016 to Subscription Edition, consolidating eight servers to four while preserving HA and disaster recovery. Architected DKIM/DMARC and removal of legacy SMTP AUTH via Azure Communication Services Email (OAuth 2.0). Zero Trust with Microsoft Sentinel and Defender; Intune and SCCM endpoint management; PowerShell and Terraform infrastructure-as-code; Azure Kubernetes Service and Kubernetes R&D.',
  },
  {
    role: 'Support Engineer',
    company: 'Matrix Integration',
    location: 'Jasper, IN',
    date: 'Aug 2023 – May 2025',
    highlight:
      'Tier 2/3 support for 4,000+ workstations across 90+ client companies. Administered 80+ Active Directory environments; Microsoft 365/Entra (MFA, conditional access, email administration); Veeam and Barracuda backup; threat protection (Barracuda TEP, PhishLine, SentinelOne, Trend Micro, Defender); Cisco Meraki and Ubiquiti UniFi networking; MSP tools (ConnectWise, ScreenConnect, Automate).',
  },
  {
    role: 'Owner',
    company: 'Owensboro Computers',
    location: 'Owensboro, KY',
    date: 'Jul 2022 – Aug 2023',
    highlight:
      'Founded and operated a computer sales and repair sole proprietorship. Cost-optimized custom PC builds (per-core/per-dollar analysis, RAID), Azure cloud services and NAS storage for small-business clients, and high-performance workstations for gaming, video editing, and server use.',
  },
]

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <h2>Experience</h2>
          <p>Selected professional history.</p>
        </div>
        <div className="grid grid-2">
          {JOBS.map((job, i) => (
            <TiltCard key={i} className="experience-card">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card>
                  <CardHead>
                    <span className="chip">{job.date}</span>
                  </CardHead>
                  <CardBody>
                    <div className="job-role">{job.role}</div>
                    <div className="job-company">{job.company} — {job.location}</div>
                    <p className="mt-4 leading-relaxed text-soft">{job.highlight}</p>
                  </CardBody>
                </Card>
              </motion.div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
