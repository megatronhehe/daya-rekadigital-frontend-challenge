import React from "react";
import Header from "../components/Customer/Header";
import Hero from "../components/Customer/Hero";

import UserList from "../components/Customer/UserList";
import Pagination from "../components/Customer/Pagination";
import AnalyticsCard from "../components/Customer/AnalyticsCard";
import TopMenu from "../components/Customer/TopMenu";

export default function Customer() {
	return (
		<div className="p-6 w-full">
			<Header />
			<main className="mt-6 flex flex-col xl:flex-row w-full gap-6">
				{/* hero */}
				<div className="xl:w-4/5 flex flex-col gap-4">
					<Hero />

					{/* user list */}
					<UserList />

					{/* user pagination */}
					<Pagination />
				</div>

				<div className="xl:w-1/5 flex flex-col gap-6">
					{/* analytics cacrd */}
					<AnalyticsCard />

					{/* top menu */}
					<TopMenu />
				</div>
			</main>
		</div>
	);
}
