import jwt from "jsonwebtoken";

const doctorVarifier = (req, res, next) => {
  try {
    const { token , doctorid , doctoremail } = req.headers;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied, user not authorised" });
    } else {
      const { email, id, role } = jwt.verify(token, process.env.JWT_SECRET);
      if (
        doctoremail === email &&
        doctorid === id &&
        role === "doctor"
      ) {
        next();
      } else {
        return res
          .status(403)
          .json({ success: false, message: "Access denied , user not doctor" });
      }
       }    
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default doctorVarifier;