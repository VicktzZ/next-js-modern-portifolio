import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <Link href='/' className="text-sm bg-black rounded-md p-1">
        <span className='text-white'>Vitor</span>
        <span>.dev</span>
      </Link>
    </div>
  )
}