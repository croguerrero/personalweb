import { Job, SkillCategory, Certification, Project, Language } from './types';

export const SUMMARY = "Christian has been working as a DevOps Engineer for 5 years, managing cloud infrastructure, automating deployment pipelines, and improving CI/CD processes. He specializes in cloud platforms like GCP and AWS, leveraging tools like Docker, Kubernetes, GitLab, Terraform, and Ansible to automate infrastructure and streamline deployment processes. He has creativity for problem solving and adaptation to work in different environments.";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Cloud Platforms",
    skills: ["GCP (Advanced)", "AWS (Intermediate)", "Cloud SQL", "Cloud Functions", "Cloud Run", "EC2", "S3", "Lambda", "AKS"]
  },
  {
    name: "Containerization & Orchestration",
    skills: ["Kubernetes", "GKE", "Docker", "Istio", "Microservices"]
  },
  {
    name: "IaC & Automation",
    skills: ["Terraform", "Ansible", "Bash Scripting", "Python"]
  },
  {
    name: "CI/CD & DevOps",
    skills: ["GitLab CI", "GitWorkflow", "DevSecOps", "GitOps", "Git"]
  },
  {
    name: "Networking & Security",
    skills: ["IAM", "Cloud Security", "VPC Networking", "Load Balancers", "API Gateway", "WAF"]
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
    account: "CMPC - Chile",
    description: [
      "Led the implementation of DevSecOps practices, integrating security scanning tools like Veracode and Tenable into CI/CD pipelines.",
      "Managed vulnerability assessments and remediation strategies using Tenable for infrastructure and Veracode for application security.",
      "Provisioned secure and scalable Cloud infrastructure using Terraform, ensuring compliance with security standards.",
      "Implemented Istio service mesh for zero-trust security, traffic management, and enhanced observability.",
      "Optimized Gitlab CI/CD pipelines to include automated security gates and compliance checks.",
      "Collaborated with development teams to promote a security-first mindset and secure coding practices."
    ],
    tech: ["GCP", "Gitlab", "Terraform", "Veracode", "Tenable", "Istio", "Cloud Run"]
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
    company: "DevOps Engineer – Contractor",
    role: "DevOps Engineer",
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
    company: "Health Public Minister",
    role: "Sys Admin – Cloud Engineer",
    period: "Aug 2014 – May 2021",
    location: "Quito, Ecuador",
    description: [
      "Sysadmin manager for public health service MSP, overseeing 9 hospitals and 150 affiliates.",
      "Migrated on-premises VM instances on VMware to GCP Compute Engine.",
      "Managed infrastructure (firewalls, web servers, mail servers) including Linux and Windows Server.",
      "Implemented ISO 27001 projects for closing security gaps."
    ],
    tech: ["GCP", "Linux", "VMware", "Networking"]
  }
];