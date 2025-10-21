import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p>
        &#169; 2025 Tung Pham. All rights reserved.{' '}
        <Link to="/source">Credits</Link>
      </p>
    </footer>
  );
}

export default Footer;
