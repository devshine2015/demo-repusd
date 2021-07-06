const initialState = {
  walletAddr: "Connect",
  tokenInfo: {},
  numDefi: 0,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "walletChanged":
      state.walletAddr = action.payload;
      return { ...state, walletAddr: state.walletAddr };
    case "tokenSearched":
      state.tokenInfo = action.payload;
      return { ...state, tokenInfo: state.tokenInfo };
    case "changeSelectDefi":
      state.numDefi = action.payload;
      return { ...state, numDefi: state.numDefi };
    default:
      return state;
  }
}

export default rootReducer;
