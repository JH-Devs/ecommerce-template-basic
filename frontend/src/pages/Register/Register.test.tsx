import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Importujeme BrowserRouter
import Register from './Register';
import { registerPageProps } from "./registerPageProps";

describe('Registrace komponenta', () => {
  it('zobrazí nadpis Registrace', () => {
    render(
      <BrowserRouter> {/* Obalíme komponentu Register do BrowserRouter */}
        <Register {...registerPageProps} />
      </BrowserRouter>
    );
    const heading = screen.getByText(/registrace/i);
    expect(heading).toBeInTheDocument();
  });

  it('obsahuje vstupy pro jméno, email, heslo', () => {
    render(
      <BrowserRouter>
        <Register {...registerPageProps} />
      </BrowserRouter>
    );
    const nameInput = screen.getByLabelText(/jméno/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/heslo$/i);

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('obsahuje tlačítko pro registraci', () => {
    render(
      <BrowserRouter>
        <Register {...registerPageProps} />
      </BrowserRouter>
    );
    const registerButton = screen.getByRole('button', { name: /registrovat se/i });
    expect(registerButton).toBeInTheDocument();
  });
});
