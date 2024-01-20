import React from "react";
import { convertToCommas } from "../../utils/convertToCommas";
import {
	PiPencilSimpleLine,
	PiTrash,
	PiInfo,
	PiCaretUpDown,
} from "react-icons/pi";
import UserItem from "./UserItem";

export default function UserList() {
	const users = [
		{
			name: "Odis Rhinehart",
			level: "Warga",
			favMenu: "Chicken & Ribs Combo",
			totalTransaction: 194700,
		},
		{
			name: "Kris Roher",
			level: "Warga",
			favMenu: "Surf & Turf Gift Basket",
			totalTransaction: 631200,
		},
		{
			name: "Serenity Fisher",
			level: "Juragan",
			favMenu: "Fried Chicken Dinne",
			totalTransaction: 1040920,
		},
		{
			name: "Brooklyn Warren",
			level: "Sultan",
			favMenu: "Surf & Turf Gift Basket",
			totalTransaction: 730500,
		},
		{
			name: "Franco Delort",
			level: "Juragan",
			favMenu: "Chicken & Ribs Combo",
			totalTransaction: 96000,
		},
		{
			name: "Saul Geoghegan",
			level: "Juragan",
			favMenu: "Surf & Turf Gift Basket",
			totalTransaction: 256000,
		},
		{
			name: "Alfredo Vetrovs",
			level: "Juragan",
			favMenu: "Dark & Stormy",
			totalTransaction: 590080,
		},
		{
			name: "Cristofer Vetrovs",
			level: "Konglomerat",
			favMenu: "Shaking Beef Tri-Tip",
			totalTransaction: 782600,
		},
		{
			name: "Calvin Steward",
			level: "Konglomerat",
			favMenu: "BBQ Rib Dinner",
			totalTransaction: 782600,
		},
		{
			name: "Calvin Steward",
			level: "Konglomerat",
			favMenu: "BBQ Rib Dinner",
			totalTransaction: 782600,
		},
	];

	return (
		<>
			<div className="sm:grid hidden grid-cols-5 px-4 py-2 gap-4 bg-gray-100 text-gray-400">
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

			<div className="px-4 py-2  bg-gray-100 text-gray-400 flex justify-between items-center">
				<div className="flex justify-between items-center">
					Sort user table by :
				</div>
				<p>Username</p>
			</div>

			<ul>
				{users.map((user, i) => {
					return <UserItem key={i} user={user} />;
				})}
			</ul>
		</>
	);
}
