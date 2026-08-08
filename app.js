/**
 * UnionTax Cashless Panchagarh Media Archive
 * Application logic and News data array
 */

const NEWS_DATA = [
  {
    id: 1,
    url: "https://www.channelionline.com/cashless-panchagarh-smart-bangladesh/",
    source: "Channel i",
    category: "article",
    date: "2023-01-10",
    featured: true,
    titleBn: "ক্যাশলেস পঞ্চগড়: স্মার্ট বাংলাদেশের পথে আরও এক ধাপ",
    titleEn: "Cashless Panchagarh: Another Step towards Smart Bangladesh",
    excerptBn: "পঞ্চগড়কে দেশের প্রথম ক্যাশলেস জেলা করার উদ্যোগের মাধ্যমে ইউনিয়ন ট্যাক্স ও অন্যান্য সেবা সরাসরি অনলাইনে পরিশোধ করার ব্যবস্থা করা হয়েছে।",
    excerptEn: "The initiative to make Panchagarh the country's first cashless district enables citizens to pay union taxes and other fees directly online."
  },
  {
    id: 2,
    url: "https://www.risingbd.com/amp/news/492020",
    source: "RisingBD",
    category: "article",
    date: "2023-01-09",
    featured: false,
    titleBn: "ক্যাশলেস পঞ্চগড়: ইউনিয়ন ট্যাক্স পরিশোধে দূর হলো ভোগান্তি",
    titleEn: "Cashless Panchagarh: Sufferings reduced in Union Tax payments",
    excerptBn: "ডিজিটাল ট্যাক্স সিস্টেম চালুর ফলে সাধারণ মানুষের ভোগান্তি কমেছে এবং সরাসরি ঘরে বসেই কর প্রদানের সুবিধা নিশ্চিত হয়েছে।",
    excerptEn: "The launch of the digital tax system has minimized public hassles and ensured the convenience of paying taxes from home."
  },
  {
    id: 3,
    url: "https://www.prothomalo.com/bangladesh/district/jxh8lxsxr1",
    source: "Prothom Alo",
    category: "article",
    date: "2023-01-08",
    featured: true,
    titleBn: "পঞ্চগড়ে ইউনিয়ন পরিষদের সেবা এখন ক্যাশলেস",
    titleEn: "Union Parishad services are now cashless in Panchagarh",
    excerptBn: "প্রথমবারের মতো পঞ্চগড়ের ৪৩টি ইউনিয়নে ডিজিটাল পেমেন্ট ও সেবা সহজীকরণের কার্যক্রম সফলভাবে বাস্তবায়ন করা হয়েছে।",
    excerptEn: "For the first time, digital payments and service simplification have been successfully implemented across 43 Union Parishads in Panchagarh."
  },
  {
    id: 4,
    url: "https://www.dainikrangpur.com/city/65446",
    source: "Dainik Rangpur",
    category: "article",
    date: "2023-01-09",
    featured: false,
    titleBn: "পঞ্চগড়ে প্রথম ক্যাশলেস জেলা হিসেবে সেবা উদ্বোধন",
    titleEn: "Service launched in Panchagarh as first cashless district",
    excerptBn: "জেলা প্রশাসনের উদ্যোগে রংপুর বিভাগের পঞ্চগড় জেলায় আনুষ্ঠানিকভাবে সম্পূর্ণ ক্যাশলেস স্থানীয় সরকার কর সেবা চালু হয়েছে।",
    excerptEn: "Under the initiative of the district administration, a fully cashless local government tax service has officially launched in Panchagarh."
  },
  {
    id: 5,
    url: "https://kalbela.com/ajkerpatrika/khobor/chury4vxa1",
    source: "Kalbela",
    category: "article",
    date: "2023-01-08",
    featured: false,
    titleBn: "ক্যাশলেস হলো পঞ্চগড়, ঘরে বসেই মিলছে সেবা",
    titleEn: "Panchagarh goes cashless, services accessible from home",
    excerptBn: "ইউনিয়ন ট্যাক্স আদায়ের জন্য তৈরি uniontax.gov.bd পোর্টালের মাধ্যমে নাগরিক সেবা আরো সহজ ও দুর্নীতিমুক্ত হয়েছে।",
    excerptEn: "Citizenship services have become easier and corruption-free via the uniontax.gov.bd portal created for Union Tax collection."
  },
  {
    id: 6,
    url: "https://www.bangladeshtoday.net/article/60104",
    source: "Bangladesh Today",
    category: "article",
    date: "2023-01-11",
    featured: false,
    titleBn: "পঞ্চগড়ে ইউনিয়ন ট্যাক্স ডিজিটালাইজেশন কার্যক্রমের প্রসার",
    titleEn: "Expansion of Union Tax digitalization in Panchagarh",
    excerptBn: "ডিজিটাল ট্যাক্স ব্যবস্থার মাধ্যমে স্থানীয় সরকার রাজস্ব আদায় ও স্বচ্ছতা নিশ্চিতের লক্ষ্যে কাজ করছে পঞ্চগড় জেলা প্রশাসন।",
    excerptEn: "Panchagarh District Administration is working to ensure local government revenue collection and transparency via the digital tax system."
  },
  {
    id: 7,
    url: "https://www.dailynayadiganta.com/last-page/723111/-%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE-%E0%A6%B9%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A7%87-%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B6%E0%A6%B2%E0%A7%87%E0%A6%B8-%E0%A6%AF%E0%A7%81%E0%A6%97%E0%A7%87-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AC%E0%A7%87%E0%A6%B6-%E0%A6%95%E0%A6%B0%E0%A6%B2-%E0%A6%AA%E0%A6%9E%E0%A7%8D%E0%A6%9A%E0%A6%97%E0%A7%9C",
    source: "Daily Naya Diganta",
    category: "article",
    date: "2023-01-08",
    featured: false,
    titleBn: "দেশের প্রথম জেলা হিসেবে ক্যাশলেস যুগে প্রবেশ করল পঞ্চগড়",
    titleEn: "Panchagarh enters cashless era as the country's first district",
    excerptBn: "ইউনিয়ন পরিষদের বিভিন্ন কর ও ট্যাক্স আদায়ে ডিজিটাল সেবা চালুর মধ্য দিয়ে এক অনন্য নজির স্থাপন করেছে পঞ্চগড় জেলা।",
    excerptEn: "Panchagarh district has set a unique milestone by launching digital services for various Union Parishad taxes and fees."
  },
  {
    id: 8,
    url: "https://www.youtube.com/watch?v=P3YIVPAoqDo",
    source: "Somoy TV",
    category: "video",
    youtubeId: "P3YIVPAoqDo",
    date: "2023-01-12",
    featured: true,
    titleBn: "ক্যাশলেস পঞ্চগড় নিয়ে সময় টিভির বিশেষ প্রতিবেদন",
    titleEn: "Somoy TV special report on Cashless Panchagarh",
    excerptBn: "পঞ্চগড়কে কিভাবে প্রথম নগদহীন ক্যাশলেস জেলা হিসেবে সাজানো হলো এবং মানুষের প্রতিক্রিয়া কী তা নিয়ে বিশেষ প্রতিবেদন।",
    excerptEn: "A special video broadcast detailing how Panchagarh became the first cashless district and the local citizens' reactions."
  },
  {
    id: 9,
    url: "https://www.youtube.com/watch?v=PMIOuT9hjkE",
    source: "DBC News",
    category: "video",
    youtubeId: "PMIOuT9hjkE",
    date: "2023-01-11",
    featured: false,
    titleBn: "দেশের প্রথম ক্যাশলেস জেলা পঞ্চগড়: ডিবিসি নিউজের সংবাদ",
    titleEn: "Panchagarh: Country's first cashless district - DBC News",
    excerptBn: "ডিজিটাল ট্যাক্স পেমেন্ট ব্যবস্থার মাধ্যমে পঞ্চগড় জেলার ৪৩টি ইউনিয়ন পরিষদে ক্যাশলেস সেবা চালুর সংবাদ ও ফুটেজ।",
    excerptEn: "News broadcast showing the launch of cashless services across 43 Union Parishads of Panchagarh with digital tax payments."
  },
  {
    id: 10,
    url: "https://www.dhakaprokash24.com/video/saradesh/1956",
    source: "Dhaka Prokash",
    category: "video",
    date: "2023-01-10",
    featured: false,
    titleBn: "পঞ্চগড় জেলায় ক্যাশলেস ট্যাক্স সিস্টেমের উদ্বোধন ও সুবিধা",
    titleEn: "Inauguration and benefits of Cashless Tax system in Panchagarh",
    excerptBn: "ঢাকা প্রকাশ নিউজ পোর্টালে ভিডিও প্রতিবেদনে পঞ্চগড়ের ক্যাশলেস ইউনিয়ন ট্যাক্স ব্যবস্থার কার্যক্রম তুলে ধরা হয়েছে।",
    excerptEn: "Dhaka Prokash video report showcasing the operational workflow of the cashless union tax system in Panchagarh."
  },
  {
    id: 11,
    url: "https://rangpur24.com/news/23835/",
    source: "Rangpur 24",
    category: "article",
    date: "2023-01-10",
    featured: false,
    titleBn: "পঞ্চগড়ে ক্যাশলেস ইউনিয়ন সেবা কার্যক্রমের দ্রুত অগ্রগতি",
    titleEn: "Rapid progress of Cashless Union service system in Panchagarh",
    excerptBn: "ইউনিয়ন কর আদায়ের নতুন ওয়েব সিস্টেম স্থানীয় বাসিন্দাদের মধ্যে ব্যাপক ইতিবাচক প্রভাব ফেলেছে।",
    excerptEn: "The new web portal for Union Tax collection has had a massive positive impact on local residents."
  },
  {
    id: 12,
    url: "https://www.youtube.com/watch?v=5wAlrkzIHe4",
    source: "Independent TV",
    category: "video",
    youtubeId: "5wAlrkzIHe4",
    date: "2023-01-13",
    featured: false,
    titleBn: "ইউনিয়ন ট্যাক্স ও সেবার অনলাইন অটোমেশন: ইনডিপেনডেন্ট টিভি",
    titleEn: "Online automation of Union Tax & services: Independent TV",
    excerptBn: "ইউনিয়ন পরিষদের বিভিন্ন সেবার ফি ঘরে বসে বিকাশের মাধ্যমে পরিশোধ করা নিয়ে ইনডিপেনডেন্ট টিভির ভিডিও প্রতিবেদন।",
    excerptEn: "Independent TV video report showing how Union Parishad service fees can be paid from home using bKash."
  },
  {
    id: 13,
    url: "https://www.dhakanews24.com/-4769623441",
    source: "Dhaka News 24",
    category: "article",
    date: "2023-01-11",
    featured: false,
    titleBn: "পঞ্চগড়ের সকল ইউপিতে ক্যাশলেস সেবা কার্যক্রম সফলভাবে চালূ",
    titleEn: "Cashless service system successfully launched in all UPs of Panchagarh",
    excerptBn: "উপজেলা পর্যায়ের ৪৩টি ইউনিয়নে ডিজিটাল পেমেন্ট প্রযুক্তির ব্যবহার ইউনিয়ন ট্যাক্স আদায়ের সক্ষমতা বহুগুণ বাড়িয়ে দিয়েছে।",
    excerptEn: "Deploying digital payment technologies across 43 unions has drastically increased Union Tax collection capacity."
  },
  {
    id: 14,
    url: "https://www.dailykaratoa.com/deshjure/article/46529/%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE-%E0%A6%B9%E0%A6%BF%E0%A6%B8%E0%A7%87%E0%A6%AC%E0%A7%87-%E0%A6%AA",
    source: "Daily Karatoa",
    category: "article",
    date: "2023-01-09",
    featured: false,
    titleBn: "দেশের প্রথম জেলা হিসেবে পঞ্চগড় এখন সম্পূর্ণ ক্যাশলেস",
    titleEn: "Panchagarh is now fully cashless as the nation's first district",
    excerptBn: "দৈনিক করতোয়ার প্রতিবেদনে পঞ্চগড় জেলার অনলাইন কর সংগ্রহ ও ক্যাশলেস ইউনিয়নের রূপান্তরকে প্রশংসা করা হয়েছে।",
    excerptEn: "Daily Karatoa's report praises Panchagarh district's online tax collection and cashless union transformation."
  },
  {
    id: 15,
    url: "https://thakurgaonsangbad.com/?p=30858",
    source: "Thakurgaon Sangbad",
    category: "article",
    date: "2023-01-10",
    featured: false,
    titleBn: "পঞ্চগড়ে দেশের প্রথম ডিজিটাল ইউনিয়ন ট্যাক্স আদায়ের অনন্য উদ্যোগ",
    titleEn: "Unique initiative for country's first digital Union Tax collection",
    excerptBn: "প্রতিবেশী জেলা হিসেবে ঠাকুরগাঁও সংবাদে পঞ্চগড়ের এই আধুনিক ইউনিয়ন সেবা পোর্টালের ভূয়সী প্রশংসা করা হয়েছে।",
    excerptEn: "As a neighboring district, Thakurgaon Sangbad highly praised this modern union service portal of Panchagarh."
  },
  {
    id: 16,
    url: "https://bhorer-dak.com/details.php?id=212015",
    source: "Bhorer Dak",
    category: "article",
    date: "2023-01-12",
    featured: false,
    titleBn: "ক্যাশলেস পঞ্চগড়: ডিজিটাল ইউনিয়ন সেবায় নতুন দিগন্ত",
    titleEn: "Cashless Panchagarh: A new horizon in digital union services",
    excerptBn: "অনলাইনে ইউনিয়ন ট্যাক্স পরিশোধ এবং প্রত্যয়নপত্র বিতরণের ফলে গ্রামীণ জনগণের জন্য সরকারি সেবা আধুনিক হয়েছে।",
    excerptEn: "Paying union tax online and receiving certificates has modernized public service delivery for rural communities."
  },
  {
    id: 17,
    url: "https://www.shangbadvumi.com/%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B6%E0%A6%B2%E0%A7%87%E0%A6%B8-%E0%A6%87%E0%A6%89%E0%A6%AA/",
    source: "Sangbad Bhumi",
    category: "article",
    date: "2023-01-07",
    featured: false,
    titleBn: "দেশের প্রথম ক্যাশলেস ইউনিয়ন পরিষদ তেঁতুলিয়ায়",
    titleEn: "Country's first cashless Union Parishad at Tetulia",
    excerptBn: "তেঁতুলিয়া উপজেলার তিরনইহাট ইউনিয়ন পরিষদের মাধ্যমে দেশের প্রথম ক্যাশলেস সেবা পাইলটিং প্রকল্পের সফল যাত্রা।",
    excerptEn: "The successful journey of the country's first cashless service piloting project in Tirnoihat Union of Tetulia Upazila."
  },
  {
    id: 18,
    url: "https://www.bhorerkagoj.com/print-edition/2023/01/08/%E0%A6%A4%E0%A7%87%E0%A6%81%E0%A6%A4%E0%A7%81%E0%A6%B2%E0%A6%BF%E0%A7%9F%E0%A6%be%E0%A7%9F-%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%95/",
    source: "Bhorer Kagoj",
    category: "article",
    date: "2023-01-08",
    featured: false,
    titleBn: "তেঁতুলিয়ায় দেশের প্রথম ক্যাশলেস ইউনিয়ন পরিষদ সেবা চালু",
    titleEn: "Country's first cashless Union Parishad service launched in Tetulia",
    excerptBn: "বিকাশ ও অন্যান্য মোবাইল ব্যাংকিং ব্যবহার করে ইউনিয়ন ট্যাক্স পরিশোধ করা ও তাৎক্ষণিক সনদপত্র পাওয়ার ব্যবস্থা করা হয়েছে।",
    excerptEn: "Paying union tax using bKash and other mobile banking methods has been set up with instant certificate distribution."
  },
  {
    id: 19,
    url: "https://kholabarta24.com/%E0%A6%A4%E0%A7%87%E0%A6%81%E0%A6%A4%E0%A7%81%E0%A6%B2%E0%A6%BF%E0%A7%9F%E0%A6%be%E0%A6%b0-%E0%A7%AD-%E0%A6%87%E0%A6%89%E0%A6%be%E0%A6%aa%e0%a6%bf%e0%a6%a4%e0%a7%87-%e0%a6%a1%e0%a6%bf%e0%a6%9c%e0%a6%bf/",
    source: "Khola Barta 24",
    category: "article",
    date: "2023-01-07",
    featured: false,
    titleBn: "তেঁতুলিয়ার ৭ ইউনিয়ন পরিষদে ডিজিটাল পেমেন্ট ও সেবা ব্যবস্থা",
    titleEn: "Digital payment and service systems in 7 Union Parishads of Tetulia",
    excerptBn: "উপজেলার ৭টি ইউনিয়নের ট্যাক্স আদায়ের পুরো কার্যক্রমকে uniontax.gov.bd পোর্টালের অধীনে নিয়ে আসা হয়েছে।",
    excerptEn: "The entire tax collection process of 7 unions of the upazila has been brought under the uniontax.gov.bd portal."
  },
  {
    id: 20,
    url: "https://ajkercrimenews.com/2023/01/06/%E0%A6%A4%E0%A7%87%E0%A6%81%E0%A6%A4%E0%A7%81%E0%A6%B2%E0%A6%BF%E0%A7%9F%E0%A6%be%E0%A7%9F-%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%A5%E0%A6%AE-%E0%A6%95/",
    source: "Ajker Crime News",
    category: "article",
    date: "2023-01-06",
    featured: false,
    titleBn: "তেঁতুলিয়ায় দেশের প্রথম ক্যাশলেস ইউনিয়ন সেবা চালুর ঘোষণা",
    titleEn: "Declaration of country's first cashless Union service in Tetulia",
    excerptBn: "স্থানীয় ইউপিতে ক্যাশলেস অটোমেশনের মাধ্যমে সেবামূল্য ডিজিটাল ট্রানজেকশনে করার পদক্ষেপের বিস্তারিত খবর।",
    excerptEn: "Detailed report on digitizing local UP service fees transactions via cashless automation."
  },
  {
    id: 21,
    url: "https://www.prothomdesh.com/2023/02/05/%e0%a6%aa%e0%a6%9e%e0%a7%8d%e0%a6%9a%e0%a6%97%e0%a6%a1%e0%a6%bc%e0%a7%87-%e0%a6%ae%e0%a6%be%e0%a6%97%e0%a7%81%e0%a6%a1%e0%a6%bc%e0%a6%be-%e0%a6%87%e0%a6%89%e0%a6%bf%e0%a6%9a%e0%a7%87/",
    source: "Prothom Desh",
    category: "article",
    date: "2023-02-05",
    featured: false,
    titleBn: "মাগুড়মারী ইউনিয়ন পরিষদে ক্যাশলেস ইউনিয়ন ট্যাক্স উদ্বোধন",
    titleEn: "Cashless Union Tax inaugurated at Magurmari Union Parishad",
    excerptBn: "মাগুড়মারী ইউপিতে অনলাইন ট্যাক্সেশন সেবা চালুর মধ্য দিয়ে পঞ্চগড়ের ক্যাশলেস আন্দোলন আরও গতিশীল হয়েছে।",
    excerptEn: "With the launch of online taxation services in Magurmari UP, Panchagarh's cashless movement gains further velocity."
  },
  {
    id: 22,
    url: "https://fb.watch/ixKpFIKaJ4/?mibextid=RUbZ1f",
    source: "Facebook Watch",
    category: "social",
    date: "2023-01-15",
    featured: false,
    titleBn: "ক্যাশলেস পঞ্চগড় ও ইউনিয়ন ট্যাক্স কার্যক্রমের ভিডিও ফুটেজ ১",
    titleEn: "Cashless Panchagarh and Union Tax activities video footage 1",
    excerptBn: "সোশ্যাল মিডিয়ায় প্রচারিত পঞ্চগড়ের প্রথম ক্যাশলেস ইউনিয়নে ট্যাক্স প্রদানের ব্যবহারিক নিয়ম নিয়ে ভিডিও ক্লিপ।",
    excerptEn: "A social media video showing the practical workflow of paying taxes in Panchagarh's first cashless union."
  },
  {
    id: 23,
    url: "https://fb.watch/iyZoiCiIW_/",
    source: "Facebook Watch",
    category: "social",
    date: "2023-01-18",
    featured: false,
    titleBn: "পঞ্চগড়ের সাধারণ মানুষের ডিজিটাল পেমেন্ট অভিজ্ঞতার ভিডিও ২",
    titleEn: "Common people's digital payment experience video 2 in Panchagarh",
    excerptBn: "অনলাইনে ইউনিয়ন ট্যাক্স ফি পরিশোধ করে সাধারণ বাসিন্দাদের হয়রানি মুক্ত হওয়ার অভিজ্ঞতা শেয়ারের ভিডিও।",
    excerptEn: "Video showcasing local residents sharing their experience of hassle-free tax payments online."
  },
  {
    id: 24,
    url: "https://fb.watch/iyZEof5uDR/",
    source: "Facebook Watch",
    category: "social",
    date: "2023-01-20",
    featured: false,
    titleBn: "তিরনইহাট ইউনিয়নের প্রথম ডিজিটাল সেবা প্রদানের বিশেষ ক্লিপ ৩",
    titleEn: "Special video clip 3 on first digital service delivery in Tirnoihat Union",
    excerptBn: "তিরনইহাট ইউনিয়নের ডিজিটাল বুথ থেকে নাগরিকদের অনলাইনে ট্যাক্স পরিশোধের বাস্তবচিত্র সম্বলিত ভিডিও।",
    excerptEn: "Video highlighting citizens paying taxes online at the digital kiosk in Tirnoihat Union."
  }
];

