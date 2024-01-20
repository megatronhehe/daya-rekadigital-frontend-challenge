import React from "react";

export default function MenuItem({ item }) {
	const isCustomer = item.name === "Customer";
	const isDashboard = item.name === "Dashboard";

	return (
		<li key={item}>
			<a
				href=""
				className={`flex items-center gap-4 ${
					isCustomer ? "text-blue-500" : ""
				}`}
			>
				<div className="text-xl">{item.icon}</div>
				{item.name}

				{isDashboard && (
					<div className="w-6 ml-6 bg-orange-400 text-xs flex items-center justify-center text-white h-6 rounded-full">
						4
					</div>
				)}
			</a>
		</li>
	);
}
