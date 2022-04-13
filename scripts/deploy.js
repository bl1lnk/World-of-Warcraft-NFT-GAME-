const main = async() =>{
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Hunter", "Paladin", "Rogue"],       // Names
        ["https://i.imgur.com/2NMZ3V9.png", // Images
        "https://i.imgur.com/xb3M6jb.png", 
        "https://i.imgur.com/PyTFBDN.png"],
        [100, 200, 300],                    // HP values
        [100, 50, 75],
        "Illidan ",
        "https://i.imgur.com/yY6t92I.png",
        1000000,
        2
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");
    
    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");

    
txn = await gameContract.attackBoss();
await txn.wait();

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");
    
    console.log("Done deploying and minting !");
};

const runMain = async()=>{
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
};

runMain();