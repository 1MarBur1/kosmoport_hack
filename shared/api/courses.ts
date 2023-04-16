import { ICourse } from '../types/courses';
import instance from './axios';

const getCourses = (): Promise<ICourse[]> => {
	return instance.get('/courses/')
		.then((res) => res.data);
};

const getCourseById = (id: string): Promise<ICourse> => {
	return instance.get(`/courses/${id}`)
		.then((res) => res.data);
};

const createCourse = (data: Partial<ICourse>): Promise<ICourse> => {
	return instance.post('/courses/', data)
		.then((res) => res.data);
};

const editCourse = (data: Partial<ICourse>): Promise<ICourse> => {
	return instance.patch(`/courses/${data.id}/`, data)
		.then((res) => res.data);
};

export {
	getCourseById,
	createCourse,
	getCourses,
	editCourse,
};
