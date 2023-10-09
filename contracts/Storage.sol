// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Storage {
    string private data;

    function setData(string memory _newData) public {
        data = _newData;
    }

    function getData() public view returns (string memory) {
        return data;
    }
}
