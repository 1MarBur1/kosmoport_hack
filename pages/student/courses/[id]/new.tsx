import SidebarLayout from '@/layouts/SidebarLayout';
import { createCourse, editCourse, getCourseById } from '@/shared/api/courses';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import TagsPicker from '@/components/common/TagsPicker';
import { useFormik } from 'formik';

interface IFormik {
	name: string,
	number: string,
}

const StudentCoursePage = (): JSX.Element => {
	const router = useRouter();
	const { data, mutate } = useMutation(getCourseById);
	const editMutation = useMutation(editCourse, {
		onSuccess: () => router.push('/student/courses'),
	});

	useEffect(() => {
		if (router)
			mutate(router.query.id as string);
	}, [router]);

	const formik = useFormik<IFormik>({
		initialValues: {
			name: '',
			number: '',
		},
		onSubmit: (values) => {
			editMutation.mutate({
				id: Number(router.query.id as string),
				image_id: values.name,
				docs_ids: values.number,
			});
		},
	});

	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-10'>
				Запись на курс 
				{' '}
				{data?.title}
			</h1>

			<form onSubmit={formik.handleSubmit}>
				<Input 
					value={formik.values.name}
					onChange={formik.handleChange}
					name='name' 
					className='w-2/3 mb-4'
					placeholder='ФИО' />
				<Input 
					value={formik.values.number}
					onChange={formik.handleChange}
					name='number'
					className='w-2/3 mb-4'
					placeholder='Номер телефона' />

				<Button color='primary' variant='filled' className='w-2/3 mt-4'>
					Отправить
				</Button>
			</form>
		</SidebarLayout>
	);
};

export default StudentCoursePage;

