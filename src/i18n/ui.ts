/**
 * UI string dictionary for site-wide i18n.
 *
 * `en` is the source of truth and MUST contain every key. Other
 * locales may be partial — `useTranslations()` falls back to the
 * English string for any missing key, so the site never renders a
 * blank. Verse text is handled separately by the transliterator; these
 * strings are the interface + editorial copy only.
 *
 * Keys are flat, dot-namespaced strings.
 */

import type { Locale } from './config';

// ─────────────────────────────────────────────────────────────────
// English — canonical source. Every key lives here.
// ─────────────────────────────────────────────────────────────────
const en = {
  // Navigation / header
  'nav.chalisas': 'Chalisas',
  'nav.sankalp': 'Sankalp',
  'nav.paath': 'Paath',
  'nav.about': 'About',
  'nav.home': 'Home',
  'nav.aboutUs': 'About us',
  'header.homeAria': 'Online Chalisa — home',
  'header.themeCycle': 'Cycle theme',
  'header.themeCycleTitle': 'Cycle theme (light / sepia / dark)',
  'header.beginSankalp': 'Begin Sankalp',
  'header.startReading': 'Start reading',
  'lang.switcher': 'Language',
  'lang.choose': 'Choose language',

  // Hero
  'hero.invocation': 'ॐ श्री गणेशाय नमः',
  'hero.title1': 'A quiet place',
  'hero.title2': 'for your daily',
  'hero.titleWord': 'Chalisa',
  'hero.readOnline': 'Read the Hanuman Chalisa online',
  'hero.readOnlineSub': 'A quiet place for your daily Chalisa.',
  'hero.openingKicker': 'Opening dohas · in Hindi with English',
  'hero.subtitle':
    'Read the Hanuman Chalisa and six more of the most-loved Chalisas in Hindi, Telugu, Tamil, Kannada, Bengali or English — in a distraction-free reader designed for daily paath, not for clicks.',
  'hero.ctaPrimary': 'Begin with Hanuman Chalisa',
  'hero.ctaSecondary': 'Browse the library',
  'hero.availableIn': 'Available in',

  // Library section
  'library.kicker': 'Library',
  'library.heading': 'The seven Chalisas.',
  'library.blurb':
    'Verified Devanagari text, transliterated into Telugu, Tamil, Kannada and English for every verse. Pick one and start reading — the controls stay out of your way.',

  // Chalisa card
  'card.read': 'Read',
  'card.readPrefix': 'Read',
  'card.verses': 'verses',
  'card.min': 'min',
  // Per-chalisa card copy (tagline + tradition kicker)
  'card.tagline.hanuman': 'Forty verses of devotion to the son of the wind',
  'card.tradition.hanuman': 'Awadhi · Tulsidas · c. 16th century',
  'card.tagline.shiv': 'Forty verses to Mahadev, the auspicious one',
  'card.tradition.shiv': 'Hindi devotional · 19th century',
  'card.tagline.durga': 'Forty verses to the Mother, the invincible one',
  'card.tradition.durga': 'Hindi devotional · Devi Kavach tradition',
  'card.tagline.ganesh': 'Forty verses to the remover of obstacles',
  'card.tradition.ganesh': 'Hindi devotional',
  'card.tagline.shani': 'Forty verses to the lord of karma and justice',
  'card.tradition.shani': 'Hindi devotional',
  'card.tagline.laxmi': 'Forty verses invoking the mother of fortune and grace',
  'card.tradition.laxmi': 'Devotional · Traditional',
  'card.tagline.saraswati': 'Forty verses seeking the goddess of wisdom, art and speech',
  'card.tradition.saraswati': 'Devotional · Traditional',
  'chalisa.title.hanuman': 'Hanuman Chalisa',
  'chalisa.title.shiv': 'Shiv Chalisa',
  'chalisa.title.durga': 'Durga Chalisa',
  'chalisa.title.ganesh': 'Ganesh Chalisa',
  'chalisa.title.shani': 'Shani Chalisa',
  'chalisa.title.laxmi': 'Laxmi Chalisa',
  'chalisa.title.saraswati': 'Saraswati Chalisa',
  'paath.title.bajrang-baan': 'Bajrang Baan',
  'paath.title.sankat-mochan-hanuman-ashtak': 'Sankat Mochan Hanuman Ashtak',
  'paath.title.durga-kavach': 'Durga Kavach',
  'paath.kicker': 'Paath',
  'paath.heading': 'More paath and bhajans.',
  'paath.blurb':
    'Texts beyond the seven Chalisas — hymns for protection, courage and the removal of obstacles. Each opens in the same reader, with the same spoken recitation.',

  // Feature strip
  'features.heading': 'Built for daily paath',
  'features.zen.title': 'Zen Reader',
  'features.zen.body': 'One tap collapses the entire interface. Just the words, breathing on the page.',
  'features.tele.title': 'Teleprompter mode',
  'features.tele.body': 'Hands-free auto-scroll with a five-step speed dial. Read seated, folded, or standing.',
  'features.sankalp.title': 'Sankalp streak',
  'features.sankalp.body': '11, 21, or 40 days. Tick each day. Progress lives on your device — nowhere else.',

  // Philosophy
  'philosophy.kicker': 'Our promise',
  'philosophy.text': "No banners. No newsletters. No cricket scores. No donations you didn't ask about.",
  'philosophy.textEm': 'Only the hymn.',

  // Home FAQ
  'faq.kicker': 'Frequently Asked',
  'faq.heading': 'Quick answers.',
  'faq.subtitle': 'The basics of what a Chalisa is, and how this reader is designed to be used.',
  'faq.q1': 'What is a Chalisa?',
  'faq.a1':
    'A Chalisa is a devotional Hindu hymn of forty verses (chalis means forty in Hindi) composed in praise of a deity. The most famous is the Hanuman Chalisa by Goswami Tulsidas. This library also includes Shiv, Ganesh, Durga, Shani, Laxmi and Saraswati Chalisas.',
  'faq.q2': 'How do I use this site?',
  'faq.a2':
    'Pick any Chalisa from the library. Inside the reader, use the toolbar to switch between Hindi, Telugu, Tamil, Kannada, Bengali and English scripts; toggle Show English to see Latin transliteration beneath the primary script; tap Auto-scroll for a hands-free teleprompter, or Zen to hide all chrome. Your preferences (theme, script, font size) are remembered on this device.',
  'faq.q3': 'Which languages and scripts are supported?',
  'faq.a3':
    'Every verse of every Chalisa is rendered in six scripts: Hindi (Devanagari), Telugu, Tamil, Kannada, Bengali and English (Latin transliteration). The regional scripts are transliterated character-by-character from the canonical Devanagari, so the pronunciation stays identical across all readings.',
  'faq.q4': 'Is this reader free? Are there ads?',
  'faq.a4':
    'Completely free. No ads, no account, no newsletter, no ad tracking. Your Sankalp streak lives in your browser and is never sent to any server. The site works offline once loaded.',
  'faq.q5': 'What is Sankalp, and how does the streak tracker work?',
  'faq.a5':
    'A Sankalp is a spiritual resolve — traditionally a commitment to recite a Chalisa for 11, 21 or 40 consecutive days. The tracker automatically marks a day complete when you read 80% of any Chalisa page. It lives entirely in your browser; clearing your site data clears the record.',
  'faq.q6': 'Who writes and verifies these texts?',
  'faq.a6':
    'The Devanagari verses follow widely-accepted traditional editions of each Chalisa. Regional script versions are generated deterministically at build time from the Devanagari source, so any correction to the master text propagates to every script. Found a typo? Let us know via the About page.',
  'faq.qLanguage': 'In which language is the Hanuman Chalisa written?',
  'faq.aLanguage':
    'The Hanuman Chalisa is written in Awadhi, a language of the Awadh region of northern India closely related to Hindi. Goswami Tulsidas composed it in the 16th century in the Devanagari script, which is why it is often called the Hanuman Chalisa in Hindi. On this site you can read it in the original Devanagari with English lyrics beneath, or in Telugu, Tamil, Kannada and Bengali script.',

  // Home long-form article
  'home.about.kicker': 'About',
  'home.about.heading': 'The Hanuman Chalisa, quietly online.',
  'article.p1':
    'The Hanuman Chalisa is a forty-verse devotional hymn composed by the poet-saint Goswami Tulsidas in the Awadhi language sometime in the sixteenth century. Recited by tens of millions of devotees every dawn, it is a compact spiritual biography of Lord Hanuman — the immortal servant of Shri Ram — and a promise that his name, sincerely called, dissolves fear, disease and doubt. Online Chalisa is a quiet, ad-free reader built to help you say those forty verses well, every day, in whichever tongue speaks to your heart.',
  'article.h1': 'Hanuman Chalisa lyrics in Hindi, English, Telugu, Kannada and Tamil',
  'article.p2':
    'Whether you were raised in Varanasi, Vijayawada, Bengaluru, Chennai or a Silicon Valley suburb, the words should read as easily as your first name. That is why every hymn on this site — the Hanuman Chalisa first among them — is offered in five simultaneous readings. You can read the Hanuman Chalisa in Hindi (the original Devanagari of Tulsidas), in Telugu, in Kannada, in Tamil, or in English transliteration. A single tap in the reader switches scripts; a second tap layers the Roman Hanuman Chalisa lyrics in English beneath your primary script so newcomers can follow along syllable by syllable.',
  'article.h2': 'A reader designed for daily paath',
  'article.p3':
    'The reader was designed with practice, not scroll-depth, in mind. A "Zen" mode collapses every button, header and footer so nothing stands between you and the verse. A teleprompter-style auto-scroll advances the page at your pace — useful when your palms are folded during the morning Hanuman Chalisa paath. Font size, theme (light, sepia, or true black), and script preference are remembered on your device between sessions. Your preferences never leave your device; there is no login, no newsletter, no cookie banner, no cricket scores, no donation modal.',
  'article.p4':
    'For those beginning a formal vow, the Sankalp Streak Tracker lets you commit to an 11-, 21-, or 40-day recitation and marks each day automatically when you complete 80% of the reading. The counter lives in your browser and travels nowhere. If you clear the site data, you clear the record; if you return, it is still there.',
  'article.h3': 'Seven Chalisas, one calm reader',
  'article.p5':
    'The library extends beyond the Shri Hanuman Chalisa. Alongside it you will find the Shiv Chalisa, Ganesh Chalisa, Durga Chalisa, Shani Chalisa, Laxmi Chalisa and Saraswati Chalisa — seven of the most-loved hymns in the Hindu tradition, each verified against widely accepted Devanagari sources and hand-transliterated into Telugu, Tamil, Kannada and English. The Hanuman Chalisa on this site follows the canonical text with the traditional two opening dohas, forty chaupais and closing doha intact.',
  'article.h4': 'Sing along, or read in silence',
  'article.p6':
    'Many listeners come to the hymn through the voice of a beloved singer — the Hariharan Shree Hanuman Chalisa rendition, the Amitabh Bachchan chorus, or the M. S. Rama Rao Sundara Kanda tradition. Where a spoken recitation is available, it plays from the player at the bottom and highlights each verse as it is recited; or leave it silent and let the words carry themselves. Either way, the Hanuman Chalisa lyrics in Hindi and their English transliteration stay perfectly aligned on the page.',
  'article.p7':
    'If you are searching for the Hanuman Chalisa in English, the Hanuman Chalisa Telugu text, the Hanuman Chalisa Kannada script, or simply the cleanest way to read the Shri Hanuman Chalisa every morning, you are in the right place. Bookmark this page, add it to your home screen, and let the son of the wind visit you at the same hour every day. जय श्री राम।',
  'article.cta': 'Read the Hanuman Chalisa now',

  'sankalp.metaTitle': 'Sankalp · Online Chalisa',
  'sankalp.metaDescription':
    'Commit to an 11, 21, or 40-day Chalisa reading practice. Track your streak — privately, on this device.',
  'sankalp.kicker': 'Sankalp · संकल्प',
  'sankalp.heading': 'A promise to yourself.',
  'sankalp.subtitle':
    'Sankalp is the ancient act of quiet resolve — you name the practice, you name the length, and you show up. Nothing more.',
  'sankalp.plan11': 'A short, generous vow — enough to notice a change.',
  'sankalp.plan21': 'The classic ekadash doubled — a genuine rhythm forms.',
  'sankalp.plan40': 'The mandala — a full cycle. Deep, quiet, transformative.',
  'sankalp.noteKicker': 'A gentle note',
  'sankalp.noteBody':
    'Your streak is stored only in this browser. Nothing is uploaded, nothing is shared, and clearing site data will reset it. That is on purpose — sankalp is between you and the divine, not you and a server.',

  'about.metaTitle': 'About · Online Chalisa',
  'about.metaDescription':
    'Why Online Chalisa exists — a distraction-free, ad-free, privacy-respecting home for sacred Hindu hymns.',
  'about.kicker': 'About',
  'about.heading': 'A sanctuary, not a website.',
  'about.p1':
    'Online Chalisa was built for one reason: the sacred texts most people love — Hanuman Chalisa, Shiv Chalisa, Ganesh, Durga, Shani — are trapped on the modern web behind banner ads, autoplay video, popup subscriptions, and menus for cricket scores.',
  'about.p2': 'None of that belongs anywhere near a hymn.',
  'about.p3':
    'So we built the opposite. A quiet page. Warm typography. A sepia mode for warm morning reading and a true dark mode for night. A single button to hide every scrap of interface. A hands-free teleprompter for older devotees who prefer to read seated with folded hands. Optional audio at the bottom, ready to fade away when you enter Zen mode.',
  'about.noDo.heading': "What we don't do",
  'about.noDo.1': 'No advertisements, ever.',
  'about.noDo.2': 'No ad trackers, and no personal profile of your reading.',
  'about.noDo.3': 'No account, sign-up, or email required.',
  'about.noDo.4': 'No push notifications or nagging reminders.',
  'about.sankalp.heading': 'Sankalp is yours',
  'about.sankalp.body':
    'The streak tracker lives entirely in your browser local storage. It never leaves your device. If you clear browser data, it will reset — that is the price of privacy, and we think it is a fair one.',
  'about.text.heading': 'On the text',
  'about.text.body':
    'The Devanagari verses and Roman transliterations are drawn from long-standing devotional traditions and cross-referenced against multiple published editions. If you spot an error, please let us know — accuracy in scripture is a matter of care.',
  'about.blessing': '॥ शुभम् अस्तु ॥',

  // Footer
  'footer.blurb':
    'Online Chalisa is a devotional reader — no ads, no ad tracking, no account. Read in peace, and may your practice be steady.',
  'footer.site': 'Site',
  'footer.legal': 'Legal',
  'footer.home': 'Home',
  'footer.chalisas': 'Chalisas',
  'footer.paath': 'Paath',
  'footer.sankalp': 'Sankalp',
  'footer.aboutUs': 'About us',
  'footer.privacy': 'Privacy policy',
  'footer.terms': 'Terms & conditions',
  'footer.made': 'Made with quiet devotion',

  // Reader controls
  'reader.script': 'Script',
  'reader.script.hi': 'Devanagari (Hindi)',
  'reader.script.te': 'Telugu',
  'reader.script.ta': 'Tamil',
  'reader.script.kn': 'Kannada',
  'reader.script.bn': 'Bengali',
  'reader.script.en': 'English (transliteration)',
  'reader.showEnglish': 'Show English',
  'reader.showEnglishTitle': 'Show English transliteration beneath each verse',
  'reader.en': 'EN',
  'reader.decrease': 'Decrease text size',
  'reader.smaller': 'Smaller text',
  'reader.increase': 'Increase text size',
  'reader.larger': 'Larger text',
  'reader.autoscroll': 'Auto-scroll',
  'reader.autoscrollTitle': 'Teleprompter — auto-scroll',
  'reader.zen': 'Zen',
  'reader.zenTitle': 'Zen mode — hide everything',
  'reader.speed': 'Speed',
  'reader.stop': 'Stop',
  'reader.exitZen': 'Exit Zen',
  'reader.exitZenAria': 'Exit Zen mode',

  // Audio player
  'audio.player': 'Audio player',
  'audio.playPause': 'Play or pause',
  'audio.seek': 'Seek',
  'audio.comingSoon': 'Audio recitation coming soon — read along in silence for now.',
  'audio.recitation': 'Recitation',

  // Sankalp streak tracker
  'streak.kicker': 'Sankalp · संकल्प',
  'streak.heading': 'A quiet commitment',
  'streak.blurb':
    "Pick a length and tick each day as you read. Progress lives on this device — no account, no cloud, no reminders you didn't ask for.",
  'streak.lengthAria': 'Sankalp length',
  'streak.daysUnit': 'days',
  'streak.of': 'of',
  'streak.currentStreak': 'Current streak',
  'streak.dailyProgress': 'Daily progress',
  'streak.markToday': 'Mark today complete',
  'streak.todayMarked': '✓ Today marked · undo',
  'streak.reset': 'Reset sankalp',
  'streak.resetConfirm': 'Reset your sankalp? This clears all tick marks on this device.',
  'streak.day': 'day',
  'streak.dayWord': 'Day',
  'streak.completed': 'completed',
  'reader.speed.slow': 'slow',
  'reader.speed.medium': 'medium',
  'reader.speed.fast': 'fast',

  // Chalisa page chrome
  'chalisa.prev': 'Previous',
  'chalisa.next': 'Next',
  'chalisa.backToLibrary': 'Back to library',
  'chalisa.faqHeading': 'Frequently Asked',
  'chalisa.faqKicker': 'Questions & answers',
  'chalisa.moreChalisas': 'More Chalisas',
  'chalisa.readAria': 'Read',
  'chalisa.blessing': 'May your reading bring you peace.',
  'chalisa.alsoRead': 'Also read',
  'chalisa.aboutPrefix': 'About the',
  'chalisa.faqSubtitle':
    'Answers to the most common questions about this Chalisa — its origin, meaning and daily practice.',
  'chalisa.home': 'Home',

  // 404
  'notfound.code': '404',
  'notfound.heading': 'This page has wandered off.',
  'notfound.body':
    'The page you were looking for is not here. Perhaps it was moved, or never existed. Let us guide you back to a place of calm.',
  'notfound.cta': 'Return home',
  'notfound.browse': 'Browse the Chalisas',

  // Language names (for switcher accessible label)
  'meta.langName': 'English',

  // SEO meta
  'meta.home.title': 'Read Hanuman Chalisa Online — Hindi & English · Online Chalisa',
  'meta.home.description':
    'Read the Hanuman Chalisa online — written in Awadhi by Goswami Tulsidas — in Hindi with English lyrics beneath, plus Telugu, Kannada and Tamil. Free, ad-free reader with auto-scroll and an 11 / 21 / 40-day sankalp tracker.',
} as const;

