import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  // This is protected route.
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
      <ModeToggle />
    </div>
  );
}
