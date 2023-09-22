import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { ClientOnly } from 'remix-utils';
import { GraphMetadata } from '~/types';
import { graphsMock } from '../../../mock';

interface Props {
	graphsData: null | GraphMetadata[];
}

const RenderChartsClient = ({ graphsData }: Props) => (
	<ClientOnly fallback="">
		{() => (
			<div className="grid gap-4 grid-cols-4">
				{(graphsData || graphsMock.defaultGraphs(echarts)).map(({ title, options, classNames, _id }) => (
					<div key={_id} className={`drop-shadow-[0_8px_5px_rgba(0,0,0,0.15)] p-3 ${classNames} bg-gray-200 rounded-2xl`}>
						<ReactEcharts option={options} />
					</div>
				))}
			</div>
		)}
	</ClientOnly>
);

export default RenderChartsClient;
