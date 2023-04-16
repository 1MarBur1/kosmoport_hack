
import SidebarLayout from '@layouts/SidebarLayout';
import Image from 'next/image';
import Teacher1 from '@/assets/teachers/1.png';
import Teacher2 from '@/assets/teachers/2.png';
import Teacher3 from '@/assets/teachers/3.png';
import Teacher4 from '@/assets/teachers/4.png';
import Teacher5 from '@/assets/teachers/5.png';
import Teacher6 from '@/assets/teachers/6.png';
import Teacher7 from '@/assets/teachers/7.png';
import Teacher8 from '@/assets/teachers/8.png';

const TeachersPage = (): JSX.Element => {
	return(
		<SidebarLayout className='px-20 pt-14'>
			<h1 className='font-bold text-4xl mb-[8px]'>
				Коллеги
			</h1>
			<div className='grid grid-cols-[1fr_auto]'>
				<div className='flex flex-col mt-[26px]'>
					<div className='flex flex-wrap gap-[17px]'>
						<Image 
							src={Teacher1}
							width={489}
							height={128}
							alt='' />
						<Image 
							src={Teacher2}
							width={489}
							height={128}
							alt='' />
						<Image 
							src={Teacher3}
							width={489}
							height={128}
							alt='' />
						<Image 
							src={Teacher4}
							width={489}
							height={128}
							alt='' />
						<Image 
							src={Teacher5}
							width={489}
							height={128}
							alt='' />
						<Image 
							src={Teacher6}
							width={489}
							height={128}
							alt='' />
						<Image 
							src={Teacher7}
							width={489}
							height={128}
							alt='' />
						<Image 
							src={Teacher8}
							width={489}
							height={128}
							alt='' />
					</div>
				</div>
			</div>
		</SidebarLayout>
	);
};

export default TeachersPage;
