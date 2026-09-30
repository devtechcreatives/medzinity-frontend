// Central source of truth for Medzinity website content.
// Adapted from the website architecture prototype.

// ---- Section images ----
// Insurance
import insuranceImg1 from '../assets/sections/insurance/ins-1.jpg'
import insuranceImg2 from '../assets/sections/insurance/ins-2.jpg'
// AI & Technology
import aiTechImg1 from '../assets/sections/ai-technology/ai-1.jpg'
// Life Science & Pharma
import lifeSciImg1 from '../assets/sections/life-science/ls-1.jpg'
import lifeSciImg2 from '../assets/sections/life-science/ls-2.jpg'
import lifeSciImg3 from '../assets/sections/life-science/ls-3.jpg'
import lifeSciImg4 from '../assets/sections/life-science/ls-4.jpg'
import lifeSciImg5 from '../assets/sections/life-science/ls-5.jpg'
// Medico-Legal
import medicoLegalImg1 from '../assets/sections/medico-legal/ml-1.jpg'
import medicoLegalImg2 from '../assets/sections/medico-legal/ml-2.jpg'
import medicoLegalImg3 from '../assets/sections/medico-legal/ml-3.jpg'
import medicoLegalImg4 from '../assets/sections/medico-legal/ml-4.jpg'
// Compliance & HIPAA
import complianceImg1 from '../assets/sections/compliance/comp-1.jpg'
import complianceImg2 from '../assets/sections/compliance/comp-2.jpg'
import complianceImg3 from '../assets/sections/compliance/comp-3.jpg'
import complianceImg4 from '../assets/sections/compliance/comp-4.jpg'
import complianceImg5 from '../assets/sections/compliance/comp-5.jpg'
import complianceImg6 from '../assets/sections/compliance/comp-6.jpg'

export const brand = {
  name: 'Medzinity',
  tagline: 'Clinical Intelligence Behind Every Decision',
  subTagline: 'Medical, legal and operational intelligence',
  signature: 'Clinical intelligence behind every decision.',
  email: 'info@medzinity.com',
  phone: '(415) 231-3737',
  phoneHref: 'tel:+14152313737',
}

