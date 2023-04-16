import { useRouter } from 'next/router';
import { useEffect } from 'react';

const StudentPage = (): JSX.Element => {
	const router = useRouter();

	useEffect(() => {
		router.push('/admin/courses');
	}, [router]);

	return(
		<>
		</>
	);
};

export default StudentPage;

