import React from "react";
import {
	PiSquaresFour,
	PiBatteryFull,
	PiUsers,
	PiCallBell,
	PiPaintBrush,
	PiClipboard,
	PiUserSquare,
	PiSliders,
	PiShoppingCart,
	PiTruck,
} from "react-icons/pi";
import MenuItem from "./MenuItem";
import BottomProfile from "./BottomProfile";

export default function Sidebar() {
	const menuItems = [
		{ name: "Dashboard", icon: <PiSquaresFour /> },
		{ name: "Stock", icon: <PiBatteryFull /> },
		{ name: "Customer", icon: <PiUsers /> },
		{ name: "Restaurant", icon: <PiCallBell /> },
		{ name: "Design", icon: <PiPaintBrush /> },
		{ name: "Report", icon: <PiClipboard /> },
		{ name: "Role & Admin", icon: <PiUserSquare /> },
		{ name: "Settings", icon: <PiSliders /> },
	];

	const integrationItems = [
		{ name: "Stock", icon: <PiShoppingCart /> },
		{ name: "Supply", icon: <PiTruck /> },
	];

	return (
		<nav className="flex-col shadow-md overflow-y-auto sm:overflow-hidden sm:shadow-none sm:static fixed z-30 top-0 left-0 bg-white flex  font-medium text-gray-400 sm:border-r justify-between h-screen sm:min-h-screen">
			<div className="p-6">
				<h1 className="text-4xl text-blue-500 tracking-tighter flex items-center gap-2">
					<div className="w-6 h-6 mt-3 bg-blue-500"></div>
					square
				</h1>

				{/* Menu */}
				<div className="flex-col mt-8 flex gap-6">
					<h2 className="text-xs">Menu</h2>
					<ul className="flex flex-col gap-8">
						{menuItems.map((item) => (
							<MenuItem key={item.name} item={item} />
						))}
					</ul>
				</div>

				{/* Integration */}
				<div className="flex-col mt-8 flex gap-8">
					<h2 className="text-xs">Integration</h2>
					<ul className="flex flex-col gap-6">
						{integrationItems.map((item) => (
							<MenuItem key={item.name} item={item} />
						))}
					</ul>
				</div>
			</div>

			{/* bottom profile */}
			<BottomProfile />
		</nav>
	);
}
