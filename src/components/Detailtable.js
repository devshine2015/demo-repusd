import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ethers, BigNumber } from "ethers";
import { Promise } from "bluebird";
import farms from "../config/constants/farms";

function mapStateToProps(state) {
  return { walletAddr: state.walletAddr, tokenInfo: state.tokenInfo };
}

function DetailTable({ walletAddr }) {
  const [tableToggle, setTableToggle] = useState(1);
  const toggleAlert = () => {
    setTableToggle(1);
  };
  const toggleWallet = () => {
    setTableToggle(0);
  };
  const [farmList, setFarmList] = useState([]);
  const [repList, setRepList] = useState([]);

  function getUserLpAmountList() {
    const NETWORK_URL = "https://bsc-dataseed1.defibit.io"; //const NETWORK_URL = "https://bsc-dataseed1.binance.org/";
    const provider = new ethers.providers.JsonRpcProvider(NETWORK_URL);
    const mainStaking = new ethers.Contract(
      "0x73feaa1eE314F8c655E354234017bE2193C9E24E",
      [
        "function userInfo(uint256 pid, address wallet) external view returns (uint256 amount, uint256 reward)",
      ],
      provider
    );

    return Promise.map(farms.slice(0, 30), async (farm, i) => {
      let err = false;
      let res, amount, rewardDebt;
      try {
        res = await mainStaking.userInfo(
          farm.pid,
          "0x8181e3759fe397706f6f859c7e71496bf403723d"
        );
        amount = BigNumber.from(res[0].toString()) / 1e18;
        rewardDebt = BigNumber.from(res[1].toString()) / 1e18;
      } catch (error) {
        err = true;
      }
      if (!err) {
        return {
          farm: farm.lpSymbol,
          pid: farm.pid,
          amount: amount,
          rewardDebt: rewardDebt,
        };
      }
    });
  }

  useEffect(() => {
    if (walletAddr === "Connect") {
      setRepList([]);
      setFarmList([]);
    } else {
      getUserLpAmountList().then((res) => {
        setRepList(res);
      });
      setFarmList(farms);
    }
  }, [walletAddr]);

  return (
    <div className="colored_table_data">
      <div className="top_not_sec">
        <ul
          className="nav nav-pills mb-3 justify_mobile"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation" onClick={toggleAlert}>
            <a
              className={tableToggle ? "nav-link active" : "nav-link"}
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <span className="icon-iconly_bell_gray b_font">
                <span className="path1" />
                <span className="path2" />
              </span>{" "}
              Reputation
            </a>
          </li>
          <li className="nav-item" role="presentation" onClick={toggleWallet}>
            <a
              className={
                tableToggle ? "nav-link wallet" : "nav-link wallet active"
              }
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              <span className="icon-iconly_wallet b_font">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
              </span>
              Farms List
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className={
            tableToggle
              ? "tab-pane fade table-wrap show active"
              : "tab-pane table-wrap fade"
          }
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <h3 className="text-center">{walletAddr}</h3>
          <table className="table table-bordered table-hover mytable dataTable no-footer dtr-inline">
            <thead>
              <tr>
                <th>Farm Symbol</th>
                <th>MY LP Amount</th>
                <th>MY LP RewardDebt</th>
              </tr>
            </thead>
            <tbody>
              {!!repList &&
                repList.map((e, index) => {
                  return (
                    <tr key={index}>
                      <td>{e.farm}</td>
                      <td>{e.amount}</td>
                      <td>{e.rewardDebt}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div
          className={
            tableToggle
              ? "tab-pane fade table-wrap"
              : "tab-pane fade active show table-wrap"
          }
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <table className="table table-bordered table-hover mytable dataTable no-footer dtr-inline">
            <thead>
              <tr>
                <th>PID</th>
                <th>Symbol</th>
                <th>LP Address(56)</th>
              </tr>
            </thead>
            <tbody>
              {farmList.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{e.pid}</td>
                    <td>{e.lpSymbol}</td>
                    <td>{e.lpAddresses["56"]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(DetailTable);
