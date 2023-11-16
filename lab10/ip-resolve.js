const dns = require('node:dns');

dns.lookup('www.miu.edu', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
})