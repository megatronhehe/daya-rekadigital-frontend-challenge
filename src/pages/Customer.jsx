import React from "react";
import Header from "../components/Customer/Header";
import Hero from "../components/Customer/Hero";

import { PiCaretUpDown } from "react-icons/pi";
import UserList from "../components/Customer/UserList";

export default function Customer() {
	return (
		<div className="p-6 w-full">
			<Header />
			<main className="mt-6 flex w-full gap-6">
				{/* hero */}
				<div className="w-5/6">
					<Hero />

					{/* table header */}
					<div className="grid grid-cols-5 mt-4 px-4 py-2 gap-4 bg-gray-100 text-gray-400">
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
				</div>
				<div className="w-1/6">
					<div>a</div>
				</div>
			</main>
		</div>
	);
}
