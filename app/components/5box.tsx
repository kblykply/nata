"use client";

import Image from "next/image";
import Link from "next/link";

export default function InfoSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full px-4 py-10">
      {/* Box 1 */}
      <Link href="/page1" className="relative aspect-[3/4] overflow-hidden bg-white rounded-lg shadow block">
        <Image
          src="/slider/slider/alt1.jpg"
          alt="Alt 1"
          fill
          className="object-contain"
          priority
        />
      </Link>

      {/* Box 2 */}
      <Link href="/page2" className="relative aspect-[3/4] overflow-hidden bg-white rounded-lg shadow block">
        <Image
          src="/slider/slider/alt2.jpg"
          alt="Alt 2"
          fill
          className="object-contain"
          priority
        />
      </Link>

      {/* Box 3 */}
      <Link href="/page3" className="relative aspect-[3/4] overflow-hidden bg-white rounded-lg shadow block">
        <Image
          src="/slider/slider/alt3.jpg"
          alt="Alt 3"
          fill
          className="object-contain"
          priority
        />
      </Link>

      {/* Box 4 */}
      <Link href="/page4" className="relative aspect-[3/4] overflow-hidden bg-white rounded-lg shadow block">
        <Image
          src="/slider/slider/alt4.jpg"
          alt="Alt 4"
          fill
          className="object-contain"
          priority
        />
      </Link>

      {/* Box 5 */}
      <Link href="/page5" className="relative aspect-[3/4] overflow-hidden bg-white rounded-lg shadow block">
        <Image
          src="/slider/slider/alt5.jpg"
          alt="Alt 5"
          fill
          className="object-contain"
          priority
        />
      </Link>
    </section>
  );
}