export const nav = [
  { to: '/', label: 'Home', end: true },
  {
    to: '/solutions',
    label: 'Solutions',
    mega: true,
    clusters: [
      {
        heading: 'Clinical & Medico-Legal',
        items: [
          { to: '/solutions/medical-legal-services', label: 'Medical-Legal Services / Clinical Intelligence', desc: 'Record review, chronologies, causation and damages analysis, and deposition and trial support for attorneys.', flagship: true },
          { to: '/solutions/legal-process-outsourcing', label: 'Legal Process Outsourcing', desc: 'Research, discovery, demand packages and case administration from a team that understands the medical record.' },
        ],
      },
      {
        heading: 'Healthcare Revenue',
        items: [
          { to: '/solutions/revenue-cycle-management', label: 'Revenue Cycle Management', desc: 'Billing, claims, denials, prior authorization and follow-up for hospitals, clinics and physician groups.' },
        ],
      },
      {
        heading: 'Pharmaceutical & Medical Device',
        items: [
          { to: '/solutions/product-life-cycle-management', label: 'Product Life Cycle Management', desc: 'Support for pharmaceutical and medical device companies across the life of their products.' },
          { to: '/solutions/pharmacovigilance', label: 'Pharmacovigilance', desc: 'Pharmacovigilance support for pharmaceutical and medical device companies.' },
        ],
      },
      {
        heading: 'Technology-Enabled Operations',
        items: [
          { to: '/solutions/ai-automation', label: 'AI & Automation', desc: 'AI-assisted document processing and workflow automation, always with human review.' },
          { to: '/solutions/crm-workflow', label: 'CRM & Workflow Solutions', desc: 'CRM and workflow technology built for legal and healthcare operations.' },
        ],
      },
    ],
    submenu: [
      { to: '/solutions/medical-legal-services', label: 'Medical-Legal Services / Clinical Intelligence', desc: 'Record review, chronologies, causation and damages analysis, and deposition and trial support for attorneys.' },
      { to: '/solutions/legal-process-outsourcing', label: 'Legal Process Outsourcing', desc: 'Research, discovery, demand packages and case administration from a team that understands the medical record.' },
      { to: '/solutions/revenue-cycle-management', label: 'Revenue Cycle Management', desc: 'Billing, claims, denials, prior authorization and follow-up for hospitals, clinics and physician groups.' },
      { to: '/solutions/product-life-cycle-management', label: 'Product Life Cycle Management', desc: 'Support for pharmaceutical and medical device companies across the life of their products.' },
      { to: '/solutions/pharmacovigilance', label: 'Pharmacovigilance', desc: 'Pharmacovigilance support for pharmaceutical and medical device companies.' },
      { to: '/solutions/ai-automation', label: 'AI & Automation', desc: 'AI-assisted document processing and workflow automation, always with human review.' },
      { to: '/solutions/crm-workflow', label: 'CRM & Workflow Solutions', desc: 'CRM and workflow technology built for legal and healthcare operations.' },
    ],
    footerLinks: [
      { to: '/solutions', label: 'View all solutions' },
      { to: '/contact-us', label: 'Request a sample chronology', highlight: true },
    ],
  },
  {
    to: '/industries',
    label: 'Industries',
    submenu: [
      { to: '/industries/law-firms', label: 'Law Firms', desc: 'Personal injury, medical malpractice and mass tort.' },
      { to: '/industries/healthcare-providers', label: 'Healthcare Providers', desc: 'Hospitals, clinics and physician groups.' },
      { to: '/industries/insurance-companies', label: 'Insurance', desc: 'Coming soon. Content to be confirmed.' },
      { to: '/industries/pharma-medical-device-companies', label: 'Pharmaceutical & Medical Device Companies', desc: 'Product life cycle and pharmacovigilance.' },
    ],
    footerLinks: [
      { to: '/industries', label: 'View all industries' },
    ],
  },
  { to: '/technology-ai', label: 'Technology & AI' },
  {
    to: '/about-us',
    label: 'About',
    submenu: [
      { to: '/about-us', label: 'About Medzinity' },
      { to: '/about-us/why-medzinity', label: 'Why Medzinity' },
      { to: '/about-us/quality-security-compliance', label: 'Quality, Security & Compliance' },
    ],
  },
  { to: '/insights', label: 'Insights' },
]

// "What We Do" — used on Home and About Us
export const whatWeDo = [
  {
    icon: 'IconDoc',
    title: 'Clinical & Medico-Legal',
    desc: 'Clinical intelligence for legal decisions, and the legal support around it.',
  },
  {
    icon: 'IconClipboard',
    title: 'Healthcare Revenue',
    desc: 'Revenue cycle support informed by clinical documentation.',
  },
  {
    icon: 'IconFlask',
    title: 'Pharmaceutical & Medical Device',
    desc: 'Product life cycle and safety support for product companies.',
  },
  {
    icon: 'IconLayers',
    title: 'Technology-Enabled Operations',
    desc: 'Technology that speeds up work across every solution.',
  },
]

export const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 120, suffix: '+', label: 'Clients' },
  { value: 2830, suffix: '+', label: 'Projects' },
  { value: 100, suffix: '%', label: 'Compliance' },
]

// Home page "Clientele" orbit
export const clientele = [
  { label: 'Law firms', icon: 'IconBuilding', to: '/industries/law-firms' },
  { label: 'Healthcare providers', icon: 'IconHospital', to: '/industries/healthcare-providers' },
  { label: 'Insurance companies', icon: 'IconShield', to: '/industries/insurance-companies' },
  { label: 'Pharma companies', icon: 'IconFlask', to: '/industries/pharma-medical-device-companies' },
  { label: 'Medical device companies', icon: 'IconPulse', to: '/industries/pharma-medical-device-companies' },
  { label: 'Clinical research', icon: 'IconBeaker', to: null },
]

