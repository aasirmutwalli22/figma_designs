import {InputHTMLAttributes } from "react"
interface FormProps extends InputHTMLAttributes<HTMLInputElement> { }

export default function FormSubmit ( props: FormProps ) {
    return <input type='submit' className="form-submit" {...props} />
}