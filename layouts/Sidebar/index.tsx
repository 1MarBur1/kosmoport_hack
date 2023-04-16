import Props from './Sidebar.props';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

import SidebarItem from '@/components/common/SidebarItem';
import Logo from '@/components/common/Logo';

import { SIDEBAR_ITEMS, SIDEBAR_ITEMS_ADMIN, SIDEBAR_ITEMS_HR, SIDEBAR_ITEMS_DOC } from './Sidebar.config';

const Sidebar: React.FC<Props> = ({ className = '', ...props }) => {
	const router = useRouter();

	const sidebarItems = useMemo(() => {
		if(router.pathname.includes('hr'))
			return SIDEBAR_ITEMS_HR;
		else if(router.pathname.includes('admin'))
			return SIDEBAR_ITEMS_ADMIN;
		else if(router.pathname.includes('doc'))
			return SIDEBAR_ITEMS_DOC;
		else
			return SIDEBAR_ITEMS;
	}, [router]);

	const [spanPadding, setSpanPadding] = useState(0);

	useEffect(() => setInitialSpanPadding(), [router]);

	function setInitialSpanPadding() {
		sidebarItems.forEach((i, num) => {
			if(router.pathname.includes(i.href) || (i.validateEndsWith && router.pathname.endsWith(i.href)))
				setSpanPadding(64 * num);
		});
	}

	return (
		<nav
			className={className
				+ ' h-screen pt-14 pb-[50px] pr-14'}
			{...props}
		>	
			<Logo className='inline-block ml-4' />

			<div className='mt-20'>
				<div
					className='h-16 bg-lightGrey absolute transition-all duration-200'
					style={{ top: spanPadding }}
				></div>
				<div>
					{sidebarItems.map((i, num) => (
						<SidebarItem
							key={num}
							label={i.label}
							href={i.href}
							validateEndsWith={i.validateEndsWith}
							Icon={i.icon}
							colorType={i.colorType}
							onMouseEnter={() => setSpanPadding(64 * num)}
							onMouseLeave={() => setInitialSpanPadding()} />
					))}
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
