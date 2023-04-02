import "./TrioCard.css";
function TrioCard() {
  return (
    <div class="wrapper">
      <div class="cols">
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div
              class="front"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div class="inner">
                <p>Women</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div
              class="front"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1504733059175-e37302dfce31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div class="inner">
                <p>Man</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div
              class="front"
              style={{
                backgroundImage:
                  "url(" +
                  "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" +
                  ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div class="inner">
                <p>Accessories</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias cum repellat velit quae suscipit c.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TrioCard;
