import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Customer from "./pages/Customer";

function App() {
	return (
		<div className="flex font-quicksand">
			{/* <Sidebar /> */}
			<Navbar />
			<Customer />
		</div>
	);
}

export default App;
