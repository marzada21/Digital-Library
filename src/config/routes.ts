import Home from "../pages/Home";
import Books from "../pages/Books";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [

    {
        path: "",
        component: Home,
        name: "Home"
    },
    {
        path: "/books",
        component: Books,
        name: "Books"
    }

];

export default routes