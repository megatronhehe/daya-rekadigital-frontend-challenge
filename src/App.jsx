import Sidebar from "./components/Sidebar/Sidebar";
import Customer from "./pages/Customer";

function App() {
	return (
		<div className="flex font-quicksand">
			<Sidebar />
			<Customer />
		</div>
	);
}

export default App;
