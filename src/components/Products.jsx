export default function Products() {
	const products = [
		{
			id: 1,
			name: "Cotton Rags",
			desc: "Soft recycled cotton",
			prices: { 5: 199, 10: 349 },
		},
		{
			id: 2,
			name: "Denim Rags",
			desc: "Durable denim pieces",
			prices: { 5: 249, 10: 449 },
		},
		{
			id: 3,
			name: "Mixed Fabric",
			desc: "Assorted fabric mix",
			prices: { 5: 149, 10: 279 },
		},
	];

	return (
		<div className="products">
			{products.map((product) => (
				<div key={product.id} className="product-card">
					<h3>{product.name}</h3>
					<p>{product.desc}</p>
					<div className="prices">
						<span>5kg: {product.prices[5]}kr</span>
						<span>10kg: {product.prices[10]}kr</span>
					</div>
					<button>Add to Cart</button>
				</div>
			))}
		</div>
	);
}
