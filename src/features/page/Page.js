import { Outlet } from "react-router-dom";

import { Header } from "../../components";

const Page = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};

export default Page;