import RegisterComponent from "./Register";
import { registerPageProps } from "./registerPageProps";
import { MemoryRouter } from "react-router-dom";

export default {
    component: RegisterComponent,
    title: 'Stránky/Registrace',
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export const Register = {
    args: {
        ...registerPageProps,
    },
};
