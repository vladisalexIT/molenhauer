const translations = {
  en: {
    heroTitle: "Civil Engineering Solutions For The Cement Industry",
    heroDescr1: "We are your leading partner for complex brownfield construction projects during ongoing operation.",
    heroDescr2: "Benefit from engineering excellence built on more than 30 years of industry experience",
    navItem1: "Services",
    navItem2: "Know How",
    navItem3: "Projects & References",
    navItem4: "Our Company",
    navItem5: "Our Clients",
    navItem6: "Careers",
    heroButton1: "How can we serve you",
    heroButton2: "Contact Us",
    servicesTitle: "Comprehensive Structural Engineering Services",
    servicesDescr: "We accompany you from the first idea of your next construction project from the first idean to successful execution.",
    contactButton: "Contact Us",
    decor1: "Project consulting",
    decor2: "Location analysis and feasibility studies",
    decor3: "Structural design and execution planning",
    decor4: "Preparation of contract award",
    decor5: "Service and Support",
    decor6: "Construction site consulting",
    scrollBtn: "Scroll to find out how our expertise can help you",
    expertiseTitle: "Broad expertise based on decades of experience",
    expertise1: "Civil engineering",
    expertise2: "Machine and building foundations",
    expertise3: "Silo and slipform construction",
    expertise4: "Assesments, building inspection, concrete maintenance and repair",
    expertise5: "International cement factory construction",
    expertise6: "Construction in ongoing operations",
    expertise7: "Civil engineering",
    expertise8: "Civil engineering",
  },
  de: {
    heroTitle: "Solutions de génie civil pour l'industrie du ciment",
    heroDescr1: "Wir sind Ihr führender Partner für komplexe Brownfield-Bauprojekte im laufenden Betrieb.",
    heroDescr2: "Profitieren Sie von herausragender Ingenieurskunst, die aufmehr als 30 Jahren Branchenerfahrung basiert.",
    navItem1: "Leistungen",
    navItem2: "Fachwissen",
    navItem3: "Projekte & Referenzen",
    navItem4: "Über uns",
    navItem5: "Unsere Kunden",
    navItem6: "Karriere",
    heroButton1: "Wie können wir Ihnen helfen?",
    heroButton2: "Kontaktieren Sie uns",
    servicesTitle: "Umfassende Tragwerksplanungsleistungen",
    servicesDescr: "Wir begleiten Sie von der ersten Idee Ihres nächsten Bauvorhabens bis zur erfolgreichen Ausführung.",
    contactButton: "Sie uns",
    decor1: "Projektberatung",
    decor2: "Standortanalyse und Machbarkeitsstudien",
    decor3: "Tragwerksplanung und Ausführungsplanung",
    decor4: "Vorbereitung der Auftragsvergabe",
    decor5: "Service und Support",
    decor6: "Baustellenberatung",
    scrollBtn: "Scrollen Sie, um herauszufinden, kann.",
    expertiseTitle: "Umfassendes Fachwissen, basierend auf Erfahrung",
    expertise1: "Tiefbau",
    expertise2: "Maschinen- und Gebäute",
    expertise3: "Silo- und Gleitschgsbau",
    expertise4: "Gutachten, Gebäudion, Betoung und -reparatur",
    expertise5: "Bau internionaler Zementwerke",
    expertise6: "Bauprojekte im laufenden Betrieb",
    expertise7: "Tiefbau",
    expertise8: "Tiefbau",
  },
  fr: {
    heroTitle: "Solutions de génie civil pour l'industrie du ciment",
    heroDescr1: "Nous sommes votre partenaire privilégié pour les projets complexes de construction, en cours d'exploitation.",
    heroDescr2: "Bénéficiez d'une excellence en ingénierie fondée de 30 ans d'expérience dans le secteur.",
    navItem1: "Services",
    navItem2: "Savoir-faire",
    navItem3: "Projets et références",
    navItem4: "Notre entreprise",
    navItem5: "Nos clients",
    navItem6: "Carrières",
    heroButton1: "Comment pouvons-nous vous aider?",
    heroButton2: "Contactez-nous",
    servicesTitle: "Services complets d'ingénierie structurale",
    servicesDescr: "Nous vous accompagnons depuis la première idée de votre prochain projet de construction jusqu'à sa réalisation réussie.",
    contactButton: "Contactez-nous",
    decor1: "Conseil en gestion de projet",
    decor2: "Analyse de localisation et études de faisabilité",
    decor3: "Conception structurelle et planification de l’exécution",
    decor4: "Préparation de l’attribution du marché",
    decor5: "Services et assistance",
    decor6: "Conseil sur chantier",
    scrollBtn: "Défilez pour découvrir notre expertise vous aider.",
    expertiseTitle: "Vaste expertise fondée sur des décennies d'expérience",
    expertise1: "Génie civil",
    expertise2: "Fondations de machines et de bâtiments",
    expertise3: "Construction de silos et de coffrages glissants",
    expertise4: "Évaluations, inspection de bâtiments, entretien et réparation du béton",
    expertise5: "Construction d'usines de ciment internationales",
    expertise6: "Construction en exploitation",
    expertise7: "Génie civil",
    expertise8: "Génie civil",
  }
};

const buttons = document.querySelectorAll('[data-btn]');
const textElements = document.querySelectorAll('.lang-key');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.btn;
    
    textElements.forEach(el => {
      const key = el.dataset.key;
      el.textContent = translations[lang][key];
    });
    
    localStorage.setItem('selectedLang', lang);
  });
});