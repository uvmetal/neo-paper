# Overview

This is a paper wallet for the Neo Smart Economy. neo-paper is the introductory work for neo-burner.

This work is largely inspired by, and structurally based on, the work of Austin Griffith for Ethereum. Thank you for your fantastic work, informative videos, and creative problem solving.

See Austin Griffith's Work:

[Burner Wallet](https://github.com/austintgriffith/burner-wallet)

[Paper Wallet](https://github.com/austintgriffith/paper-wallet)

# neo-paper

Welcome to the first official paper wallet for the Neo Smart Economy!

# Intro

neo-paper provides a system to generate paper wallets to seed [neo-burner](https://github.com/uvmetal/neo-burner) with private keys. The goal is also to be able to ease the ability to generate printable batches of wallets for events, merchants, etc.

# Features

Public QR has optional URL along with the Public Address encoded into the QR image.

Private QR has BIP-39 mnemonic seed, WIF, and hex private key encoded into the QR image.

This has only been tested on Ubuntu 18.04 so far!

# Port Module to Neo Smart Economy Status Summary

This section shows which modules have been ported from AG's ethereum version to work in the Neo Smart Economy.

generate.js HAS been ported.

create.js HAS been ported.

index.js HAS been ported.


airdrop.js HAS NOT been ported.

report.js HAS NOT been ported, but is functional. This just prints a list of accounts from the JSON file.

parseListToAccounts.js HAS NOT been ported.

# Install

Please note the easy-pdf-merge package requires java be installed on your system.

```bash
git clone https://github.com/uvemtal/neo-paper
cd neo-paper
yarn
```

# Run

See below.

# Generate Accounts

This section HAS been ported to Neo Smart Economy. NOTE! Make sure you generate at least 2 accounts in order for index process to work!

```bash
node generate.js 2
```
(This will output an `accounts.json` file with the JSON format `[{address,pk,_address,_privateKey,_publicKey,_scriptHash}])`

The format maintains compatibility with AG's work to ease integration and includes basic neon-js style for forward compatibility with Neo Smart Economy.

TODO: add NEP-6

# Edit Design and Copy

Edit `template.html` to make changes and replace `front.png`, `back.png`, `inside-left.png`, and `inside-right.png` to update images.

You can also set a global background with the `background.png` and a quick edit to `template.html`.

# Create Wallets from Accounts

This section HAS been ported to Neo Smart Economy. The current implementation only generates a private key QR image. only a PNG of the private key is created. Full PDF completion is still being developed and tested.

First, get your `template.html` looking right if you want to customize the appearance.

Make sure to generate at least 2 accounts for this command to work!


```bash
node index.js
```

(this will output `wallets.pdf`)

# Print Wallets

```bash
lp wallets.pdf
```

-------------------------

You can print out `private.png` or `public.svg` if you are in a pinch.

<insert image>

Finally... print, fold, cut, and glue your way to freedom!

<insert image>

# Air Dropping

This section HAS NOT been ported to Neo Smart Economy.

<insert image>

# Learn More
