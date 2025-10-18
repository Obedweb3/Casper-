import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p>OBED TECH KENYA - Your Partner in Digital Solutions</p>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/webhosting">Web Hosting</Link></li>
        <li><Link href="/youtube">Downloaders</Link></li>
        <li><a href="mailto:info@obedtechkenya.com">Contact Us</a></li>
      </ul>
      <p>&copy; 2025 OBED TECH KENYA. All rights reserved.</p>
      <p>Follow us: <a href="https://twitter.com">Twitter</a> | <a href="https://facebook.com">Facebook</a> | <a href="https://instagram.com">Instagram</a></p>
    </footer>
  );
}
