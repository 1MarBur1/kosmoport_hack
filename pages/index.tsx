import TeacherCard from '@/components/teachers/teacherCard';
import Serega from '@/assets/teachers/serega.svg';

const HomePage = (): JSX.Element => {
	return (
		<div>
			<h1>
				Sup!
			</h1>
			<TeacherCard 
				fio='Сергей Шевцов' 
				phone='+7(950)-552-32-83' 
				avatar={Serega} 
				courses={['3D моделирование', 'Arduino']}
				email='pochta@gmail.com' />
		</div>
	);
};

export default HomePage;

