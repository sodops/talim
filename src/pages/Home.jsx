import React, { useState } from 'react';
import { Search, BookOpen, Users, Award, TrendingUp } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { useStore } from '../context/useStore';

const Home = () => {
    const courses = useStore((state) => state.courses);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'IT', 'Til', 'Dizayn'];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const stats = [
        { icon: Users, label: "O'quvchilar", value: "10,000+" },
        { icon: BookOpen, label: "Kurslar", value: "50+" },
        { icon: Award, label: "Sertifikatlar", value: "5,000+" },
        { icon: TrendingUp, label: "Muvaffaqiyat", value: "95%" },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <Motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                                Kelajak kasblarini{' '}
                                <span className="text-primary-200">biz bilan</span> o'rganing
                            </h1>
                            <p className="text-lg md:text-xl text-primary-100 mb-6 md:mb-8">
                                Eng yaxshi o'qituvchilar va zamonaviy kurslar bilan bilimingizni oshiring.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="bg-white text-primary-600 border-transparent shadow-md hover:bg-primary-100"
                                    onClick={() => {
                                        document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Kurslarni ko'rish
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-white border-white hover:bg-white hover:text-primary-600"
                                    onClick={() => {
                                        document.getElementById('courses-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Batafsil
                                </Button>
                            </div>
                        </Motion.div>

                        <Motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hidden md:block"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary-400/20 rounded-3xl blur-3xl"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
                                    alt="Students learning"
                                    className="relative rounded-3xl shadow-2xl"
                                />
                            </div>
                        </Motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <Motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-full mb-3">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section id="courses-section" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-2">Barcha Kurslar</h2>
                            <p className="text-gray-600">O'zingizga mos kursni tanlang va o'rganishni boshlang</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            <div className="relative flex-1 md:w-64">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Kurslarni qidirish..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === category
                                            ? 'bg-primary-600 text-white shadow-md'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {filteredCourses.length > 0 ? (
                        <Motion.div
                            key={selectedCategory}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                        >
                            {filteredCourses.map(course => (
                                <Motion.div
                                    key={`${selectedCategory}-${course.id}`}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <CourseCard course={course} />
                                </Motion.div>
                            ))}
                        </Motion.div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-lg">
                            <p className="text-gray-500 text-lg">Hech qanday kurs topilmadi.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Home;
