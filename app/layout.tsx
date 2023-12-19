import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head></head>
			<body>
				<Header />
				<h2>wwwwwwwwwww</h2>
				{children}
			</body>
		</html>
	);
}
