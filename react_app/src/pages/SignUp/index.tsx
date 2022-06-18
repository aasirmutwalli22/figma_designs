import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { register } from "../../apis/UserApi";
import Form from "../../components/Form";
import FormDiscription from "../../components/Form/FormDiscription";
import FormInput from "../../components/Form/FormInput";
import FormSubmit from "../../components/Form/FormSubmit";
import FormTitle from "../../components/Form/FormTitle";
import IconButton from "../../components/IconButton";
import { facebook48, google48, linkedin48, microsoft48 } from "../../constants/assets";
import User from "../../models/user";

export default function SignUp () {

    const [ user, setUser ] = useState<User>( { username: "", password: "", email: "", mobile: "" } )

    const setUsername = ( event: any ) =>  setUser( { ...user, username: event.target.value } ) 
    const setEmail = ( event: any ) =>  setUser( { ...user, email: event.target.value } ) 
    const setMobile = ( event: any ) =>  setUser( { ...user, mobile: event.target.value } ) 
    const setPassword = ( event: any ) =>  setUser( { ...user, password: event.target.value } ) 

    const handleSubmit = async ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault()

        let response = await register( user )
        alert( response )
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <FormTitle title="Sign Up" />
            <FormDiscription discription="Create an account to access all our services." />

            <FormInput name="username"
                label="Username"
                placeholder="Enter username"
                type="text"
                value={ user.username }
                onChange={ setUsername } />

            <FormInput name="email"
                label="Email"
                placeholder="Enter email"
                type="email"
                value={ user.email }
                onChange={ setEmail } />

            <FormInput name="mobile"
                label="Mobile"
                placeholder="Enter mobile"
                type="mobile"
                value={ user.mobile }
                onChange={ setMobile } />

            <FormInput name="password"
                label="Password"
                placeholder="Enter password"
                type="password"
                value={ user.password }
                onChange={ setPassword } />

            <FormSubmit value="Sign Up" />

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

            <p className="form-option">Already have account, <Link to="/">Sign in</Link></p>
        </Form>
    )
}