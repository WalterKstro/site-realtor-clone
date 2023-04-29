import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import ErrorMessage from "./components/error/ErrorMessage";

export interface IError {
    status: number;
    statusText: string;
    internal: boolean;
    data: any;
    error?: Error | undefined;
}

function ErrorPage() {
    const error = useRouteError() as IError;

    return (
        <ErrorMessage {...error} />
    )
}

export default ErrorPage