import './App.css'
import Preview from "./components/Preview.jsx";
import {Modal} from "antd";
import {useState} from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
		<>
			<Preview onClick={() => setModalOpen(true)}/>
			<Modal
				title="Video player"
				centered
				open={modalOpen}
				onOk={() => setModalOpen(false)}
				onCancel={() => setModalOpen(false)}
			>
				<p>some contents...</p>
			</Modal>
		</>
	)
}

export default App