import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, User } from 'lucide-react';

const CourseCard = ({ course }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{course.category}</span>
                    <div className="flex items-center text-yellow-500">
                        <Star size={16} fill="currentColor" />
                        <span className="ml-1 text-sm font-medium">{course.rating}</span>
                    </div>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>

                <div className="flex items-center text-gray-500 text-sm mb-4 space-x-4">
                    <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        <span>{course.instructor}</span>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-blue-600">{course.price.toLocaleString()} UZS</span>
                    <Link to={`/course/${course.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm">
                        Batafsil
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
