import React from "react";
import Header from "../components/Customer/Header";
import Hero from "../components/Customer/Hero";

import UserList from "../components/Customer/UserList";
import Pagination from "../components/Customer/Pagination";

export default function Customer() {
	return (
		<div className="p-6 w-full">
			<Header />
			<main className="mt-6 flex w-full gap-6">
				{/* hero */}
				<div className="w-4/5 flex flex-col gap-4">
					<Hero />

					{/* user list */}
					<UserList />

					{/* user pagination */}
					<Pagination />
				</div>

				<div className="w-1/5">
					<div className="bg-blue-500 p-4 h-1/3 text-white rounded-xl flex flex-col justify-between">
						<h1 className="text-xl">See analytics of the Customer Clearly</h1>
						<button className="flex items-center gap-3 py-3 px-4 bg-opacity-30 rounded-xl bg-white w-fit">
							See Analytics
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