// Solutions (formerly "services")
export const services = [
  {
    slug: 'medical-legal-services',
    icon: 'IconDoc',
    title: 'Medical-Legal Services / Clinical Intelligence',
    heroImage: medicoLegalImg1,
    galleryImages: [medicoLegalImg1, medicoLegalImg2, medicoLegalImg3, medicoLegalImg4],
    shortDesc: 'Medical record review, chronologies and clinical case analysis for personal injury, medical malpractice and mass tort attorneys \u2014 built for deposition and trial, not just summary.',
    intro: 'A case often starts as thousands of pages of medical records. Our clinical reviewers turn that volume into a clear chronology and analysis your attorneys can use right away. We flag what matters to your case theory, including the treatment gap or pre-existing condition buried on page 400.',
    items: [
      {
        title: 'Medical Record Review',
        desc: 'Complete record sets reviewed against a consistent protocol.',
      },
      {
        title: 'Medical Chronology',
        desc: 'A clear timeline of care, delivered as standing work product.',
      },
      {
        title: 'Clinical Case Analysis',
        desc: 'What the record shows, what it doesn\u2019t, and why it matters.',
      },
      {
        title: 'Standard-of-Care Analysis',
        desc: 'For medical malpractice: what care was required and where it broke down.',
      },
      {
        title: 'Causation Analysis',
        desc: 'Clinical reasoning connecting events to injuries.',
      },
      {
        title: 'Damages Analysis',
        desc: 'Damages documentation consolidated and tied directly to the record.',
      },
      {
        title: 'Treatment Gap Identification',
        desc: 'Identified systematically, as a standard deliverable.',
      },
      {
        title: 'Pre-existing Condition Identification',
        desc: 'Flagged explicitly, as a standard deliverable.',
      },
      {
        title: 'Deposition Support',
        desc: 'Delivered by the same team that built the chronology.',
      },
      {
        title: 'Trial Support',
        desc: 'Delivered by the same team that built the chronology.',
      },
      {
        title: 'Mass Tort Record Review',
        desc: 'Records reviewed at volume against the same case criteria, plaintiff after plaintiff.',
      },
    ],
  },
  {
    slug: 'legal-process-outsourcing',
    icon: 'IconBuilding',
    title: 'Legal Process Outsourcing',
    shortDesc: 'Research, discovery, demand packages and case administration from a team that understands the medical record.',
    intro: 'Caseloads peak. Discovery and case administration don\u2019t wait. Hiring for peaks adds overhead that stays after the peak ends. When the same team handles your clinical review and your legal support, work product is reused rather than rebuilt.',
    items: [
      {
        title: 'Legal Research',
        desc: 'Research support for your case teams.',
      },
      {
        title: 'Discovery and Discovery Responses',
        desc: 'Help with discovery workload during caseload peaks.',
      },
      {
        title: 'Demand Packages',
        desc: 'Built on the clinical work product behind the case.',
      },
      {
        title: 'Deposition Preparation',
        desc: 'Informed by the chronology and case analysis.',
      },
      {
        title: 'Case Administration',
        desc: 'Ongoing case administration support.',
      },
    ],
  },
  {
    slug: 'revenue-cycle-management',
    icon: 'IconClipboard',
    title: 'Revenue Cycle Management',
    shortDesc: 'Billing, claims, denials, prior authorization and follow-up for hospitals, clinics and physician groups.',
    intro: 'Revenue leakage is rarely one problem. It\u2019s billing, denials, prior authorization and follow-up all underperforming a little at once. Medzinity works across the cycle, with a team that understands the clinical documentation behind every claim.',
    items: [
      {
        title: 'Billing',
        desc: 'Accurate, timely billing.',
      },
      {
        title: 'Claims Processing',
        desc: 'Claims processing and management.',
      },
      {
        title: 'Denials Management',
        desc: 'Identifying, working and preventing denials.',
      },
      {
        title: 'Prior Authorization',
        desc: 'Authorization support before care is delivered.',
      },
      {
        title: 'Follow-up',
        desc: 'Consistent follow-up on outstanding claims.',
      },
    ],
  },
  {
    slug: 'product-life-cycle-management',
    icon: 'IconLifecycle',
    title: 'Product Life Cycle Management',
    heroImage: lifeSciImg1,
    galleryImages: [lifeSciImg1, lifeSciImg2, lifeSciImg3, lifeSciImg4, lifeSciImg5],
    shortDesc: 'Product life cycle management support for pharmaceutical and medical device companies.',
    intro: 'The same discipline behind our clinical work applies here: consistent protocols, specialist review and quality control before delivery.',
    items: [
      {
        title: 'Complaints Handling',
        desc: 'Complaint handling of products by our expert team using analytical skills. Cases are entered against source documents with quality review and investigatory analysis.',
      },
      {
        title: 'Clinical Evaluation Reports',
        desc: 'Assessment and analysis of clinical data pertaining to a medical device to verify its clinical safety and performance.',
      },
      {
        title: 'Post Marketing Surveillance',
        desc: 'Periodic safety update reports, literature screening for safety assessments and benefit risk analysis.',
      },
    ],
  },
  {
    slug: 'pharmacovigilance',
    icon: 'IconShield',
    title: 'Pharmacovigilance',
    shortDesc: 'Pharmacovigilance support for pharmaceutical and medical device companies.',
    intro: 'Safety information is clinical information. It is reviewed by specialists and checked before it moves on. The same clinical review discipline, applied to safety information.',
    items: [
      {
        title: 'Clinical Trials Management System',
        desc: 'Successful clinical trials require the ability to see key details and uncover hidden insights. Medzinity utilizes science and technology to bring clarity to clinical trials.',
      },
      {
        title: 'Pharmacovigilance Operations/Consulting',
        desc: 'Support throughout the medicine\u2019s life cycle, from development program through Marketing Authorization and post-marketing periodic reporting.',
      },
      {
        title: 'Specialist Support Services',
        desc: 'Risk management, safety enquiries, benefit-risk assessment, safety communication, data safety monitoring and pharmacovigilance process development.',
      },
      {
        title: 'Regulatory Affairs',
        desc: 'End-to-end regulatory life cycle management across the entire drug and device regulatory environment.',
      },
    ],
  },
  {
    slug: 'ai-automation',
    icon: 'IconLayers',
    title: 'AI & Automation',
    heroImage: aiTechImg1,
    shortDesc: 'AI-assisted document processing and workflow automation for legal and healthcare operations \u2014 with our specialists reviewing every output.',
    intro: 'High-volume, repetitive work slows cases and revenue cycles: sorting records, processing claims, producing documents. Automation takes time out of those steps so your experts can focus on judgment.',
    items: [
      {
        title: 'AI-Assisted Document Processing',
        desc: 'Faster handling of large record and document sets.',
      },
      {
        title: 'Record Review Support',
        desc: 'AI-assisted processing that helps reviewers work through volume consistently.',
      },
      {
        title: 'Claims Processing Support',
        desc: 'Faster movement of claims through the cycle.',
      },
      {
        title: 'Document Production',
        desc: 'Quicker preparation of routine documents.',
      },
      {
        title: 'Workflow Automation',
        desc: 'Repetitive steps automated once work is centralized.',
      },
    ],
  },
  {
    slug: 'crm-workflow',
    icon: 'IconGlobe',
    title: 'CRM & Workflow Solutions',
    shortDesc: 'CRM and workflow solutions built around how legal and healthcare organizations actually work.',
    intro: 'Client, case and payer information often sits in different departments and tools. Work is duplicated, handoffs are missed, and no one sees the full relationship. We start from the way legal and healthcare work moves and build around it.',
    items: [
      {
        title: 'CRM for Legal and Healthcare Workflows',
        desc: 'Configured around your cases, patients or clients \u2014 not a generic sales pipeline.',
      },
      {
        title: 'Relationship Tracking',
        desc: 'Client and payer relationships in one place.',
      },
      {
        title: 'Centralized Workflow',
        desc: 'Tasks and handoffs visible across teams.',
      },
      {
        title: 'Workflow Automation',
        desc: 'Repetitive steps automated once work is centralized.',
      },
    ],
  },
]

