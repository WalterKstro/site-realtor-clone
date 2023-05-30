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
import { Link, NavigateFunction, useNavigate } from "react-router-dom"
import { GoogleAuthProvider, UserCredential, getAuth, signInWithPopup } from "firebase/auth"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import { db } from "../firebase"
import { toast } from "react-toastify"

const SignUpPage = () => {
    const {handlerChange,handlerSubmit} = useForm()
    const {handlerReturnTypeInput,handlerChangeStatusPassword,handlerAddIcon} = useVisibilityPassword()
    const navigate:NavigateFunction = useNavigate()
    
    async function handlerSignUpGoogle() {
        const auth = getAuth()
        const provider = new GoogleAuthProvider();
        try {
            // sing up with Google Account
            const result:UserCredential = await signInWithPopup(auth,provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user
            
            // get reference of one document
            const docReference = doc(db,'users', user.uid)
            // get one snapshot of a document
            const docSnap = await getDoc(docReference)

            
            // exist uid of user in database
            if( !docSnap.exists() ) {
                // save to database
                await setDoc(doc(db,'users',user.uid),{
                    email: user.email,
                    name: user.displayName,
                    timestamp: serverTimestamp()
                })    
            }

            navigate('/')
            
        } catch (error) {
            toast.error('Tú registro no se completo, intente después', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
              });
        }
    }
    
    return (
        <Container>
             <main className="min-h-full lg:min-h-[calc(100vh-53px)] flex">
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
                            <Button type="submit">Sign Up</Button>
                            <Line/>
                            <Button 
                                type="button"
                                handlerSignUpGoogle={handlerSignUpGoogle}
                                icon={<BsGoogle className="text-xl"/>}
                                >Continue with Google</Button>
                        </Form>
                    </div>
                </section>
            </main>
        </Container>
    )
}

export default SignUpPage