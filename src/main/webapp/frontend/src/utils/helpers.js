export function getRandomNumber() {
	return Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
}

export function getCurrentYear() {
	return new Date().getFullYear();
}
