const translations = {
  en: {
    heroTitle: "Civil Engineering Solutions For The Cement Industry",
    heroDescr1: "We are your leading partner for complex brownfield construction projects during ongoing operation.",
    heroDescr2: "Benefit from engineering excellence built on more than 30 years of industry experience"
  },
  de: {
    heroTitle: "Solutions de génie civil pour l'industrie du ciment",
    heroDescr1: "Wir sind Ihr führender Partner für komplexe Brownfield-Bauprojekte im laufenden Betrieb.",
    heroDescr2: "Profitieren Sie von herausragender Ingenieurskunst, die aufmehr als 30 Jahren Branchenerfahrung basiert."
  },
  fr: {
    heroTitle: "Solutions de génie civil pour l'industrie du ciment",
    heroDescr1: "Nous sommes votre partenaire privilégié pour les projets complexes de construction, en cours d'exploitation.",
    heroDescr2: "Bénéficiez d'une excellence en ingénierie fondée de 30 ans d'expérience dans le secteur."
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