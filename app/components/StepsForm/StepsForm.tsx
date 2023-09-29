import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import DynamicForm from '~/components/DynamicForm/DynamicForm';

type Item = {
	title: string;
	subtitle: string;
	number: number;
};

type Props = {
	phases: Item[];
};

const StepsForm = ({ phases = [] }: Props) => {
	const [current, setCurrent] = useState(0);
	const borderStyle = (isCurrent: boolean) => (isCurrent ? 'border-solid border-2 border-purple-300' : '');
	const bgStyle = (isPastCurrent: boolean) => (isPastCurrent ? 'bg-purple-400' : 'bg-zinc-100');

	return (
		<div className="flex w-full flex-wrap place-items-center">
			{phases.map((item, index, arr) => (
				<React.Fragment key={item.title}>
					<button type="button" className="flex pointer-curser" onClick={() => setCurrent(index)}>
						<span
							className={`${bgStyle(index < current)} flex justify-center items-center min-h-[2.65rem] min-w-[2.65rem] rounded-full ${borderStyle(index === current)}`}
						>
							{
								index >= current ? (index + 1) : <TiTick color="white" size="1.5rem" />
							}
						</span>
						<span className="ml-3 flex flex-col">
							<span className="font-bold whitespace-nowrap">{item.title}</span>
							<span className="text-zinc-400 whitespace-nowrap">{item.title}</span>
						</span>
					</button>
					{arr.length !== index + 1 && <div className="h-[0.2rem] w-[0.0625rem] bg-indigo-500 flex-1 mx-2" />}
				</React.Fragment>
			))}
			<DynamicForm fields={phases[current].form} />
		</div>
	);
};

export default StepsForm;
