import Button from '@/components/common/Button';
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
			<div className='flex justify-between'>
				<h1 className='font-bold text-4xl mb-10'>
					Все курсы
				</h1>
				<Button 
					color='primary' 
					variant='filled' 
					className='h-[48px] px-12' 
					onClick={() => router.push('/admin/courses/new')}
				>
					Создать курс
				</Button>
			</div>
			<div className='flex flex-wrap gap-4'>
				{data?.map((course, index) => (
					<CourseCard 
						goToCourse={() => router.push(`/admin/courses/${course.id}`)} 
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

