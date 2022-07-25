import React from 'react';

import { Stacked as StackedChart } from '../../components';

const ChartsHeader: React.FC<{category: string; title: string}> = ({
	category,
	title
}) => (
	<div className=' mb-10'>
		<div>
			<p className='text-lg text-gray-400'>Chart</p>
			<p className='text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900'>
				{category}
			</p>
		</div>
		<p className='text-center dark:text-gray-200 text-xl mb-2 mt-3'>{title}</p>
	</div>
);

const Stacked: React.FC = () => (
	<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
		<ChartsHeader category='Stacked' title='Revenue Breakdown' />
		<div className='w-full'>
			<StackedChart />
		</div>
	</div>
);

export default Stacked;
