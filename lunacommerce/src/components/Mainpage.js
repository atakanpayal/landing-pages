import DoubleCard from "./DoubleCard";
import "./Mainpage.css";
import ProductCard from "./ProductCard";
import TrioCard from "./TrioCard";
function Mainpage() {
  return (
    <div className="main-grid">
      <div className="welcome-offer-div">
        <div className="welcome-offer">
          <p className="limited-time">Limited Time: Online Only!</p>
          <p className="big-welcome">
            FINAL<br></br> CLEARANCE
          </p>
          <p className="small-welcome">Take 20% Off 'Sale-Must Haves'</p>
        </div>
      </div>
      <div className="trio-card">
        <TrioCard />
      </div>
      <div className="products">
        <ProductCard />
      </div>
      <div className="double-card">
        <DoubleCard />
      </div>
    </div>
  );
}
export default Mainpage;
