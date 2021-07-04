export const initialState = {
  userName: "",
  userEmail: "",
  token: "",
  userImage: "",
};

export const profileReducer = (state, action) => {
  switch (action.type) {
    case "SET-PROFILE":
      return {
        ...state,
        userName: action.name,
        userEmail: action.email,
        token: action.token,
        userImage: action.userImage,
      };
  }
};
