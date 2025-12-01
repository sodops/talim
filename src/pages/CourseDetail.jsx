import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../context/useStore';
import { PlayCircle, Lock, Clock, Users, Star } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import Button from '../components/Button';
import Badge from '../components/Badge';

const CourseDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const courses = useStore((state) => state.courses);
    const user = useStore((state) => state.user);
    const enrollCourse = useStore((state) => state.enrollCourse);

    const course = courses.find(c => c.id === parseInt(id));

    if (!course) return <div className="text-center py-10">Kurs topilmadi</div>;

    const isEnrolled = user?.enrolledCourses.includes(course.id);
    const firstLessonId = course.lessons[0]?.id;

    const handleEnroll = () => {
        if (!user) {
            alert("Iltimos, avval tizimga kiring");
            return;
        }
        enrollCourse(course.id);
        alert("Kursga muvaffaqiyatli a'zo bo'ldingiz!");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <div className="relative h-80">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <Badge variant="primary" className="mb-3">{course.category}</Badge>
                                    <h1 className="text-4xl font-bold text-white mb-2">{course.title}</h1>
                                    <div className="flex items-center gap-4 text-white/90">
                                        <div className="flex items-center gap-1">
                                            <Star size={18} fill="#FCD34D" className="text-yellow-400" />
                                            <span className="font-semibold">{course.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users size={18} />
                                            <span>{course.instructor}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Kurs haqida</h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">{course.description}</p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Darslar rejasi</h2>
                                <div className="space-y-3">
                                    {course.lessons.map((lesson, index) => (
                                        <Motion.div
                                            key={lesson.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                                                    {index + 1}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                                        <Clock size={14} />
                                                        <span>{lesson.duration}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {isEnrolled ? (
                                                <PlayCircle className="text-primary-600" size={24} />
                                            ) : (
                                                <Lock className="text-gray-400" size={24} />
                                            )}
                                        </Motion.div>
                                    ))}
                                </div>
                            </div>
                        </Motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <Motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
                        >
                            <div className="text-center mb-6">
                                <div className="text-4xl font-bold text-primary-600 mb-2">
                                    {course.price.toLocaleString()} UZS
                                </div>
                                <p className="text-gray-500">Bir martalik to'lov</p>
                            </div>

                            {isEnrolled ? (
                                <>
                                    <Button
                                        onClick={() => {
                                            if (firstLessonId) {
                                                navigate(`/course/${course.id}/lesson/${firstLessonId}`);
                                            }
                                        }}
                                        variant="success"
                                        size="lg"
                                        className="w-full mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={!firstLessonId}
                                    >
                                        <PlayCircle className="mr-2" size={20} />
                                        Davom ettirish
                                    </Button>
                                    {!firstLessonId && (
                                        <p className="text-sm text-gray-500 text-center mb-4">
                                            Darslar tez orada qo'shiladi.
                                        </p>
                                    )}
                                </>
                            ) : (
                                <Button
                                    onClick={handleEnroll}
                                    variant="primary"
                                    size="lg"
                                    className="w-full mb-4"
                                >
                                    Kursga a'zo bo'lish
                                </Button>
                            )}

                            <div className="border-t border-gray-200 pt-6 space-y-4">
                                <h3 className="font-bold text-gray-900 mb-4">Kurs ma'lumotlari</h3>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Darslar soni</span>
                                    <span className="font-semibold text-gray-900">{course.lessons.length} ta</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">Kategoriya</span>
                                    <Badge variant="gray">{course.category}</Badge>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">O'qituvchi</span>
                                    <span className="font-semibold text-gray-900">{course.instructor}</span>
                                </div>
                            </div>
                        </Motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
