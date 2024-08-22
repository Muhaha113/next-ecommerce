import Link from "next/link";

export default function resumepage() {
  return (
    <main><div style={{textAlign: "center"}}>      <h1 style ={{color: "#9f63b0"}}>My Resume</h1>
    <h2 style={{color: "#0a4d80"}}>name: Phuthit Wongthubthim<br/>
    Age: 20<br/>
    Tel: 0000000000<br/>
    job: student<br/>
    email: killerq606155@gmail.com<br/>
    study at Supanburi Technical college</h2>
    <Link href={"../"}>Main page</Link>
      {'  '}<br></br>
    <Link href={"../abount"}>Go to abount</Link>
      </div>
    </main>
  );
}