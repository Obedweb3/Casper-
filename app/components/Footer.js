import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2024 OBED TECH KENYA. All rights reserved.</p>
        <ul>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms of Service</Link></li>
          <li><Link href="/support">Support</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
        <p>Empowering Kenyan businesses with cutting-edge technology solutions</p>
      </div>
    </footer>
  );
}
