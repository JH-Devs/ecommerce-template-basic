import { Box, Card, styled, Typography } from "@mui/material";
import { Title, Meta } from "../../components/Head";
import Link from '@mui/joy/Link';
import { FormControl, FormLabel, Input, Stack, Button } from '@mui/joy';
import PeopleIcon from '@mui/icons-material/People';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


type RegisterProps = {
    title: string;
    meta_content: string;
    form_title: string;
    name: string;
    email: string;
    password: string;
    re_password: string;
    form_button: string;
    form_link: string;
    form_link_href: string;
    form_link_text: string;
};

const CustomStack = styled(Stack)({
    minHeight: "100vh",
    backgroundImage: "url('https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export default function Register({
    title,
    meta_content,
    form_title,
    name,
    email,
    password,
    re_password,
    form_button,
    form_link,
    form_link_href,
    form_link_text
}: RegisterProps) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/registrace', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json', 
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const err = await response.json();
                alert('Chyba: ' + (err.message || 'Registrace se nezdařila'));
                return;
            }

            const data = await response.json();
            alert('Registrace úspěšná!');
            localStorage.setItem('token', data.token);
            navigate('/prihlaseni');
        } catch (error) {
            console.error('Chyba při registraci:', error);
            alert('Došlo k chybě při odeslání požadavku.');
        }
    };

    return (
        <>
            <Title>{title}</Title>
            <Meta name="description" content={meta_content} />
            <CustomStack>
                <Box sx={{ padding: 2, borderRadius: 8, minWidth: 500, margin: "auto" }}>
                    <Card sx={{ padding: 2 }}>
                        <Typography variant="h4" textAlign="center">{form_title}</Typography>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel sx={{ mt: 2 }}>{name}</FormLabel>
                                <Input
                                    startDecorator={<PeopleIcon />}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel sx={{ mt: 2 }}>{email}</FormLabel>
                                <Input
                                    startDecorator={<AlternateEmailIcon />}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel sx={{ mt: 2 }}>{password}</FormLabel>
                                <Input
                                    type="password"
                                    startDecorator={<LockIcon />}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel sx={{ mt: 2 }}>{re_password}</FormLabel>
                                <Input
                                    type="password"
                                    startDecorator={<LockIcon />}
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    onChange={handleChange}
                                    required
                                />
                            </FormControl>
                            <Stack spacing={2} sx={{ mt: 2 }}>
                                <Button variant="soft" color="success" type="submit">
                                    {form_button}
                                </Button>
                            </Stack>
                        </form>
                        <Typography variant="subtitle1" sx={{ p: 2, textAlign: "center" }}>
                            {form_link} <Link href={form_link_href}>{form_link_text}</Link>
                        </Typography>
                    </Card>
                </Box>
            </CustomStack>
        </>
    );
}
