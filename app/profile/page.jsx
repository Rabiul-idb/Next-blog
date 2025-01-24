
import {getKindeServerSession, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/server";

const page = async() => {


const {getUser} = getKindeServerSession();
const user = await getUser();

//console.log(user);

    return (
        <div className="w-11/12 mx-auto mb-10 text-center">
            <h1 className="text-2xl font-semibold my-5">Hello, welcome back {user?.given_name} {user?.family_name}</h1>
            <p>Thanks for visiting my First Next js application. <br></br>Ignore the Design. just Formate.<br></br>Thanks, again</p>

            <LogoutLink>
                <button className="btn mt-5 bg-red-600 text-white hover:bg-red-700 hover:text-white">Logout</button>
            </LogoutLink>
        </div>
    );
};

export default page;