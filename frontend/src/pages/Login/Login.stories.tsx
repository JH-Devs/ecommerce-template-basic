import LoginComponent from "./Login";
import { loginPageProps } from "./loginPageProps";
import { MemoryRouter } from "react-router-dom";

export default {
    component: LoginComponent,
    title: 'Stránky/Přihlášení',
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export const Login = {
    args: {
        ...loginPageProps,
    },
};
