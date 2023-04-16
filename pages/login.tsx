import LoginLayout from '@/layouts/LoginLayout';
import Button from '@components/common/Button';
import Input from '@components/common/Input';

import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as Yup from 'yup';

interface IFormik {
	email: string;
	password: string;
}

const LoginPage = (): JSX.Element => {
	const router = useRouter();

	const formik = useFormik<IFormik>({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object().shape({
			email: Yup.string().email().required('Это обязательное поле'),
			password: Yup.string().required('Это обязательное поле'),
		}),
		onSubmit: () => router.push('/'),
	});

	useEffect(() => {
		if(router.query.id)
			localStorage.setItem('userId', router.query.id as string);
	}, [router]);

	return (
		<LoginLayout>
			<h1 className='text-heading-1 mt-28'>
				С возвращением! 👋
			</h1>
			<p className='text-BodyText_14 text-darkGrey mt-4'>
				Добро пожаловать в платформу &quot;Космопорт&quot;
				<br />
				Введите почту и пароль
			</p>
			<form onSubmit={formik.handleSubmit} className='max-w-[420px] mt-6 grid gap-[14px]'>
				<Input
					className='w-full'
					placeholder='Email'
					type='email'
					name='email'
					onChange={formik.handleChange}
					value={formik.values.email}
					errorMessage={formik.submitCount ? formik.errors.email : undefined} />
				<Input
					className='w-full'
					placeholder='Пароль'
					type='password'
					name='password'
					onChange={formik.handleChange}
					value={formik.values.password}
					errorMessage={formik.submitCount ? formik.errors.password : undefined} />
				<Button variant='filled' color='black'>
					Войти
				</Button>
			</form>
		</LoginLayout>
	);
};

export default LoginPage;
