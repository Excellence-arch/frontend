import { Link } from "react-router-dom"
import { Layout } from "../components/Layout"
import error from "../assets/404Errorlight.gif"
import { Button } from "../components/Button"

export const Page404 = () => {
    return (
        <>
            <Layout>
                <div className="bg-paragraph flex flex-col md:flex-row py-10 place-items-center justify-center">
                        <img src={error} alt="" srcset="" />
                    <div className="font-light text-6xl text-center">
                        <div className="mb-10 font-semibold">404 Error! <br /><span className="text-3xl">Page Not Found</span></div>
                        <Link to="/" className="text-xl p-4 bg-button rounded-lg hover:bg-transparent hover:border-2 hover:border-button hover:text-primary">
                            <Button title="Go to Home" />
                        </Link>
                    </div>
                </div>
            </Layout>
        </>
    )
}