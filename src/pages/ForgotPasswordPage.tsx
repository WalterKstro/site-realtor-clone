import { ChangeEvent } from "react"
import { Link } from "react-router-dom"
import { BsGoogle } from "react-icons/bs"

import Container from "../components/layout/Container"
import banner from '../assets/forgot.jpg'
import Banner from "../components/global/banner/Banner"
import Form from "../components/global/form/Form"
import Field from "../components/global/form/Field"
import Options from "../components/signin/Options"
import Button from "../components/global/form/Button"
import Line from "../components/global/form/Line"

function ForgotPasswordPage() {

    function handlerSubmit():void{}
    function handlerChange(evt:ChangeEvent):void {}
    return (
        <Container>
            <main className="min-h-[calc(100vh-53px)] flex">
                <section className="flex flex-col gap-8 m-auto lg:flex-row lg:items-center lg:gap-16">
                <Banner banner={banner}/>
                <div className="lg:grow">
                    <h1 className="text-xl mb-2 lg:text-2xl lg:mb-4">Reset your password</h1>
                    <Form handlerSubmit={handlerSubmit}>
                        <Field 
                            type="email" 
                            name="email" 
                            handlerChange={handlerChange} 
                            placeholder="your@email.com"
                            />
                        <Options>
                            <p>Don't have an account? <span className="text-primary-red-hover font-semibold"><Link to='/sign-up'>Register</Link></span></p>
                            <p className="text-primary-red-hover font-semibold"><Link to='/sign-in'>Sign in instead</Link></p>
                        </Options>
                        <Button>Send reset email</Button>
                        <Line/>
                        <Button icon={<BsGoogle className="text-xl"/>}>Continue with Google</Button>
                    </Form>
                </div>
                </section>
            </main>
        </Container>
    )
}

export default ForgotPasswordPage