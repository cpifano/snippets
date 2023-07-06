//---------------------------------------------------------------------------------------------------------------------------//
// CORE HTTP IN NODEJS:
//---------------------------------------------------------------------------------------------------------------------------//
const http = require('http');

//SEND GET REQUEST:
const request = http.get('http://www.google.com', (res) => {
  if (res.statusCode !== 200) {
    console.log('Status code: ' + res.statusCode);
    res.resume();
    return;
  }
  
  //Handle response data:
  let data = '';

  //Set chunks of data:
  res.on('data', (chunk) => {
    data += chunk;
  });

  //On close response:
  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  });
  
  //Handle errors:
  request.on('error', (err) => {
    console.error('Error: ' + err.message);
  });
});

//SEND POST REQUEST:
const options = {
  method: 'POST',
  host: 'www.google.com',
  path: '/path?url_var=2',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  }
};

const request = http.request(options, (res) => {
    // ... //
});
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// NEEDLE:
//---------------------------------------------------------------------------------------------------------------------------//
const needle = require('needle');

//SEND GET REQUEST:
needle.get('http://www.google.com', (error, res) => {
  if (!error && res.statusCode == 200){
    console.log(res.body);
  } else {
    console.log(error);
  }
});

//SEND POST REQUEST WITH BODY DATA:
const data = {
  file: 'test_file.png',
  content_type: 'image/png'
};

needle
  .post('https://my.server.com/foo', data, { multipart: true })
  .on('readable', () => { /* chunks */ })
  .on('done', (err) => {
    console.log('Ready-o!');
});
//---------------------------------------------------------------------------------------------------------------------------//
