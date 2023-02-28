// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
contract readStorage {
  function hexToNum(bytes32 _hexValue)  public pure returns(uint256 hexValue){
    hexValue = uint256(_hexValue);
  }
}