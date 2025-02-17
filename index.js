const express = require("express");
const path = require("path");
const app = express();

// Middleware để parse body dạng text (Content-Type: text/plain)
app.use(express.text());
app.use(express.json());

// Biến lưu trữ tên cookie nhận được
let receivedCookieNames = [];

// Route POST nhận dữ liệu từ client
app.post("/", (req, res) => {
  const cookie = req.body; // Lấy dữ liệu từ client
  receivedCookies.push(cookie); // Lưu vào mảng
  console.log("Đã nhận cookie name:");
  res.send("Cookie name đã được nhận thành công!");
});

// Route GET để trả về file HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Trả về file HTML
});

// Route GET để trả về danh sách cookie name
app.get("/get-cookie-names", (req, res) => {
  res.json(receivedCookies); // Trả về dữ liệu dạng JSON
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
