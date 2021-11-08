require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift raise pitch punch install crew equal gesture'; 
let testAccounts = [
"0x1efe81c2c6e15b3dad584a807452f47d37a7c659f1715acb96c7730ab0a8c7a6",
"0x3a842a0b56b64f62276f0b51fc0ad6f378eca4e985ec5d067aa492cb2a8a342e",
"0x24dcb17bd253d2196826569b685759b62a661bc2be7f74465be4e9b76eed6025",
"0x972b8d475772eb8b165d7c1a9471cd79fb7d9827ede73c4244caa3c55320ac52",
"0x3921bc8a6919ad8193819fa14c018348c040df6d2b35b0e07492d0f0f662f2d6",
"0xc80b55a8bb63f89e18fb73faf63998885e9d5596333ff30a08dff3b4481f8761",
"0xd9807bd4fc1ab0b8ed85bc630d94b46c08c8c58a2c00f1910505ad5ec43661dd",
"0x5aa917d7974c4870c1a5e6e25f777f1122034d85758a64878a1c747c0847316f",
"0xe22de159dd42cfa78bf1668b664195710689a737d3116e7d213ba21e8cc2fb0d",
"0x17c327bebed8a2f6ca20ef231b8faa12f3398c34ee9029b5a5220f68ee5e4199"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

