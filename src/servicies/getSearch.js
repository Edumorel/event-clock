export default function getSearch(search) {
	const arr = search.split('&')
	let info = {}

	arr.forEach((item) => {
		const [key, value] = item.split('=')

		info = {
			...info,
			[key]: value,
		}
	})

	return info
}
