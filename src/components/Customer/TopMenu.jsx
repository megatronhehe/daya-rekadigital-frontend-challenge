import React from "react";

export default function TopMenu() {
	return (
		<div className="bg-gray-100 p-4 h-full  rounded-xl flex flex-col  text-gray-400 gap-4">
			<div className="text-3xl">
				<h1 className="text-black">Top Menu</h1>
				<h2 className="text-red-400 font-semibold">This Week</h2>
			</div>

			<p>10 - 12 Agustus 2023</p>

			<ul className="flex flex-col gap-4">
				<li className="relative bg-white p-4  rounded-xl">
					<h3 className="text-black font-semibold text-xl">
						Nasi Goreng Jamur Special Resto Pak Min
					</h3>
					<div className="absolute z-10 right-3 -top-3.5 w-7 h-7 rotate-12 bg-red-400 flex items-center font-semibold justify-center text-white">
						1
					</div>
					<div className="absolute right-2.5 -top-3 w-7 h-7 rotate-12 bg-red-700 flex items-center justify-center text-white"></div>
				</li>

				<li className="px-3 py-2">2. Tongseng Sapi Gurih</li>
				<li className="px-3 py-2">3. Nasi Gudeg Telur Ceker</li>
				<li className="px-3 py-2">4. Nasi Ayam Serundeng</li>
				<li className="px-3 py-2">5. Nasi Goreng Seafood</li>
			</ul>
		</div>
	);
}
