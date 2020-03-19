import React from 'react';
import './RagReport.scss';
import { rowsData } from './RagReport.data';

const RagReport = ({ ragReportData }) => {
	console.log(rowsData);

	const getStyle = data => {
		if (data < 25) {
			return {
				background: `linear-gradient(to bottom, rgb(255, 128, 0, 0.8), ${data}%, rgb(255, 0, 0, 0.8)` // orange to red
			};
		} else if ((data >= 25) & (data < 50)) {
			return {
				background: `linear-gradient(to bottom, rgb(255, 255, 0, 0.8), ${data}%, rgb(255, 128, 0, 0.8)` // yellow to orange
			};
		} else if ((data >= 50) & (data < 75)) {
			return {
				background: `linear-gradient(to bottom, rgb(128, 255, 0, 0.8), ${data}%, rgb(255, 255, 0, 0.8)` // light green to yellow
			};
		} else if ((data >= 75) & (data <= 100)) {
			return {
				background: `linear-gradient(to bottom, rgb(0, 128, 0, 0.8), ${data}%, rgb(128, 255, 0, 0.8)` // green to light green
			};
		}
	};

	return (
		<>
			<h2>RAG Report</h2>
			<div className='num-grid-container'>
				{/* outer map - loops through rowsData array of objects */}
				{rowsData.map((rowData, i) =>
					// inner map - loops through row array within rowsData object if object is in array index 0
					i === 0
						? rowData.row.map((data, index) => (
								<div key={index}>
									<div className='num-grid-cell num'>{data}</div>
								</div>
						  ))
						: // inner map - loops through row array within each rowsData object
						  rowData.row.map((data, index) => (
								<div key={index}>
									{index === 0 ? (
										<div className='num-grid-cell num'>{data}</div>
									) : (
										<div className='num-grid-cell' style={getStyle(data)}>
											{data}%
										</div>
									)}
								</div>
						  ))
				)}
			</div>
		</>
	);
};

export default RagReport;
