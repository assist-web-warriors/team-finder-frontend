import { Modal as ChakraModal, ModalOverlay } from '@chakra-ui/react';

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      {children}
    </ChakraModal>
  );
};