export const industries = [
  {
    slug: 'law-firms',
    icon: 'IconBuilding',
    title: 'Law Firms',
    shortDesc: 'Clinical intelligence and legal support for personal injury, medical malpractice and mass tort firms \u2014 so your attorneys spend their time on strategy, not on pages.',
    expertise: ['Personal Injury', 'Medical Malpractice', 'Mass Tort', 'Workers\u2019 Compensation', 'Product Liability', 'Insurance Claims'],
    capabilities: [
      'Medical record review',
      'Medical chronology',
      'Clinical case analysis',
      'Causation analysis',
      'Damages analysis',
      'Treatment gap identification',
      'Pre-existing condition identification',
      'Deposition support',
      'Trial support',
      'Mass tort record review',
      'Legal research',
      'Discovery and discovery responses',
      'Demand packages',
    ],
    quotes: [
      'The record decides the case. Reading it takes time.',
    ],
    body: [
      'Medical record review, chronologies and case analysis for personal injury, medical malpractice and mass tort practices.',
      'Large record sets per case and tight litigation deadlines. Treatment gaps, pre-existing conditions and causation issues buried in the record. Chronologies and damages documentation that take days to build. Deposition and trial preparation on short timelines, with attorney time already stretched.',
      'Clinical reviewers, not generalists. Work product built for deposition and trial. And when you need extra hands for discovery or demand packages, it\u2019s the same relationship.',
      'Privileged material and protected health information are handled as the default risk.',
    ],
  },
  {
    slug: 'healthcare-providers',
    icon: 'IconHospital',
    title: 'Healthcare Providers',
    shortDesc: 'Revenue cycle, CRM and workflow support for hospitals, clinics and physician groups \u2014 from a team that understands clinical documentation.',
    capabilities: [
      'Denial work and follow-up across the cycle',
      'Prior authorization support',
      'Payer relationship tracking in one CRM',
      'Automation of repetitive claims and workflow steps',
    ],
    body: [
      'Revenue leakage. Billing, denials, prior authorization and follow-up each underperforming a little. Disconnected relationships. Patient, payer and referral information spread across teams. Manual work. Repetitive steps that slow the cycle.',
      'Revenue starts with the clinical record. Our team understands both \u2014 and you work with one accountable team rather than separate billing, CRM and automation vendors.',
    ],
  },
  {
    slug: 'insurance-companies',
    icon: 'IconUsers',
    title: 'Insurance',
    heroImage: insuranceImg1,
    galleryImages: [insuranceImg1, insuranceImg2],
    shortDesc: 'Medical record review and clinical analysis for insurance organizations.',
    capabilities: [
      'Medical record review for claims',
      'Clinical analysis',
      'AI-assisted document processing',
    ],
    quotes: [
      'Clear clinical facts for claims decisions.',
    ],
    body: [
      'Medical record review and clinical analysis for insurance organizations. Segments and scope are being confirmed by Medzinity.',
    ],
  },
  {
    slug: 'pharma-medical-device-companies',
    icon: 'IconFlask',
    title: 'Pharmaceutical & Medical Device Companies',
    heroImage: lifeSciImg1,
    galleryImages: [lifeSciImg1, lifeSciImg2, lifeSciImg3, lifeSciImg4, lifeSciImg5],
    shortDesc: 'Product life cycle management and pharmacovigilance support for pharmaceutical and medical device companies.',
    capabilities: [
      'Product Life Cycle Management',
      'Pharmacovigilance',
      'Clinical Trials Management',
      'Post Marketing Surveillance',
      'Regulatory Affairs',
    ],
    body: [
      'Product life cycle management and pharmacovigilance support for pharmaceutical and medical device companies.',
      'The discipline behind our clinical work carries into product and safety work: consistent protocols, specialist review, quality control before delivery, and confidentiality by default.',
    ],
  },
]

