import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/useStore';
import CourseCard from '../components/CourseCard';
import { Award, BookOpen, CheckCircle, TrendingUp } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const Dashboard = () => {
    const user = useStore((state) => state.user);
    const courses = useStore((state) => state.courses);

    if (!user) {
        return <div className="container mx-auto px-4 py-8 text-center">Iltimos, tizimga kiring.</div>;
    }

    const enrolledCoursesList = courses.filter(course => user.enrolledCourses.includes(course.id));
    const completedCount = user.completedCourses.length;

    const stats = [
        {
            icon: BookOpen,
            label: "O'qilayotgan kurslar",
            value: enrolledCoursesList.length,
            color: "bg-blue-500",
            lightColor: "bg-blue-100",
            textColor: "text-blue-600"
        },
        {
            icon: CheckCircle,
            label: "Tugatilgan kurslar",
            value: completedCount,
            color: "bg-green-500",
            lightColor: "bg-green-100",
            textColor: "text-green-600"
        },
        {
            icon: Award,
            label: "To'plangan ballar",
            value: user.points,
            color: "bg-yellow-500",
            lightColor: "bg-yellow-100",
            textColor: "text-yellow-600"
        },
        {
            icon: TrendingUp,
            label: "O'sish",
            value: "45%",
            color: "bg-purple-500",
            lightColor: "bg-purple-100",
            textColor: "text-purple-600"
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Welcome Banner */}
                <Motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 mb-8 text-white"
                >
                    <div className="flex items-center gap-6">
                        <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-20 h-20 rounded-full object-cover ring-4 ring-white/30"
                        />
                        <div>
                            <h1 className="text-3xl font-bold mb-1">Xush kelibsiz, {user.name}! 👋</h1>
                            <p className="text-primary-100">O'rganishni davom ettiring va maqsadlaringizga erishing</p>
                        </div>
                    </div>
                </Motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {stats.map((stat, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 ${stat.lightColor} rounded-xl flex items-center justify-center`}>
                                    <stat.icon size={24} className={stat.textColor} />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-gray-600 text-sm">{stat.label}</div>
                        </Motion.div>
                    ))}
                </div>

                {/* Courses Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Mening Kurslarim</h2>

                    {enrolledCoursesList.length > 0 ? (
                        <Motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                            {enrolledCoursesList.map(course => (
                                <Motion.div
                                    key={course.id}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.9 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                >
                                    <CourseCard course={course} />
                                    {user.progress[course.id] !== undefined && (
                                        <div className="mt-3 bg-white rounded-lg p-3 shadow-sm">
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-gray-600">Progress</span>
                                                <span className="font-semibold text-primary-600">{user.progress[course.id]}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${user.progress[course.id]}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}
                                </Motion.div>
                            ))}
                        </Motion.div>
                    ) : (
                        <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                            <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500 text-lg mb-4">Siz hali hech qanday kursga a'zo bo'lmagansiz.</p>
                            <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
                                Kurslarni ko'rish →
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
