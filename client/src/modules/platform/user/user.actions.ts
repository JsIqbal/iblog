import axios from "axios";

export async function login(loginData: any) {
    // const data = new FormData();
    // data.append("email", loginData.username);
    // data.append("password", loginData.password);
    console.log(loginData);
    try {
        const res = await axios.post(
            "http://localhost:3001/users/login",
            loginData
        );
        console.log("----------------------------", res);
        return res;
    } catch (err) {
        // window.location.href = "/";
        console.log(err);
    }
}

export function handleUserType(
    setIsLoggedIn: any,
    setIsBa: any,
    setIsAdmin: any
) {
    if (localStorage.getItem("access")) {
        setIsLoggedIn(true);
        if (localStorage.getItem("userType") === "BA") {
            setIsBa(true);
            setIsAdmin(false);
        }

        if (localStorage.getItem("userType") === "Admin") {
            setIsBa(false);
            setIsAdmin(true);
        }
    }
}
