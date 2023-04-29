import { FC } from "react"
import { IError } from "../../ErrorPage";


const ErrorMessage: FC<IError> = props => {
    const { status, statusText, internal, data, error } = props;
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{statusText || error?.message}</i>
            </p>
        </div>

    )
}

export default ErrorMessage