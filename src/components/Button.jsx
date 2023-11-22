import { useContext } from "react"
import { ThemeContext } from "./store"
import style from "./../MyPage.module.css"

export default function Button(props) { 

    const theme = useContext(ThemeContext)

    return (<button onClick={props.onClick} className={style[theme]} type="button"> 
        {props.children}
    </button>)
}