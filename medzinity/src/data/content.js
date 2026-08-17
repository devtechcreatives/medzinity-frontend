// Central source of truth for Medzinity's real site content (medzinity.com),
// captured verbatim so every page/component stays accurate to the live business.

export const brand = {
  name: 'Medzinity',
  tagline: 'Innovate. Empower. Evolve.',
  subTagline: 'Redefining Healthcare Solutions',
  signature: 'Elevating Healthcare to Infinity and Beyond',
  email: 'info@medzinity.com',
  phone: '(415) 231-3737',
  phoneHref: 'tel:+14152313737',
}

export const nav = [
  { to: '/', label: 'Home', end: true },
  {
    to: '/about-us',
    label: 'About Us',
    submenu: [
      { to: '/about-us#Whoweare', label: 'Who We Are' },
      { to: '/about-us#whatwedo', label: 'What We Do' },
      { to: '/about-us#believe', label: 'What We Believe' },
      { to: '/about-us#ensure', label: 'What We Ensure' },
      { to: '/about-us#Joinus', label: 'Join Us' },
    ],
  },
  { to: '/medzian-community', label: 'Medzian Community' },
  {
    to: '/industries',
    label: 'Industries',
    submenu: [
      { to: '/industries/healthcare-providers', label: 'Healthcare Providers' },
      { to: '/industries/insurance-companies', label: 'Insurance Companies' },
      { to: '/industries/pharma-medical-device-companies', label: 'Pharma / Medical Device Companies' },
      { to: '/industries/technology-software-solutions', label: 'Technology & Software Solutions' },
    ],
  },
  {
    to: '/services',
    label: 'Services',
    submenu: [
      { to: '/services/medical-records-processing', label: 'Medical Records Processing' },
      { to: '/services/revenue-cycle-management', label: 'Revenue Cycle Management' },
      { to: '/services/pharmacovigilance', label: 'Pharmacovigilance' },
      { to: '/services/product-life-cycle-management', label: 'Product Life Cycle Management' },
    ],
  },
  { to: '/insights', label: 'Insights' },
  { to: '/contact-us', label: 'Contact Us' },
]

// "What We Do" — used on Home and About Us (#whatwedo)
export const whatWeDo = [
  {
    icon: 'IconLayers',
    title: 'Healthcare Support Services',
    desc: 'Customized healthcare solutions that streamline healthcare operations and increase efficiency.',
  },
  {
    icon: 'IconPulse',
    title: 'Healthcare Data Analytics',
    desc: 'Data-driven insights that help our clients make informed decisions and improve patient outcomes.',
  },
  {
    icon: 'IconFlask',
    title: 'Innovation and Research',
    desc: 'Innovation-driven healthcare transformation that leverages cutting-edge technologies to transform the healthcare industry.',
  },
]

export const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 120, suffix: '+', label: 'Clients' },
  { value: 2830, suffix: '+', label: 'Projects' },
  { value: 100, suffix: '%', label: 'Compliance' },
]

// Home page "Clientele and Industries we serve" strip — only the first three
// map to a real destination page on medzinity.com; the rest are shown unlinked.
export const clientele = [
  { label: 'Healthcare providers', to: '/industries/healthcare-providers' },
  { label: 'Law firms', to: null },
  { label: 'Insurance companies', to: '/industries/insurance-companies' },
  { label: 'Pharma companies', to: '/industries/pharma-medical-device-companies' },
  { label: 'Medical device companies', to: '/industries/pharma-medical-device-companies' },
  { label: 'Clinical research', to: null },
]

