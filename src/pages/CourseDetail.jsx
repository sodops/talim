import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../context/useStore';
import { PlayCircle, Lock, CheckCircle } from 'lucide-react';

const CourseDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { courses, user, enrollCourse } = useStore();

    const course = courses.find(c => c.id === parseInt(id));

    if (!course) return <div className="text-center py-10">Kurs topilmadi</div>;

    const isEnrolled = user?.enrolledCourses.includes(course.id);

    const handleEnroll = () => {
        if (!user) {
            alert("Iltimos, avval tizimga kiring");
            return;
        }
        enrollCourse(course.id);
        alert("Kursga muvaffaqiyatli a'zo bo'ldingiz!");
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="md:flex">
                    <div className="md:w-1/3">
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 md:w-2/3">
                        <div className="flex justify-between items-start">
                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                                {course.category}
                            </span>
                            <span className="text-2xl font-bold text-blue-600">{course.price.toLocaleString()} UZS</span>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
                        <p className="text-gray-600 mb-6">{course.description}</p>

                        <div className="flex items-center space-x-4 mb-6">
                            <img src="https://ui-avatars.com/api/?name=Instructor&background=random" alt="Instructor" className="w-10 h-10 rounded-full" />
                            <div>
                                <p className="text-sm text-gray-500">O'qituvchi</p>
                                <p className="font-medium text-gray-800">{course.instructor}</p>
                            </div>
                        </div>

                        {isEnrolled ? (
                            <button
                                onClick={() => navigate(`/course/${course.id}/lesson/${course.lessons[0].id}`)}
                                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-medium flex items-center"
                            >
                                <PlayCircle className="mr-2" />
                                Davom ettirish
                            </button>
                        ) : (
                            <button
                                onClick={handleEnroll}
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                            >
                                Kursga a'zo bo'lish
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Darslar rejasi</h2>
            <div className="bg-white rounded-lg shadow-md divide-y">
                {course.lessons.map((lesson, index) => (
                    <div key={lesson.id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition">
                        <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="font-medium text-gray-800">{lesson.title}</h3>
                                <p className="text-sm text-gray-500">{lesson.duration}</p>
                            </div>
                        </div>
                        {isEnrolled ? (
                            <PlayCircle className="text-blue-500" size={20} />
                        ) : (
                            <Lock className="text-gray-400" size={20} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseDetail;
