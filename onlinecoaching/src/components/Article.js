import "./Article.scss";
function Article() {
  return (
    <div className="articlewrapper">
      <div class="record_wrap">
        <section class="record">
          <div class="record-arrow">
            <img src="http://www.portalguard.com/images/icons/right-arrow.png" />
          </div>
          <div id="record1" class="record-display1"></div>
          <div class="record-desc">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section class="record">
          <div class="record-arrow">
            <img src="http://www.portalguard.com/images/icons/right-arrow.png" />
          </div>
          <div id="record2" class="record-display2"></div>
          <div class="record-desc">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section class="record">
          <div class="record-arrow">
            <img src="http://www.portalguard.com/images/icons/right-arrow.png" />
          </div>
          <div id="record3" class="record-display3"></div>
          <div class="record-desc">
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Article;
