
import { Link } from "react-router-dom"
import {BsGoogle} from 'react-icons/bs'
import banner from '../assets/signin.jpg'
import Banner from "../components/global/banner/Banner"
import Button from "../components/global/form/Button"
import Container from "../components/layout/Container"
import Field from "../components/global/form/Field"
import Form from "../components/global/form/Form"
import Line from "../components/global/form/Line"
import Options from "../components/signin/Options"
import useVisibilityPassword from '../hooks/form/useVisibilityPassword'
import useSignIn from "../hooks/useSignIn"

interface IAccount {
    email:string,
    password:string
}
function SignInPage() {
    const {handlerChange,handlerSubmit} = useSignIn()
    const {handlerReturnTypeInput,handlerChangeStatusPassword,handlerAddIcon} = useVisibilityPassword()

    return (
        <Container>
            <main className="min-h-[calc(100vh-53px)] flex">
                <section className="flex flex-col gap-8 m-auto lg:flex-row lg:items-center lg:gap-16">
                    <Banner banner={banner}/>
                    <div className="lg:grow">
                        <h1 className="text-xl mb-2 lg:text-2xl lg:mb-4">Welcome to Realtor</h1>
                        <Form handlerSubmit={handlerSubmit}>
                            <Field 
                                type="email" 
                                name="email" 
                                handlerChange={handlerChange} 
                                placeholder="your@email.com"
                                />
                            <Field 
                                type={handlerReturnTypeInput()}
                                name="password" 
                                handlerChange={handlerChange} 
                                placeholder="********"
                                iconPassword={handlerAddIcon()}
                                handlerChangeStatusPassword={handlerChangeStatusPassword}
                                />
                            <Options>
                                <p>Don't have an account? <span className="text-primary-red-hover font-semibold"><Link to='/sign-up'>Register</Link></span></p>
                                <p className="text-primary-red-hover font-semibold"><Link to='/forgot-password'>Forgot your password?</Link></p>
                            </Options>
                            <Button type="submit">Sign In</Button>
                            <Line/>
                            <Button 
                                type="button"
                                icon={<BsGoogle className="text-xl"/>}>
                                    Continue with Google
                            </Button>
                        </Form>
                    </div>
                </section>
            </main>
        </Container>
    )
}

export default SignInPage