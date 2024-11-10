import './App.css';
import Modal from './components/Modal';
import TextTest from './components/TextTest';
import { useState, useEffect } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      console.log(selection);
      // se a seleção não estiver colapsada, chama o componente Modal
      if (selection && !selection.isCollapsed) {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);

    // Limpa o evento quando o componente é desmontado
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <TextTest />
      {isModalOpen && <Modal />}
    </>
  );
}

export default App;