export const services = [
  {
    slug: 'medical-records-processing',
    icon: 'IconDoc',
    title: 'Medical Records processing',
    shortDesc: 'We ensure accurate payment to Hospitals, Doctors, Physicians or any medical providers through the services we provide.',
    items: [
      {
        title: 'Medical Record Indexing',
        desc: "Indexing medical records to organize and store patient's information together in one to facilitate retrieval later. We perform indexing to your document management system or EHR system or practice management system.",
      },
      {
        title: 'Medical Scribing',
        desc: 'With the advent of electronic health records (EHR), it is necessary to document all details about patients and their treatment plan. This can add up to a lot of hours of clerical work and record keeping, and it has become important to provide doctors with help in this task. We provide virtual medical scribing services.',
      },
      {
        title: 'Clinical Data Abstraction',
        desc: "We collect important information from a patient's medical record and transcribe that information into discrete fields or locations within the new EHR. We have a team with domain knowledge that allows us to accurately and swiftly sift through the important from the unimportant.",
      },
      {
        title: 'Medical Billing/Coding',
        desc: 'Our qualified medical coding/billing team code for various specialties including ER, Radiology, Pathology, Ambulance, and others with ICD 9 and ICD 10 compliance to prevent compliance risk or revenue loss and provide accurate payment for providers.',
      },
      {
        title: 'Medical Transcription',
        desc: 'We render and edit doctor dictated reports, procedures, and notes in an electronic format in order to create files representing the treatment history of patients. Health practitioners dictate what they have done after performing procedures on patients and we transcribe the oral dictation and edit reports that have gone through speech recognition software.',
      },
      {
        title: 'Medical Record Summarization',
        desc: "The art of reviewing records with analytical skills to produce it as optimum resource for healthcare providers is our key strength. We provide an easy and simplified review process by providing summary of patient's electronic health records by highlighting the case's strengths and weaknesses.",
      },
    ],
  },
  {
    slug: 'revenue-cycle-management',
    icon: 'IconClipboard',
    title: 'Revenue Cycle Management',
    shortDesc: 'We process and make sure patients have eligible insurance on file determining costs for various treatments also for faster and more accurate claims transmission.',
    intro: 'Our comprehensive suite of revenue cycle management solutions helps you reduce claims errors, get paid faster, optimize revenue, manage denials and uncover areas for revenue cycle performance improvement. Solutions include:',
    items: [
      {
        title: 'Patient Demographic Entry',
        desc: 'Patient demographics are carefully verified and the data is used in creation of accurate patient accounts thereby resulting in uninterrupted collections.',
      },
      {
        title: 'Insurance Verification Process',
        desc: "We verify patient's insurance and eligibility to decrease COBs (Co-ordination of benefits) and coverage issues.",
      },
      {
        title: 'Charge Entry Services',
        desc: "Charge entry is one of the key areas in medical billing. The charges entered will determine the reimbursements for physician's service.",
      },
      {
        title: 'Claims Transmission',
        desc: 'We address electronic rejections encountered in the front end on a priority basis for minimizing denials and enabling accurate processing of the electronic claims.',
      },
      {
        title: 'Accounts Receivable & Denial Management',
        desc: 'Our effective rejection handling helps to identify any loopholes in the electronic billing system faster and improved effectiveness of electronic claims submission.',
      },
    ],
  },
  {
    slug: 'pharmacovigilance',
    icon: 'IconShield',
    title: 'Pharmacovigilance',
    shortDesc: 'We help identify and respond to drug safety issues. We are involved in varying degree in all the phases of clinical trials and identify possible rare but serious ADRs and possible actions to prevent the negative impact.',
    items: [
      {
        title: 'Clinical Trials Management System',
        desc: 'Successful clinical trials require the ability to see key details and uncover hidden insights. Medzinity utilizes science and technology to bring clarity to clinical trials, helping companies to develop new life-improving therapies more efficiently and safely.',
      },
      {
        title: 'Pharmacovigilance Operations/Consulting',
        desc: "We support our clients throughout the medicine's life cycle, starting from the establishment of the development program, continuing through the Marketing Authorization Application, and later during post marketing periodic reporting to regulatory authorities.",
      },
      {
        title: 'Specialist Support Services',
        desc: 'We provide specialist support services like risk management plan, responding to regular safety enquiries, assessment of benefit risk, safety concerns and safety communication, data safety monitoring boards and pharmacovigilance process development.',
      },
      {
        title: 'Regulatory Affairs',
        desc: 'We have capabilities to support end to end regulatory life cycle management across the entire value chain of drug and device regulatory environment.',
      },
    ],
  },
  {
    slug: 'product-life-cycle-management',
    icon: 'IconLifecycle',
    title: 'Product Life Cycle Management',
    shortDesc: 'A formalized, systematic solution to manage all aspects of product quality, reliability and risk, fully integrated into the product life cycle.',
    items: [
      {
        title: 'Complaints Handling',
        desc: 'Complaint handling of products is done by our expert team using our analytical skills. A brief summary of the complaint is triaged with all the relevant information pertaining to the complaint. Cases are entered against the source documents received. Quality review and investigatory analysis follows the data entry in respective companies. We provide a formalized, systematic solution to manage all aspects of product quality, reliability and risk using methods that are fully integrated into the product life cycle management.',
      },
      {
        title: 'Clinical Evaluation Reports',
        desc: 'Clinical evaluation is the assessment and analysis of clinical data pertaining to a medical device to verify its clinical safety and performance. The evaluation is based on comprehensive analysis of pre- and post-market clinical data relevant to the intended use. This includes data specific to the device as well as any data relating to devices claimed as equivalent by the manufacturer. We have an expert team to document the whole process as well as conclusions of a clinical evaluation of devices.',
      },
      {
        title: 'Post Marketing Surveillance',
        desc: 'We have extensive experience in post marketing surveillance management. We prepare periodic safety update reports and do literature screening for safety assessments and benefit risk analysis.',
      },
    ],
  },
]

