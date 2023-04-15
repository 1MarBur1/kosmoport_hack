import SidebarLayout from '@/layouts/SidebarLayout';
import Image from 'next/image';
import Student1 from '@/assets/students/1.png';
import Student2 from '@/assets/students/2.png';
import Student3 from '@/assets/students/3.png';
import Student4 from '@/assets/students/4.png';
import Student5 from '@/assets/students/5.png';
import Student6 from '@/assets/students/6.png';
import Student7 from '@/assets/students/7.png';
import Student8 from '@/assets/students/8.png';

const TeachersPage = (): JSX.Element => {
	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-10'>
				Главная
			</h1>
			<div className='grid grid-cols-[1fr_auto] gap-4'>
				<div className='flex flex-wrap gap-[17px]'>
					<Image 
						src={Student1}
						width={489}
						height={128}
						alt='' />
					<Image 
						src={Student2}
						width={489}
						height={128}
						alt='' />
					<Image 
						src={Student3}
						width={489}
						height={128}
						alt='' />
					<Image 
						src={Student4}
						width={489}
						height={128}
						alt='' />
					<Image 
						src={Student5}
						width={489}
						height={128}
						alt='' />
					<Image 
						src={Student6}
						width={489}
						height={128}
						alt='' />
					<Image 
						src={Student7}
						width={489}
						height={128}
						alt='' />
					<Image 
						src={Student8}
						width={489}
						height={128}
						alt='' />
				</div>
			</div>
		</SidebarLayout>
	);
};

export default TeachersPage;

