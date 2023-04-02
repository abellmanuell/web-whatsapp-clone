// useReducer function
export const reducer = (state, action) => {
  if (action.type === "CHECKBOX") {
    return {
      ...state,
      modalOpen: true,
      modalContent: "Please checked the box!",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, modalOpen: false };
  }

  if (action.type === "EMAIL_PWD") {
    return {
      ...state,
      modalOpen: true,
      modalContent: "Please fill input correctly",
    };
  }
};

// closeModal is for disappearance of modal.
export const closeModal = (dispatch) => {
  dispatch({ type: "CLOSE_MODAL" });
};
