import DetailTable from "./Detailtable";
import AaveDeposit from "./DepositAAVE";
import SelectDefi from "./SelectDefi";
import { connect } from "react-redux";

function Cryptopage({ numDefi }) {
  console.log(numDefi);
  return (
    <section className="data_table_connect">
      <div className="container">
        <SelectDefi />
        <br />
        {numDefi * 1 === 0 && <AaveDeposit />}
        {numDefi * 1 === 1 && <DetailTable />}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  numDefi: state.numDefi,
});

export default connect(mapStateToProps)(Cryptopage);
