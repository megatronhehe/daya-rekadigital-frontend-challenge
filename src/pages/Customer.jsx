import React from "react";
import Header from "../components/Customer/Header";

export default function Customer() {
	return (
		<div className="p-6 w-full">
			<Header />
			<main className="mt-6 flex w-full gap-6">
				<div className="w-5/6">
					<div className="bg-blue-500 rounded-xl text-white p-4">
						<h2 className="text-xl">Customer</h2>
					</div>
				</div>
				<div className="w-1/6">
					<div>a</div>
				</div>
			</main>
		</div>
	);
}