export const industries = [
  {
    slug: 'healthcare-providers',
    icon: 'IconHospital',
    title: 'Healthcare Providers',
    shortDesc: 'A healthcare provider is any facility or practice where you receive and are billed for a product or service related to your personal health.',
    capabilities: ['Medical records Indexing', 'Medical Scribing', 'Medical Record Summarization', 'Clinical Data Abstraction', 'Medical billing/coding', 'Medical transcription'],
    body: [
      'A healthcare provider is any facility or practice where you receive and are billed for a product or service related to your personal health.',
      'Healthcare providers include hospitals, private clinics, and pharmacies as well as specialized care providers like nursing homes, in-home caretakers, and chiropractors.',
      'We help the healthcare providers to initiate good documentation process, methodologies & tools for adhering to standard operating protocols to provide ethical healthcare in far-flung parts. Also, our team of healers provide moral support and coping therapies to empower people who have been affected by medical negligence in their lives. We motivate and change their lives in a better way. Good change for a good cause.',
    ],
  },
  {
    slug: 'insurance-companies',
    icon: 'IconUsers',
    title: 'Insurance Companies',
    shortDesc: "The health insurance companies undertake a guarantee of compensation for medical expenses in case the insured falls ill or meets with an accident which leads to hospitalization of the insured.",
    capabilities: ['Patient demographic entry', 'Insurance verification process', 'Charge entry services', 'Claims transmission', 'Accounts receivable and denial management service'],
    quotes: [
      "Insurance companies don't predict the future, but they surely do protect it",
      'Insurance is a right not privilege',
    ],
    body: [
      'The health insurance companies undertake a guarantee of compensation for medical expenses in case the insured falls ill or meets with an accident which leads to hospitalization of the insured.',
      'We provide our services to insurance companies to reduce their peer pressure in handling large sum of cases in quick turn around time and reducing errors in claims, faster payments to suffered clients and optimization of revenue.',
    ],
  },
  {
    slug: 'pharma-medical-device-companies',
    icon: 'IconFlask',
    title: 'Pharma / Medical Device Companies',
    shortDesc: 'Pharmaceutical companies are playing a role of healing life altering and devastating diseases and helping the patients to recover and lead productive lives.',
    capabilities: ['Clinical Trials Management System', 'Pharmacovigilance operations/consulting', 'Specialist support services', 'Regulatory affairs', 'Product Life Cycle Management'],
    body: [
      'Pharmaceutical companies are playing a role of healing life altering and devastating diseases and helping the patients to recover and lead productive lives.',
      'The medical device industry makes enormous number of products which play a crucial role in developing new medical technologies that can improve the ability to diagnose and treat illness.',
      'Pharmaceutical and medical devices companies are looking to improve medical care, increase performance and efficiency, and bring down costs through increasingly innovative technology.',
      'We help pharmaceutical and medical devices companies to identify and respond to drug safety issues. We are involved in varying degree in all the phases of clinical trials and identify possible rare but serious ADRs and possible actions to prevent the negative impact. We collect, accumulate, analyze and communicate the data for sustainable ethical healthcare.',
    ],
  },
  {
    slug: 'technology-software-solutions',
    icon: 'IconLayers',
    title: 'Technology & Software Solutions',
    shortDesc: 'Healthcare software development, product development, and solution development capabilities spanning EHR integration, remote patient monitoring, and analytics.',
    capabilities: ['Healthcare software development', 'Healthcare product development', 'Healthcare solution development', 'EHR development & integration', 'Remote patient monitoring', 'Healthcare payment systems', 'Healthcare cloud solutions', 'RPA', 'Big data analytics', 'AI & ML'],
    body: [
      'A healthcare provider is any facility or practice where you receive and are billed for a product or service related to your personal health.',
      'Healthcare providers include hospitals, private clinics, and pharmacies as well as specialized care providers like nursing homes, in-home caretakers, and chiropractors.',
      'We help the healthcare providers to initiate good documentation process, methodologies & tools for adhering to standard operating protocols to provide ethical healthcare in far-flung parts. Also, our team of healers provide moral support and coping therapies to empower people who have been affected by medical negligence in their lives. We motivate and change their lives in a better way. Good change for a good cause.',
    ],
  },
]

