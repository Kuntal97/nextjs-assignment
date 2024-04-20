"use client";
import { MdOutlineFilterAlt } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GrPrevious, GrNext } from "react-icons/gr";
import RowData from "../RowData/RowData";
import { useState } from "react";

export default function Home() {
	const [currentPage, setCurrentPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(3);

	const rowData = [
		{
			date: "22.07.2021",
			time: "14:05",
			reportName: "APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021.csv",
		},
		{
			date: "23.07.2021",
			time: "15:20",
			reportName: "REPORT_2021_Q2.csv",
		},
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
		{
			date: "27.07.2021",
			time: "08:00",
			reportName: "REPORT_2021_Q3.csv",
		},
		{
			date: "28.07.2021",
			time: "09:30",
			reportName: "SALES_REPORT_AUGUST_2021.csv",
		},
		{
			date: "29.07.2021",
			time: "10:45",
			reportName: "ANNUAL_FINANCIAL_REPORT.csv",
		},
		{
			date: "30.07.2021",
			time: "11:20",
			reportName: "EMPLOYEE_TIMESHEETS_AUGUST_2021.csv",
		},
		{
			date: "31.07.2021",
			time: "12:15",
			reportName: "MONTHLY_SALES_SUMMARY.csv",
		},
		{
			date: "01.08.2021",
			time: "13:45",
			reportName: "QUARTERLY_REPORT_Q3.csv",
		},
		{
			date: "02.08.2021",
			time: "14:30",
			reportName: "ANNUAL_BUDGET_OVERVIEW.csv",
		},
		{
			date: "03.08.2021",
			time: "15:10",
			reportName: "EMPLOYEE_PERFORMANCE_REVIEW.csv",
		},
		{
			date: "04.08.2021",
			time: "16:00",
			reportName: "MONTHLY_EXPENSES.csv",
		},
		{
			date: "05.08.2021",
			time: "17:20",
			reportName: "PRODUCT_INVENTORY.csv",
		},
		{
			date: "06.08.2021",
			time: "18:15",
			reportName: "QUARTERLY_FINANCIAL_ANALYSIS_Q3.csv",
		},
		{
			date: "07.08.2021",
			time: "19:30",
			reportName: "CUSTOMER_FEEDBACK_SURVEY.csv",
		},
		{
			date: "08.08.2021",
			time: "20:40",
			reportName: "ANNUAL_REVENUE_REPORT.csv",
		},
		{
			date: "09.08.2021",
			time: "21:25",
			reportName: "EMPLOYEE_SALARY_STATEMENT.csv",
		},
		{
			date: "10.08.2021",
			time: "22:10",
			reportName: "MONTHLY_MARKETING_ANALYTICS.csv",
		},
		{
			date: "11.08.2021",
			time: "23:05",
			reportName: "PRODUCT_SALES_REPORT.csv",
		},
		{
			date: "12.08.2021",
			time: "08:30",
			reportName: "QUARTERLY_PROFIT_ANALYSIS_Q3.csv",
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
									<button
										className="border rounded-sm px-2 mx-1 "
										key={index}
										size={30}
										style={{
											cursor: "pointer",
											backgroundColor:
												index === currentPage ? "orange" : "white",
											color: index === currentPage ? "white" : "black",
										}}
										onClick={() => setCurrentPage(index)}>
										{index}
									</button>
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
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
