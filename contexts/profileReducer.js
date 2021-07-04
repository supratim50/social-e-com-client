export const initialState = {
  userName: "",
  userEmail: "",
  token: "",
  userImage: "/assets/images/defaultProfile.jpg",
};

export const profileReducer = (state, action) => {
  switch (action.type) {
    case "SET-PROFILE":
      return {
        ...state,
        userName: action.name,
        userEmail: action.email,
        token: action.token,
      };
    case "SET-IMAGE":
      return {
        ...state,
        userImage: action.userImage,
      };
  }
};
