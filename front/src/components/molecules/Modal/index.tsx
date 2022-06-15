import Button from "components/atoms/Button";
import IF from "components/atoms/IF";
import { useState } from "react";
import { ModalProps } from "./Modal.types";

const Modal = (props: ModalProps) => {
  const {
    initialIsOpen = false,
    openButtonContent,
    onOpen,
    closeButtonContent,
    onClose,
    confirmButtonContent,
    onConfirm,
    children,
    disabled,
  } = props;
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const close = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const invert = () => setIsOpen((v) => !v);
  return (
    <>
      <Button
        disabled={disabled}
        onClick={() => {
          onOpen && onOpen();
          invert();
        }}
      >
        {openButtonContent}
      </Button>
      {isOpen && (
        <div
          className="flex justify-center items-center fixed inset-0 z-50 outline-none focus:outline-none bg-gray-900"
          onClick={close}
        >
          <div className="relative overflow-x-hidden overflow-y-auto w-4/5 p-4 sm:p-10 bg-gray-50">
            <span
              className="absolute top-1 right-1 cursor-pointer"
              onClick={close}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" />
              </svg>
            </span>
            <div>{children}</div>
            <IF condition={closeButtonContent || confirmButtonContent}>
              <div className="flex pt-2 gap-4">
                <IF condition={confirmButtonContent}>
                  <Button
                    onClick={() => {
                      onConfirm && onConfirm();
                      close();
                    }}
                  >
                    {confirmButtonContent}
                  </Button>
                </IF>
                <IF condition={closeButtonContent}>
                  <Button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 text-xs font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded uppercase"
                    onClick={close}
                  >
                    {closeButtonContent}
                  </Button>
                </IF>
              </div>
            </IF>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