// App State
let currentLang = localStorage.getItem("uniontax_lang") || "bn";
let currentTheme = localStorage.getItem("uniontax_theme") || "dark";
let currentCategory = "all";
let searchQuery = "";

// DOM Elements
const newsGrid = document.getElementById("news-grid");
const featuredGrid = document.getElementById("featured-grid");
const searchInput = document.getElementById("search-input");
const filterTabs = document.querySelectorAll(".filter-tab");
const langToggle = document.getElementById("lang-toggle");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const totalArticlesCount = document.getElementById("total-articles");
const videoModal = document.getElementById("video-modal");
const modalFrame = document.getElementById("modal-frame");
const closeModal = document.getElementById("close-modal");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  renderStats();
  renderFeatured();
  renderArticles();
  setupEventListeners();
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeUI();
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem("uniontax_theme", currentTheme);
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeUI();
}

function updateThemeUI() {
  if (currentTheme === "light") {
    themeIcon.className = "fas fa-moon";
  } else {
    themeIcon.className = "fas fa-sun";
  }
}

// Language Management
function initLanguage() {
  updateLanguageUI();
}

function toggleLanguage() {
  currentLang = currentLang === "bn" ? "en" : "bn";
  localStorage.setItem("uniontax_lang", currentLang);
  updateLanguageUI();
  renderFeatured();
  renderArticles();
  renderStats();
}

