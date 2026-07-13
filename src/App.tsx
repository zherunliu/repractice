import BottomNav from "./components/BottomNav";
import MemoList from "./components/MemoList";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div>
			<NavBar />
			<main style={{ marginTop: 64, marginBottom: 56 }}></main>
			<MemoList />
			<BottomNav />
		</div>
	);
}

export default App;
