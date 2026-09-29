export const copy = {
  en: {
    nav: ['Work', 'Experience', 'Capabilities', 'Contact'],
    availability: 'Open to selected opportunities',
    heroKicker: 'FIG 0.1 / FULL-STACK DEVELOPER',
    heroTitle: { before: 'Interfaces with intention. ', accent: 'Systems', after: ' built', ending: 'to last' },
    heroText: 'John Marques is a full-stack developer with 5 years of experience building fast web products, robust APIs and thoughtful user experiences.',
    viewWork: 'View selected work',
    contact: 'Start a conversation',
    expertise: 'Selected capabilities',
    projects: 'Selected work',
    projectsText: 'A selection of studies in product interface, backend architecture and real-time systems.',
    experience: 'Professional path',
    experienceText: 'Five years translating product needs into resilient web experiences.',
    capabilities: 'Working across the product',
    capabilitiesText: 'I bring frontend craft and backend discipline to the same table.',
    contactTitle: 'Let’s build something clear, useful and memorable.',
    contactText: 'Available for full-stack roles and meaningful web product work.',
    viewProject: 'View repository',
    footer: 'Designed and developed by John Marques.'
  },
  pt: {
    nav: ['Projetos', 'Experiência', 'Capacidades', 'Contato'],
    availability: 'Disponível para oportunidades selecionadas',
    heroKicker: 'FIG 0.1 / DESENVOLVEDOR FULL-STACK',
    heroTitle: { before: 'Interfaces com intenção. ', accent: 'Sistemas', after: ' feitos', ending: 'para durar' },
    heroText: 'John Marques é um desenvolvedor full-stack com 5 anos de experiência criando produtos web rápidos, APIs robustas e experiências de uso bem pensadas.',
    viewWork: 'Ver projetos selecionados',
    contact: 'Iniciar uma conversa',
    expertise: 'Capacidades selecionadas',
    projects: 'Projetos selecionados',
    projectsText: 'Uma seleção de estudos em interface de produto, arquitetura de backend e sistemas em tempo real.',
    experience: 'Trajetória profissional',
    experienceText: 'Cinco anos transformando necessidades de produto em experiências web resilientes.',
    capabilities: 'Atuação em todo o produto',
    capabilitiesText: 'Unindo cuidado no frontend e disciplina no backend em cada entrega.',
    contactTitle: 'Vamos construir algo claro, útil e memorável.',
    contactText: 'Disponível para posições full-stack e produtos web que tenham propósito.',
    viewProject: 'Ver repositório',
    footer: 'Design e desenvolvimento por John Marques.'
  }
} as const

export const projects = [
  {
    index: '01',
    title: { en: 'MyBlog', pt: 'MyBlog' },
    type: { en: 'Full-stack product', pt: 'Produto full-stack' },
    description: {
      en: 'A complete publishing platform combining a Vue 3 interface with an ASP.NET Core API, authentication and editorial workflows.',
      pt: 'Uma plataforma completa de publicação, combinando interface Vue 3, API ASP.NET Core, autenticação e fluxos editoriais.'
    },
    tags: ['Vue 3', 'TypeScript', 'ASP.NET Core', 'Tailwind'],
    url: 'https://github.com/John-Fry/MyBlog-Project',
    figure: 'layers'
  },
  {
    index: '02',
    title: { en: 'ForceTrack API', pt: 'ForceTrack API' },
    type: { en: 'Backend architecture', pt: 'Arquitetura de backend' },
    description: {
      en: 'An ASP.NET Core backend for assets, products and customers, with integrations for Force1, Google Maps, DocuSign and Microsoft Graph.',
      pt: 'Backend em ASP.NET Core para gestão de ativos, produtos e clientes, com integrações Force1, Google Maps, DocuSign e Microsoft Graph.'
    },
    tags: ['ASP.NET Core', '.NET 10', 'MongoDB', 'Docker Compose', 'HttpClientFactory', 'OpenAPI'],
    url: 'https://github.com/John-Fry/ForceTrack-API',
    figure: 'modules'
  },
  {
    index: '03',
    title: { en: 'Tic-Tac-Toe', pt: 'Jogo da Velha' },
    type: { en: 'Real-time systems study', pt: 'Estudo de sistemas em tempo real' },
    description: {
      en: 'A multiplayer take on a familiar game, exploring sockets, communication flow and state synchronization.',
      pt: 'Uma versão multiplayer de um jogo conhecido, explorando sockets, fluxo de comunicação e sincronização de estado.'
    },
    tags: ['Python', 'Pygame', 'Sockets', 'Multiplayer'],
    url: 'https://github.com/John-Fry/Jogo-Da-Velha',
    figure: 'tic-tac-toe'
  }
]