function updateLanguageUI() {
  langToggle.textContent = currentLang === "bn" ? "English" : "বাংলা";
  
  // Update static UI translations
  const translatableElements = document.querySelectorAll("[data-translate]");
  translatableElements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      el.textContent = TRANSLATIONS[currentLang][key];
    }
  });

  // Update input placeholder
  if (searchInput) {
    searchInput.placeholder = currentLang === "bn" ? "সংবাদপত্র বা শিরোনাম দিয়ে খুঁজুন..." : "Search by press outlet or title...";
  }
}

// Stats & Counters
function renderStats() {
  const articles = NEWS_DATA.filter(item => item.category === "article").length;
  const videos = NEWS_DATA.filter(item => item.category === "video" || item.category === "social").length;

  document.getElementById("stat-count-ups").textContent = currentLang === "bn" ? "৪৩টি" : "43";
  document.getElementById("stat-count-districts").textContent = currentLang === "bn" ? "০১টি (প্রথম)" : "01 (First)";
  document.getElementById("stat-count-press").textContent = currentLang === "bn" ? `${toBanglaNum(articles)}টি` : `${articles}`;
  document.getElementById("stat-count-video").textContent = currentLang === "bn" ? `${toBanglaNum(videos)}টি` : `${videos}`;
}

// Helper to convert numbers to Bangla numerals
function toBanglaNum(num) {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num.toString().split("").map(digit => banglaDigits[digit] || digit).join("");
}

