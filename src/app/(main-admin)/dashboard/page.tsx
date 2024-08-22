import Link from "next/link";
import Container from "@mui/material/Container";


export default function DashboradPage() {
  return (
    <Container>
      <h1>Admin Dashborad Page</h1>
      <Link href={"../"}>Main page</Link>
      {'  '}<br></br>
      <Link href={"../content/resume"}>Go to resume</Link>
    </Container>
  );
}