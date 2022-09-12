import { ClipboardListIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";

function Bookings() {
  const items = useSelector(selectBasketItems);

  if (items.length === 0) return null;

  return (
    <Link href="/checkout">
      <div className="fixed bottom-10  right-10 z-50 flex h-12 w-12 md:h-14 md:w-14 lg:h-14 lg:w-14  cursor-pointer items-center justify-center rounded-full border-black bg-gray-50">
        {items.length > 0 && (
          <span className="absolute -right-2 -top-2 z-50  flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-[#3EE0C4] text-[10px] text-white">
            {items.length}
          </span>
        )}
        <ClipboardListIcon className="headerIcon h-8 w-8" />
      </div>
    </Link>
  );
}

export default Bookings;