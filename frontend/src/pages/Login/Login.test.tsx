import { render, screen } from '@testing-library/react';
import Login from './Login';
import { loginPageProps } from "./loginPageProps";

describe('Přihlášení component', () => {
  it('zobrazí nadpis Přihlášení', () => {
    render(<Login {...loginPageProps}/>);
    const heading = screen.getByText(/přihlášení/i);
    expect(heading).toBeInTheDocument();
  });

  it('obsahuje vstupy pro uživatelské jméno a heslo', () => {
    render(<Login {...loginPageProps}/>);
    const usernameInput = screen.getByLabelText(/uživatelské jméno/i);
    const passwordInput = screen.getByLabelText(/heslo/i);
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
    it('obsahuje tlačítko pro přihlášení', () => {
        render(<Login {...loginPageProps}/>);
        const loginButton = screen.getByRole('button', { name: /přihlásit se/i });
        expect(loginButton).toBeInTheDocument();
    });
});
