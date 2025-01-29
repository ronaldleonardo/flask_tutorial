import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateUserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My new Friend</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
              {/* Left */}
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="Name Here"></Input>
              </FormControl>

              {/* Right */}
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input placeholder="Designer"></Input>
              </FormControl>
            </Flex>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize={"none"}
                overflowY={"hidden"}
                placeholder="Enter some description about your friend's name here"
              ></Textarea>
            </FormControl>
            <RadioGroup mt={4}>
              <Flex gap={5}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Add
            </Button>

            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateUserModal;