export type UIStringKey = keyof typeof en;

// ─────────────────────────────────────────────────────────────────
// हिन्दी (Hindi)
// ─────────────────────────────────────────────────────────────────
const hi: Partial<Record<UIStringKey, string>> = {
  'nav.chalisas': 'चालीसा',
  'nav.sankalp': 'संकल्प',
  'nav.paath': 'पाठ',
  'nav.about': 'हमारे बारे में',
  'nav.home': 'मुख्य पृष्ठ',
  'nav.aboutUs': 'हमारे बारे में',
  'header.homeAria': 'ऑनलाइन चालीसा — मुख्य पृष्ठ',
  'header.themeCycle': 'थीम बदलें',
  'header.themeCycleTitle': 'थीम बदलें (उजली / सीपिया / गहरी)',
  'header.beginSankalp': 'संकल्प शुरू करें',
  'header.startReading': 'पढ़ना शुरू करें',
  'lang.switcher': 'भाषा',
  'lang.choose': 'भाषा चुनें',

  'hero.title1': 'एक शांत स्थान',
  'hero.title2': 'आपकी रोज़ की',
  'hero.titleWord': 'चालीसा के लिए',
  'hero.subtitle':
    'हनुमान चालीसा और छह अन्य सबसे प्रिय चालीसाओं को हिन्दी, तेलुगु, तमिल, कन्नड़, बंगाली या अंग्रेज़ी में पढ़ें — एक शांत, ध्यान-भंग रहित रीडर में, जो रोज़ के पाठ के लिए बना है, क्लिक के लिए नहीं।',
  'hero.ctaPrimary': 'हनुमान चालीसा से शुरू करें',
  'hero.ctaSecondary': 'पुस्तकालय देखें',
  'hero.availableIn': 'उपलब्ध भाषाएँ',

  'library.kicker': 'पुस्तकालय',
  'library.heading': 'सात चालीसाएँ।',
  'library.blurb':
    'सत्यापित देवनागरी पाठ, हर श्लोक के लिए तेलुगु, तमिल, कन्नड़ और अंग्रेज़ी में लिप्यंतरित। कोई एक चुनें और पढ़ना शुरू करें — नियंत्रण आपके रास्ते से हटे रहते हैं।',

  'card.read': 'पढ़ें',
  'card.readPrefix': 'पढ़ें',
  'card.verses': 'श्लोक',
  'card.min': 'मिनट',
  'card.tagline.hanuman': 'पवनपुत्र के प्रति भक्ति के चालीस श्लोक',
  'card.tradition.hanuman': 'अवधी · तुलसीदास · c. 16वीं सदी',
  'card.tagline.shiv': 'महादेव शिवशंकर को समर्पित चालीस श्लोक',
  'card.tradition.shiv': 'हिन्दी भक्ति · 19वीं सदी',
  'card.tagline.durga': 'अजेय माँ दुर्गा को समर्पित चालीस श्लोक',
  'card.tradition.durga': 'हिन्दी भक्ति · देवी कवच परंपरा',
  'card.tagline.ganesh': 'विघ्नहर्ता को समर्पित चालीस श्लोक',
  'card.tradition.ganesh': 'हिन्दी भक्ति',
  'card.tagline.shani': 'कर्म और न्याय के स्वामी को समर्पित चालीस श्लोक',
  'card.tradition.shani': 'हिन्दी भक्ति',
  'card.tagline.laxmi': 'धन और कृपा की देवी का आवाहन करते चालीस श्लोक',
  'card.tradition.laxmi': 'भक्ति · पारंपरिक',
  'card.tagline.saraswati': 'ज्ञान, कला और वाणी की देवी को समर्पित चालीस श्लोक',
  'card.tradition.saraswati': 'भक्ति · पारंपरिक',
  'chalisa.title.hanuman': 'हनुमान चालीसा',
  'chalisa.title.shiv': 'शिव चालीसा',
  'chalisa.title.durga': 'दुर्गा चालीसा',
  'chalisa.title.ganesh': 'गणेश चालीसा',
  'chalisa.title.shani': 'शनि चालीसा',
  'chalisa.title.laxmi': 'लक्ष्मी चालीसा',
  'chalisa.title.saraswati': 'सरस्वती चालीसा',
  'paath.title.bajrang-baan': 'बजरंग बाण',
  'paath.title.sankat-mochan-hanuman-ashtak': 'संकटमोचन हनुमान अष्टक',
  'paath.title.durga-kavach': 'दुर्गा कवच',
  'paath.kicker': 'पाठ',
  'paath.heading': 'और पाठ और भजन।',
  'paath.blurb':
    'सात चालीसाओं से आगे के पाठ — रक्षा, साहस और बाधाएँ दूर करने के लिए। हर पाठ उसी पाठक में और उसी आवाज़ के साथ खुलता है।',

  'features.heading': 'दैनिक पाठ के लिए रचा गया',
  'features.zen.title': 'ज़ेन रीडर',
  'features.zen.body': 'एक टैप में पूरा इंटरफ़ेस सिमट जाता है। बस शब्द, पृष्ठ पर साँस लेते हुए।',
  'features.tele.title': 'टेलीप्रॉम्प्टर मोड',
  'features.tele.body': 'हाथ मुक्त ऑटो-स्क्रॉल, पाँच-स्तर की गति के साथ। बैठकर, हाथ जोड़कर या खड़े होकर पढ़ें।',
  'features.sankalp.title': 'संकल्प श्रृंखला',
  'features.sankalp.body': '11, 21 या 40 दिन। हर दिन चिह्नित करें। प्रगति आपके डिवाइस पर रहती है — और कहीं नहीं।',

  'philosophy.kicker': 'हमारा वादा',
  'philosophy.text': 'कोई बैनर नहीं। कोई न्यूज़लेटर नहीं। कोई क्रिकेट स्कोर नहीं। कोई बिन माँगा दान नहीं।',
  'philosophy.textEm': 'केवल स्तोत्र।',

  'faq.kicker': 'अक्सर पूछे जाने वाले',
  'faq.heading': 'त्वरित उत्तर।',
  'faq.subtitle': 'चालीसा क्या है, और यह रीडर किस तरह उपयोग के लिए बना है — इसकी मूल बातें।',
  'faq.q1': 'चालीसा क्या है?',
  'faq.a1':
    'चालीसा किसी देवता की स्तुति में रचित चालीस श्लोकों का एक भक्ति भजन है (हिन्दी में "चालीस" का अर्थ है चालीस)। सबसे प्रसिद्ध है गोस्वामी तुलसीदास रचित हनुमान चालीसा। इस पुस्तकालय में शिव, गणेश, दुर्गा, शनि, लक्ष्मी और सरस्वती चालीसा भी शामिल हैं।',
  'faq.q2': 'मैं इस साइट का उपयोग कैसे करूँ?',
  'faq.a2':
    'पुस्तकालय से कोई भी चालीसा चुनें। रीडर में टूलबार से हिन्दी, तेलुगु, तमिल, कन्नड़, बंगाली और अंग्रेज़ी लिपियों के बीच बदलें; प्राथमिक लिपि के नीचे रोमन लिप्यंतरण देखने के लिए "अंग्रेज़ी दिखाएँ" चालू करें; हाथ-मुक्त टेलीप्रॉम्प्टर के लिए ऑटो-स्क्रॉल दबाएँ, या सब कुछ छिपाने के लिए ज़ेन। आपकी पसंद (थीम, लिपि, फ़ॉन्ट आकार) इस डिवाइस पर याद रखी जाती है।',
  'faq.q3': 'कौन-सी भाषाएँ और लिपियाँ समर्थित हैं?',
  'faq.a3':
    'हर चालीसा का हर श्लोक छह लिपियों में प्रस्तुत है: हिन्दी (देवनागरी), तेलुगु, तमिल, कन्नड़, बंगाली और अंग्रेज़ी (रोमन लिप्यंतरण)। क्षेत्रीय लिपियाँ मूल देवनागरी से अक्षर-दर-अक्षर लिप्यंतरित हैं, इसलिए उच्चारण सभी पाठों में समान रहता है।',
  'faq.q4': 'क्या यह रीडर मुफ़्त है? क्या विज्ञापन हैं?',
  'faq.a4':
    'पूरी तरह मुफ़्त। कोई विज्ञापन नहीं, कोई खाता नहीं, कोई न्यूज़लेटर नहीं, कोई विज्ञापन-ट्रैकिंग नहीं। आपकी संकल्प श्रृंखला आपके ब्राउज़र में रहती है और कभी किसी सर्वर पर नहीं भेजी जाती। एक बार लोड होने के बाद साइट ऑफ़लाइन भी काम करती है।',
  'faq.q5': 'संकल्प क्या है, और श्रृंखला ट्रैकर कैसे काम करता है?',
  'faq.a5':
    'संकल्प एक आध्यात्मिक प्रण है — परंपरागत रूप से किसी चालीसा को 11, 21 या 40 लगातार दिनों तक पढ़ने का वचन। जब आप किसी चालीसा पृष्ठ का 80% पढ़ लेते हैं, तो ट्रैकर उस दिन को स्वतः पूर्ण चिह्नित कर देता है। यह पूरी तरह आपके ब्राउज़र में रहता है; साइट डेटा साफ़ करने पर रिकॉर्ड मिट जाता है।',
  'faq.q6': 'इन पाठों को कौन लिखता और सत्यापित करता है?',
  'faq.a6':
    'देवनागरी श्लोक हर चालीसा के व्यापक रूप से स्वीकृत परंपरागत संस्करणों का अनुसरण करते हैं। क्षेत्रीय लिपि संस्करण देवनागरी स्रोत से बिल्ड के समय स्वतः बनते हैं, इसलिए मूल पाठ में कोई भी सुधार हर लिपि में पहुँच जाता है। कोई त्रुटि मिली? हमें About पृष्ठ के माध्यम से बताएँ।',

  'home.about.kicker': 'परिचय',
  'home.about.heading': 'हनुमान चालीसा, शांति से ऑनलाइन।',
  'article.p1':
    'हनुमान चालीसा सोलहवीं शताब्दी में कवि-संत गोस्वामी तुलसीदास द्वारा अवधी भाषा में रचित चालीस श्लोकों का एक भक्ति भजन है। हर भोर करोड़ों भक्तों द्वारा पढ़ी जाने वाली यह भगवान हनुमान — श्री राम के अमर सेवक — की संक्षिप्त आध्यात्मिक जीवनी है, और यह वचन है कि उनका नाम सच्चे मन से पुकारने पर भय, रोग और संदेह मिट जाते हैं। ऑनलाइन चालीसा एक शांत, विज्ञापन-रहित रीडर है, जो आपको ये चालीस श्लोक हर दिन, अपनी प्रिय भाषा में अच्छी तरह पढ़ने में मदद करता है।',
  'article.h1': 'हनुमान चालीसा के बोल — हिन्दी, अंग्रेज़ी, तेलुगु, कन्नड़ और तमिल में',
  'article.p2':
    'चाहे आप वाराणसी में पले-बढ़े हों, विजयवाड़ा, बेंगलुरु, चेन्नई में या सिलिकॉन वैली के किसी उपनगर में — शब्द आपके नाम जितने सहज पढ़े जाने चाहिए। इसीलिए इस साइट का हर भजन — सबसे पहले हनुमान चालीसा — पाँच एक साथ पाठों में उपलब्ध है। आप हनुमान चालीसा हिन्दी (तुलसीदास की मूल देवनागरी), तेलुगु, कन्नड़, तमिल, या अंग्रेज़ी लिप्यंतरण में पढ़ सकते हैं। रीडर में एक टैप लिपि बदलता है; दूसरा टैप आपकी प्राथमिक लिपि के नीचे रोमन बोल जोड़ देता है ताकि नए पाठक शब्दांश-दर-शब्दांश साथ चल सकें।',
  'article.h2': 'रोज़ के पाठ के लिए बना रीडर',
  'article.p3':
    'यह रीडर स्क्रॉल-गहराई नहीं, अभ्यास को ध्यान में रखकर बनाया गया है। "ज़ेन" मोड हर बटन, हेडर और फ़ुटर को समेट देता है ताकि आपके और श्लोक के बीच कुछ न रहे। टेलीप्रॉम्प्टर-शैली ऑटो-स्क्रॉल पृष्ठ को आपकी गति से आगे बढ़ाता है — प्रातः हनुमान चालीसा पाठ के समय हाथ जोड़े होने पर उपयोगी। फ़ॉन्ट आकार, थीम (उजली, सीपिया या शुद्ध काली) और लिपि की पसंद आपके डिवाइस पर याद रखी जाती है। कुछ भी सर्वर पर नहीं भेजा जाता; कोई लॉगिन नहीं, कोई न्यूज़लेटर नहीं, कोई कुकी बैनर नहीं, कोई क्रिकेट स्कोर नहीं, कोई दान मोडल नहीं।',
  'article.p4':
    'औपचारिक व्रत आरंभ करने वालों के लिए संकल्प श्रृंखला ट्रैकर आपको 11, 21 या 40 दिन के पाठ का प्रण लेने देता है और जब आप 80% पढ़ लेते हैं तो हर दिन स्वतः चिह्नित करता है। यह गणना आपके ब्राउज़र में रहती है और कहीं नहीं जाती। साइट डेटा साफ़ करने पर रिकॉर्ड मिटता है; लौटने पर वह वहीं रहता है।',
  'article.h3': 'सात चालीसाएँ, एक शांत रीडर',
  'article.p5':
    'पुस्तकालय श्री हनुमान चालीसा से आगे भी फैला है। इसके साथ आपको शिव चालीसा, गणेश चालीसा, दुर्गा चालीसा, शनि चालीसा, लक्ष्मी चालीसा और सरस्वती चालीसा मिलेंगी — हिन्दू परंपरा के सात सबसे प्रिय भजन, प्रत्येक व्यापक रूप से स्वीकृत देवनागरी स्रोतों से सत्यापित और तेलुगु, तमिल, कन्नड़ व अंग्रेज़ी में हाथ से लिप्यंतरित। इस साइट पर हनुमान चालीसा पारंपरिक दो आरंभिक दोहों, चालीस चौपाइयों और अंतिम दोहे के साथ मूल पाठ का पालन करती है।',
  'article.h4': 'साथ गाएँ, या मौन में पढ़ें',
  'article.p6':
    'कई श्रोता इस भजन तक किसी प्रिय गायक के स्वर से पहुँचते हैं — हरिहरन श्री हनुमान चालीसा, अमिताभ बच्चन का समवेत स्वर, या एम. एस. राम राव की सुंदर कांड परंपरा। जहाँ पाठ का ऑडियो उपलब्ध है, वह नीचे के प्लेयर में चलता है और हर श्लोक को पढ़े जाते समय हाइलाइट करता है; या उसे मौन रहने दें और शब्दों को स्वयं बहने दें। किसी भी तरह, हनुमान चालीसा के हिन्दी बोल और उनका अंग्रेज़ी लिप्यंतरण पृष्ठ पर पूर्णतः संरेखित रहते हैं।',
  'article.p7':
    'यदि आप हनुमान चालीसा अंग्रेज़ी में, हनुमान चालीसा तेलुगु पाठ, हनुमान चालीसा कन्नड़ लिपि, या केवल हर सुबह श्री हनुमान चालीसा पढ़ने का सबसे स्वच्छ तरीका खोज रहे हैं, तो आप सही जगह पर हैं। इस पृष्ठ को बुकमार्क करें, अपने होम स्क्रीन पर जोड़ें, और पवनपुत्र को हर दिन उसी समय अपने पास आने दें। जय श्री राम।',
  'article.cta': 'हनुमान चालीसा अभी पढ़ें',

  'sankalp.metaTitle': 'संकल्प · ऑनलाइन चालीसा',
  'sankalp.metaDescription':
    '11, 21 या 40 दिनों के चालीसा-पाठ का संकल्प लें। अपनी श्रृंखला ट्रैक करें — निजी रूप से, इसी डिवाइस पर।',
  'sankalp.kicker': 'संकल्प · संकल्प',
  'sankalp.heading': 'अपने आप से एक वचन।',
  'sankalp.subtitle':
    'संकल्प शांत दृढ़ निश्चय की प्राचीन परंपरा है — साधना आप चुनते हैं, अवधि आप चुनते हैं, और आप प्रतिदिन उपस्थित रहते हैं। बस इतना ही।',
  'sankalp.plan11': 'एक छोटा, उदार व्रत — बदलाव महसूस करने के लिए पर्याप्त।',
  'sankalp.plan21': 'पारंपरिक एकादश का दुगुना — एक वास्तविक लय बनती है।',
  'sankalp.plan40': 'मंडल — एक पूर्ण चक्र। गहरा, शांत, रूपांतरकारी।',
  'sankalp.noteKicker': 'एक विनम्र सूचना',
  'sankalp.noteBody':
    'आपकी श्रृंखला केवल इसी ब्राउज़र में संग्रहीत होती है। कुछ भी अपलोड नहीं होता, कुछ भी साझा नहीं होता, और साइट डेटा साफ़ करने पर यह रीसेट हो जाएगी। यह जान-बूझकर है — संकल्प आपके और ईश्वर के बीच है, किसी सर्वर के साथ नहीं।',

  'about.metaTitle': 'हमारे बारे में · ऑनलाइन चालीसा',
  'about.metaDescription':
    'ऑनलाइन चालीसा क्यों अस्तित्व में है — पवित्र हिन्दू स्तोत्रों के लिए ध्यान-भंग रहित, विज्ञापन-मुक्त और गोपनीयता-सम्मानित स्थान।',
  'about.kicker': 'हमारे बारे में',
  'about.heading': 'एक तीर्थ, केवल वेबसाइट नहीं।',
  'about.p1':
    'ऑनलाइन चालीसा एक कारण से बनाया गया: जिन पवित्र पाठों से लोग सबसे अधिक प्रेम करते हैं — हनुमान चालीसा, शिव चालीसा, गणेश, दुर्गा, शनि — वे आधुनिक वेब पर बैनर विज्ञापनों, ऑटोप्ले वीडियो, पॉपअप सदस्यताओं और क्रिकेट स्कोर मेन्यू के पीछे फँसे हुए हैं।',
  'about.p2': 'स्तोत्र के पास यह सब नहीं होना चाहिए।',
  'about.p3':
    'इसलिए हमने इसका उल्टा बनाया। एक शांत पृष्ठ। सौम्य टाइपोग्राफी। सुबह के पाठ के लिए सेपिया मोड और रात्रि के लिए सच्चा डार्क मोड। इंटरफ़ेस को एक बटन में छिपाने की सुविधा। हाथ जोड़े बैठकर पढ़ने वाले वरिष्ठ भक्तों के लिए हैंड्स-फ्री टेलीप्रॉम्प्टर। नीचे वैकल्पिक ऑडियो, जो ज़ेन मोड में स्वयं ओझल हो जाता है।',
  'about.noDo.heading': 'हम क्या नहीं करते',
  'about.noDo.1': 'कभी भी विज्ञापन नहीं।',
  'about.noDo.2': 'कोई विज्ञापन-ट्रैकर नहीं, और आपके पाठ की कोई व्यक्तिगत प्रोफ़ाइल नहीं।',
  'about.noDo.3': 'कोई खाता, साइन-अप या ईमेल आवश्यक नहीं।',
  'about.noDo.4': 'कोई पुश नोटिफिकेशन या परेशान करने वाले रिमाइंडर नहीं।',
  'about.sankalp.heading': 'संकल्प आपका है',
  'about.sankalp.body':
    'श्रृंखला ट्रैकर पूरी तरह आपके ब्राउज़र के लोकल स्टोरेज में रहता है। यह आपके डिवाइस से बाहर नहीं जाता। यदि आप ब्राउज़र डेटा साफ़ करते हैं, यह रीसेट हो जाएगा — गोपनीयता की यही कीमत है, और हमें यह उचित लगती है।',
  'about.text.heading': 'पाठ के बारे में',
  'about.text.body':
    'देवनागरी श्लोक और रोमन लिप्यंतरण दीर्घकालीन भक्ति परंपराओं से लिए गए हैं और अनेक प्रकाशित संस्करणों से मिलान किए गए हैं। यदि आपको कोई त्रुटि दिखे तो कृपया बताइए — शास्त्र की शुद्धता हमारी सावधानी का विषय है।',
  'about.blessing': '॥ शुभम् अस्तु ॥',

  'footer.blurb':
    'ऑनलाइन चालीसा एक भक्ति रीडर है — कोई विज्ञापन नहीं, कोई विज्ञापन-ट्रैकिंग नहीं, कोई खाता नहीं। शांति से पढ़ें, और आपकी साधना अटल रहे।',
  'footer.site': 'साइट',
  'footer.legal': 'कानूनी',
  'footer.home': 'मुख्य पृष्ठ',
  'footer.chalisas': 'चालीसा',
  'footer.paath': 'पाठ',
  'footer.sankalp': 'संकल्प',
  'footer.aboutUs': 'हमारे बारे में',
  'footer.privacy': 'गोपनीयता नीति',
  'footer.terms': 'नियम व शर्तें',
  'footer.made': 'शांत भक्ति से बनाया गया',

  'reader.script': 'लिपि',
  'reader.script.hi': 'देवनागरी (हिन्दी)',
  'reader.script.te': 'तेलुगु',
  'reader.script.ta': 'तमिल',
  'reader.script.kn': 'कन्नड़',
  'reader.script.bn': 'बंगाली',
  'reader.script.en': 'अंग्रेज़ी (लिप्यंतरण)',
  'reader.showEnglish': 'अंग्रेज़ी दिखाएँ',
  'reader.showEnglishTitle': 'हर श्लोक के नीचे अंग्रेज़ी लिप्यंतरण दिखाएँ',
  'reader.en': 'EN',
  'reader.decrease': 'अक्षर आकार घटाएँ',
  'reader.smaller': 'छोटे अक्षर',
  'reader.increase': 'अक्षर आकार बढ़ाएँ',
  'reader.larger': 'बड़े अक्षर',
  'reader.autoscroll': 'ऑटो-स्क्रॉल',
  'reader.autoscrollTitle': 'टेलीप्रॉम्प्टर — ऑटो-स्क्रॉल',
  'reader.zen': 'ज़ेन',
  'reader.zenTitle': 'ज़ेन मोड — सब कुछ छिपाएँ',
  'reader.speed': 'गति',
  'reader.stop': 'रोकें',
  'reader.exitZen': 'ज़ेन से बाहर',
  'reader.exitZenAria': 'ज़ेन मोड से बाहर निकलें',
  'audio.player': 'ऑडियो प्लेयर',
  'audio.playPause': 'चलाएँ या रोकें',
  'audio.seek': 'आगे/पीछे जाएँ',
  'audio.comingSoon': 'ऑडियो पाठ जल्द आ रहा है — अभी शांति से साथ में पढ़ें।',
  'audio.recitation': 'पाठ',
  'streak.kicker': 'संकल्प',
  'streak.heading': 'एक शांत संकल्प',
  'streak.blurb':
    'अवधि चुनें और पढ़ते समय प्रत्येक दिन को चिह्नित करें। प्रगति इसी डिवाइस पर रहती है — कोई खाता नहीं, कोई क्लाउड नहीं, कोई अनचाहे रिमाइंडर नहीं।',
  'streak.lengthAria': 'संकल्प अवधि',
  'streak.daysUnit': 'दिन',
  'streak.of': '/',
  'streak.currentStreak': 'वर्तमान लगातार',
  'streak.dailyProgress': 'दैनिक प्रगति',
  'streak.markToday': 'आज पूर्ण चिह्नित करें',
  'streak.todayMarked': '✓ आज चिह्नित · रद्द करें',
  'streak.reset': 'संकल्प रीसेट करें',
  'streak.resetConfirm': 'अपना संकल्प रीसेट करें? इससे इस डिवाइस के सभी निशान हट जाएंगे।',
  'streak.day': 'दिन',
  'streak.dayWord': 'दिन',
  'streak.completed': 'पूर्ण',
  'reader.speed.slow': 'धीमी',
  'reader.speed.medium': 'मध्यम',
  'reader.speed.fast': 'तेज़',

  'chalisa.prev': 'पिछला',
  'chalisa.next': 'अगला',
  'chalisa.backToLibrary': 'पुस्तकालय पर लौटें',
  'chalisa.faqHeading': 'अक्सर पूछे जाने वाले',
  'chalisa.faqKicker': 'प्रश्न व उत्तर',
  'chalisa.moreChalisas': 'और चालीसाएँ',
  'chalisa.readAria': 'पढ़ें',
  'chalisa.blessing': 'आपका पाठ आपको शांति प्रदान करे।',
  'chalisa.alsoRead': 'यह भी पढ़ें',
  'chalisa.aboutPrefix': 'इस बारे में:',
  'chalisa.faqSubtitle':
    'इस चालीसा के बारे में सबसे आम प्रश्नों के उत्तर — इसकी उत्पत्ति, अर्थ और दैनिक अभ्यास।',
  'chalisa.home': 'मुख्य पृष्ठ',

  'notfound.heading': 'यह पृष्ठ भटक गया है।',
  'notfound.body':
    'आप जो पृष्ठ खोज रहे थे वह यहाँ नहीं है। शायद इसे स्थानांतरित किया गया, या यह कभी था ही नहीं। आइए हम आपको फिर शांति की ओर ले चलें।',
  'notfound.cta': 'मुख्य पृष्ठ पर लौटें',
  'notfound.browse': 'चालीसाएँ देखें',
  'meta.langName': 'हिन्दी',
  'meta.home.title': 'हनुमान चालीसा के बोल — हिन्दी, अंग्रेज़ी, तेलुगु, कन्नड़ व तमिल में · ऑनलाइन चालीसा',
  'meta.home.description':
    'हनुमान चालीसा को हिन्दी, अंग्रेज़ी, तेलुगु, कन्नड़ और तमिल में एक मुफ़्त, विज्ञापन-रहित रीडर में पढ़ें। ऑटो-स्क्रॉल पाठ करें और अपना 11 / 21 / 40-दिन का संकल्प ट्रैक करें — साथ ही शिव, गणेश, दुर्गा, शनि, लक्ष्मी व सरस्वती चालीसा।',
};

// ─────────────────────────────────────────────────────────────────
// বাংলা (Bengali)
// ─────────────────────────────────────────────────────────────────
const bn: Partial<Record<UIStringKey, string>> = {
  'nav.chalisas': 'চালিসা',
  'nav.sankalp': 'সংকল্প',
  'nav.paath': 'পাঠ',
  'nav.about': 'আমাদের সম্পর্কে',
  'nav.home': 'হোম',
  'nav.aboutUs': 'আমাদের সম্পর্কে',
  'header.homeAria': 'অনলাইন চালিসা — হোম',
  'header.themeCycle': 'থিম পরিবর্তন',
  'header.themeCycleTitle': 'থিম পরিবর্তন (হালকা / সিপিয়া / গাঢ়)',
  'header.beginSankalp': 'সংকল্প শুরু করুন',
  'header.startReading': 'পড়া শুরু করুন',
  'lang.switcher': 'ভাষা',
  'lang.choose': 'ভাষা নির্বাচন করুন',

  'hero.title1': 'একটি শান্ত স্থান',
  'hero.title2': 'আপনার দৈনিক',
  'hero.titleWord': 'চালিসার জন্য',
  'hero.subtitle':
    'হনুমান চালিসা এবং আরও ছয়টি প্রিয় চালিসা হিন্দি, তেলুগু, তামিল, কন্নড়, বাংলা বা ইংরেজিতে পড়ুন — একটি বিঘ্নহীন রিডারে, যা প্রতিদিনের পাঠের জন্য তৈরি, ক্লিকের জন্য নয়।',
  'hero.ctaPrimary': 'হনুমান চালিসা দিয়ে শুরু করুন',
  'hero.ctaSecondary': 'গ্রন্থাগার দেখুন',
  'hero.availableIn': 'উপলব্ধ ভাষাসমূহ',

  'library.kicker': 'গ্রন্থাগার',
  'library.heading': 'সাতটি চালিসা।',
  'library.blurb':
    'যাচাইকৃত দেবনাগরী পাঠ, প্রতিটি শ্লোকের জন্য তেলুগু, তামিল, কন্নড় ও ইংরেজিতে প্রতিবর্ণীকৃত। একটি বেছে নিন এবং পড়া শুরু করুন — নিয়ন্ত্রণগুলি আপনার পথ থেকে সরে থাকে।',

  'card.read': 'পড়ুন',
  'card.readPrefix': 'পড়ুন',
  'card.verses': 'শ্লোক',
  'card.min': 'মিনিট',
  'card.tagline.hanuman': 'পবনপুত্রের প্রতি ভক্তির চল্লিশটি শ্লোক',
  'card.tradition.hanuman': 'অবধী · তুলসীদাস · আনু. ১৬শ শতক',
  'card.tagline.shiv': 'মহাদেব, শুভংকরের উদ্দেশ্যে চল্লিশটি শ্লোক',
  'card.tradition.shiv': 'হিন্দি ভক্তি · ১৯শ শতক',
  'card.tagline.durga': 'অজেয় মায়ের উদ্দেশ্যে চল্লিশটি শ্লোক',
  'card.tradition.durga': 'হিন্দি ভক্তি · দেবী কবচ ঐতিহ্য',
  'card.tagline.ganesh': 'বিঘ্নহর্তার উদ্দেশ্যে চল্লিশটি শ্লোক',
  'card.tradition.ganesh': 'হিন্দি ভক্তি',
  'card.tagline.shani': 'কর্ম ও ন্যায়ের অধিপতির উদ্দেশ্যে চল্লিশটি শ্লোক',
  'card.tradition.shani': 'হিন্দি ভক্তি',
  'card.tagline.laxmi': 'ধন ও কৃপার দেবীর আবাহনে চল্লিশটি শ্লোক',
  'card.tradition.laxmi': 'ভক্তি · পারম্পরিক',
  'card.tagline.saraswati': 'জ্ঞান, শিল্প ও বাণীর দেবীর উদ্দেশ্যে চল্লিশটি শ্লোক',
  'card.tradition.saraswati': 'ভক্তি · পারম্পরিক',
  'chalisa.title.hanuman': 'হনুমান চালিসা',
  'chalisa.title.shiv': 'শিব চালিসা',
  'chalisa.title.durga': 'দুর্গা চালিসা',
  'chalisa.title.ganesh': 'গণেশ চালিসা',
  'chalisa.title.shani': 'শনি চালিসা',
  'chalisa.title.laxmi': 'লক্ষ্মী চালিসা',
  'chalisa.title.saraswati': 'সরস্বতী চালিসা',

  'features.heading': 'দৈনিক পাঠের জন্য নির্মিত',
  'features.zen.title': 'জেন রিডার',
  'features.zen.body': 'একটি স্পর্শে পুরো ইন্টারফেস গুটিয়ে যায়। শুধু শব্দ, পৃষ্ঠায় নিঃশ্বাস নিচ্ছে।',
  'features.tele.title': 'টেলিপ্রম্পটার মোড',
  'features.tele.body': 'হাত-মুক্ত অটো-স্ক্রল, পাঁচ-ধাপের গতি সহ। বসে, হাত জোড় করে বা দাঁড়িয়ে পড়ুন।',
  'features.sankalp.title': 'সংকল্প ধারা',
  'features.sankalp.body': '১১, ২১ বা ৪০ দিন। প্রতিদিন চিহ্নিত করুন। অগ্রগতি আপনার ডিভাইসেই থাকে — আর কোথাও নয়।',

  'philosophy.kicker': 'আমাদের প্রতিশ্রুতি',
  'philosophy.text': 'কোনো ব্যানার নয়। কোনো নিউজলেটার নয়। কোনো ক্রিকেট স্কোর নয়। না-চাওয়া কোনো দান নয়।',
  'philosophy.textEm': 'শুধু স্তোত্র।',

  'faq.kicker': 'প্রায়শই জিজ্ঞাসিত',
  'faq.heading': 'দ্রুত উত্তর।',
  'faq.subtitle': 'চালিসা কী, এবং এই রিডারটি কীভাবে ব্যবহারের জন্য তৈরি — তার মূল কথা।',
  'faq.q1': 'চালিসা কী?',
  'faq.a1':
    'চালিসা হল কোনো দেবতার স্তুতিতে রচিত চল্লিশটি শ্লোকের একটি ভক্তিমূলক স্তোত্র (হিন্দিতে "চালিস" অর্থ চল্লিশ)। সবচেয়ে বিখ্যাত হল গোস্বামী তুলসীদাস রচিত হনুমান চালিসা। এই গ্রন্থাগারে শিব, গণেশ, দুর্গা, শনি, লক্ষ্মী ও সরস্বতী চালিসাও রয়েছে।',
  'faq.q2': 'আমি এই সাইটটি কীভাবে ব্যবহার করব?',
  'faq.a2':
    'গ্রন্থাগার থেকে যেকোনো চালিসা বেছে নিন। রিডারে টুলবার দিয়ে হিন্দি, তেলুগু, তামিল, কন্নড়, বাংলা ও ইংরেজি লিপির মধ্যে বদল করুন; প্রধান লিপির নিচে রোমান প্রতিবর্ণীকরণ দেখতে "ইংরেজি দেখান" চালু করুন; হাত-মুক্ত টেলিপ্রম্পটারের জন্য অটো-স্ক্রল চাপুন, বা সব লুকাতে জেন। আপনার পছন্দ (থিম, লিপি, ফন্ট আকার) এই ডিভাইসে মনে রাখা হয়।',
  'faq.q3': 'কোন ভাষা ও লিপি সমর্থিত?',
  'faq.a3':
    'প্রতিটি চালিসার প্রতিটি শ্লোক ছয়টি লিপিতে উপস্থাপিত: হিন্দি (দেবনাগরী), তেলুগু, তামিল, কন্নড়, বাংলা ও ইংরেজি (রোমান প্রতিবর্ণীকরণ)। আঞ্চলিক লিপিগুলি মূল দেবনাগরী থেকে অক্ষরে-অক্ষরে প্রতিবর্ণীকৃত, তাই সব পাঠে উচ্চারণ অভিন্ন থাকে।',
  'faq.q4': 'এই রিডার কি বিনামূল্যে? বিজ্ঞাপন আছে কি?',
  'faq.a4':
    'সম্পূর্ণ বিনামূল্যে। কোনো বিজ্ঞাপন নেই, অ্যাকাউন্ট নেই, নিউজলেটার নেই, বিজ্ঞাপন-ট্র্যাকিং নেই। আপনার সংকল্প ধারা আপনার ব্রাউজারেই থাকে এবং কখনও কোনো সার্ভারে পাঠানো হয় না। একবার লোড হলে সাইটটি অফলাইনেও কাজ করে।',
  'faq.q5': 'সংকল্প কী, এবং ধারা ট্র্যাকার কীভাবে কাজ করে?',
  'faq.a5':
    'সংকল্প হল একটি আধ্যাত্মিক প্রতিজ্ঞা — ঐতিহ্যগতভাবে টানা ১১, ২১ বা ৪০ দিন কোনো চালিসা পাঠের অঙ্গীকার। আপনি যখন কোনো চালিসা পৃষ্ঠার ৮০% পড়েন, ট্র্যাকার সেই দিনটি স্বয়ংক্রিয়ভাবে সম্পূর্ণ চিহ্নিত করে। এটি সম্পূর্ণভাবে আপনার ব্রাউজারে থাকে; সাইট ডেটা মুছলে রেকর্ড মুছে যায়।',
  'faq.q6': 'এই পাঠগুলি কে লেখে ও যাচাই করে?',
  'faq.a6':
    'দেবনাগরী শ্লোকগুলি প্রতিটি চালিসার ব্যাপকভাবে স্বীকৃত ঐতিহ্যবাহী সংস্করণ অনুসরণ করে। আঞ্চলিক লিপি সংস্করণগুলি দেবনাগরী উৎস থেকে বিল্ডের সময় স্বয়ংক্রিয়ভাবে তৈরি হয়, তাই মূল পাঠে যেকোনো সংশোধন প্রতিটি লিপিতে পৌঁছায়। ভুল পেয়েছেন? About পৃষ্ঠার মাধ্যমে আমাদের জানান।',

  'home.about.kicker': 'পরিচিতি',
  'home.about.heading': 'হনুমান চালিসা, শান্তিতে অনলাইনে।',
  'article.cta': 'এখনই হনুমান চালিসা পড়ুন',

  'sankalp.metaTitle': 'সংকল্প · অনলাইন চালিসা',
  'sankalp.metaDescription':
    '১১, ২১ বা ৪০ দিনের চালিসা-পাঠের প্রতিশ্রুতি নিন। আপনার ধারাবাহিকতা ট্র্যাক করুন — গোপনে, এই ডিভাইসেই।',
  'sankalp.kicker': 'সংকল্প · संकल्प',
  'sankalp.heading': 'নিজের কাছে একটি প্রতিশ্রুতি।',
  'sankalp.subtitle':
    'সংকল্প হল নীরব অটলতার প্রাচীন অনুশীলন — সাধনা আপনি ঠিক করেন, সময়কালও আপনি ঠিক করেন, আর প্রতিদিন উপস্থিত থাকেন। এর বেশি কিছু নয়।',
  'sankalp.plan11': 'একটি ছোট কিন্তু অর্থপূর্ণ ব্রত — পরিবর্তন টের পাওয়ার জন্য যথেষ্ট।',
  'sankalp.plan21': 'একাদশের দ্বিগুণ — প্রকৃত ছন্দ তৈরি হয়।',
  'sankalp.plan40': 'মণ্ডল — পূর্ণ এক চক্র। গভীর, শান্ত, রূপান্তরময়।',
  'sankalp.noteKicker': 'একটি নম্র নোট',
  'sankalp.noteBody':
    'আপনার ধারাবাহিকতার তথ্য কেবল এই ব্রাউজারেই থাকে। কিছুই আপলোড হয় না, কিছুই শেয়ার হয় না, আর সাইটের ডেটা মুছে দিলে এটি রিসেট হবে। ইচ্ছাকৃতভাবেই এমন — সংকল্প আপনার ও ঈশ্বরের মধ্যে, আপনার ও সার্ভারের মধ্যে নয়।',

  'about.metaTitle': 'আমাদের সম্পর্কে · অনলাইন চালিসা',
  'about.metaDescription':
    'কেন অনলাইন চালিসা তৈরি হয়েছে — পবিত্র হিন্দু স্তোত্রের জন্য বিজ্ঞাপনমুক্ত, মনোযোগ-ভঙ্গহীন, গোপনীয়তা-সম্মানিত একটি স্থান।',
  'about.kicker': 'আমাদের সম্পর্কে',
  'about.heading': 'ওয়েবসাইট নয়, এক আশ্রয়।',
  'about.p1':
    'অনলাইন চালিসা একটাই কারণে তৈরি: মানুষ যে পবিত্র পাঠগুলো সবচেয়ে ভালোবাসে — হনুমান চালিসা, শিব চালিসা, গণেশ, দুর্গা, শনি — সেগুলো আধুনিক ওয়েবে ব্যানার বিজ্ঞাপন, অটোপ্লে ভিডিও, পপআপ সাবস্ক্রিপশন এবং ক্রিকেট স্কোরের মেনুর আড়ালে আটকে আছে।',
  'about.p2': 'স্তোত্রের কাছে এসবের কোনো স্থান নেই।',
  'about.p3':
    'তাই আমরা তার উল্টোটা বানিয়েছি। একটি শান্ত পাতা। উষ্ণ টাইপোগ্রাফি। সকালের পাঠের জন্য সেপিয়া মোড এবং রাতের জন্য খাঁটি ডার্ক মোড। ইন্টারফেসের সবকিছু লুকিয়ে দেওয়ার একটি মাত্র বোতাম। বয়স্ক ভক্তদের জন্য হ্যান্ডস-ফ্রি টেলিপ্রম্পটার, যারা হাত জোড় করে বসে পড়তে পছন্দ করেন। নিচে ঐচ্ছিক অডিও, যা জেন মোডে নিজে থেকেই মৃদু হয়ে যায়।',
  'about.noDo.heading': 'আমরা যা করি না',
  'about.noDo.1': 'কখনও বিজ্ঞাপন নয়।',
  'about.noDo.2': 'কোনো বিজ্ঞাপন-ট্র্যাকার নেই, আপনার পাঠের কোনো ব্যক্তিগত প্রোফাইলও নেই।',
  'about.noDo.3': 'কোনো অ্যাকাউন্ট, সাইন-আপ বা ইমেইল প্রয়োজন নেই।',
  'about.noDo.4': 'কোনো পুশ নোটিফিকেশন বা বিরক্তিকর রিমাইন্ডার নয়।',
  'about.sankalp.heading': 'সংকল্প আপনার',
  'about.sankalp.body':
    'স্ট্রিক ট্র্যাকার পুরোপুরি আপনার ব্রাউজারের লোকাল স্টোরেজে থাকে। এটি কখনও আপনার ডিভাইস ছাড়ে না। আপনি ব্রাউজার ডেটা মুছে দিলে এটি রিসেট হবে — এটাই গোপনীয়তার মূল্য, আর আমাদের মতে এটি ন্যায্য।',
  'about.text.heading': 'পাঠ সম্পর্কে',
  'about.text.body':
    'দেবনাগরি শ্লোক এবং রোমান লিপ্যন্তর দীর্ঘদিনের ভক্তিমূলক ধারার ওপর ভিত্তি করে এবং একাধিক প্রকাশিত সংস্করণের সঙ্গে মিলিয়ে দেখা হয়েছে। কোনো ভুল চোখে পড়লে আমাদের জানাবেন — শাস্ত্রের নির্ভুলতা যত্নের বিষয়।',
  'about.blessing': '॥ শুভম্ অস্তু ॥',

  'footer.blurb':
    'অনলাইন চালিসা একটি ভক্তিমূলক রিডার — কোনো বিজ্ঞাপন নেই, বিজ্ঞাপন-ট্র্যাকিং নেই, অ্যাকাউন্ট নেই। শান্তিতে পড়ুন, আপনার সাধনা অবিচল থাকুক।',
  'footer.site': 'সাইট',
  'footer.legal': 'আইনি',
  'footer.home': 'হোম',
  'footer.chalisas': 'চালিসা',
  'footer.paath': 'পাঠ',
  'footer.sankalp': 'সংকল্প',
  'footer.aboutUs': 'আমাদের সম্পর্কে',
  'footer.privacy': 'গোপনীয়তা নীতি',
  'footer.terms': 'নিয়ম ও শর্তাবলী',
  'footer.made': 'শান্ত ভক্তিতে তৈরি',

  'reader.script': 'লিপি',
  'reader.script.hi': 'দেবনাগরী (হিন্দি)',
  'reader.script.te': 'তেলুগু',
  'reader.script.ta': 'তামিল',
  'reader.script.kn': 'কন্নড়',
  'reader.script.bn': 'বাংলা',
  'reader.script.en': 'ইংরেজি (প্রতিবর্ণীকরণ)',
  'reader.showEnglish': 'ইংরেজি দেখান',
  'reader.showEnglishTitle': 'প্রতিটি শ্লোকের নিচে ইংরেজি প্রতিবর্ণীকরণ দেখান',
  'reader.en': 'EN',
  'reader.decrease': 'লেখার আকার কমান',
  'reader.smaller': 'ছোট লেখা',
  'reader.increase': 'লেখার আকার বাড়ান',
  'reader.larger': 'বড় লেখা',
  'reader.autoscroll': 'অটো-স্ক্রল',
  'reader.autoscrollTitle': 'টেলিপ্রম্পটার — অটো-স্ক্রল',
  'reader.zen': 'জেন',
  'reader.zenTitle': 'জেন মোড — সব লুকান',
  'reader.speed': 'গতি',
  'reader.stop': 'থামান',
  'reader.exitZen': 'জেন থেকে বেরোন',
  'reader.exitZenAria': 'জেন মোড থেকে বেরিয়ে যান',
  'streak.kicker': 'সংকল্প',
  'streak.heading': 'একটি নীরব সংকল্প',
  'streak.blurb':
    'একটি মেয়াদ বেছে নিন এবং পড়ার সময় প্রতিদিন চিহ্নিত করুন। অগ্রগতি এই ডিভাইসেই থাকে — কোনো অ্যাকাউন্ট নেই, কোনো ক্লাউড নেই, চাওয়া হয়নি এমন কোনো রিমাইন্ডার নেই।',
  'streak.lengthAria': 'সংকল্পের মেয়াদ',
  'streak.daysUnit': 'দিন',
  'streak.of': '/',
  'streak.currentStreak': 'বর্তমান ধারা',
  'streak.dailyProgress': 'দৈনিক অগ্রগতি',
  'streak.markToday': 'আজ সম্পূর্ণ চিহ্নিত করুন',
  'streak.todayMarked': '✓ আজ চিহ্নিত · বাতিল করুন',
  'streak.reset': 'সংকল্প রিসেট করুন',
  'streak.resetConfirm': 'আপনার সংকল্প রিসেট করবেন? এতে এই ডিভাইসের সব চিহ্ন মুছে যাবে।',
  'streak.day': 'দিন',
  'streak.dayWord': 'দিন',
  'streak.completed': 'সম্পন্ন',
  'reader.speed.slow': 'ধীর',
  'reader.speed.medium': 'মাঝারি',
  'reader.speed.fast': 'দ্রুত',

  'chalisa.prev': 'পূর্ববর্তী',
  'chalisa.next': 'পরবর্তী',
  'chalisa.backToLibrary': 'গ্রন্থাগারে ফিরুন',
  'chalisa.faqHeading': 'প্রায়শই জিজ্ঞাসিত',
  'chalisa.faqKicker': 'প্রশ্ন ও উত্তর',
  'chalisa.moreChalisas': 'আরও চালিসা',
  'chalisa.readAria': 'পড়ুন',

  'notfound.heading': 'এই পৃষ্ঠাটি পথ হারিয়েছে।',
  'notfound.body':
    'আপনি যে পৃষ্ঠাটি খুঁজছিলেন তা এখানে নেই। হয়তো এটি সরানো হয়েছে, অথবা কখনও ছিল না। আসুন আমরা আপনাকে আবার শান্তির দিকে নিয়ে যাই।',
  'notfound.cta': 'হোমে ফিরুন',
  'notfound.browse': 'চালিসাগুলি দেখুন',
  'meta.langName': 'বাংলা',
  'meta.home.title': 'হনুমান চালিসা — হিন্দি, ইংরেজি, তেলুগু, কন্নড় ও তামিলে · অনলাইন চালিসা',
  'meta.home.description':
    'হনুমান চালিসা হিন্দি, ইংরেজি, তেলুগু, কন্নড় ও তামিলে একটি বিনামূল্যের, বিজ্ঞাপনহীন রিডারে পড়ুন। অটো-স্ক্রল পাঠ করুন এবং আপনার ১১ / ২১ / ৪০-দিনের সংকল্প ট্র্যাক করুন — সঙ্গে শিব, গণেশ, দুর্গা, শনি, লক্ষ্মী ও সরস্বতী চালিসা।',
};

