import Button from '@/components/common/Button';
import { Props } from './StudentCard.props';
import Student from '@/assets/course_example.svg';

const StudentCard: React.FC<Props> = ({ teacher, title, goToCourse }) => {
	return (
		<div
			style={{
				boxShadow: '0px 5px 30px rgba(0, 0, 0, 0.03)',
			}}
			className='px-4 py-4 rounded-xl inline-block '
		>
			<div className='flex gap-4'>
				<div>
					<p className='text-heading-2 mt-4'>
						{title}
					</p>
					<p className='text-BodyText_14 -mt-1 text-violet'>
						{teacher}
					</p>

					<Button color='primary' onClick={goToCourse} variant='filled' className='w-2/3 h-[46px] mt-4'>
						Подтвердить
					</Button>
				</div>

				<Student />
			</div>
		</div>
	);
};

export default StudentCard;
