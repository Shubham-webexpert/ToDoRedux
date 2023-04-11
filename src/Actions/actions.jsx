import { v4 as uuid } from "uuid";

export const AddItem = (data) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: uuid().slice(0, 8),
      data: data,
    },
  };
};

export const DeleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    id,
  };
};

export const DeleteAll = () => {
  return {
    type: "DELETE_ALL",
  };
};
