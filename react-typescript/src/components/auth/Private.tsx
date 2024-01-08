import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps ={
    isLogedin: boolean,
    component: React.ComponentType<ProfileProps>
}

export const Private = ({isLogedin, component: Component}: PrivateProps) => {
  if (isLogedin) {
    return <Component name='Santosh'/>;
  } else {
    return <Login />
  }
};
