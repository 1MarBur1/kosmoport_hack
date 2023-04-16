import Props from './LoginLayout.props';
import Logo from '@components/common/Logo';

import LoginImage from '@assets/loginImage.png';
import Image from 'next/image';

const LoginLayout: React.FC<Props> = ({ children, className = '', ...props }) => {
	return (
		<section className={className + ' grid grid-cols-2'} {...props}>
			<div className='pl-28 pt-16'>
				<Logo />
				<div>
					{children}
				</div>
			</div>
			<Image
				src={LoginImage}
				width={720}
				height={228}
				alt='' />
		</section>
	);
};

export default LoginLayout;
