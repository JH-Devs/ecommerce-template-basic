import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Importujeme BrowserRouter
import Login from './Login';
import { loginPageProps } from "./loginPageProps";

describe('Přihlášení component', () => {
  it('zobrazí nadpis Přihlášení', () => {
    render(
      <BrowserRouter> {/* Obalíme komponentu Login do BrowserRouter */}
        <Login {...loginPageProps} />
      </BrowserRouter>
    );
    const heading = screen.getByText(/přihlášení/i);
    expect(heading).toBeInTheDocument();
  });

  it('obsahuje vstupy pro uživatelské jméno a heslo', () => {
    render(
      <BrowserRouter>
        <Login {...loginPageProps} />
      </BrowserRouter>
    );
    const usernameInput = screen.getByLabelText(/uživatelské jméno/i);
    const passwordInput = screen.getByLabelText(/heslo/i);
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('obsahuje tlačítko pro přihlášení', () => {
    render(
      <BrowserRouter>
        <Login {...loginPageProps} />
      </BrowserRouter>
    );
    const loginButton = screen.getByRole('button', { name: /přihlásit se/i });
    expect(loginButton).toBeInTheDocument();
  });
});
