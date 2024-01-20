import React from "react";
import {
	PiPlusBold,
	PiFunnel,
	PiArrowsClockwise,
	PiPrinter,
	PiMagnifyingGlass,
} from "react-icons/pi";

export default function Hero() {
	return (
		<>
			<div className="bg-blue-500 rounded-xl text-white p-4 text-sm flex flex-col gap-3">
				{/* text and description */}
				<h2 className="text-xl">Customer</h2>

				<p>
					On this menu you will be able to create, edit, and also delete the
					customer. Also you can manage it easily.
				</p>

				{/* interactivity */}
				<div className="flex text-base mt-2 sm:gap-4 gap-2 overflow-auto">
					<button className="flex items-center gap-3 px-4 bg-opacity-30 rounded-xl bg-white">
						<PiPlusBold />
						<p className="sm:block hidden">Add New Customer</p>
					</button>

					<form className="bg-white sm:flex hidden rounded-xl  items-center justify-end flex-grow p-1 gap-1">
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
						<PiMagnifyingGlass />
					</button>

					<button className="flex items-center gap-3 px-4 bg-opacity-30 rounded-xl bg-white">
						<PiFunnel className="text-2xl" />
						<p className="sm:block hidden">Filter</p>
					</button>

					<button className="flex items-center gap-3 px-4 bg-opacity-30 rounded-xl bg-white">
						<PiArrowsClockwise className="text-2xl" />
						<p className="sm:block hidden">Refresh</p>
					</button>

					<button className="gap-3 p-4 text-xl bg-opacity-30 rounded-xl aspect-square bg-white">
						<PiPrinter />
					</button>
				</div>
			</div>
		</>
	);
}
