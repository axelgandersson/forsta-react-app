export default function About() {
	return (
		<div className="about">
			<h2>About Circulär Ekonomi</h2>
			<div className="about-content">
				<section className="mission">
					<h3>Our Mission</h3>
					<p>
						We transform textile waste into high-quality rags, contributing to a
						sustainable future by giving new life to discarded materials.
					</p>
				</section>

				<section className="process">
					<h3>Our Process</h3>
					<ol>
						<li>Collection of textile waste from trusted partners</li>
						<li>Sorting and quality control</li>
						<li>Processing and cleaning</li>
						<li>Cutting and packaging</li>
						<li>Distribution to customers</li>
					</ol>
				</section>

				<section className="environmental-impact">
					<h3>Environmental Impact</h3>
					<p>
						Each year, we help reduce textile waste by processing over 100 tons
						of materials that would otherwise end up in landfills.
					</p>
				</section>
			</div>
		</div>
	);
}
