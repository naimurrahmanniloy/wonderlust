"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="flex items-center justify-between bg-white p-5">
      <ul className="flex gap-4">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destination"}>Destination</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
      </ul>
      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          height={150}
          width={150}
          alt="logo"
        />
      </div>
      <ul className="flex gap-4 items-center">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        {user ? (
          <>
            <li>
              <Avatar>
                <Avatar.Image
                  referrerPolicy="no-referrer"
                  alt="John Doe"
                  src={user?.image}
                />
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </li>
            <li>
              <Button
                variant="danger"
                className="rounded"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
