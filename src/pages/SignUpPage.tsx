import Banner from "../components/global/banner/Banner"
import banner from '../assets/signup.jpg'
import Container from "../components/layout/Container"
import useForm from "../hooks/form/useForm"
import Form from "../components/global/form/Form"
import Field from "../components/global/form/Field"
import Options from "../components/signin/Options"
import Button from "../components/global/form/Button"
import Line from "../components/global/form/Line"
import { BsGoogle } from "react-icons/bs"
import useVisibilityPassword from "../hooks/form/useVisibilityPassword"
import { Link } from "react-router-dom"

const SignUpPage = () => {
    const {handlerChange,handlerSubmit,error} = useForm()
    const {handlerReturnTypeInput,handlerChangeStatusPassword,handlerAddIcon} = useVisibilityPassword()
    return (
        <Container>
             <main className="min-h-[calc(100vh-53px)] flex">
                <section className="flex flex-col gap-8 m-auto lg:flex-row lg:items-center lg:gap-16">
                    <Banner banner={banner}/>
                    <div className="lg:grow">
                        <h1 className="text-xl mb-2 lg:text-2xl lg:mb-4">Create your account</h1>
                        <Form handlerSubmit={handlerSubmit}>
                            <Field
                                type="text" 
                                name="name" 
                                handlerChange={handlerChange} 
                                placeholder="Jhon Doe"
                                />
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
                                <p>Have an account? <span className="text-primary-red-hover font-semibold"><Link to='/sign-in'>Sign In</Link></span></p>
                                <p className="text-primary-red-hover font-semibold"><Link to='/forgot-password'>Forgot your password?</Link></p>
                            </Options>
                            <Button>Sign Up</Button>
                            <Line/>
                            <Button icon={<BsGoogle className="text-xl"/>}>Continue with Google</Button>
                        </Form>
                    </div>
                </section>
            </main>
        </Container>
    )
}

export default SignUpPage