"use client";
import { MdOutlineFilterAlt } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiNumberSquareOneLight } from "react-icons/pi";
import { GrPrevious, GrNext } from "react-icons/gr";
import RowData from "../RowData/RowData";
import { useState } from "react";

// Define the Home component
export default function Home() {
	// Use useState hook to manage state
	const [currentPage, setCurrentPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(3);

	const rowData = [
		{
			date: "22.07.2021",
			time: "14:05",
			reportName: "APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021.csv",
		},
		{ date: "23.07.2021", time: "15:20", reportName: "REPORT_2021_Q2.csv" },
		{
			date: "24.07.2021",
			time: "11:45",
			reportName: "SALES_REPORT_JULY_2021.csv",
		},
		{
			date: "25.07.2021",
			time: "10:30",
			reportName: "MONTHLY_FINANCIAL_STATEMENT.csv",
		},
		{
			date: "26.07.2021",
			time: "09:15",
			reportName: "EMPLOYEE_TIMESHEETS_JULY_2021.csv",
		},
	];

	const totalPages = Math.ceil(rowData.length / rowsPerPage);

	const handlePrevPage = () => {
		setCurrentPage(currentPage - 1);
	};

	const handleNextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const handleChangeRowsPerPage = (e) => {
		setRowsPerPage(parseInt(e.target.value));
		setCurrentPage(0);
	};

	const startIndex = currentPage * rowsPerPage;
	const endIndex = startIndex + rowsPerPage;
	const currentRows = rowData.slice(startIndex, endIndex);

	return (
		<main>
			<div className="w-full h-screen flex items-center justify-center text-slate-600 bg-slate-200">
				<div className="w-1/2 h-3/4 flex items-start  flex-col overflow-hidden shadow-lg rounded-lg bg-white">
					<div className=" border-b-2 w-full flex items-center justify-center px-6 py-4">
						<h3 className="w-full flex justify-center font-semibold ml-12">
							Recently Generated Reports
						</h3>
						<div className="flex gap-4">
							<span>
								<MdOutlineFilterAlt opacity={0.6} size={20} />
							</span>
							<span>
								<IoIosCloseCircleOutline opacity={0.6} size={20} />
							</span>
						</div>
					</div>

					<div className="border-b-2 w-full  flex text-sm py-1 px-6">
						<div className=" w-2/12">Date</div>
						<div className=" w-8/12">Report Name</div>
						<div className=" flex justify-center w-2/12">Download</div>
					</div>
					<div className="w-full h-screen">
						{currentRows.map((data, index) => (
							<RowData
								key={index}
								date={data.date}
								time={data.time}
								reportName={data.reportName}
							/>
						))}
					</div>

					<div className=" w-full border-t-2 flex items-center justify-center gap-40 px-6 py-4">
						<div className="flex gap-2">
							<button
								className="flex items-center text-sm gap-1"
								disabled={currentPage === 0}
								onClick={handlePrevPage}>
								<GrPrevious size={14} />
								Prev
							</button>
							<div className="flex">
								{Array.from({ length: totalPages }).map((_, index) => (
									<PiNumberSquareOneLight
										key={index}
										size={30}
										style={{
											cursor: "pointer",
											opacity: index === currentPage ? 1 : 0.6,
										}}
										onClick={() => setCurrentPage(index)}
									/>
								))}
							</div>
							<button
								className="flex items-center text-sm gap-1"
								disabled={currentPage === totalPages - 1}
								onClick={handleNextPage}>
								Next
								<GrNext size={14} />
							</button>
						</div>
						<div className="flex gap-4">
							<span className="text-sm">Rows per page</span>
							<select
								className="rounded-sm text-sm border"
								value={rowsPerPage}
								onChange={handleChangeRowsPerPage}>
								<option value="3">3</option>
								<option value="5">5</option>
								<option value="10">10</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
