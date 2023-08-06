function getRandomDate(start: Date, end: Date) {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	).toLocaleDateString();
}

export function createAlertRows(): any[] {
	const rows = [];
	for (let i = 1; i < 100; i++) {
		rows.push({
			name: `Task ${i}`,
			startTime: getRandomDate(new Date(2015, 3, 1), new Date()),
			result: ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor(Math.random() * 3 + 1)],
			duration: Math.min(100, Math.round(Math.random() * 110)),
			policies: ['Critical', 'High', 'Medium', 'Low'][Math.floor(Math.random() * 3 + 1)],
		});
	}

	return rows;
};
