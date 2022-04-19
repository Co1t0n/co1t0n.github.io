{
  "userAgent": "fx", // Firefox userAgent Spoof
  "prefix": "/service/", // Proxy Prefix
  "wss": true, // WebSocket Server
  "corrosion": [false, {}], // Corrosion Dual-Server
  "title": "Rhodium", // Page Title on Proxied Pages
  "server": http.Server(), // Your Http Server
  "encode": "xor" // Encoding for Proxy URLS
}
