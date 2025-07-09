import { Link, useRouteError } from "react-router";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="flex items-center justify-center flex-col space-y-3 w-full h-[100vh]">


            <h1 className="text-8xl font-extrabold text-gray-600">Opps!</h1>
            <h3 className="text-4xl font-extrabold text-gray-500">Page Not Found</h3>
            <p className="font-bold text-gray-500">Status:{error.status}</p>
            <Link to="" className='btn text-gray-500'>Back to Home</Link>

        </div>
    );
};

export default ErrorPage;