const http = require('http');

const data = JSON.stringify({
  query: `mutation {
    updateZone(input: { _id: "f8ae9784-4253-49ce-a4d8-8ca8f6e77ff7", name: "Zone D - Updated" }) {
      zone { _id, name }
    }
  }`
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api-gateway',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options, res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Response:', body);
  });
});

req.on('error', error => {
  console.error('Request Error:', error);
});

req.write(data);
req.end();
