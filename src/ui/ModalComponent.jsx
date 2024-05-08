import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const ModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove from Wishlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Item will be Removed from Wishlist, Are you sure to complete
            process?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Remove</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComponent;
