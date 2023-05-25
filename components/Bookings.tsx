import { ClipboardListIcon } from "@heroicons/react/outline";
import Link from "next/link";

function Bookings() { 
  return (
    <Link href="/checkout">
      <div className="fixed bottom-10  right-10 z-50 flex h-12 w-12 md:h-14 md:w-14 lg:h-14 lg:w-14  cursor-pointer items-center justify-center rounded-full border-black bg-gray-50">     
        <ClipboardListIcon className="headerIcon h-8 w-8" />
      </div>
    </Link>
  );
}

export default Bookings;