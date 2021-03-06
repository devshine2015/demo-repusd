const reserves = [
  {
    name: "Aave Token",
    symbol: "AAVE",
    address: "0xb597cd8d3217ea6477232f9217fa70837ff667af",
    aTokenAddress: "0x6d93ef8093F067f19d33C2360cE17b20a8c45CD7",
    decimals: 18,
  },
  {
    name: "Basic Attention Token",
    symbol: "BAT",
    address: "0x2d12186fbb9f9a8c28b3ffdd4c42920f8539d738",
    aTokenAddress: "0x28f92b4c8Bdab37AF6C4422927158560b4bB446e",
    decimals: 18,
  },
  {
    name: "Binance USD",
    symbol: "BUSD",
    address: "0x4c6e1efc12fdfd568186b7baec0a43fffb4bcccf",
    aTokenAddress: "0xfe3E41Db9071458e39104711eF1Fa668bae44e85",
    decimals: 18,
  },
  {
    name: "DAI",
    symbol: "DAI",
    address: "0xff795577d9ac8bd7d90ee22b6c1703490b6512fd",
    aTokenAddress: "0xdCf0aF9e59C002FA3AA091a46196b37530FD48a8",
    decimals: 18,
  },
  {
    name: "Enjin Coin",
    symbol: "ENJ",
    address: "0xc64f90cd7b564d3ab580eb20a102a8238e218be2",
    aTokenAddress: "0x1d1F2Cb9ED46A8d5bf0254E5CE400514D62d55F0",
    decimals: 18,
  },
  {
    name: "Kyber Network",
    symbol: "KNC",
    address: "0x3f80c39c0b96a0945f9f0e9f55d8a8891c5671a8",
    aTokenAddress: "0xdDdEC78e29f3b579402C42ca1fd633DE00D23940",
    decimals: 18,
  },
  {
    name: "ChainLink",
    symbol: "LINK",
    address: "0xad5ce863ae3e4e9394ab43d4ba0d80f419f61789",
    aTokenAddress: "0xeD9044cA8F7caCe8eACcD40367cF2bee39eD1b04",
    decimals: 18,
  },
  {
    name: "Decentraland",
    symbol: "MANA",
    address: "0x738dc6380157429e957d223e6333dc385c85fec7",
    aTokenAddress: "0xA288B1767C91Aa9d8A14a65dC6B2E7ce68c02DFd",
    decimals: 18,
  },
  {
    name: "Maker",
    symbol: "MKR",
    address: "0x61e4cae3da7fd189e52a4879c7b8067d7c2cc0fa",
    aTokenAddress: "0x9d9DaBEae6BcBa881404A9e499B13B2B3C1F329E",
    decimals: 18,
  },
  {
    name: "Republic Token",
    symbol: "REN",
    address: "0x5eebf65a6746eed38042353ba84c8e37ed58ac6f",
    aTokenAddress: "0x01875ee883B32f5f961A92eC597DcEe2dB7589c1",
    decimals: 18,
  },
  {
    name: "SNX",
    symbol: "SNX",
    address: "0x7fdb81b0b8a010dd4ffc57c3fecbf145ba8bd947",
    aTokenAddress: "0xAA74AdA92dE4AbC0371b75eeA7b1bd790a69C9e1",
    decimals: 18,
  },
  {
    name: "Synth sUSD",
    symbol: "sUSD",
    address: "0x99b267b9d96616f906d53c26decf3c5672401282",
    aTokenAddress: "0x9488fF6F29ff75bfdF8cd5a95C6aa679bc7Cd65c",
    decimals: 18,
  },
  {
    name: "TrueUSD",
    symbol: "TUSD",
    address: "0x016750ac630f711882812f24dba6c95b9d35856d",
    aTokenAddress: "0x39914AdBe5fDbC2b9ADeedE8Bcd444b20B039204",
    decimals: 18,
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    address: "0xe22da380ee6b445bb8273c81944adeb6e8450422",
    aTokenAddress: "0x39914AdBe5fDbC2b9ADeedE8Bcd444b20B039204",
    decimals: 18,
  },
  {
    name: "USDT Coin",
    symbol: "USDT",
    address: "0x13512979ade267ab5100878e2e0f485b568328a4",
    aTokenAddress: "0xFF3c8bc103682FA918c954E84F5056aB4DD5189d",
    decimals: 18,
  },
  {
    name: "WBTC",
    symbol: "WBTC",
    address: "0xd1b98b6607330172f1d991521145a22bce793277",
    aTokenAddress: "0x62538022242513971478fcC7Fb27ae304AB5C29F",
    decimals: 18,
  },
  {
    name: "Wrapped Ether",
    symbol: "WETH",
    address: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
    aTokenAddress: "0x87b1f4cf9BD63f7BBD3eE1aD04E8F52540349347",
    decimals: 18,
  },
  {
    name: "yearn.finance",
    symbol: "YFI",
    address: "0xb7c325266ec274feb1354021d27fa3e3379d840d",
    aTokenAddress: "0xF6c7282943Beac96f6C70252EF35501a6c1148Fe",
    decimals: 18,
  },
  {
    name: "0x Coin",
    symbol: "ZRX",
    address: "0xd0d76886cf8d952ca26177eb7cfdf83bad08c00c",
    aTokenAddress: "0xf02D7C23948c9178C68f5294748EB778Ab5e5D9c",
    decimals: 18,
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    address: "0x075a36ba8846c6b6f53644fdd3bf17e5151789dc",
    aTokenAddress: "0x601FFc9b7309bdb0132a02a569FBd57d6D1740f2",
    decimals: 18,
  },
  {
    name: "Ampleforth",
    symbol: "AMPL",
    address: "0x3e0437898a5667a4769b1ca5a34aab1ae7e81377",
    aTokenAddress: "0xb8a16bbab34FA7A5C09Ec7679EAfb8fEC06897bc",
    decimals: 18,
  },
];

export default reserves;
