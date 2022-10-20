import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Editable,
  EditablePreview,
  EditableTextarea,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import React, { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "title":
//       return {
//         ...state,
//         title: action.payload,
//       };

//     case "description":
//       return {
//         ...state,
//         description: action.payload,
//       };
//     case "task_status":
//       return {
//         ...state,
//         task_status: action.payload,
//       };

//     case "tags":
//       return {
//         ...state,
//         tags: action.payload,
//       };

//     default:
//       return state;
//   }
// }

const CreateTask = ({ isOpen, onClose }) => {
 
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Task</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Title"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Editable  minHeight="65px">
              <EditablePreview />
              <EditableTextarea
                
              />
            </Editable>
          </FormControl>

          <Box mb="0.5rem">
            <FormLabel>Task Status</FormLabel>
            <Select
              placeholder="Select status"
          
            >
              <option value="todo">Todo</option>
              <option value="in-progress">In-Progress</option>
              <option value="done">Done</option>
            </Select>
          </Box>
          <Box mb="0.5rem">
            <FormLabel>Tags</FormLabel>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Select Tags
              </MenuButton>
              <MenuList>
                <MenuOptionGroup
                  title="Tags"
                  type="checkbox"
                >
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateTask;