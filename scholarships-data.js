// Comprehensive Scholarship Database
const scholarshipsDatabase = [
    // USA Scholarships
    {
        id: 1,
        title: "Fulbright Foreign Student Program",
        country: "USA",
        university: "Various US Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "October 2024",
        funding: "Fully Funded",
        description: "Provides grants for graduate study, research, and teaching in the United States",
        benefits: ["Full tuition", "Living stipend", "Health insurance", "Airfare"],
        link: "https://foreign.fulbrightonline.org/",
        eligibility: "International students with bachelor's degree"
    },
    {
        id: 2,
        title: "AAUW International Fellowships",
        country: "USA",
        university: "Various US Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "December 2024",
        funding: "Fully Funded",
        description: "Awards for women pursuing full-time graduate or postdoctoral study in the United States",
        benefits: ["$18,000-$30,000 stipend", "Research support"],
        link: "https://www.aauw.org/resources/programs/fellowships-grants/current-opportunities/international/",
        eligibility: "Women who are not US citizens"
    },
    {
        id: 3,
        title: "Stanford Knight-Hennessy Scholars",
        country: "USA",
        university: "Stanford University",
        level: "Masters",
        field: "All Fields",
        deadline: "October 2024",
        funding: "Fully Funded",
        description: "Fully funded scholarship for graduate study at Stanford",
        benefits: ["Full tuition", "Stipend", "Travel", "Leadership development"],
        link: "https://knight-hennessy.stanford.edu/",
        eligibility: "All international students"
    },
    {
        id: 4,
        title: "Clark University Global Scholars",
        country: "USA",
        university: "Clark University",
        level: "Undergraduate",
        field: "All Fields",
        deadline: "January 2025",
        funding: "Fully Funded",
        description: "Full tuition scholarship for international undergraduates",
        benefits: ["Full tuition", "$2,500 annual stipend"],
        link: "https://www.clarku.edu/offices/admissions/scholarships-and-aid/",
        eligibility: "High-achieving international students"
    },

    // UK Scholarships
    {
        id: 5,
        title: "Chevening Scholarships",
        country: "UK",
        university: "Various UK Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "November 2024",
        funding: "Fully Funded",
        description: "UK government's international scholarship programme",
        benefits: ["Full tuition", "Living allowance", "Return airfare", "Arrival allowance"],
        link: "https://www.chevening.org/",
        eligibility: "Minimum 2 years work experience"
    },
    {
        id: 6,
        title: "Commonwealth Scholarships",
        country: "UK",
        university: "Various UK Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "December 2024",
        funding: "Fully Funded",
        description: "For students from low and middle-income Commonwealth countries",
        benefits: ["Full tuition", "Living expenses", "Return airfare"],
        link: "https://cscuk.fcdo.gov.uk/scholarships/",
        eligibility: "Commonwealth citizens"
    },
    {
        id: 7,
        title: "Gates Cambridge Scholarships",
        country: "UK",
        university: "University of Cambridge",
        level: "PhD",
        field: "All Fields",
        deadline: "October 2024",
        funding: "Fully Funded",
        description: "Prestigious scholarship for international postgraduate students",
        benefits: ["Full tuition", "Maintenance allowance", "Airfare", "Family allowance"],
        link: "https://www.gatescambridge.org/",
        eligibility: "Non-UK citizens applying for postgraduate study"
    },
    {
        id: 8,
        title: "Rhodes Scholarships",
        country: "UK",
        university: "University of Oxford",
        level: "Masters",
        field: "All Fields",
        deadline: "September 2024",
        funding: "Fully Funded",
        description: "One of the world's most prestigious international scholarship programmes",
        benefits: ["Full tuition", "Living stipend", "Travel expenses"],
        link: "https://www.rhodeshouse.ox.ac.uk/",
        eligibility: "Outstanding students aged 18-28"
    },

    // Canada Scholarships
    {
        id: 9,
        title: "Vanier Canada Graduate Scholarships",
        country: "Canada",
        university: "Various Canadian Universities",
        level: "PhD",
        field: "All Fields",
        deadline: "November 2024",
        funding: "Fully Funded",
        description: "For doctoral students demonstrating leadership skills",
        benefits: ["$50,000 per year for 3 years"],
        link: "https://vanier.gc.ca/",
        eligibility: "Nominated by Canadian universities"
    },
    {
        id: 10,
        title: "University of Toronto Ontario Graduate Scholarship",
        country: "Canada",
        university: "University of Toronto",
        level: "Masters",
        field: "All Fields",
        deadline: "Varies",
        funding: "Fully Funded",
        description: "Merit-based scholarship for graduate students",
        benefits: ["$15,000 minimum per year"],
        link: "https://www.sgs.utoronto.ca/awards/ontario-graduate-scholarship/",
        eligibility: "Graduate students at UofT"
    },
    {
        id: 11,
        title: "University of British Columbia International Leader of Tomorrow Award",
        country: "Canada",
        university: "University of British Columbia",
        level: "Undergraduate",
        field: "All Fields",
        deadline: "December 2024",
        funding: "Fully Funded",
        description: "For exceptional international students with financial need",
        benefits: ["Full financial need coverage"],
        link: "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
        eligibility: "International students with leadership potential"
    },

    // Australia Scholarships
    {
        id: 12,
        title: "Australia Awards Scholarships",
        country: "Australia",
        university: "Various Australian Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "April 2025",
        funding: "Fully Funded",
        description: "Long-term development awards for study in Australia",
        benefits: ["Full tuition", "Living expenses", "Airfare", "Health insurance"],
        link: "https://www.dfat.gov.au/people-to-people/australia-awards/",
        eligibility: "Citizens of eligible countries"
    },
    {
        id: 13,
        title: "University of Melbourne Graduate Research Scholarships",
        country: "Australia",
        university: "University of Melbourne",
        level: "PhD",
        field: "All Fields",
        deadline: "October 2024",
        funding: "Fully Funded",
        description: "For international students undertaking graduate research",
        benefits: ["Living allowance", "Relocation grant", "Thesis allowance"],
        link: "https://scholarships.unimelb.edu.au/",
        eligibility: "International research students"
    },
    {
        id: 14,
        title: "Monash University International Merit Scholarship",
        country: "Australia",
        university: "Monash University",
        level: "Undergraduate",
        field: "All Fields",
        deadline: "Varies",
        funding: "Partially Funded",
        description: "For high-achieving international students",
        benefits: ["$10,000 per year"],
        link: "https://www.monash.edu/study/fees-scholarships/scholarships",
        eligibility: "International students with excellent academics"
    },

    // Germany Scholarships
    {
        id: 15,
        title: "DAAD Scholarships",
        country: "Germany",
        university: "Various German Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "November 2024",
        funding: "Fully Funded",
        description: "German Academic Exchange Service scholarships",
        benefits: ["Monthly stipend", "Health insurance", "Travel allowance"],
        link: "https://www.daad.de/en/",
        eligibility: "International students with bachelor's degree"
    },
    {
        id: 16,
        title: "Heinrich Böll Foundation Scholarships",
        country: "Germany",
        university: "Various German Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "March 2025",
        funding: "Fully Funded",
        description: "For international students committed to sustainability",
        benefits: ["€850 monthly", "€300 book allowance"],
        link: "https://www.boell.de/en/foundation/application",
        eligibility: "Students with social commitment"
    },
    {
        id: 17,
        title: "Konrad-Adenauer-Stiftung Scholarships",
        country: "Germany",
        university: "Various German Universities",
        level: "PhD",
        field: "All Fields",
        deadline: "July 2024",
        funding: "Fully Funded",
        description: "For international doctoral students",
        benefits: ["€1,350 monthly", "Family allowance", "Health insurance"],
        link: "https://www.kas.de/en/web/begabtenfoerderung-und-kultur/scholarship-programs",
        eligibility: "Doctoral students with Christian democratic values"
    },

    // Netherlands Scholarships
    {
        id: 18,
        title: "Holland Scholarship",
        country: "Netherlands",
        university: "Various Dutch Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "May 2025",
        funding: "Partially Funded",
        description: "For non-EEA international students",
        benefits: ["€5,000 one-time grant"],
        link: "https://www.studyinholland.nl/finances/holland-scholarship",
        eligibility: "Non-EEA students"
    },
    {
        id: 19,
        title: "Orange Tulip Scholarship",
        country: "Netherlands",
        university: "Various Dutch Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "April 2025",
        funding: "Partially Funded",
        description: "For students from specific countries",
        benefits: ["€3,000-€24,000"],
        link: "https://www.nesorussia.org/scholarships/orange-tulip-scholarship",
        eligibility: "Students from Brazil, China, India, Indonesia, Mexico, Russia, South Korea, Thailand, Vietnam"
    },
    {
        id: 20,
        title: "University of Amsterdam Excellence Scholarships",
        country: "Netherlands",
        university: "University of Amsterdam",
        level: "Masters",
        field: "All Fields",
        deadline: "January 2025",
        funding: "Fully Funded",
        description: "For exceptionally talented students",
        benefits: ["€25,000", "Full tuition waiver"],
        link: "https://www.uva.nl/en/education/masters/scholarships-tuition/scholarships-and-loans/amsterdam-excellence-scholarship/amsterdam-excellence-scholarship.html",
        eligibility: "Non-EU students with excellent academic record"
    },

    // Sweden Scholarships
    {
        id: 21,
        title: "Swedish Institute Scholarships for Global Professionals",
        country: "Sweden",
        university: "Various Swedish Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "February 2025",
        funding: "Fully Funded",
        description: "For students from eligible countries",
        benefits: ["Full tuition", "Living expenses", "Travel grant", "Insurance"],
        link: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
        eligibility: "Citizens of eligible countries with work experience"
    },
    {
        id: 22,
        title: "Lund University Global Scholarship",
        country: "Sweden",
        university: "Lund University",
        level: "Masters",
        field: "All Fields",
        deadline: "January 2025",
        funding: "Fully Funded",
        description: "For top academic international students",
        benefits: ["Full or partial tuition waiver"],
        link: "https://www.lunduniversity.lu.se/admissions/scholarships-and-funding",
        eligibility: "Non-EU/EEA students with excellent grades"
    },

    // Norway Scholarships
    {
        id: 23,
        title: "Norwegian Government Quota Scheme",
        country: "Norway",
        university: "Various Norwegian Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "December 2024",
        funding: "Fully Funded",
        description: "For students from developing countries",
        benefits: ["Full tuition", "Living expenses", "Travel costs"],
        link: "https://www.nokut.no/en/norwegian-education/the-quota-scheme/",
        eligibility: "Citizens of eligible developing countries"
    },
    {
        id: 24,
        title: "University of Oslo International Summer School Scholarships",
        country: "Norway",
        university: "University of Oslo",
        level: "Undergraduate",
        field: "All Fields",
        deadline: "March 2025",
        funding: "Partially Funded",
        description: "For summer school programs",
        benefits: ["Tuition waiver"],
        link: "https://www.uio.no/english/studies/summerschool/",
        eligibility: "International students"
    },

    // France Scholarships
    {
        id: 25,
        title: "Eiffel Excellence Scholarship",
        country: "France",
        university: "Various French Universities",
        level: "Masters",
        field: "Engineering",
        deadline: "January 2025",
        funding: "Fully Funded",
        description: "For top international students in engineering, law, economics",
        benefits: ["€1,181 monthly for Masters", "€1,700 for PhD"],
        link: "https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence",
        eligibility: "International students under 30 (Masters) or 35 (PhD)"
    },
    {
        id: 26,
        title: "École Normale Supérieure International Selection",
        country: "France",
        university: "École Normale Supérieure",
        level: "Masters",
        field: "Sciences",
        deadline: "December 2024",
        funding: "Fully Funded",
        description: "For outstanding international students",
        benefits: ["€1,000 monthly for 3 years"],
        link: "https://www.ens.psl.eu/",
        eligibility: "Top international students in sciences"
    },

    // Switzerland Scholarships
    {
        id: 27,
        title: "Swiss Government Excellence Scholarships",
        country: "Switzerland",
        university: "Various Swiss Universities",
        level: "PhD",
        field: "All Fields",
        deadline: "November 2024",
        funding: "Fully Funded",
        description: "For foreign scholars in research and arts",
        benefits: ["CHF 1,920 monthly", "Health insurance", "Housing allowance"],
        link: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
        eligibility: "Postgraduate researchers and artists"
    },
    {
        id: 28,
        title: "ETH Zurich Excellence Scholarship",
        country: "Switzerland",
        university: "ETH Zurich",
        level: "Masters",
        field: "Engineering",
        deadline: "December 2024",
        funding: "Partially Funded",
        description: "For top international Masters students",
        benefits: ["CHF 11,000 per semester + tuition waiver"],
        link: "https://ethz.ch/students/en/studies/financial/scholarships/excellencescholarship.html",
        eligibility: "Outstanding international students"
    },

    // Japan Scholarships
    {
        id: 29,
        title: "MEXT Scholarships",
        country: "Japan",
        university: "Various Japanese Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "May 2025",
        funding: "Fully Funded",
        description: "Japanese government scholarship for international students",
        benefits: ["Monthly stipend", "Tuition waiver", "Airfare"],
        link: "https://www.studyinjapan.go.jp/en/planning/scholarship/",
        eligibility: "International students"
    },

    // South Korea Scholarships
    {
        id: 30,
        title: "Korean Government Scholarship Program (KGSP)",
        country: "South Korea",
        university: "Various Korean Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "March 2025",
        funding: "Fully Funded",
        description: "For international students to study in Korea",
        benefits: ["Full tuition", "Living allowance", "Airfare", "Korean language training"],
        link: "https://www.studyinkorea.go.kr/en/sub/gks/allnew_invite.do",
        eligibility: "International students under 40"
    },

    // China Scholarships
    {
        id: 31,
        title: "Chinese Government Scholarship",
        country: "China",
        university: "Various Chinese Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "March 2025",
        funding: "Fully Funded",
        description: "For international students in China",
        benefits: ["Full tuition", "Accommodation", "Monthly stipend"],
        link: "http://www.csc.edu.cn/",
        eligibility: "International students"
    },

    // New Zealand Scholarships
    {
        id: 32,
        title: "New Zealand Scholarships",
        country: "New Zealand",
        university: "Various NZ Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "July 2024",
        funding: "Fully Funded",
        description: "For students from developing countries",
        benefits: ["Full tuition", "Living costs", "Travel", "Health insurance"],
        link: "https://www.mfat.govt.nz/en/aid-and-development/scholarships/",
        eligibility: "Citizens of eligible developing countries"
    },

    // Additional USA Scholarships
    {
        id: 33,
        title: "Yale University Scholarships",
        country: "USA",
        university: "Yale University",
        level: "Undergraduate",
        field: "All Fields",
        deadline: "January 2025",
        funding: "Fully Funded",
        description: "Need-based financial aid for international students",
        benefits: ["Full demonstrated need"],
        link: "https://admissions.yale.edu/financial-aid-prospective-students",
        eligibility: "Admitted international students with financial need"
    },
    {
        id: 34,
        title: "Harvard University Scholarships",
        country: "USA",
        university: "Harvard University",
        level: "Undergraduate",
        field: "All Fields",
        deadline: "January 2025",
        funding: "Fully Funded",
        description: "Need-blind admission for all students",
        benefits: ["100% of demonstrated need"],
        link: "https://college.harvard.edu/financial-aid",
        eligibility: "All admitted students"
    },
    {
        id: 35,
        title: "MIT Need-Based Financial Aid",
        country: "USA",
        university: "MIT",
        level: "Undergraduate",
        field: "Engineering",
        deadline: "February 2025",
        funding: "Fully Funded",
        description: "Need-blind admission for international students",
        benefits: ["Full demonstrated need"],
        link: "https://sfs.mit.edu/",
        eligibility: "Admitted international students"
    },

    // Additional UK Scholarships
    {
        id: 36,
        title: "Imperial College London President's PhD Scholarships",
        country: "UK",
        university: "Imperial College London",
        level: "PhD",
        field: "Sciences",
        deadline: "November 2024",
        funding: "Fully Funded",
        description: "For outstanding PhD candidates",
        benefits: ["Full tuition", "Annual stipend"],
        link: "https://www.imperial.ac.uk/study/pg/fees-and-funding/scholarships/",
        eligibility: "International PhD applicants"
    },
    {
        id: 37,
        title: "University of Edinburgh Global Research Scholarship",
        country: "UK",
        university: "University of Edinburgh",
        level: "PhD",
        field: "All Fields",
        deadline: "February 2025",
        funding: "Fully Funded",
        description: "For exceptional research students",
        benefits: ["Full tuition difference between home and overseas fees"],
        link: "https://www.ed.ac.uk/student-funding/postgraduate/international/global/research",
        eligibility: "International PhD students"
    },

    // Additional Canadian Scholarships
    {
        id: 38,
        title: "Lester B. Pearson International Scholarship",
        country: "Canada",
        university: "University of Toronto",
        level: "Undergraduate",
        field: "All Fields",
        deadline: "November 2024",
        funding: "Fully Funded",
        description: "For exceptional international students",
        benefits: ["Full tuition", "Books", "Incidental fees", "Residence for 4 years"],
        link: "https://future.utoronto.ca/pearson/",
        eligibility: "International students nominated by their school"
    },
    {
        id: 39,
        title: "McGill University Entrance Scholarships",
        country: "Canada",
        university: "McGill University",
        level: "Undergraduate",
        field: "All Fields",
        deadline: "January 2025",
        funding: "Partially Funded",
        description: "For top incoming students",
        benefits: ["$3,000-$10,000"],
        link: "https://www.mcgill.ca/studentaid/scholarships-aid/future-undergraduates",
        eligibility: "High-achieving students"
    },

    // Additional European Scholarships
    {
        id: 40,
        title: "Erasmus Mundus Joint Masters",
        country: "Various",
        university: "Multiple European Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "Varies",
        funding: "Fully Funded",
        description: "Study in multiple European countries",
        benefits: ["Full tuition", "Living allowance", "Travel costs"],
        link: "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en",
        eligibility: "International students"
    },

    // Additional Scholarships for Various Countries
    {
        id: 41,
        title: "Joint Japan World Bank Graduate Scholarship",
        country: "Various",
        university: "Partner Universities Worldwide",
        level: "Masters",
        field: "Development",
        deadline: "March 2025",
        funding: "Fully Funded",
        description: "For students from developing countries",
        benefits: ["Full tuition", "Living expenses", "Travel", "Health insurance"],
        link: "https://www.worldbank.org/en/programs/scholarships",
        eligibility: "Citizens of World Bank member developing countries"
    },
    {
        id: 42,
        title: "ADB-Japan Scholarship Program",
        country: "Various",
        university: "ADB Partner Universities",
        level: "Masters",
        field: "Economics",
        deadline: "Varies",
        funding: "Fully Funded",
        description: "For students from ADB member countries",
        benefits: ["Full tuition", "Living expenses", "Books", "Travel"],
        link: "https://www.adb.org/work-with-us/careers/japan-scholarship-program",
        eligibility: "Citizens of ADB member countries"
    },

    // Additional Scholarships
    {
        id: 43,
        title: "Rotary Peace Fellowships",
        country: "Various",
        university: "Rotary Peace Centers",
        level: "Masters",
        field: "Peace Studies",
        deadline: "May 2025",
        funding: "Fully Funded",
        description: "For peace and conflict resolution studies",
        benefits: ["Full tuition", "Room and board", "Transportation"],
        link: "https://www.rotary.org/en/our-programs/peace-fellowships",
        eligibility: "Professionals committed to peace"
    },
    {
        id: 44,
        title: "Aga Khan Foundation International Scholarship",
        country: "Various",
        university: "Various Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "March 2025",
        funding: "Partially Funded",
        description: "For students from developing countries",
        benefits: ["50% grant, 50% loan"],
        link: "https://www.akdn.org/our-agencies/aga-khan-foundation/international-scholarship-programme",
        eligibility: "Students from select developing countries with no other funding"
    },
    {
        id: 45,
        title: "Google Lime Scholarship",
        country: "USA",
        university: "Various US Universities",
        level: "Undergraduate",
        field: "Computer Science",
        deadline: "December 2024",
        funding: "Partially Funded",
        description: "For students with disabilities studying computer science",
        benefits: ["$10,000 (US) or $5,000 (Canada)"],
        link: "https://buildyourfuture.withgoogle.com/scholarships/google-lime-scholarship",
        eligibility: "Students with disabilities in CS"
    },
    {
        id: 46,
        title: "Generation Google Scholarship",
        country: "Various",
        university: "Various Universities",
        level: "Undergraduate",
        field: "Computer Science",
        deadline: "December 2024",
        funding: "Partially Funded",
        description: "For students in computer science",
        benefits: ["$10,000 (US) or €7,000 (Europe)"],
        link: "https://buildyourfuture.withgoogle.com/scholarships/generation-google-scholarship",
        eligibility: "CS students from underrepresented groups"
    },
    {
        id: 47,
        title: "Hubert H. Humphrey Fellowship Program",
        country: "USA",
        university: "Various US Universities",
        level: "Postdoctoral",
        field: "All Fields",
        deadline: "October 2024",
        funding: "Fully Funded",
        description: "For experienced professionals from eligible countries",
        benefits: ["Tuition", "Living allowance", "Travel", "Professional development"],
        link: "https://www.humphreyfellowship.org/",
        eligibility: "Mid-career professionals with leadership potential"
    },
    {
        id: 48,
        title: "Australia National University Chancellor's International Scholarship",
        country: "Australia",
        university: "Australian National University",
        level: "Undergraduate",
        field: "All Fields",
        deadline: "December 2024",
        funding: "Partially Funded",
        description: "For high-achieving international students",
        benefits: ["$10,000-$25,000 per year"],
        link: "https://www.anu.edu.au/study/scholarships",
        eligibility: "International students with excellent academic record"
    },
    {
        id: 49,
        title: "University of Queensland International Scholarships",
        country: "Australia",
        university: "University of Queensland",
        level: "Masters",
        field: "All Fields",
        deadline: "November 2024",
        funding: "Partially Funded",
        description: "For international students with excellent academic record",
        benefits: ["25-100% tuition waiver"],
        link: "https://scholarships.uq.edu.au/",
        eligibility: "High-achieving international students"
    },
    {
        id: 50,
        title: "Denmark Government Scholarships",
        country: "Denmark",
        university: "Various Danish Universities",
        level: "Masters",
        field: "All Fields",
        deadline: "March 2025",
        funding: "Fully Funded",
        description: "For non-EU/EEA students",
        benefits: ["Full or partial tuition waiver + monthly stipend"],
        link: "https://studyindenmark.dk/",
        eligibility: "Non-EU/EEA students"
    },
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

    // ============================================
    // NEW SCHOLARSHIPS (IDs 73-97) - ADDED DECEMBER 2025
    // ============================================

    // New USA Scholarships
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
