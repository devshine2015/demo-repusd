import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ethers, BigNumber } from "ethers";
import { Promise } from "bluebird";
//import reserves from "../config/constants/reservesKovan";
import reserves from "../config/constants/reserves";

function mapStateToProps(state) {
  return { walletAddr: state.walletAddr };
}

function AaveDeposit({ walletAddr }) {
  const [tableToggle, setTableToggle] = useState(1);
  const toggleDeposits = () => {
    setTableToggle(1);
  };
  const toggleReserves = () => {
    setTableToggle(0);
  };
  const [ReservesList, setReservesList] = useState([]);
  const [DepositsList, setDepositsList] = useState([]);

  // function getReserves() {
  //   let NETWORK_URL =
  //     "https://kovan.infura.io/v3/d1713ebd37aa4a2492ccd72fe0f3d056";
  //   let provider = new ethers.providers.JsonRpcProvider(NETWORK_URL);
  //   let mainStaking = new ethers.Contract(
  //     "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
  //     ["function getReservesList() external view returns (address[] Reserves)"],
  //     provider
  //   );

  //   try {
  //     console.log("getReserves");
  //     mainStaking.getReservesList().then((res) => {
  //       console.log("--------------", res);
  //       return res;
  //     });
  //   } catch (error) {
  //     console.log("getReserves Error");
  //     return [];
  //   }
  // }

  // async function getReserveList() {
  //   let reserves = await getReserves();
  //   console.log("+++++++++++++", reserves);
  //   return Promise.map(reserves, async (reserve, i) => {
  //     let err = false;
  //     let reserveAddress;
  //     try {
  //       reserveAddress = reserve;
  //     } catch (error) {
  //       err = true;
  //     }
  //     if (!err) {
  //       return {
  //         name: "Name",
  //         symbol: "Symbol",
  //         address: reserveAddress,
  //       };
  //     }
  //   });
  // }

  async function getDeposit(aTokenAddr, walletAddress) {
    // const NETWORK_URL =
    //   "https://kovan.infura.io/v3/d1713ebd37aa4a2492ccd72fe0f3d056";
    const NETWORK_URL =
      "https://mainnet.infura.io/v3/d1713ebd37aa4a2492ccd72fe0f3d056";
    const provider = new ethers.providers.JsonRpcProvider(NETWORK_URL);
    const aToken = new ethers.Contract(
      aTokenAddr,
      [
        "function balanceOf(address wallet) external view returns (uint256 ownTokens)",
      ],
      provider
    );
    let deposit;
    try {
      const res = await aToken.balanceOf(walletAddress);
      deposit = BigNumber.from(res.toString()) / 1e18;
      return deposit;
    } catch (error) {
      console.log("catch,", error);
      return 0;
    }
  }

  async function getDepositsList() {
    console.log(walletAddr);
    return Promise.map(reserves, async (reserve, i) => {
      let err = false;
      let deposit = 0;
      try {
        deposit = await getDeposit(reserve.aTokenAddress, walletAddr);
      } catch (error) {
        console.log("catch,", error);
        err = true;
      }
      if (!err) {
        return {
          symbol: reserve.symbol,
          amount: deposit,
        };
      }
    });
  }

  useEffect(() => {
    if (walletAddr === "Connect") {
      setReservesList([]);
      setDepositsList([]);
    } else {
      getDepositsList().then((res) => {
        setDepositsList(res);
      });

      setReservesList(reserves);
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
          <li className="nav-item" role="presentation" onClick={toggleDeposits}>
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
              Deposits
            </a>
          </li>
          <li className="nav-item" role="presentation" onClick={toggleReserves}>
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
              Reserves
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
                <th>Symbol</th>
                <th>MY Deposit Amount</th>
              </tr>
            </thead>
            <tbody>
              {!!DepositsList &&
                DepositsList.map((e, index) => {
                  if (e.amount) {
                    return (
                      <tr key={index}>
                        <td>{e.symbol}</td>
                        <td>{e.amount}</td>
                      </tr>
                    );
                  }
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
                <th>Name</th>
                <th>Symbol</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {ReservesList.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{e.name}</td>
                    <td>{e.symbol}</td>
                    <td>{e.aTokenAddress}</td>
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

export default connect(mapStateToProps)(AaveDeposit);
