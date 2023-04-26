import React, { Children, useContext, useState } from "react";
import { ModalContext } from "./ModalContext";

export const Modal = (props) => {
  const { children } = props;
  const { closeModal } = useContext(ModalContext);

  return (
    <>
      <div
        className="fixed bg-black/50 z-10 top-0 right-0 left-0 bottom-0"
        onClick={closeModal}
      />
      <div
        style={{ color: "#1a1a1a" }}
        className=" w-[350px] md:w-[600px] p-5 rounded z-20 bg-white flex flex-col items-center fixed top-1/3 left-1/2 -translate-x-1/2"
      >
        {children}
      </div>
    </>
  );
};
