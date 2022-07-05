const hashService = require("../services/hash-service");
const otpService = require("../services/otp-service");

class AuthController {
  async sendOtp(req, res) {
    //logic
    const { phone } = req.body;
    /*if (!phone) {
      res.status(400).json({ message: "phone field is required" });
    } */

    //random number generate
    const otp = await otpService.generateOtp();

    //hashing otp
    const timeLimit = 1000 * 60 * 2; //valid only for two minutes
    const expires = Date.now() + timeLimit;
    const data = `${phone}.${otp}.${expires}`;
    const hash = hashService.hashOtp(data);

    //send otp
    try {
      await otpService.sendBySms(phone, otp);
      return res.json({
        hash: `${hash}.${expires}.`,
        phone,
      });
    } catch (error) {
      console.log(error);
    }

    res.json({ hash: hash });
  }
}

module.exports = new AuthController();
