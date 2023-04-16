import Button from '@/components/common/Button';
import { Props } from './CourseCard.props';
import Student from '@/assets/course_example.svg';

const CourseCard: React.FC<Props> = ({ teacher, times, title, goToCourse }) => {
	return (
		<div
			style={{
				boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.03)',
			}}
			className='px-4 py-4 rounded-xl inline-block '
		>
			<div className='flex gap-4'>
				<div>
					<div className='flex gap-2'>
						{times?.map((time, index: number) => (
							<>
								<p key={index} className='text-BodyText_14 text-green'>
									{time}
								</p>

								{index !== times.length-1 && (
									<p className='text-BodyText_14 text-grey2'>
										•
									</p>
								)}
							</>
						))}
					</div>
					<p className='text-heading-2 mt-4'>
						{title}
					</p>
					<p className='text-BodyText_14 -mt-1 text-violet'>
						{teacher}
					</p>

					<Button color='primary' onClick={goToCourse} variant='filled' className='w-2/3 h-[46px] mt-4'>
						Подробнее
					</Button>
				</div>

				<Student />
			</div>
		</div>
	);
};

export default CourseCard;
