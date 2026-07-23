import { Job, SkillCategory, Certification, Project, Language } from './types';

export const SUMMARY = "Christian is a Platform & DevSecOps Engineer with 5+ years securing and scaling cloud-native systems on GCP. He owns the DevSecOps toolchain across six business units of a multinational group, embedding SCA, SAST, and Veracode DAST as automated gates in GitLab CI/CD, and designs multi-tenant GKE platforms with Istio service mesh and Terraform-managed infrastructure. His current focus is securing AI agents and LLM pipelines — building Model Context Protocol (MCP) servers, red-teaming agentic AI systems against the OWASP LLM Top 10, and running self-hosted private LLM infrastructure. He brings an SRE mindset, turning recurring failures into permanent, automated fixes.";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Cloud Platforms",
    skills: ["GCP (Advanced)", "AWS (Intermediate)", "Cloud SQL", "Cloud Functions", "Cloud Run", "Pub/Sub", "S3", "Lambda", "AKS"]
  },
  {
    name: "Containerization & Orchestration",
    skills: ["Kubernetes", "GKE", "Docker", "Istio", "Microservices", "BFF Architectures"]
  },
  {
    name: "IaC & Automation",
    skills: ["Terraform", "Ansible", "Bash Scripting", "Python"]
  },
  {
    name: "CI/CD & DevSecOps",
    skills: ["GitLab CI/CD", "SCA", "SAST", "Veracode DAST", "Tenable", "GitOps", "Git"]
  },
  {
    name: "AI & LLM Security",
    skills: ["MCP Servers", "LLM Pipelines", "Agentic AI (CrewAI)", "OWASP LLM Top 10", "Prompt-Injection Testing", "RAG", "Ollama / Open WebUI"]
  },
  {
    name: "SRE & Reliability",
    skills: ["Site Reliability Engineering", "Incident Response", "Post-Incident Reviews", "Observability", "Automated Remediation"]
  },
  {
    name: "Networking & Security",
    skills: ["IAM", "OIDC", "Cloud Security", "VPC Networking", "Load Balancers", "API Gateway", "WAF"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Professional Cloud Security Engineer",
    issuer: "Google",
    year: "2024",
    logo: "/google-cloud-logo.svg"
  },
  {
    name: "Professional Cloud DevOps Engineer",
    issuer: "Google",
    year: "2023",
    logo: "/google-cloud-logo.svg"
  },
  {
    name: "Associate Cloud Engineer",
    issuer: "Google",
    year: "2022",
    logo: "/google-cloud-logo.svg"
  },
];

export const LANGUAGES: Language[] = [
  {
    language: "Spanish",
    proficiency: "Native",
    level: "Native"
  },
  {
    language: "English",
    proficiency: "Conversational",
    level: "B2"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "AI Agent Security Lab",
    category: "AI Security",
    description: "Containerized environment for testing agentic AI systems under adversarial conditions — multi-agent debugging pipelines (CrewAI) running against instrumented containers, with prompt-injection scenarios mapped to the OWASP LLM Top 10.",
    tech: ["CrewAI", "Docker", "OWASP LLM Top 10", "Python"],
    year: "2025"
  },
  {
    title: "MCP Server Development",
    category: "LLM Tooling",
    description: "Model Context Protocol servers that give LLM agents scoped access to real operational systems (container diagnostics, SQLite-backed RAG retrieval), applying least-privilege and tool-sandboxing principles.",
    tech: ["MCP", "Python", "RAG", "SQLite"],
    year: "2025"
  },
  {
    title: "Private LLM Infrastructure",
    category: "Self-Hosted AI",
    description: "Self-hosted inference stacks on GPU hardware (Ollama, Open WebUI, quantized models) with OIDC authentication, targeting organizations that can't send data to external APIs.",
    tech: ["Ollama", "Open WebUI", "OIDC", "GPU"],
    year: "2025"
  },
  {
    title: "Infrastructure Automation",
    category: "IaC & Cloud",
    description: "Terraform infrastructure automation for GCP and AWS, implementing modular and reusable code for scalable environments.",
    tech: ["Terraform", "GCP", "AWS", "HCL"],
    year: "2024"
  },
  {
    title: "Kubernetes & Microservices",
    category: "Orchestration",
    description: "Kubernetes cluster management and microservices deployment, utilizing Helm charts and GitOps practices for consistent delivery.",
    tech: ["Kubernetes", "GKE", "Helm", "ArgoCD"],
    year: "2023"
  },
  {
    title: "CI/CD Pipeline Architecture",
    category: "DevOps Automation",
    description: "Designed and implemented robust CI/CD pipelines with GitHub Actions and GitLab CI, integrating automated testing and security scans.",
    tech: ["GitLab CI", "GitHub Actions", "Docker", "Sonarqube"],
    year: "2023"
  },
  {
    title: "Observability Stack",
    category: "Monitoring",
    description: "Deployed comprehensive monitoring and observability solutions using Prometheus and Grafana to ensure system reliability and performance.",
    tech: ["Prometheus", "Grafana", "ELK Stack"],
    year: "2022"
  },
  {
    title: "Security Hardening",
    category: "DevSecOps",
    description: "Implemented security hardening and compliance automation, ensuring infrastructure meets industry standards (CIS Benchmarks).",
    tech: ["Tenable", "Veracode", "Vault", "WAF"],
    year: "2022"
  }
];

