import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { DollarSign, Users, UserCheck, Calendar, TrendingUp, Target, Award, Globe, Zap, Shield, Code, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Analytics = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // KPI Data
    const kpis = [
        { icon: DollarSign, label: "Talab etiladigan sarmoya", value: "$10,000", subtext: "Boshlang'ich kapital", color: "bg-blue-500" },
        { icon: Users, label: "Kutilayotgan foydalanuvchilar", value: "100K", subtext: "Birinchi yilda", color: "bg-green-500" },
        { icon: UserCheck, label: "Jamoa a'zolari", value: "5", subtext: "Professional mutaxassislar", color: "bg-purple-500" },
        { icon: Calendar, label: "MVP muddati", value: "1 oy", subtext: "Ishga tushirish", color: "bg-orange-500" },
    ];

    // Additional Metrics
    const additionalMetrics = [
        { icon: Award, label: "Kurslar soni", value: "50+", color: "bg-indigo-500" },
        { icon: Globe, label: "Qamrov", value: "O'zbekiston", color: "bg-cyan-500" },
        { icon: Zap, label: "O'sish sur'ati", value: "25%/oy", color: "bg-yellow-500" },
        { icon: Shield, label: "Saqlanish", value: "85%", color: "bg-red-500" },
    ];

    // Financial Expenses Data (Pie Chart)
    const expensesData = [
        { name: 'Ish haqi', value: 50, color: '#4F46E5', amount: '$5,000' },
        { name: 'Marketing', value: 30, color: '#10B981', amount: '$3,000' },
        { name: 'Server & Infra', value: 10, color: '#F59E0B', amount: '$1,000' },
        { name: 'Boshqa xarajatlar', value: 10, color: '#EF4444', amount: '$1,000' },
    ];

    // Revenue Forecast Data (Bar/Line Chart)
    const revenueData = [
        { month: 'Oy 1', xarajat: 8000, daromad: 0, foydalanuvchilar: 500 },
        { month: 'Oy 2', xarajat: 7000, daromad: 2000, foydalanuvchilar: 2000 },
        { month: 'Oy 3', xarajat: 6000, daromad: 4000, foydalanuvchilar: 5000 },
        { month: 'Oy 4', xarajat: 5000, daromad: 6000, foydalanuvchilar: 10000 },
        { month: 'Oy 5', xarajat: 5000, daromad: 8000, foydalanuvchilar: 18000 },
        { month: 'Oy 6', xarajat: 5000, daromad: 10000, foydalanuvchilar: 30000 },
        { month: 'Oy 7', xarajat: 5000, daromad: 12000, foydalanuvchilar: 45000 },
        { month: 'Oy 8', xarajat: 5000, daromad: 15000, foydalanuvchilar: 60000 },
        { month: 'Oy 9', xarajat: 5000, daromad: 18000, foydalanuvchilar: 75000 },
        { month: 'Oy 10', xarajat: 5000, daromad: 22000, foydalanuvchilar: 85000 },
        { month: 'Oy 11', xarajat: 5000, daromad: 26000, foydalanuvchilar: 95000 },
        { month: 'Oy 12', xarajat: 5000, daromad: 30000, foydalanuvchilar: 100000 },
    ];

    // User Growth Data
    const userGrowthData = revenueData.map(item => ({
        month: item.month,
        users: item.foydalanuvchilar
    }));

    // Team Structure Data
    const teamData = [
        { role: 'Frontend Developer', count: 1, salary: '$800/oy', responsibility: 'React, UI/UX implementation' },
        { role: 'Backend Developer', count: 1, salary: '$900/oy', responsibility: 'API, Database, Security' },
        { role: 'UI/UX Designer', count: 1, salary: '$700/oy', responsibility: 'Design system, Prototyping' },
        { role: 'Project Manager', count: 1, salary: '$1000/oy', responsibility: 'Planning, Coordination' },
        { role: 'Marketing Specialist', count: 1, salary: '$600/oy', responsibility: 'SMM, Content, Ads' },
    ];

    // Roadmap Data
    const roadmap = [
        {
            phase: '1-oy',
            title: 'MVP Ishga Tushirish',
            description: 'Asosiy funksiyalar: Kurs katalogi, Video darslar, Quiz tizimi, Sertifikatlar',
            deliverables: ['Responsive web app', 'Admin panel', 'Payment integration'],
            status: 'active'
        },
        {
            phase: '3-oy',
            title: 'Marketing va O\'sish',
            description: 'Foydalanuvchilarni jalb qilish, SMM kampaniyalari, Influencer marketing',
            deliverables: ['10K+ users', 'Social media presence', 'Partnership deals'],
            status: 'upcoming'
        },
        {
            phase: '6-oy',
            title: 'Kengaytirish va Skalablilik',
            description: 'Yangi xususiyatlar, Mobile app, AI-powered recommendations',
            deliverables: ['Mobile apps (iOS/Android)', 'AI tutor', 'Live classes'],
            status: 'upcoming'
        },
    ];

    // Technical Stack
    const techStack = [
        { category: 'Frontend', technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Zustand'] },
        { category: 'Backend', technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis'] },
        { category: 'DevOps', technologies: ['Docker', 'AWS', 'GitHub Actions', 'Nginx'] },
        { category: 'Tools', technologies: ['Figma', 'Jira', 'Slack', 'Analytics'] },
    ];

    // Market Analysis
    const marketData = {
        totalMarket: '$2.5B',
        targetSegment: 'O\'zbekiston EdTech',
        competitors: ['Udemy (global)', 'Coursera (global)', 'Local tutors'],
        advantages: [
            'O\'zbek tilida mahalliy kontent',
            'Arzon narxlar (local pricing)',
            'Mahalliy o\'qituvchilar',
            'Offline support'
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        EduSpace - Hackathon Pitch Deck
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        O'zbekiston uchun zamonaviy onlayn ta'lim platformasi
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setActiveTab('overview')}
                            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'overview' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            Umumiy Ko'rinish
                        </button>
                        <button
                            onClick={() => setActiveTab('financials')}
                            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'financials' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            Moliyaviy
                        </button>
                        <button
                            onClick={() => setActiveTab('technical')}
                            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === 'technical' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            Texnik
                        </button>
                    </div>
                </motion.div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {kpis.map((kpi, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                        >
                            <div className={`w-12 h-12 ${kpi.color} rounded-xl flex items-center justify-center mb-4`}>
                                <kpi.icon size={24} className="text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">{kpi.value}</div>
                            <div className="text-gray-700 font-medium mb-1">{kpi.label}</div>
                            <div className="text-sm text-gray-500">{kpi.subtext}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {additionalMetrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className="bg-white rounded-xl shadow p-4 flex items-center gap-3"
                        >
                            <div className={`w-10 h-10 ${metric.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <metric.icon size={20} className="text-white" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                                <div className="text-xs text-gray-600">{metric.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                    <>
                        {/* Market Analysis */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bozor Tahlili</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Bozor Hajmi</h3>
                                    <div className="text-4xl font-bold text-primary-600 mb-2">{marketData.totalMarket}</div>
                                    <p className="text-gray-600 mb-4">Global EdTech bozori (2024)</p>
                                    <div className="bg-primary-50 p-4 rounded-lg">
                                        <p className="text-sm text-gray-700">
                                            <strong>Maqsadli segment:</strong> {marketData.targetSegment}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Raqobatdosh Ustunliklar</h3>
                                    <ul className="space-y-3">
                                        {marketData.advantages.map((adv, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-gray-700">{adv}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* User Growth Chart */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white rounded-2xl shadow-lg p-6 mb-12"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Foydalanuvchilar O'sishi</h2>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={userGrowthData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="users" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.3} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </motion.div>
                    </>
                )}

                {activeTab === 'financials' && (
                    <>
                        {/* Charts Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            {/* Pie Chart - Financial Expenses */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl shadow-lg p-6"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Xarajatlar Taqsimoti</h2>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie
                                            data={expensesData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                            outerRadius={100}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {expensesData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    {expensesData.map((item, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                                                <span className="text-sm text-gray-700">{item.name}</span>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-900">{item.amount}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Bar Chart - Revenue Forecast */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white rounded-2xl shadow-lg p-6"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Daromad Prognozi</h2>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={revenueData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="xarajat" fill="#EF4444" name="Xarajat" />
                                        <Bar dataKey="daromad" fill="#10B981" name="Daromad" />
                                    </BarChart>
                                </ResponsiveContainer>
                                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                                    <div className="flex items-center gap-2 text-green-700">
                                        <Target size={20} />
                                        <span className="font-semibold">Break-even point: 6-oy | ROI: 200% (12-oy)</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}

                {activeTab === 'technical' && (
                    <>
                        {/* Technical Stack */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white rounded-2xl shadow-lg p-8 mb-12"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Texnologik Stack</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {techStack.map((stack, index) => (
                                    <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 transition-colors">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Code className="text-primary-600" size={24} />
                                            <h3 className="text-lg font-bold text-gray-900">{stack.category}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {stack.technologies.map((tech, i) => (
                                                <li key={i} className="text-gray-700 text-sm flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}

                {/* Team Structure Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-6 mb-12"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Jamoa Tuzilmasi</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Rol</th>
                                    <th className="text-center py-4 px-4 font-semibold text-gray-700">Soni</th>
                                    <th className="text-center py-4 px-4 font-semibold text-gray-700">Ish haqi</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Mas'uliyat</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teamData.map((member, index) => (
                                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="py-4 px-4 font-medium text-gray-900">{member.role}</td>
                                        <td className="py-4 px-4 text-center">
                                            <span className="inline-flex items-center justify-center w-8 h-8 bg-primary-100 text-primary-700 rounded-full font-semibold">
                                                {member.count}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-center font-semibold text-gray-900">{member.salary}</td>
                                        <td className="py-4 px-4 text-sm text-gray-600">{member.responsibility}</td>
                                    </tr>
                                ))}
                                <tr className="bg-primary-50 font-bold">
                                    <td className="py-4 px-4 text-gray-900">Jami</td>
                                    <td className="py-4 px-4 text-center text-gray-900">5</td>
                                    <td className="py-4 px-4 text-center text-gray-900">$4,000/oy</td>
                                    <td className="py-4 px-4"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Roadmap Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-6"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Yo'l Xaritasi</h2>
                    <div className="space-y-8">
                        {roadmap.map((item, index) => (
                            <div key={index} className="flex gap-6">
                                <div className="flex flex-col items-center">
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.status === 'active' ? 'bg-primary-600' : 'bg-gray-300'
                                        }`}>
                                        <span className="text-white font-bold text-lg">{index + 1}</span>
                                    </div>
                                    {index < roadmap.length - 1 && (
                                        <div className="w-1 h-24 bg-gray-200 my-2"></div>
                                    )}
                                </div>
                                <div className="flex-1 pb-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full">
                                            {item.phase}
                                        </span>
                                        <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h4 className="font-semibold text-gray-700 mb-2">Natijalar:</h4>
                                        <ul className="space-y-1">
                                            {item.deliverables.map((deliverable, i) => (
                                                <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                                                    {deliverable}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-center text-white"
                >
                    <h2 className="text-3xl font-bold mb-4">Bizga qo'shiling!</h2>
                    <p className="text-xl mb-6">O'zbekiston ta'lim tizimini raqamlashtirish missiyamizga hissa qo'shing</p>
                    <div className="flex justify-center gap-4">
                        <a href="mailto:contact@eduspace.uz" className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Bog'lanish
                        </a>
                        <a href="/dashboard" className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border-2 border-white">
                            Demo ko'rish
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Analytics;
