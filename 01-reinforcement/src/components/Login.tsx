import { useEffect, useReducer } from "react";

interface AuthState {
  loading: boolean;
  token: string | null;
  userName: string;
  name: string;
}

type LoginActionPayload = {
  userName:string,
  name:string
}
type AuthAction =
  | { type: "logout" }
  | { type: 'login', payload: LoginActionPayload};

const initialState: AuthState = {
  loading: true,
  token: null,
  userName: "",
  name: "",
};

/**
 * It takes in a state and an action and returns a new state
 * @param {AuthState} state - AuthState - this is the current state of the reducer.
 * @param {AuthAction} action - AuthAction - This is the type of action that is being dispatched.
 * @returns The state is being returned.
 */
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        loading: false,
        token: null,
        userName: "",
        name: "",
      };
    case 'login':
      const { name,userName} = action.payload
      return {
        loading:false,
        token:'123',
        name,
        userName
      }

    default:
      return state;
  }
};

export const Login = () => {
  const [{ loading, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );
  const login = () => {
    dispatch({type:'login',payload:{userName:'ironMan',name:'Tony'}})
  }
  const logout = () => {
    dispatch({type:'logout'})
  }

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (loading) {
    return (
      <>
        {" "}
        <h3>Login</h3>
        <div className="alert alert-info">Loading...</div>{" "}
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token
        ? <div className="alert alert-success">authenticated as: {name}</div>
        : <div className="alert alert-danger">Unauthorized</div>
      }

      {
        token
        ? <button className="btn btn-danger" onClick={logout}>Logout</button>
        : <button className="btn btn-primary" onClick={login} >Login</button>
      }
    </>
  );
};
