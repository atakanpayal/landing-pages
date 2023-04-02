import "./Navbar.css";
function ResNavbar() {
  return (
    <header>
      <nav class="contain">
        <label for="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <input type="checkbox" id="hamburger" />
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">FEATURED PRODUCTS</a>
          </li>
          <li>
            <a href="#timeline">NEW ARRIVALS</a>
          </li>
          <li>
            <a href="#">
              <span>LUNA</span>
              <span>ECOMMERCE</span>
            </a>
          </li>
          <li>
            <a href="#testimonials">WOMEN</a>
          </li>
          <li>
            <a href="#booking">MAN</a>
          </li>
          <li>
            <a href="#contact">ACCESSORIES</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default ResNavbar;
