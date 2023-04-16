import Section1 from '@/assets/landing/section1.svg';
import Button from '@/components/common/Button';
import Course1 from '@/assets/landing/courseCard1.svg';
import Course2 from '@/assets/landing/courseCard2.svg';
import Course3 from '@/assets/landing/courseCard3.svg';
import Course4 from '@/assets/landing/courseCard4.svg';
import Teacher1 from '@/assets/teachers/1.png';
import Teacher2 from '@/assets/teachers/2.png';
import Teacher3 from '@/assets/teachers/3.png';
import Teacher4 from '@/assets/teachers/4.png';
import Image from 'next/image';
import Footer from '@/assets/landing/footer.png';
import WhiteLogo from '@/assets/landing/white_logo.svg';
import Link from 'next/link';

const HomePage = (): JSX.Element => {
	return (
		<div>
			<section>
				<Section1 className='absolute right-0 -z-1 top-0' />
			</section>
			<section className='ml-[120px] mt-[956px]'>
				<h1 className='text-heading-1 text-[62px]'>
					Курсы
				</h1>
				<div className='flex flex-col mt-[36px]'>
					<div className='flex mb-[22px]'>
						<Course1 className='mr-[22px]' />
						<Course2 />
					</div>
					<div className='flex'>
						<Course3 className='mr-[22px]' />
						<Course4 />
					</div>
				</div>
				<Button
					variant='filled'
					color='black'
					className='w-[366px] h-[66px] mt-[22px] ml-[417px]'
				>
					<Link href={'/'}>
						Записаться на курс!
					</Link>
				</Button>
			</section>
			<section className='ml-[120px] mt-[67px]'>
				<h1 className='text-heading-1 text-[62px]'>
					Преподаватели
				</h1>
				<div className='flex flex-col mt-[36px]'>
					<div className='flex mb-[22px]'>
						<Image 
							src={Teacher1}
							width={597}
							height={156}
							alt='' 
							className='mr-[22px]' />
						<Image 
							src={Teacher2}
							width={597}
							height={156}
							alt='' />
					</div>
					<div className='flex'>
						<Image 
							src={Teacher3}
							width={597}
							height={156}
							alt='' 
							className='mr-[22px]' />
						<Image 
							src={Teacher4}
							width={597}
							height={156}
							alt='' />
					</div>
				</div>
			</section>
			<section className='mt-[88px]'>
				<Image
					src={Footer}
					alt=''
					width={1440}
					height={955} />
			</section>
			<section className='w-[1440px] h-[227] bg-[#332E2D]'>
				<div className='flex align-middle py-[115px]'>
					<WhiteLogo className='ml-[120px]' />
					<Button
						variant='filled'
						color='black'
						className='w-[298px] h-[66px] ml-[715px]'
					>
						<Link href={'/'}>
							Записаться на курс!
						</Link>
					</Button>
				</div>
			</section>
		</div>
	);
};

export default HomePage;

