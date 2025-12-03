// Global Scholarship Hub - Updated Scholarships Database
// Total Scholarships: 97+ (72 existing + 25 new)
// Last Updated: December 2025

const scholarshipsData = [
    // ============================================
    // EXISTING 72 SCHOLARSHIPS (IDs 1-72)
    // ============================================
    
    // USA Scholarships
    {
        id: 1,
        title: "Fulbright Foreign Student Program",
        country: "USA",
        flag: "🇺🇸",
        university: "Various US Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "Varies by Country (Feb-Oct 2026)",
        amount: "Full Coverage",
        description: "The prestigious Fulbright Program offers comprehensive support for international graduate students pursuing Master's or PhD degrees at American universities.",
        benefits: [
            "Full tuition fee coverage",
            "Monthly living stipend",
            "Round-trip airfare",
            "Health insurance",
            "Book allowance",
            "Academic support"
        ],
        eligibility: [
            "Bachelor's degree completed",
            "Strong academic record",
            "English proficiency (TOEFL/IELTS)",
            "Leadership potential",
            "Citizen of participating country"
        ],
        fields: ["All Fields"],
        applyLink: "https://foreign.fulbrightonline.org/",
        featured: true
    },
    {
        id: 2,
        title: "Knight-Hennessy Scholars at Stanford",
        country: "USA",
        flag: "🇺🇸",
        university: "Stanford University",
        level: ["Masters", "PhD", "MBA"],
        funding: "Fully Funded",
        deadline: "October 2025",
        amount: "Full Coverage",
        description: "Stanford's flagship graduate scholarship program supporting the next generation of global leaders across all disciplines.",
        benefits: [
            "Full tuition coverage",
            "Living stipend",
            "Academic expenses",
            "Leadership development",
            "Global community access"
        ],
        eligibility: [
            "Apply to any Stanford graduate program",
            "Demonstrated leadership",
            "Academic excellence",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://knight-hennessy.stanford.edu/",
        featured: true
    },
    {
        id: 3,
        title: "Yale University Scholarships",
        country: "USA",
        flag: "🇺🇸",
        university: "Yale University",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "January 2026",
        amount: "Up to $70,000/year",
        description: "Yale's comprehensive financial aid program ensuring no student is denied admission due to financial constraints.",
        benefits: [
            "Need-based aid up to $70,000/year",
            "Average scholarship over $50,000",
            "Tuition coverage",
            "Living expenses",
            "Books and supplies"
        ],
        eligibility: [
            "Strong academic performance",
            "Demonstrated financial need",
            "English proficiency",
            "SAT/ACT for undergraduates"
        ],
        fields: ["All Fields"],
        applyLink: "https://admissions.yale.edu/financial-aid",
        featured: true
    },
    {
        id: 4,
        title: "Hubert H. Humphrey Fellowship",
        country: "USA",
        flag: "🇺🇸",
        university: "Various US Universities",
        level: ["Professional Development"],
        funding: "Fully Funded",
        deadline: "Varies by Country",
        amount: "Full Coverage",
        description: "A non-degree fellowship for experienced professionals to enhance leadership skills through academic study and professional development.",
        benefits: [
            "Full tuition waiver",
            "Monthly stipend",
            "Round-trip airfare",
            "Health insurance",
            "Professional development"
        ],
        eligibility: [
            "Mid-career professional",
            "5+ years work experience",
            "Bachelor's degree",
            "Leadership experience",
            "English proficiency"
        ],
        fields: ["Public Policy", "Education", "Health", "Development"],
        applyLink: "https://www.humphreyfellowship.org/"
    },

    // UK Scholarships
    {
        id: 5,
        title: "Chevening Scholarships",
        country: "UK",
        flag: "🇬🇧",
        university: "UK Universities",
        level: ["Masters"],
        funding: "Fully Funded",
        deadline: "November 2025",
        amount: "Full Coverage",
        description: "UK government's flagship scholarship program for future leaders to pursue one-year Master's degrees.",
        benefits: [
            "Full tuition fees",
            "Monthly living allowance",
            "Economy return airfare",
            "Arrival allowance",
            "Visa fees covered",
            "Travel grant"
        ],
        eligibility: [
            "Bachelor's degree",
            "2 years work experience",
            "Leadership potential",
            "Return to home country for 2 years",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.chevening.org/",
        featured: true
    },
    {
        id: 6,
        title: "Commonwealth Scholarships",
        country: "UK",
        flag: "🇬🇧",
        university: "UK Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "December 2025",
        amount: "Full Coverage",
        description: "Supporting students from Commonwealth countries to pursue postgraduate studies in the UK.",
        benefits: [
            "Approved airfare",
            "Tuition fees",
            "Monthly stipend",
            "Thesis grant",
            "Warm clothing allowance"
        ],
        eligibility: [
            "Commonwealth citizen",
            "Bachelor's degree with high grades",
            "Unable to afford UK study",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://cscuk.fcdo.gov.uk/",
        featured: true
    },
    {
        id: 7,
        title: "Oxford University Scholarships",
        country: "UK",
        flag: "🇬🇧",
        university: "University of Oxford",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "January 2026",
        amount: "Full Coverage",
        description: "Oxford offers numerous fully-funded scholarships for outstanding international students.",
        benefits: [
            "Course fees",
            "Living costs (£18,622/year)",
            "One return airfare",
            "Research support"
        ],
        eligibility: [
            "Excellent academic record",
            "Offer from Oxford",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.ox.ac.uk/admissions/graduate/fees-and-funding",
        featured: true
    },

    // Canada Scholarships
    {
        id: 8,
        title: "Lester B. Pearson Scholarship",
        country: "Canada",
        flag: "🇨🇦",
        university: "University of Toronto",
        level: ["Undergraduate"],
        funding: "Fully Funded",
        deadline: "November 2025",
        amount: "Full Coverage (4 years)",
        description: "Recognizing international students who demonstrate exceptional academic achievement and creativity.",
        benefits: [
            "Tuition coverage (4 years)",
            "Books allowance",
            "Incidental fees",
            "Full residence support"
        ],
        eligibility: [
            "International student",
            "Starting first year",
            "Nominated by school",
            "Academic excellence",
            "Leadership qualities"
        ],
        fields: ["All Fields"],
        applyLink: "https://future.utoronto.ca/pearson/",
        featured: true
    },
    {
        id: 9,
        title: "Vanier Canada Graduate Scholarships",
        country: "Canada",
        flag: "🇨🇦",
        university: "Canadian Universities",
        level: ["PhD"],
        funding: "Fully Funded",
        deadline: "November 2025",
        amount: "$50,000/year (3 years)",
        description: "Canada's premier doctoral scholarship program attracting and retaining world-class doctoral students.",
        benefits: [
            "$50,000 per year for 3 years",
            "Research support",
            "International recognition"
        ],
        eligibility: [
            "Nominated by Canadian university",
            "Pursuing first doctoral degree",
            "Academic excellence",
            "Research potential",
            "Leadership skills"
        ],
        fields: ["Health Sciences", "Natural Sciences", "Engineering", "Social Sciences", "Humanities"],
        applyLink: "https://vanier.gc.ca/",
        featured: true
    },
    {
        id: 10,
        title: "Ontario Graduate Scholarship",
        country: "Canada",
        flag: "🇨🇦",
        university: "Ontario Universities",
        level: ["Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "Varies by University",
        amount: "$15,000/year",
        description: "Merit-based scholarship for graduate students at Ontario universities.",
        benefits: [
            "$15,000 annual award",
            "Renewable for PhD students",
            "Merit recognition"
        ],
        eligibility: [
            "Enrolled in Ontario university",
            "Full-time graduate student",
            "Minimum A- average",
            "Canadian/international student"
        ],
        fields: ["All Fields"],
        applyLink: "https://osap.gov.on.ca/OSAPPortal/en/A-ZListofAid/PRDR019245.html"
    },

    // Germany Scholarships
    {
        id: 11,
        title: "DAAD Scholarships",
        country: "Germany",
        flag: "🇩🇪",
        university: "German Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "October 2025",
        amount: "€934-€1,300/month",
        description: "Germany's premier scholarship organization supporting international students for postgraduate studies.",
        benefits: [
            "Monthly stipend (€934 for Masters, €1,300 for PhD)",
            "Health insurance",
            "Travel allowance",
            "Study/research allowance"
        ],
        eligibility: [
            "Bachelor's degree completed",
            "Strong academic record",
            "Work experience (for some programs)",
            "German/English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.daad.de/en/",
        featured: true
    },
    {
        id: 12,
        title: "Deutschlandstipendium",
        country: "Germany",
        flag: "🇩🇪",
        university: "German Universities",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "Varies by University",
        amount: "€300/month",
        description: "Germany's national scholarship program supporting high-achieving students.",
        benefits: [
            "€300 per month",
            "Awarded for at least 2 semesters",
            "Can be combined with other funding"
        ],
        eligibility: [
            "Enrolled at German university",
            "Outstanding academic achievements",
            "Social engagement",
            "International/domestic students"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.deutschlandstipendium.de/en"
    },
    {
        id: 13,
        title: "Erasmus+ Master's Scholarship",
        country: "Germany/Europe",
        flag: "🇪🇺",
        university: "Multiple European Universities",
        level: ["Masters"],
        funding: "Fully Funded",
        deadline: "Varies by Program",
        amount: "€1,000-€1,400/month",
        description: "Study at multiple universities across Europe with full funding support.",
        benefits: [
            "Tuition fees covered",
            "Monthly allowance €1,000-€1,400",
            "Travel and installation costs",
            "Insurance coverage"
        ],
        eligibility: [
            "Bachelor's degree",
            "English proficiency",
            "Apply to specific Erasmus Mundus program"
        ],
        fields: ["Various fields - check program websites"],
        applyLink: "https://ec.europa.eu/programmes/erasmus-plus/"
    },

    // Australia Scholarships
    {
        id: 14,
        title: "Australia Awards Scholarships",
        country: "Australia",
        flag: "🇦🇺",
        university: "Australian Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "April 2026",
        amount: "Full Coverage",
        description: "Australian government scholarships for students from developing countries.",
        benefits: [
            "Full tuition fees",
            "Return air travel",
            "Living allowance",
            "Health insurance",
            "Pre-course English training"
        ],
        eligibility: [
            "Citizen of eligible country",
            "Minimum 2 years work experience",
            "Academic merit",
            "Return to home country"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.dfat.gov.au/people-to-people/australia-awards",
        featured: true
    },
    {
        id: 15,
        title: "Melbourne Research Scholarships",
        country: "Australia",
        flag: "🇦🇺",
        university: "University of Melbourne",
        level: ["Masters (Research)", "PhD"],
        funding: "Fully Funded",
        deadline: "October 2025 / May 2026",
        amount: "$37,000/year + tuition",
        description: "Approximately 600 scholarships for outstanding research students.",
        benefits: [
            "Living allowance $37,000/year",
            "Full fee offset",
            "Overseas Student Health Cover",
            "Relocation grant up to $2,000",
            "Sick and parental leave"
        ],
        eligibility: [
            "Research Masters or PhD",
            "Academic excellence",
            "Research proposal",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://study.unimelb.edu.au/",
        featured: true
    },
    {
        id: 16,
        title: "Research Training Program (RTP)",
        country: "Australia",
        flag: "🇦🇺",
        university: "Australian Universities",
        level: ["Masters (Research)", "PhD"],
        funding: "Fully Funded",
        deadline: "Varies by University",
        amount: "Tuition + $35,000/year",
        description: "Australian government scholarships for domestic and international research students.",
        benefits: [
            "Full tuition fee offset",
            "Living allowance stipend",
            "Overseas student health cover",
            "Thesis allowance"
        ],
        eligibility: [
            "Research degree",
            "Academic merit",
            "Research capability"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.education.gov.au/research-training-program"
    },
    {
        id: 17,
        title: "Destination Australia Scholarship",
        country: "Australia",
        flag: "🇦🇺",
        university: "Regional Australian Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "Varies by Institution",
        amount: "$15,000/year",
        description: "Encouraging domestic and international students to study in regional Australia.",
        benefits: [
            "$15,000 per year",
            "Study in regional areas",
            "Work opportunities"
        ],
        eligibility: [
            "Enrolled in eligible regional institution",
            "Domestic or international student",
            "Study in regional Australia"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.education.gov.au/destination-australia"
    },

    // Netherlands Scholarships
    {
        id: 18,
        title: "Holland Scholarship",
        country: "Netherlands",
        flag: "🇳🇱",
        university: "Dutch Universities",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "May 2026",
        amount: "€5,000",
        description: "Dutch government scholarship for international students outside EU/EEA.",
        benefits: [
            "€5,000 one-time payment",
            "Covers partial tuition/living costs"
        ],
        eligibility: [
            "Non-EU/EEA nationality",
            "Apply to Dutch research university",
            "No Dutch degree",
            "Meet English requirements"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.studyinholland.nl/finances/holland-scholarship"
    },
    {
        id: 19,
        title: "Orange Knowledge Programme",
        country: "Netherlands",
        flag: "🇳🇱",
        university: "Dutch Universities",
        level: ["Masters", "PhD", "Short Courses"],
        funding: "Fully Funded",
        deadline: "Varies by Program",
        amount: "Full Coverage",
        description: "Supporting professionals from selected countries to develop their knowledge and skills.",
        benefits: [
            "Tuition fees",
            "Monthly allowance",
            "Travel costs",
            "Insurance",
            "Visa costs"
        ],
        eligibility: [
            "Citizen of eligible country",
            "2+ years work experience",
            "Employer support",
            "Return to home country"
        ],
        fields: ["Development-related fields"],
        applyLink: "https://www.studyinholland.nl/finances/orange-knowledge-programme"
    },

    // Switzerland Scholarships
    {
        id: 20,
        title: "Swiss Government Excellence Scholarships",
        country: "Switzerland",
        flag: "🇨🇭",
        university: "Swiss Universities",
        level: ["PhD", "Postdoctoral"],
        funding: "Fully Funded",
        deadline: "Country-specific deadlines",
        amount: "CHF 1,920/month",
        description: "Swiss Confederation scholarships for research studies and artistic programs.",
        benefits: [
            "Monthly payment CHF 1,920",
            "Tuition fee exemption",
            "Health insurance",
            "Housing allowance",
            "Return airfare"
        ],
        eligibility: [
            "Master's degree completed",
            "Born after December 31, 1989",
            "Research proposal",
            "Host professor confirmation"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
        featured: true
    },

    // China Scholarships
    {
        id: 21,
        title: "Chinese Government Scholarship (CSC)",
        country: "China",
        flag: "🇨🇳",
        university: "Chinese Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "March 2026",
        amount: "Full Coverage",
        description: "China's flagship scholarship program for international students at over 280 universities.",
        benefits: [
            "Tuition waiver",
            "Accommodation",
            "Monthly stipend (CNY 2,500-3,500)",
            "Medical insurance",
            "Registration fees covered"
        ],
        eligibility: [
            "Non-Chinese citizen",
            "Good health",
            "Academic excellence",
            "Age requirements vary by level"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.campuschina.org/",
        featured: true
    },
    {
        id: 22,
        title: "Tianjin Government Scholarships",
        country: "China",
        flag: "🇨🇳",
        university: "Tianjin Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "June 2026",
        amount: "CNY 2,000/month",
        description: "Local government scholarships for students studying in Tianjin.",
        benefits: [
            "Monthly allowance CNY 2,000",
            "Partial tuition waiver"
        ],
        eligibility: [
            "International student",
            "Apply to Tianjin university",
            "Academic merit"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.studyinchina.com.my/web/page/tianjin-government-scholarship/"
    },

    // Japan Scholarships
    {
        id: 23,
        title: "MEXT Scholarship (Japanese Government)",
        country: "Japan",
        flag: "🇯🇵",
        university: "Japanese Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "Country-specific (Apr-Jun 2026)",
        amount: "¥117,000-148,000/month",
        description: "Japan's Ministry of Education scholarship for international students.",
        benefits: [
            "Tuition fees waived",
            "Monthly allowance ¥117,000-148,000",
            "Round-trip airfare",
            "No entrance exam fees",
            "Japanese language training"
        ],
        eligibility: [
            "Academic excellence",
            "Good health",
            "Age limits vary by category",
            "Willingness to learn Japanese"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.studyinjapan.go.jp/en/planning/scholarship/",
        featured: true
    },

    // South Korea Scholarships
    {
        id: 24,
        title: "KAIST Scholarship",
        country: "South Korea",
        flag: "🇰🇷",
        university: "KAIST",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "May 2026",
        amount: "Full Coverage",
        description: "Korea Advanced Institute of Science and Technology fully-funded scholarships.",
        benefits: [
            "Full tuition waiver",
            "Monthly stipend up to 800,000 KRW",
            "Round-trip economy airfare",
            "Medical insurance",
            "Korean language training fee"
        ],
        eligibility: [
            "International student",
            "Bachelor's degree",
            "English proficiency",
            "STEM fields"
        ],
        fields: ["Engineering", "Science", "Technology"],
        applyLink: "https://admission.kaist.ac.kr/"
    },

    // Singapore Scholarships
    {
        id: 25,
        title: "NUS Graduate Scholarships",
        country: "Singapore",
        flag: "🇸🇬",
        university: "National University of Singapore",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "November 2025",
        amount: "S$2,000-3,500/month",
        description: "Prestigious scholarships at Asia's top university.",
        benefits: [
            "Full tuition fees",
            "Monthly stipend S$2,000-3,500",
            "Conference allowance",
            "Accommodation support"
        ],
        eligibility: [
            "Excellent academic record",
            "Research potential",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.nus.edu.sg/admissions/graduate-studies/scholarships"
    },

    // Turkey Scholarships
    {
        id: 26,
        title: "Türkiye Bursları Scholarship",
        country: "Turkey",
        flag: "🇹🇷",
        university: "Turkish Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "February 2026",
        amount: "Full Coverage",
        description: "Turkish government's comprehensive scholarship program for international students.",
        benefits: [
            "Full tuition waiver",
            "Monthly stipend (1,600-3,000 TL)",
            "Accommodation",
            "Health insurance",
            "Round-trip airfare",
            "Turkish language course (1 year)"
        ],
        eligibility: [
            "International student",
            "Age limits: <21 (UG), <30 (Masters), <35 (PhD)",
            "Academic excellence",
            "GPA requirements"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.turkiyeburslari.gov.tr/",
        featured: true
    },

    // Belgium Scholarships
    {
        id: 27,
        title: "Master Mind Scholarships (Belgium)",
        country: "Belgium",
        flag: "🇧🇪",
        university: "Flemish Universities",
        level: ["Masters"],
        funding: "Fully Funded",
        deadline: "March 2026",
        amount: "€8,200/year + tuition waiver",
        description: "Flemish government scholarships for outstanding international students.",
        benefits: [
            "€8,200 per academic year",
            "Tuition fee waiver",
            "Max 2 years"
        ],
        eligibility: [
            "Non-EEA nationality",
            "Master's program in Flanders",
            "Academic excellence"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.studyinflanders.be/en/scholarship-programmes/master-mind-scholarships"
    },

    // Denmark Scholarships
    {
        id: 28,
        title: "Danish Government Scholarships",
        country: "Denmark",
        flag: "🇩🇰",
        university: "Danish Universities",
        level: ["Masters", "PhD", "Postdoc"],
        funding: "Fully Funded",
        deadline: "Country-specific",
        amount: "DKK 6,500-8,000/month",
        description: "Supporting highly qualified international students and researchers.",
        benefits: [
            "Tuition fee waiver",
            "Monthly grant DKK 6,500-8,000",
            "Travel grant"
        ],
        eligibility: [
            "Non-EU/EEA citizen",
            "Admitted to Danish institution",
            "Academic excellence"
        ],
        fields: ["All Fields"],
        applyLink: "https://studyindenmark.dk/"
    },

    // Italy Scholarships
    {
        id: 29,
        title: "Italian Government Scholarships",
        country: "Italy",
        flag: "🇮🇹",
        university: "Italian Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "April 2026",
        amount: "€900/month",
        description: "Italian Ministry of Foreign Affairs scholarships for international students.",
        benefits: [
            "Monthly allowance €900",
            "Tuition fee waiver",
            "Medical insurance",
            "Italian language course"
        ],
        eligibility: [
            "Foreign nationality",
            "Academic merit",
            "Italian/English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.esteri.it/en/opportunita/borse-di-studio/"
    },

    // Thailand Scholarships
    {
        id: 30,
        title: "Chulalongkorn University Scholarships",
        country: "Thailand",
        flag: "🇹🇭",
        university: "Chulalongkorn University",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "May/October 2026",
        amount: "16,000 Baht/month",
        description: "Thailand's oldest and most prestigious university offers full scholarships.",
        benefits: [
            "100% tuition waiver",
            "Monthly stipend 16,000 Baht",
            "Accommodation support"
        ],
        eligibility: [
            "International student",
            "Bachelor's/Master's degree",
            "GPA 3.0+",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.chula.ac.th/"
    },

    // Middle East Scholarships
    {
        id: 31,
        title: "King Abdullah University (KAUST) Fellowship",
        country: "Saudi Arabia",
        flag: "🇸🇦",
        university: "KAUST",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "January 2026",
        amount: "Full Coverage",
        description: "One of the world's most generous scholarship programs for STEM students.",
        benefits: [
            "Full tuition coverage",
            "Monthly living allowance ($20,000-30,000/year)",
            "Housing",
            "Medical/dental coverage",
            "Relocation support"
        ],
        eligibility: [
            "Bachelor's degree in STEM",
            "Strong academic record",
            "English proficiency (no TOEFL/IELTS required)",
            "Research interest"
        ],
        fields: ["Science", "Engineering", "Technology"],
        applyLink: "https://admissions.kaust.edu.sa/",
        featured: true
    },

    // Hungary Scholarships
    {
        id: 32,
        title: "Stipendium Hungaricum",
        country: "Hungary",
        flag: "🇭🇺",
        university: "Hungarian Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "January 2026",
        amount: "Full Coverage",
        description: "Hungarian government scholarships for international students worldwide.",
        benefits: [
            "Full tuition waiver",
            "Monthly stipend (40,000-140,000 HUF)",
            "Accommodation/housing allowance",
            "Medical insurance"
        ],
        eligibility: [
            "Non-EU or EU citizen",
            "Academic excellence",
            "Age requirements vary",
            "Apply through sending partner"
        ],
        fields: ["All Fields"],
        applyLink: "https://stipendiumhungaricum.hu/"
    },

    // Sweden Scholarships
    {
        id: 33,
        title: "Swedish Institute Scholarships (SISS)",
        country: "Sweden",
        flag: "🇸🇪",
        university: "Swedish Universities",
        level: ["Masters"],
        funding: "Fully Funded",
        deadline: "February 2026",
        amount: "Full Coverage",
        description: "Swedish government scholarships for global professionals.",
        benefits: [
            "Full tuition fees",
            "Living expenses (SEK 12,000/month)",
            "Travel grant",
            "Insurance"
        ],
        eligibility: [
            "Non-EU/EEA citizen",
            "Work experience",
            "Leadership potential",
            "Demonstrated interest in Sweden"
        ],
        fields: ["All Fields"],
        applyLink: "https://si.se/en/apply/scholarships/"
    },
    {
        id: 34,
        title: "Lund University Global Scholarship",
        country: "Sweden",
        flag: "🇸🇪",
        university: "Lund University",
        level: ["Masters"],
        funding: "Fully/Partially Funded",
        deadline: "January 2026",
        amount: "25-100% tuition coverage",
        description: "Merit-based scholarships for outstanding international students.",
        benefits: [
            "25%, 50%, 75%, or 100% tuition reduction",
            "Recognition of academic excellence"
        ],
        eligibility: [
            "Non-EU/EEA citizen",
            "Admitted to Lund University",
            "Academic excellence",
            "Pay application fee"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.lunduniversity.lu.se/admissions/scholarships-and-funding"
    },

    // Spain Scholarships
    {
        id: 35,
        title: "La Caixa Foundation Scholarships",
        country: "Spain",
        flag: "🇪🇸",
        university: "Spanish Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "February 2026",
        amount: "€21,900/year",
        description: "Supporting talented international students for postgraduate studies in Spain.",
        benefits: [
            "€21,900 annual stipend",
            "Tuition fees covered",
            "Travel expenses",
            "Health insurance"
        ],
        eligibility: [
            "Non-Spanish/Portuguese citizen",
            "Bachelor's degree",
            "Academic excellence",
            "English/Spanish proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://fundacionlacaixa.org/en/"
    },

    // Norway Scholarships
    {
        id: 36,
        title: "Norwegian State Educational Loan Fund",
        country: "Norway",
        flag: "🇳🇴",
        university: "Norwegian Universities",
        level: ["Masters"],
        funding: "Partially Funded",
        deadline: "Varies",
        amount: "Living expenses loan",
        description: "Educational loans for international students (can be partially converted to grants).",
        benefits: [
            "Living expenses support",
            "Up to 40% can be converted to grant",
            "Low interest rates"
        ],
        eligibility: [
            "Admitted to Norwegian institution",
            "Progress in studies",
            "Limited income"
        ],
        fields: ["All Fields"],
        applyLink: "https://lanekassen.no/en-US/"
    },

    // Finland Scholarships
    {
        id: 37,
        title: "Finnish Government Scholarship Pool",
        country: "Finland",
        flag: "🇫🇮",
        university: "Finnish Universities",
        level: ["PhD", "Postdoctoral"],
        funding: "Fully Funded",
        deadline: "September 2025",
        amount: "€1,500-2,000/month",
        description: "Supporting doctoral-level research in Finland.",
        benefits: [
            "Monthly grant €1,500-2,000",
            "3-9 months duration",
            "Research support"
        ],
        eligibility: [
            "Doctoral student/researcher",
            "Host institution in Finland",
            "Research proposal"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.oph.fi/en/finnish-government-scholarship-pool"
    },

    // Ireland Scholarships
    {
        id: 38,
        title: "Government of Ireland Postgraduate Scholarship",
        country: "Ireland",
        flag: "🇮🇪",
        university: "Irish Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "November 2025",
        amount: "€18,000-24,000/year",
        description: "Irish Research Council scholarships for high-achieving students.",
        benefits: [
            "€18,000/year (1 year Masters)",
            "€24,000/year (PhD, up to 4 years)",
            "Research expenses €3,250",
            "Contribution to fees"
        ],
        eligibility: [
            "EU or non-EU citizen",
            "Research proposal",
            "Academic excellence",
            "Not previously held similar award"
        ],
        fields: ["All Fields"],
        applyLink: "https://research.ie/"
    },

    // Poland Scholarships
    {
        id: 39,
        title: "Polish National Agency Scholarships",
        country: "Poland",
        flag: "🇵🇱",
        university: "Polish Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "November 2025",
        amount: "PLN 1,500/month",
        description: "Supporting international students in Polish higher education institutions.",
        benefits: [
            "Monthly stipend PLN 1,500",
            "Accommodation support (varies)"
        ],
        eligibility: [
            "International student",
            "Admitted to Polish university",
            "Academic merit"
        ],
        fields: ["All Fields"],
        applyLink: "https://nawa.gov.pl/en/"
    },

    // Czech Republic Scholarships
    {
        id: 40,
        title: "Czech Government Scholarships",
        country: "Czech Republic",
        flag: "🇨🇿",
        university: "Czech Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "February 2026",
        amount: "CZK 14,000/month",
        description: "Supporting students from developing countries.",
        benefits: [
            "Monthly stipend CZK 14,000",
            "Accommodation allowance",
            "Czech language preparatory course"
        ],
        eligibility: [
            "Citizen of eligible country",
            "Age limits apply",
            "Academic requirements"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.msmt.cz/international-cooperation"
    },

    // Austria Scholarships
    {
        id: 41,
        title: "Ernst Mach Grant",
        country: "Austria",
        flag: "🇦🇹",
        university: "Austrian Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "September 2025",
        amount: "€1,150/month",
        description: "OeAD scholarships for international students in Austria.",
        benefits: [
            "Monthly grant €1,150",
            "1-9 months duration",
            "Travel allowance",
            "Accident and health insurance"
        ],
        eligibility: [
            "Enrolled at home institution",
            "Apply via university",
            "Undergraduate to postdoc level"
        ],
        fields: ["All Fields"],
        applyLink: "https://oead.at/"
    },

    // New Zealand Scholarships
    {
        id: 42,
        title: "New Zealand Excellence Awards",
        country: "New Zealand",
        flag: "🇳🇿",
        university: "NZ Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "December 2025",
        amount: "Full Coverage",
        description: "New Zealand government scholarships for exceptional international students.",
        benefits: [
            "Full tuition fees",
            "Living allowance (NZD 342/week)",
            "Return airfare",
            "Insurance",
            "Establishment allowance"
        ],
        eligibility: [
            "Academic excellence",
            "Citizen of eligible country",
            "Apply to NZ institution"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.enz.govt.nz/scholarships"
    },

    // Malaysia Scholarships
    {
        id: 43,
        title: "Malaysia International Scholarship (MIS)",
        country: "Malaysia",
        flag: "🇲🇾",
        university: "Malaysian Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "Varies",
        amount: "Full Coverage",
        description: "Malaysian government scholarships for international postgraduate students.",
        benefits: [
            "Full tuition fees",
            "Monthly allowance (RM 1,500-2,400)",
            "Annual book allowance",
            "Thesis allowance",
            "Medical insurance"
        ],
        eligibility: [
            "International student",
            "CGPA 3.5+ (Masters), 3.7+ (PhD)",
            "Age below 40 (Masters), 45 (PhD)",
            "Research proposal"
        ],
        fields: ["All Fields"],
        applyLink: "https://biasiswa.moe.gov.my/"
    },

    // South Africa Scholarships
    {
        id: 44,
        title: "Mastercard Foundation Scholars Program",
        country: "South Africa/Africa",
        flag: "🇿🇦",
        university: "Various African Universities",
        level: ["Undergraduate", "Masters"],
        funding: "Fully Funded",
        deadline: "Varies by institution",
        amount: "Full Coverage",
        description: "Supporting young Africans from economically disadvantaged backgrounds.",
        benefits: [
            "Full tuition",
            "Accommodation",
            "Books and supplies",
            "Living expenses",
            "Travel",
            "Leadership development"
        ],
        eligibility: [
            "African citizen",
            "Economically disadvantaged",
            "Academic potential",
            "Leadership qualities"
        ],
        fields: ["All Fields"],
        applyLink: "https://mastercardfdn.org/all/scholars/"
    },

    // Brazil Scholarships
    {
        id: 45,
        title: "Brazilian Government Scholarships (PEC-G/PEC-PG)",
        country: "Brazil",
        flag: "🇧🇷",
        university: "Brazilian Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "Varies",
        amount: "Tuition waiver",
        description: "Brazilian government program for students from developing countries.",
        benefits: [
            "Tuition fee waiver",
            "Portuguese language course",
            "Possibility of CAPES scholarship for postgrads"
        ],
        eligibility: [
            "Citizen of participating country",
            "Age 18-23 (PEC-G) or under 55 (PEC-PG)",
            "Portuguese/Spanish proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "http://www.dce.mre.gov.br/"
    },

    // Mexico Scholarships
    {
        id: 46,
        title: "Mexican Government Scholarships",
        country: "Mexico",
        flag: "🇲🇽",
        university: "Mexican Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "March 2026",
        amount: "Monthly stipend",
        description: "AMEXCID scholarships for international students in Mexico.",
        benefits: [
            "Monthly maintenance allowance",
            "Tuition fee support",
            "Medical insurance",
            "Registration fee"
        ],
        eligibility: [
            "Foreign national",
            "Academic merit",
            "Spanish proficiency (or willingness to learn)",
            "Age requirements vary"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.gob.mx/amexcid/"
    },

    // Colombia Scholarships
    {
        id: 47,
        title: "Colombian Government Scholarships",
        country: "Colombia",
        flag: "🇨🇴",
        university: "Colombian Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "Varies",
        amount: "Full Coverage",
        description: "Supporting international students to study in Colombia.",
        benefits: [
            "Full tuition waiver",
            "Monthly living allowance",
            "Health insurance",
            "Spanish language course"
        ],
        eligibility: [
            "International student",
            "Academic excellence",
            "Research proposal",
            "Spanish proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.icetex.gov.co/"
    },

    // Philippines Scholarships
    {
        id: 48,
        title: "Philippine Government Scholarships",
        country: "Philippines",
        flag: "🇵🇭",
        university: "Philippine Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "February 2026",
        amount: "Full Coverage",
        description: "CHED scholarships for ASEAN and other international students.",
        benefits: [
            "Full tuition fee",
            "Monthly living allowance",
            "Book allowance",
            "Thesis/dissertation allowance",
            "Medical insurance"
        ],
        eligibility: [
            "ASEAN member or bilateral agreement country",
            "Academic excellence",
            "English proficiency",
            "Good health"
        ],
        fields: ["All Fields"],
        applyLink: "https://ched.gov.ph/"
    },

    // India Scholarships
    {
        id: 49,
        title: "ICCR Scholarships",
        country: "India",
        flag: "🇮🇳",
        university: "Indian Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "September-December 2025",
        amount: "Full Coverage",
        description: "Indian Council for Cultural Relations scholarships for international students.",
        benefits: [
            "Full tuition waiver",
            "Monthly maintenance allowance",
            "Annual contingency grant",
            "House rent allowance/hostel accommodation"
        ],
        eligibility: [
            "Foreign national",
            "Age limits vary by program",
            "Academic merit",
            "Health certificate"
        ],
        fields: ["All Fields"],
        applyLink: "https://a2ascholarships.iccr.gov.in/"
    },

    // Indonesia Scholarships
    {
        id: 50,
        title: "KNB Scholarship (Indonesia)",
        country: "Indonesia",
        flag: "🇮🇩",
        university: "Indonesian Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "March 2026",
        amount: "Full Coverage",
        description: "Indonesian government scholarships for developing country nationals.",
        benefits: [
            "Settlement allowance",
            "Living allowance",
            "Book allowance",
            "Research allowance",
            "Health insurance",
            "Round-trip airfare"
        ],
        eligibility: [
            "Developing country citizen",
            "Age under 35 (Masters), 40 (PhD)",
            "Not studying in Indonesia currently",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.knb.kemdikbud.go.id/"
    },

    // Additional Scholarships from Previous Updates (IDs 51-72)
    {
        id: 51,
        title: "Jimmy Rane Foundation Scholarship",
        country: "USA",
        flag: "🇺🇸",
        university: "Various US Universities",
        level: ["Undergraduate"],
        funding: "Partially Funded",
        deadline: "February 2026",
        amount: "$4,000-$16,000",
        description: "Supporting students who have worked while in high school.",
        benefits: [
            "Merit-based awards",
            "Recognition of work ethic",
            "Renewable"
        ],
        eligibility: [
            "High school senior",
            "Worked while in school",
            "US citizen",
            "Financial need"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.jimmyranefoundation.org/"
    },
    {
        id: 52,
        title: "Fairleigh Dickinson University Scholarships",
        country: "USA",
        flag: "🇺🇸",
        university: "Fairleigh Dickinson University",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "Rolling",
        amount: "$22,000/year",
        description: "Merit-based scholarships for international students.",
        benefits: [
            "Up to $22,000 annually",
            "Automatic consideration",
            "Renewable"
        ],
        eligibility: [
            "International student",
            "Academic merit",
            "Application for admission"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.fdu.edu/"
    },
    {
        id: 53,
        title: "Imperial College London PhD Scholarships",
        country: "UK",
        flag: "🇬🇧",
        university: "Imperial College London",
        level: ["PhD"],
        funding: "Fully Funded",
        deadline: "January 2026",
        amount: "£22,000+/year",
        description: "President's PhD Scholarships for exceptional research students.",
        benefits: [
            "Full tuition fees",
            "Annual stipend £22,000+",
            "Research support",
            "Conference travel"
        ],
        eligibility: [
            "Admitted to Imperial PhD program",
            "Outstanding academic record",
            "Research proposal"
        ],
        fields: ["Science", "Engineering", "Medicine", "Business"],
        applyLink: "https://www.imperial.ac.uk/study/pg/fees-and-funding/scholarships/"
    },
    {
        id: 54,
        title: "University of Bristol Think Big Scholarships",
        country: "UK",
        flag: "🇬🇧",
        university: "University of Bristol",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "February 2026",
        amount: "£6,500-£26,000",
        description: "Supporting international students from underrepresented countries.",
        benefits: [
            "£6,500, £13,000, or £26,000 per year",
            "Recognition of excellence"
        ],
        eligibility: [
            "International fee payer",
            "Academic excellence",
            "Apply for full-time program"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.bristol.ac.uk/fees-funding/"
    },
    {
        id: 55,
        title: "University of Glasgow International Leadership Scholarships",
        country: "UK",
        flag: "🇬🇧",
        university: "University of Glasgow",
        level: ["Masters"],
        funding: "Partially Funded",
        deadline: "March 2026",
        amount: "£10,000",
        description: "Recognizing international students with leadership potential.",
        benefits: [
            "£10,000 tuition fee reduction",
            "Leadership opportunities"
        ],
        eligibility: [
            "International student",
            "Leadership experience",
            "Academic merit"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.gla.ac.uk/scholarships/"
    },
    {
        id: 56,
        title: "University of Alberta International Scholarships",
        country: "Canada",
        flag: "🇨🇦",
        university: "University of Alberta",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "March 2026",
        amount: "CA$5,000-$30,000",
        description: "Supporting outstanding international students.",
        benefits: [
            "Awards from CA$5,000 to $30,000",
            "Automatic consideration for some awards"
        ],
        eligibility: [
            "International student",
            "Academic excellence",
            "Admitted to UAlberta"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.ualberta.ca/admissions/international/scholarships.html"
    },
    {
        id: 57,
        title: "University of Calgary International Entrance Scholarship",
        country: "Canada",
        flag: "🇨🇦",
        university: "University of Calgary",
        level: ["Undergraduate"],
        funding: "Partially Funded",
        deadline: "December 2025",
        amount: "CA$15,000-$60,000",
        description: "Rewarding international students with outstanding achievements.",
        benefits: [
            "CA$15,000-$60,000",
            "Renewable based on performance"
        ],
        eligibility: [
            "International student",
            "Direct entry from high school",
            "Academic excellence"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.ucalgary.ca/future-students/undergraduate/apply/scholarships"
    },
    {
        id: 58,
        title: "Monash International Merit Scholarship",
        country: "Australia",
        flag: "🇦🇺",
        university: "Monash University",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "Rolling",
        amount: "$10,000/year",
        description: "Recognizing academic excellence in international students.",
        benefits: [
            "$10,000 per year",
            "Automatic consideration",
            "Renewable"
        ],
        eligibility: [
            "International student",
            "Academic achievement",
            "Commencing studies"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.monash.edu/study/fees-scholarships"
    },
    {
        id: 59,
        title: "University of Sydney International Scholarships",
        country: "Australia",
        flag: "🇦🇺",
        university: "University of Sydney",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "Varies",
        amount: "$10,000-$40,000",
        description: "Merit-based scholarships for exceptional international students.",
        benefits: [
            "Awards from $10,000 to full tuition",
            "Recognition of excellence"
        ],
        eligibility: [
            "International student",
            "Academic merit",
            "Apply to eligible program"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.sydney.edu.au/scholarships/"
    },
    {
        id: 60,
        title: "TU Delft Excellence Scholarships",
        country: "Netherlands",
        flag: "🇳🇱",
        university: "Delft University of Technology",
        level: ["Masters"],
        funding: "Partially Funded",
        deadline: "December 2025",
        amount: "€5,000-€25,000",
        description: "Supporting excellent international students in engineering and design.",
        benefits: [
            "€5,000-€25,000",
            "Tuition fee reduction/waiver"
        ],
        eligibility: [
            "Non-EU/EEA student",
            "Admitted to TU Delft MSc",
            "Academic excellence"
        ],
        fields: ["Engineering", "Technology", "Design"],
        applyLink: "https://www.tudelft.nl/en/education/practical-matters/scholarships/"
    },
    {
        id: 61,
        title: "Radboud Scholarship Programme",
        country: "Netherlands",
        flag: "🇳🇱",
        university: "Radboud University",
        level: ["Masters"],
        funding: "Partially Funded",
        deadline: "March 2026",
        amount: "Full or partial tuition + €11,400",
        description: "Excellence scholarships for talented non-EU students.",
        benefits: [
            "Full or partial tuition waiver",
            "€11,400 for living expenses"
        ],
        eligibility: [
            "Non-EU/EEA nationality",
            "Admitted to Radboud",
            "Academic excellence"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.ru.nl/radboud-scholarship-programme/"
    },
    {
        id: 62,
        title: "ETH Zurich Excellence Masters Scholarships",
        country: "Switzerland",
        flag: "🇨🇭",
        university: "ETH Zurich",
        level: ["Masters"],
        funding: "Fully Funded",
        deadline: "December 2025",
        amount: "CHF 12,000-24,000 + tuition",
        description: "Supporting outstanding students pursuing Master's degrees.",
        benefits: [
            "Full tuition waiver",
            "CHF 12,000-24,000 living expenses per semester"
        ],
        eligibility: [
            "Excellent academic record (top 10%)",
            "Bachelor's in related field",
            "Admitted to ETH Zurich"
        ],
        fields: ["Science", "Engineering", "Architecture", "Mathematics"],
        applyLink: "https://ethz.ch/students/en/studies/financial/scholarships/excellencescholarship.html"
    },
    {
        id: 63,
        title: "EPFL Excellence Fellowships",
        country: "Switzerland",
        flag: "🇨🇭",
        university: "EPFL",
        level: ["Masters"],
        funding: "Fully Funded",
        deadline: "April 2026",
        amount: "CHF 16,000/year + tuition",
        description: "Supporting top students in science and engineering.",
        benefits: [
            "Full tuition waiver",
            "CHF 16,000 per year"
        ],
        eligibility: [
            "Outstanding academic record",
            "Admitted to EPFL",
            "Bachelor's in related field"
        ],
        fields: ["Science", "Engineering", "Technology"],
        applyLink: "https://www.epfl.ch/education/studies/en/financing/scholarships/"
    },
    {
        id: 64,
        title: "Vienna University of Economics Scholarships",
        country: "Austria",
        flag: "🇦🇹",
        university: "WU Vienna",
        level: ["Masters"],
        funding: "Partially Funded",
        deadline: "May 2026",
        amount: "€1,500/month",
        description: "Excellence scholarships for business students.",
        benefits: [
            "€1,500 per month",
            "2 semesters"
        ],
        eligibility: [
            "Non-EU/EEA student",
            "Admitted to WU",
            "Academic excellence"
        ],
        fields: ["Business", "Economics", "Social Sciences"],
        applyLink: "https://www.wu.ac.at/en/students/my-study/fees-scholarships/scholarships/"
    },
    {
        id: 65,
        title: "University of Oslo International Summer School Scholarships",
        country: "Norway",
        flag: "🇳🇴",
        university: "University of Oslo",
        level: ["Short Course"],
        funding: "Partially Funded",
        deadline: "February 2026",
        amount: "Tuition waiver + stipend",
        description: "Summer school scholarships for international students.",
        benefits: [
            "Full tuition waiver",
            "Accommodation stipend",
            "Course materials"
        ],
        eligibility: [
            "International student",
            "Academic merit",
            "Apply to ISS program"
        ],
        fields: ["Various"],
        applyLink: "https://www.uio.no/english/studies/summerschool/"
    },
    {
        id: 66,
        title: "Copenhagen Business School Scholarships",
        country: "Denmark",
        flag: "🇩🇰",
        university: "Copenhagen Business School",
        level: ["Masters"],
        funding: "Partially Funded",
        deadline: "March 2026",
        amount: "Full/Half tuition waiver",
        description: "Supporting talented international business students.",
        benefits: [
            "Full or 50% tuition waiver",
            "Recognition of merit"
        ],
        eligibility: [
            "Non-EU/EEA student",
            "Academic excellence",
            "Admitted to CBS"
        ],
        fields: ["Business", "Economics"],
        applyLink: "https://www.cbs.dk/en/study/tuition-fees-and-scholarships"
    },
    {
        id: 67,
        title: "University of Helsinki Scholarships",
        country: "Finland",
        flag: "🇫🇮",
        university: "University of Helsinki",
        level: ["Masters"],
        funding: "Partially Funded",
        deadline: "January 2026",
        amount: "€10,000-€15,000",
        description: "Supporting international Master's students.",
        benefits: [
            "€10,000-€15,000 first year",
            "Possible continuation based on progress"
        ],
        eligibility: [
            "Non-EU/EEA student",
            "Admitted to UHelsinki",
            "Academic merit"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.helsinki.fi/en/admissions-and-education/apply-masters-programmes/scholarships"
    },
    {
        id: 68,
        title: "Aalto University Scholarships",
        country: "Finland",
        flag: "🇫🇮",
        university: "Aalto University",
        level: ["Masters"],
        funding: "Partially Funded",
        deadline: "January 2026",
        amount: "50-100% tuition + incentive",
        description: "Excellence scholarships for international students.",
        benefits: [
            "50% or 100% tuition waiver",
            "€6,000 incentive scholarship possible"
        ],
        eligibility: [
            "Non-EU/EEA student",
            "Admitted to Aalto",
            "Academic excellence"
        ],
        fields: ["Engineering", "Business", "Arts", "Science"],
        applyLink: "https://www.aalto.fi/en/study-at-aalto/scholarships-and-tuition-fees"
    },
    {
        id: 69,
        title: "Trinity College Dublin Global Excellence Scholarships",
        country: "Ireland",
        flag: "🇮🇪",
        university: "Trinity College Dublin",
        level: ["Undergraduate"],
        funding: "Partially Funded",
        deadline: "February 2026",
        amount: "€5,000",
        description: "Supporting outstanding international undergraduate students.",
        benefits: [
            "€5,000 per year",
            "Renewable for duration of program"
        ],
        eligibility: [
            "International student",
            "Academic excellence",
            "Admitted to TCD"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.tcd.ie/students/fees-finance/scholarships/"
    },
    {
        id: 70,
        title: "University College Dublin Global Excellence Scholarships",
        country: "Ireland",
        flag: "🇮🇪",
        university: "University College Dublin",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "March 2026",
        amount: "€3,000-€10,000",
        description: "Recognizing academic achievement in international students.",
        benefits: [
            "€3,000-€10,000",
            "Automatic consideration"
        ],
        eligibility: [
            "International student",
            "Academic merit",
            "Apply to UCD"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.ucd.ie/global/scholarships/"
    },
    {
        id: 71,
        title: "Jagiellonian University Scholarships",
        country: "Poland",
        flag: "🇵🇱",
        university: "Jagiellonian University",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "Varies",
        amount: "Varies",
        description: "Supporting international students at Poland's oldest university.",
        benefits: [
            "Tuition reduction",
            "Monthly stipend (for some programs)"
        ],
        eligibility: [
            "International student",
            "Academic merit",
            "Admitted to UJ"
        ],
        fields: ["All Fields"],
        applyLink: "https://en.uj.edu.pl/en/studying/scholarships"
    },
    {
        id: 72,
        title: "Charles University Scholarships",
        country: "Czech Republic",
        flag: "🇨🇿",
        university: "Charles University",
        level: ["Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "March 2026",
        amount: "CZK 10,000-20,000/month",
        description: "Supporting international students in Czech Republic's top university.",
        benefits: [
            "Monthly stipend CZK 10,000-20,000",
            "Partial/full tuition waiver"
        ],
        eligibility: [
            "International student",
            "Academic excellence",
            "Research potential"
        ],
        fields: ["All Fields"],
        applyLink: "https://cuni.cz/UKEN-1.html"
    },
    {
        id: 73,
        title: "AAUW International Fellowships",
        country: "USA",
        flag: "🇺🇸",
        university: "US Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "November 2025",
        amount: "$18,000-$30,000",
        description: "American Association of University Women fellowships for international women pursuing graduate studies.",
        benefits: [
            "$18,000-$30,000 per year",
            "Support for full-time study",
            "Academic year funding",
            "Member community access"
        ],
        eligibility: [
            "Women only",
            "International student (non-US citizen)",
            "Full-time study",
            "Not permanent US resident"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.aauw.org/resources/programs/fellowships-grants/current-opportunities/international/",
        featured: false
    },
    {
        id: 74,
        title: "ACI Foundation Scholarship",
        country: "USA",
        flag: "🇺🇸",
        university: "US Universities",
        level: ["Undergraduate", "Masters", "PhD", "Postdoctoral"],
        funding: "Fully Funded",
        deadline: "January 2026",
        amount: "$10,000-$15,000",
        description: "American Concrete Institute scholarship for students in civil engineering and related fields.",
        benefits: [
            "$10,000-$15,000 educational stipend",
            "Tuition and residence support",
            "Books and materials",
            "Industry mentorship",
            "ACI convention registration"
        ],
        eligibility: [
            "Studying civil engineering, architecture, construction",
            "US or international students",
            "Academic merit",
            "Interest in concrete/construction materials"
        ],
        fields: ["Civil Engineering", "Architecture", "Construction Management", "Structural Design"],
        applyLink: "https://www.acifoundation.org/scholarships.aspx",
        featured: false
    },
    {
        id: 75,
        title: "Illinois Wesleyan University Scholarships",
        country: "USA",
        flag: "🇺🇸",
        university: "Illinois Wesleyan University",
        level: ["Undergraduate"],
        funding: "Fully Funded",
        deadline: "February 2026",
        amount: "$16,000-$30,000/year",
        description: "Full-tuition scholarships for exceptional international undergraduate students.",
        benefits: [
            "Awards from $16,000 to full tuition",
            "Renewable for 4 years",
            "Automatic consideration"
        ],
        eligibility: [
            "International student",
            "High school excellence",
            "Leadership qualities",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.iwu.edu/financial-aid/scholarships.html",
        featured: false
    },
    {
        id: 76,
        title: "University of New Haven Graduate Assistantships",
        country: "USA",
        flag: "🇺🇸",
        university: "University of New Haven",
        level: ["Masters"],
        funding: "Partially Funded",
        deadline: "Rolling",
        amount: "75% tuition + hourly wage",
        description: "Graduate assistantships providing substantial tuition reduction and work experience.",
        benefits: [
            "75% tuition assistance",
            "Hourly wage up to 20 hours/week",
            "Professional experience",
            "Networking opportunities"
        ],
        eligibility: [
            "New full-time master's students",
            "Academic merit",
            "Work 20 hours per week",
            "International students eligible"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.newhaven.edu/admissions/graduate/",
        featured: false
    },
    {
        id: 77,
        title: "University of Memphis International Merit Scholarships",
        country: "USA",
        flag: "🇺🇸",
        university: "University of Memphis",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "May 2026 (Fall), January 2026 (Spring)",
        amount: "$3,900-$23,454/year",
        description: "Merit-based scholarships for international students with strong academic records.",
        benefits: [
            "Awards based on GPA",
            "Automatic consideration",
            "Renewable scholarships",
            "Application fee waiver for high performers"
        ],
        eligibility: [
            "International student",
            "High school GPA 3.5-4.0 (US scale)",
            "Completed application by deadline",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.memphis.edu/scholarships/",
        featured: false
    },

    // New UK Scholarships
    {
        id: 78,
        title: "Oxford Pershing Square Graduate Scholarships",
        country: "UK",
        flag: "🇬🇧",
        university: "University of Oxford",
        level: ["Masters", "MBA"],
        funding: "Fully Funded",
        deadline: "January 2026",
        amount: "Full tuition + £15,609/year",
        description: "Full scholarships supporting future leaders through MBA and Master's programs at Oxford.",
        benefits: [
            "100% tuition coverage",
            "£15,609 annual living costs",
            "Two-year support (MBA + Masters)",
            "Leadership development program",
            "Global network access"
        ],
        eligibility: [
            "Admitted to Oxford MBA + 1+1 program",
            "Leadership potential",
            "Academic excellence",
            "Global perspective"
        ],
        fields: ["Business", "Public Policy", "Social Sciences"],
        applyLink: "https://www.ox.ac.uk/admissions/graduate/fees-and-funding/fees-funding-and-scholarship-search/scholarships-1#pershing",
        featured: true
    },
    {
        id: 79,
        title: "Goldsmiths International Response Scholarships",
        country: "UK",
        flag: "🇬🇧",
        university: "Goldsmiths, University of London",
        level: ["Undergraduate", "Masters"],
        funding: "Fully Funded",
        deadline: "June 2026",
        amount: "Full tuition + £8,825/year",
        description: "Comprehensive scholarships for international students demonstrating financial need.",
        benefits: [
            "Full tuition fee waiver",
            "£8,825 per year living allowance",
            "Accommodation fee waiver",
            "Support throughout program"
        ],
        eligibility: [
            "International student",
            "Demonstrated financial need",
            "Academic merit",
            "First degree at Goldsmiths"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.gold.ac.uk/international/fees-and-funding/scholarships/",
        featured: false
    },
    {
        id: 80,
        title: "University of Exeter Excellence Scholarships",
        country: "UK",
        flag: "🇬🇧",
        university: "University of Exeter",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "March 2026",
        amount: "£5,000-£10,000",
        description: "Merit-based scholarships recognizing academic achievement.",
        benefits: [
            "£5,000 or £10,000 tuition reduction",
            "Some full scholarships available",
            "Automatic consideration"
        ],
        eligibility: [
            "International student",
            "Academic excellence",
            "Offer from Exeter",
            "First year of study"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.exeter.ac.uk/study/funding/",
        featured: false
    },

    // New Australia Scholarships
    {
        id: 81,
        title: "Griffith Remarkable Scholarship",
        country: "Australia",
        flag: "🇦🇺",
        university: "Griffith University",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "Rolling",
        amount: "25-50% tuition reduction",
        description: "Recognizing outstanding international students.",
        benefits: [
            "25% or 50% tuition fee reduction",
            "Duration of program",
            "Automatic assessment"
        ],
        eligibility: [
            "International student",
            "Academic merit",
            "Apply for eligible program",
            "Meet entry requirements"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.griffith.edu.au/international/fees-and-scholarships",
        featured: false
    },
    {
        id: 82,
        title: "University of Adelaide Global Excellence Scholarships",
        country: "Australia",
        flag: "🇦🇺",
        university: "University of Adelaide",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "Rolling",
        amount: "15-50% tuition reduction",
        description: "Merit-based scholarships for high-achieving international students.",
        benefits: [
            "15%-50% tuition fee reduction",
            "Automatic consideration",
            "Renewable annually"
        ],
        eligibility: [
            "International student",
            "Academic excellence",
            "Commencing student",
            "Meet English requirements"
        ],
        fields: ["All Fields"],
        applyLink: "https://scholarships.adelaide.edu.au/",
        featured: false
    },
    {
        id: 83,
        title: "UNSW International Scholarships",
        country: "Australia",
        flag: "🇦🇺",
        university: "University of New South Wales",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Partially Funded",
        deadline: "November 2025",
        amount: "$10,000-$20,000/year",
        description: "Supporting international students across all disciplines.",
        benefits: [
            "$10,000-$20,000 per year",
            "Various scholarship types",
            "Merit and equity based"
        ],
        eligibility: [
            "International student",
            "Academic achievement",
            "Commencing at UNSW",
            "English proficiency"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.unsw.edu.au/study/scholarships",
        featured: false
    },

    // New European Scholarships
    {
        id: 84,
        title: "Uppsala University Global Scholarship",
        country: "Sweden",
        flag: "🇸🇪",
        university: "Uppsala University",
        level: ["Masters"],
        funding: "Fully Funded",
        deadline: "January 2026",
        amount: "Full tuition coverage",
        description: "Merit-based scholarships for outstanding international students.",
        benefits: [
            "Full tuition fee coverage",
            "Duration of program",
            "Recognition of excellence"
        ],
        eligibility: [
            "Non-EU/EEA citizen",
            "First-time applicant to Uppsala",
            "Admitted to Master's program",
            "Required to pay tuition fees"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.uu.se/en/admissions/scholarships/",
        featured: false
    },
    {
        id: 85,
        title: "Stockholm University Scholarship Scheme",
        country: "Sweden",
        flag: "🇸🇪",
        university: "Stockholm University",
        level: ["Masters"],
        funding: "Fully/Partially Funded",
        deadline: "January 2026",
        amount: "Full or partial tuition",
        description: "Supporting international students pursuing Master's degrees.",
        benefits: [
            "Full or partial tuition coverage",
            "Limited number of scholarships",
            "Automatic consideration"
        ],
        eligibility: [
            "Fee-paying student",
            "Admitted to eligible program",
            "Academic excellence"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.su.se/english/study/scholarships-fees",
        featured: false
    },
    {
        id: 86,
        title: "University of Milan Excellence Scholarship",
        country: "Italy",
        flag: "🇮🇹",
        university: "University of Milan",
        level: ["Masters"],
        funding: "Partially Funded",
        deadline: "May 2026",
        amount: "€6,000/year",
        description: "Merit-based scholarships for international Master's students.",
        benefits: [
            "€6,000 per academic year",
            "Exemption from regional tax",
            "Duration of program"
        ],
        eligibility: [
            "Non-Italian student",
            "Enrolled in Master's program",
            "Academic merit",
            "Meet GPA requirements"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.unimi.it/en/study/scholarships-and-funding",
        featured: false
    },
    {
        id: 87,
        title: "Politecnico di Milano Merit-based Scholarships",
        country: "Italy",
        flag: "🇮🇹",
        university: "Politecnico di Milano",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "May 2026",
        amount: "€10,000 + accommodation",
        description: "Platinum and Gold scholarships for engineering and architecture students.",
        benefits: [
            "€10,000 per year (Platinum)",
            "€5,000 per year (Gold)",
            "Free accommodation (Platinum)",
            "Tuition fee waiver"
        ],
        eligibility: [
            "International student",
            "Excellent academic record",
            "Admitted to Polimi",
            "English-taught program"
        ],
        fields: ["Engineering", "Architecture", "Design"],
        applyLink: "https://www.polimi.it/en/international-prospective-students/scholarships-for-international-students/",
        featured: false
    },
    {
        id: 88,
        title: "Sciences Po Emile Boutmy Scholarships",
        country: "France",
        flag: "🇫🇷",
        university: "Sciences Po",
        level: ["Undergraduate", "Masters"],
        funding: "Partially Funded",
        deadline: "Varies by program",
        amount: "€5,000-€19,000",
        description: "Need and merit-based scholarships for non-EU students.",
        benefits: [
            "€5,000-€19,000 per year",
            "Covers tuition partially or fully",
            "Based on merit and need"
        ],
        eligibility: [
            "Non-EU citizen",
            "First-time applicant",
            "Admitted to Sciences Po",
            "Financial need demonstration"
        ],
        fields: ["Political Science", "International Relations", "Economics", "Law"],
        applyLink: "https://www.sciencespo.fr/students/en/finances/scholarships",
        featured: false
    },
    {
        id: 89,
        title: "Eiffel Excellence Scholarship Program",
        country: "France",
        flag: "🇫🇷",
        university: "French Universities",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "January 2026",
        amount: "€1,400/month (Masters), €1,700/month (PhD)",
        description: "French Ministry of Foreign Affairs scholarship for outstanding international students.",
        benefits: [
            "Monthly allowance €1,400-€1,700",
            "Round-trip travel",
            "Health insurance",
            "Cultural activities",
            "Accommodation support"
        ],
        eligibility: [
            "Non-French nationality",
            "Age under 30 (Masters), 35 (PhD)",
            "Nominated by French institution",
            "Priority fields: engineering, economics, law, political science"
        ],
        fields: ["Engineering", "Economics", "Law", "Political Science"],
        applyLink: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence",
        featured: true
    },

    // New Asian Scholarships
    {
        id: 90,
        title: "Tsinghua University Scholarship",
        country: "China",
        flag: "🇨🇳",
        university: "Tsinghua University",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "December 2025",
        amount: "Full Coverage",
        description: "Prestigious scholarships at one of China's top universities.",
        benefits: [
            "Full tuition waiver",
            "Monthly stipend CNY 3,000-3,500",
            "Accommodation",
            "Medical insurance",
            "Research support"
        ],
        eligibility: [
            "International student",
            "Excellent academic record",
            "HSK certificate (for Chinese-taught programs)",
            "Research proposal (PhD)"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.tsinghua.edu.cn/publish/thu2018en/index.html",
        featured: false
    },
    {
        id: 91,
        title: "Peking University Yenching Scholarship",
        country: "China",
        flag: "🇨🇳",
        university: "Peking University",
        level: ["Masters"],
        funding: "Fully Funded",
        deadline: "December 2025",
        amount: "Full Coverage",
        description: "Interdisciplinary Master's program focused on China studies.",
        benefits: [
            "Full tuition coverage",
            "Monthly stipend",
            "On-campus accommodation",
            "Travel allowance",
            "Field study trips"
        ],
        eligibility: [
            "Bachelor's degree",
            "English proficiency",
            "Leadership potential",
            "Interest in China and Asia"
        ],
        fields: ["China Studies", "Social Sciences", "Humanities"],
        applyLink: "http://www.yenchingacademy.org/",
        featured: false
    },
    {
        id: 92,
        title: "Seoul National University Scholarships",
        country: "South Korea",
        flag: "🇰🇷",
        university: "Seoul National University",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "October 2025",
        amount: "Full tuition + stipend",
        description: "Graduate scholarships at Korea's premier university.",
        benefits: [
            "Full tuition waiver",
            "Monthly living allowance",
            "Dormitory support",
            "Medical insurance",
            "Korean language support"
        ],
        eligibility: [
            "International student",
            "Bachelor's degree",
            "English or Korean proficiency",
            "Academic excellence"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.useoul.edu/",
        featured: false
    },
    {
        id: 93,
        title: "University of Tokyo MEXT Scholarships",
        country: "Japan",
        flag: "🇯🇵",
        university: "University of Tokyo",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "Varies",
        amount: "¥144,000-147,000/month",
        description: "Japanese government scholarships specifically for UTokyo students.",
        benefits: [
            "Monthly allowance ¥144,000-147,000",
            "Tuition fee exemption",
            "Round-trip airfare",
            "No entrance examination fees",
            "Japanese language training"
        ],
        eligibility: [
            "Admitted to University of Tokyo",
            "Academic excellence",
            "Research plan",
            "Age limits apply"
        ],
        fields: ["All Fields"],
        applyLink: "https://www.u-tokyo.ac.jp/en/",
        featured: false
    },
    {
        id: 94,
        title: "Nanyang Technological University Scholarship",
        country: "Singapore",
        flag: "🇸🇬",
        university: "Nanyang Technological University",
        level: ["PhD"],
        funding: "Fully Funded",
        deadline: "November 2025",
        amount: "S$3,900/month",
        description: "Fully-funded PhD scholarships at Singapore's top research university.",
        benefits: [
            "Monthly stipend S$3,900",
            "Full tuition fees",
            "Conference allowance",
            "Thesis support",
            "Accommodation subsidy"
        ],
        eligibility: [
            "Good bachelor's degree (first or upper second class)",
            "Research interest",
            "English proficiency",
            "GRE recommended"
        ],
        fields: ["Engineering", "Science", "Business", "Humanities"],
        applyLink: "https://www.ntu.edu.sg/graduate-college/admissions/scholarships",
        featured: false
    },
    {
        id: 95,
        title: "Hong Kong PhD Fellowship Scheme",
        country: "Hong Kong",
        flag: "🇭🇰",
        university: "Hong Kong Universities",
        level: ["PhD"],
        funding: "Fully Funded",
        deadline: "December 2025",
        amount: "HK$27,600/month + HK$13,800/year",
        description: "Hong Kong government fellowship for outstanding PhD students worldwide.",
        benefits: [
            "Monthly stipend HK$27,600 (4 years)",
            "Conference/research travel HK$13,800/year",
            "World-class research environment"
        ],
        eligibility: [
            "First-class honors degree or equivalent",
            "Good GRE score recommended",
            "English proficiency",
            "Research proposal"
        ],
        fields: ["All Fields"],
        applyLink: "https://cerg1.ugc.edu.hk/hkpfs/",
        featured: true
    },

    // New Middle East/Africa Scholarships
    {
        id: 96,
        title: "Mohammed Bin Zayed University Scholarship",
        country: "UAE",
        flag: "🇦🇪",
        university: "Mohamed bin Zayed University of AI",
        level: ["Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "April 2026",
        amount: "Full Coverage",
        description: "World-class AI university offering full scholarships to international students.",
        benefits: [
            "100% tuition fee waiver",
            "Monthly living stipend",
            "On-campus accommodation",
            "Health insurance",
            "Travel allowance"
        ],
        eligibility: [
            "Bachelor's/Master's degree in related field",
            "Strong academic record",
            "English proficiency",
            "Research interest in AI"
        ],
        fields: ["Artificial Intelligence", "Machine Learning", "Computer Vision", "NLP"],
        applyLink: "https://mbzuai.ac.ae/",
        featured: true
    },
    {
        id: 97,
        title: "African Union Scholarships",
        country: "Africa",
        flag: "🌍",
        university: "African Universities",
        level: ["Undergraduate", "Masters", "PhD"],
        funding: "Fully Funded",
        deadline: "Varies",
        amount: "Full Coverage",
        description: "Pan-African scholarship program promoting intra-African student mobility.",
        benefits: [
            "Full tuition coverage",
            "Living allowance",
            "Accommodation support",
            "Travel expenses",
            "Study within Africa"
        ],
        eligibility: [
            "African citizen",
            "Academic merit",
            "Study in another African country",
            "Age limits vary by level"
        ],
        fields: ["All Fields"],
        applyLink: "https://au.int/en/scholarships",
        featured: false
    }
];

// Function to get scholarships by country
function getScholarshipsByCountry(country) {
    return scholarshipsData.filter(s => s.country === country);
}

// Function to get scholarships by level
function getScholarshipsByLevel(level) {
    return scholarshipsData.filter(s => s.level.includes(level));
}

// Function to get scholarships by funding type
function getScholarshipsByFunding(fundingType) {
    return scholarshipsData.filter(s => s.funding === fundingType);
}

// Function to get featured scholarships
function getFeaturedScholarships() {
    return scholarshipsData.filter(s => s.featured === true);
}

// Function to get upcoming deadlines (next 3 months)
function getUpcomingDeadlines() {
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
    
    return scholarshipsData.filter(s => {
        // This is a simplified check - you'd want more sophisticated date parsing
        return s.deadline.includes('2026') || s.deadline.toLowerCase().includes('rolling');
    });
}

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scholarshipsData,
        getScholarshipsByCountry,
        getScholarshipsByLevel,
        getScholarshipsByFunding,
        getFeaturedScholarships,
        getUpcomingDeadlines
    };
}
