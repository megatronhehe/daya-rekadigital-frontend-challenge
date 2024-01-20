import React from "react";

export default function Header() {
	return (
		<header className="border-b flex flex-col">
			<h1 className="text-2xl mt-1 font-medium text-gray-600">Customer</h1>
			<p className="text-gray-400 mt-4">
				You can manage and organize your customer and other things here
			</p>

			<nav className="self-end mt-4 xl:-mt-2 sm:w-1/2 w-full text-gray-400">
				<ul className="flex w-full font-medium">
					<li className="w-1/3 border-blue-500 text-blue-500 pb-2 text-center border-b-2">
						<a href="">Customer</a>
					</li>
					<li className="w-1/3 pb-2 text-center">
						<a href="">Promo</a>
					</li>
					<li className="w-1/3 pb-2 text-center">
						<a href="">Voucher</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
