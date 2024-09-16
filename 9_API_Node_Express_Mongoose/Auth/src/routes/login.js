const jwt = require("jsonwebtoken");
require("dotenv").config();

const getUser = async (username) => {
  return { userId: 123, password: "123456", username };
};

module.exports = (app) =>
  app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await getUser(username);

    if (user.password !== password) {
      return res.status(403).json({
        error: "invalid login",
      });
    }
    // delete user.password;
    //jswon web token
    const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: "1h" });

    res.cookie("token", token);

    return res.redirect("/welcome");
  });
