import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, LayoutDashboard, User } from 'lucide-react';
import { useStore } from '../context/useStore';

const Navbar = () => {
    const { user } = useStore();

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-blue-600">
                    <BookOpen size={28} />
                    <span>EduSpace</span>
                </Link>

                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium">Kurslar</Link>
                    {user && (
                        <Link to="/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 font-medium">
                            <LayoutDashboard size={20} />
                            <span>Kabinet</span>
                        </Link>
                    )}

                    {user ? (
                        <div className="flex items-center space-x-2">
                            <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                            <span className="text-sm font-semibold text-gray-700">{user.name}</span>
                        </div>
                    ) : (
                        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                            Kirish
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
