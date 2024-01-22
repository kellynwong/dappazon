const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Dappazon", () => {
  let dappazon;
  let deployer, buyer;
  beforeEach(async () => {
    // Setup accounts
    [deployer, buyer] = await ethers.getSigners();

    // Deploy contract
    const Dappazon = await ethers.getContractFactory("Dappazon");
    dappazon = await Dappazon.deploy();
  });

  describe("Deployment", () => {
    // like categories
    it("sets the owner", async () => {
      const result = await dappazon.owner();
      expect(result).to.equal(deployer.address);
    });
    it("has a name", async () => {
      const result = await dappazon.name();
      expect(result).to.equal("Dappazon");
    });
  });
});
