import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	fio: string;
	phone: string;
	email: string;
	courses: string;
    avatar: string;
}

export default Props;
