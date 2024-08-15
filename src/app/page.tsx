import Link from "next/link";
import AppLogo from "./components/AppLogo";

export default function Home() {
  return(
    <main>
      <h1>My Home page</h1>
      <AppLogo title="Logo One" rgb="#f4511e"/>
      <AppLogo title="Logo Two" rgb="#039be5"/>
      <Link href={"../content/resume"}>Go to resume</Link>
      {'  '}<br></br>
      <Link href={"../abount"}>Go to abount</Link>
    </main>
  );
}