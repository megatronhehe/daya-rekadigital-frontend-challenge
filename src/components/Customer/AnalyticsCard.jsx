import React from "react";

export default function AnalyticsCard() {
	return (
		<div className="bg-blue-500 p-4 h-1/3 text-white rounded-xl flex flex-col justify-between">
			<h1 className="text-xl">See analytics of the Customer Clearly</h1>
			<button className="flex mt-4 sm:mt-0 self-end sm:self-start items-center gap-3 py-3 px-4 bg-opacity-30 rounded-xl bg-white w-fit">
				See Analytics
			</button>
		</div>
	);
}
