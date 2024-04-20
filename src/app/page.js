import { MdOutlineFilterAlt } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiFileDownloadLine } from "react-icons/ri";
import { PiNumberSquareOneLight } from "react-icons/pi";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function Home() {
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
						<div className="border-b-2 w-full flex text-sm py-2 px-6">
							<div className=" w-2/12">
								22.07.2021
								<br /> <span>14:05</span>
							</div>
							<div className=" w-8/12">
								APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021.csv
							</div>
							<div className=" flex justify-center items-center w-2/12">
								<RiFileDownloadLine size={24} opacity={0.6} />
							</div>
						</div>
						<div className="border-b-2 w-full flex text-sm py-2 px-6">
							<div className="w-2/12">
								22.07.2021 <br /> <span>14:05</span>
							</div>
							<div className=" w-8/12">
								APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021.csv
							</div>
							<div className=" flex justify-center items-center w-2/12">
								<RiFileDownloadLine size={24} opacity={0.6} />
							</div>
						</div>
						<div className=" border-b-2 w-full flex text-sm py-2 px-6">
							<div className=" w-2/12">
								22.07.2021 <br /> <span>14:05</span>
							</div>
							<div className=" w-8/12">
								APP_URL_USAGE_(Exclude_Half_Days)_3_6_2021.csv
							</div>
							<div className="flex justify-center items-center w-2/12">
								<RiFileDownloadLine size={24} opacity={0.6} />
							</div>
						</div>
					</div>

					<div className=" w-full border-t-2 flex items-center justify-center gap-40 px-6 py-4">
						<div className="flex gap-2">
							<button className="flex items-center text-sm gap-1">
								<GrPrevious size={14} />
								Prev
							</button>
							<div className="flex">
								<PiNumberSquareOneLight size={30} />
								<PiNumberSquareOneLight size={30} />
								<PiNumberSquareOneLight size={30} />
								<PiNumberSquareOneLight size={30} />
								<PiNumberSquareOneLight size={30} />
							</div>
							<button className="flex items-center text-sm gap-1">
								Next
								<GrNext size={14} />
							</button>
						</div>
						<div className="flex gap-4">
							<span className="text-sm">Rows per page</span>
							<select className="rounded-sm text-sm border" name="" id="">
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
							</select>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
