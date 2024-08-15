import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Abount Page</h1>
      <Link href={"../"}>Main page</Link>
      {'  '}<br></br>
      <Link href={"../content/resume"}>Go to resume</Link>
    </main>
  );
}