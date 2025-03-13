const translations = {
    "Education": { "hi": "शिक्षा", "en": "Education" },
    "Healthcare": { "hi": "स्वास्थ्य देखभाल", "en": "Healthcare" },
    "Agriculture": { "hi": "कृषि", "en": "Agriculture" },
    "Scholarship Scheme for Students": { "hi": "छात्रों के लिए छात्रवृत्ति योजना", "en": "Scholarship Scheme for Students" },
    "Mid-Day Meal Scheme": { "hi": "मध्याह्न भोजन योजना", "en": "Mid-Day Meal Scheme" },
    "Ayushman Bharat Yojana": { "hi": "आयुष्मान भारत योजना", "en": "Ayushman Bharat Yojana" },
    "Janani Suraksha Yojana": { "hi": "जननी सुरक्षा योजना", "en": "Janani Suraksha Yojana" },
    "PM Kisan Samman Nidhi": { "hi": "प्रधानमंत्री किसान सम्मान निधि", "en": "PM Kisan Samman Nidhi" },
    "Soil Health Card Scheme": { "hi": "मृदा स्वास्थ्य कार्ड योजना", "en": "Soil Health Card Scheme" }
};

function translatePage(lang) {
    document.querySelectorAll(".translatable").forEach(el => {
        Object.keys(translations).forEach(key => {
            if (el.innerText === translations[key]['en'] || el.innerText === translations[key]['hi']) {
                el.innerText = translations[key][lang];
            }
        });
    });
}
