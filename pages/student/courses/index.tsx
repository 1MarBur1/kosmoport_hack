import CourseCard from '@/components/courses/CourseCard';
import SidebarLayout from '@/layouts/SidebarLayout';
import { getCourses } from '@/shared/api/courses';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const StudentCoursesPage = (): JSX.Element => {
	const { data } = useQuery('get_courses', getCourses);
	const router = useRouter();

	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-10'>
				Мои курсы
			</h1>
			<div className='flex flex-wrap gap-4'>
				{data?.filter((course) => course.is_submitted).map((course, index) => (
					<CourseCard 
						goToCourse={() => router.push(`/student/courses/${course.id}`)} 
						teacher={course.teacher_id} 
						times={course.times} 
						title={course.title} 
						key={index} />
				))}

			</div>

			<h1 className='font-bold text-4xl mb-10'>
				Все курсы
			</h1>
			<div className='flex flex-wrap gap-4'>
				{data?.filter((course) => !course.is_submitted).map((course, index) => (
					<CourseCard 
						goToCourse={() => router.push(`/student/courses/${course.id}`)} 
						teacher={course.teacher_id} 
						times={course.times} 
						title={course.title} 
						key={index} />
				))}
			</div>
		</SidebarLayout>
	);
};

export default StudentCoursesPage;

