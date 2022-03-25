const hre = require('hardhat');
const fs = require('fs');
async function main() {
    
    // Get contract and deploy
    const Token = await hre.ethers.getContractFactory('forbitspace');   

    const token = await Token.deploy();
    await token.deployed();
    
    const data = {
        ContractAddress: token.address,
        abi: JSON.parse(token.interface.format("json"))
    };
    console.log({
        address: token.address
    });
    fs.writeFileSync("abi.json", JSON.stringify(data));

}


main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log('ERROR !!!!', error);
        process.exit(1);
    })
