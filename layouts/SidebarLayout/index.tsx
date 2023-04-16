import Sidebar from '../Sidebar';
import Props from './SidebarLayout.props';

const SidebarLayout: React.FC<Props> = ({ children, className = '', ...props }) => {
	return (
		<div className='h-screen flex' {...props}>
			<Sidebar />
			<div className={className + ' h-screen w-full overflow-y-auto'}>
				{children}
			</div>
		</div>
	);	
};

export default SidebarLayout;
