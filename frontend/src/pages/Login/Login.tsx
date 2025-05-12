import { Box, Card, Stack, styled, Typography } from "@mui/material";
import { Title, Meta } from "../../components/Head";
import Link from '@mui/joy/Link';
import { FormControl, FormLabel, Input, Button } from "@mui/joy";
import PeopleIcon from '@mui/icons-material/People';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type LoginProps = {
    title: string;
    meta_content: string;
    form_title: string;
    username: string;
    password: string;
    form_username: string;
    form_password: string;
    form_button: string;
    form_link: string;
    form_link_href: string;
    form_link_text: string;
    form_link_href_pass: string;
    form_link_text_pass: string;
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

export default function Login({
    title,
    meta_content,
    form_title,
    username,
    password,
    form_username,
    form_password,
    form_button,
    form_link,
    form_link_href,
    form_link_text,
    form_link_href_pass,
    form_link_text_pass,
}: LoginProps) {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/prihlaseni", {
                email,
                password: pass,
            });

            const { token, user } = response.data;

            // Uložení tokenu např. do localStorage
            localStorage.setItem("auth_token", token);
            localStorage.setItem("auth_user", JSON.stringify(user));

            // Přesměrování podle role
            if (user.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Login error:", error);
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
                                <FormLabel sx={{ mt: 2 }}>{username}</FormLabel>
                                <Input
                                    startDecorator={<PeopleIcon />}
                                    name={form_username}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel sx={{ mt: 2 }}>{password}</FormLabel>
                                <Input
                                    startDecorator={<LockIcon />}
                                    type="password"
                                    name={form_password}
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    required
                                />
                            </FormControl>
                            <Stack spacing={2} sx={{ mt: 2 }}>
                                <Button variant="soft" color="success" type="submit">{form_button}</Button>
                            </Stack>
                        </form>
                        <Stack sx={{ p: 2, textAlign: "center" }}>
                            <Typography variant="subtitle1">{form_link} <Link href={form_link_href}>{form_link_text}</Link></Typography>
                            <Typography variant="subtitle2"><Link href={form_link_href_pass}>{form_link_text_pass}</Link></Typography>
                        </Stack>
                    </Card>
                </Box>
            </CustomStack>
        </>
    );
}
