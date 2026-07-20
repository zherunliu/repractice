import MemoList from "./features/home/MemoList";
import BottomNav from "./ui/BottomNav";
import NavBar from "./ui/NavBar";

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
