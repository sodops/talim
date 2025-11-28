export const courses = [
    {
        id: 1,
        title: "React.js va Redux Toolkit",
        category: "IT",
        instructor: "Anvar Narzullaev",
        rating: 4.8,
        price: 250000,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
        description: "React.js kutubxonasini noldan o'rganing va zamonaviy web ilovalar yarating.",
        lessons: [
            { id: 1, title: "Kirish", duration: "10:00", videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0" },
            { id: 2, title: "Komponentlar", duration: "15:00", videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0" },
        ],
        quiz: [
            {
                id: 1,
                question: "React nima?",
                options: ["Framework", "Library", "Language", "Database"],
                correctAnswer: "Library"
            },
            {
                id: 2,
                question: "JSX nima?",
                options: ["JavaScript XML", "Java Syntax Extension", "JSON X", "JavaScript X"],
                correctAnswer: "JavaScript XML"
            }
        ]
    },
    {
        id: 2,
        title: "Ingliz tili: IELTS 7.0+",
        category: "Til",
        instructor: "Malika Karimova",
        rating: 4.9,
        price: 300000,
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=60",
        description: "IELTS imtihoniga tayyorgarlik ko'rish uchun mukammal kurs.",
        lessons: [
            { id: 1, title: "Listening Strategies", duration: "12:00", videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0" },
        ],
        quiz: []
    },
    {
        id: 3,
        title: "Grafik Dizayn: Photoshop & Illustrator",
        category: "Dizayn",
        instructor: "Jamshid Aliyev",
        rating: 4.7,
        price: 200000,
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=800&auto=format&fit=crop&q=60",
        description: "Professional dizayner bo'lish sirlarini o'rganing.",
        lessons: [
            { id: 1, title: "Photoshop Interface", duration: "08:00", videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0" },
        ],
        quiz: []
    }
];
