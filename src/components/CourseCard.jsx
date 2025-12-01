import React from 'react';
import { Link } from 'react-router-dom';
import { Star, User } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import Badge from './Badge';

function CourseCard({ course }) {
    const handleImageError = (e) => {
        e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80';
    };

    return (
        <Motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
        >
            <div className="relative overflow-hidden">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={handleImageError}
                    loading="lazy"
                />
                <div className="absolute top-4 left-4">
                    <Badge variant="primary">{course.category}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                    <Star size={16} fill="#FCD34D" className="text-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {course.title}
                </h3>

                <div className="flex items-center text-gray-600 text-sm mb-4">
                    <User size={16} className="mr-2" />
                    <span>{course.instructor}</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-primary-600">
                        {course.price.toLocaleString()} <span className="text-sm text-gray-500">UZS</span>
                    </span>
                    <Link
                        to={`/course/${course.id}`}
                        className="px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm"
                    >
                        Batafsil
                    </Link>
                </div>
            </div>
        </Motion.div>
    );
}

export default CourseCard;
