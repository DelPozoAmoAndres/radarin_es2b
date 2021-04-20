// Dependences from: ~/ui/logIn/modules
import React from "react";
import { AuthButton } from "@solid/react";
import '../LogIn.css';


class LoginButton extends React.Component {

    render() {
        return (
            <div>
                <AuthButton data-testid="btini" popup={"https://inrupt.net/common/popup.html"} />
            </div>
        )
    }
}

export default LoginButton;