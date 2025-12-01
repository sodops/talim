import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, LayoutDashboard } from 'lucide-react';
import { useStore } from '../context/useStore';

const Navbar = () => {
    const user = useStore((state) => state.user);

    return (
        <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                        <BookOpen size={24} className="text-white" />
                    </div>
                    <span>EduSpace</span>
                </Link>

                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                        Kurslar
                    </Link>
                    <Link to="/analytics" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                        Analytics
                    </Link>
                    {user && (
                        <Link
                            to="/dashboard"
                            className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                        >
                            <LayoutDashboard size={20} />
                            <span>Kabinet</span>
                        </Link>
                    )}

                    {user ? (
                        <div className="flex items-center space-x-3 pl-6 border-l border-gray-200">
                            <img
                                src={user.avatar}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-100"
                            />
                            <span className="text-sm font-semibold text-gray-700">{user.name}</span>
                        </div>
                    ) : (
                        <Link
                            to="/login"
                            className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                        >
                            Kirish
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