// About Us \u2014 Values
export const values = [
  { title: 'Clinical Rigor', desc: 'Every conclusion is traceable to the record.' },
  { title: 'Precision', desc: 'Work product built for how it will be used.' },
  { title: 'Operational Discipline', desc: 'Deadlines and volume are core competencies.' },
  { title: 'Technology-Enabled', desc: 'AI accelerates judgment; it doesn\u2019t replace it.' },
  { title: 'Discretion & Confidentiality', desc: 'Sensitive information is treated as the default risk.' },
  { title: 'Accountability', desc: 'Measured by results, not hours logged.' },
]

export const principles = [
  'Clinical foundation first',
  'Consistent review protocols',
  'Human expertise supported by technology',
  'Quality control before delivery',
  'One accountable point of contact',
]

// About Us \u2014 What We Ensure
export const ensure = [
  { icon: 'IconShield', title: 'Confidential by Default', desc: 'Protected health information and privileged material are treated as the default risk in every engagement.' },
  { icon: 'IconCheck', title: 'Consistent Review Protocols', desc: 'Records are reviewed against a consistent protocol. Every conclusion is traceable to the record.' },
  { icon: 'IconClipboard', title: 'Quality Control Before Delivery', desc: 'Quality control applies to every deliverable, including AI-assisted work.' },
  { icon: 'IconLayers', title: 'Technology with Human Review', desc: 'AI accelerates human judgment; it never replaces it. Specialists review AI-assisted work before delivery.' },
  { icon: 'IconGlobe', title: 'HIPAA & HITECH Compliant', desc: 'Data handling practices aligned to HIPAA and HITECH compliance requirements.' },
]

