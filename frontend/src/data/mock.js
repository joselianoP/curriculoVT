// Mock data para o portfólio - dados extraídos do CV do Joseliano

export const personalInfo = {
  name: "Joseliano Silva",
  title: "Líder Técnico e Desenvolvedor Full Stack",
  experience: "22+ anos de experiência",
  summary: "Líder Técnico e Desenvolvedor Full Stack com mais de 22 anos de experiência em desenvolvimento de software, arquitetura de sistemas e gestão de equipes. Ampla atuação em Java, .NET, Angular e Node.js, com foco em modernização de sistemas, migração tecnológica e otimização de performance.",
  location: "Rio de Janeiro, RJ",
  email: "joseliano.dev@email.com",
  phone: "+55 (21) 99999-9999",
  socialLinks: {
    linkedin: "https://linkedin.com/in/joseliano-silva",
    github: "https://github.com/joseliano",
    website: "https://joseliano.dev"
  },
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
};

export const experiences = [
  {
    id: 1,
    company: "Capgemini",
    position: "Especialista e Líder Técnico",
    client: "Bradesco Seguros",
    period: "Mai 2021 - Atual",
    duration: "3+ anos",
    location: "São Paulo, SP",
    description: "Liderança técnica na implementação e manutenção de sistemas, garantindo escalabilidade, performance e segurança. Otimização de APIs com redução de 60% no tempo de resposta.",
    responsibilities: [
      "Mentoria e suporte a novos desenvolvedores",
      "Modernização de sistemas legados implementando APIs REST",
      "Arquitetura e desenvolvimento da aplicação 'Dados Pagamento' em BFF",
      "Otimização de APIs reduzindo em 60% o tempo de resposta",
      "Gestão de projetos utilizando Scrum e Kanban"
    ],
    technologies: ["Java 11/21", "Spring Boot", "Angular 8-16", "Node.js", "AWS", "IBM WebSphere", "SQL Server", "DB2"]
  },
  {
    id: 2,
    company: "Spread Tecnologia",
    position: "Analista Desenvolvedor Java",
    client: "Caixa Econômica Federal",
    period: "Fev 2021 - Mai 2021",
    duration: "4 meses",
    location: "Brasília, DF",
    description: "Migração e modernização de aplicações, garantindo eficiência, escalabilidade e alinhamento com padrões de mercado.",
    responsibilities: [
      "Migração e modernização de aplicações",
      "Desenvolvimento de protótipos com Angular e APIs REST",
      "Proposição de melhorias no ciclo de desenvolvimento",
      "Colaboração com equipes de produto e negócio"
    ],
    technologies: ["Java 6-11", "Spring Boot", "Angular 8-12", "RESTful APIs", "Apache Tomcat"]
  },
  {
    id: 3,
    company: "Resource IT Solutions",
    position: "Analista Desenvolvedor e Líder Técnico",
    client: "Caixa Econômica, Oi e ANS",
    period: "Dez 2019 - Fev 2021",
    duration: "1 ano e 3 meses",
    location: "Rio de Janeiro, RJ",
    description: "Liderança técnica no projeto Bolsa Família, migrando Front-End para Angular e integrando com APIs REST.",
    responsibilities: [
      "Liderança na atualização do Front-End para Angular",
      "Revisão de código e programação em pares",
      "Homologação e validação de requisitos",
      "Comunicação estratégica com stakeholders"
    ],
    technologies: ["Java 6-11", "Angular 8-12", "Spring Boot", "Hibernate/JPA", "SonarQube", "Fortify"]
  },
  {
    id: 4,
    company: "Unimed Rio",
    position: "Analista Desenvolvedor",
    client: "Unimed Rio",
    period: "Mar 2019 - Dez 2019",
    duration: "10 meses",
    location: "Rio de Janeiro, RJ",
    description: "Desenvolvimento e sustentação de sistemas para Ouvidoria, Contact Center e SAC. Modernização de sistemas legados.",
    responsibilities: [
      "Modernização de sistemas ASP para C#.NET",
      "Implementação da comunicação TISS",
      "Desenvolvimento de aplicação para corretagem",
      "Migração tecnológica de sistemas legados"
    ],
    technologies: ["ASP.NET", "C#", "Angular", "SQL Server", "Oracle", ".NET Framework"]
  },
  {
    id: 5,
    company: "Global Web",
    position: "Analista Desenvolvedor e Líder Técnico",
    client: "Caixa Econômica Federal e Oi",
    period: "Set 2013 - Mai 2018",
    duration: "4 anos e 9 meses",
    location: "Rio de Janeiro, RJ",
    description: "Premiado em Brasília pelo trabalho no sistema SIURB. Redução de 80% do backlog de erros.",
    responsibilities: [
      "Migração de AngularJS para Angular 8 com microserviços",
      "Otimização de queries SQL com ganhos de performance",
      "Padronização do sistema SIURB tornando-o modelo nacional",
      "Desenvolvimento de sistemas SOV, SiVelox e OIVelox"
    ],
    technologies: ["Java", "Spring", "Angular", "MongoDB", "Oracle PL/SQL", "JBoss"]
  }
];

