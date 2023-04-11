
const initialState = {
  items: [],
};

const Items = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const { id, data } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_ITEM":

    const newItems=state.items.filter((ele) => ele.id !== action.id);
      return {
        ...state,
        items:newItems,
      };

      case "DELETE_ALL":
        return{
            ...state,items:[],
        }

    default:
      return state;
  }
};

export default Items;
