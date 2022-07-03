class AuthController {
  sendOtp(req, res) {
    //logic
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "phone field is required" });
    }

    //random number generate

    res.send("hello from otp route");
  }
}

module.exports = new AuthController();
