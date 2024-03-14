import {
  useDisclosure,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CustomOptionButton, Modal } from 'src/shared/ui';

export const ProjectOptionButton = ({ project }) => {
  const { isOpen, onOpen: openModal, onClose: closeModal } = useDisclosure();
  const navigate = useNavigate();

  const deleteProjectHandler = () => {
    closeModal();
    // TODO: handle project delete mutation
  };
  const viewHandler = () => navigate(`/project-details/${project.id}`, { state: project });
  const deleteHandler = () => openModal();
  const editHandler = () => {
    // TODO: redirect to edit page
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalContent>
          <ModalHeader>Detele {project.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure? You can't undo this action afterwards.</ModalBody>

          <ModalFooter>
            <Button variant='outline' mr='12px' onClick={closeModal}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={deleteProjectHandler}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <CustomOptionButton
        items={[
          { buttonName: 'View', actionHandler: viewHandler },
          { buttonName: 'Delete', actionHandler: deleteHandler },
          { buttonName: 'Edit', actionHandler: editHandler },
        ]}
      />
    </>
  );
};
