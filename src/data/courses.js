export const courses = [
    {
        id: 1,
        title: "React.js va Redux Toolkit",
        category: "IT",
        instructor: "Anvar Narzullaev",
        rating: 4.8,
        price: 250000,
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
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
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&auto=format&fit=crop&q=80",
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
        image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=800&auto=format&fit=crop&q=80",
        description: "Professional dizayner bo'lish sirlarini o'rganing.",
        lessons: [
            { id: 1, title: "Photoshop Interface", duration: "08:00", videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0" },
        ],
        quiz: []
    },
    {
        id: 4,
        title: "Python Backend Development",
        category: "IT",
        instructor: "Sardor Rahimov",
        rating: 4.9,
        price: 280000,
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=80",
        description: "Python va Django bilan professional backend dasturlash.",
        lessons: [
            { id: 1, title: "Python Basics", duration: "20:00", videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0" },
        ],
        quiz: []
    },
    {
        id: 5,
        title: "UI/UX Dizayn Asoslari",
        category: "Dizayn",
        instructor: "Nilufar Tosheva",
        rating: 4.8,
        price: 220000,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
        description: "Foydalanuvchi tajribasini yaxshilash va chiroyli interfeys yaratish.",
        lessons: [
            { id: 1, title: "UX Principles", duration: "18:00", videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0" },
        ],
        quiz: []
    },
    {
        id: 6,
        title: "Nemis tili: A1-B2",
        category: "Til",
        instructor: "Aziza Karimova",
        rating: 4.6,
        price: 320000,
        image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=80",
        description: "Nemis tilini noldan professional darajagacha o'rganing.",
        lessons: [
            { id: 1, title: "Alphabet und Aussprache", duration: "15:00", videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0" },
        ],
        quiz: []
    }
];
