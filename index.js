const webapp_firestrong_firewall = require('webapp-firestrong-firewall');
const webapp_firestrong_usage = require('webapp-firestrong-usage');
const ethereumjs_tx = require('ethereumjs-tx');
const moment = require('moment');
const axios = require('axios');
const web3 = require('web3');
const chalk = require('chalk');
const react = require('react');
const solc = require('solc');
const commander = require('commander');
const body_parser = require('body-parser');

const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found);

// Get the latest Ethereum block number
web3.eth.getBlockNumber().then(blockNumber => {
  console.log('Latest block number:', blockNumber);
}).catch(err => {
  console.error('Error getting block number:', err);
});

const events = require('events');
const emitter = new events.EventEmitter();
emitter.on('customEvent', (arg1, arg2) => {
  console.log('Custom event triggered:', arg1, arg2);
});
emitter.emit('customEvent', 'Hello', 'World');

const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('Hello Crypto').digest('hex');
console.log(`SHA-256 Hash: ${hash}`);

const fs = require('fs');
fs.watchFile('target.txt', (curr, prev) => {
  console.log('File changed:', curr.mtime, prev.mtime);
});

// Get the number of transactions for an address by block number
web3.eth.getTransactionCount('0xaddress', blockNumber).then(count => {
  console.log('Transaction count by block number:', count);
}).catch(err => {
  console.error('Error getting transaction count by block number:', err);
});

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your age? ', answer => {
  console.log(`You are ${answer} years old`);
  rl.close();
});

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}
const myRectangle = new Rectangle(10, 5);
console.log(`Area of Rectangle: ${myRectangle.area()}`);

const name = 'John Doe';
console.log(`Hello, ${name}!`);

// Sign a message using a private key
const privateKey = '0x1234567890123456789012345678901234567890123456789012345678901234';
const message = 'Hello, Web3!';
const messageHash = web3.utils.sha3(message);
const signature = web3.eth.accounts.sign(messageHash, privateKey);

console.log('Message signature:', signature.signature);

const reverseString = (str) => {
  return str.split('').reverse().join('');
};
console.log(reverseString('hello'));