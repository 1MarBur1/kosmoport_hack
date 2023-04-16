import SidebarLayout from '@/layouts/SidebarLayout';
import { editCourse, getCourseById } from '@/shared/api/courses';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

import Student from '@/assets/course_example2.svg';
import Button from '@/components/common/Button';
import StudentCard from '@/components/courses/StudentCard';

const StudentCoursePage = (): JSX.Element => {
	const router = useRouter();
	const { data, mutate } = useMutation(getCourseById);
	const editMutation = useMutation(editCourse);

	useEffect(() => {
		if (router)
			mutate(router.query.id as string);
	}, [router]);

	return(
		<SidebarLayout className='px-20 pt-14'>
			<div className='flex justify-between'>
				<h1 className='font-bold text-4xl mb-10'>
					{data?.title}
				</h1>
			</div>

			<div className='flex gap-6'>
				<Student />	
				
				<div className='py-4'>
					<h1 className='font-bold text-3xl'>
						{data?.title}
					</h1>
					<p>
						{data?.description}
					</p>

					<h2 className='text-violet text-3xl mt-3 font-bold'>
						{data?.age_from}
						+
					</h2>
				</div>
			</div>

			<hr className='my-6' /> 
			
			<h2 className='font-bold text-4xl'>
				О курсе
			</h2>

			<div className='flex justify-between mt-4'>
				<h3 className='text-violet text-lg font-bold'>
					Специализация
				</h3>

				<p className='text-grey2 text-lg font-semibold'>
					{data?.specialization}
				</p>
			</div>
			<div className='flex justify-between mt-4'>
				<h3 className='text-violet text-lg font-bold'>
					Стоимость занятия
				</h3>

				<p className='text-grey2 text-lg font-semibold'>
					{data?.price}
				</p>
			</div>
			<div className='flex justify-between mt-4'>
				<h3 className='text-violet text-lg font-bold'>
					Расписание 
				</h3>
				<div>
					{data?.times.map((time, index) => (
						<p key={index} className='text-lg text-green'>
							{time}
						</p>
					))}
				</div>
			</div>

			<hr className='my-6' />

			<div>
				<h3 className='text-violet text-2xl font-bold'>
					Заявки
				</h3>
				
				{!data?.is_submitted && (
					<StudentCard 
						goToCourse={() => editMutation.mutate({
							is_submitted: true,
							id: Number(router.query.id as string),
						})} 
						teacher={data?.docs_ids as string}
						title={data?.image_id as string} />
				)}
			</div>
		</SidebarLayout>
	);
};

export default StudentCoursePage;

