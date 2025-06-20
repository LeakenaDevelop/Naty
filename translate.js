const translations = {
  en: {
    welcome: "WELCOME TO OUR SHOP",
    register:"Register",
    login:"Login",
    home:"Home",
    book:"Books",
    cate:"Category",
    about:"About",
    contact:"Contact",
    mbook:"Many books",
    find:"Happy to find book in our shop."
  },
  km: {
    welcome: "សូមស្វាគមន៍មកកាន់ហាងយើងខ្ញុំ",
    register:"ធ្វើការចុះឈ្មោះ",
    login:"ចូលគណនី",
    home:"ទំព័រដើម",
    book:"សៀវភៅ",
    cate:"ប្រភេទសៀវភៅ",
    about:"ព័ត៍មានអំពីយើង",
    contact:"ទំនាក់ទំនង",
    mbook:"មានសៀវភៅបញ្ចុះតម្លៃ",
    find:"រីលរាយក្នុងការស្វែងរកសៀវភៅ"
  }
};

function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Apply Khmer font if needed
  if (lang === "km") {
    document.body.classList.add("khmer-font");
  } else {
    document.body.classList.remove("khmer-font");
  }
}

// Wait for DOM to load before running translation
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("lang") || "en";
  document.getElementById("languageSelector").value = savedLang;
  translatePage(savedLang);

  document.getElementById("languageSelector").addEventListener("change", function () {
    const selectedLang = this.value;
    localStorage.setItem("lang", selectedLang);
    translatePage(selectedLang);
  });
});