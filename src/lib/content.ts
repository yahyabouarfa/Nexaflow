export const site = {
  name: "NexaFlow Agent",
  email: "hello@nexaflow.ai",
  phone: "+1 (555) 012-8942",
  location: "Remote-first automation studio",
  logo: {
    useImage: true,
    imagePath: "/logo-transparent.png",
  },
};

export const localeOptions = [
  { code: "en", label: "English", shortLabel: "EN", dir: "ltr" },
  { code: "fr", label: "Francais", shortLabel: "FR", dir: "ltr" },
  { code: "ar", label: "العربية", shortLabel: "AR", dir: "rtl" },
] as const;

export const localizedContent = {
  en: {
    meta: {
      tagline: "AI agents that automate your business growth",
      description:
        "Custom AI agents for support, sales, lead qualification, booking, and workflow automation.",
    },
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    header: {
      cta: "Book a Free Demo",
      languageLabel: "Language",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    workflowDetailsCta: "View workflow",
    hero: {
      eyebrow: "AI automation for leads, support, booking, and CRM",
      headline:
        "We build AI agents that reply to leads, qualify customers, book calls, and update your CRM.",
      subtitle:
        "NexaFlow Agent connects your website, WhatsApp, Instagram, email, calendar, and CRM so repetitive customer conversations and follow-up run automatically, with human handoff when needed.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "View Pricing",
      outcomes: [
        "Capture every lead",
        "Answer FAQs instantly",
        "Book appointments",
        "Sync CRM updates",
      ],
    },
    dashboard: {
      title: "Nexa Agent Console",
      subtitle: "Live workflow health",
      status: "Online",
      workflowLabel: "Workflow",
      conversationLabel: "Lead conversation",
      leadMessage: "Can I book a consultation this week?",
      agentMessage:
        "Yes. I found two qualified slots and sent a calendar invite.",
      qualifiedIntent: "Qualified intent",
      replyTime: "Reply time",
      synced: "Synced",
      workflow: [
        "Lead captured",
        "Intent scored",
        "CRM updated",
        "Demo booked",
      ],
      tools: ["HubSpot", "Calendly", "Gmail"],
    },
    sections: {
      problem: {
        eyebrow: "The bottleneck",
        title:
          "Your business is losing time when leads, support, and follow-up depend on manual work.",
        description:
          "NexaFlow Agent replaces repetitive conversations and admin tasks with AI agents that answer, qualify, book, update, and escalate.",
      },
      services: {
        eyebrow: "What we automate",
        title: "AI agents for the work that slows growth every day.",
        description:
          "Each agent is built around a specific business job: responding to customers, qualifying buyers, booking meetings, updating tools, and reporting results.",
      },
      howItWorks: {
        eyebrow: "How it works",
        title: "From workflow map to production agent in a focused launch cycle.",
        description:
          "We keep the process simple, measurable, and grounded in the tools your team already uses.",
      },
      useCases: {
        eyebrow: "Use cases",
        title: "Automation playbooks for teams that live on conversations.",
        description:
          "NexaFlow Agent systems adapt to your audience, channel, and operating model instead of forcing a generic chatbot flow.",
      },
      integrations: {
        eyebrow: "Integrations",
        title: "Connect the apps your customers and team already trust.",
        description:
          "Start with the channels that matter most, then expand into richer CRM, payment, booking, and automation workflows.",
      },
      pricing: {
        eyebrow: "Pricing",
        title: "Clear plans for launching your first agents and scaling from there.",
        description:
          "Choose a focused starter workflow, a growth automation stack, or a custom enterprise build.",
      },
      results: {
        eyebrow: "Results",
        title:
          "Turn response speed and operational consistency into growth advantages.",
        description:
          "NexaFlow Agent keeps the routine work moving while your team spends more time on judgment, relationships, and strategy.",
      },
      testimonials: {
        eyebrow: "Testimonials",
        title: "Professional teams use NexaFlow Agent to remove friction from follow-up.",
        description:
          "A few representative examples of the outcomes automation-focused teams look for.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions teams ask before launching AI agents.",
        description:
          "Short answers on fit, setup, safety, integrations, and where humans stay in the loop.",
      },
    },
    problems: [
      {
        icon: "Clock3",
        title: "Manual work keeps piling up",
        description:
          "Teams lose hours moving information between inboxes, sheets, forms, and CRMs.",
      },
      {
        icon: "UserRoundX",
        title: "High-intent leads get missed",
        description:
          "Slow routing and inconsistent follow-up let ready buyers drift away before sales can respond.",
      },
      {
        icon: "MessagesSquare",
        title: "Customers wait too long",
        description:
          "Support queues grow overnight, on weekends, and whenever your team is focused elsewhere.",
      },
      {
        icon: "Workflow",
        title: "Tools are disconnected",
        description:
          "Your stack works, but the gaps between apps still demand too much manual coordination.",
      },
    ],
    features: [
      {
        icon: "Headphones",
        title: "AI Customer Support Agent",
        description:
          "Resolve common customer questions instantly while escalating nuanced cases to your team.",
      },
      {
        icon: "BadgeCheck",
        title: "AI Lead Qualification Agent",
        description:
          "Score, enrich, and route leads based on fit, urgency, budget, and buying intent.",
      },
      {
        icon: "Handshake",
        title: "AI Sales Assistant",
        description:
          "Answer product questions, recommend next steps, and keep prospects moving toward a decision.",
      },
      {
        icon: "CalendarClock",
        title: "AI Appointment Booking",
        description:
          "Book, reschedule, remind, and confirm meetings without manual back-and-forth.",
      },
      {
        icon: "Send",
        title: "AI Email & WhatsApp Automation",
        description:
          "Trigger personalized follow-ups across the channels your customers already use.",
      },
      {
        icon: "GitBranch",
        title: "AI Workflow Automation",
        description:
          "Turn repetitive operations into intelligent workflows with approvals, checks, and alerts.",
      },
      {
        icon: "DatabaseZap",
        title: "CRM Integration",
        description:
          "Sync conversations, lead status, tags, notes, and tasks with your existing customer system.",
      },
      {
        icon: "ChartSpline",
        title: "Analytics & Reporting",
        description:
          "Track automation volume, lead outcomes, response speed, and opportunities for improvement.",
      },
    ],
    steps: [
      {
        title: "Discover your workflow",
        description:
          "We map the bottlenecks, handoffs, tools, and rules behind your current process.",
      },
      {
        title: "Build your AI agent",
        description:
          "Your agent is designed around your offers, tone, knowledge base, and success criteria.",
      },
      {
        title: "Connect your tools",
        description:
          "We integrate the agent with your CRM, inbox, calendar, forms, chat, and automations.",
      },
      {
        title: "Launch, monitor, and improve",
        description:
          "Go live with clear metrics, quality checks, conversation review, and monthly optimization.",
      },
    ],
    useCases: [
      {
        icon: "ShoppingBag",
        title: "Ecommerce stores",
        description:
          "Automate order questions, product guidance, cart recovery, and post-purchase support.",
      },
      {
        icon: "Presentation",
        title: "Coaches and consultants",
        description:
          "Qualify applicants, answer program questions, and book the right discovery calls.",
      },
      {
        icon: "Building2",
        title: "Real estate agencies",
        description:
          "Capture buyer intent, schedule showings, route listings, and follow up automatically.",
      },
      {
        icon: "Store",
        title: "Local businesses",
        description:
          "Handle inquiries, reminders, reviews, bookings, and repeat customer follow-ups.",
      },
      {
        icon: "Wrench",
        title: "Service companies",
        description:
          "Collect job details, estimate urgency, dispatch requests, and keep clients informed.",
      },
      {
        icon: "GraduationCap",
        title: "Education and training",
        description:
          "Support students, qualify enrollments, answer FAQs, and automate course reminders.",
      },
    ],
    integrations: [
      "WhatsApp",
      "Instagram",
      "Gmail",
      "Google Sheets",
      "Notion",
      "Shopify",
      "WooCommerce",
      "Stripe",
      "Calendly",
      "HubSpot",
      "Zapier",
      "n8n",
    ],
    pricing: {
      monthly: "Monthly",
      yearly: "Yearly",
      perMonth: "/month",
      billedYearly: "Billed yearly",
      flexibleMonthly: "Flexible monthly plan",
      mostPopular: "Most Popular",
      custom: "Custom",
      plans: [
        {
          name: "Starter",
          monthlyPrice: 49,
          yearlyPrice: 39,
          description: "For lean teams starting with one focused automation.",
          features: [
            "1 AI agent",
            "Basic automation workflow",
            "Website chat widget",
            "Email support",
            "Monthly optimization",
          ],
          cta: "Start with Starter",
          highlighted: false,
        },
        {
          name: "Growth",
          monthlyPrice: 149,
          yearlyPrice: 119,
          description:
            "For growing teams that want sales, support, and CRM flow.",
          features: [
            "3 AI agents",
            "WhatsApp / Instagram automation",
            "CRM integration",
            "Lead qualification",
            "Analytics dashboard",
            "Priority support",
          ],
          cta: "Book a Growth Demo",
          highlighted: true,
        },
        {
          name: "Enterprise",
          monthlyPrice: null,
          yearlyPrice: null,
          description:
            "For advanced teams with complex workflows and compliance needs.",
          features: [
            "Unlimited workflows",
            "Custom integrations",
            "Advanced reporting",
            "Dedicated AI strategy",
            "Human handoff system",
            "SLA support",
          ],
          cta: "Contact Sales",
          highlighted: false,
        },
      ],
    },
    benefits: [
      { value: "10+ hrs", label: "saved per week" },
      { value: "Instant", label: "lead replies" },
      { value: "24/7", label: "automated coverage" },
      { value: "Fewer", label: "repetitive tasks" },
      { value: "Higher", label: "conversion intent" },
    ],
    testimonials: [
      {
        quote:
          "NexaFlow Agent helped us turn inbound inquiries into booked consultations without adding more admin work. The handoff to our team feels natural.",
        name: "Maya Chen",
        role: "Founder, Studio North",
      },
      {
        quote:
          "Our support response time improved in the first week. The agent handles common questions and gives our staff cleaner context when a person steps in.",
        name: "Daniel Brooks",
        role: "Operations Lead, Urban Retail Co.",
      },
      {
        quote:
          "The biggest win was connecting our forms, CRM, and calendar. Leads now move through the pipeline with fewer delays and less manual checking.",
        name: "Amira Patel",
        role: "Growth Manager, Learnwise",
      },
    ],
    faqs: [
      {
        question: "What is an AI agent?",
        answer:
          "An AI agent is a digital assistant that can understand requests, follow business rules, use your knowledge base, and take actions across connected tools.",
      },
      {
        question: "Can it work with my current tools?",
        answer:
          "Yes. NexaFlow Agent can connect with common CRMs, calendars, inboxes, spreadsheets, ecommerce platforms, automation tools, and chat channels.",
      },
      {
        question: "Is it safe?",
        answer:
          "We design agents with controlled permissions, clear escalation rules, review workflows, and guardrails for sensitive or high-risk conversations.",
      },
      {
        question: "Do I need technical knowledge?",
        answer:
          "No. We handle setup, integrations, testing, launch, and optimization. Your team only needs to share workflow details and approve key decisions.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Most focused agents can launch in 7 to 14 days. More advanced integrations or custom workflows may take longer depending on scope.",
      },
      {
        question: "Can a human take over conversations?",
        answer:
          "Yes. Agents can hand off to a person based on urgency, customer request, confidence level, or any rule you define.",
      },
      {
        question: "Can pricing be customized?",
        answer:
          "Yes. We can tailor pricing for advanced workflows, unusual integrations, higher conversation volume, or multi-team deployments.",
      },
    ],
    finalCta: {
      eyebrow: "Your next workflow can run itself",
      title: "Ready to automate your business?",
      description:
        "Start with one high-impact workflow, prove the value, then expand your AI operations layer across sales, support, and delivery.",
      primaryCta: "Book a Free Demo",
      secondaryCta: "Contact Us",
    },
    footer: {
      description:
        "Custom AI agents for support, sales, lead qualification, booking, and workflow automation.",
      quickLinksTitle: "Quick links",
      servicesTitle: "Services",
      socialTitle: "Social",
      copyright: "All rights reserved.",
      note: "Built for responsible automation and human-ready handoff.",
      links: {
        services: [
          { label: "Support Agents", href: "/services" },
          { label: "Lead Qualification", href: "/services" },
          { label: "Sales Automation", href: "/services" },
          { label: "Workflow Automation", href: "/services" },
        ],
        social: [
          { label: "LinkedIn", href: "#" },
          { label: "X", href: "#" },
          { label: "YouTube", href: "#" },
        ],
      },
    },
    mobileCta: "Book Demo",
  },
  fr: {
    meta: {
      tagline: "Des agents IA qui automatisent la croissance de votre entreprise",
      description:
        "Agents IA sur mesure pour le support, la vente, la qualification des leads, la prise de rendez-vous et l'automatisation des workflows.",
    },
    navLinks: [
      { label: "Accueil", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Fonctionnement", href: "/how-it-works" },
      { label: "Tarifs", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    header: {
      cta: "Reserver une demo",
      languageLabel: "Langue",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
    workflowDetailsCta: "Voir le workflow",
    hero: {
      eyebrow: "Automatisation IA pour leads, support, rendez-vous et CRM",
      headline:
        "Agents IA pour repondre aux leads, qualifier, reserver des rendez-vous et mettre a jour votre CRM.",
      subtitle:
        "NexaFlow Agent connecte votre site web, WhatsApp, Instagram, email, calendrier et CRM afin que les conversations repetitives et le suivi client tournent automatiquement, avec transfert humain si necessaire.",
      primaryCta: "Reserver une demo",
      secondaryCta: "Voir les tarifs",
      outcomes: [
        "Capturer chaque lead",
        "Repondre aux FAQ instantanement",
        "Prendre les rendez-vous",
        "Synchroniser le CRM",
      ],
    },
    dashboard: {
      title: "Console Nexa Agent",
      subtitle: "Sante du workflow en direct",
      status: "En ligne",
      workflowLabel: "Workflow",
      conversationLabel: "Conversation lead",
      leadMessage: "Puis-je reserver une consultation cette semaine ?",
      agentMessage:
        "Oui. J'ai trouve deux creneaux qualifies et envoye une invitation calendrier.",
      qualifiedIntent: "Intention qualifiee",
      replyTime: "Temps de reponse",
      synced: "Synchronise",
      workflow: [
        "Lead capture",
        "Intention notee",
        "CRM mis a jour",
        "Demo reservee",
      ],
      tools: ["HubSpot", "Calendly", "Gmail"],
    },
    sections: {
      problem: {
        eyebrow: "Le blocage",
        title:
          "Votre entreprise perd du temps quand les leads, le support et le suivi restent manuels.",
        description:
          "NexaFlow Agent remplace les conversations repetitives et les taches admin par des agents IA qui repondent, qualifient, reservent, mettent a jour et escaladent.",
      },
      services: {
        eyebrow: "Ce que nous automatisons",
        title: "Des agents IA pour les taches qui freinent la croissance.",
        description:
          "Chaque agent est construit pour un travail precis : repondre aux clients, qualifier les acheteurs, reserver des rendez-vous, mettre a jour les outils et suivre les resultats.",
      },
      howItWorks: {
        eyebrow: "Fonctionnement",
        title:
          "De la cartographie du workflow a un agent en production, en un cycle clair.",
        description:
          "Nous gardons le processus simple, mesurable et base sur les outils que votre equipe utilise deja.",
      },
      useCases: {
        eyebrow: "Cas d'usage",
        title: "Des automatisations pour les equipes qui vivent des conversations.",
        description:
          "NexaFlow Agent s'adapte a votre audience, vos canaux et votre mode operationnel.",
      },
      integrations: {
        eyebrow: "Integrations",
        title: "Connectez les apps que vos clients et votre equipe utilisent deja.",
        description:
          "Commencez par les canaux essentiels, puis etendez vers le CRM, les paiements, la prise de rendez-vous et les workflows avances.",
      },
      pricing: {
        eyebrow: "Tarifs",
        title: "Des offres claires pour lancer vos premiers agents et evoluer.",
        description:
          "Choisissez un workflow de depart, une stack de croissance ou une solution entreprise sur mesure.",
      },
      results: {
        eyebrow: "Resultats",
        title:
          "Transformez la vitesse de reponse et la regularite operationnelle en avantage de croissance.",
        description:
          "NexaFlow Agent garde les taches repetitives en mouvement pendant que votre equipe se concentre sur les decisions et les relations.",
      },
      testimonials: {
        eyebrow: "Temoignages",
        title:
          "Des equipes professionnelles utilisent NexaFlow Agent pour fluidifier leur suivi.",
        description:
          "Quelques exemples representatifs des resultats recherches par les equipes orientees automatisation.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions avant de lancer des agents IA.",
        description:
          "Reponses courtes sur l'adaptation, la mise en place, la securite, les integrations et le role des humains.",
      },
    },
    problems: [
      {
        icon: "Clock3",
        title: "Le travail manuel s'accumule",
        description:
          "Les equipes perdent des heures entre emails, formulaires, tableurs et CRM.",
      },
      {
        icon: "UserRoundX",
        title: "Des leads chauds sont manques",
        description:
          "Un suivi lent laisse des prospects prets a acheter partir avant que la vente reponde.",
      },
      {
        icon: "MessagesSquare",
        title: "Les clients attendent trop",
        description:
          "Les files de support grandissent la nuit, le week-end ou lorsque l'equipe est occupee.",
      },
      {
        icon: "Workflow",
        title: "Les outils ne communiquent pas",
        description:
          "Votre stack fonctionne, mais les ecarts entre les apps demandent encore trop de coordination manuelle.",
      },
    ],
    features: [
      {
        icon: "Headphones",
        title: "Agent IA de support client",
        description:
          "Resout les questions courantes instantanement et transfere les cas complexes a votre equipe.",
      },
      {
        icon: "BadgeCheck",
        title: "Agent IA de qualification leads",
        description:
          "Note, enrichit et route les leads selon le besoin, l'urgence, le budget et l'intention.",
      },
      {
        icon: "Handshake",
        title: "Assistant IA de vente",
        description:
          "Repond aux questions produit, recommande les prochaines etapes et aide les prospects a avancer.",
      },
      {
        icon: "CalendarClock",
        title: "Prise de rendez-vous IA",
        description:
          "Reserve, deplace, rappelle et confirme les rendez-vous sans aller-retour manuel.",
      },
      {
        icon: "Send",
        title: "Automatisation email & WhatsApp",
        description:
          "Declenche des suivis personnalises sur les canaux que vos clients utilisent deja.",
      },
      {
        icon: "GitBranch",
        title: "Automatisation de workflow IA",
        description:
          "Transforme les operations repetitives en workflows intelligents avec validations et alertes.",
      },
      {
        icon: "DatabaseZap",
        title: "Integration CRM",
        description:
          "Synchronise conversations, statuts, tags, notes et taches avec votre systeme client.",
      },
      {
        icon: "ChartSpline",
        title: "Analytics & reporting",
        description:
          "Suit le volume d'automatisation, les resultats leads, la vitesse de reponse et les optimisations.",
      },
    ],
    steps: [
      {
        title: "Decouvrir votre workflow",
        description:
          "Nous cartographions les blocages, les transferts, les outils et les regles de votre processus.",
      },
      {
        title: "Construire votre agent IA",
        description:
          "Votre agent est concu autour de vos offres, votre ton, votre base de connaissance et vos objectifs.",
      },
      {
        title: "Connecter vos outils",
        description:
          "Nous integrons l'agent avec CRM, email, calendrier, formulaires, chat et automatisations.",
      },
      {
        title: "Lancer, suivre et ameliorer",
        description:
          "Mise en ligne avec metriques, controles qualite, revue des conversations et optimisation mensuelle.",
      },
    ],
    useCases: [
      {
        icon: "ShoppingBag",
        title: "Boutiques ecommerce",
        description:
          "Automatisez questions commandes, conseil produit, recuperation panier et support apres achat.",
      },
      {
        icon: "Presentation",
        title: "Coachs et consultants",
        description:
          "Qualifiez les candidats, repondez aux questions et reservez les bons appels decouverte.",
      },
      {
        icon: "Building2",
        title: "Agences immobilieres",
        description:
          "Capturez l'intention acheteur, planifiez les visites, routez les biens et relancez automatiquement.",
      },
      {
        icon: "Store",
        title: "Entreprises locales",
        description:
          "Gerez demandes, rappels, avis, reservations et suivis clients recurrents.",
      },
      {
        icon: "Wrench",
        title: "Societes de service",
        description:
          "Collectez les details, estimez l'urgence, dispatchiez les demandes et informez les clients.",
      },
      {
        icon: "GraduationCap",
        title: "Education et formation",
        description:
          "Supportez les apprenants, qualifiez les inscriptions, repondez aux FAQ et automatisez les rappels.",
      },
    ],
    integrations: [
      "WhatsApp",
      "Instagram",
      "Gmail",
      "Google Sheets",
      "Notion",
      "Shopify",
      "WooCommerce",
      "Stripe",
      "Calendly",
      "HubSpot",
      "Zapier",
      "n8n",
    ],
    pricing: {
      monthly: "Mensuel",
      yearly: "Annuel",
      perMonth: "/mois",
      billedYearly: "Facture annuellement",
      flexibleMonthly: "Plan mensuel flexible",
      mostPopular: "Le plus choisi",
      custom: "Sur mesure",
      plans: [
        {
          name: "Starter",
          monthlyPrice: 49,
          yearlyPrice: 39,
          description: "Pour commencer avec une automatisation precise.",
          features: [
            "1 agent IA",
            "Workflow d'automatisation basique",
            "Widget chat pour site web",
            "Support email",
            "Optimisation mensuelle",
          ],
          cta: "Commencer Starter",
          highlighted: false,
        },
        {
          name: "Growth",
          monthlyPrice: 149,
          yearlyPrice: 119,
          description:
            "Pour les equipes qui veulent ventes, support et CRM connectes.",
          features: [
            "3 agents IA",
            "Automatisation WhatsApp / Instagram",
            "Integration CRM",
            "Qualification leads",
            "Dashboard analytics",
            "Support prioritaire",
          ],
          cta: "Reserver une demo Growth",
          highlighted: true,
        },
        {
          name: "Enterprise",
          monthlyPrice: null,
          yearlyPrice: null,
          description:
            "Pour les workflows avances, integrations complexes et besoins specifiques.",
          features: [
            "Workflows illimites",
            "Integrations sur mesure",
            "Reporting avance",
            "Strategie IA dediee",
            "Systeme de transfert humain",
            "Support SLA",
          ],
          cta: "Contacter l'equipe",
          highlighted: false,
        },
      ],
    },
    benefits: [
      { value: "10+ h", label: "gagnees par semaine" },
      { value: "Instant", label: "reponse aux leads" },
      { value: "24/7", label: "couverture automatisee" },
      { value: "Moins", label: "de taches repetitives" },
      { value: "Plus", label: "d'intention convertie" },
    ],
    testimonials: [
      {
        quote:
          "NexaFlow Agent nous a aide a transformer les demandes entrantes en consultations reservees sans ajouter d'admin. Le transfert a l'equipe est naturel.",
        name: "Maya Chen",
        role: "Fondatrice, Studio North",
      },
      {
        quote:
          "Notre temps de reponse support s'est ameliore des la premiere semaine. L'agent gere les questions courantes et donne un meilleur contexte a l'equipe.",
        name: "Daniel Brooks",
        role: "Responsable operations, Urban Retail Co.",
      },
      {
        quote:
          "Le plus gros gain a ete la connexion entre formulaires, CRM et calendrier. Les leads avancent avec moins de delais et moins de verification manuelle.",
        name: "Amira Patel",
        role: "Growth Manager, Learnwise",
      },
    ],
    faqs: [
      {
        question: "Qu'est-ce qu'un agent IA ?",
        answer:
          "Un agent IA est un assistant digital capable de comprendre les demandes, suivre vos regles metier, utiliser votre base de connaissance et agir dans vos outils.",
      },
      {
        question: "Peut-il fonctionner avec mes outils actuels ?",
        answer:
          "Oui. NexaFlow Agent peut se connecter aux CRM, calendriers, emails, tableurs, plateformes ecommerce, outils d'automatisation et canaux de chat.",
      },
      {
        question: "Est-ce securise ?",
        answer:
          "Nous creons des agents avec permissions limitees, regles d'escalade, workflows de revue et garde-fous pour les conversations sensibles.",
      },
      {
        question: "Faut-il des connaissances techniques ?",
        answer:
          "Non. Nous gerons la mise en place, les integrations, les tests, le lancement et l'optimisation.",
      },
      {
        question: "Combien de temps prend la mise en place ?",
        answer:
          "La plupart des agents cibles peuvent etre lances en 7 a 14 jours. Les integrations avancees peuvent demander plus de temps.",
      },
      {
        question: "Un humain peut-il reprendre une conversation ?",
        answer:
          "Oui. L'agent peut transferer a une personne selon l'urgence, la demande client, le niveau de confiance ou vos regles.",
      },
      {
        question: "Les tarifs peuvent-ils etre personnalises ?",
        answer:
          "Oui. Nous adaptons les tarifs selon les workflows, integrations, volumes de conversations ou deploiements multi-equipes.",
      },
    ],
    finalCta: {
      eyebrow: "Votre prochain workflow peut tourner seul",
      title: "Pret a automatiser votre entreprise ?",
      description:
        "Commencez par un workflow a fort impact, prouvez la valeur, puis etendez votre couche IA aux ventes, au support et aux operations.",
      primaryCta: "Reserver une demo",
      secondaryCta: "Nous contacter",
    },
    footer: {
      description:
        "Agents IA sur mesure pour support, ventes, qualification leads, rendez-vous et automatisation de workflow.",
      quickLinksTitle: "Liens rapides",
      servicesTitle: "Services",
      socialTitle: "Social",
      copyright: "Tous droits reserves.",
      note: "Concu pour une automatisation responsable et un transfert humain clair.",
      links: {
        services: [
          { label: "Agents support", href: "/services" },
          { label: "Qualification leads", href: "/services" },
          { label: "Automatisation ventes", href: "/services" },
          { label: "Automatisation workflow", href: "/services" },
        ],
        social: [
          { label: "LinkedIn", href: "#" },
          { label: "X", href: "#" },
          { label: "YouTube", href: "#" },
        ],
      },
    },
    mobileCta: "Demo",
  },
  ar: {
    meta: {
      tagline: "وكلاء ذكاء اصطناعي لأتمتة نمو عملك",
      description:
        "وكلاء ذكاء اصطناعي مخصصون للدعم والمبيعات وتأهيل العملاء وحجز المواعيد وأتمتة سير العمل.",
    },
    navLinks: [
      { label: "الرئيسية", href: "/" },
      { label: "الخدمات", href: "/services" },
      { label: "كيف نعمل", href: "/how-it-works" },
      { label: "الأسعار", href: "/pricing" },
      { label: "الأسئلة", href: "/faq" },
      { label: "تواصل", href: "/contact" },
    ],
    header: {
      cta: "احجز عرضا مجانيا",
      languageLabel: "اللغة",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },
    workflowDetailsCta: "ØªÙØ§ØµÙŠÙ„ Ø³ÙŠØ± Ø§Ù„Ø¹Ù…Ù„",
    hero: {
      eyebrow: "أتمتة ذكية للعملاء والدعم والحجز و CRM",
      headline:
        "وكلاء IA يردون على العملاء، يؤهلون الفرص، يحجزون المواعيد، ويحدثون CRM.",
      subtitle:
        "NexaFlow Agent يربط موقعك وواتساب وإنستغرام والبريد والتقويم و CRM حتى تعمل المحادثات المتكررة والمتابعة تلقائيا، مع تحويل سلس للإنسان عند الحاجة.",
      primaryCta: "احجز عرضا مجانيا",
      secondaryCta: "شاهد الأسعار",
      outcomes: [
        "التقاط كل عميل محتمل",
        "رد فوري على الأسئلة",
        "حجز المواعيد",
        "تحديث CRM تلقائيا",
      ],
    },
    dashboard: {
      title: "لوحة وكيل Nexa",
      subtitle: "حالة سير العمل مباشرة",
      status: "متصل",
      workflowLabel: "سير العمل",
      conversationLabel: "محادثة عميل",
      leadMessage: "هل يمكنني حجز استشارة هذا الأسبوع؟",
      agentMessage: "نعم. وجدت موعدين مناسبين وأرسلت دعوة في التقويم.",
      qualifiedIntent: "نية مؤهلة",
      replyTime: "وقت الرد",
      synced: "تمت المزامنة",
      workflow: ["تم التقاط العميل", "تم تقييم النية", "تم تحديث CRM", "تم حجز العرض"],
      tools: ["HubSpot", "Calendly", "Gmail"],
    },
    sections: {
      problem: {
        eyebrow: "المشكلة",
        title:
          "عملك يخسر وقتا عندما يعتمد العملاء والدعم والمتابعة على العمل اليدوي.",
        description:
          "NexaFlow Agent يستبدل المحادثات المتكررة والمهام الإدارية بوكلاء يردون ويؤهلون ويحجزون ويحدثون الأدوات ويصعدون الحالات المهمة.",
      },
      services: {
        eyebrow: "ماذا نؤتمت",
        title: "وكلاء ذكاء اصطناعي للمهام التي تبطئ النمو يوميا.",
        description:
          "كل وكيل مبني لمهمة محددة: الرد على العملاء، تأهيل المشترين، حجز المواعيد، تحديث الأدوات وقياس النتائج.",
      },
      howItWorks: {
        eyebrow: "كيف نعمل",
        title: "من فهم سير العمل إلى وكيل جاهز للإطلاق في دورة واضحة.",
        description:
          "نحافظ على العملية بسيطة وقابلة للقياس ومبنية على الأدوات التي يستخدمها فريقك بالفعل.",
      },
      useCases: {
        eyebrow: "حالات الاستخدام",
        title: "أتمتة للفرق التي تعتمد على المحادثات.",
        description:
          "NexaFlow Agent يتكيف مع جمهورك وقنواتك وطريقة عملك بدلا من فرض تدفق عام.",
      },
      integrations: {
        eyebrow: "التكاملات",
        title: "اربط التطبيقات التي يثق بها عملاؤك وفريقك.",
        description:
          "ابدأ بالقنوات الأهم ثم توسع إلى CRM والدفع والحجز وسير العمل المتقدم.",
      },
      pricing: {
        eyebrow: "الأسعار",
        title: "خطط واضحة لإطلاق أول وكلاء ذكاء اصطناعي ثم التوسع.",
        description:
          "اختر سير عمل محددا، أو حزمة نمو، أو بناء مخصص للمؤسسات.",
      },
      results: {
        eyebrow: "النتائج",
        title: "حول سرعة الرد وانتظام العمليات إلى ميزة نمو.",
        description:
          "NexaFlow Agent يحرك العمل المتكرر بينما يركز فريقك على القرارات والعلاقات.",
      },
      testimonials: {
        eyebrow: "آراء العملاء",
        title: "فرق محترفة تستخدم NexaFlow Agent لتقليل الاحتكاك في المتابعة.",
        description:
          "أمثلة واقعية للنتائج التي تبحث عنها الفرق التي تريد الأتمتة.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "أسئلة قبل إطلاق وكلاء الذكاء الاصطناعي.",
        description:
          "إجابات قصيرة حول الملاءمة والإعداد والأمان والتكاملات ودور الإنسان.",
      },
    },
    problems: [
      {
        icon: "Clock3",
        title: "العمل اليدوي يتراكم",
        description:
          "تضيع الفرق ساعات بين البريد والنماذج والجداول و CRM.",
      },
      {
        icon: "UserRoundX",
        title: "فرص جاهزة تضيع",
        description:
          "التوجيه البطيء والمتابعة غير المنتظمة تجعل المشترين يغادرون قبل رد المبيعات.",
      },
      {
        icon: "MessagesSquare",
        title: "العملاء ينتظرون كثيرا",
        description:
          "طوابير الدعم تكبر ليلا وفي عطلة الأسبوع وعندما ينشغل الفريق.",
      },
      {
        icon: "Workflow",
        title: "الأدوات غير متصلة",
        description:
          "أدواتك تعمل، لكن الفجوات بينها ما زالت تحتاج إلى تنسيق يدوي.",
      },
    ],
    features: [
      {
        icon: "Headphones",
        title: "وكيل دعم عملاء IA",
        description:
          "يرد على الأسئلة الشائعة فورا ويحول الحالات المعقدة إلى فريقك.",
      },
      {
        icon: "BadgeCheck",
        title: "وكيل تأهيل العملاء",
        description:
          "يقيم العملاء ويثري بياناتهم ويوجههم حسب الملاءمة والميزانية والنية.",
      },
      {
        icon: "Handshake",
        title: "مساعد مبيعات IA",
        description:
          "يجيب عن أسئلة المنتج ويقترح الخطوة التالية ويدفع العميل نحو القرار.",
      },
      {
        icon: "CalendarClock",
        title: "حجز مواعيد IA",
        description:
          "يحجز ويعيد جدولة المواعيد ويرسل التذكيرات والتأكيدات دون متابعة يدوية.",
      },
      {
        icon: "Send",
        title: "أتمتة البريد وواتساب",
        description:
          "يطلق متابعات مخصصة عبر القنوات التي يستخدمها عملاؤك.",
      },
      {
        icon: "GitBranch",
        title: "أتمتة سير العمل",
        description:
          "يحول العمليات المتكررة إلى workflows ذكية مع موافقات وتنبيهات.",
      },
      {
        icon: "DatabaseZap",
        title: "تكامل CRM",
        description:
          "يزامن المحادثات والحالات والوسوم والملاحظات والمهام مع نظام العملاء.",
      },
      {
        icon: "ChartSpline",
        title: "التحليلات والتقارير",
        description:
          "يتابع حجم الأتمتة ونتائج العملاء وسرعة الرد وفرص التحسين.",
      },
    ],
    steps: [
      {
        title: "نفهم سير عملك",
        description:
          "نرسم الاختناقات والتحويلات والأدوات والقواعد داخل عمليتك الحالية.",
      },
      {
        title: "نبني وكيلك الذكي",
        description:
          "يصمم الوكيل حول عروضك ونبرة علامتك وقاعدة المعرفة ومعايير النجاح.",
      },
      {
        title: "نربط أدواتك",
        description:
          "نربطه مع CRM والبريد والتقويم والنماذج والدردشة والأتمتة.",
      },
      {
        title: "نطلق ونراقب ونحسن",
        description:
          "نطلقه مع مؤشرات واضحة ومراجعة جودة وتحسين شهري للمحادثات.",
      },
    ],
    useCases: [
      {
        icon: "ShoppingBag",
        title: "متاجر إلكترونية",
        description:
          "أتمتة أسئلة الطلبات وتوصيات المنتجات واسترجاع السلال ودعم ما بعد الشراء.",
      },
      {
        icon: "Presentation",
        title: "مدربون ومستشارون",
        description:
          "تأهيل المتقدمين والرد على الأسئلة وحجز مكالمات الاستشارة المناسبة.",
      },
      {
        icon: "Building2",
        title: "وكالات عقارية",
        description:
          "التقاط نية المشتري وجدولة الزيارات وتوجيه العقارات والمتابعة تلقائيا.",
      },
      {
        icon: "Store",
        title: "أعمال محلية",
        description:
          "إدارة الطلبات والتذكيرات والمراجعات والحجوزات ومتابعة العملاء.",
      },
      {
        icon: "Wrench",
        title: "شركات خدمات",
        description:
          "جمع التفاصيل وتقييم الاستعجال وتوجيه الطلبات وإبقاء العملاء على اطلاع.",
      },
      {
        icon: "GraduationCap",
        title: "تعليم وتدريب",
        description:
          "دعم الطلاب وتأهيل التسجيلات والرد على الأسئلة وأتمتة التذكيرات.",
      },
    ],
    integrations: [
      "WhatsApp",
      "Instagram",
      "Gmail",
      "Google Sheets",
      "Notion",
      "Shopify",
      "WooCommerce",
      "Stripe",
      "Calendly",
      "HubSpot",
      "Zapier",
      "n8n",
    ],
    pricing: {
      monthly: "شهري",
      yearly: "سنوي",
      perMonth: "/شهر",
      billedYearly: "يدفع سنويا",
      flexibleMonthly: "خطة شهرية مرنة",
      mostPopular: "الأكثر اختيارا",
      custom: "مخصص",
      plans: [
        {
          name: "Starter",
          monthlyPrice: 49,
          yearlyPrice: 39,
          description: "للفرق التي تبدأ بأتمتة واحدة واضحة.",
          features: [
            "وكيل IA واحد",
            "سير عمل أساسي",
            "ودجت دردشة للموقع",
            "دعم عبر البريد",
            "تحسين شهري",
          ],
          cta: "ابدأ Starter",
          highlighted: false,
        },
        {
          name: "Growth",
          monthlyPrice: 149,
          yearlyPrice: 119,
          description: "للفرق التي تريد ربط المبيعات والدعم و CRM.",
          features: [
            "3 وكلاء IA",
            "أتمتة WhatsApp / Instagram",
            "تكامل CRM",
            "تأهيل العملاء",
            "لوحة تحليلات",
            "دعم أولوية",
          ],
          cta: "احجز عرض Growth",
          highlighted: true,
        },
        {
          name: "Enterprise",
          monthlyPrice: null,
          yearlyPrice: null,
          description: "للتكاملات المتقدمة وسير العمل المعقد.",
          features: [
            "Workflows غير محدودة",
            "تكاملات مخصصة",
            "تقارير متقدمة",
            "استراتيجية IA مخصصة",
            "نظام تحويل للإنسان",
            "دعم SLA",
          ],
          cta: "تواصل مع المبيعات",
          highlighted: false,
        },
      ],
    },
    benefits: [
      { value: "+10 س", label: "توفر أسبوعيا" },
      { value: "فوري", label: "رد على العملاء" },
      { value: "24/7", label: "تغطية آلية" },
      { value: "أقل", label: "مهام متكررة" },
      { value: "أعلى", label: "نية تحويل" },
    ],
    testimonials: [
      {
        quote:
          "NexaFlow Agent ساعدنا على تحويل الطلبات الواردة إلى استشارات محجوزة دون زيادة العمل الإداري.",
        name: "Maya Chen",
        role: "مؤسسة Studio North",
      },
      {
        quote:
          "تحسن وقت الرد في الدعم من الأسبوع الأول. الوكيل يتعامل مع الأسئلة الشائعة ويعطي الفريق سياقا أوضح.",
        name: "Daniel Brooks",
        role: "مسؤول العمليات، Urban Retail Co.",
      },
      {
        quote:
          "أكبر فائدة كانت ربط النماذج و CRM والتقويم. العملاء يتحركون داخل المسار بأقل تأخير.",
        name: "Amira Patel",
        role: "مديرة النمو، Learnwise",
      },
    ],
    faqs: [
      {
        question: "ما هو وكيل الذكاء الاصطناعي؟",
        answer:
          "هو مساعد رقمي يفهم الطلبات، يتبع قواعد عملك، يستخدم قاعدة معرفتك، وينفذ إجراءات داخل أدواتك.",
      },
      {
        question: "هل يعمل مع أدواتي الحالية؟",
        answer:
          "نعم. يمكن ربط NexaFlow Agent مع CRM والتقويم والبريد والجداول ومنصات ecommerce وأدوات الأتمتة وقنوات الدردشة.",
      },
      {
        question: "هل هو آمن؟",
        answer:
          "نصمم الوكلاء بصلاحيات محدودة وقواعد تصعيد ومراجعة وحواجز للحالات الحساسة.",
      },
      {
        question: "هل أحتاج معرفة تقنية؟",
        answer:
          "لا. نحن نتولى الإعداد والتكاملات والاختبار والإطلاق والتحسين.",
      },
      {
        question: "كم يستغرق الإعداد؟",
        answer:
          "معظم الوكلاء المحددين يطلقون خلال 7 إلى 14 يوما. التكاملات المتقدمة قد تحتاج وقتا أطول.",
      },
      {
        question: "هل يمكن للإنسان التدخل؟",
        answer:
          "نعم. يمكن للوكيل تحويل المحادثة حسب الاستعجال أو طلب العميل أو مستوى الثقة أو قواعدك.",
      },
      {
        question: "هل يمكن تخصيص الأسعار؟",
        answer:
          "نعم. نخصص الأسعار حسب سير العمل والتكاملات وحجم المحادثات أو عدد الفرق.",
      },
    ],
    finalCta: {
      eyebrow: "سير عملك التالي يمكن أن يعمل تلقائيا",
      title: "جاهز لأتمتة عملك؟",
      description:
        "ابدأ بسير عمل عالي التأثير، أثبت القيمة، ثم وسع طبقة IA إلى المبيعات والدعم والعمليات.",
      primaryCta: "احجز عرضا مجانيا",
      secondaryCta: "تواصل معنا",
    },
    footer: {
      description:
        "وكلاء ذكاء اصطناعي مخصصون للدعم والمبيعات وتأهيل العملاء والحجز وأتمتة سير العمل.",
      quickLinksTitle: "روابط سريعة",
      servicesTitle: "الخدمات",
      socialTitle: "الشبكات",
      copyright: "جميع الحقوق محفوظة.",
      note: "مصمم لأتمتة مسؤولة وتحويل واضح للإنسان.",
      links: {
        services: [
          { label: "وكلاء الدعم", href: "/services" },
          { label: "تأهيل العملاء", href: "/services" },
          { label: "أتمتة المبيعات", href: "/services" },
          { label: "أتمتة سير العمل", href: "/services" },
        ],
        social: [
          { label: "LinkedIn", href: "#" },
          { label: "X", href: "#" },
          { label: "YouTube", href: "#" },
        ],
      },
    },
    mobileCta: "احجز demo",
  },
} as const;

export type Locale = keyof typeof localizedContent;
export type LocalizedContent = (typeof localizedContent)[Locale];

export function getLocaleDirection(locale: Locale) {
  return localeOptions.find((option) => option.code === locale)?.dir ?? "ltr";
}
