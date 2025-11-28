import React from 'react';
import { useStore } from '../context/useStore';
import CourseCard from '../components/CourseCard';
import { Award, BookOpen, CheckCircle } from 'lucide-react';

const Dashboard = () => {
    const { user, courses } = useStore();

    if (!user) {
        return <div className="container mx-auto px-4 py-8 text-center">Iltimos, tizimga kiring.</div>;
    }

    const enrolledCoursesList = courses.filter(course => user.enrolledCourses.includes(course.id));
    const completedCount = user.completedCourses.length;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center space-x-4 mb-8">
                <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full object-cover border-2 border-blue-500" />
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">O'qilayotgan kurslar</p>
                        <p className="text-2xl font-bold text-gray-800">{enrolledCoursesList.length}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">Tugatilgan kurslar</p>
                        <p className="text-2xl font-bold text-gray-800">{completedCount}</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                        <Award size={24} />
                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">To'plangan ballar</p>
                        <p className="text-2xl font-bold text-gray-800">{user.points}</p>
                    </div>
                </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-6">Mening Kurslarim</h2>

            {enrolledCoursesList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {enrolledCoursesList.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <p className="text-gray-500">Siz hali hech qanday kursga a'zo bo'lmagansiz.</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
