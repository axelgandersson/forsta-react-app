import { useState } from "react";

export default function Footer() {
	const [count, setCount] = useState(0);
	const [clicked, setClicked] = useState(0);
	return (
		<footer>
			Hej här igen
			<p>ochhär ppp</p>
			<button
				id="knappen"
				onClick={() => {
					setClicked(clicked + 1);
					if (count === 0) {
						setCount(2);
					} else setCount((count) => count * 2);
				}}
			>
				count is {count}
				times clicked is {clicked}
			</button>
		</footer>
	);
}
