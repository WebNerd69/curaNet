import jwt from "jsonwebtoken";

const adminVarifier = (req, res, next) => {
  try {
    const { token , adminemail , adminid } = req.headers;
    console.log(token , adminemail , adminid)
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied, user not authorised" });
    } else {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode)
      if (
        adminemail === decode.email &&
        adminid === decode.id &&
        decode.role === "admin"
      ) {
        next();
      } else {
        return res
          .status(403)
          .json({ success: false, message: "Access denied , user not admin" });
      }
       }    
  } catch (err) {
    return res.status(500).json({ message: err.message+ "error varifier" });
  }
};

export default adminVarifier;