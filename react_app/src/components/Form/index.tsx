import { FormHTMLAttributes } from "react"
interface FormProps extends FormHTMLAttributes<HTMLFormElement> { }

export default function Form ( props: FormProps ) {
    return <form className="form-container" { ...props }></form>
}