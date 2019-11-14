# Overview

`neo-paper v1.0.1`

This is a paper wallet for the Neo Smart Economy. neo-paper is the introductory work for neo-burner.

This work has been mostly refactored now, but was largely inspired by, and originally structurally based on, the work of Austin Griffith for Ethereum. Thank you for your fantastic work, informative videos, and creative problem solving.

See Austin Griffith's Work:

[Burner Wallet](https://github.com/austintgriffith/burner-wallet)

[Paper Wallet](https://github.com/austintgriffith/paper-wallet)

# neo-paper

Welcome to the paper wallet for the Neo Smart Economy!

![neo-paper](/images/neo-paper-ex.png?raw=true "Optional Title")

# Intro

neo-paper provides a system to generate paper wallets to seed [neo-burner](https://github.com/uvmetal/neo-burner) with private keys. The goal is also to be able to ease the ability to generate printable batches of wallets for events, merchants, etc.

# Features

Public QR has is the public address. Share this to get loot!

URL QR is an optional URL. Follow this to download, learn, or do web stuff.

WIF QR is the private key in a Wallet Import Format. DO NOT SHARE. You can scan this to import your account into a mobile or desktop wallet.

BIP-39 QR is the mnemonic seed of your hex private key encoded into a human-readable format. DO NOT SHARE. You only need to scan this if you want to save or transcribe a copy of your recovery seed.

This has only been tested on Ubuntu 18.04 so far!

# Todo

1. Add branding with custom neo-paper logo.

# Install

Please note the easy-pdf-merge package requires Java be installed on your system.

```bash
git clone https://github.com/uvemtal/neo-paper
cd neo-paper
yarn
```

# Run

See below.

# Generate Accounts

Generate n accounts, 2 (by default) if no argument is provided, and store them to `accounts.json`.

```bash
node accounts.js [n]
```
This will output an `accounts.json` file with the JSON format: `[{address,pk,_address,_privateKey,_publicKey,_scriptHash, _WIF}]`

The format maintains compatibility with AG's work to ease integration and includes basic neon-js style for forward compatibility with Neo Smart Economy.

# Edit Design and Copy

Edit `template.html` to make changes.

You can also set a global background with the `background.png`.

# Create Wallets from Accounts

`wallets.js` calls `qrpdf.js` for each account in `accounts.json` and merges the `generated.pdf` files into a single `wallets.pdf` for easy printing.

First, get your `template.html` looking right if you want to customize the appearance. URL argument defaults to https://o3.network if you do not provide it as a CLI argument.

```bash
node wallets.js [URL]
```

(this will output `wallets.pdf` )

## Public QR Contents

You can share this with everyone!

- Public Neo Smart Economy Account Address. Get Loot!

## URL QR Contents

You can share this with everyone!

- URL (defaults to https://o3.network if called by `wallets.js`, but can be changed with CLI)

## Private QR Contents

DO NOT SHARE THIS WITH ANYONE! Scan this to transfer your account to a mobile or desktop wallet.

- WIF (Wallet Import Format)
  - This is an encoded private key (basically a friendlier text version), but it is still un-encrypted.
  - You send loot with this so guard it with your life!

## BIP-39 Seed QR

- BIP-39 Recovery Seed
  - This is a human-readable version of your private key. If anyone gets this you're in trouble. It is here to make it easier to transcribe your key if you should need to use rock and paper (did your copy and paste break?).

# Print Wallets

```bash
lp wallets.pdf
```

# NITTY GRITTY

Get on down with ya bad self.

# qrpdf.js

This creates a pdf of qr codes containing all the wallet information for an account passed on the command line.
`template.html` is used to produce `generated.html` which produces `generated.pdf`.


```bash
node qrpdf.js <public address> <private key> <URL> <WIF>
```

# Air Drop

Coming soon!


# Learn More


# A Note on html-pdf

This build does not accept HTML from random sources. You control your own template.html. This means https://www.npmjs.com/advisories/1095 is not relevant at this moment. If you plan to use this source on a public facing system where unsanitized HTML is used you should rethink using html-pdf.
