import { InputHTMLAttributes } from 'react';
import './index.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label: string
}

export default function FormInput ( { name, label, ...rest }: InputProps ) {
    return (
        <div className="form-group">
            <label className="form-label">{ label }</label>
            <input className="form-input" { ...rest } />
        </div>
    )
}



// let FormField = ( children: JSX.Element ) => <div className="form-group">{ children }</div>

// let FormLabel = ( label: string ) => <label className="form-label">{ label }</label>

