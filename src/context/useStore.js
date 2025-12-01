import { create } from 'zustand';
import { courses } from '../data/courses';
import { currentUser } from '../data/users';

export const useStore = create((set, get) => ({
    courses,
    user: currentUser,

    enrollCourse: (courseId) => set((state) => {
        const { user } = state;
        if (!user || user.enrolledCourses.includes(courseId)) {
            return state;
        }

        const existingCompleted = user.completedLessons || {};

        return {
            user: {
                ...user,
                enrolledCourses: [...user.enrolledCourses, courseId],
                progress: { ...user.progress, [courseId]: 0 },
                completedLessons: {
                    ...existingCompleted,
                    [courseId]: []
                }
            }
        };
    }),

    markLessonComplete: (courseId, lessonId, totalLessons) => set((state) => {
        const { user } = state;
        if (!user) {
            return state;
        }

        const completedLessons = user.completedLessons || {};
        const existingLessons = new Set(completedLessons[courseId] || []);
        if (existingLessons.has(lessonId)) {
            return state;
        }

        existingLessons.add(lessonId);
        const lessonsArray = Array.from(existingLessons);
        const progressPercent = totalLessons > 0 ? Math.round((lessonsArray.length / totalLessons) * 100) : 0;
        const isCourseComplete = progressPercent >= 100;
        const completedCourses = isCourseComplete
            ? (user.completedCourses.includes(courseId)
                ? user.completedCourses
                : [...user.completedCourses, courseId])
            : user.completedCourses;

        return {
            user: {
                ...user,
                completedLessons: {
                    ...completedLessons,
                    [courseId]: lessonsArray
                },
                completedCourses,
                progress: {
                    ...user.progress,
                    [courseId]: progressPercent
                }
            }
        };
    }),

    updateProgress: (courseId, percent) => set((state) => {
        const { user } = state;
        if (!user) {
            return state;
        }

        return {
            user: {
                ...user,
                progress: { ...user.progress, [courseId]: percent }
            }
        };
    }),

    markCourseCompleted: (courseId) => set((state) => {
        const { user } = state;
        if (!user) {
            return state;
        }

        const course = get().courses.find((c) => c.id === courseId);
        const allLessonIds = course ? course.lessons.map((lesson) => lesson.id) : [];
        const completedLessons = user.completedLessons || {};

        return {
            user: {
                ...user,
                completedCourses: user.completedCourses.includes(courseId)
                    ? user.completedCourses
                    : [...user.completedCourses, courseId],
                completedLessons: {
                    ...completedLessons,
                    [courseId]: allLessonIds
                },
                progress: {
                    ...user.progress,
                    [courseId]: 100
                }
            }
        };
    }),

    addPoints: (points) => set((state) => {
        const { user } = state;
        if (!user) {
            return state;
        }

        return {
            user: {
                ...user,
                points: user.points + points
            }
        };
    })
}));
