export function convertToCommas(value) {
	let stringValue = value.toString();

	stringValue = stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return stringValue;
}
