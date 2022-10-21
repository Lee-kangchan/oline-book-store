const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = 3036;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", require("./routes/main"));
app.use("/", require("./routes/user"));

//404 error
app.use((req, res, next) => {
  res.status(404).send("일치하는 주소가 없습니다.");
});

//500 상태 표시 후 에러 메시지 전송
app.use((req, res, next) => {
  res.status(500).send("서버에러입니다.!");
});

//port 접속 성공 로그
app.listen(port, function () {
  console.log("서버가 정상가동 됩니다! http://localhost:" + port);
});