export default function Contact() {
	const contacts = [
		{
			name: "Customer Service",
			email: "support@trasigatrasan.se",
			phone: "08-123 456 78",
		},
		{ name: "Sales", email: "sales@trasigatrasan.se", phone: "08-987 654 32" },
	];

	return (
		<div className="contact">
			{contacts.map((contact, index) => (
				<div key={index} className="contact-card">
					<h3>{contact.name}</h3>
					<p>Email: {contact.email}</p>
					<p>Phone: {contact.phone}</p>
				</div>
			))}
		</div>
	);
}
