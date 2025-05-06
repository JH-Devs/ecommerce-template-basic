import RegisterComponent from "./Register";
import { registerPageProps } from "./registerPageProps";

export default{
    component: RegisterComponent,
    title: 'Stránky/Registrace'
}
 export const Register = {
    args: {
        ...registerPageProps,
    }
 };