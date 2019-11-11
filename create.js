const base64url = require('base64url')

const pdf = require('html-pdf')
const bip39 = require('bip39')
const qr = require('qr-image')
const fs = require('fs')
const util = require('util')
const { default: Neon, wallet, api, rpc } = require('@cityofzion/neon-js')
// const WIF = require('wif')

// TODO: Add WIF format to QR
// TODO: Add BIP39 format to QR

const COMPRESS = false

var publicAddress = process.argv[2]
let PK = process.argv[3]
let URL = process.argv[4]
if (!URL) URL = ''

let WIF = process.argv[5]

let bip39Mnemonic

if (PK) {
  bip39Mnemonic = bip39.entropyToMnemonic(PK)
  console.log('bip39 mnemonic: '+bip39Mnemonic)

  let reversedPK = bip39.mnemonicToEntropy(bip39Mnemonic)
  console.log('reversed PK: '+reversedPK)

}

let pkLink

if(COMPRESS){
  function pkToUrl(pk) {
    // return base64url(web3.utils.hexToBytes(pk))
    return null
  }
  let encoded = pkToUrl(PK)
  pkLink = URL+'/pk#'+encoded
}else{
  pkLink = PK.replace('0x','')
}

console.log('pkLink: '+pkLink)

var private = qr.image('Private Key: \n'+pkLink+'\nWIF: \n'+WIF+'\nSeed: '+bip39Mnemonic, { type: 'png' });
private.pipe(require('fs').createWriteStream('private.png'))

var public = qr.image('Public\nURL: \n'+URL+'\nPublic Address: \n'+publicAddress, { type: 'svg' })
public.pipe(require('fs').createWriteStream('public.svg'))

console.log('publicAddress: '+publicAddress)

fs.readFile('template.html', 'utf8', (err,data) => {
  if (err) {
    return console.log(err)
  }
  var result = data.replace(/\*\*PUBLIC\*\*/g,publicAddress.substring(0,9)+'......'+publicAddress.substring(publicAddress.length-8))
  result = result.replace(/\*\*URL\*\*/g,URL)
  result = result.replace(/'\.\//g, '\'file://'+__dirname+'/')

  console.log('template.html result: '+result)

  fs.writeFile('generated.html', result, 'utf8', function (err) {
    if (err) return console.log(err)

    fs.appendFile('addresses.txt',publicAddress+'\n', function (err) {
      if (err) throw err
    })

    let cwd = 'file://' + process.cwd() + '/'

    console.log(`cwd: ${cwd}`)

    var html = fs.readFileSync('./generated.html', 'utf8')
    var options = {
      // Rendering options
      format: 'Letter',
      'base': cwd, // Base path that's used to load files (images, css, js) when they aren't referenced using a host
    }

    pdf.create(html, options).toFile('./generated.pdf', function(err, res) {
      if (err) return console.log(err)
      console.log('res: '+util.inspect(res, {depth: null}))
    })
  })
})
