import Image from 'next/image';
import Props from './teacherCard.props';

const TeacherCard: React.FC<Props> = ({ fio, phone, email, avatar, courses, ...props }) => {
	return (
		<button
			className='bg-white rounded-[20px]'
			style={{
				boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.03)',
			}}
			{...props}
		>
			<div className='p-[20px] w-[489px]'>
				<div className='flex mb-4 justify-between'>
					<div>
						<Image
							width={80}
							height={80}
							className='rounded-[100px] object-cover'
							alt=''
							src={avatar} />
					</div>
					<div className='flex flex-col'>
						<div className='flex'>
							<p className='text-BodyText_16 text-black text-left'>
								{phone}
							</p>
							<p className='text-BodyText_16 text-black'>
								{email}
							</p>
						</div>
						<p className='text-heading-2 text-black'>
							{fio}
						</p>
						<div className='text-BodyText_16 text-grey2'>
							{courses}
						</div>
					</div>
				</div>
			</div>
		</button>
	);
};

export default TeacherCard;
