require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food elder raise sister come harvest pave army genuine'; 
let testAccounts = [
"0xd93cdf863997cb630d8de8e3cd8773a417e15da2d159e21f1734ca1efd8a228e",
"0x2e92f334548256d10e7d6b0fec37584ff34c6459f580d6c64bf18a533ce90e33",
"0x37d80bd40d1efffc89231170fef215b52d9ec3fa7f5724f0f858f616019b9ea8",
"0xf93136f124ad66ba2be20c2de719a7e2760890546a5c1cadfb7122de8fc3d642",
"0x43e748ae6cdddbc3e1944a40b6df81b17a409e0dd395612836a8b82d838da758",
"0xee662764b65328f06c2b2bc841ddbcc361d94d32541a31123139ebacec2d3268",
"0xccac6795f4b1cca0b6a2309bd51b7ddb0ac5ba7f1c5c701c2c808fa61cf7a346",
"0x8db4e1bc473da27007c992ae4080f833d6bf51dead19854a8fe83e87d145236c",
"0x9bb357c5e946eb719b31c5cb443c1b00015591d0437a6f2a5a24db6dd57dc267",
"0xf8c8ab13b041eb5506b2d02171cd9439578a0415b6165a0bdd3f311d2ca67eb0"
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

