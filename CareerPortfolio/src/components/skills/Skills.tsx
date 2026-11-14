import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Card, CardBody, CardHead } from '../../components/ui/Card'

const GROUPS = [
  {
    title: 'Identity & Access',
    text:
      'Active Directory, hybrid AD/Entra ID, Group Policy, Conditional Access, MFA, gMSA, Zero Trust architecture, Azure service principals and Microsoft Graph API.',
    chips: ['Active Directory', 'Entra ID', 'Conditional Access', 'MFA', 'gMSA', 'Zero Trust', 'Graph API', 'Azure AD'],
  },
  {
    title: 'Messaging & Collaboration',
    text:
      'Exchange 2016/SE, Exchange Hybrid, Exchange Online, Microsoft 365, SharePoint, OneDrive, Teams; DKIM/DMARC/SPF, OAuth 2.0, Barracuda TEP, PhishLine.',
    chips: ['Exchange', 'Microsoft 365', 'SharePoint', 'Teams', 'DKIM/DMARC/SPF', 'OAuth 2.0', 'Barracuda TEP', 'PhishLine'],
  },
  {
    title: 'Cloud Architecture & Containers',
    text:
      'Microsoft Azure, Azure Kubernetes Service (AKS), Kubernetes, Azure Communication Services, Azure Arc, Microsoft Fabric.',
    chips: ['Azure', 'AKS', 'Kubernetes', 'ACS', 'Azure Arc', 'Microsoft Fabric'],
  },
  {
    title: 'Automation & DevOps',
    text: 'PowerShell, Terraform, Git, Azure DevOps, CI/CD pipelines, infrastructure as code.',
    chips: ['PowerShell', 'Terraform', 'Git', 'Azure DevOps', 'CI/CD'],
  },
  {
    title: 'Security & Threat Protection',
    text: 'Microsoft Sentinel, Defender (for Exchange Online), SentinelOne, Trend Micro, DKIM/DMARC/SPF hardening.',
    chips: ['Sentinel', 'Defender', 'SentinelOne', 'Trend Micro', 'Zero Trust'],
  },
  {
    title: 'Endpoint & Device Management',
    text: 'Microsoft Intune, MDM, SCCM; device provisioning, compliance, app deployment, patch management.',
    chips: ['Intune', 'MDM', 'SCCM', 'Patch management'],
  },
  {
    title: 'Virtualization & Storage',
    text: 'VMware ESXi (~500 VMs), Nimble Storage SAN, Veeam Backup, Barracuda Cloud Backup.',
    chips: ['VMware ESXi', 'Nimble SAN', 'Veeam', 'Barracuda'],
  },
  {
    title: 'Monitoring & ITSM / Networking',
    text: 'SolarWinds, ServiceNow, FreshService; Cisco Meraki, Ubiquiti UniFi, DNS/DHCP, split-brain DNS.',
    chips: ['SolarWinds', 'ServiceNow', 'FreshService', 'Meraki', 'UniFi', 'DNS/DHCP'],
  },
]

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <h2>Skills</h2>
          <p>Core technical capabilities.</p>
        </div>
        <div className="grid grid-2">
          {GROUPS.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card>
                <CardHead>{g.title}</CardHead>
                <CardBody>
                  <p>{g.text}</p>
                  <div className="chips">
                    {g.chips.map((c, j) => (
                      <Chip key={j}>{c}</Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="chip" style={{ marginBottom: 4 }}>{children}</span>
  )
}
