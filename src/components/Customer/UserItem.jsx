import React from "react";

import {
	PiPencilSimpleLine,
	PiTrash,
	PiInfo,
	PiHeartFill,
	PiMoneyFill,
} from "react-icons/pi";
import { convertToCommas } from "../../utils/convertToCommas";
import { decideLevelStyle } from "../../utils/decideLevelStyle";

export default function UserItem({ user }) {
	const levelStyle = decideLevelStyle(user.level);

	return (
		<>
			{/* bentuk list item */}
			<li key={user.name} className="px-4 sm:grid hidden  grid-cols-5 py-2">
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

			{/* bentuk card */}
			<li
				key={user.name}
				className="px-4 sm:hidden py-2 w-full justify-between border-b mb-4"
			>
				<div className="flex relative flex-col">
					<div className="flex items-center font-medium">{user.name}</div>
					<div className="flex items-center gap-2">
						<PiHeartFill className="text-red-300 " /> {user.favMenu}
					</div>
					<div className="flex items-center gap-2 ">
						<PiMoneyFill className="text-green-400" /> IDR{" "}
						{convertToCommas(user.totalTransaction)}
					</div>

					{/* action */}
					<div className="flex gap-2 place-self-end">
						<button className="flex items-center justify-center gap-2 bg-gray-50 py-2 px-3 rounded-lg">
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

					<div
						className={`absolute right-0 flex items-center w-fit px-4 text-sm font-medium h-fit py-2 ${levelStyle}`}
					>
						{user.level}
					</div>
				</div>
			</li>
		</>
	);
}

{
	/* <div
					className={`flex items-center w-fit px-4 text-sm font-medium h-fit py-2 ${levelStyle}`}
				>
					{user.level}
				</div> */
}
