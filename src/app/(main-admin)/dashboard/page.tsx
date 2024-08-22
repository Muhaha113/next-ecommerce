import Link from "next/link";

export default function DashboradPage() {
  return (
    <main>
      <h1>Admin Dashborad Page</h1>
      <Link href={"../"}>Main page</Link>
      {'  '}<br></br>
      <Link href={"../content/resume"}>Go to resume</Link>
    </main>
  );
}