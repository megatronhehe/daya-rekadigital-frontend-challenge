import React from "react";
import {
	PiPlusBold,
	PiFunnel,
	PiArrowsClockwise,
	PiPrinter,
	PiCircle,
} from "react-icons/pi";

export default function Hero() {
	return (
		<>
			<div className="bg-blue-500 rounded-xl text-white p-4 text-sm flex flex-col gap-3">
				{/* text and description */}
				<h2 className="text-xl">Customer</h2>

				<p>On this menu you will be able to create, edit, and also delete</p>
				<p>the customer. Also you can manage it easily.</p>

				{/* interactivity */}
				<div className="flex text-base mt-2 gap-4">
					<button className="flex items-center gap-3 px-4 bg-opacity-30 rounded-xl bg-white">
						<PiPlusBold />
						Add New Customer
					</button>

					<form className="bg-white rounded-xl flex items-center justify-end flex-grow p-1 gap-1">
						<input
							type="text"
							className="w-full px-4 h-full rounded-lg placeholder-gray-300"
							placeholder="O        Search Customer"
						/>
						<button className=" bg-blue-500 px-4 h-full  rounded-lg">
							Search
						</button>
					</form>

					<button className="flex items-center gap-3 px-4 bg-opacity-30 rounded-xl bg-white">
						<PiFunnel className="text-2xl" />
						Filter
					</button>

					<button className="flex items-center gap-3 px-4 bg-opacity-30 rounded-xl bg-white">
						<PiArrowsClockwise className="text-2xl" />
						Refresh
					</button>

					<button className="gap-3 p-4 text-xl bg-opacity-30 rounded-xl aspect-square bg-white">
						<PiPrinter />
					</button>
				</div>
			</div>
		</>
	);
}
