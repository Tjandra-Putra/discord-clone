import { UserButton } from "@clerk/nextjs";

export default function Home() {
  // This is protected route.
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}
