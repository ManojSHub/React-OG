import { useRouteError } from "react-router";

const Error = () => {
    const errorFromRoute = useRouteError();
    // console.log(errorFromRoute);
    return (
        <div>
            <h1>Error Page</h1>
            <h3>status: {errorFromRoute.status}</h3>
            <h3>statusText: {errorFromRoute.statusText}</h3>
            <h3>error: {errorFromRoute.data}</h3>
            {/* <p>{errorFromRoute.error.message}</p> */}
            {/* <span>{errorFromRoute.error.stack}</span> */}
        </div>
    );
};

export default Error;
    