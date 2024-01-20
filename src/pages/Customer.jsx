import React from "react";
import Header from "../components/Customer/Header";
import Hero from "../components/Customer/Hero";

import { PiArrowRight, PiCaretUpDown } from "react-icons/pi";
import UserList from "../components/Customer/UserList";

export default function Customer() {
	return (
		<div className="p-6 w-full">
			<Header />
			<main className="mt-6 flex w-full gap-6">
				{/* hero */}
				<div className="w-5/6 flex flex-col gap-4">
					<Hero />

					{/* table header */}
					<div className="grid grid-cols-5 px-4 py-2 gap-4 bg-gray-100 text-gray-400">
						<div className="flex justify-between items-center">
							Customer Name <PiCaretUpDown />
						</div>
						<div className="flex justify-between items-center">
							Level <PiCaretUpDown />
						</div>
						<div className="flex justify-between items-center">
							Favorite Menu <PiCaretUpDown />
						</div>
						<div className="flex justify-between items-center">
							Total Transaction <PiCaretUpDown />
						</div>
						<div>Action</div>
					</div>

					{/* user list */}
					<UserList />

					{/* user pagination */}
					<div className="flex justify-between items-center p-2 text-gray-400 bg-gray-100 rounded-xl ">
						<p className="p-2">Showing 7 Data Customers</p>
						<div className="flex text-gray-600 items-center gap-2 flex-grow justify-end h-full">
							<button className="h-full bg-white flex items-center justify-center aspect-square shadow-sm text-black font-medium rounded-lg">
								1
							</button>
							<button className="h-full flex items-center justify-center aspect-square">
								2
							</button>
							<button className="h-full flex items-center justify-center aspect-square">
								3
							</button>
							<button className="h-full flex items-center justify-center aspect-square">
								...
							</button>
							<button className="h-full flex items-center justify-center aspect-square">
								38
							</button>
							<button className="h-full flex items-center justify-center ">
								Next
							</button>
							<button className="h-full flex items-center justify-center aspect-square">
								<PiArrowRight />
							</button>
						</div>
					</div>
				</div>
				<div className="w-1/6">
					<div>a</div>
				</div>
			</main>
		</div>
	);
}
