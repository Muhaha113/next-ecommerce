import { Button, colors, Typography } from "@mui/material";
import Link from "next/link";

export default function AbountPage() {
  return (
    <main>
      <Typography variant="h3" sx={{color: '#900', bgcolor: 'black'}}>เกี่ยวกับเรา</Typography>
      <div>
        <Button component={Link} href="/" replace={true} variant='contained' color="success">กลับหน้าแรก</Button>
      </div>
    </main>
  );
}