// About Us \u2014 About content
export const aboutContent = {
  story: [
    'Medzinity began with a simple observation. The medical record is the one document that legal, financial and operational decisions all depend on \u2014 yet it is usually reviewed once, by one team, for one purpose.',
    'We built Medzinity to read it closely and put that understanding to work wherever it\u2019s needed.',
  ],
  mission: 'To give attorneys, healthcare organizations, and pharmaceutical and medical device companies the clinical, legal, financial and operational clarity they need to make decisions and run operations with confidence.',
  vision: 'To be the organization law firms, healthcare providers and product companies rely on to connect clinical fact to legal, financial and safety outcomes.',
  purpose: 'Turning complexity into clarity that drives decisions.',
}

// Why Medzinity page content
export const whyMedzinity = {
  reasons: [
    { title: 'A Clinical Foundation', desc: 'Every service starts with expert reading of clinical information.' },
    { title: 'Clinical Reviewers, Not Generalists', desc: 'People trained to read a chart and reason about causation.' },
    { title: 'Work Product Built for Use', desc: 'Built for deposition, trial, claim or safety review \u2014 not just summary.' },
    { title: 'One Accountable Team', desc: 'Clinical work reused across legal, revenue and technology services, with one relationship to manage.' },
    { title: 'Technology with Human Review', desc: 'Faster processing, with specialists checking every output.' },
    { title: 'Discipline and Discretion', desc: 'Deadlines, volume and confidentiality treated as core competencies.' },
  ],
  comparisons: [
    { competitor: 'Record review providers', theirApproach: 'Summaries and chronologies', ourApproach: 'Clinical analysis connected to legal outcome, plus legal support in the same relationship' },
    { competitor: 'Legal support providers', theirApproach: 'Generalist legal support', ourApproach: 'Legal support from a team that understands the medical record behind the case' },
    { competitor: 'RCM providers', theirApproach: 'Billing and claims in isolation', ourApproach: 'RCM informed by clinical documentation understanding and connected workflow' },
    { competitor: 'Generic outsourcing providers', theirApproach: 'Broad, undifferentiated operations', ourApproach: 'Specialization at the point where clinical information drives decisions' },
    { competitor: 'Software-only AI tools', theirApproach: 'Software without a domain team', ourApproach: 'AI paired with clinical and legal experts and quality control' },
  ],
}

// Quality, Security & Compliance page content
export const qualitySecurityCompliance = {
  qualityAssurance: 'Consistent review protocols. Systematic identification of gaps and pre-existing conditions. Quality control before any output reaches a client.',
  humanReview: 'AI accelerates human judgment; it never replaces it. Specialists review AI-assisted work before delivery.',
  confidentiality: 'Protected health information and privileged material are treated as the default risk.',
  images: [complianceImg1, complianceImg2, complianceImg3, complianceImg4, complianceImg5, complianceImg6],
}

// Technology & AI page content
export const technologyAI = {
  principle: 'We use technology where it makes experts faster and more consistent. We don\u2019t use it to take experts out of the loop.',
  capabilities: [
    { icon: 'IconDoc', title: 'Document Processing', desc: 'Large medical record and case document sets processed faster.' },
    { icon: 'IconPulse', title: 'AI-Enabled Review Workflows', desc: 'Reviewers work through volume with consistent criteria.' },
    { icon: 'IconLayers', title: 'Data Processing at Volume', desc: 'Mass tort record sets handled without losing rigor.' },
    { icon: 'IconClipboard', title: 'Automation', desc: 'Repetitive steps in claims and document production automated.' },
    { icon: 'IconGlobe', title: 'Workflow Optimization', desc: 'Work centralized so every team sees the same picture.' },
  ],
  pipeline: [
    { title: 'AI-Assisted Processing', desc: 'Technology does the first pass on volume.' },
    { title: 'Specialist Review', desc: 'Clinical, legal or operations specialists review the output.' },
    { title: 'Quality Control', desc: 'Work passes quality control before delivery.' },
  ],
  limits: 'Clinical judgment, causation reasoning and legal strategy need people. We\u2019re open about where AI helps and where it doesn\u2019t.',
}

