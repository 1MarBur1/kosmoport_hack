import Image from 'next/image';
import Props from './teacherCard.props';
import Serega from '@/assets/teachers/serega.svg';

const TeacherCard: React.FC<Props> = ({ fio, phone, email, avatar, courses, ...props }) => {
	return (
		<button
			className='bg-white rounded-[20px]'
			style={{
				boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.03)',
			}}
			{...props}
		>
			<div className='p-[20px] min-w-[489px] flex mb-4 justify-between'>
				<div>
					<Image
						width={80}
						height={80}
						className='rounded-[100px] object-cover'
						alt=''
						src={Serega.src} />
				</div>
				<div className='text-left'>
					<div className='flex w-full gap-1'>
						<p className='text-BodyText_14'>
							{phone}
						</p>
						<p className='text-violet text-BodyText_14'>
							•
						</p>
						<p className='text-BodyText_14'>
							{email}
						</p>
					</div>
					<p className='text-heading-2'>
						{fio}
					</p>
					<div className='text-BodyText_14 flex gap-1.5'>
						{courses.map((course, index: number) => (
							<>
								<p key={index} className='text-grey3'>
									{course}
								</p>

								{index !== courses.length-1 && (
									<p className='text-grey3'>
										•
									</p>
								)}
							</>
						))}
					</div>
				</div>
			</div>
		</button>
	);
};

export default TeacherCard;
