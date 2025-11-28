import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../context/useStore';
import { PlayCircle, CheckCircle, Award, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const LessonPage = () => {
    const { courseId, lessonId } = useParams();
    const navigate = useNavigate();
    const { courses, user, updateProgress } = useStore();
    const [activeTab, setActiveTab] = useState('video'); // video, quiz, certificate
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizResult, setQuizResult] = useState(null);
    const certificateRef = useRef(null);

    const course = courses.find(c => c.id === parseInt(courseId));
    const currentLesson = course?.lessons.find(l => l.id === parseInt(lessonId));

    if (!course || !currentLesson) return <div className="text-center py-10">Dars topilmadi</div>;
    if (!user?.enrolledCourses.includes(course.id)) {
        return <div className="text-center py-10">Siz bu kursga a'zo emassiz.</div>;
    }

    const handleLessonComplete = () => {
        // Logic to mark lesson as complete (simplified: just update progress)
        // In a real app, we'd track individual lessons.
        // Here we just increment progress based on lesson count.
        const progressStep = 100 / course.lessons.length;
        const currentProgress = user.progress[course.id] || 0;
        const newProgress = Math.min(currentProgress + progressStep, 100);
        updateProgress(course.id, newProgress);
    };

    const handleQuizSubmit = () => {
        let correct = 0;
        course.quiz.forEach(q => {
            if (quizAnswers[q.id] === q.correctAnswer) correct++;
        });
        const score = (correct / course.quiz.length) * 100;
        setQuizResult(score);
        if (score >= 80) {
            updateProgress(course.id, 100); // Mark course as 100% if quiz passed
        }
    };

    const downloadCertificate = () => {
        const input = certificateRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`certificate-${course.title}.pdf`);
        });
    };

    return (
        <div className="flex flex-col h-[calc(100vh-64px)]">
            <div className="flex flex-1 overflow-hidden">
                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    {activeTab === 'video' && (
                        <div>
                            <div className="aspect-w-16 aspect-h-9 mb-6 bg-black rounded-lg overflow-hidden">
                                <iframe
                                    src={currentLesson.videoUrl}
                                    title={currentLesson.title}
                                    className="w-full h-[500px]"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl font-bold text-gray-800">{currentLesson.title}</h1>
                                <button
                                    onClick={handleLessonComplete}
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                >
                                    Darsni tugatish
                                </button>
                            </div>
                            <p className="text-gray-600">Bu darsda siz {currentLesson.title} haqida o'rganasiz.</p>
                        </div>
                    )}

                    {activeTab === 'quiz' && (
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-2xl font-bold mb-6">Bilimni sinash</h2>
                            {quizResult === null ? (
                                <div className="space-y-6">
                                    {course.quiz.map((q, index) => (
                                        <div key={q.id} className="bg-white p-6 rounded-lg shadow-sm border">
                                            <p className="font-medium text-lg mb-4">{index + 1}. {q.question}</p>
                                            <div className="space-y-2">
                                                {q.options.map(option => (
                                                    <label key={option} className="flex items-center space-x-3 p-3 rounded hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200">
                                                        <input
                                                            type="radio"
                                                            name={`question-${q.id}`}
                                                            value={option}
                                                            onChange={() => setQuizAnswers({ ...quizAnswers, [q.id]: option })}
                                                            className="w-4 h-4 text-blue-600"
                                                        />
                                                        <span>{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        onClick={handleQuizSubmit}
                                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                                    >
                                        Testni yakunlash
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center bg-white p-8 rounded-lg shadow-md">
                                    <div className="text-6xl mb-4">{quizResult >= 80 ? '🎉' : '😕'}</div>
                                    <h3 className="text-2xl font-bold mb-2">Sizning natijangiz: {quizResult}%</h3>
                                    <p className="text-gray-600 mb-6">
                                        {quizResult >= 80
                                            ? "Tabriklaymiz! Siz kursni muvaffaqiyatli tugatdingiz."
                                            : "Afsuski, o'tish bali 80%. Qayta urinib ko'ring."}
                                    </p>
                                    {quizResult >= 80 && (
                                        <button
                                            onClick={() => setActiveTab('certificate')}
                                            className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center mx-auto"
                                        >
                                            <Award className="mr-2" />
                                            Sertifikatni olish
                                        </button>
                                    )}
                                    {quizResult < 80 && (
                                        <button
                                            onClick={() => setQuizResult(null)}
                                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                                        >
                                            Qayta ishlash
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'certificate' && (
                        <div className="flex flex-col items-center">
                            <div
                                ref={certificateRef}
                                className="w-[800px] h-[600px] bg-white border-8 border-double border-blue-900 p-10 flex flex-col items-center justify-center text-center relative mb-6 shadow-2xl"
                                style={{ backgroundImage: 'linear-gradient(to bottom right, #ffffff, #f0f9ff)' }}
                            >
                                <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-blue-900"></div>
                                <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-blue-900"></div>

                                <Award size={80} className="text-blue-600 mb-6" />
                                <h1 className="text-5xl font-serif font-bold text-blue-900 mb-4">SERTIFIKAT</h1>
                                <p className="text-xl text-gray-600 mb-8">Ushbu sertifikat taqdim etiladi:</p>
                                <h2 className="text-4xl font-bold text-gray-800 mb-8 border-b-2 border-gray-300 pb-2 px-10">{user.name}</h2>
                                <p className="text-lg text-gray-600 mb-2">Muvaffaqiyatli tamomlagani uchun:</p>
                                <h3 className="text-3xl font-bold text-blue-800 mb-12">{course.title}</h3>
                                <div className="flex justify-between w-full px-20 mt-auto">
                                    <div className="text-center">
                                        <p className="font-bold text-gray-800">EduSpace</p>
                                        <p className="text-sm text-gray-500">Platforma</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-bold text-gray-800">{new Date().toLocaleDateString()}</p>
                                        <p className="text-sm text-gray-500">Sana</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={downloadCertificate}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center"
                            >
                                <Download className="mr-2" />
                                PDF yuklab olish
                            </button>
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
                    <div className="p-4 border-b border-gray-200">
                        <h2 className="font-bold text-gray-800">Darslar Mundarijasi</h2>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {course.lessons.map((lesson, index) => (
                            <button
                                key={lesson.id}
                                onClick={() => {
                                    navigate(`/course/${course.id}/lesson/${lesson.id}`);
                                    setActiveTab('video');
                                }}
                                className={`w-full p-4 text-left flex items-center hover:bg-gray-50 transition ${lesson.id === parseInt(lessonId) ? 'bg-blue-50 border-r-4 border-blue-600' : ''
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 ${lesson.id === parseInt(lessonId) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {index + 1}
                                </div>
                                <div>
                                    <p className={`text-sm font-medium ${lesson.id === parseInt(lessonId) ? 'text-blue-600' : 'text-gray-700'
                                        }`}>
                                        {lesson.title}
                                    </p>
                                    <p className="text-xs text-gray-500">{lesson.duration}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="p-4 border-t border-gray-200">
                        <button
                            onClick={() => setActiveTab('quiz')}
                            className={`w-full py-2 rounded-lg font-medium transition ${activeTab === 'quiz'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Test ishlash
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LessonPage;