// Render Featured Cards (Top 3 articles/videos)
function renderFeatured() {
  if (!featuredGrid) return;
  featuredGrid.innerHTML = "";
  
  const featuredItems = NEWS_DATA.filter(item => item.featured);
  
  featuredItems.forEach(item => {
    const card = createCardElement(item, true);
    featuredGrid.appendChild(card);
  });
}

// Render Main Articles Grid with Filtering & Search
function renderArticles() {
  if (!newsGrid) return;
  newsGrid.innerHTML = "";

  const filtered = NEWS_DATA.filter(item => {
    // Category filter
    const matchesCategory = currentCategory === "all" || 
      (currentCategory === "article" && item.category === "article") ||
      (currentCategory === "video" && item.category === "video") ||
      (currentCategory === "social" && item.category === "social");

    // Search query filter
    const title = (currentLang === "bn" ? item.titleBn : item.titleEn).toLowerCase();
    const excerpt = (currentLang === "bn" ? item.excerptBn : item.excerptEn).toLowerCase();
    const source = item.source.toLowerCase();
    const query = searchQuery.toLowerCase();

    const matchesSearch = title.includes(query) || excerpt.includes(query) || source.includes(query);

    return matchesCategory && matchesSearch;
  });

  // Update total count indicator
  if (totalArticlesCount) {
    const countText = currentLang === "bn" 
      ? `মোট ${toBanglaNum(filtered.length)}টি সংবাদ খুঁজে পাওয়া গেছে`
      : `Found ${filtered.length} media reports`;
    totalArticlesCount.textContent = countText;
  }

  if (filtered.length === 0) {
    newsGrid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search-minus"></i>
        <h3>${currentLang === "bn" ? "কোনো সংবাদ পাওয়া যায়নি" : "No Media Reports Found"}</h3>
        <p>${currentLang === "bn" ? "অনুগ্রহ করে অন্য শব্দ দিয়ে আবার চেষ্টা করুন।" : "Please try searching for something else."}</p>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = createCardElement(item, false);
    newsGrid.appendChild(card);
  });
}

