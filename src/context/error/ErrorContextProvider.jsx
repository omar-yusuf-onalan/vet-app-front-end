import {useState} from "react";
import ErrorContext from "./ErrorContext.jsx";


const ErrorContextProvider = ({children}) => {
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const errorContextHolderObject = {
        showError,
        setShowError,
        errorMessage,
        setErrorMessage
    }

    return (
        <ErrorContext.Provider value={errorContextHolderObject}>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorContextProvider