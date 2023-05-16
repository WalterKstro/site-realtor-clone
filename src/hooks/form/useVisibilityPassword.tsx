import { ReactElement, useState } from "react"
import {BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs'

const useVisibilityPassword = () => {
    const [isShowingPassword, setChangeStatusPassword] = useState<boolean>(false)

    function handlerChangeStatusPassword():void{
        setChangeStatusPassword(!isShowingPassword)
    }
  
    function handlerReturnTypeInput():string {
      return isShowingPassword ? 'text' : 'password'
    }

    function handlerAddIcon():ReactElement {
        return isShowingPassword ? <BsFillEyeSlashFill/> : <BsFillEyeFill/>
    }

    return {
        handlerChangeStatusPassword,
        handlerAddIcon,
        handlerReturnTypeInput
    }

}
export default useVisibilityPassword