import SidebarLayout from '@/layouts/SidebarLayout';
import { createCourse } from '@/shared/api/courses';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation } from 'react-query';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import TagsPicker from '@/components/common/TagsPicker';
import { useFormik } from 'formik';

interface IFormik {
	name: string,
	description: string,
	age: number,
	teacher: string,
	price: number,
	specialization: string,
}

const StudentCoursePage = (): JSX.Element => {
	const router = useRouter();
	const [tags, setTags] = useState<string[]>([]);
	const { mutate } = useMutation(createCourse, {
		onSuccess: () => router.push('/admin/courses'),
	});

	const formik = useFormik<IFormik>({
		initialValues: {
			age: 0,
			description: '',
			name: '',
			price: 0,
			teacher: '',
			specialization: '',
		},
		onSubmit: (values) => {
			mutate({
				age_from: values.age,
				age_to: 0,
				description: values.description,
				docs_ids: '',
				image_id: '',
				is_submitted: false,
				price: values.price,
				requirements: '',
				specialization: values.specialization,
				teacher_id: values.teacher,
				times: tags,
				title: values.name,
			});
		},
	});

	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-10'>
				Создание курса
			</h1>

			<form onSubmit={formik.handleSubmit}>
				<Input 
					value={formik.values.name}
					onChange={formik.handleChange}
					name='name' 
					className='w-2/3 mb-4'
					placeholder='Название курса' />
				<Input 
					value={formik.values.description}
					onChange={formik.handleChange}
					name='description'
					className='w-2/3 mb-4'
					placeholder='Описание курса' />
				<Input 
					value={formik.values.specialization}
					onChange={formik.handleChange}
					name='specialization'
					className='w-2/3 mb-4'
					placeholder='Специализация' />
				<Input 
					value={formik.values.age}
					onChange={formik.handleChange}
					name='age'
					className='w-2/3 mb-4'
					placeholder='Возраст группы' />
				<Input
					value={formik.values.teacher}
					onChange={formik.handleChange}
					name='teacher'
					className='w-2/3 mb-4'
					placeholder='Преподаватель' />
				<Input 
					value={formik.values.price}
					onChange={formik.handleChange}
					name='price'
					className='w-2/3 mb-4'
					placeholder='Стоимость занятия' />
				<TagsPicker 
					placeholder='Расписание занятий' 
					tags={tags} 
					className='w-2/3'
					setTags={(newTag) => setTags((old) => old.concat(newTag))} 
					onDeleteTag={() => null} />

				<Button color='primary' variant='filled' className='w-2/3 mt-4'>
					Сохранить
				</Button>
			</form>
		</SidebarLayout>
	);
};

export default StudentCoursePage;

