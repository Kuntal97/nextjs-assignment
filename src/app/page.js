// page.js

// Import necessary modules and components
import Home from "./Pages/Home";
import RootLayout from "./layout";

// Export default function to render the Next.js application
export default function App() {
	return (
		<RootLayout>
			<Home />
		</RootLayout>
	);
}
