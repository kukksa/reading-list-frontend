import { RiEditFill } from "react-icons/ri";
import { RiDeleteBin7Fill } from "react-icons/ri";


export const MyBooks = ({text, updatingInInput, deleteBook}) => {
    return (
        <div>
            <p>{text}</p>
            <RiEditFill onClick={ updatingInInput }></RiEditFill>
            <RiDeleteBin7Fill onClick={ deleteBook }></RiDeleteBin7Fill>
        </div>
    )
}