// ─────────────────────────────────────────────────────────────────
// తెలుగు (Telugu)
// ─────────────────────────────────────────────────────────────────
const te: Partial<Record<UIStringKey, string>> = {
  'nav.chalisas': 'చాలీసా',
  'nav.sankalp': 'సంకల్పం',
  'nav.paath': 'పాఠం',
  'nav.about': 'మా గురించి',
  'nav.home': 'హోమ్',
  'nav.aboutUs': 'మా గురించి',
  'header.homeAria': 'ఆన్‌లైన్ చాలీసా — హోమ్',
  'header.themeCycle': 'థీమ్ మార్చండి',
  'header.themeCycleTitle': 'థీమ్ మార్చండి (లేత / సీపియా / ముదురు)',
  'header.beginSankalp': 'సంకల్పం ప్రారంభించండి',
  'header.startReading': 'చదవడం ప్రారంభించండి',
  'lang.switcher': 'భాష',
  'lang.choose': 'భాష ఎంచుకోండి',

  'hero.title1': 'ఒక ప్రశాంత స్థలం',
  'hero.title2': 'మీ దైనందిన',
  'hero.titleWord': 'చాలీసా కోసం',
  'hero.subtitle':
    'హనుమాన్ చాలీసా మరియు మరో ఆరు అత్యంత ప్రియమైన చాలీసాలను హిందీ, తెలుగు, తమిళం, కన్నడ, బెంగాలీ లేదా ఇంగ్లీష్‌లో చదవండి — క్లిక్‌ల కోసం కాదు, రోజువారీ పారాయణం కోసం రూపొందించిన ప్రశాంత రీడర్‌లో.',
  'hero.ctaPrimary': 'హనుమాన్ చాలీసాతో ప్రారంభించండి',
  'hero.ctaSecondary': 'గ్రంథాలయం చూడండి',
  'hero.availableIn': 'అందుబాటులో ఉన్న భాషలు',

  'library.kicker': 'గ్రంథాలయం',
  'library.heading': 'ఏడు చాలీసాలు.',
  'library.blurb':
    'ధృవీకరించిన దేవనాగరి పాఠం, ప్రతి శ్లోకానికీ తెలుగు, తమిళం, కన్నడ, ఇంగ్లీష్‌లో లిప్యంతరీకరించబడింది. ఒకటి ఎంచుకుని చదవడం ప్రారంభించండి — నియంత్రణలు మీ దారికి అడ్డు రావు.',

  'card.read': 'చదవండి',
  'card.readPrefix': 'చదవండి',
  'card.verses': 'శ్లోకాలు',
  'card.min': 'నిమి',
  'card.tagline.hanuman': 'పవనపుత్రునికి అంకితమైన నలభై భక్తి శ్లోకాలు',
  'card.tradition.hanuman': 'అవధీ · తులసీదాస్ · సుమారు 16వ శతాబ్దం',
  'card.tagline.shiv': 'మహాదేవునికి అంకితమైన నలభై శ్లోకాలు',
  'card.tradition.shiv': 'హిందీ భక్తి · 19వ శతాబ్దం',
  'card.tagline.durga': 'అజేయ తల్లికి అంకితమైన నలభై శ్లోకాలు',
  'card.tradition.durga': 'హిందీ భక్తి · దేవీ కవచ సంప్రదాయం',
  'card.tagline.ganesh': 'విఘ్నాలను తొలగించే దేవునికి అంకితమైన నలభై శ్లోకాలు',
  'card.tradition.ganesh': 'హిందీ భక్తి',
  'card.tagline.shani': 'కర్మ, న్యాయాధిపతికి అంకితమైన నలభై శ్లోకాలు',
  'card.tradition.shani': 'హిందీ భక్తి',
  'card.tagline.laxmi': 'శ్రీ, కృపలను ఆహ్వానించే నలభై ప్రార్థనా శ్లోకాలు',
  'card.tradition.laxmi': 'భక్తి · సాంప్రదాయిక',
  'card.tagline.saraswati': 'జ్ఞానం, కళ, వాక్దేవికి అంకితమైన నలభై శ్లోకాలు',
  'card.tradition.saraswati': 'భక్తి · సాంప్రదాయిక',
  'chalisa.title.hanuman': 'హనుమాన్ చాలీసా',
  'chalisa.title.shiv': 'శివ చాలీసా',
  'chalisa.title.durga': 'దుర్గా చాలీసా',
  'chalisa.title.ganesh': 'గణేశ చాలీసా',
  'chalisa.title.shani': 'శని చాలీసా',
  'chalisa.title.laxmi': 'లక్ష్మీ చాలీసా',
  'chalisa.title.saraswati': 'సరస్వతీ చాలీసా',

  'features.heading': 'నిత్య పఠనం కోసం రూపొందించబడింది',
  'features.zen.title': 'జెన్ రీడర్',
  'features.zen.body': 'ఒక్క తాకిడితో మొత్తం ఇంటర్‌ఫేస్ మడతపడుతుంది. కేవలం పదాలు, పేజీపై శ్వాసిస్తూ.',
  'features.tele.title': 'టెలిప్రాంప్టర్ మోడ్',
  'features.tele.body': 'చేతులు లేకుండా ఆటో-స్క్రోల్, ఐదు-స్థాయి వేగంతో. కూర్చుని, చేతులు జోడించి లేదా నిలబడి చదవండి.',
  'features.sankalp.title': 'సంకల్ప క్రమం',
  'features.sankalp.body': '11, 21 లేదా 40 రోజులు. ప్రతి రోజు గుర్తించండి. పురోగతి మీ పరికరంలోనే ఉంటుంది — మరెక్కడా కాదు.',

  'philosophy.kicker': 'మా వాగ్దానం',
  'philosophy.text': 'బ్యానర్‌లు లేవు. వార్తాలేఖలు లేవు. క్రికెట్ స్కోర్‌లు లేవు. అడగని విరాళాలు లేవు.',
  'philosophy.textEm': 'కేవలం స్తోత్రం.',

  'faq.kicker': 'తరచుగా అడిగేవి',
  'faq.heading': 'త్వరిత సమాధానాలు.',
  'faq.subtitle': 'చాలీసా అంటే ఏమిటి, ఈ రీడర్ ఎలా ఉపయోగించడానికి రూపొందించబడింది — ప్రాథమిక విషయాలు.',
  'faq.q1': 'చాలీసా అంటే ఏమిటి?',
  'faq.a1':
    'చాలీసా అనేది ఒక దేవత స్తుతిలో రచించిన నలభై శ్లోకాల భక్తి స్తోత్రం (హిందీలో "చాలీస్" అంటే నలభై). అత్యంత ప్రసిద్ధమైనది గోస్వామి తులసీదాస్ రచించిన హనుమాన్ చాలీసా. ఈ గ్రంథాలయంలో శివ, గణేశ, దుర్గా, శని, లక్ష్మీ మరియు సరస్వతీ చాలీసాలు కూడా ఉన్నాయి.',
  'faq.q2': 'ఈ సైట్‌ను నేను ఎలా ఉపయోగించాలి?',
  'faq.a2':
    'గ్రంథాలయం నుండి ఏదైనా చాలీసా ఎంచుకోండి. రీడర్‌లో టూల్‌బార్‌తో హిందీ, తెలుగు, తమిళం, కన్నడ, బెంగాలీ, ఇంగ్లీష్ లిపుల మధ్య మారండి; ప్రధాన లిపి కింద రోమన్ లిప్యంతరీకరణ చూడటానికి "ఇంగ్లీష్ చూపు" ఆన్ చేయండి; చేతులు లేని టెలిప్రాంప్టర్ కోసం ఆటో-స్క్రోల్ నొక్కండి, లేదా అన్నీ దాచడానికి జెన్. మీ ప్రాధాన్యతలు (థీమ్, లిపి, ఫాంట్ పరిమాణం) ఈ పరికరంలో గుర్తుంచుకోబడతాయి.',
  'faq.q3': 'ఏ భాషలు మరియు లిపులు మద్దతిస్తాయి?',
  'faq.a3':
    'ప్రతి చాలీసా ప్రతి శ్లోకం ఆరు లిపులలో అందించబడుతుంది: హిందీ (దేవనాగరి), తెలుగు, తమిళం, కన్నడ, బెంగాలీ, ఇంగ్లీష్ (రోమన్ లిప్యంతరీకరణ). ప్రాంతీయ లిపులు మూల దేవనాగరి నుండి అక్షరం-అక్షరం లిప్యంతరీకరించబడతాయి, కాబట్టి అన్ని పాఠాలలో ఉచ్చారణ ఒకేలా ఉంటుంది.',
  'faq.q4': 'ఈ రీడర్ ఉచితమా? ప్రకటనలు ఉన్నాయా?',
  'faq.a4':
    'పూర్తిగా ఉచితం. ప్రకటనలు లేవు, ఖాతా లేదు, వార్తాలేఖ లేదు, ప్రకటన ట్రాకింగ్ లేదు. మీ సంకల్ప క్రమం మీ బ్రౌజర్‌లోనే ఉంటుంది, ఏ సర్వర్‌కూ పంపబడదు. ఒకసారి లోడ్ అయిన తర్వాత సైట్ ఆఫ్‌లైన్‌లో కూడా పనిచేస్తుంది.',
  'faq.q5': 'సంకల్పం అంటే ఏమిటి, క్రమ ట్రాకర్ ఎలా పనిచేస్తుంది?',
  'faq.a5':
    'సంకల్పం అనేది ఒక ఆధ్యాత్మిక నిర్ణయం — సంప్రదాయంగా 11, 21 లేదా 40 వరుస రోజులు ఒక చాలీసా పఠించే ప్రతిజ్ఞ. మీరు ఏదైనా చాలీసా పేజీలో 80% చదివినప్పుడు ట్రాకర్ ఆ రోజును స్వయంచాలకంగా పూర్తిగా గుర్తిస్తుంది. ఇది పూర్తిగా మీ బ్రౌజర్‌లో ఉంటుంది; సైట్ డేటా తొలగిస్తే రికార్డు తొలగిపోతుంది.',
  'faq.q6': 'ఈ పాఠాలను ఎవరు రాస్తారు, ధృవీకరిస్తారు?',
  'faq.a6':
    'దేవనాగరి శ్లోకాలు ప్రతి చాలీసా విస్తృతంగా ఆమోదించబడిన సంప్రదాయ సంచికలను అనుసరిస్తాయి. ప్రాంతీయ లిపి సంచికలు దేవనాగరి మూలం నుండి బిల్డ్ సమయంలో స్వయంచాలకంగా తయారవుతాయి, కాబట్టి మూల పాఠంలో ఏదైనా సవరణ ప్రతి లిపికీ చేరుతుంది. తప్పు కనబడిందా? About పేజీ ద్వారా మాకు తెలియజేయండి.',

  'home.about.kicker': 'పరిచయం',
  'home.about.heading': 'హనుమాన్ చాలీసా, ప్రశాంతంగా ఆన్‌లైన్‌లో.',
  'article.cta': 'ఇప్పుడే హనుమాన్ చాలీసా చదవండి',

  'sankalp.metaTitle': 'సంకల్పం · ఆన్‌లైన్ చాలీసా',
  'sankalp.metaDescription':
    '11, 21 లేదా 40 రోజుల చాలీసా పఠనానికి సంకల్పించండి. మీ క్రమాన్ని ట్రాక్ చేయండి — పూర్తిగా ఈ పరికరంలోనే.',
  'sankalp.kicker': 'సంకల్పం · संकल्प',
  'sankalp.heading': 'మీతో మీకే ఒక వాగ్దానం.',
  'sankalp.subtitle':
    'సంకల్పం అనేది నిశ్శబ్ద దృఢనిశ్చయపు ప్రాచీన సాధన — ఆచరణను మీరు నిర్ణయిస్తారు, కాలాన్ని మీరు నిర్ణయిస్తారు, ప్రతి రోజూ మీరు హాజరవుతారు. అంతే.',
  'sankalp.plan11': 'చిన్నదైనా ఉదారమైన వ్రతం — మార్పు గమనించడానికి సరిపోతుంది.',
  'sankalp.plan21': 'సాంప్రదాయ ఏకాదశం రెండింతలు — నిజమైన లయ ఏర్పడుతుంది.',
  'sankalp.plan40': 'మండలము — సంపూర్ణ చక్రం. లోతైనది, ప్రశాంతం, రూపాంతరం కలిగించేది.',
  'sankalp.noteKicker': 'ఒక స్నేహపూర్వక గమనిక',
  'sankalp.noteBody':
    'మీ క్రమం ఈ బ్రౌజర్‌లోనే నిల్వ ఉంటుంది. ఏదీ అప్‌లోడ్ చేయబడదు, ఏదీ పంచుకోబడదు, సైట్ డేటాను క్లియర్ చేస్తే ఇది రీసెట్ అవుతుంది. ఇదే ఉద్దేశ్యం — సంకల్పం మీకు, దైవానికి మధ్యది; మీకు, సర్వర్‌కు మధ్యది కాదు.',

  'about.metaTitle': 'మా గురించి · ఆన్‌లైన్ చాలీసా',
  'about.metaDescription':
    'ఆన్‌లైన్ చాలీసా ఎందుకు ఉంది — పవిత్ర హిందూ స్తోత్రాల కోసం ప్రకటనలేని, దృష్టి చెదరని, గోప్యతను గౌరవించే స్థలం.',
  'about.kicker': 'మా గురించి',
  'about.heading': 'వెబ్‌సైట్ కాదు, ఒక ఆధ్యాత్మిక ఆశ్రయం.',
  'about.p1':
    'ఆన్‌లైన్ చాలీసా ఒక కారణంతో నిర్మించబడింది: ప్రజలు అత్యంత ప్రేమించే పవిత్ర పాఠాలు — హనుమాన్ చాలీసా, శివ చాలీసా, గణేశ, దుర్గా, శని — ఇవి ఆధునిక వెబ్‌లో బ్యానర్ ప్రకటనలు, ఆటోప్లే వీడియోలు, పాప్-అప్ సభ్యత్వాలు, క్రికెట్ స్కోర్ మెనూల వెనుక ఇరుక్కుపోయాయి.',
  'about.p2': 'స్తోత్రానికి దగ్గరగా ఇవేవీ ఉండకూడదు.',
  'about.p3':
    'అందుకే మేము దానికి విరుద్ధాన్ని నిర్మించాము. ప్రశాంతమైన పేజీ. సౌమ్య టైపోగ్రఫీ. ఉదయపు పఠనానికి సేపియా మోడ్, రాత్రికి నిజమైన డార్క్ మోడ్. మొత్తం ఇంటర్‌ఫేస్‌ను దాచే ఒక్క బటన్. చేతులు ముడుచుకుని కూర్చొని చదవదలచిన వృద్ధ భక్తుల కోసం హ్యాండ్స్-ఫ్రీ టెలిప్రాంప్టర్. క్రింద ఐచ్ఛిక ఆడియో, జెన్ మోడ్‌లో అది మెల్లగా వెనుకకు జారిపోతుంది.',
  'about.noDo.heading': 'మేము చేయనివి',
  'about.noDo.1': 'ఎప్పుడూ ప్రకటనలు లేవు.',
  'about.noDo.2': 'ప్రకటన ట్రాకర్లు లేవు, మీ పఠనంపై వ్యక్తిగత ప్రొఫైల్ లేదు.',
  'about.noDo.3': 'ఖాతా, సైన్-అప్ లేదా ఇమెయిల్ అవసరం లేదు.',
  'about.noDo.4': 'పుష్ నోటిఫికేషన్లు లేదా ఇబ్బంది పెట్టే రిమైండర్లు లేవు.',
  'about.sankalp.heading': 'సంకల్పం మీది',
  'about.sankalp.body':
    'స్ట్రీక్ ట్రాకర్ పూర్తిగా మీ బ్రౌజర్ లోకల్ స్టోరేజ్‌లోనే ఉంటుంది. అది మీ పరికరాన్ని ఎప్పుడూ విడిచి వెళ్లదు. మీరు బ్రౌజర్ డేటా క్లియర్ చేస్తే అది రీసెట్ అవుతుంది — గోప్యతకు ఇది చెల్లించాల్సిన ధర, మరియు మాకు అది సమంజసం అనిపిస్తుంది.',
  'about.text.heading': 'పాఠ్యం గురించి',
  'about.text.body':
    'దేవనాగరి శ్లోకాలు మరియు రోమనైజ్డ్ లిప్యంతరీకరణలు దీర్ఘకాల భక్తి సంప్రదాయాలనుంచి తీసుకుని పలు ప్రచురిత సంచికలతో సరిపోల్చబడ్డాయి. తప్పు కనపడితే దయచేసి మాకు చెప్పండి — శాస్త్ర శుద్ధి జాగ్రత్తకు సంబంధించినది.',
  'about.blessing': '॥ శుభం అస్తు ॥',

  'footer.blurb':
    'ఆన్‌లైన్ చాలీసా ఒక భక్తి రీడర్ — ప్రకటనలు లేవు, ప్రకటన ట్రాకింగ్ లేదు, ఖాతా లేదు. ప్రశాంతంగా చదవండి, మీ సాధన స్థిరంగా సాగాలి.',
  'footer.site': 'సైట్',
  'footer.legal': 'చట్టపరమైన',
  'footer.home': 'హోమ్',
  'footer.chalisas': 'చాలీసా',
  'footer.paath': 'పాఠం',
  'footer.sankalp': 'సంకల్పం',
  'footer.aboutUs': 'మా గురించి',
  'footer.privacy': 'గోప్యతా విధానం',
  'footer.terms': 'నిబంధనలు & షరతులు',
  'footer.made': 'ప్రశాంత భక్తితో రూపొందించబడింది',

  'reader.script': 'లిపి',
  'reader.script.hi': 'దేవనాగరి (హిందీ)',
  'reader.script.te': 'తెలుగు',
  'reader.script.ta': 'తమిళం',
  'reader.script.kn': 'కన్నడ',
  'reader.script.bn': 'బెంగాలీ',
  'reader.script.en': 'ఇంగ్లీష్ (లిప్యంతరీకరణ)',
  'reader.showEnglish': 'ఇంగ్లీష్ చూపు',
  'reader.showEnglishTitle': 'ప్రతి శ్లోకం కింద ఇంగ్లీష్ లిప్యంతరీకరణ చూపండి',
  'reader.en': 'EN',
  'reader.decrease': 'అక్షర పరిమాణం తగ్గించండి',
  'reader.smaller': 'చిన్న అక్షరాలు',
  'reader.increase': 'అక్షర పరిమాణం పెంచండి',
  'reader.larger': 'పెద్ద అక్షరాలు',
  'reader.autoscroll': 'ఆటో-స్క్రోల్',
  'reader.autoscrollTitle': 'టెలిప్రాంప్టర్ — ఆటో-స్క్రోల్',
  'reader.zen': 'జెన్',
  'reader.zenTitle': 'జెన్ మోడ్ — అన్నీ దాచండి',
  'reader.speed': 'వేగం',
  'reader.stop': 'ఆపండి',
  'reader.exitZen': 'జెన్ నుండి బయటకు',
  'reader.exitZenAria': 'జెన్ మోడ్ నుండి బయటకు రండి',
  'streak.kicker': 'సంకల్పం',
  'streak.heading': 'ఒక నిశ్శబ్ద సంకల్పం',
  'streak.blurb':
    'ఒక వ్యవధిని ఎంచుకొని, చదివేటప్పుడు ప్రతి రోజును గుర్తించండి. పురోగతి ఈ పరికరంలోనే ఉంటుంది — ఖాతా లేదు, క్లౌడ్ లేదు, మీరు అడగని రిమైండర్‌లు లేవు.',
  'streak.lengthAria': 'సంకల్ప వ్యవధి',
  'streak.daysUnit': 'రోజులు',
  'streak.of': '/',
  'streak.currentStreak': 'ప్రస్తుత వరుస',
  'streak.dailyProgress': 'రోజువారీ పురోగతి',
  'streak.markToday': 'ఈరోజు పూర్తయినట్లు గుర్తించండి',
  'streak.todayMarked': '✓ ఈరోజు గుర్తించబడింది · రద్దు చేయండి',
  'streak.reset': 'సంకల్పాన్ని రీసెట్ చేయండి',
  'streak.resetConfirm': 'మీ సంకల్పాన్ని రీసెట్ చేయాలా? ఇది ఈ పరికరంలోని అన్ని గుర్తులను తొలగిస్తుంది.',
  'streak.day': 'రోజు',
  'streak.dayWord': 'రోజు',
  'streak.completed': 'పూర్తయింది',
  'reader.speed.slow': 'నెమ్మది',
  'reader.speed.medium': 'మధ్యస్థం',
  'reader.speed.fast': 'వేగం',

  'chalisa.prev': 'మునుపటి',
  'chalisa.next': 'తదుపరి',
  'chalisa.backToLibrary': 'గ్రంథాలయానికి తిరిగి',
  'chalisa.faqHeading': 'తరచుగా అడిగేవి',
  'chalisa.faqKicker': 'ప్రశ్నలు & సమాధానాలు',
  'chalisa.moreChalisas': 'మరిన్ని చాలీసాలు',
  'chalisa.readAria': 'చదవండి',

  'notfound.heading': 'ఈ పేజీ దారి తప్పింది.',
  'notfound.body':
    'మీరు వెతుకుతున్న పేజీ ఇక్కడ లేదు. బహుశా అది తరలించబడింది, లేదా ఎప్పుడూ లేదు. మిమ్మల్ని మళ్ళీ ప్రశాంతత వైపు తీసుకెళదాం.',
  'notfound.cta': 'హోమ్‌కు తిరిగి',
  'notfound.browse': 'చాలీసాలు చూడండి',
  'meta.langName': 'తెలుగు',
  'meta.home.title': 'హనుమాన్ చాలీసా — హిందీ, ఇంగ్లీష్, తెలుగు, కన్నడ & తమిళంలో · ఆన్‌లైన్ చాలీసా',
  'meta.home.description':
    'హనుమాన్ చాలీసాను హిందీ, ఇంగ్లీష్, తెలుగు, కన్నడ, తమిళంలో ఉచిత, ప్రకటన-రహిత రీడర్‌లో చదవండి. ఆటో-స్క్రోల్ పారాయణం చేయండి, మీ 11 / 21 / 40-రోజుల సంకల్పాన్ని ట్రాక్ చేయండి — అలాగే శివ, గణేశ, దుర్గా, శని, లక్ష్మీ, సరస్వతీ చాలీసా.',
};

