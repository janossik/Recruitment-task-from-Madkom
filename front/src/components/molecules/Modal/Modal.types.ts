export interface ModalProps {
  initialIsOpen?: boolean;
  openButtonContent: string;
  onOpen?: () => void;
  closeButtonContent?: string;
  onClose?: () => void;
  confirmButtonContent?: string;
  onConfirm?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}
