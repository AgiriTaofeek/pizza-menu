import { useRouteError } from "react-router-dom";
import LinkButton from "./linkButton";

interface RouteErrorI {
  status: number;
  statusText: string;
  data: string;
  message?: string;
}
function NotFound() {
  // const navigate = useNavigate();
  const error = useRouteError() as RouteErrorI; //this hook returns anything thrown during an action, loader, or rendering.

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {/* If error.data doesn't exist, use error.message */}
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
      {/* <button onClick={() => navigate(-1)}>&larr; Go back</button> */}
    </div>
  );
}

export default NotFound;
