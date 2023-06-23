import { Outlet } from "react-router-dom";

import { Header } from "../../components";

const Page = () => {
    return (
        <>
            <Header />
            <div style={{ padding: "15px" }}>
                <Outlet />
            </div>
        </>
    )
};

export default Page;