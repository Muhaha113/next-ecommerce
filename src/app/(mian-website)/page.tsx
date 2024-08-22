import AppLogo from "./components/AppLogo";
import Container from "@mui/material/Container";


export default function Home() {
  return(
    <Container>
      <h1>My Home page</h1>
      <AppLogo title="Logo One" rgb="#f4511e"/>
      <AppLogo title="Logo Two" rgb="#039be5"/>
    </Container>
  );
}