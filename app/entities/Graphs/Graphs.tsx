import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { ClientOnly } from 'remix-utils';
import { GraphMetadata } from '~/types';
import { graphsMock } from '../../../mock';

interface Props {
	graphsData: null | GraphMetadata[];
}

const RenderChartsClient = ({ graphsData }: Props) => {
	const colorScheme = 'dark';
	const isDark = colorScheme === 'dark';

	return (
		<ClientOnly fallback="">
			{() => (
				<>
					{(graphsData || graphsMock.defaultGraphs(echarts)).map(({ title, options, classNames, _id }) => (
						<div
							key={_id}
							// bg={isDark ? 'dark.5' : 'gray.2'}
							className={`drop-shadow-[0_45px_45px_rgba(0,0,0,0.45)] rounded-2xl ${classNames}`}
						>
							<ReactEcharts option={options} />
						</div>
					))}
				</>
			)}
		</ClientOnly>
	);
};

export default RenderChartsClient;
