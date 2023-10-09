## Swiss Storage
### Overview
This repository contains a Solidity smart contract named "Storage," designed to store and retrieve a string. The contract allows you to store and retrieve data securely on the Ethereum blockchain.
#### Contract Addresses
#### Mumbai Testnet Address: 0x97FF8d7fa8dBb034cc787252c02F9D1DDB3f8ABf
#### Swisstronik Testnet Address: 0x3C4558898e02b055E211f9081eeda8f3E415ceb1

### Description: 
This function allows you to set a new string value in the contract's storage. You can update the stored data with this function.
Parameters: _newData (string) - The new data to be stored.
Visibility: Public
getData()
Description: This function allows you to retrieve the currently stored string data from the contract. It provides a read-only view of the stored data.
Returns: string - The stored data.
Visibility: Public View (Read-only)
#### Usage
To interact with this contract, follow these steps:
Setting Data: You can call the setData function to set a new string value in the contract's storage. Provide the new data as an argument to this function.
Retrieving Data: You can retrieve the stored string data by calling the getData function. This function is read-only and does not modify the contract state.

