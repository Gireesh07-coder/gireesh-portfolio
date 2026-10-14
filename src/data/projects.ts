export interface Project {
  id: string
  name: string
  category: string
  status?: string
  featured?: boolean
  artwork: 'eduhub' | 'brokerage' | 'smart-home' | 'shopping-analysis'
  summary: string
  technologies: string[]
  problem: string
  implementation: string
  overview: string
  architecture: string
  features: string
  contribution: string
  challenges: string
  repositoryUrl: string
  demoUrl: string
}

export const projects: Project[] = [
  {
    id: 'eduhub',
    name: 'EduHub — Student Learning Platform',
    category: 'DEPLOYED · EDUCATION',
    status: 'LIVE',
    featured: true,
    artwork: 'eduhub',
    summary: 'A live education platform presenting learning content and a public course catalog.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    problem: 'The deployed product is an education platform that introduces learning content and course discovery for students.',
    implementation: 'The public site loads HTML with separate CSS stylesheets and JavaScript assets. Its source repository was not available to inspect; Bootstrap and Firebase usage could not be confirmed.',
    overview: 'EduHub is deployed at eduhub-r3t1.onrender.com. The live landing page introduces the platform and displays learning content.',
    architecture: 'The source repository was not available, so application architecture and backend services have not been verified.',
    features: 'The live page visibly presents a course catalog and a newsletter signup form. Form submission, account flows, and course interactions have not been tested.',
    contribution: 'Personal contribution details have not yet been provided.',
    challenges: 'Project-specific engineering challenges have not yet been provided.',
    repositoryUrl: '',
    demoUrl: 'https://eduhub-r3t1.onrender.com/index.html',
  },
  {
    id: 'brokerage',
    name: 'Brokerage Simulator',
    category: 'IN PROGRESS',
    status: 'IN PROGRESS',
    artwork: 'brokerage',
    summary: 'Currently in progress. Project details and links will be added when the application is ready.',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL'],
    problem: 'Project problem statement to be added when the scope is finalized.',
    implementation: 'Implementation details will be added after the project is complete.',
    overview: 'This project is in progress.',
    architecture: 'Architecture details to be added.',
    features: 'Implemented features to be added after verification.',
    contribution: 'Contribution details to be added.',
    challenges: 'Engineering challenges to be added.',
    repositoryUrl: '',
    demoUrl: '',
  },
  {
    id: 'smart-home',
    name: 'Smart Home Services with Automation',
    category: 'IOT · SOFTWARE INTEGRATION',
    artwork: 'smart-home',
    summary: 'An exploration of connected home services using web technologies and IoT components.',
    technologies: ['MERN stack', 'ESP32', 'Blynk Cloud'],
    problem: 'Project problem statement needs to be verified against the project source.',
    implementation: 'Implementation details have not been verified against the project source.',
    overview: 'The project brings together a web application stack, an ESP32 device, and Blynk Cloud. Specific device behavior, automation rules, and architecture details need to be verified against the project source.',
    architecture: 'Add a verified software and IoT architecture overview.',
    features: 'Add verified automation workflows and supported features.',
    contribution: 'Add your specific contribution after confirming the project scope.',
    challenges: 'Add confirmed integration and engineering challenges.',
    repositoryUrl: '',
    demoUrl: '',
  },
  {
    id: 'shopping-analysis',
    name: 'Customer Shopping Behaviour Analysis',
    category: 'DATA ANALYSIS',
    artwork: 'shopping-analysis',
    summary: 'A data analysis project focused on customer shopping behaviour.',
    technologies: ['Data analysis'],
    problem: 'The analytical question and project scope need to be verified against the project source.',
    implementation: 'Dataset and analysis implementation have not been verified against the project source.',
    overview: 'The project topic is customer shopping behaviour analysis. Dataset details, preparation steps, analytical questions, visualizations, and findings are not yet verified.',
    architecture: 'Add the verified analysis workflow and data pipeline, if applicable.',
    features: 'Add verified data preparation and analysis steps.',
    contribution: 'Add your specific contribution after confirming the project scope.',
    challenges: 'Add confirmed analytical challenges and decisions.',
    repositoryUrl: '',
    demoUrl: '',
  },
]
