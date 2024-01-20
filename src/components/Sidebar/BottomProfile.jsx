import React from "react";

import { PiSignOut } from "react-icons/pi";

export default function BottomProfile() {
	return (
		<div className="border-t p-6 font-normal text-gray-600">
			<div className="flex gap-4 items-center">
				<figure className="w-11 h-11 bg-gray-200 rounded-full"></figure>
				<div>
					<h1 className="text-lg font-medium ">Satya M</h1>
					<p className="text-xs text-gray-400">Frontend Web Dev</p>
				</div>
			</div>
			<button className="bg-gray-100 mt-6 p-2 rounded-xl w-full flex items-center gap-2 justify-center">
				<PiSignOut className="rotate-180 text-xl" />
				Logout
			</button>
		</div>
	);
}