// Flagship solution capabilities for the home page
export const flagshipCapabilities = [
  'Medical record review',
  'Medical chronology',
  'Clinical case analysis',
  'Causation analysis',
  'Damages analysis',
  'Treatment gap identification',
  'Pre-existing condition identification',
  'Deposition support',
  'Trial support',
  'Mass tort record review',
]

// How solutions connect \u2014 for the home page strand section
export const solutionStrand = [
  { title: 'Clinical', desc: 'Expert reading of the medical record.' },
  { title: 'Legal', desc: 'Chronologies and case analysis feed the legal support around a case.' },
  { title: 'Revenue', desc: 'The documentation behind care is the documentation behind the claim.' },
  { title: 'Product Safety', desc: 'The same clinical review discipline, applied to safety information.' },
  { title: 'Technology', desc: 'Speeds up each step, with human review.' },
]

// Insights
export const insights = [
  {
    title: 'What Is Medical Records Processing and Why It Matters for Healthcare Providers',
    author: 'medzinity',
    date: 'Apr 16, 2026',
    category: 'Insights',
    excerpt: "In today's increasingly complex healthcare ecosystem, the volume and variety of patient data can be overwhelming. From physician notes and lab results to imaging reports and discharge summaries, healthcare providers are inundated with records that must be\u2026",
    url: 'https://medzinity.com/medical-records-processing/',
  },
  {
    title: 'From Reactive Care to Preventive Care \u2013 It Starts With Awareness',
    author: 'Medzians',
    date: 'Mar 26, 2026',
    category: 'Info',
    excerpt: 'Healthcare often begins after something goes wrong. But true health begins with awareness.',
    url: 'https://medzinity.com/from-reactive-care-to-preventive-care-it-starts-with-awareness/',
  },
  {
    title: 'Why Incomplete History Leads to Misdiagnosis',
    author: 'Medzians',
    date: 'Mar 26, 2026',
    category: 'Info',
    excerpt: 'Misdiagnosis is not always due to lack of expertise. Sometimes, it is due to missing information.',
    url: 'https://medzinity.com/why-incomplete-history-leads-to-misdiagnosis/',
  },
  {
    title: 'How to Talk to Your Doctor for the Right Diagnosis',
    author: 'Medzians',
    date: 'Mar 26, 2026',
    category: 'Info',
    excerpt: 'A good consultation is not just about the doctor asking questions. It is about clear communication.',
    url: 'https://medzinity.com/how-to-talk-to-your-doctor-for-the-right-diagnosis/',
  },
  {
    title: 'Medical Records Are Not Just Documents \u2013 They Are Decision Tools',
    author: 'Medzians',
    date: 'Mar 26, 2026',
    category: 'Info',
    excerpt: 'Most people treat medical records as something to store away. But in reality, they are a timeline, a pattern tracker, a decision-making tool.',
    url: 'https://medzinity.com/medical-records-are-not-just-documents-they-are-decision-tools/',
  },
  {
    title: "The Most Powerful Tool in Diagnosis Isn't Technology \u2013 It's Your Story",
    author: 'Medzians',
    date: 'Mar 26, 2026',
    category: 'Info',
    excerpt: 'Nearly 70\u201380% of diagnosis is guided by patient history.',
    url: 'https://medzinity.com/the-most-powerful-tool-in-diagnosis-isnt-technology-its-your-story/',
  },
]

export const cta = {
  title: 'Talk to the Team',
  subtitle: 'Talk to the team behind the record.',
  body: 'Tell us about your cases, your revenue cycle or your product safety needs. We\u2019ll connect you with the right specialists.',
  primaryLabel: 'Talk to Medzinity',
  primaryTo: '/contact-us',
  secondaryLabel: 'Request a Sample Chronology',
  secondaryTo: '/contact-us',
}

export const compliance = {
  title: 'Quality, Security & Compliance',
  description: 'Consistent review protocols. Systematic identification of gaps and pre-existing conditions. Quality control before any output reaches a client. Protected health information and privileged material are treated as the default risk.',
  images: [complianceImg1, complianceImg2, complianceImg3, complianceImg4, complianceImg5, complianceImg6],
}
