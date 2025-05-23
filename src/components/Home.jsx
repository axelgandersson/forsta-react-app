import Products from "./Products";

export default function Home() {
	return (
		<div className="home">
			<section className="hero">
				<h1>Welcome to Trasigatrasan</h1>
				<p>Your Partner in Sustainable Textile Solutions</p>
			</section>

			<section className="featured-products">
				<h2>Featured Products</h2>
				<div className="products-container">
					<Products />
				</div>
			</section>
		</div>
	);
}
