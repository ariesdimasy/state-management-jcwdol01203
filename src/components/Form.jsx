import { useContext } from "react"
import { ThemeContext } from "./store" 
import Button from "./Button"
import style from "./../MyPage.module.css"

export default function Form() { 
 
    const theme = useContext(ThemeContext)

    return (<form className={style[theme]}>
        <div>
            <input type="text" name="name"></input>
            <Button theme={style[theme]}> Submit Form </Button>
        </div>
    </form>)
}