// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract NILDealRegistry is Ownable {
    constructor() Ownable(msg.sender) {}
    enum Status { Draft, Signed, Active, Completed, Terminated }

    struct Deal {
        address athlete;
        address brand;
        bytes32 contractHash;
        string contractURI;
        string dealType;
        uint64 startDate;
        uint64 endDate;
        bool athleteSigned;
        bool brandSigned;
        Status status;
        bool complianceAttested;
        address complianceAttestor;
    }

    uint256 public nextDealId = 1;
    mapping(uint256 => Deal) public deals;

    event DealRegistered(uint256 indexed dealId, address athlete, address brand);
    event DealSigned(uint256 indexed dealId, address signer);
    event ComplianceAttested(uint256 indexed dealId, address attestor);

    error NotAuthorized();
    error AlreadySigned();
    error DealNotSigned();

    function registerDeal(
        address athlete,
        address brand,
        bytes32 contractHash,
        string calldata contractURI,
        string calldata dealType,
        uint64 startDate,
        uint64 endDate
    ) external returns (uint256) {
        require(athlete != address(0) && brand != address(0), "invalid parties");
        require(contractHash != bytes32(0), "invalid hash");
        require(startDate < endDate, "invalid dates");

        uint256 dealId = nextDealId++;
        deals[dealId] = Deal({
            athlete: athlete,
            brand: brand,
            contractHash: contractHash,
            contractURI: contractURI,
            dealType: dealType,
            startDate: startDate,
            endDate: endDate,
            athleteSigned: false,
            brandSigned: false,
            status: Status.Draft,
            complianceAttested: false,
            complianceAttestor: address(0)
        });

        emit DealRegistered(dealId, athlete, brand);
        return dealId;
    }

    function signDeal(uint256 dealId) external {
        Deal storage d = deals[dealId];

        if (msg.sender != d.athlete && msg.sender != d.brand) revert NotAuthorized();

        if (msg.sender == d.athlete) {
            if (d.athleteSigned) revert AlreadySigned();
            d.athleteSigned = true;
        } else {
            if (d.brandSigned) revert AlreadySigned();
            d.brandSigned = true;
        }

        emit DealSigned(dealId, msg.sender);

        if (d.athleteSigned && d.brandSigned) {
            d.status = Status.Signed;
        }
    }

    function attestCompliance(uint256 dealId) external onlyOwner {
        Deal storage d = deals[dealId];
        if (d.status != Status.Signed) revert DealNotSigned();

        d.complianceAttested = true;
        d.complianceAttestor = msg.sender;

        emit ComplianceAttested(dealId, msg.sender);
    }

    function getDeal(uint256 dealId) external view returns (Deal memory) {
        return deals[dealId];
    }
}