// ─────────────────────────────────────────────────────────────────
// தமிழ் (Tamil)
// ─────────────────────────────────────────────────────────────────
const ta: Partial<Record<UIStringKey, string>> = {
  'nav.chalisas': 'சாலீசா',
  'nav.sankalp': 'சங்கல்பம்',
  'nav.paath': 'பாராயணம்',
  'nav.about': 'எங்களைப் பற்றி',
  'nav.home': 'முகப்பு',
  'nav.aboutUs': 'எங்களைப் பற்றி',
  'header.homeAria': 'ஆன்லைன் சாலீசா — முகப்பு',
  'header.themeCycle': 'தீம் மாற்று',
  'header.themeCycleTitle': 'தீம் மாற்று (வெளிர் / செபியா / அடர்)',
  'header.beginSankalp': 'சங்கல்பம் தொடங்கு',
  'header.startReading': 'படிக்கத் தொடங்கு',
  'lang.switcher': 'மொழி',
  'lang.choose': 'மொழியைத் தேர்ந்தெடுக்கவும்',

  'hero.title1': 'ஒரு அமைதியான இடம்',
  'hero.title2': 'உங்கள் தினசரி',
  'hero.titleWord': 'சாலீசாவிற்கு',
  'hero.subtitle':
    'ஹனுமான் சாலீசா மற்றும் மிகவும் விரும்பப்படும் மேலும் ஆறு சாலீசாக்களை இந்தி, தெலுங்கு, தமிழ், கன்னடம், வங்காளம் அல்லது ஆங்கிலத்தில் படியுங்கள் — கிளிக்குகளுக்கல்ல, தினசரி பாராயணத்திற்காக வடிவமைக்கப்பட்ட அமைதியான ரீடரில்.',
  'hero.ctaPrimary': 'ஹனுமான் சாலீசாவுடன் தொடங்குங்கள்',
  'hero.ctaSecondary': 'நூலகத்தைக் காண்க',
  'hero.availableIn': 'கிடைக்கும் மொழிகள்',

  'library.kicker': 'நூலகம்',
  'library.heading': 'ஏழு சாலீசாக்கள்.',
  'library.blurb':
    'சரிபார்க்கப்பட்ட தேவநாகரி உரை, ஒவ்வொரு பாடலுக்கும் தெலுங்கு, தமிழ், கன்னடம், ஆங்கிலத்தில் ஒலிபெயர்க்கப்பட்டது. ஒன்றைத் தேர்ந்து படிக்கத் தொடங்குங்கள் — கட்டுப்பாடுகள் உங்கள் வழியில் நிற்காது.',

  'card.read': 'படி',
  'card.readPrefix': 'படி',
  'card.verses': 'பாடல்கள்',
  'card.min': 'நிமி',
  'card.tagline.hanuman': 'காற்றின் புதல்வனுக்கு அர்ப்பணிக்கும் நாற்பது பக்திப் பாடல்கள்',
  'card.tradition.hanuman': 'அவதி · துலசிதாஸ் · கி.பி. 16ஆம் நூற்றாண்டு',
  'card.tagline.shiv': 'மகாதேவருக்கான நாற்பது பக்திப் பாடல்கள்',
  'card.tradition.shiv': 'இந்தி பக்தி · 19ஆம் நூற்றாண்டு',
  'card.tagline.durga': 'அஜெய அன்னைக்கு அர்ப்பணிக்கும் நாற்பது பாடல்கள்',
  'card.tradition.durga': 'இந்தி பக்தி · தேவி கவச மரபு',
  'card.tagline.ganesh': 'விக்னங்களை அகற்றும் கணபதிக்கான நாற்பது பாடல்கள்',
  'card.tradition.ganesh': 'இந்தி பக்தி',
  'card.tagline.shani': 'கர்மா மற்றும் நீதியின் அதிபதிக்கான நாற்பது பாடல்கள்',
  'card.tradition.shani': 'இந்தி பக்தி',
  'card.tagline.laxmi': 'அருள் மற்றும் செல்வத்தை வேண்டி பாடும் நாற்பது வரிகள்',
  'card.tradition.laxmi': 'பக்தி · பாரம்பரியம்',
  'card.tagline.saraswati': 'ஞானம், கலை, வாக்கின் தேவிக்கான நாற்பது பாடல்கள்',
  'card.tradition.saraswati': 'பக்தி · பாரம்பரியம்',
  'chalisa.title.hanuman': 'அனுமன் சாலீசா',
  'chalisa.title.shiv': 'சிவ சாலீசா',
  'chalisa.title.durga': 'துர்கா சாலீசா',
  'chalisa.title.ganesh': 'கணேஷ சாலீசா',
  'chalisa.title.shani': 'சனி சாலீசா',
  'chalisa.title.laxmi': 'லஷ்மி சாலீசா',
  'chalisa.title.saraswati': 'சரஸ்வதி சாலீசா',

  'features.heading': 'தினசரி பாராயணத்திற்காக வடிவமைக்கப்பட்டது',
  'features.zen.title': 'ஜென் ரீடர்',
  'features.zen.body': 'ஒரே தொடுதலில் முழு இடைமுகமும் மடங்குகிறது. வெறும் சொற்கள், பக்கத்தில் மூச்சு விடுகின்றன.',
  'features.tele.title': 'டெலிபிராம்ப்டர் பயன்முறை',
  'features.tele.body': 'கை இல்லாத ஆட்டோ-ஸ்க்ரோல், ஐந்து-நிலை வேகத்துடன். அமர்ந்து, கை கூப்பி அல்லது நின்று படியுங்கள்.',
  'features.sankalp.title': 'சங்கல்ப தொடர்',
  'features.sankalp.body': '11, 21 அல்லது 40 நாட்கள். ஒவ்வொரு நாளும் குறியிடுங்கள். முன்னேற்றம் உங்கள் சாதனத்திலேயே இருக்கும் — வேறெங்கும் இல்லை.',

  'philosophy.kicker': 'எங்கள் வாக்குறுதி',
  'philosophy.text': 'பேனர்கள் இல்லை. செய்திமடல்கள் இல்லை. கிரிக்கெட் மதிப்பெண்கள் இல்லை. கேட்காத நன்கொடைகள் இல்லை.',
  'philosophy.textEm': 'கீதம் மட்டுமே.',

  'faq.kicker': 'அடிக்கடி கேட்கப்படுபவை',
  'faq.heading': 'விரைவு பதில்கள்.',
  'faq.subtitle': 'சாலீசா என்றால் என்ன, இந்த ரீடர் எப்படி பயன்படுத்த வடிவமைக்கப்பட்டுள்ளது — அடிப்படைகள்.',
  'faq.q1': 'சாலீசா என்றால் என்ன?',
  'faq.a1':
    'சாலீசா என்பது ஒரு தெய்வத்தைப் புகழ்ந்து இயற்றப்பட்ட நாற்பது பாடல்களைக் கொண்ட ஒரு பக்திப் பாடல் (இந்தியில் "சாலீஸ்" என்றால் நாற்பது). மிகவும் புகழ்பெற்றது கோஸ்வாமி துளசிதாஸ் இயற்றிய ஹனுமான் சாலீசா. இந்த நூலகத்தில் சிவ, கணேச, துர்கா, சனி, லக்ஷ்மி மற்றும் சரஸ்வதி சாலீசாக்களும் உள்ளன.',
  'faq.q2': 'இந்த தளத்தை நான் எப்படிப் பயன்படுத்துவது?',
  'faq.a2':
    'நூலகத்திலிருந்து எந்த சாலீசாவையும் தேர்ந்தெடுங்கள். ரீடரில் கருவிப்பட்டியைப் பயன்படுத்தி இந்தி, தெலுங்கு, தமிழ், கன்னடம், வங்காளம், ஆங்கிலம் ஆகிய எழுத்துக்களுக்கு இடையே மாறுங்கள்; முதன்மை எழுத்தின் கீழ் ரோமன் ஒலிபெயர்ப்பைக் காண "ஆங்கிலம் காட்டு" இயக்குங்கள்; கை இல்லாத டெலிபிராம்ப்டருக்கு ஆட்டோ-ஸ்க்ரோல் அழுத்துங்கள், அல்லது அனைத்தையும் மறைக்க ஜென். உங்கள் விருப்பங்கள் (தீம், எழுத்து, எழுத்து அளவு) இந்த சாதனத்தில் நினைவில் வைக்கப்படும்.',
  'faq.q3': 'எந்த மொழிகள் மற்றும் எழுத்துக்கள் ஆதரிக்கப்படுகின்றன?',
  'faq.a3':
    'ஒவ்வொரு சாலீசாவின் ஒவ்வொரு பாடலும் ஆறு எழுத்துக்களில் வழங்கப்படுகிறது: இந்தி (தேவநாகரி), தெலுங்கு, தமிழ், கன்னடம், வங்காளம், ஆங்கிலம் (ரோமன் ஒலிபெயர்ப்பு). பிராந்திய எழுத்துக்கள் மூல தேவநாகரியிலிருந்து எழுத்துக்கு எழுத்து ஒலிபெயர்க்கப்படுகின்றன, எனவே அனைத்து வாசிப்புகளிலும் உச்சரிப்பு ஒரே மாதிரியாக இருக்கும்.',
  'faq.q4': 'இந்த ரீடர் இலவசமா? விளம்பரங்கள் உள்ளதா?',
  'faq.a4':
    'முற்றிலும் இலவசம். விளம்பரங்கள் இல்லை, கணக்கு இல்லை, செய்திமடல் இல்லை, விளம்பரக் கண்காணிப்பு இல்லை. உங்கள் சங்கல்ப தொடர் உங்கள் உலாவியிலேயே இருக்கும், எந்த சேவையகத்திற்கும் அனுப்பப்படாது. ஒருமுறை ஏற்றப்பட்டால் தளம் இணையம் இல்லாமலும் இயங்கும்.',
  'faq.q5': 'சங்கல்பம் என்றால் என்ன, தொடர் கண்காணிப்பான் எப்படி வேலை செய்கிறது?',
  'faq.a5':
    'சங்கல்பம் என்பது ஒரு ஆன்மீக உறுதிமொழி — பாரம்பரியமாக தொடர்ந்து 11, 21 அல்லது 40 நாட்கள் ஒரு சாலீசாவைப் படிக்கும் சபதம். நீங்கள் எந்த சாலீசா பக்கத்திலும் 80% படிக்கும்போது கண்காணிப்பான் அந்த நாளை தானாக முடிந்ததாகக் குறிக்கும். இது முழுவதும் உங்கள் உலாவியில் இருக்கும்; தள தரவை அழித்தால் பதிவு அழிந்துவிடும்.',
  'faq.q6': 'இந்த உரைகளை யார் எழுதி சரிபார்க்கிறார்கள்?',
  'faq.a6':
    'தேவநாகரி பாடல்கள் ஒவ்வொரு சாலீசாவின் பரவலாக ஏற்றுக்கொள்ளப்பட்ட பாரம்பரிய பதிப்புகளைப் பின்பற்றுகின்றன. பிராந்திய எழுத்துப் பதிப்புகள் தேவநாகரி மூலத்திலிருந்து பில்ட் நேரத்தில் தானாக உருவாக்கப்படுகின்றன, எனவே மூல உரையில் எந்த திருத்தமும் ஒவ்வொரு எழுத்திற்கும் பரவுகிறது. பிழை கண்டீர்களா? About பக்கம் மூலம் எங்களுக்குத் தெரிவியுங்கள்.',

  'home.about.kicker': 'அறிமுகம்',
  'home.about.heading': 'ஹனுமான் சாலீசா, அமைதியாக ஆன்லைனில்.',
  'article.cta': 'இப்போதே ஹனுமான் சாலீசா படியுங்கள்',

  'sankalp.metaTitle': 'சங்கல்பம் · ஆன்லைன் சாலீசா',
  'sankalp.metaDescription':
    '11, 21 அல்லது 40 நாள் சாலீசா வாசிப்பு உறுதி எடுக்கவும். உங்கள் தொடரை கண்காணிக்கவும் — தனிப்பட்ட முறையில், இந்த சாதனத்திலேயே.',
  'sankalp.kicker': 'சங்கல்பம் · संकल्प',
  'sankalp.heading': 'உங்களுக்கே நீங்கள் கொடுக்கும் வாக்குறுதி.',
  'sankalp.subtitle':
    'சங்கல்பம் என்பது அமைதியான உறுதியின் பண்டைய சாதனை — வழிபாட்டை நீங்கள் தேர்வுசெய்கிறீர்கள், காலத்தை நீங்கள் தீர்மானிக்கிறீர்கள், தினமும் நீங்கள் வருகிறீர்கள். அதுவே போதும்.',
  'sankalp.plan11': 'சிறியதானாலும் அர்த்தமுள்ள ஒரு விரதம் — மாற்றத்தை உணரத் தகுந்தது.',
  'sankalp.plan21': 'பாரம்பரிய ஏகாதசம் இரட்டிப்பு — உண்மையான ஓசை உருவாகும்.',
  'sankalp.plan40': 'மண்டலம் — முழு ஒரு சுழற்சி. ஆழமானது, அமைதியானது, மாற்றமளிப்பது.',
  'sankalp.noteKicker': 'ஒரு மென்மையான குறிப்பு',
  'sankalp.noteBody':
    'உங்கள் தொடர் இந்த உலாவியிலேயே சேமிக்கப்படுகிறது. எதுவும் பதிவேற்றப்படாது, எதுவும் பகிரப்படாது, தளத் தரவை அழித்தால் இது மீட்டமைக்கப்படும். இது திட்டமிட்டதே — சங்கல்பம் என்பது நீங்கள் மற்றும் தெய்வம் இடையேயானது; நீங்கள் மற்றும் சேவையகம் இடையேயானது அல்ல.',

  'about.metaTitle': 'எங்களைப் பற்றி · ஆன்லைன் சாலீசா',
  'about.metaDescription':
    'ஆன்லைன் சாலீசா ஏன் உள்ளது — புனித இந்து ஸ்தோத்திரங்களுக்கு விளம்பரமற்ற, கவனம் சிதறாத, தனியுரிமையை மதிக்கும் இடம்.',
  'about.kicker': 'எங்களைப் பற்றி',
  'about.heading': 'இது ஒரு தஞ்சம், வெறும் வலைத்தளம் அல்ல.',
  'about.p1':
    'ஆன்லைன் சாலீசா ஒரு காரணத்திற்காக உருவாக்கப்பட்டது: மக்கள் மிகவும் நேசிக்கும் புனிதப் பாடல்கள் — ஹனுமான் சாலீசா, சிவ சாலீசா, கணேஷ், துர்கா, சனி — இன்றைய இணையத்தில் பேனர் விளம்பரங்கள், தானாக ஒலிக்கும் வீடியோக்கள், பாப்அப் சந்தாக்கள், கிரிக்கெட் மதிப்பெண் மெனுக்கள் பின்னால் சிக்கிக் கிடக்கின்றன.',
  'about.p2': 'அத்தகையவை எந்த ஸ்தோத்திரத்தின் அருகிலும் இருக்கக் கூடாது.',
  'about.p3':
    'அதற்கே எதிர்மாறாக நாங்கள் இதை கட்டினோம். அமைதியான ஒரு பக்கம். சூடான எழுத்தியல். காலைப் பாராயணத்துக்கு செப்பியா முறை, இரவுக்கான தூய இருண்ட முறை. முழு இடைமுகத்தையும் மறைக்கும் ஒரு பொத்தான். கைகளை கூப்பி அமர்ந்து வாசிக்க விரும்பும் மூத்த பக்தர்களுக்கான கை-இல்லா டெலிபிராம்ப்டர். கீழே விருப்ப ஆடியோ, ஜென் முறையில் அது மெதுவாக மறைந்து விடும்.',
  'about.noDo.heading': 'நாங்கள் செய்யாதவை',
  'about.noDo.1': 'விளம்பரங்கள் ஒருபோதும் இல்லை.',
  'about.noDo.2': 'விளம்பரக் கண்காணிப்பான்கள் இல்லை, உங்கள் வாசிப்பின் தனிப்பட்ட சுயவிவரமும் இல்லை.',
  'about.noDo.3': 'கணக்கு, பதிவு அல்லது மின்னஞ்சல் தேவையில்லை.',
  'about.noDo.4': 'புஷ் அறிவிப்புகள் அல்லது தொந்தரவான நினைவூட்டல்கள் இல்லை.',
  'about.sankalp.heading': 'சங்கல்பம் உங்களுடையது',
  'about.sankalp.body':
    'ஸ்ட்ரீக் டிராக்கர் முழுவதும் உங்கள் உலாவியின் உள்ளக சேமிப்பகத்திலேயே இருக்கும். அது உங்கள் சாதனத்தை ஒருபோதும் விட்டு செல்லாது. உலாவி தரவை அழித்தால் அது மீட்டமைக்கும் — அது தனியுரிமைக்கான விலை; நாங்கள் அதை நியாயமானதாக கருதுகிறோம்.',
  'about.text.heading': 'உரை குறித்து',
  'about.text.body':
    'தேவநாகரி வரிகளும் ரோமன் ஒலிபெயர்ப்புகளும் நீண்டகால பக்தி மரபுகளில் இருந்து எடுக்கப்பட்டவை; பல வெளியிடப்பட்ட பதிப்புகளுடன் ஒப்பிட்டு சரிபார்க்கப்பட்டவை. பிழை கண்டால் தயவுசெய்து எங்களுக்குத் தெரிவிக்கவும் — சாஸ்திர துல்லியம் அக்கறையின் விஷயம்.',
  'about.blessing': '॥ சுபம் அஸ்து ॥',

  'footer.blurb':
    'ஆன்லைன் சாலீசா ஒரு பக்தி ரீடர் — விளம்பரங்கள் இல்லை, விளம்பரக் கண்காணிப்பு இல்லை, கணக்கு இல்லை. அமைதியாகப் படியுங்கள், உங்கள் பயிற்சி நிலையாக இருக்கட்டும்.',
  'footer.site': 'தளம்',
  'footer.legal': 'சட்டப்பூர்வம்',
  'footer.home': 'முகப்பு',
  'footer.chalisas': 'சாலீசா',
  'footer.paath': 'பாராயணம்',
  'footer.sankalp': 'சங்கல்பம்',
  'footer.aboutUs': 'எங்களைப் பற்றி',
  'footer.privacy': 'தனியுரிமைக் கொள்கை',
  'footer.terms': 'விதிமுறைகள் & நிபந்தனைகள்',
  'footer.made': 'அமைதியான பக்தியுடன் உருவாக்கப்பட்டது',

  'reader.script': 'எழுத்து',
  'reader.script.hi': 'தேவநாகரி (இந்தி)',
  'reader.script.te': 'தெலுங்கு',
  'reader.script.ta': 'தமிழ்',
  'reader.script.kn': 'கன்னடம்',
  'reader.script.bn': 'வங்காளம்',
  'reader.script.en': 'ஆங்கிலம் (ஒலிபெயர்ப்பு)',
  'reader.showEnglish': 'ஆங்கிலம் காட்டு',
  'reader.showEnglishTitle': 'ஒவ்வொரு பாடலின் கீழும் ஆங்கில ஒலிபெயர்ப்பைக் காட்டு',
  'reader.en': 'EN',
  'reader.decrease': 'எழுத்து அளவைக் குறை',
  'reader.smaller': 'சிறிய எழுத்து',
  'reader.increase': 'எழுத்து அளவை அதிகரி',
  'reader.larger': 'பெரிய எழுத்து',
  'reader.autoscroll': 'ஆட்டோ-ஸ்க்ரோல்',
  'reader.autoscrollTitle': 'டெலிபிராம்ப்டர் — ஆட்டோ-ஸ்க்ரோல்',
  'reader.zen': 'ஜென்',
  'reader.zenTitle': 'ஜென் பயன்முறை — அனைத்தையும் மறை',
  'reader.speed': 'வேகம்',
  'reader.stop': 'நிறுத்து',
  'reader.exitZen': 'ஜென் விட்டு வெளியேறு',
  'reader.exitZenAria': 'ஜென் பயன்முறையிலிருந்து வெளியேறு',
  'streak.kicker': 'சங்கல்பம்',
  'streak.heading': 'ஒரு அமைதியான சங்கல்பம்',
  'streak.blurb':
    'ஒரு காலஅளவைத் தேர்ந்தெடுத்து, படிக்கும்போது ஒவ்வொரு நாளையும் குறியிடுங்கள். முன்னேற்றம் இந்தச் சாதனத்திலேயே இருக்கும் — கணக்கு இல்லை, கிளவுட் இல்லை, நீங்கள் கேட்காத நினைவூட்டல்கள் இல்லை.',
  'streak.lengthAria': 'சங்கல்ப காலஅளவு',
  'streak.daysUnit': 'நாட்கள்',
  'streak.of': '/',
  'streak.currentStreak': 'தற்போதைய தொடர்',
  'streak.dailyProgress': 'தினசரி முன்னேற்றம்',
  'streak.markToday': 'இன்று முடிந்ததாகக் குறியிடு',
  'streak.todayMarked': '✓ இன்று குறியிடப்பட்டது · செயல்தவிர்',
  'streak.reset': 'சங்கல்பத்தை மீட்டமை',
  'streak.resetConfirm': 'உங்கள் சங்கல்பத்தை மீட்டமைக்கவா? இது இந்தச் சாதனத்தில் உள்ள அனைத்து குறிகளையும் அழிக்கும்.',
  'streak.day': 'நாள்',
  'streak.dayWord': 'நாள்',
  'streak.completed': 'முடிந்தது',
  'reader.speed.slow': 'மெதுவாக',
  'reader.speed.medium': 'நடுத்தரம்',
  'reader.speed.fast': 'வேகமாக',

  'chalisa.prev': 'முந்தையது',
  'chalisa.next': 'அடுத்தது',
  'chalisa.backToLibrary': 'நூலகத்திற்குத் திரும்பு',
  'chalisa.faqHeading': 'அடிக்கடி கேட்கப்படுபவை',
  'chalisa.faqKicker': 'கேள்விகள் & பதில்கள்',
  'chalisa.moreChalisas': 'மேலும் சாலீசாக்கள்',
  'chalisa.readAria': 'படி',

  'notfound.heading': 'இந்தப் பக்கம் வழிதவறிப் போய்விட்டது.',
  'notfound.body':
    'நீங்கள் தேடிய பக்கம் இங்கே இல்லை. ஒருவேளை அது நகர்த்தப்பட்டிருக்கலாம், அல்லது ஒருபோதும் இருந்திருக்காது. மீண்டும் அமைதியை நோக்கி உங்களை அழைத்துச் செல்கிறோம்.',
  'notfound.cta': 'முகப்புக்குத் திரும்பு',
  'notfound.browse': 'சாலீசாக்களைக் காண்க',
  'meta.langName': 'தமிழ்',
  'meta.home.title': 'ஹனுமான் சாலீசா — இந்தி, ஆங்கிலம், தெலுங்கு, கன்னடம் & தமிழில் · ஆன்லைன் சாலீசா',
  'meta.home.description':
    'ஹனுமான் சாலீசாவை இந்தி, ஆங்கிலம், தெலுங்கு, கன்னடம், தமிழில் இலவச, விளம்பரமற்ற ரீடரில் படியுங்கள். ஆட்டோ-ஸ்க்ரோல் பாராயணம் செய்யுங்கள், உங்கள் 11 / 21 / 40-நாள் சங்கல்பத்தைக் கண்காணியுங்கள் — மேலும் சிவ, கணேச, துர்கா, சனி, லக்ஷ்மி & சரஸ்வதி சாலீசா.',
};

