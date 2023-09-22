import { ColDef, ICellRendererParams } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';
import PoliciesChip from '~/components/Tables/AlertsTable/PoliciesChip';

type Props = {
	initialRows: any[];
};

const defaultColumns: ColDef[] = [
	{ field: 'name', headerName: 'Name' },
	{ field: 'startTime', headerName: 'Start Time' },
	{ field: 'result', headerName: 'Results' },
	{ field: 'duration', headerName: 'Duration' },
	{
		field: 'policies',
		headerName: 'Policies',
		cellRenderer: (props: ICellRendererParams) => {
			console.log(props);
			return (
				// const fetcher = useFetcher();
				<div className="flex content-center justify-around">
					<PoliciesChip value={props.value} />
				</div>
			);
		}
	}
];

const AlertsTable = ({ initialRows }: Props) => {
	const defaultColDef = {
		flex: 1,
		resizable: true,
		filter: true,
		sortable: true
	};

	return (
		<AgGridReact
			rowHeight={70}
			rowData={initialRows} // use signal
			columnDefs={defaultColumns} // no signal
			rowSelection="single"
			defaultColDef={defaultColDef}
		/>
	);
};

export default AlertsTable;
