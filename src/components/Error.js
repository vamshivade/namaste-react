import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>Oops!!</h1>
      <p>Something went wrong.</p>

      <h3>
        {err?.status || "Error"} : {err?.statusText || err?.message}
      </h3>
    </div>
  );
};

export default Error;
