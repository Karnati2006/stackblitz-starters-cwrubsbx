import { Injectable } from '@angular/core';

export type Language = 'en' | 'te' | 'hi';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage: Language = 'en';

  translations: any = {
    // ================= ENGLISH =================
    en: {
      // Navigation
      brandName: 'RailBook India',
      searchTrainsText: 'Find available trains for your journey.',
      footerText: 'Railway Reservation Clone',
      home: 'Home',
      search: 'Train Search',
      bookings: 'My Bookings',
      pnr: 'PNR Status',
      login: 'Login',
      register: 'Register',

      // Home
      welcome: 'Book Your Train Journey',
      subtitle: 'Fast, simple and secure railway ticket reservation.',
      searchButton: 'Train Search',
      searchTrainsTitle: 'Search Trains',
      easyBooking: 'Easy Booking',
      easyBookingText: 'Book railway tickets quickly and easily.',
      pnrStatusTitle: 'PNR Status',
      pnrStatusText: 'Check your booking status using your PNR number.',

      // Train Search
      trainSearch: 'Train Search',
      searchJourney: 'Search for trains for your journey',
      fromStation: 'From Station',
      toStation: 'To Station',
      selectFrom: 'Select From Station',
      selectTo: 'Select To Station',
      journeyDate: 'Journey Date',
      searchTrains: 'Search Trains',
      departure: 'Departure',
      arrival: 'Arrival',
      duration: 'Duration',
      fare: 'Ticket Fare',
      availableClasses: 'Available Classes',
      bookNow: 'Book Now',
      selectAll: 'Please select all search details.',
      sameStation: 'From and To stations cannot be the same.',
      noTrains: 'No trains found for this route.',

      // Login
      loginTitle: 'Login',
      loginSubtitle: 'Login to manage your railway bookings',
      email: 'Email',
      password: 'Password',
      enterEmail: 'Enter your email',
      enterPassword: 'Enter your password',
      loginButton: 'Login',
      noAccount: "Don't have an account?",
      registerHere: 'Register here',
      enterEmailPassword: 'Please enter your email and password.',
      invalidLogin: 'Invalid email or password.',

      // Register
      registerTitle: 'Create Your Account',
      registerSubtitle: 'Register to book your train tickets',
      fullName: 'Full Name',
      enterFullName: 'Enter your full name',
      confirmPassword: 'Confirm Password',
      confirmYourPassword: 'Confirm your password',
      registerButton: 'Register',
      alreadyAccount: 'Already have an account?',
      loginHere: 'Login here',
      fillAllFields: 'Please fill in all fields.',
      passwordsNotMatch: 'Passwords do not match.',
      passwordLength: 'Password must contain at least 6 characters.',
      accountExists: 'An account with this email already exists.',
      registrationSuccess: 'Registration successful! Redirecting to login...',

      // Bookings
      myBookingsTitle: 'My Bookings',
      noBookingsFound: 'No Bookings Found',
      noBookingsMessage: 'You have not booked any train tickets yet.',
      trainNumber: 'Train Number',
      date: 'Date',
      years: 'years',
      cancelBooking: 'Cancel Booking',
      bookingCancelledMessage: 'This booking has been cancelled.',
      cancelConfirm: 'Are you sure you want to cancel this booking?',

      // PNR Status
      pnrStatusCheck: 'PNR Status Check',
      pnrSubtitle: 'Enter your PNR number to check your booking status',
      pnrNumber: 'PNR Number',
      enterPnr: 'Enter your PNR number',
      checkStatus: 'Check Status',
      bookingDetails: 'Booking Details',
      bookingStatus: 'Booking Status',
      train: 'Train',
      journey: 'Journey',
      class: 'Class',
      passenger: 'Passenger',
      totalFare: 'Total Fare',
      enterPnrError: 'Please enter a PNR number.',
      pnrNotFound: 'No booking found with this PNR number.',
      cancelled: 'Cancelled',
    },

    // ================= TELUGU =================
    te: {
      // Navigation
      brandName: 'రైల్‌బుక్ ఇండియా',
      searchTrainsText: 'మీ ప్రయాణానికి అందుబాటులో ఉన్న రైళ్లను కనుగొనండి.',
      footerText: 'రైల్వే రిజర్వేషన్ క్లోన్',
      home: 'హోమ్',
      search: 'రైలు శోధన',
      bookings: 'నా బుకింగ్స్',
      pnr: 'పీఎన్ఆర్ స్థితి',
      login: 'లాగిన్',
      register: 'నమోదు',

      // Home
      welcome: 'మీ రైలు ప్రయాణాన్ని బుక్ చేసుకోండి',
      subtitle:
        'వేగవంతమైన, సులభమైన మరియు సురక్షితమైన రైల్వే టికెట్ రిజర్వేషన్.',
      searchButton: 'రైలు శోధన',
      searchTrainsTitle: 'రైళ్లను శోధించండి',
      easyBooking: 'సులభమైన బుకింగ్',
      easyBookingText: 'రైల్వే టికెట్లను త్వరగా మరియు సులభంగా బుక్ చేసుకోండి.',
      pnrStatusTitle: 'పీఎన్ఆర్ స్థితి',
      pnrStatusText:
        'మీ పీఎన్ఆర్ నంబర్ ఉపయోగించి బుకింగ్ స్థితిని తెలుసుకోండి.',

      // Train Search
      trainSearch: 'రైలు శోధన',
      searchJourney: 'మీ ప్రయాణానికి రైళ్లను శోధించండి',
      fromStation: 'ప్రారంభ స్టేషన్',
      toStation: 'గమ్య స్టేషన్',
      selectFrom: 'ప్రారంభ స్టేషన్ ఎంచుకోండి',
      selectTo: 'గమ్య స్టేషన్ ఎంచుకోండి',
      journeyDate: 'ప్రయాణ తేదీ',
      searchTrains: 'రైళ్లను శోధించండి',
      departure: 'బయలుదేరే సమయం',
      arrival: 'చేరుకునే సమయం',
      duration: 'ప్రయాణ వ్యవధి',
      fare: 'టికెట్ ధర',
      availableClasses: 'అందుబాటులో ఉన్న తరగతులు',
      bookNow: 'ఇప్పుడే బుక్ చేయండి',
      selectAll: 'దయచేసి అన్ని వివరాలను ఎంచుకోండి.',
      sameStation: 'ప్రారంభ మరియు గమ్య స్టేషన్లు ఒకేలా ఉండకూడదు.',
      noTrains: 'ఈ మార్గానికి రైళ్లు అందుబాటులో లేవు.',

      // Login
      loginTitle: 'లాగిన్',
      loginSubtitle: 'మీ రైల్వే బుకింగ్‌లను నిర్వహించడానికి లాగిన్ అవ్వండి',
      email: 'ఇమెయిల్',
      password: 'పాస్‌వర్డ్',
      enterEmail: 'మీ ఇమెయిల్ నమోదు చేయండి',
      enterPassword: 'మీ పాస్‌వర్డ్ నమోదు చేయండి',
      loginButton: 'లాగిన్',
      noAccount: 'ఖాతా లేదా?',
      registerHere: 'ఇక్కడ నమోదు చేసుకోండి',
      enterEmailPassword: 'దయచేసి మీ ఇమెయిల్ మరియు పాస్‌వర్డ్ నమోదు చేయండి.',
      invalidLogin: 'చెల్లని ఇమెయిల్ లేదా పాస్‌వర్డ్.',

      // Register
      registerTitle: 'మీ ఖాతాను సృష్టించండి',
      registerSubtitle: 'మీ రైలు టికెట్లను బుక్ చేసుకోవడానికి నమోదు చేసుకోండి',
      fullName: 'పూర్తి పేరు',
      enterFullName: 'మీ పూర్తి పేరు నమోదు చేయండి',
      confirmPassword: 'పాస్‌వర్డ్ నిర్ధారించండి',
      confirmYourPassword: 'మీ పాస్‌వర్డ్‌ను నిర్ధారించండి',
      registerButton: 'నమోదు',
      alreadyAccount: 'ఇప్పటికే ఖాతా ఉందా?',
      loginHere: 'ఇక్కడ లాగిన్ అవ్వండి',
      fillAllFields: 'దయచేసి అన్ని వివరాలను నమోదు చేయండి.',
      passwordsNotMatch: 'పాస్‌వర్డ్‌లు సరిపోలడం లేదు.',
      passwordLength: 'పాస్‌వర్డ్‌లో కనీసం 6 అక్షరాలు ఉండాలి.',
      accountExists: 'ఈ ఇమెయిల్‌తో ఇప్పటికే ఖాతా ఉంది.',
      registrationSuccess:
        'నమోదు విజయవంతమైంది! లాగిన్ పేజీకి మళ్లిస్తున్నాము...',

      // Bookings
      myBookingsTitle: 'నా బుకింగ్‌లు',
      noBookingsFound: 'బుకింగ్‌లు కనుగొనబడలేదు',
      noBookingsMessage: 'మీరు ఇంకా ఏ రైలు టిక్కెట్లను బుక్ చేయలేదు.',
      trainNumber: 'రైలు నంబర్',
      date: 'తేదీ',
      years: 'సంవత్సరాలు',
      cancelBooking: 'బుకింగ్ రద్దు చేయండి',
      bookingCancelledMessage: 'ఈ బుకింగ్ రద్దు చేయబడింది.',
      cancelConfirm: 'మీరు ఈ బుకింగ్‌ను రద్దు చేయాలనుకుంటున్నారా?',

      // PNR Status
      pnrStatusCheck: 'పీఎన్ఆర్ స్థితిని తనిఖీ చేయండి',
      pnrSubtitle:
        'మీ బుకింగ్ స్థితిని తెలుసుకోవడానికి పీఎన్ఆర్ నంబర్‌ను నమోదు చేయండి',
      pnrNumber: 'పీఎన్ఆర్ నంబర్',
      enterPnr: 'మీ పీఎన్ఆర్ నంబర్‌ను నమోదు చేయండి',
      checkStatus: 'స్థితిని తనిఖీ చేయండి',
      bookingDetails: 'బుకింగ్ వివరాలు',
      bookingStatus: 'బుకింగ్ స్థితి',
      train: 'రైలు',
      journey: 'ప్రయాణం',
      class: 'తరగతి',
      passenger: 'ప్రయాణికుడు',
      totalFare: 'మొత్తం చార్జీ',
      enterPnrError: 'దయచేసి పీఎన్ఆర్ నంబర్‌ను నమోదు చేయండి.',
      pnrNotFound: 'ఈ పీఎన్ఆర్ నంబర్‌తో బుకింగ్ కనుగొనబడలేదు.',
      cancelled: 'రద్దు చేయబడింది',
    },

    // ================= HINDI =================
    hi: {
      // Navigation
      brandName: 'रेलबुक इंडिया',
      searchTrainsText: 'अपनी यात्रा के लिए उपलब्ध ट्रेन खोजें।',
      footerText: 'रेलवे आरक्षण क्लोन',
      home: 'होम',
      search: 'ट्रेन खोजें',
      bookings: 'मेरी बुकिंग',
      pnr: 'पीएनआर स्थिति',
      login: 'लॉगिन',
      register: 'पंजीकरण',

      // Home
      welcome: 'अपनी ट्रेन यात्रा बुक करें',
      subtitle: 'तेज़, सरल और सुरक्षित रेलवे टिकट आरक्षण।',
      searchButton: 'ट्रेन खोजें',
      searchTrainsTitle: 'ट्रेन खोजें',
      easyBooking: 'आसान बुकिंग',
      easyBookingText: 'रेलवे टिकट जल्दी और आसानी से बुक करें।',
      pnrStatusTitle: 'पीएनआर स्थिति',
      pnrStatusText: 'अपने पीएनआर नंबर से बुकिंग की स्थिति जांचें।',

      // Train Search
      trainSearch: 'ट्रेन खोजें',
      searchJourney: 'अपनी यात्रा के लिए ट्रेन खोजें',
      fromStation: 'प्रस्थान स्टेशन',
      toStation: 'गंतव्य स्टेशन',
      selectFrom: 'प्रस्थान स्टेशन चुनें',
      selectTo: 'गंतव्य स्टेशन चुनें',
      journeyDate: 'यात्रा की तारीख',
      searchTrains: 'ट्रेन खोजें',
      departure: 'प्रस्थान',
      arrival: 'आगमन',
      duration: 'यात्रा अवधि',
      fare: 'टिकट किराया',
      availableClasses: 'उपलब्ध श्रेणियाँ',
      bookNow: 'अभी बुक करें',
      selectAll: 'कृपया सभी खोज विवरण चुनें।',
      sameStation: 'प्रस्थान और गंतव्य स्टेशन समान नहीं हो सकते।',
      noTrains: 'इस मार्ग के लिए कोई ट्रेन नहीं मिली।',

      // Login
      loginTitle: 'लॉगिन',
      loginSubtitle: 'अपनी रेलवे बुकिंग प्रबंधित करने के लिए लॉगिन करें',
      email: 'ईमेल',
      password: 'पासवर्ड',
      enterEmail: 'अपना ईमेल दर्ज करें',
      enterPassword: 'अपना पासवर्ड दर्ज करें',
      loginButton: 'लॉगिन',
      noAccount: 'खाता नहीं है?',
      registerHere: 'यहाँ पंजीकरण करें',
      enterEmailPassword: 'कृपया अपना ईमेल और पासवर्ड दर्ज करें।',
      invalidLogin: 'अमान्य ईमेल या पासवर्ड।',

      // Register
      registerTitle: 'अपना खाता बनाएं',
      registerSubtitle: 'ट्रेन टिकट बुक करने के लिए पंजीकरण करें',
      fullName: 'पूरा नाम',
      enterFullName: 'अपना पूरा नाम दर्ज करें',
      confirmPassword: 'पासवर्ड की पुष्टि करें',
      confirmYourPassword: 'अपने पासवर्ड की पुष्टि करें',
      registerButton: 'पंजीकरण करें',
      alreadyAccount: 'क्या आपके पास पहले से खाता है?',
      loginHere: 'यहाँ लॉगिन करें',
      fillAllFields: 'कृपया सभी फ़ील्ड भरें।',
      passwordsNotMatch: 'पासवर्ड मेल नहीं खाते।',
      passwordLength: 'पासवर्ड में कम से कम 6 अक्षर होने चाहिए।',
      accountExists: 'इस ईमेल से पहले से एक खाता मौजूद है।',
      registrationSuccess: 'पंजीकरण सफल रहा! लॉगिन पेज पर भेजा जा रहा है...',

      // Bookings
      myBookingsTitle: 'मेरी बुकिंग',
      noBookingsFound: 'कोई बुकिंग नहीं मिली',
      noBookingsMessage: 'आपने अभी तक कोई ट्रेन टिकट बुक नहीं किया है।',
      trainNumber: 'ट्रेन नंबर',
      date: 'तारीख',
      years: 'वर्ष',
      cancelBooking: 'बुकिंग रद्द करें',
      bookingCancelledMessage: 'यह बुकिंग रद्द कर दी गई है।',
      cancelConfirm: 'क्या आप इस बुकिंग को रद्द करना चाहते हैं?',

      // PNR Status
      pnrStatusCheck: 'पीएनआर स्थिति जांचें',
      pnrSubtitle:
        'अपनी बुकिंग स्थिति जांचने के लिए अपना पीएनआर नंबर दर्ज करें',
      pnrNumber: 'पीएनआर नंबर',
      enterPnr: 'अपना पीएनआर नंबर दर्ज करें',
      checkStatus: 'स्थिति जांचें',
      bookingDetails: 'बुकिंग विवरण',
      bookingStatus: 'बुकिंग स्थिति',
      train: 'ट्रेन',
      journey: 'यात्रा',
      class: 'श्रेणी',
      passenger: 'यात्री',
      totalFare: 'कुल किराया',
      enterPnrError: 'कृपया एक पीएनआर नंबर दर्ज करें।',
      pnrNotFound: 'इस पीएनआर नंबर के साथ कोई बुकिंग नहीं मिली।',
      cancelled: 'रद्द किया गया',
    },
  };

  setLanguage(language: Language) {
    this.currentLanguage = language;
    localStorage.setItem('selectedLanguage', language);
  }

  getText(key: string): string {
    return (
      this.translations[this.currentLanguage]?.[key] ||
      this.translations.en?.[key] ||
      key
    );
  }

  getLanguage(): Language {
    return this.currentLanguage;
  }

  loadSavedLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage');

    if (
      savedLanguage === 'en' ||
      savedLanguage === 'te' ||
      savedLanguage === 'hi'
    ) {
      this.currentLanguage = savedLanguage;
    }
  }
}
