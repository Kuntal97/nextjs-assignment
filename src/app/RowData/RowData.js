import React from "react";
import { RiFileDownloadLine } from "react-icons/ri";

function RowData({ date, time, reportName }) {
	return (
		<div>
			<div className="border-b-2 w-full flex text-sm py-2 px-6">
				<div className=" w-2/12">
					{date}
					<br /> <span>{time}</span>
				</div>
				<div className=" w-8/12">{reportName}</div>
				<div className=" flex justify-center items-center w-2/12">
					<RiFileDownloadLine size={24} opacity={0.6} />
				</div>
			</div>
		</div>
	);
}

export default RowData;