// Create Card DOM Element
function createCardElement(item, isFeatured = false) {
  const card = document.createElement("article");
  card.className = `news-card ${isFeatured ? "featured-card" : ""}`;
  
  // Custom badges
  let badgeHTML = "";
  let iconHTML = "";
  let actionBtnHTML = "";

  if (item.category === "article") {
    badgeHTML = `<span class="badge badge-article"><i class="far fa-newspaper"></i> ${currentLang === "bn" ? "সংবাদপত্র" : "Article"}</span>`;
    iconHTML = `<div class="card-icon"><i class="fas fa-newspaper"></i></div>`;
    actionBtnHTML = `
      <a href="${item.url}" target="_blank" class="card-btn" rel="noopener">
        <span>${currentLang === "bn" ? "বিস্তারিত পড়ুন" : "Read Full News"}</span>
        <i class="fas fa-external-link-alt"></i>
      </a>
    `;
  } else if (item.category === "video") {
    badgeHTML = `<span class="badge badge-video"><i class="fas fa-video"></i> ${currentLang === "bn" ? "ভিডিও" : "Video"}</span>`;
    iconHTML = `
      <div class="card-icon video-play" onclick="openVideoPlayer('${item.youtubeId}')">
        <i class="fas fa-play"></i>
      </div>
    `;
    actionBtnHTML = `
      <button class="card-btn btn-primary" onclick="openVideoPlayer('${item.youtubeId}')">
        <span>${currentLang === "bn" ? "ভিডিও দেখুন" : "Watch Video"}</span>
        <i class="fas fa-play-circle"></i>
      </button>
    `;
  } else {
    badgeHTML = `<span class="badge badge-social"><i class="fab fa-facebook"></i> ${currentLang === "bn" ? "ফেসবুক" : "Facebook"}</span>`;
    iconHTML = `<div class="card-icon social-play"><i class="fab fa-facebook-f"></i></div>`;
    actionBtnHTML = `
      <a href="${item.url}" target="_blank" class="card-btn facebook-btn" rel="noopener">
        <span>${currentLang === "bn" ? "ভিডিও দেখুন" : "Watch on Facebook"}</span>
        <i class="fab fa-facebook"></i>
      </a>
    `;
  }

  const title = currentLang === "bn" ? item.titleBn : item.titleEn;
  const excerpt = currentLang === "bn" ? item.excerptBn : item.excerptEn;
  const formattedDate = formatDate(item.date);

  // Background thumbnail representation
  let cardMediaHeader = "";
  if (item.category === "video" && item.youtubeId) {
    const thumbUrl = `https://img.youtube.com/vi/${item.youtubeId}/mqdefault.jpg`;
    cardMediaHeader = `
      <div class="card-media" style="background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url('${thumbUrl}')">
        ${badgeHTML}
        ${iconHTML}
      </div>
    `;
  } else if (item.category === "social") {
    cardMediaHeader = `
      <div class="card-media social-gradient">
        ${badgeHTML}
        ${iconHTML}
      </div>
    `;
  } else {
    // Generate a beautiful abstract background based on source name hash
    const hash = item.source.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const angle = hash % 360;
    const gradient = `linear-gradient(${angle}deg, var(--primary-light), var(--secondary-light))`;
    cardMediaHeader = `
      <div class="card-media" style="background: ${gradient}">
        ${badgeHTML}
        ${iconHTML}
      </div>
    `;
  }

  card.innerHTML = `
    ${cardMediaHeader}
    <div class="card-content">
      <div class="card-meta">
        <span class="card-source"><i class="fas fa-bookmark"></i> ${item.source}</span>
        <span class="card-date"><i class="far fa-calendar-alt"></i> ${formattedDate}</span>
      </div>
      <h3 class="card-title">${title}</h3>
      <p class="card-excerpt">${excerpt}</p>
      <div class="card-actions">
        ${actionBtnHTML}
      </div>
    </div>
  `;

  return card;
}

