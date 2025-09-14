import jwt from "jsonwebtoken";

const receptionistVarifier = (req, res, next) => {
  try {
    const { token , receptionistemail , receptionistid } = req.headers;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied, user not authorised" });
    } else {
      const { email, id, role } = jwt.verify(token, process.env.JWT_SECRET);
      if (
        receptionistemail === email &&
        receptionistid === id &&
        role === "receptionist"
      ) {
        next();
      } else {
        return res
          .status(403)
          .json({ success: false, message: "Access denied , user not receptionist" });
      }
       }    
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default receptionistVarifier;