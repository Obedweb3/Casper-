'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/webhosting">Web Hosting Solutions</Link></li>
        <li><Link href="/youtube">Social Media Downloaders</Link></li>
      </ul>
    </nav>
  );
}
