import { useEffect } from "react"

export default function Index() {

	useEffect(() => {
		fetch("http://localhost:3003/healthcheck").then((res) => res.json()).then((data) => console.log(data)).catch(console.error)
	});

	return <p>Hello world!</p>
}