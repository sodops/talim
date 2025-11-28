import { create } from 'zustand';
import { courses } from '../data/courses';
import { currentUser } from '../data/users';

export const useStore = create((set) => ({
    courses: courses,
    user: currentUser,

    enrollCourse: (courseId) => set((state) => ({
        user: {
            ...state.user,
            enrolledCourses: [...state.user.enrolledCourses, courseId],
            progress: { ...state.user.progress, [courseId]: 0 }
        }
    })),

    updateProgress: (courseId, percent) => set((state) => ({
        user: {
            ...state.user,
            progress: { ...state.user.progress, [courseId]: percent }
        }
    })),

    addPoints: (points) => set((state) => ({
        user: {
            ...state.user,
            points: state.user.points + points
        }
    }))
}));
