import React from "react";
import { PiArrowRight } from "react-icons/pi";

export default function Pagination() {
	return (
		<div className="flex sm:flex-row flex-col justify-between items-center p-2 text-gray-400 bg-gray-100 rounded-xl ">
			<p className="p-2">Showing 10 Data Customers</p>
			<div className="flex text-gray-600 items-center gap-2 flex-grow justify-end h-full">
				<button className="sm:h-full bg-white flex items-center justify-center h-8 aspect-square shadow-sm text-black font-medium rounded-lg">
					1
				</button>
				<button className="sm:h-full h-8 flex items-center justify-center aspect-square">
					2
				</button>
				<button className="sm:h-full h-8 flex items-center justify-center aspect-square">
					3
				</button>
				<button className="sm:h-full h-8 flex items-center justify-center aspect-square">
					...
				</button>
				<button className="sm:h-full h-8 flex items-center justify-center aspect-square">
					38
				</button>
				<button className="sm:h-full h-8 flex items-center justify-center ">
					Next
				</button>
				<button className="sm:h-full h-8 flex items-center justify-center aspect-square">
					<PiArrowRight />
				</button>
			</div>
		</div>
	);
}
