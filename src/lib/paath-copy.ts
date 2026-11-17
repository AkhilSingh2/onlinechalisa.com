/**
 * English and Hindi copy for the three paath pages: the short answer
 * under the title, the card/SEO description, and the questions. Other
 * site languages fall back to English.
 */

export interface PaathFaq {
  q: string;
  a: string;
}

export interface PaathCopy {
  tagline: string;
  description: string;
  /** One paragraph that answers what this text is and who it is for. */
  intro: string;
  faqs: PaathFaq[];
}

const en: Record<string, PaathCopy> = {
  'bajrang-baan': {
    tagline: 'The arrow of Hanuman — a prayer for protection and for the removal of every obstacle.',
    description:
      'Bajrang Baan is a Hindi prayer to Lord Hanuman, read for protection and to ask him to clear a difficulty. It is a separate paath from the Hanuman Chalisa, often read just after it.',
    intro:
      'Bajrang Baan is a Hindi prayer to Hanuman, also called Bajrang Bali. People read it when they want protection, courage, or a difficulty moved out of the way. It is not a chalisa — a chalisa has forty verses — and it is traditionally read after the Hanuman Chalisa, on Tuesday or Saturday, or on any day the need is there. The opening lines ask him to hear the prayer and not delay:',
    faqs: [
      {
        q: 'What is Bajrang Baan?',
        a: 'Bajrang Baan is a Hindi prayer to Lord Hanuman. Devotees read it for protection and to ask him to clear a difficulty. It is not a chalisa. A chalisa has forty verses, and this hymn is a separate paath, often read just after the Hanuman Chalisa.',
      },
      {
        q: 'Who is Bajrang Baan addressed to?',
        a: 'It is addressed to Hanuman, also called Bajrang Bali. The opening lines ask him to hear the prayer, not to delay the devotee’s work, and to come quickly with relief.',
      },
      {
        q: 'When should Bajrang Baan be read?',
        a: 'Tuesday and Saturday are the days most often chosen. It is also read whenever someone wants courage or protection. A clean seat and a lamp are the usual preparation. There is no required offering.',
      },
      {
        q: 'Is the Roman line an English translation?',
        a: 'No. The Roman line shows how the Hindi is pronounced. The meaning stays in the Hindi. This page has 37 lines, and the spoken recitation follows each one.',
      },
    ],
  },
  'sankat-mochan-hanuman-ashtak': {
    tagline: "Eight stanzas to Hanuman, the reliever of troubles, with the refrain that his name removes difficulty.",
    description:
      'The Sankat Mochan Hanuman Ashtak is a Hindi hymn of eight stanzas recalling Hanuman’s deeds, sung to ask him to remove a difficulty. Sankat means trouble, and mochan means the one who frees you from it.',
    intro:
      'The Sankat Mochan Hanuman Ashtak is a Hindi hymn of eight stanzas to Hanuman as the one who removes trouble. Each stanza recalls something he did in the Ramayana, and the refrain returns to his name. People sing it on Tuesday, and whenever a difficulty will not move, often after the Hanuman Chalisa. It opens with Hanuman as a child, reaching for the sun:',
    faqs: [
      {
        q: 'What is the Sankat Mochan Hanuman Ashtak?',
        a: 'An ashtak is a hymn of eight stanzas. This one recalls Hanuman’s deeds and repeats the line that his name removes trouble. It is a paath of its own, separate from the forty verses of the Hanuman Chalisa. The eight stanzas are set out on this page as 74 lines.',
      },
      {
        q: 'What does Sankat Mochan mean?',
        a: 'Sankat means a difficulty, and mochan means the one who releases you from it. The refrain calls Hanuman by that name.',
      },
      {
        q: 'When is the Hanuman Ashtak sung?',
        a: 'Traditionally on Tuesday, and whenever a difficulty is being faced. Many people sing it after the Hanuman Chalisa. A lamp and a quiet seat are enough.',
      },
      {
        q: 'Is the Roman line an English translation?',
        a: 'No. The Roman line is there so the Hindi can be pronounced. It is not a translation of the meaning.',
      },
    ],
  },
  'durga-kavach': {
    tagline: 'A Hindi protective hymn to the nine forms of Goddess Durga, asking her to guard every part of the body.',
    description:
      'This Durga Kavach is a Hindi hymn that names the nine forms of Goddess Durga and asks them for protection. The poem ends in the poet’s name, Chaman. It is not the Sanskrit kavach of the Durga Saptashati.',
    intro:
      'This Durga Kavach is a Hindi hymn asking the nine forms of Durga to guard the person who reads it. Kavach means armour: the hymn asks the Goddess to cover the reader the way armour covers a body. The poem ends in the poet’s own name, Chaman, and it is not the Sanskrit kavach from the Durga Saptashati. It is read during Navratri, on Tuesday or Friday, or after the Durga Chalisa. It begins:',
    faqs: [
      {
        q: 'What is this Durga Kavach?',
        a: 'It is a Hindi hymn that asks the nine forms of Durga to guard the person who reads it. The poem ends in the poet’s own name, Chaman. It is a different text from the Sanskrit kavach in the Durga Saptashati.',
      },
      {
        q: 'What does kavach mean?',
        a: 'Kavach means armour. In this kind of hymn the deity is asked to protect each part of the person, the way armour covers the body.',
      },
      {
        q: 'When should the Durga Kavach be read?',
        a: 'During Navratri, on Tuesday or Friday, or any morning a devotee wants to read a protective hymn to the Goddess. It sits naturally after the Durga Chalisa.',
      },
      {
        q: 'How long is the recitation?',
        a: 'This page has 145 lines. The spoken recitation runs just under six minutes and follows each line. The Roman line under the Hindi is a pronunciation aid, not an English translation.',
      },
    ],
  },
  'hanuman-aarti': {
    tagline: 'The evening aarti sung to Hanuman, usually just after the Chalisa.',
    description:
      'Hanuman Aarti begins “Aarti kije Hanuman lala ki”. It is the short hymn sung with a lamp after the Hanuman Chalisa, on Tuesday or Saturday.',
    intro:
      'Hanuman Aarti is the short hymn sung with a lamp at the end of Hanuman worship, usually just after the Hanuman Chalisa. When it is sung, the opening couplet is repeated after every verse. This page gives each couplet once, so the text stays readable, and the recitation follows those lines. It begins:',
    faqs: [
      {
        q: 'What is the Hanuman Aarti?',
        a: 'It is the hymn that begins “Aarti kije Hanuman lala ki”. Devotees sing it with a lamp after the Hanuman Chalisa. It is not a chalisa: a chalisa has forty verses, and this aarti has twelve couplets.',
      },
      {
        q: 'When is the Hanuman Aarti sung?',
        a: 'At the end of the paath, on Tuesday and Saturday, and on Hanuman Jayanti. A lamp, or camphor in a thali, is the usual way to offer it.',
      },
      {
        q: 'Is the opening line repeated?',
        a: 'Yes, when the aarti is sung. The first couplet comes back after each verse. On this page that couplet is written once, at the start, so the rest of the hymn can be read straight through.',
      },
      {
        q: 'Is the Roman line an English translation?',
        a: 'No. The Roman line shows how the Hindi is pronounced. This page has 12 couplets, and the spoken recitation follows each one.',
      },
    ],
  },
  'durga-aarti': {
    tagline: 'Jai Ambe Gauri — the aarti sung to the Mother at the end of Durga worship.',
    description:
      'Durga Aarti begins “Jai Ambe Gauri”. It is sung with a lamp during Navratri and at the end of Durga worship, often after the Durga Chalisa.',
    intro:
      'This is the aarti that begins “Jai Ambe Gauri, maiya Jai Shyama Gauri”. It is sung with a lamp at the end of Durga worship, through Navratri, and after the Durga Chalisa. The opening couplet is the refrain when it is sung. The hymn names her form, her lion, and the demons of the Durga story, and it closes with the poet’s name, Shivanand Swami. It begins:',
    faqs: [
      {
        q: 'What is Jai Ambe Gauri?',
        a: 'It is the Durga Aarti sung in homes and temples at the end of the Mother’s worship. Ambe and Gauri are names of the Goddess. It is a different text from the Durga Chalisa and from the Durga Kavach.',
      },
      {
        q: 'When is it sung?',
        a: 'During Navratri, on Tuesday or Friday, and whenever a Durga puja ends. A lamp is offered while it is sung. It sits naturally after the Durga Chalisa.',
      },
      {
        q: 'Who is named at the end?',
        a: 'The last couplet names Shivanand Swami. The hymn itself was already in print by 1913. The opening couplet is repeated after each verse when it is sung.',
      },
      {
        q: 'Is the Roman line an English translation?',
        a: 'No. It is a pronunciation aid. This page has 13 couplets, and the spoken recitation follows each one.',
      },
    ],
  },
  'ganesh-aarti': {
    tagline: 'Jai Ganesh Deva — the short aarti sung before a puja begins.',
    description:
      'Ganesh Aarti begins “Jai Ganesh Jai Ganesh Deva”. It is the short hymn sung with a lamp before other worship, and on Wednesdays and Ganesh Chaturthi.',
    intro:
      'Ganesh Aarti is the short hymn sung before a puja begins, because Ganesh is invoked first. It names Parvati as his mother and Shiva as his father, and it is sung with a lamp on Wednesdays and on Ganesh Chaturthi. The opening couplet is repeated when it is sung. The page gives each couplet once. It begins:',
    faqs: [
      {
        q: 'What is the Ganesh Aarti?',
        a: 'It is the hymn that begins “Jai Ganesh, Jai Ganesh, Jai Ganesh Deva”. It is sung with a lamp, often before any other worship, and it is separate from the forty verses of the Ganesh Chalisa.',
      },
      {
        q: 'When should it be sung?',
        a: 'Before a puja, on Wednesday, and through Ganesh Chaturthi. A lamp and a modak or laddu as the offering are the usual preparation.',
      },
      {
        q: 'What does the last verse before the close mean?',
        a: '“Sur Shyam sharan aaye” carries the poet’s name, Sur. The couplet asks that the service of someone who has come for shelter be fulfilled.',
      },
      {
        q: 'Is the Roman line an English translation?',
        a: 'No. It shows the pronunciation. This page has 6 couplets, and the spoken recitation follows each one.',
      },
    ],
  },
  'om-jai-jagdish-hare': {
    tagline: 'The aarti sung in almost every home puja, addressed to Vishnu as Jagadish.',
    description:
      'Om Jai Jagdish Hare was written in 1870 by Pandit Shardha Ram Phillauri. It is sung at the end of a home puja, to Vishnu, the lord of the world.',
    intro:
      'Om Jai Jagdish Hare is the aarti heard at the end of a puja in most North Indian homes. Pandit Shardha Ram Phillauri wrote it in 1870, addressed to Vishnu as Jagadish, the lord of the world. It is also sung for other deities, because the words ask the lord of all to clear a trouble in a moment. When it is sung, the first verse returns after each stanza. It begins:',
    faqs: [
      {
        q: 'Who wrote Om Jai Jagdish Hare?',
        a: 'Pandit Shardha Ram Phillauri wrote it in 1870. He was a scholar from Phillaur, near Ludhiana. The hymn is addressed to Vishnu.',
      },
      {
        q: 'When is it sung?',
        a: 'At the close of a home puja, in the evening, with a lamp. It is sung on ekadashi and at almost any festival, because it is not tied to one temple ritual.',
      },
      {
        q: 'Is it only for Vishnu?',
        a: 'The words name Jagadish, the lord of the world, and call him the inner witness and the father and mother of the singer. Temples sing it for Vishnu. Many homes sing the same verses at the end of any puja.',
      },
      {
        q: 'Is the Roman line an English translation?',
        a: 'No. It is there so the Hindi can be pronounced. This page has 8 verses, and the spoken recitation follows each one.',
      },
    ],
  },
  'satyanarayan-aarti': {
    tagline: 'Jai Lakshmi Ramana — the aarti sung at the end of the Satyanarayan katha.',
    description:
      'Satyanarayan Aarti begins “Jai Lakshmi Ramana”. It is sung with a lamp after the Satyanarayan vrat katha, before the prasad is shared.',
    intro:
      'This is the aarti sung when the Satyanarayan katha is finished, before the prasad is shared. It begins “Jai Lakshmi Ramana” — victory to the beloved of Lakshmi — and then recalls the people in the katha: the poor brahmin, the woodcutter, King Chandrachud, the merchant who forgot his vow, and the king who worshipped in the forest. The katha itself is a long prose telling and is not on this page. The aarti is the part that is sung. It begins:',
    faqs: [
      {
        q: 'What is the Satyanarayan Aarti?',
        a: 'It is the hymn that begins “Jai Lakshmi Ramana, Swami Jai Lakshmi Ramana”. It is sung with a lamp at the end of the Satyanarayan vrat, after the katha and before the prasad. It is not the katha itself.',
      },
      {
        q: 'When is it sung?',
        a: 'On purnima, at a griha pravesh, or whenever a family has kept the Satyanarayan vrat. The offering named in the hymn is a sava prasad of banana, dry fruit, incense, a lamp, and tulsi.',
      },
      {
        q: 'Why does it mention a brahmin, a woodcutter, and a king?',
        a: 'Those are the people the katha says were helped when they kept the vrat, and checked when they forgot it. The aarti is a short remembering of that story.',
      },
      {
        q: 'Is the Roman line an English translation?',
        a: 'No. It shows how the Hindi is pronounced. This page has 9 couplets, and the spoken recitation follows each one.',
      },
    ],
  },
};

