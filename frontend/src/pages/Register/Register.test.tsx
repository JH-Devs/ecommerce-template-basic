import { render, screen } from '@testing-library/react';
import Register from './Register';

describe('Registrace komponenta', () => {
  it('zobrazí nadpis Registrace', () => {
    render(<Register />);
    const heading = screen.getByText(/registrace/i);
    expect(heading).toBeInTheDocument();
  });

  it('obsahuje vstupy pro jméno, email, heslo', () => {
    render(<Register />);
    const nameInput = screen.getByLabelText(/jméno/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/heslo/i);
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
    it('obsahuje tlačítko pro přihlášení', () => {
        render(<Register />);
        const loginButton = screen.getByRole('button', { name: /registrovat/i });
        expect(loginButton).toBeInTheDocument();
    });
});
