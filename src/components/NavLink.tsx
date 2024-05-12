import Link from "next/link";
import type { LinkType } from "@/types";
import { usePathname } from "next/navigation";

export default function NavLink({ link }: { link: LinkType }) {
  const pathname = usePathname();

  return (
    <Link
      href={link.url}
      className={`rounded p-2 ${
        pathname === link.url && "bg-black text-white"
      }`}
    >
      {link.title}
    </Link>
  );
}