const hi: Record<string, PaathCopy> = {
  'bajrang-baan': {
    tagline: 'हनुमान का बाण — रक्षा के लिए और हर बाधा हटाने के लिए एक प्रार्थना।',
    description:
      'बजरंग बाण हनुमान जी की हिन्दी प्रार्थना है। इसे रक्षा के लिए और किसी अटके हुए काम को हटाने के लिए पढ़ा जाता है। यह हनुमान चालीसा से अलग पाठ है, और अक्सर चालीसा के बाद पढ़ा जाता है।',
    intro:
      'बजरंग बाण हनुमान जी की हिन्दी प्रार्थना है, जिन्हें बजरंगबली भी कहा जाता है। लोग इसे तब पढ़ते हैं जब रक्षा चाहिए, साहस चाहिए, या कोई कठिनाई हटानी हो। यह चालीसा नहीं है — चालीसा में चालीस छंद होते हैं — और परंपरा से इसे हनुमान चालीसा के बाद पढ़ा जाता है, मंगल या शनिवार को, या जिस दिन ज़रूरत हो। आरंभ की पंक्तियाँ उनसे विनती करती हैं कि विनय सुनें और देर न करें:',
    faqs: [
      {
        q: 'बजरंग बाण क्या है?',
        a: 'बजरंग बाण हनुमान जी की हिन्दी प्रार्थना है। भक्त इसे रक्षा के लिए और कठिनाई हटाने के लिए पढ़ते हैं। यह चालीसा नहीं है। चालीसा में चालीस छंद होते हैं। यह अलग पाठ है, और अक्सर हनुमान चालीसा के ठीक बाद पढ़ा जाता है।',
      },
      {
        q: 'बजरंग बाण किसको संबोधित है?',
        a: 'यह हनुमान जी को संबोधित है, जिन्हें बजरंगबली भी कहते हैं। आरंभ की पंक्तियाँ उनसे विनती करती हैं कि प्रार्थना सुनें, भक्त का काम न टालें, और शीघ्र सुख लेकर आएँ।',
      },
      {
        q: 'बजरंग बाण कब पढ़ें?',
        a: 'अधिकतर मंगलवार और शनिवार चुने जाते हैं। साहस या रक्षा चाहिए हो तो किसी और दिन भी पढ़ा जाता है। स्वच्छ आसन और एक दीपक पर्याप्त हैं। कोई निश्चित भेंट ज़रूरी नहीं।',
      },
      {
        q: 'रोमन पंक्ति क्या अंग्रेज़ी अनुवाद है?',
        a: 'नहीं। रोमन पंक्ति बताती है कि हिन्दी का उच्चारण कैसे हो। अर्थ हिन्दी में ही है। इस पृष्ठ पर 37 पंक्तियाँ हैं, और पाठ हर पंक्ति के साथ चलता है।',
      },
    ],
  },
  'sankat-mochan-hanuman-ashtak': {
    tagline: 'संकट हरने वाले हनुमान के आठ छंद, इस टेक के साथ कि उनका नाम संकट मिटाता है।',
    description:
      'संकटमोचन हनुमान अष्टक आठ छंदों का हिन्दी भजन है। इसमें हनुमान जी के कार्य याद किए जाते हैं और उनसे संकट हटाने की विनती होती है। संकट का अर्थ कठिनाई है, और मोचन उसका अर्थ है जो उससे मुक्त करे।',
    intro:
      'संकटमोचन हनुमान अष्टक हनुमान जी का आठ छंदों का हिन्दी भजन है, उन्हें संकट हरने वाले के रूप में। हर छंद रामायण के किसी कार्य को याद करता है, और टेक उनके नाम पर लौटती है। लोग इसे मंगलवार को गाते हैं, और तब भी जब कोई कठिनाई नहीं हट रही हो — अक्सर हनुमान चालीसा के बाद। यह बाल रूप से शुरू होता है, जब उन्होंने सूर्य की ओर हाथ बढ़ाया:',
    faqs: [
      {
        q: 'संकटमोचन हनुमान अष्टक क्या है?',
        a: 'अष्टक आठ छंदों का भजन होता है। इसमें हनुमान जी के कार्य याद होते हैं और यह पंक्ति दोहराई जाती है कि उनका नाम संकट मिटाता है। यह हनुमान चालीसा के चालीस छंदों से अलग पाठ है। आठ छंद इस पृष्ठ पर 74 पंक्तियों में हैं।',
      },
      {
        q: 'संकट मोचन का क्या अर्थ है?',
        a: 'संकट का अर्थ कठिनाई है, और मोचन उसका जो उस कठिनाई से मुक्त करे। टेक हनुमान जी को इसी नाम से पुकारती है।',
      },
      {
        q: 'हनुमान अष्टक कब गाएँ?',
        a: 'परंपरा से मंगलवार को, और जब कोई कठिनाई सामने हो। बहुत से लोग इसे हनुमान चालीसा के बाद गाते हैं। एक दीपक और शांत आसन पर्याप्त हैं।',
      },
      {
        q: 'रोमन पंक्ति क्या अंग्रेज़ी अनुवाद है?',
        a: 'नहीं। रोमन पंक्ति इसलिए है कि हिन्दी का उच्चारण हो सके। यह अर्थ का अनुवाद नहीं है।',
      },
    ],
  },
  'durga-kavach': {
    tagline: 'दुर्गा के नौ रूपों की हिन्दी रक्षा-स्तुति, जो सिर से पाँव तक रक्षा माँगती है।',
    description:
      'यह दुर्गा कवच एक हिन्दी स्तुति है, जिसमें दुर्गा के नौ रूपों से रक्षा माँगी गई है। कविता कवि के नाम चमन पर समाप्त होती है। यह दुर्गा सप्तशती का संस्कृत कवच नहीं है।',
    intro:
      'यह दुर्गा कवच एक हिन्दी स्तुति है, जो दुर्गा के नौ रूपों से पाठक की रक्षा माँगती है। कवच का अर्थ कवच-सा आवरण है: स्तुति माता से कहती है कि वे पढ़ने वाले को वैसे ढकें जैसे कवच शरीर को ढकता है। कविता कवि के अपने नाम, चमन, पर समाप्त होती है, और यह दुर्गा सप्तशती का संस्कृत कवच नहीं है। इसे नवरात्रि में, मंगल या शुक्रवार को, या दुर्गा चालीसा के बाद पढ़ा जाता है। आरंभ:',
    faqs: [
      {
        q: 'यह दुर्गा कवच क्या है?',
        a: 'यह एक हिन्दी स्तुति है, जो दुर्गा के नौ रूपों से पाठक की रक्षा माँगती है। कविता कवि के अपने नाम, चमन, पर समाप्त होती है। यह दुर्गा सप्तशती के संस्कृत कवच से अलग पाठ है।',
      },
      {
        q: 'कवच का क्या अर्थ है?',
        a: 'कवच का अर्थ वह आवरण है जो शरीर को ढके। ऐसी स्तुति में देवता से कहा जाता है कि वे व्यक्ति के हर अंग की रक्षा करें, जैसे कवच शरीर को ढकता है।',
      },
      {
        q: 'दुर्गा कवच कब पढ़ें?',
        a: 'नवरात्रि में, मंगलवार या शुक्रवार को, या जिस सुबह माता की रक्षा-स्तुति पढ़नी हो। यह दुर्गा चालीसा के बाद स्वाभाविक बैठता है।',
      },
      {
        q: 'पाठ कितना लंबा है?',
        a: 'इस पृष्ठ पर 145 पंक्तियाँ हैं। बोला गया पाठ छह मिनट से थोड़ा कम चलता है और हर पंक्ति के साथ चलता है। हिन्दी के नीचे की रोमन पंक्ति उच्चारण के लिए है, अनुवाद के लिए नहीं।',
      },
    ],
  },
  'hanuman-aarti': {
    tagline: 'हनुमान जी की संध्या आरती, जो प्रायः चालीसा के ठीक बाद गाई जाती है।',
    description:
      'हनुमान आरती “आरती कीजै हनुमान लला की” से शुरू होती है। इसे दीपक के साथ हनुमान चालीसा के बाद गाया जाता है, मंगल या शनिवार को।',
    intro:
      'हनुमान आरती वह छोटा भजन है जो दीपक के साथ हनुमान पूजा के अंत में गाया जाता है, प्रायः हनुमान चालीसा के ठीक बाद। गाते समय पहली दो पंक्तियाँ हर छंद के बाद लौटती हैं। इस पृष्ठ पर हर छंद एक बार है, ताकि पाठ सीधा पढ़ा जा सके, और पाठ उन्हीं पंक्तियों के साथ चलता है। आरंभ:',
    faqs: [
      {
        q: 'हनुमान आरती क्या है?',
        a: 'यह वह भजन है जो “आरती कीजै हनुमान लला की” से शुरू होता है। भक्त इसे दीपक के साथ हनुमान चालीसा के बाद गाते हैं। यह चालीसा नहीं है। चालीसा में चालीस छंद होते हैं, और इस आरती में बारह छंद हैं।',
      },
      {
        q: 'हनुमान आरती कब गाएँ?',
        a: 'पाठ के अंत में, मंगलवार और शनिवार को, और हनुमान जयंती पर। दीपक, या थाली में कपूर, अर्पण का सामान्य ढंग है।',
      },
      {
        q: 'क्या पहली पंक्ति दोहराई जाती है?',
        a: 'गाते समय हाँ। पहला छंद हर पद के बाद लौटता है। इस पृष्ठ पर वह छंद आरंभ में एक बार है, ताकि शेष आरती सीधे पढ़ी जा सके।',
      },
      {
        q: 'रोमन पंक्ति क्या अंग्रेज़ी अनुवाद है?',
        a: 'नहीं। रोमन पंक्ति उच्चारण बताती है। इस पृष्ठ पर 12 छंद हैं, और पाठ हर छंद के साथ चलता है।',
      },
    ],
  },
  'durga-aarti': {
    tagline: 'जय अंबे गौरी — माता की पूजा के अंत में गाई जाने वाली आरती।',
    description:
      'दुर्गा आरती “जय अंबे गौरी” से शुरू होती है। नवरात्रि में और दुर्गा पूजा के अंत में दीपक के साथ गाई जाती है, अक्सर दुर्गा चालीसा के बाद।',
    intro:
      'यह वह आरती है जो “जय अंबे गौरी, मैया जय श्यामा गौरी” से शुरू होती है। दुर्गा पूजा के अंत में, नवरात्रि भर, और दुर्गा चालीसा के बाद दीपक के साथ गाई जाती है। गाते समय पहला छंद टेक बनता है। भजन माता के रूप, उनके सिंह, और दुर्गा-कथा के असुरों का नाम लेता है, और कवि के नाम शिवानंद स्वामी पर समाप्त होता है। आरंभ:',
    faqs: [
      {
        q: 'जय अंबे गौरी क्या है?',
        a: 'यह दुर्गा आरती है, जो घरों और मंदिरों में माता की पूजा के अंत में गाई जाती है। अंबे और गौरी देवी के नाम हैं। यह दुर्गा चालीसा से अलग है, और दुर्गा कवच से भी अलग है।',
      },
      {
        q: 'इसे कब गाएँ?',
        a: 'नवरात्रि में, मंगल या शुक्रवार को, और जब दुर्गा पूजा समाप्त हो। गाते हुए दीपक अर्पित किया जाता है। यह दुर्गा चालीसा के बाद स्वाभाविक बैठती है।',
      },
      {
        q: 'अंत में किसका नाम है?',
        a: 'अंतिम छंद शिवानंद स्वामी का नाम लेता है। यह भजन 1913 तक छप चुका था। गाते समय पहला छंद हर पद के बाद दोहराया जाता है।',
      },
      {
        q: 'रोमन पंक्ति क्या अंग्रेज़ी अनुवाद है?',
        a: 'नहीं। यह उच्चारण के लिए है। इस पृष्ठ पर 13 छंद हैं, और पाठ हर छंद के साथ चलता है।',
      },
    ],
  },
  'ganesh-aarti': {
    tagline: 'जय गणेश देवा — पूजा शुरू होने से पहले गाई जाने वाली छोटी आरती।',
    description:
      'गणेश आरती “जय गणेश जय गणेश देवा” से शुरू होती है। अन्य पूजा से पहले दीपक के साथ गाई जाती है, बुधवार को और गणेश चतुर्थी पर।',
    intro:
      'गणेश आरती वह छोटा भजन है जो पूजा से पहले गाया जाता है, क्योंकि गणेश का स्मरण पहले किया जाता है। इसमें पार्वती माता और महादेव पिता कहे गए हैं। बुधवार को और गणेश चतुर्थी पर दीपक के साथ गाई जाती है। गाते समय पहला छंद लौटता है। पृष्ठ पर हर छंद एक बार है। आरंभ:',
    faqs: [
      {
        q: 'गणेश आरती क्या है?',
        a: 'यह वह भजन है जो “जय गणेश, जय गणेश, जय गणेश देवा” से शुरू होता है। इसे दीपक के साथ गाया जाता है, अक्सर किसी भी अन्य पूजा से पहले। यह गणेश चालीसा के चालीस छंदों से अलग है।',
      },
      {
        q: 'इसे कब गाएँ?',
        a: 'पूजा से पहले, बुधवार को, और गणेश चतुर्थी पर। दीपक, और भोग में मोदक या लड्डू, सामान्य तैयारी है।',
      },
      {
        q: 'अंतिम छंद से पहले “सूर श्याम” का क्या अर्थ है?',
        a: '“सूर श्याम शरण आए” में कवि का नाम सूर है। छंद कहता है कि जो शरण आया है, उसकी सेवा सफल हो।',
      },
      {
        q: 'रोमन पंक्ति क्या अंग्रेज़ी अनुवाद है?',
        a: 'नहीं। यह उच्चारण दिखाती है। इस पृष्ठ पर 6 छंद हैं, और पाठ हर छंद के साथ चलता है।',
      },
    ],
  },
  'om-jai-jagdish-hare': {
    tagline: 'लगभग हर घरेलू पूजा में गाई जाने वाली आरती, विष्णु को जगदीश कहकर।',
    description:
      'ॐ जय जगदीश हरे पंडित श्रद्धाराम फिल्लौरी की 1870 की आरती है। घरेलू पूजा के अंत में गाई जाती है, जगत के स्वामी विष्णु को।',
    intro:
      'ॐ जय जगदीश हरे वह आरती है जो उत्तर भारत के अधिकतर घरों में पूजा के अंत में सुनाई देती है। पंडित श्रद्धाराम फिल्लौरी ने इसे 1870 में लिखा, विष्णु को जगदीश — जगत के स्वामी — कहकर। इसे अन्य देवताओं की पूजा में भी गाया जाता है, क्योंकि शब्द सबके स्वामी से एक क्षण में संकट हटाने को कहते हैं। गाते समय पहला पद हर कड़ी के बाद लौटता है। आरंभ:',
    faqs: [
      {
        q: 'ॐ जय जगदीश हरे किसने लिखी?',
        a: 'पंडित श्रद्धाराम फिल्लौरी ने 1870 में लिखी। वे लुधियाना के पास फिल्लौर के विद्वान थे। भजन विष्णु को संबोधित है।',
      },
      {
        q: 'इसे कब गाएँ?',
        a: 'घरेलू पूजा के अंत में, संध्या को, दीपक के साथ। एकादशी पर और लगभग हर उत्सव पर गाई जाती है, क्योंकि यह एक मंदिर-विधि से बंधी नहीं है।',
      },
      {
        q: 'क्या यह केवल विष्णु के लिए है?',
        a: 'शब्द जगदीश को पुकारते हैं, और उन्हें अंतर्यामी तथा गाने वाले की माता-पिता कहते हैं। मंदिर इसे विष्णु के लिए गाते हैं। कई घर किसी भी पूजा के अंत में यही पद गाते हैं।',
      },
      {
        q: 'रोमन पंक्ति क्या अंग्रेज़ी अनुवाद है?',
        a: 'नहीं। यह इसलिए है कि हिन्दी का उच्चारण हो सके। इस पृष्ठ पर 8 पद हैं, और पाठ हर पद के साथ चलता है।',
      },
    ],
  },
  'satyanarayan-aarti': {
    tagline: 'जय लक्ष्मी रमणा — सत्यनारायण कथा के अंत में गाई जाने वाली आरती।',
    description:
      'सत्यनारायण आरती “जय लक्ष्मी रमणा” से शुरू होती है। सत्यनारायण व्रत कथा के बाद, प्रसाद बाँटने से पहले, दीपक के साथ गाई जाती है।',
    intro:
      'यह वह आरती है जो सत्यनारायण कथा पूरी होने पर, प्रसाद बाँटने से पहले गाई जाती है। यह “जय लक्ष्मी रमणा” से शुरू होती है — लक्ष्मी के प्रिय की जय — और फिर कथा के लोगों को याद करती है: निर्धन ब्राह्मण, लकड़हारा, राजा चंद्रचूड़, संकल्प भूलने वाला वैश्य, और वन में भक्ति करने वाला राजा। कथा स्वयं लंबी गद्य-कथा है और इस पृष्ठ पर नहीं है। आरती वह भाग है जो गाया जाता है। आरंभ:',
    faqs: [
      {
        q: 'सत्यनारायण आरती क्या है?',
        a: 'यह वह भजन है जो “जय लक्ष्मी रमणा, स्वामी जय लक्ष्मी रमणा” से शुरू होता है। सत्यनारायण व्रत के अंत में, कथा के बाद और प्रसाद से पहले, दीपक के साथ गाया जाता है। यह कथा स्वयं नहीं है।',
      },
      {
        q: 'इसे कब गाएँ?',
        a: 'पूर्णिमा पर, गृह प्रवेश पर, या जब परिवार ने सत्यनारायण व्रत रखा हो। भजन में जो भोग कहा गया है वह सवाया प्रसाद है — केला, मेवा, धूप, दीप और तुलसी।',
      },
      {
        q: 'इसमें ब्राह्मण, लकड़हारे और राजा का नाम क्यों है?',
        a: 'कथा कहती है कि व्रत रखने पर इन पर कृपा हुई, और भूलने पर फल भुगतना पड़ा। आरती उस कथा का छोटा स्मरण है।',
      },
      {
        q: 'रोमन पंक्ति क्या अंग्रेज़ी अनुवाद है?',
        a: 'नहीं। यह बताती है कि हिन्दी का उच्चारण कैसे हो। इस पृष्ठ पर 9 छंद हैं, और पाठ हर छंद के साथ चलता है।',
      },
    ],
  },
};

export function getPaathCopy(slug: string, lang: string): PaathCopy | null {
  const table = lang === 'hi' ? hi : en;
  return table[slug] ?? en[slug] ?? null;
}
