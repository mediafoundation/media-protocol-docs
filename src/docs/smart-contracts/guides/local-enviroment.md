---
title: Set Up Your Local Environment
sidebar_label: Local Environment
sidebar_position: 0
---

One of the most common questions we get asked is what development toolset to use to build on-chain integrations with the Media Protocol. There’s no right answer to this question but for this guide we’ll recommend a common one: `Node.js` , `NPM` and `Hardhat`.

At the end of this guide you’ll have a development environment set up that you can use to build the rest of the examples in the Guides section of the docs, or start your own integration project!

<!-- To get you started as quickly as possible, we have provided the [Quick Start](#quick-start) section below where you can clone a boilerplate and get building. If you prefer to start from scratch and learn the underlying concepts, jump to the [Start from Scratch](#or-start-from-scratch) section. 

## Quick Start

The Media Protocol First Contract Example [boilerplate repo](https://github.com/mediafoundation/media-protocol-first-contract-example) provides a basic Hardhat environment with required imports already pre-loaded for you. You can simply clone it and install the dependencies: 

```bash
git clone https://github.com/mediafoundation/media-protocol-first-contract-example
cd media-protocol-first-contract-example
npm install 
```

Then hop to the [Local Node with a Mainnet Fork](#local-node-with-a-mainnet-fork) section to complete your set up and start developing. 

## Or... Start from Scratch -->

In the following sections, we’ll walk through the steps to create the same environment set up as the boilerplate from scratch and learn the underlying concepts.  

## Set Up Dependencies

Node is one of the most common Javascript runtimes. For our purposes it will provide scripting we can use to compile and test our contracts. If you haven’t already, install NodeJS and its package manager NPM ([instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)). Once those dependencies are set up, we can initialize our project: 

```bash
$ npm init
```

[Hardhat](https://hardhat.org/) is an Ethereum development toolset that provides a number of powerful features including Solidity compilation, testing and deployment, all in a single convenient wrapper. We’ll use NPM to add Hardhat to our project: 

```bash
$ npm add --save-dev hardhat
```

With Hardhat installed we can invoke it to scaffold our development environment. When you first run Hardhat you’ll have the option of starting with a templated Javascript or Typescript project or an empty project. Since Hardhat relies heavily on folder structure, we recommend starting  with either of the templated options. Initialize Hardhat and follow the prompts to make your selection and answer yes to the follow up prompts:

```bash
$ npx hardhat init
```

Once the Hardhat initialization completes, take a look around at what got set up. The folder structure should be intuitive, `./contracts` is where you’ll write your Solidity contracts, `./test` is where you’ll write your tests and `./scripts` is where you can write scripts to perform actions like deploying. Out of the box, Hardhat is configured to use this folder structure so don’t change it unless you know what you’re doing!

Next we’ll use NPM to add the Media Protocol contracts which will allow us to seamlessly integrate with the protocol in our new contracts:

```bash
$ npm add @mediafaoundation/media-protocol-contracts
```
:::info
Please note that this package is missing audits, it is still not public. We will update this guide once it is public. Sorry for the inconvenience this may cause. We are working hard to make it public as soon as possible.
:::

The Media Protocol contracts were written using a past version of the solidity compiler. Since we’re building integrations on these contracts we have to tell Hardhat to use the correct compiler to build these files. Go to the `./hardhat.config.js` file and change the Solidity version to “0.8.17”: 

```jsx
// ...
module.exports = {
  solidity: "0.8.17",
};
```

That’s it! You should now have a functional development environment to start building on chain Media Protocol integrations. Let’s run a quick test to confirm everything is set up properly. 

## Compile a Basic Contract

To confirm that our environment is configured correctly we’ll attempt to compile a basic Initialize Marketplace contract. Create a new file, `./contracts/InitializeMarketplace.sol` and paste the following code into it<!--  (a detailed guide to this contract can be found [here](./basic/intialize-marketplace)) -->: 


```jsx
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@mediafoundation/media-protocol-contracts/contracts/Marketplaces.sol";

contract SimpleInitializeMarketplace {
    Marketplaces marketplaces;
    constructor(address _marketplacesAddress) {
        marketplaces = Marketplaces(_marketplacesAddress);
    }

    function initializeMarketplace() external returns (uint marketplaceId) {
        marketplaceId = marketplaces.initializeMarketplace(
            5000000000000000000, // 5 LP tokens required stake
            msg.sender, // owner of the marketplace
            3 // 3% fee
        );
    }
}

```

To compile all the contracts in the `./contracts` folder, we’ll use the Hardhat compile command: 

```bash
$ npx hardhat compile
```

If the environment is compiled correctly you should see the message: 

```bash
Compiled { x } Solidity files successfully
```

## Local Node with a Mainnet Fork

When building and testing integrations with on chain protocols, developers often hit a problem: the liquidity, marketplaces, providers, and offers on the live chain are critical to thoroughly test their code but testing against a live network like Mainnet can be extremely expensive. 

Luckily, Hardhat has a powerful feature that allows developers to run a local Ethereum test node that uses a fork of Mainnet. This allows us to test against simulated offers for free. 

As a prerequisite we’ll need an RPC that supports [Forking](https://hardhat.org/hardhat-network/docs/guides/forking-other-networks). [Alchemy](https://www.alchemy.com/) includes forking in its free tier so it’s a great place to start (sign up and get an API key [here](https://www.alchemy.com/)).  You can then run the following Hardhat command to start your node:

```bash
$ npx hardhat node --fork https://eth-mainnet.alchemyapi.io/v2/{YOUR_API_KEY}
```

With your local node up and running, you can use the `--network localhost` flag in tests to point the Hardhat testing suite to that local node: 

```bash
$ npx hardhat test --network localhost
```

## Next Steps

With your environment set up you’re ready to start building. Jump over to the guides section to learn about the Media Protocol functions you can integrate with. Remember to add all contracts (.sol files) to the `./contracts` folder and their subsequent tests to the `./tests` folder. You can then test them against your local forked node by running: 

```bash
$ npx hardhat test --network localhost
```