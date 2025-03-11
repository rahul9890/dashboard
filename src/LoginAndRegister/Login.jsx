import React from "react";

export default function Login() {
    return (
        <>
            <form>
                <h2>Login</h2>
                Email:
                <input type="text" name="email" id="email" />
                <br />
                Password: <input type="password" name="password" id="password" />
                <br />
                <button type="submit" value="Login">
                    Login
                </button>
            </form>
        </>
    );
}
