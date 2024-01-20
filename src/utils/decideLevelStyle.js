export function decideLevelStyle(level) {
	if (level === "Warga") {
		return "bg-orange-50 text-orange-500";
	}
	if (level === "Juragan") {
		return "bg-blue-50 text-blue-500";
	}
	if (level === "Sultan") {
		return "bg-green-50 text-green-500";
	}
	if (level === "Konglomerat") {
		return "bg-purple-50 text-purple-500";
	}
	return "bg-gray-50 text-gray-400";
}
