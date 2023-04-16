import Classes from '@assets/sidebarIcons/classes.svg';
import Courses from '@assets/sidebarIcons/courses.svg';
import Profile from '@assets/sidebarIcons/profile.svg';
import Requests from '@assets/sidebarIcons/requests.svg';
import Students from '@assets/sidebarIcons/students.svg';
import Teachers from '@assets/sidebarIcons/teachers.svg';

export type sidebarItemColorTypes = 'fill' | 'stroke';

interface ISidebarItem {
	label: string;
	href: string;
	validateEndsWith?: boolean;
	icon: React.FC<any>;
	colorType: sidebarItemColorTypes;
}

const SIDEBAR_ITEMS: ISidebarItem[] = [
	{
		label: 'Все курсы',
		href: '/courses',
		icon: Courses,
		colorType: 'fill',
		validateEndsWith: true,
	},
	{
		label: 'Requests',
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
];

const SIDEBAR_ITEMS_TEACHER: ISidebarItem[] = [
	{
		label: 'Мои курсы',
		href: '/teaching/courses',
		icon: Courses,
		colorType: 'fill',
	},
	{
		label: 'Мои занятия',
		href: '/teaching/classes',
		icon: Classes,
		colorType: 'fill',
	},
	{
		label: 'Мои ученики',
		href: '/teaching/studs',
		icon: Students,
		colorType: 'fill',
	},
	{
		label: 'Профиль',
		href: '/teaching/profile',
		icon: Profile,
		colorType: 'fill',
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
		label: 'Мои заявки',
		href: '/student/requests',
		icon: Requests,
		colorType: 'fill',
	},
	{
		label: 'Профиль',
		href: '/student/profile',
		icon: Profile,
		colorType: 'fill',
	},
];

export {
	SIDEBAR_ITEMS,
	SIDEBAR_ITEMS_TEACHER,
	SIDEBAR_ITEMS_STUDENT,
};
