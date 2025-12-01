import React from 'react';
import Button from '../components/Button';

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Kirish</h1>
                <p className="text-gray-600 mb-6">Hozircha demo versiyadagi profilga ulanish funksiyasi tayyorlanmoqda.</p>
                <div className="space-y-4">
                    <Button variant="primary" size="lg" className="w-full" disabled>
                        Email orqali kirish (tez orada)
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" disabled>
                        Google orqali kirish (tez orada)
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
