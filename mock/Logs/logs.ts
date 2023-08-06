function getRandomDate(start: Date, end: Date) {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	).toLocaleDateString();
}


export function createLogsRows(): any[] {
	const rows = [];
	for (let i = 1; i < 500; i++) {
		rows.push({
			id: i,
			name: `Task ${i}`,
			complete: Math.min(100, Math.round(Math.random() * 110)),
			priority: ['Critical', 'High', 'Medium', 'Low'][Math.floor(Math.random() * 3 + 1)],
			issueType: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor(Math.random() * 3 + 1)],
			startDate: getRandomDate(new Date(2015, 3, 1), new Date()),
			completeDate: getRandomDate(new Date(), new Date(2016, 0, 1))
		});
	}

	return rows;
}
