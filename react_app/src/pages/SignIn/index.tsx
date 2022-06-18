import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import Form from "../../components/Form";
import IconButton from "../../components/IconButton";
import FormInput from "../../components/Form/FormInput";
import { facebook48, google48, linkedin48, microsoft48 } from "../../constants/assets";
import '../../styles/form.css';
import FormSubmit from "../../components/Form/FormSubmit";
import FormTitle from "../../components/Form/FormTitle";
import FormDiscription from "../../components/Form/FormDiscription";
import { login } from "../../apis/UserApi";
import User from "../../models/user";


export default function SignIn () {

    const [ user, setUser ] = useState<User>( { username: "", password: "" } )

    const setUsername = ( event: any ) => setUser( { ...user, username: event.target.value } )
    const setPassword = ( event: any ) => setUser( { ...user, password: event.target.value } )

    const handleSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault()

        let response = await login(user)
        console.log(response)   
        alert( response.toString() )
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <FormTitle title="Sign In" />
            <FormDiscription discription="Sign in to account to access all our services." />

            <FormInput name="username"
                label="Username"
                placeholder="Enter username"
                type="text"
                value={ user.username }
                onChange={ setUsername } />

            <FormInput name="password"
                label="Password"
                placeholder="Enter password"
                type="password"
                value={ user.password }
                onChange={ setPassword } />

            <FormSubmit value="Sign In" />

            <div className="form-divider">
                <hr className="form-divider-line" />
                <span className="form-divider-label">OR CONTINUE WITH</span>
                <hr className="form-divider-line" />
            </div>

            <div className="form-icons">
                <IconButton src={ google48 } />
                <IconButton src={ facebook48 } />
                <IconButton src={ linkedin48 } />
                <IconButton src={ microsoft48 } />
            </div>

            <p className="form-option">Don’t have account, <Link to="/signup">Sign up</Link></p>
        </Form>
    )
}