import "./DoubleCard.css";
function DoubleCard() {
  return (
    <section class="hero-section">
      <div class="card-grid">
        <a class="card-double" href="#">
          <div
            class="card__background"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1619021025529-661847b00d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div class="card__content">
            <p class="card__category">NEW ARRIVALS</p>
            <h3 class="card__heading">TOUCH OF COLOR</h3>
          </div>
        </a>
        <a class="card-double" href="#">
          <div
            class="card__background"
            style={{
              backgroundImage:
                "url(" +
                "https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div class="card__content">
            <p class="card__category">DISCOVER THEM ALL</p>
            <h3 class="card__heading">THIS SEASONS BOMBER JACKETS</h3>
          </div>
        </a>
      </div>
    </section>
  );
}
export default DoubleCard;
