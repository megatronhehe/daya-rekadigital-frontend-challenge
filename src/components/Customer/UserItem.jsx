import React from "react";

import { PiPencilSimpleLine, PiTrash, PiInfo } from "react-icons/pi";
import { convertToCommas } from "../../utils/convertToCommas";
import { decideLevelStyle } from "../../utils/decideLevelStyle";

export default function UserItem({ user }) {
	const levelStyle = decideLevelStyle(user.level);

	return (
		<li key={user.name} className="px-4 grid grid-cols-5 py-2">
			<div className="flex items-center">{user.name}</div>
			<div
				className={`flex items-center w-fit px-4 text-sm font-medium ${levelStyle}`}
			>
				{user.level}
			</div>
			<div className="flex items-center">{user.favMenu}</div>
			<div className="flex items-center">
				IDR {convertToCommas(user.totalTransaction)}
			</div>
			<div className="flex gap-2">
				<button className="flex flex-grow items-center justify-center gap-2 bg-gray-50 py-2 px-3 rounded-lg">
					<PiInfo />
					detail
				</button>
				<button className="bg-gray-50 py-2 px-3 rounded-lg">
					<PiPencilSimpleLine />
				</button>
				<button className="bg-gray-50 text-red-400 py-2 px-3 rounded-lg">
					<PiTrash />
				</button>
			</div>
		</li>
	);
}
