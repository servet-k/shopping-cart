import "./styles.css";
import Top from "./components/Top";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";

export default function App() {
  const { isOpen } = useSelector(state => state.modal)
  return (

    <div>

      <Top />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cart" element={isOpen ? <Modal /> : <Cart />} />
      </Routes>

    </div>
  );
}
