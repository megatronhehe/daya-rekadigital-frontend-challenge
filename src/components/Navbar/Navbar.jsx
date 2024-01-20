import React, { useEffect, useState } from "react";
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
	PiListBold,
	PiX,
} from "react-icons/pi";
import Sidebar from "../Sidebar/Sidebar";
import useWindowSize from "../../hooks/useWindowSize";

export default function Navbar() {
	const [toggleNavbar, setToggleNavbar] = useState(false);

	const { isMobile, windowSize } = useWindowSize();

	useEffect(() => {
		if (!isMobile) {
			setToggleNavbar(true);
		}
	}, [windowSize]);

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
		<>
			<button
				onClick={() => setToggleNavbar((prev) => !prev)}
				className="w-12 fixed sm:hidden top-4 flex items-center justify-center right-4 h-12 rounded-xl text-xl bg-blue-500 backdrop-blur-sm z-20 bg-opacity-45 text-white"
			>
				{toggleNavbar ? <PiX /> : <PiListBold />}
			</button>

			{toggleNavbar && <Sidebar />}
		</>
	);
}
