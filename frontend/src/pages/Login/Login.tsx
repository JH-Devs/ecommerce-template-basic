import { Box, Card, Stack, styled, Typography } from "@mui/material";
import { Title, Meta } from "../../components/Head";
import Link from '@mui/joy/Link';
import { FormControl, FormLabel, Input, Button } from "@mui/joy";
import PeopleIcon from '@mui/icons-material/People';
import LockIcon from '@mui/icons-material/Lock';

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


export default function Login({ title, meta_content, form_title, username, form_username,  password, form_password, form_button, form_link, form_link_href, form_link_text, form_link_href_pass, form_link_text_pass }: LoginProps) {     
    return (
        <>
        <Title>{title}</Title>
        <Meta name="description" content={meta_content} />
            <CustomStack>
                <Box sx={{ padding: 2, borderRadius: 8, minWidth: 500, margin: "auto" }}>
                    <Card sx={{ padding: 2}}>
                        <Typography variant="h4" textAlign="center">{form_title}</Typography>
                        <FormControl>
                            <FormLabel sx={{ mt:2}}>{username}</FormLabel>
                            <Input startDecorator={<PeopleIcon />} name={form_username} required/>
                        </FormControl>
                        <FormControl>
                            <FormLabel sx={{ mt:2}}>{password}</FormLabel>
                            <Input startDecorator={<LockIcon />} name={form_password} required/>
                        </FormControl>
                            <Stack spacing={2} sx={{ mt: 2 }}>
                                <Button variant="soft" color="success" type="submit">{form_button}</Button>
                            </Stack>
                        <Stack sx={{ p:2, textAlign: "center",}}>
                        <Typography variant="subtitle1">{form_link} <Link href={form_link_href}>{form_link_text}</Link></Typography>
                        <Typography variant="subtitle2"><Link href={form_link_href_pass}>{form_link_text_pass}</Link></Typography>
                        </Stack>
                    </Card>
                </Box>
            </CustomStack>
        </>
    );
}