// Format Date depending on language
function formatDate(dateStr) {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  
  if (currentLang === "bn") {
    const monthsBn = [
      "জানুয়ারী", "ফেব্রুয়ারী", "মার্চ", "এপ্রিল", "মে", "জুন",
      "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
    ];
    const yearBn = toBanglaNum(date.getFullYear());
    const dayBn = toBanglaNum(date.getDate());
    const monthBn = monthsBn[date.getMonth()];
    return `${dayBn} ${monthBn}, ${yearBn}`;
  } else {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Theme Toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Language Toggle
  if (langToggle) {
    langToggle.addEventListener("click", toggleLanguage);
  }

  // Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderArticles();
    });
  }

  // Filter Tabs
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-filter");
      renderArticles();
    });
  });

  // Modal Closure
  if (closeModal) {
    closeModal.addEventListener("click", closeVideoPlayer);
  }
  
  // Close Modal on clicking backdrop
  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        closeVideoPlayer();
      }
    });
  }

  // Escape key to close modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && videoModal.classList.contains("active")) {
      closeVideoPlayer();
    }
  });
}

// Video Player Modal Management
function openVideoPlayer(youtubeId) {
  if (!videoModal || !modalFrame) return;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  modalFrame.src = embedUrl;
  videoModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeVideoPlayer() {
  if (!videoModal || !modalFrame) return;
  videoModal.classList.remove("active");
  modalFrame.src = "";
  document.body.style.overflow = ""; // Re-enable scroll
}

// Translations Database
const TRANSLATIONS = {
  bn: {
    heroTitle: "ইউনিয়ন ট্যাক্স - ক্যাশলেস পঞ্চগড়",
    heroSubtitle: "দেশের প্রথম ক্যাশলেস (নগদবিহীন) জেলা পঞ্চগড়ের ডিজিটাল ইউনিয়ন ট্যাক্স ও নাগরিক সেবা অটোমেশন সংক্রান্ত জাতীয় গণমাধ্যম ও প্রেস আর্কাইভ।",
    statUps: "ডিজিটাল ইউনিয়ন পরিষদ",
    statDistricts: "দেশের প্রথম ক্যাশলেস জেলা",
    statPress: "সংবাদপত্র ও অনলাইন রিপোর্ট",
    statVideos: "ভিডিও প্রতিবেদন ও সাক্ষাৎকার",
    featureTitle: "নির্বাচিত সংবাদ ও প্রতিবেদন সমূহ",
    allPressTitle: "সকল গণমাধ্যম সংবাদ ও ভিডিও লিঙ্ক",
    searchLabel: "খুঁজুন",
    filterAll: "সকল মিডিয়া",
    filterArticles: "সংবাদপত্র",
    filterVideos: "ভিডিও প্রতিবেদন",
    filterSocial: "সামাজিক মাধ্যম",
    contactTitle: "প্রয়োজনীয় লিঙ্ক সমূহ",
    aboutPortal: "পোর্টাল সম্পর্কে",
    aboutPortalText: "এই প্রেস ও মিডিয়া পোর্টালটি পঞ্চগড়কে দেশের প্রথম ক্যাশলেস জেলা হিসেবে গড়ে তোলার লক্ষ্যে uniontax.gov.bd ডিজিটাল সিস্টেমের প্রচার ও মিডিয়ার সাফল্যগাথা তুলে ধরার জন্য নির্মিত হয়েছে।",
    footerText: "© ২০২৬ ইউনিয়ন ট্যাক্স সেবা। সর্বস্বত্ব সংরক্ষিত।"
  },
  en: {
    heroTitle: "UnionTax - Cashless Panchagarh",
    heroSubtitle: "National media and press coverage archive of the digital Union Tax and civic service automation in Panchagarh, the country's first cashless district.",
    statUps: "Digital Union Parishads",
    statDistricts: "1st Cashless District",
    statPress: "Newspaper & Online Reports",
    statVideos: "Video Broadcasts & TV Reports",
    featureTitle: "Featured Press & Reports",
    allPressTitle: "All Media Reports & Video Archive",
    searchLabel: "Search",
    filterAll: "All Media",
    filterArticles: "Newspapers",
    filterVideos: "Video Reports",
    filterSocial: "Social Media",
    contactTitle: "Important Links",
    aboutPortal: "About the Portal",
    aboutPortalText: "This media archive portal showcases the promotional activities and success stories of the uniontax.gov.bd digital system, powering Panchagarh's transition into the first cashless district of Bangladesh.",
    footerText: "© 2026 UnionTax Service. All Rights Reserved."
  }
};
