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