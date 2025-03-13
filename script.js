const translations = {
    "Education": { "hi": "शिक्षा", "en": "Education" },
    "Healthcare": { "hi": "स्वास्थ्य देखभाल", "en": "Healthcare" },
    "Agriculture": { "hi": "कृषि", "en": "Agriculture" },
    "Skill India Mission": { "hi": "कौशल भारत मिशन", "en": "Skill India Mission" },
    "PM Poshan Mid-Day Meal Scheme": { "hi": "प्रधानमंत्री पोषण मध्याह्न भोजन योजना", "en": "PM Poshan Mid-Day Meal Scheme" },
    "Pradhan Mantri Kaushal Vikas Yojana": { "hi": "प्रधानमंत्री कौशल विकास योजना", "en": "Pradhan Mantri Kaushal Vikas Yojana" },
    "Beti Bachao Beti Padhao": { "hi": "बेटी बचाओ बेटी पढ़ाओ", "en": "Beti Bachao Beti Padhao" },
    "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana": { "hi": "आयुष्मान भारत-प्रधानमंत्री जन आरोग्य योजना", "en": "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana" },
    "Pradhan Mantri Suraksha Bima Yojana": { "hi": "प्रधानमंत्री सुरक्षा बीमा योजना", "en": "Pradhan Mantri Suraksha Bima Yojana" },
    "Rashtriya Bal Swasthya Karyakram": { "hi": "राष्ट्रीय बाल स्वास्थ्य कार्यक्रम", "en": "Rashtriya Bal Swasthya Karyakram" },
    "Pradhan Mantri Kisan Samman Nidhi": { "hi": "प्रधानमंत्री किसान सम्मान निधि", "en": "Pradhan Mantri Kisan Samman Nidhi" },
    "Pradhan Mantri Fasal Bima Yojana": { "hi": "प्रधानमंत्री फसल बीमा योजना", "en": "Pradhan Mantri Fasal Bima Yojana" },
    "Kisan Credit Card (KCC) Scheme": { "hi": "किसान क्रेडिट कार्ड (केसीसी) योजना", "en": "Kisan Credit Card (KCC) Scheme" }
};

function translatePage(lang) {
    document.querySelectorAll(".translatable").forEach(el => {
        Object.keys(translations).forEach(key => {
            if (el.innerText.trim() === translations[key]['en'] || el.innerText.trim() === translations[key]['hi']) {
                el.innerText = translations[key][lang];
            }
        });
    });
}
