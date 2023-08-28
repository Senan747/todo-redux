import { useSelector } from "react-redux";
import List from "./components/list";
import AddTodo from "./components/add";
import Header from "./components/header";
import Modal from "./components/modal";

function App() {
  const { open: isModalOpen } = useSelector((state) => state.modal);
  return (
    <div>
      {isModalOpen && <Modal />}
      <Header />
      <div className="main">
        <AddTodo />
        <List />
      </div>
    </div>
  );
}

export default App;
