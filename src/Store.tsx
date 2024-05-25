import { createContext, useReducer, ReactNode } from "react";

// Define your state types/interfaces
interface AppState {
  addSearch: string | null;
  userInfo: UserInfo | null;
  homeCategory: string | null;
  videoCategory: string | null;
  section: string | null;
}

interface UserInfo {
  // Define properties of user info here
  name: string;
  email: string,
  _id: string
  // Add more properties as needed
}

// Define the initial state
const searchValue = localStorage.getItem("search");
const userInfoValue = localStorage.getItem("userInfo");
const homeCategoryValue = localStorage.getItem("homecategory");
const videoCategoryValue = localStorage.getItem("videocategory")
const sectionValue = localStorage.getItem("section");

const initialState: AppState = {
  addSearch: typeof searchValue === "string" ? searchValue : "",
  userInfo:
    typeof userInfoValue === "string" ? JSON.parse(userInfoValue) : null,
  homeCategory:
    typeof homeCategoryValue === "string" ? homeCategoryValue : "myfeeds",
  videoCategory: typeof videoCategoryValue === "string" ? videoCategoryValue : "myfeeds",
  section: typeof sectionValue === "string" ? sectionValue : "home",
};

// Define the action types
type Action =
  | { type: "ADD_SEARCH"; payload: string }
  | { type: "USER_SIGNIN"; payload: UserInfo }
  | { type: "USER_SIGNOUT" }
  | { type: "APPLY_HOME_CATEGORY"; payload: string }
  | {type: "APPLY_VIDEO_CATEGORY"; payload: string}
  | { type: "APPLY_SECTION"; payload: string };

// Define the reducer function
function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "ADD_SEARCH":
      return { ...state, addSearch: action.payload };
    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };
    case "USER_SIGNOUT":
      return { ...state, userInfo: null };
    case "APPLY_HOME_CATEGORY":
      return { ...state, homeCategory: action.payload };
    case "APPLY_VIDEO_CATEGORY": 
      return {...state, videoCategory: action.payload};
    case "APPLY_SECTION":
      return { ...state, section: action.payload };
    default:
      return state;
  }
}

// Create the context
export const Store = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

// Define the context provider component
interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