export const education = [
  {
    id: 1,
    institution: "Descomplica",
    degree: "Pós-graduação em Projetos de Cloud Computing",
    period: "2024",
    status: "Concluído",
    type: "Pós-graduação"
  },
  {
    id: 2,
    institution: "Estácio",
    degree: "MBA Gerenciamento de Projetos visão PMI",
    period: "2013",
    status: "Concluído",
    type: "MBA"
  },
  {
    id: 3,
    institution: "Unicarioca",
    degree: "Tecnologia da Informação",
    period: "2009",
    status: "Concluído",
    type: "Graduação"
  }
];

export const skills = {
  technical: [
    { name: "Java", level: 95, category: "Backend" },
    { name: "Spring Boot", level: 93, category: "Backend" },
    { name: "Angular", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: ".NET", level: 88, category: "Backend" },
    { name: "JavaScript/TypeScript", level: 90, category: "Frontend" },
    { name: "SQL Server", level: 92, category: "Database" },
    { name: "Oracle", level: 85, category: "Database" },
    { name: "AWS", level: 80, category: "Cloud" },
    { name: "Docker", level: 75, category: "DevOps" },
    { name: "Git/GitLab", level: 90, category: "Tools" },
    { name: "SonarQube", level: 85, category: "Quality" }
  ],
  soft: [
    { name: "Liderança Técnica", level: 95 },
    { name: "Mentoria", level: 90 },
    { name: "Gestão de Projetos", level: 88 },
    { name: "Comunicação", level: 85 },
    { name: "Resolução de Problemas", level: 93 },
    { name: "Trabalho em Equipe", level: 90 }
  ],
  languages: [
    { name: "Português", level: 100 },
    { name: "Inglês", level: 75 },
    { name: "Espanhol", level: 45 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Sistema Dados Pagamento - Bradesco Seguros",
    description: "Arquitetura e desenvolvimento de aplicação estruturada em BFF (Backend for Frontend), promovendo eficiência na comunicação entre front-end e back-end.",
    technologies: ["Java 21", "Spring Boot", "Angular 16", "AWS", "Microserviços"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    status: "Produção",
    period: "2023-2024",
    highlights: [
      "Redução de 60% no tempo de resposta das APIs",
      "Arquitetura BFF implementada",
      "Microserviços na AWS Cloud"
    ]
  },
  {
    id: 2,
    title: "Modernização Sistema Bolsa Família",
    description: "Liderança na migração de AngularJS para Angular 8+ com arquitetura baseada em microserviços para o programa social do governo federal.",
    technologies: ["Angular 8-12", "Java 11", "Spring Boot", "APIs REST"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    status: "Concluído",
    period: "2020-2021",
    highlights: [
      "Migração completa AngularJS para Angular",
      "Arquitetura microserviços implementada",
      "Melhoria significativa na performance"
    ]
  },
  {
    id: 3,
    title: "Sistema SIURB - Caixa Econômica Federal",
    description: "Padronização e melhoria do Sistema de Acompanhamento de Obras da Caixa, transformando-o em modelo de referência nacional. Premiado em Brasília.",
    technologies: ["Java", "Spring", "Angular", "Oracle", "PL/SQL"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    status: "Concluído",
    period: "2015-2018",
    highlights: [
      "Redução de 80% do backlog de erros",
      "Premiação em Brasília pelo projeto",
      "Tornou-se sistema modelo nacional"
    ]
  },
  {
    id: 4,
    title: "Sistemas Oi - SOV, SiVelox, OIVelox",
    description: "Desenvolvimento e padronização de sistemas críticos incluindo SOV (Viabilidade de Rede), com automação de processos e integração de dados.",
    technologies: ["Java", "Angular", "MongoDB", "Oracle", "APIs REST"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    status: "Concluído",
    period: "2016-2018",
    highlights: [
      "Automação de processos críticos",
      "Integração Oracle PL/SQL e MongoDB",
      "Otimização significativa de performance"
    ]
  }
];

export const achievements = [
  {
    id: 1,
    title: "Premiação Sistema SIURB",
    description: "Premiado em Brasília pelo trabalho excepcional no sistema SIURB da Caixa Econômica Federal",
    year: "2017",
    organization: "Caixa Econômica Federal"
  },
  {
    id: 2,
    title: "Redução 80% Backlog SIURB",
    description: "Liderou iniciativa que reduziu em 80% o backlog de erros do sistema SIURB",
    year: "2017",
    organization: "Global Web"
  },
  {
    id: 3,
    title: "Otimização APIs - 60% Performance",
    description: "Otimização de APIs resultando em 60% de redução no tempo de resposta",
    year: "2023",
    organization: "Capgemini"
  }
];

export const certifications = [
  {
    id: 1,
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2023",
    status: "Ativo"
  },
  {
    id: 2,
    name: "Scrum Master Certified",
    issuer: "Scrum Alliance",
    year: "2022",
    status: "Ativo"
  },
  {
    id: 3,
    name: "Oracle Certified Professional Java",
    issuer: "Oracle",
    year: "2021",
    status: "Ativo"
  }
];