// ─────────────────────────────────────────────────────────────────
// ಕನ್ನಡ (Kannada)
// ─────────────────────────────────────────────────────────────────
const kn: Partial<Record<UIStringKey, string>> = {
  'nav.chalisas': 'ಚಾಲೀಸಾ',
  'nav.sankalp': 'ಸಂಕಲ್ಪ',
  'nav.paath': 'ಪಠ',
  'nav.about': 'ನಮ್ಮ ಬಗ್ಗೆ',
  'nav.home': 'ಮುಖಪುಟ',
  'nav.aboutUs': 'ನಮ್ಮ ಬಗ್ಗೆ',
  'header.homeAria': 'ಆನ್‌ಲೈನ್ ಚಾಲೀಸಾ — ಮುಖಪುಟ',
  'header.themeCycle': 'ಥೀಮ್ ಬದಲಿಸಿ',
  'header.themeCycleTitle': 'ಥೀಮ್ ಬದಲಿಸಿ (ತಿಳಿ / ಸೀಪಿಯಾ / ಗಾಢ)',
  'header.beginSankalp': 'ಸಂಕಲ್ಪ ಪ್ರಾರಂಭಿಸಿ',
  'header.startReading': 'ಓದಲು ಪ್ರಾರಂಭಿಸಿ',
  'lang.switcher': 'ಭಾಷೆ',
  'lang.choose': 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ',

  'hero.title1': 'ಒಂದು ಶಾಂತ ಸ್ಥಳ',
  'hero.title2': 'ನಿಮ್ಮ ದೈನಂದಿನ',
  'hero.titleWord': 'ಚಾಲೀಸಾಕಾಗಿ',
  'hero.subtitle':
    'ಹನುಮಾನ್ ಚಾಲೀಸಾ ಮತ್ತು ಇನ್ನೂ ಆರು ಅತ್ಯಂತ ಪ್ರಿಯ ಚಾಲೀಸಾಗಳನ್ನು ಹಿಂದಿ, ತೆಲುಗು, ತಮಿಳು, ಕನ್ನಡ, ಬಂಗಾಳಿ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಓದಿ — ಕ್ಲಿಕ್‌ಗಳಿಗಲ್ಲ, ದೈನಂದಿನ ಪಾಠಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಶಾಂತ ರೀಡರ್‌ನಲ್ಲಿ.',
  'hero.ctaPrimary': 'ಹನುಮಾನ್ ಚಾಲೀಸಾದಿಂದ ಪ್ರಾರಂಭಿಸಿ',
  'hero.ctaSecondary': 'ಗ್ರಂಥಾಲಯ ನೋಡಿ',
  'hero.availableIn': 'ಲಭ್ಯ ಭಾಷೆಗಳು',

  'library.kicker': 'ಗ್ರಂಥಾಲಯ',
  'library.heading': 'ಏಳು ಚಾಲೀಸಾಗಳು.',
  'library.blurb':
    'ಪರಿಶೀಲಿಸಿದ ದೇವನಾಗರಿ ಪಠ್ಯ, ಪ್ರತಿ ಶ್ಲೋಕಕ್ಕೂ ತೆಲುಗು, ತಮಿಳು, ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ಗೆ ಲಿಪ್ಯಂತರಗೊಳಿಸಲಾಗಿದೆ. ಒಂದನ್ನು ಆರಿಸಿ ಓದಲು ಪ್ರಾರಂಭಿಸಿ — ನಿಯಂತ್ರಣಗಳು ನಿಮ್ಮ ದಾರಿಗೆ ಅಡ್ಡಿಯಾಗುವುದಿಲ್ಲ.',

  'card.read': 'ಓದಿ',
  'card.readPrefix': 'ಓದಿ',
  'card.verses': 'ಶ್ಲೋಕಗಳು',
  'card.min': 'ನಿಮಿ',
  'card.tagline.hanuman': 'ಪವನಪುತ್ರನಿಗೆ ಸಮರ್ಪಿಸಿದ ನಲವತ್ತು ಭಕ್ತಿಶ್ಲೋಕಗಳು',
  'card.tradition.hanuman': 'ಅವಧಿ · ತುಳಸಿದಾಸ್ · ಅಂದಾಜು 16ನೇ ಶತಮಾನ',
  'card.tagline.shiv': 'ಮಹಾದೇವನಿಗೆ ಸಮರ್ಪಿಸಿದ ನಲವತ್ತು ಶ್ಲೋಕಗಳು',
  'card.tradition.shiv': 'ಹಿಂದಿ ಭಕ್ತಿ · 19ನೇ ಶತಮಾನ',
  'card.tagline.durga': 'ಅಜೇಯ ತಾಯಿಗೆ ಸಮರ್ಪಿಸಿದ ನಲವತ್ತು ಶ್ಲೋಕಗಳು',
  'card.tradition.durga': 'ಹಿಂದಿ ಭಕ್ತಿ · ದೇವಿ ಕವಚ ಪರಂಪರೆ',
  'card.tagline.ganesh': 'ವಿಘ್ನಹರ್ತನಿಗೆ ಸಮರ್ಪಿಸಿದ ನಲವತ್ತು ಶ್ಲೋಕಗಳು',
  'card.tradition.ganesh': 'ಹಿಂದಿ ಭಕ್ತಿ',
  'card.tagline.shani': 'ಕರ್ಮ ಮತ್ತು ನ್ಯಾಯದ ಸ್ವಾಮಿಗೆ ಸಮರ್ಪಿಸಿದ ನಲವತ್ತು ಶ್ಲೋಕಗಳು',
  'card.tradition.shani': 'ಹಿಂದಿ ಭಕ್ತಿ',
  'card.tagline.laxmi': 'ಸಿರಿ ಮತ್ತು ಕೃಪೆಯನ್ನು ಆಹ್ವಾನಿಸುವ ನಲವತ್ತು ಪ್ರಾರ್ಥನಾ ಶ್ಲೋಕಗಳು',
  'card.tradition.laxmi': 'ಭಕ್ತಿ · ಪಾರಂಪರಿಕ',
  'card.tagline.saraswati': 'ಜ್ಞಾನ, ಕಲೆ, ವಾಣಿಯ ದೇವಿಗೆ ಸಮರ್ಪಿಸಿದ ನಲವತ್ತು ಶ್ಲೋಕಗಳು',
  'card.tradition.saraswati': 'ಭಕ್ತಿ · ಪಾರಂಪರಿಕ',
  'chalisa.title.hanuman': 'ಹನುಮಾನ್ ಚಾಲೀಸಾ',
  'chalisa.title.shiv': 'ಶಿವ ಚಾಲೀಸಾ',
  'chalisa.title.durga': 'ದುರ್ಗಾ ಚಾಲೀಸಾ',
  'chalisa.title.ganesh': 'ಗಣೇಶ ಚಾಲೀಸಾ',
  'chalisa.title.shani': 'ಶನಿ ಚಾಲೀಸಾ',
  'chalisa.title.laxmi': 'ಲಕ್ಷ್ಮೀ ಚಾಲೀಸಾ',
  'chalisa.title.saraswati': 'ಸರಸ್ವತಿ ಚಾಲೀಸಾ',

  'features.heading': 'ದೈನಂದಿನ ಪಾಠಕ್ಕಾಗಿ ರೂಪಿಸಲಾಗಿದೆ',
  'features.zen.title': 'ಝೆನ್ ರೀಡರ್',
  'features.zen.body': 'ಒಂದೇ ಸ್ಪರ್ಶದಲ್ಲಿ ಇಡೀ ಇಂಟರ್‌ಫೇಸ್ ಮುದುಡುತ್ತದೆ. ಕೇವಲ ಪದಗಳು, ಪುಟದಲ್ಲಿ ಉಸಿರಾಡುತ್ತಿವೆ.',
  'features.tele.title': 'ಟೆಲಿಪ್ರಾಂಪ್ಟರ್ ಮೋಡ್',
  'features.tele.body': 'ಕೈ ಇಲ್ಲದ ಆಟೋ-ಸ್ಕ್ರಾಲ್, ಐದು-ಹಂತದ ವೇಗದೊಂದಿಗೆ. ಕುಳಿತು, ಕೈ ಜೋಡಿಸಿ ಅಥವಾ ನಿಂತು ಓದಿ.',
  'features.sankalp.title': 'ಸಂಕಲ್ಪ ಸರಣಿ',
  'features.sankalp.body': '11, 21 ಅಥವಾ 40 ದಿನಗಳು. ಪ್ರತಿ ದಿನ ಗುರುತಿಸಿ. ಪ್ರಗತಿ ನಿಮ್ಮ ಸಾಧನದಲ್ಲೇ ಇರುತ್ತದೆ — ಬೇರೆಲ್ಲೂ ಇಲ್ಲ.',

  'philosophy.kicker': 'ನಮ್ಮ ಭರವಸೆ',
  'philosophy.text': 'ಬ್ಯಾನರ್‌ಗಳಿಲ್ಲ. ಸುದ್ದಿಪತ್ರಗಳಿಲ್ಲ. ಕ್ರಿಕೆಟ್ ಸ್ಕೋರ್‌ಗಳಿಲ್ಲ. ಕೇಳದ ದೇಣಿಗೆಗಳಿಲ್ಲ.',
  'philosophy.textEm': 'ಕೇವಲ ಸ್ತೋತ್ರ.',

  'faq.kicker': 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ',
  'faq.heading': 'ತ್ವರಿತ ಉತ್ತರಗಳು.',
  'faq.subtitle': 'ಚಾಲೀಸಾ ಎಂದರೇನು, ಈ ರೀಡರ್ ಹೇಗೆ ಬಳಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ — ಮೂಲಭೂತ ಅಂಶಗಳು.',
  'faq.q1': 'ಚಾಲೀಸಾ ಎಂದರೇನು?',
  'faq.a1':
    'ಚಾಲೀಸಾ ಎಂಬುದು ಒಂದು ದೇವತೆಯ ಸ್ತುತಿಯಲ್ಲಿ ರಚಿಸಲಾದ ನಲವತ್ತು ಶ್ಲೋಕಗಳ ಭಕ್ತಿ ಸ್ತೋತ್ರ (ಹಿಂದಿಯಲ್ಲಿ "ಚಾಲೀಸ್" ಎಂದರೆ ನಲವತ್ತು). ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧವಾದದ್ದು ಗೋಸ್ವಾಮಿ ತುಳಸೀದಾಸ ರಚಿಸಿದ ಹನುಮಾನ್ ಚಾಲೀಸಾ. ಈ ಗ್ರಂಥಾಲಯದಲ್ಲಿ ಶಿವ, ಗಣೇಶ, ದುರ್ಗಾ, ಶನಿ, ಲಕ್ಷ್ಮೀ ಮತ್ತು ಸರಸ್ವತೀ ಚಾಲೀಸಾಗಳೂ ಇವೆ.',
  'faq.q2': 'ಈ ಸೈಟ್ ಅನ್ನು ನಾನು ಹೇಗೆ ಬಳಸುವುದು?',
  'faq.a2':
    'ಗ್ರಂಥಾಲಯದಿಂದ ಯಾವುದೇ ಚಾಲೀಸಾ ಆರಿಸಿ. ರೀಡರ್‌ನಲ್ಲಿ ಟೂಲ್‌ಬಾರ್ ಬಳಸಿ ಹಿಂದಿ, ತೆಲುಗು, ತಮಿಳು, ಕನ್ನಡ, ಬಂಗಾಳಿ, ಇಂಗ್ಲಿಷ್ ಲಿಪಿಗಳ ನಡುವೆ ಬದಲಿಸಿ; ಮುಖ್ಯ ಲಿಪಿಯ ಕೆಳಗೆ ರೋಮನ್ ಲಿಪ್ಯಂತರ ನೋಡಲು "ಇಂಗ್ಲಿಷ್ ತೋರಿಸು" ಆನ್ ಮಾಡಿ; ಕೈ ಇಲ್ಲದ ಟೆಲಿಪ್ರಾಂಪ್ಟರ್‌ಗಾಗಿ ಆಟೋ-ಸ್ಕ್ರಾಲ್ ಒತ್ತಿ, ಅಥವಾ ಎಲ್ಲವನ್ನೂ ಮರೆಮಾಡಲು ಝೆನ್. ನಿಮ್ಮ ಆದ್ಯತೆಗಳು (ಥೀಮ್, ಲಿಪಿ, ಫಾಂಟ್ ಗಾತ್ರ) ಈ ಸಾಧನದಲ್ಲಿ ನೆನಪಿಡಲಾಗುತ್ತದೆ.',
  'faq.q3': 'ಯಾವ ಭಾಷೆಗಳು ಮತ್ತು ಲಿಪಿಗಳು ಬೆಂಬಲಿತ?',
  'faq.a3':
    'ಪ್ರತಿ ಚಾಲೀಸಾದ ಪ್ರತಿ ಶ್ಲೋಕವನ್ನು ಆರು ಲಿಪಿಗಳಲ್ಲಿ ನೀಡಲಾಗಿದೆ: ಹಿಂದಿ (ದೇವನಾಗರಿ), ತೆಲುಗು, ತಮಿಳು, ಕನ್ನಡ, ಬಂಗಾಳಿ, ಇಂಗ್ಲಿಷ್ (ರೋಮನ್ ಲಿಪ್ಯಂತರ). ಪ್ರಾದೇಶಿಕ ಲಿಪಿಗಳು ಮೂಲ ದೇವನಾಗರಿಯಿಂದ ಅಕ್ಷರ-ಅಕ್ಷರ ಲಿಪ್ಯಂತರಗೊಳ್ಳುತ್ತವೆ, ಆದ್ದರಿಂದ ಎಲ್ಲಾ ಪಠಣಗಳಲ್ಲಿ ಉಚ್ಚಾರಣೆ ಒಂದೇ ಆಗಿರುತ್ತದೆ.',
  'faq.q4': 'ಈ ರೀಡರ್ ಉಚಿತವೇ? ಜಾಹೀರಾತುಗಳಿವೆಯೇ?',
  'faq.a4':
    'ಸಂಪೂರ್ಣ ಉಚಿತ. ಜಾಹೀರಾತುಗಳಿಲ್ಲ, ಖಾತೆ ಇಲ್ಲ, ಸುದ್ದಿಪತ್ರವಿಲ್ಲ, ಜಾಹೀರಾತು ಟ್ರ್ಯಾಕಿಂಗ್ ಇಲ್ಲ. ನಿಮ್ಮ ಸಂಕಲ್ಪ ಸರಣಿ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ಇರುತ್ತದೆ ಮತ್ತು ಯಾವುದೇ ಸರ್ವರ್‌ಗೆ ಕಳುಹಿಸಲಾಗುವುದಿಲ್ಲ. ಒಮ್ಮೆ ಲೋಡ್ ಆದ ಮೇಲೆ ಸೈಟ್ ಆಫ್‌ಲೈನ್‌ನಲ್ಲೂ ಕೆಲಸ ಮಾಡುತ್ತದೆ.',
  'faq.q5': 'ಸಂಕಲ್ಪ ಎಂದರೇನು, ಸರಣಿ ಟ್ರ್ಯಾಕರ್ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ?',
  'faq.a5':
    'ಸಂಕಲ್ಪ ಎಂಬುದು ಆಧ್ಯಾತ್ಮಿಕ ನಿರ್ಧಾರ — ಸಂಪ್ರದಾಯಿಕವಾಗಿ ಸತತ 11, 21 ಅಥವಾ 40 ದಿನಗಳು ಚಾಲೀಸಾ ಪಠಿಸುವ ಪ್ರತಿಜ್ಞೆ. ನೀವು ಯಾವುದೇ ಚಾಲೀಸಾ ಪುಟದ 80% ಓದಿದಾಗ ಟ್ರ್ಯಾಕರ್ ಆ ದಿನವನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪೂರ್ಣ ಎಂದು ಗುರುತಿಸುತ್ತದೆ. ಇದು ಸಂಪೂರ್ಣವಾಗಿ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿರುತ್ತದೆ; ಸೈಟ್ ಡೇಟಾ ಅಳಿಸಿದರೆ ದಾಖಲೆ ಅಳಿಸಿಹೋಗುತ್ತದೆ.',
  'faq.q6': 'ಈ ಪಠ್ಯಗಳನ್ನು ಯಾರು ಬರೆದು ಪರಿಶೀಲಿಸುತ್ತಾರೆ?',
  'faq.a6':
    'ದೇವನಾಗರಿ ಶ್ಲೋಕಗಳು ಪ್ರತಿ ಚಾಲೀಸಾದ ವ್ಯಾಪಕವಾಗಿ ಸ್ವೀಕೃತ ಸಂಪ್ರದಾಯಿಕ ಆವೃತ್ತಿಗಳನ್ನು ಅನುಸರಿಸುತ್ತವೆ. ಪ್ರಾದೇಶಿಕ ಲಿಪಿ ಆವೃತ್ತಿಗಳು ದೇವನಾಗರಿ ಮೂಲದಿಂದ ಬಿಲ್ಡ್ ಸಮಯದಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ರೂಪುಗೊಳ್ಳುತ್ತವೆ, ಆದ್ದರಿಂದ ಮೂಲ ಪಠ್ಯದ ಯಾವುದೇ ತಿದ್ದುಪಡಿ ಪ್ರತಿ ಲಿಪಿಗೂ ತಲುಪುತ್ತದೆ. ತಪ್ಪು ಕಂಡಿರಾ? About ಪುಟದ ಮೂಲಕ ನಮಗೆ ತಿಳಿಸಿ.',

  'home.about.kicker': 'ಪರಿಚಯ',
  'home.about.heading': 'ಹನುಮಾನ್ ಚಾಲೀಸಾ, ಶಾಂತವಾಗಿ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ.',
  'article.cta': 'ಈಗಲೇ ಹನುಮಾನ್ ಚಾಲೀಸಾ ಓದಿ',

  'sankalp.metaTitle': 'ಸಂಕಲ್ಪ · ಆನ್‌ಲೈನ್ ಚಾಲೀಸಾ',
  'sankalp.metaDescription':
    '11, 21 ಅಥವಾ 40 ದಿನಗಳ ಚಾಲೀಸಾ ಪಠಣ ಸಂಕಲ್ಪ ಕೈಗೊಳ್ಳಿ. ನಿಮ್ಮ ಸರಣಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ — ಖಾಸಗಿಯಾಗಿ, ಇದೇ ಸಾಧನದಲ್ಲಿ.',
  'sankalp.kicker': 'ಸಂಕಲ್ಪ · संकल्प',
  'sankalp.heading': 'ನಿಮ್ಮೊಂದಿಗೆ ನೀವು ಮಾಡುವ ಒಂದು ವಾಗ್ದಾನ.',
  'sankalp.subtitle':
    'ಸಂಕಲ್ಪವು ನಿಶ್ಶಬ್ದ ದಿಟ್ಟ ನಿರ್ಧಾರದ ಪ್ರಾಚೀನ ಸಾಧನೆ — ಅಭ್ಯಾಸವನ್ನು ನೀವು ಆಯ್ಕೆಮಾಡುತ್ತೀರಿ, ಅವಧಿಯನ್ನು ನೀವು ನಿಗದಿಪಡಿಸುತ್ತೀರಿ, ಪ್ರತಿದಿನ ನೀವು ಹಾಜರಾಗುತ್ತೀರಿ. ಇಷ್ಟೇ.',
  'sankalp.plan11': 'ಚಿಕ್ಕದಾದರೂ ಅರ್ಥಪೂರ್ಣ ವ್ರತ — ಬದಲಾವಣೆ ಗಮನಿಸಲು ಸಾಕಷ್ಟು.',
  'sankalp.plan21': 'ಪಾರಂಪರಿಕ ಏಕಾದಶದ ದ್ವಿಗುಣ — ನಿಜವಾದ ಲಯ ರೂಪುಗೊಳ್ಳುತ್ತದೆ.',
  'sankalp.plan40': 'ಮಂಡಲ — ಸಂಪೂರ್ಣ ಒಂದು ಚಕ್ರ. ಆಳವಾದ, ಶಾಂತ, ರೂಪಾಂತರಕಾರಿ.',
  'sankalp.noteKicker': 'ಒಂದು ಮೃದು ಸೂಚನೆ',
  'sankalp.noteBody':
    'ನಿಮ್ಮ ಸರಣಿ ಈ ಬ್ರೌಸರ್‌ನಲ್ಲೇ ಉಳಿಯುತ್ತದೆ. ಯಾವುದೂ ಅಪ್‌ಲೋಡ್ ಆಗುವುದಿಲ್ಲ, ಯಾವುದೂ ಹಂಚಲಾಗುವುದಿಲ್ಲ, ಮತ್ತು ಸೈಟ್ ಡೇಟಾ ಅಳಿಸಿದರೆ ಇದು ಮರುಹೊಂದಿಸಲಾಗುತ್ತದೆ. ಇದು ಉದ್ದೇಶಪೂರ್ವಕ — ಸಂಕಲ್ಪವು ನಿಮ್ಮ ಮತ್ತು ದೈವದ ನಡುವೆ, ನಿಮ್ಮ ಮತ್ತು ಸರ್ವರ್ ನಡುವೆ ಅಲ್ಲ.',

  'about.metaTitle': 'ನಮ್ಮ ಬಗ್ಗೆ · ಆನ್‌ಲೈನ್ ಚಾಲೀಸಾ',
  'about.metaDescription':
    'ಆನ್‌ಲೈನ್ ಚಾಲೀಸಾ ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ — ಪವಿತ್ರ ಹಿಂದೂ ಸ್ತೋತ್ರಗಳಿಗೆ ಜಾಹೀರಾತು-ರಹಿತ, ವ್ಯತ್ಯಯವಿಲ್ಲದ, ಗೌಪ್ಯತೆಯನ್ನು ಗೌರವಿಸುವ ಸ್ಥಳ.',
  'about.kicker': 'ನಮ್ಮ ಬಗ್ಗೆ',
  'about.heading': 'ಇದು ವೆಬ್‌ಸೈಟ್ ಮಾತ್ರವಲ್ಲ, ಒಂದು ಆಶ್ರಯ.',
  'about.p1':
    'ಆನ್‌ಲೈನ್ ಚಾಲೀಸಾವನ್ನು ಒಂದು ಕಾರಣಕ್ಕಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ: ಜನರು ಅತ್ಯಂತ ಪ್ರೀತಿಸುವ ಪವಿತ್ರ ಪಠ್ಯಗಳು — ಹನುಮಾನ್ ಚಾಲೀಸಾ, ಶಿವ ಚಾಲೀಸಾ, ಗಣೇಶ, ದುರ್ಗಾ, ಶನಿ — ಇವು ಆಧುನಿಕ ವೆಬ್‌ನಲ್ಲಿ ಬ್ಯಾನರ್ ಜಾಹೀರಾತುಗಳು, ಆಟೋಪ್ಲೇ ವೀಡಿಯೊಗಳು, ಪಾಪ್‌ಅಪ್ ಚಂದಾದಾರಿಕೆಗಳು ಮತ್ತು ಕ್ರಿಕೆಟ್ ಸ್ಕೋರ್ ಮೆನುಗಳ ಹಿಂದೆ ಸಿಲುಕಿಕೊಂಡಿವೆ.',
  'about.p2': 'ಸ್ತೋತ್ರದ ಹತ್ತಿರ ಇದಾವುದೂ ಇರಬಾರದು.',
  'about.p3':
    'ಆದ್ದರಿಂದ ನಾವು ಅದರ ವಿರುದ್ಧವನ್ನು ನಿರ್ಮಿಸಿದ್ದೇವೆ. ಶಾಂತ ಪುಟ. ಉಷ್ಣ ಟೈಪೋಗ್ರಫಿ. ಬೆಳಗಿನ ಪಠಣಕ್ಕೆ ಸೆಪಿಯಾ ಮೋಡ್ ಮತ್ತು ರಾತ್ರಿ ಓದಿಗೆ ನಿಜವಾದ ಡಾರ್ಕ್ ಮೋಡ್. ಇಂಟರ್ಫೇಸ್‌ನ ಎಲ್ಲವನ್ನೂ ಅಡಗಿಸುವ ಒಂದೇ ಬಟನ್. ಕೈಮುಗಿದು ಕುಳಿತು ಓದಲು ಇಷ್ಟಪಡುವ ಹಿರಿಯ ಭಕ್ತರಿಗೆ ಹ್ಯಾಂಡ್ಸ್-ಫ್ರೀ ಟೆಲಿಪ್ರಾಂಪ್ಟರ್. ಕೆಳಭಾಗದಲ್ಲಿ ಆಯ್ಕೆ ಆಡಿಯೋ, ಝೆನ್ ಮೋಡ್‌ಗೆ ಹೋದಾಗ ಅದು ಸ್ವತಃ ಮೃದುವಾಗಿ ಮಾಯವಾಗುತ್ತದೆ.',
  'about.noDo.heading': 'ನಾವು ಮಾಡದವು',
  'about.noDo.1': 'ಯಾವತ್ತೂ ಜಾಹೀರಾತು ಇಲ್ಲ.',
  'about.noDo.2': 'ಜಾಹೀರಾತು ಟ್ರ್ಯಾಕರ್‌ಗಳಿಲ್ಲ, ನಿಮ್ಮ ಓದಿನ ವೈಯಕ್ತಿಕ ಪ್ರೊಫೈಲ್ ಇಲ್ಲ.',
  'about.noDo.3': 'ಖಾತೆ, ಸೈನ್-ಅಪ್ ಅಥವಾ ಇಮೇಲ್ ಅಗತ್ಯವಿಲ್ಲ.',
  'about.noDo.4': 'ಪುಶ್ ಸೂಚನೆಗಳು ಅಥವಾ ಕಿರಿಕಿರಿ ಮೂಡಿಸುವ ರಿಮೈಂಡರ್‌ಗಳು ಇಲ್ಲ.',
  'about.sankalp.heading': 'ಸಂಕಲ್ಪ ನಿಮ್ಮದು',
  'about.sankalp.body':
    'ಸ್ಟ್ರೀಕ್ ಟ್ರ್ಯಾಕರ್ ಸಂಪೂರ್ಣವಾಗಿ ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನ ಸ್ಥಳೀಯ ಸಂಗ್ರಹಣೆಯಲ್ಲಿ ಇರುತ್ತದೆ. ಅದು ನಿಮ್ಮ ಸಾಧನವನ್ನು ಎಂದಿಗೂ ಬಿಡುವುದಿಲ್ಲ. ನೀವು ಬ್ರೌಸರ್ ಡೇಟಾ ಅಳಿಸಿದರೆ ಅದು ಮರುಹೊಂದಲಿದೆ — ಇದು ಗೌಪ್ಯತೆಯ ಬೆಲೆ, ಮತ್ತು ಅದು ನ್ಯಾಯಸಮ್ಮತವೆಂದು ನಾವು ಭಾವಿಸುತ್ತೇವೆ.',
  'about.text.heading': 'ಪಠ್ಯದ ಬಗ್ಗೆ',
  'about.text.body':
    'ದೇವನಾಗರಿ ಶ್ಲೋಕಗಳು ಮತ್ತು ರೋಮನ ಲಿಪ್ಯಂತರಗಳು ದೀರ್ಘಕಾಲದ ಭಕ್ತಿಪರ ಪರಂಪರೆಯಿಂದ ತೆಗೆದುಕೊಳ್ಳಲ್ಪಟ್ಟಿವೆ ಮತ್ತು ಅನೇಕ ಪ್ರಕಟಿತ ಆವೃತ್ತಿಗಳೊಂದಿಗೆ ಹೋಲಿಕೆ ಮಾಡಲಾಗಿದೆ. ತಪ್ಪು ಕಂಡರೆ ದಯವಿಟ್ಟು ನಮಗೆ ತಿಳಿಸಿ — ಶಾಸ್ತ್ರದ ಶುದ್ಧತೆ ಕಾಳಜಿಯ ವಿಷಯವಾಗಿದೆ.',
  'about.blessing': '॥ ಶುಭಂ ಅಸ್ತು ॥',

  'footer.blurb':
    'ಆನ್‌ಲೈನ್ ಚಾಲೀಸಾ ಒಂದು ಭಕ್ತಿ ರೀಡರ್ — ಜಾಹೀರಾತುಗಳಿಲ್ಲ, ಜಾಹೀರಾತು ಟ್ರ್ಯಾಕಿಂಗ್ ಇಲ್ಲ, ಖಾತೆ ಇಲ್ಲ. ಶಾಂತವಾಗಿ ಓದಿ, ನಿಮ್ಮ ಸಾಧನೆ ಸ್ಥಿರವಾಗಿರಲಿ.',
  'footer.site': 'ಸೈಟ್',
  'footer.legal': 'ಕಾನೂನು',
  'footer.home': 'ಮುಖಪುಟ',
  'footer.chalisas': 'ಚಾಲೀಸಾ',
  'footer.paath': 'ಪಠ',
  'footer.sankalp': 'ಸಂಕಲ್ಪ',
  'footer.aboutUs': 'ನಮ್ಮ ಬಗ್ಗೆ',
  'footer.privacy': 'ಗೌಪ್ಯತಾ ನೀತಿ',
  'footer.terms': 'ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳು',
  'footer.made': 'ಶಾಂತ ಭಕ್ತಿಯಿಂದ ರಚಿಸಲಾಗಿದೆ',

  'reader.script': 'ಲಿಪಿ',
  'reader.script.hi': 'ದೇವನಾಗರಿ (ಹಿಂದಿ)',
  'reader.script.te': 'ತೆಲುಗು',
  'reader.script.ta': 'ತಮಿಳು',
  'reader.script.kn': 'ಕನ್ನಡ',
  'reader.script.bn': 'ಬಂಗಾಳಿ',
  'reader.script.en': 'ಇಂಗ್ಲಿಷ್ (ಲಿಪ್ಯಂತರ)',
  'reader.showEnglish': 'ಇಂಗ್ಲಿಷ್ ತೋರಿಸು',
  'reader.showEnglishTitle': 'ಪ್ರತಿ ಶ್ಲೋಕದ ಕೆಳಗೆ ಇಂಗ್ಲಿಷ್ ಲಿಪ್ಯಂತರ ತೋರಿಸು',
  'reader.en': 'EN',
  'reader.decrease': 'ಅಕ್ಷರ ಗಾತ್ರ ಕಡಿಮೆ ಮಾಡಿ',
  'reader.smaller': 'ಸಣ್ಣ ಅಕ್ಷರ',
  'reader.increase': 'ಅಕ್ಷರ ಗಾತ್ರ ಹೆಚ್ಚಿಸಿ',
  'reader.larger': 'ದೊಡ್ಡ ಅಕ್ಷರ',
  'reader.autoscroll': 'ಆಟೋ-ಸ್ಕ್ರಾಲ್',
  'reader.autoscrollTitle': 'ಟೆಲಿಪ್ರಾಂಪ್ಟರ್ — ಆಟೋ-ಸ್ಕ್ರಾಲ್',
  'reader.zen': 'ಝೆನ್',
  'reader.zenTitle': 'ಝೆನ್ ಮೋಡ್ — ಎಲ್ಲವನ್ನೂ ಮರೆಮಾಡಿ',
  'reader.speed': 'ವೇಗ',
  'reader.stop': 'ನಿಲ್ಲಿಸಿ',
  'reader.exitZen': 'ಝೆನ್‌ನಿಂದ ನಿರ್ಗಮಿಸಿ',
  'reader.exitZenAria': 'ಝೆನ್ ಮೋಡ್‌ನಿಂದ ನಿರ್ಗಮಿಸಿ',
  'streak.kicker': 'ಸಂಕಲ್ಪ',
  'streak.heading': 'ಒಂದು ಶಾಂತ ಸಂಕಲ್ಪ',
  'streak.blurb':
    'ಒಂದು ಅವಧಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ ಮತ್ತು ಓದುವಾಗ ಪ್ರತಿದಿನವನ್ನೂ ಗುರುತಿಸಿ. ಪ್ರಗತಿ ಈ ಸಾಧನದಲ್ಲೇ ಉಳಿಯುತ್ತದೆ — ಖಾತೆ ಇಲ್ಲ, ಕ್ಲೌಡ್ ಇಲ್ಲ, ನೀವು ಕೇಳದ ಜ್ಞಾಪನೆಗಳಿಲ್ಲ.',
  'streak.lengthAria': 'ಸಂಕಲ್ಪ ಅವಧಿ',
  'streak.daysUnit': 'ದಿನಗಳು',
  'streak.of': '/',
  'streak.currentStreak': 'ಪ್ರಸ್ತುತ ಸರಣಿ',
  'streak.dailyProgress': 'ದೈನಂದಿನ ಪ್ರಗತಿ',
  'streak.markToday': 'ಇಂದು ಪೂರ್ಣಗೊಂಡಿದೆ ಎಂದು ಗುರುತಿಸಿ',
  'streak.todayMarked': '✓ ಇಂದು ಗುರುತಿಸಲಾಗಿದೆ · ರದ್ದುಗೊಳಿಸಿ',
  'streak.reset': 'ಸಂಕಲ್ಪ ಮರುಹೊಂದಿಸಿ',
  'streak.resetConfirm': 'ನಿಮ್ಮ ಸಂಕಲ್ಪವನ್ನು ಮರುಹೊಂದಿಸುವುದೇ? ಇದು ಈ ಸಾಧನದ ಎಲ್ಲಾ ಗುರುತುಗಳನ್ನು ಅಳಿಸುತ್ತದೆ.',
  'streak.day': 'ದಿನ',
  'streak.dayWord': 'ದಿನ',
  'streak.completed': 'ಪೂರ್ಣಗೊಂಡಿದೆ',
  'reader.speed.slow': 'ನಿಧಾನ',
  'reader.speed.medium': 'ಮಧ್ಯಮ',
  'reader.speed.fast': 'ವೇಗ',

  'chalisa.prev': 'ಹಿಂದಿನದು',
  'chalisa.next': 'ಮುಂದಿನದು',
  'chalisa.backToLibrary': 'ಗ್ರಂಥಾಲಯಕ್ಕೆ ಹಿಂತಿರುಗಿ',
  'chalisa.faqHeading': 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ',
  'chalisa.faqKicker': 'ಪ್ರಶ್ನೆಗಳು ಮತ್ತು ಉತ್ತರಗಳು',
  'chalisa.moreChalisas': 'ಇನ್ನಷ್ಟು ಚಾಲೀಸಾಗಳು',
  'chalisa.readAria': 'ಓದಿ',

  'notfound.heading': 'ಈ ಪುಟ ದಾರಿ ತಪ್ಪಿದೆ.',
  'notfound.body':
    'ನೀವು ಹುಡುಕುತ್ತಿದ್ದ ಪುಟ ಇಲ್ಲಿ ಇಲ್ಲ. ಬಹುಶಃ ಅದನ್ನು ಸ್ಥಳಾಂತರಿಸಲಾಗಿದೆ, ಅಥವಾ ಎಂದೂ ಇರಲಿಲ್ಲ. ನಿಮ್ಮನ್ನು ಮತ್ತೆ ಶಾಂತಿಯ ಕಡೆಗೆ ಕರೆದೊಯ್ಯೋಣ.',
  'notfound.cta': 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ',
  'notfound.browse': 'ಚಾಲೀಸಾಗಳನ್ನು ನೋಡಿ',
  'meta.langName': 'ಕನ್ನಡ',
  'meta.home.title': 'ಹನುಮಾನ್ ಚಾಲೀಸಾ — ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್, ತೆಲುಗು, ಕನ್ನಡ & ತಮಿಳಿನಲ್ಲಿ · ಆನ್‌ಲೈನ್ ಚಾಲೀಸಾ',
  'meta.home.description':
    'ಹನುಮಾನ್ ಚಾಲೀಸಾವನ್ನು ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್, ತೆಲುಗು, ಕನ್ನಡ, ತಮಿಳಿನಲ್ಲಿ ಉಚಿತ, ಜಾಹೀರಾತು-ರಹಿತ ರೀಡರ್‌ನಲ್ಲಿ ಓದಿ. ಆಟೋ-ಸ್ಕ್ರಾಲ್ ಪಾಠ ಮಾಡಿ, ನಿಮ್ಮ 11 / 21 / 40-ದಿನದ ಸಂಕಲ್ಪವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ — ಜೊತೆಗೆ ಶಿವ, ಗಣೇಶ, ದುರ್ಗಾ, ಶನಿ, ಲಕ್ಷ್ಮೀ & ಸರಸ್ವತೀ ಚಾಲೀಸಾ.',
};

export const ui: Record<Locale, Partial<Record<UIStringKey, string>>> = {
  en,
  hi,
  bn,
  te,
  ta,
  kn,
};
