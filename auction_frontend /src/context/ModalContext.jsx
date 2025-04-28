import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

const ModalPovider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [content, setContent] = useState(null);

  function openModal(content) {
    setIsOpenModal((open) => !open);
    setContent(content);
  }
  function closeModal() {
    setIsOpenModal(false);
  }
  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, isOpenModal, content }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error('modal context was used out of the modal provider');
  return context;
}

export { ModalPovider, useModal };
