import Props from './LoginLayout.props';
//import Logo from '@components/common/Logo';

import LoginImage from '@/assets/loginImage.svg';

const LoginLayout: React.FC<Props> = ({ children, className = '', ...props }) => {
	return (
		<section className={className + ' flex'} {...props}>
			<div className='pl-28 pt-16 flex justify-center items-center w-full'>
				{/*<Logo />*/}
				<div>
					{children}
				</div>
			</div>
			<LoginImage className='h-full w-full' />
		</section>
	);
};

export default LoginLayout;
