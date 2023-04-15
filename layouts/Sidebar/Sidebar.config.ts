import Courses from '@assets/sidebarIcons/courses.svg';
import Requests from '@assets/sidebarIcons/requests.svg';
import Classes from '@assets/sidebarIcons/classes.svg';
import Students from '@assets/sidebarIcons/students.svg';
import Teachers from '@assets/sidebarIcons/teachers.svg';
import Profile from '@assets/sidebarIcons/profile.svg';

export type sidebarItemColorTypes = 'fill' | 'stroke';

interface ISidebarItem {
	label: string;
	href: string;
	validateEndsWith?: boolean;
	icon: React.FC<any>;
	colorType: sidebarItemColorTypes;
}

const SIDEBAR_ITEMS_ADMIN: ISidebarItem[] = [
	{
		label: 'Все курсы',
		href: '/courses',
		icon: Courses,
		colorType: 'fill',
		validateEndsWith: true,
	},
	{
		label: 'Заявки',
		href: '/requests',
		icon: Requests,
		colorType: 'fill',
	},
	{
		label: 'Занятия',
		href: '/classes',
		icon: Classes,
		colorType: 'fill',
	},
	{
		label: 'Ученики',
		href: '/students',
		icon: Students,
		colorType: 'fill',
	},
	{
		label: 'Преподаватели',
		href: '/teachers',
		icon: Teachers,
		colorType: 'fill',
	},
	{
		label: 'Профиль',
		href: '/profile',
		icon: Profile,
		colorType: 'fill',
	},
];

const SIDEBAR_ITEMS_TEACHER: ISidebarItem[] = [
	{
		label: 'Мои курсы',
		href: '/teacher/courses',
		icon: Courses,
		colorType: 'fill',
		validateEndsWith: true,
	},
	{
		label: 'Мои занятия',
		href: '/teacher/classes',
		icon: Classes,
		colorType: 'fill',
		validateEndsWith: true,
	},
	{
		label: 'Мои ученики',
		href: '/teacher/students/',
		icon: Students,
		colorType: 'fill',
		validateEndsWith: true,
	},
	{
		label: 'Профиль',
		href: '/teacher/profile/',
		icon: Profile,
		colorType: 'fill',
		validateEndsWith: true,
	},
];

const SIDEBAR_ITEMS_STUDENT: ISidebarItem[] = [
	{
		label: 'Мои курсы',
		href: '/student/courses',
		icon: Courses,
		colorType: 'fill',
		validateEndsWith: true,
	},
	{
		label: 'Профиль',
		href: '/student/profile/',
		icon: Profile,
		colorType: 'fill',
		validateEndsWith: true,
	},
];

export {
	SIDEBAR_ITEMS_ADMIN,
	SIDEBAR_ITEMS_TEACHER,
	SIDEBAR_ITEMS_STUDENT,
};
