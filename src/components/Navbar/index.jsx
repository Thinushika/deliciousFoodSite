import {styles} from './styles.css';

export default function Navbar() {
  return (
    <>
      <nav class="main-nav">
        <ul>
            <li><a href="/join.html" class="join">Join the club</a></li>
            <li><a href="/news.html">Latest news</a></li>
            <li><a href="/games.html">New games</a></li>
            <li><a href="/contact.html">Contact</a></li>
        </ul>
    </nav>
    </>
  );
}
