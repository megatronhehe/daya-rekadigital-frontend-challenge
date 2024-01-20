import React from "react";
import Header from "../components/Customer/Header";
import Hero from "../components/Customer/Hero";

export default function Customer() {
	return (
		<div className="p-6 w-full">
			<Header />
			<main className="mt-6 flex w-full gap-6">
				{/* hero */}
				<div className="w-5/6">
					<Hero />
				</div>
				<div className="w-1/6">
					<div>a</div>
				</div>
			</main>
		</div>
	);
}
