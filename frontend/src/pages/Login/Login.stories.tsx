import LoginComponent from "./Login";
import { loginPageProps } from "./loginPageProps";

export default{
    component: LoginComponent,
    title: 'Stránky/Přihlášení'
}
export const Login = {
    args: {
        ...loginPageProps,
    }
};