// About Us — What We Believe (#believe)
export const values = [
  { title: 'Innovation', desc: 'We are always looking for new ways to use technology to improve healthcare.' },
  { title: 'Quality', desc: 'We are committed to providing our clients with high-quality services.' },
  { title: 'Collaboration', desc: 'We believe that working together is the best way to achieve our goals.' },
  { title: 'Integrity', desc: 'We are committed to acting with honesty and transparency.' },
  { title: 'Respect', desc: 'We value the diversity of our employees and clients.' },
]

export const principles = [
  'Put the people first',
  'Be customer-focused',
  'Be innovative',
  'Be collaborative',
  'Be accountable',
]

// About Us — What We Ensure (#ensure)
export const ensure = [
  { icon: 'IconShield', title: 'Secure Portal', desc: 'A secure portal for handling sensitive healthcare data and documents.' },
  { icon: 'IconLayers', title: 'Technology Driven', desc: 'Technology-driven systems built to keep pace with a modern healthcare ecosystem.' },
  { icon: 'IconCheck', title: 'Process Efficiency', desc: 'Documented processes engineered for efficiency across every engagement.' },
  { icon: 'IconClipboard', title: 'Quality, Technical & Administrative Safeguards', desc: 'Layered safeguards protecting the quality and integrity of every deliverable.' },
  { icon: 'IconGlobe', title: 'GDPR Compliant', desc: 'Data handling practices aligned to GDPR compliance requirements.' },
]

// Medzian Community
export const communityPillars = [
  { title: 'Volunteer participation', desc: 'We encourage our team members to volunteer their time and skills to help plan and execute community activities. This promotes a sense of ownership and involvement among community members.' },
  { title: 'Recognition and Rewards', desc: 'Acknowledge and reward active participation and contributions from community members. This could include certificates, public recognition, or other forms of appreciation.' },
  { title: 'Activities and Events', desc: 'At Medzinity, we plan a variety of activities and events that align with the community’s purpose and goals. These could include workshops, seminars, fitness classes, charity initiatives, team-building outings, and social gatherings.' },
  { title: 'Feedback and Adaptation', desc: 'We regularly seek feedback from community members to gauge their satisfaction and gather ideas for improvement. Be open to making changes based on the feedback received.' },
  { title: 'Legal and Ethical Considerations', desc: 'Ensure that the community’s activities align with company policies, legal requirements, and ethical standards.' },
]

export const communityActivities = [
  'Wellness Workshops', 'Lunch and learn sessions', 'Walkathon', 'Book club & podcasts',
  'Volunteer & Charity Initiatives', 'Skill sharing workshops', 'Innovation Brainstorms',
  'Career development seminars', 'Team building activities', 'Cultural celebrations',
  'Individual Development programs', 'Sports and fitness',
]

// Insights — real posts, linking out to their live medzinity.com URLs
export const insights = [
  {
    title: 'What Is Medical Records Processing and Why It Matters for Healthcare Providers',
    author: 'medzinity',
    date: 'Apr 16, 2026',
    category: 'Insights',
    excerpt: "In today's increasingly complex healthcare ecosystem, the volume and variety of patient data can be overwhelming. From physician notes and lab results to imaging reports and discharge summaries, healthcare providers are inundated with records that must be…",
    url: 'https://medzinity.com/medical-records-processing/',
  },
  {
    title: 'From Reactive Care to Preventive Care – It Starts With Awareness',
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
    title: 'Medical Records Are Not Just Documents – They Are Decision Tools',
    author: 'Medzians',
    date: 'Mar 26, 2026',
    category: 'Info',
    excerpt: 'Most people treat medical records as something to store away. But in reality, they are a timeline, a pattern tracker, a decision-making tool.',
    url: 'https://medzinity.com/medical-records-are-not-just-documents-they-are-decision-tools/',
  },
  {
    title: "The Most Powerful Tool in Diagnosis Isn't Technology – It's Your Story",
    author: 'Medzians',
    date: 'Mar 26, 2026',
    category: 'Info',
    excerpt: 'Nearly 70–80% of diagnosis is guided by patient history.',
    url: 'https://medzinity.com/the-most-powerful-tool-in-diagnosis-isnt-technology-its-your-story/',
  },
]

export const cta = {
  title: 'Take the First Step!',
  subtitle: 'Schedule a Free Discovery Call today to understand us better.',
  body: 'Our company is dedicated to revolutionizing the healthcare industry by developing innovative solutions that address the complex challenges. Through a combination of cutting-edge technologies, data-driven insights, and strategic collaborations, we aim to provide innovative solutions.',
  primaryLabel: 'Book Now',
  primaryTo: '/contact-us',
  secondaryLabel: 'Contact Us',
  secondaryTo: '/contact-us',
}
