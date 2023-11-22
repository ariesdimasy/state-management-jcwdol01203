import { useState, createContext, useContext } from "react"
//import style from "./MyPage.module.css"
import { ThemeContext } from "./components/store"

import Button from "./components/Button"
import Form from "./components/Form"

// const ThemeContext = createContext()

export default function MyPage() { 
    const [theme, setTheme] = useState("dark")

    return (
        <ThemeContext.Provider value={theme}>
            <Form></Form>
            <Button onClick={() => {
                setTheme("light")
            }}> Switch to light Theme</Button>
        </ThemeContext.Provider>
    )
}

// function Form() { 
 
//     const theme = useContext(ThemeContext)

//     return (<form className={style[theme]}>
//         <div>
//             <input type="text" name="name"></input>
//             <Button theme={style[theme]}> Submit Form </Button>
//         </div>
//     </form>)
// }

// function Button(props) { 

//     const theme = useContext(ThemeContext)

//     return (<button onClick={props.onClick} className={style[theme]} type="button"> 
//         {props.children}
//     </button>)
// }