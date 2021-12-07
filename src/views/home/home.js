import React, { useEffect } from "react";
import { Context as HomeContext } from "../../context/HomeContext";
import HomeComponent from "../../components/home/homeComp";

const Home = () => {
  const { state, landingPage } = React.useContext(HomeContext);
  
  useEffect(() => {
    landingPage();
  }, []);


  console.log(state.homepageData ? state.homepageData : null);
  return (
    <div>
      <div className="container-wrap">
        <div className="inside-container">
          <h3 className="title">Deposit Request</h3>
          <img alt="Merchant Logo" src className="merchlogo" />
          <div className="clear" />
          <div className="form-wrap">
            <form action="#" method="post">
              <div className="form-group">
                <div className="form-set">

                  <label htmlFor="platform" className="label">
                    {/* Platform */}
                    {state.homepageData.totalResults}
                  </label>
                  <br />
                  <select id="platform" name="platform" className="field">
                    <option value="MT4">MT4</option>
                  </select>
                </div>
                <div className="form-set right">
                  <label htmlFor="account" className="label">
                    Trading Account
                  </label>
                  <br />
                  <input
                    type="text"
                    name="account"
                    id="account"
                    className="field"
                  />
                </div>
              </div>
              <br />
              <div className="form-group">
                <div className="form-set">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <br />
                  <input type="text" name="name" id="name" className="field" />
                </div>
                <div className="form-set right">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <br />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="field"
                  />
                </div>
              </div>
              <br />
              <div className="form-group">
                <div className="form-set full">
                  <label htmlFor="amount" className="label">
                    Deposit Amount in USD
                  </label>
                  <br />
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    className="field"
                    style={{ width: "100% !important" }}
                  />
                </div>
              </div>
              <br />
              <br />
              <button id="next" className="button">
                NEXT <img src="img/Arrow1.png" />
              </button>
            </form>
          </div>
        </div>
        <footer className="footer">
          <h6 className="poweredby">POWERED BY</h6>
          <img src="img/np-white.png" alt="NoriaPay" width="10%" />
        </footer>
      </div>
      <HomeComponent />
    </div>
  );
};

export default Home;
