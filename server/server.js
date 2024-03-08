const express = require('express');
const cors = require('cors');
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})
app.use(express.json());
app.use(cors());
const dns = require('dns');
const util = require('util');
const resolveSrv = util.promisify(dns.resolveSrv);


function get_radiobrowser_base_urls() {
  return resolveSrv("_api._tcp.radio-browser.info").then(hosts => {
      hosts.sort();
      return hosts.map(host => "https://" + host.name);
  });
}
function get_radiobrowser_base_url_random() {
  return get_radiobrowser_base_urls().then(hosts => {
      var item = hosts[Math.floor(Math.random() * hosts.length)];
      return item;
  });
}
get_radiobrowser_base_urls().then(hosts => {
  console.log("All available urls")
  console.log("------------------")
  for (let host of hosts) {
      console.log(host);
  }
  console.log();

  return get_radiobrowser_base_url_random();
}).then(random_host => {
  console.log("Random base url")
  console.log("------------------")
  console.log(random_host);
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