export const EXPERIENCE: Job[] = [
  {
    id: "zenta-2025",
    company: "ZENTA Group",
    role: "DevSecOps Engineer - Contractor",
    period: "January 2025 – Present",
    account: "CMPC - Chile · Remote",
    description: [
      "Own the DevSecOps toolchain across six business units of a multinational group, embedding SCA, SAST, and Veracode DAST as automated gates in GitLab CI/CD — from dependency scanning through authenticated runtime testing of production APIs.",
      "Design and operate multi-tenant GKE platforms with Istio service mesh and Terraform-managed infrastructure, supporting microservices and BFF architectures across development and production.",
      "Own GitLab CI/CD across a multi-project group: build reusable pipeline templates, manage variable scoping and runner configuration, and debug failures spanning image resolution, registry auth, and security-agent false positives.",
      "Lead post-incident reviews as an SRE practice, converting recurring failures into automated remediation and permanent fixes.",
      "Build automation and data pipelines in Python and Bash spanning GKE and serverless (Cloud Functions, Pub/Sub), integrating enterprise systems.",
      "Manage vulnerability assessments and remediation using Tenable for infrastructure and Veracode for application security."
    ],
    tech: ["GCP", "Gitlab", "Terraform", "Veracode", "Tenable", "Istio", "GKE", "Python"]
  },
  {
    id: "slope-it-2021",
    company: "SLOPE-IT",
    role: "DevOps Engineer - Part-time",
    period: "June 2021 – Present",
    location: "Ibarra, Ecuador · Remote",
    description: [
      "Personal engineering practice where I build and test the infrastructure patterns I later bring into production work.",
      "AI agent security lab: built a containerized environment for testing agentic AI systems under adversarial conditions — multi-agent debugging pipelines (CrewAI) with prompt-injection scenarios mapped to the OWASP LLM Top 10.",
      "MCP server development: design and ship Model Context Protocol servers that give LLM agents scoped access to operational systems, applying least-privilege and tool-sandboxing principles.",
      "Private LLM infrastructure: self-hosted inference stacks on GPU hardware (Ollama, Open WebUI, quantized models) with OIDC authentication.",
      "Publish DevOps and AI engineering content in Spanish for the LATAM developer community."
    ],
    tech: ["CrewAI", "MCP", "Ollama", "Docker", "Python", "RAG", "OIDC"]
  },

  {
    id: "zenta-2023",
    company: "ZENTA Group",
    role: "DevOps Engineer - Contractor",
    period: "May 2023 – January 2025",
    account: "CMPC - Chile",
    description: [
      "Provisioned scalable Cloud infrastructure using Terraform.",
      "Implemented Istio service mesh for traffic control and security.",
      "Integrated DevOps best practices and Gitlab CI/CD automation.",
      "Troubleshooted technical issues across application, GKE, and Istio layers."
    ],
    tech: ["GCP", "Gitlab", "Terraform", "Istio", "GKE", "Kubernetes"]
  },
  {
    id: "fid-2022",
    company: "ZENTA Group",
    role: "DevOps Engineer - Contractor",
    period: "Sep 2022 – May 2023",
    account: "FID_Seguros - Chile",
    description: [
      "Utilized Terraform to establish scalable infrastructures for rapid deployment.",
      "Set up and validated CI/CD pipelines to minimize downtime.",
      "Implemented governance automation with Terraform."
    ],
    tech: ["GCP", "Gitlab", "Terraform"]
  },
  {
    id: "epam-2022",
    company: "EPAM Systems",
    role: "System Engineer",
    period: "May 2022 – Jul 2022",
    location: "Bogota, Colombia",
    description: [
      "Designed, implemented and maintained GitOps cycles based on Immutable Infrastructure.",
      "Developed Continuous Deployment processes including test frameworks and static code analysis.",
      "Designed Configuration Management as Code tools."
    ],
    tech: ["GCP", "Gitlab", "Terraform"]
  },
  {
    id: "msp-2014",
    company: "Ministerio de Salud - Ecuador",
    role: "Analista de Redes y Comunicaciones",
    period: "Aug 2014 – May 2021",
    location: "Quito, Ecuador",
    description: [
      "Managed infrastructure for Ecuador's national public health network — 9 hospitals and 150 affiliated health units — covering data centers, virtualization (VMware), perimeter security (Fortinet), and Linux/Windows server estates.",
      "Led the ISO 27001 implementation across hospitals and health units, running the gap assessment and driving remediation of identified security findings.",
      "Designed and deployed the organization's first backup and disaster recovery program, extending data protection to all sites through automated Bash-based routines.",
      "Migrated production on-premises VMware workloads (public web platform, OwnCloud) to GCP Compute Engine — the organization's first move to public cloud."
    ],
    tech: ["GCP", "Linux", "VMware", "Fortinet", "ISO 27001"]
  }
];