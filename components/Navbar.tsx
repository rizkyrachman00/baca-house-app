import Image from "next/image";
import Link from "next/link";
import { auth, signIn, signOut } from "@/app/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <>
      <header className="px-5 py-3 bg-white shadow-sm">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo-app-trial"
              width={170}
              height={400}
            />
          </Link>

          <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create</span>
                </Link>

                <form
                  action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/" });
                  }}
                >
                  <button type="submit">Log Out</button>
                </form>

                <Link href={`/user/${session?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit">Log In</button>
              </form>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
