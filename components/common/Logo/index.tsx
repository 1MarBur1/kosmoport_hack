import Link from 'next/link';
import Props from './Logo.props';

import LogoIcon from '@/assets/logo.svg';

const Logo: React.FC<Props> = ({ className = '' }) => {
	return (
		<LogoIcon className={className} />
	);
};

export default Logo;
