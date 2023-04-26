import React, { useState, createContext } from "react";
import { ModalContext } from "./ModalContext";
import { Modal } from "./Modal";

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (modalConfig) => {
    const { children } = modalConfig;
    setModalContent(modalConfig);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const valueModalProvider = {
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={valueModalProvider}>
      {modalOpen && <Modal {...modalContent} />}
      {children}
    </ModalContext.Provider>
  );
};
