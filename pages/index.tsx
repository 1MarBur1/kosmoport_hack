import Logo from '@/components/common/Logo';

const Landing = (): JSX.Element => {
	return (
		<div>
			<section className='ml-[121px]'>
				<div>
					<div className='mt-[41px]'>
						<Logo />
						<p className='font-semibold text-[40px] mt-[151px]'>
							Поздравляю!
						</p>
						<p className='font-bold text-[58px]'>
							вы попали в компанию 
							<span className='text-primary'>
								<br />
								по-настоящему
								<br />
							</span> 
							масштабных проектов
						</p>
						<div className='flex'>
							<div className='mr-[65px]'>
								<p className='font-bold text-[90px]'>
									100
								</p>
								<p className='font-semibold text-[22px] text-[#767676]'>
									Самых заряженных
									<br />
									сотрудников
								</p>
							</div>
							<div>
								<p className='font-bold text-[90px]'>
									25
								</p>
								<p className='font-semibold text-[22px] text-[#767676]'>
									Масштабнейших,
									<br />
									всероссийских проектов
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Landing;