export const experience = [
  {
    period: { en: 'Jul 2026 — Present', pt: 'Jul 2026 — Atual' },
    duration: null,
    role: { en: 'Full-stack Developer', pt: 'Desenvolvedor full stack' },
    company: { en: 'Aliare', pt: 'Aliare' },
    context: { en: 'Full-time · Remote', pt: 'Tempo integral · Remoto' },
    note: {
      en: 'End-to-end delivery for an ERP, combining .NET Core services and Vue.js/Nuxt interfaces with TypeScript, with a focus on system integrations.',
      pt: 'Entregas de ponta a ponta para um ERP, unindo serviços em .NET Core e interfaces em Vue.js/Nuxt com TypeScript, com foco em integrações entre sistemas.'
    },
    highlights: {
      en: [
        'Build full-stack features with .NET Core (C#), Vue 2 and TypeScript.',
        'Integrate an ERP with an external AI support platform, including resilient fallback behavior.',
        'Write unit tests with xUnit and Moq; use Moq.AutoMock for dependency-heavy services.',
        'Configure Azure DevOps variables and pipelines for deployment across environments.',
        'Develop complex ERP finance screens with Nuxt 2, Vue 2, filters, hierarchical selectors and master-detail tables.',
        'Create validated file-based data import and export flows; work with REST/OData APIs and Git.'
      ],
      pt: [
        'Desenvolvimento full stack com .NET Core (C#), Vue 2 e TypeScript.',
        'Integração do ERP a uma plataforma externa de atendimento com IA, incluindo fallback resiliente.',
        'Testes unitários com xUnit e Moq; uso de Moq.AutoMock em serviços com muitas dependências.',
        'Configuração de variáveis e pipelines no Azure DevOps para deploy entre ambientes.',
        'Telas financeiras complexas de ERP com Nuxt 2, Vue 2, filtros, seletores hierárquicos e tabelas mestre-detalhe.',
        'Fluxos de importação e exportação por arquivo com validação; atuação com APIs REST/OData e Git.'
      ]
    },
    tags: ['.NET Core', 'C#', 'Vue 2', 'Nuxt 2', 'TypeScript', 'xUnit', 'Azure DevOps']
  },
  {
    period: { en: 'Apr 2022 — Jan 2026', pt: 'Abr 2022 — Jan 2026' },
    duration: { en: '3 yr 10 mo', pt: '3 anos e 10 meses' },
    role: { en: 'Software Developer', pt: 'Desenvolvedor de Software' },
    company: { en: 'Vsoft', pt: 'Vsoft' },
    context: { en: 'Full-time · Remote', pt: 'Tempo integral · Remoto' },
    note: {
      en: 'Developed and evolved web applications across frontend and backend, with an emphasis on quality, stability and continuous product improvement.',
      pt: 'Desenvolvimento e evolução de aplicações web no frontend e backend, com foco em qualidade, estabilidade e melhoria contínua do produto.'
    },
    highlights: {
      en: [
        'Build full-stack applications with ASP.NET/.NET Framework (C#), Vue 2/3 and TypeScript.',
        'Apply SOLID principles and layered architecture to improve decoupling and maintainability.',
        'Customize a facial-biometrics SDK for critical identity validation and image-capture flows.',
        'Build REST APIs and BFF layers; improve interface performance and rendering.',
        'Create automated tests with Jest and Vitest; monitor services with Datadog.',
        'Automate CI/CD with Azure DevOps Pipelines and contribute to Scrum code reviews and planning.'
      ],
      pt: [
        'Aplicações full stack com ASP.NET/.NET Framework (C#), Vue 2/3 e TypeScript.',
        'Aplicação de princípios SOLID e arquitetura em camadas para melhorar desacoplamento e manutenção.',
        'Customização de SDK de biometria facial para fluxos críticos de validação de identidade e captura de imagem.',
        'Construção de APIs REST e camadas BFF; otimização de performance e renderização de interfaces.',
        'Testes automatizados com Jest e Vitest; monitoramento de aplicações com Datadog.',
        'Automação de CI/CD com Azure DevOps Pipelines e participação em code reviews e planejamento Scrum.'
      ]
    },
    tags: ['C#', '.NET', 'Vue 2/3', 'TypeScript', 'Jest', 'Vitest', 'Azure DevOps', 'Datadog']
  },
  {
    period: { en: 'Mar 2022 — Sep 2022', pt: 'Mar 2022 — Set 2022' },
    duration: { en: '7 mo', pt: '7 meses' },
    role: { en: 'Mobile App Developer', pt: 'Desenvolvedor Mobile' },
    company: { en: 'Logistics company · Freelance', pt: 'Empresa de Logística · Freelancer' },
    context: { en: 'Remote', pt: 'Remoto' },
    note: {
      en: 'Helped deliver an MVP mobile app for the logistics sector, from initial project structure through its core features.',
      pt: 'Desenvolvimento de um aplicativo MVP para logística, da estruturação inicial do projeto à entrega das principais funcionalidades.'
    },
    highlights: {
      en: [
        'Implement usable, performant application screens and workflows.',
        'Integrate APIs to consume and send application data.',
        'Organize reusable components and support requirements definition with the client.',
        'Work with the client to refine requirements and validate the MVP’s core workflows.'
      ],
      pt: [
        'Implementação de interfaces e fluxos do aplicativo com foco em usabilidade e desempenho.',
        'Integração com APIs para consumo e envio de dados.',
        'Organização de componentes reutilizáveis e apoio à definição de requisitos com o cliente.',
        'Alinhamento de requisitos com o cliente e validação dos principais fluxos do MVP.'
      ]
    },
    tags: ['React Native', 'TypeScript', 'REST APIs']
  },
  {
    period: { en: 'Sep 2021 — Apr 2022', pt: 'Set 2021 — Abr 2022' },
    duration: { en: '8 mo', pt: '8 meses' },
    role: { en: 'Software Development Intern', pt: 'Estagiário de desenvolvimento' },
    company: { en: 'Unimed João Pessoa', pt: 'Unimed João Pessoa' },
    context: { en: 'João Pessoa, Paraíba · On-site', pt: 'João Pessoa, Paraíba · Presencial' },
    note: {
      en: 'Developed and maintained internal systems across backend, databases and web interfaces.',
      pt: 'Desenvolvimento e manutenção de sistemas internos, com atuação em backend, banco de dados e interfaces web.'
    },
    highlights: {
      en: [
        'Develop backend features with Java and Spring Boot; maintain PL/SQL procedures and queries.',
        'Work with Oracle SQL and support integrations between systems through APIs.',
        'Improve interfaces with Angular, JavaScript and jQuery.',
        'Create Selenium automations and investigate bugs in existing features.'
      ],
      pt: [
        'Desenvolvimento backend com Java e Spring Boot; manutenção de procedures e consultas PL/SQL.',
        'Atuação com Oracle SQL e apoio a integrações entre sistemas por APIs.',
        'Ajustes e melhorias de interfaces com Angular, JavaScript e jQuery.',
        'Criação de automações com Selenium e análise de bugs em funcionalidades existentes.'
      ]
    },
    tags: ['Java', 'Spring Boot', 'Oracle SQL', 'PL/SQL', 'Angular', 'Selenium']
  }
]

export const capabilities = [
  { figure: 'layers', label: 'FIG 0.2', title: { en: 'Frontend architecture', pt: 'Arquitetura de frontend' }, text: { en: 'Vue.js, Nuxt, TypeScript, component systems and accessible interfaces.', pt: 'Vue.js, Nuxt, TypeScript, sistemas de componentes e interfaces acessíveis.' } },
  { figure: 'modules', label: 'FIG 0.3', title: { en: 'API development', pt: 'Desenvolvimento de APIs' }, text: { en: 'ASP.NET Core, REST, integrations, databases and maintainable contracts.', pt: 'ASP.NET Core, REST, integrações, bancos de dados e contratos sustentáveis.' } },
  { figure: 'sequence', label: 'FIG 0.4', title: { en: 'Product delivery', pt: 'Entrega de produto' }, text: { en: 'Performance, detail-oriented UI, Git workflows and production support.', pt: 'Performance, UI orientada a detalhes, fluxos Git e suporte à produção.' } }
]
