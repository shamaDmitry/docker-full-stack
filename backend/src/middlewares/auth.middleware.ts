import jwt from "jsonwebtoken";
import User from "../models/User";

const decodeToken = (req: { headers: { [x: string]: any } }) => {
  console.log("req.headers", req.headers);

  try {
    const bearerHeader = req.headers["Authorization"];

    console.log("bearerHeader", bearerHeader);

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];

      return jwt.verify(token, process.env.JWT_SECRET || "");
    }

    return false;
  } catch {
    return false;
  }
};

export const authMiddleware = async (req: any, res: any, next: () => void) => {
  const tokenDecoded = decodeToken(req);

  console.log("1111111", tokenDecoded);

  if (!tokenDecoded) return res.status(401).json({ message: "Unauthorized" });

  // const user = await User.findById(tokenDecoded.data);
  const user = await User.findById(tokenDecoded);

  if (!user) return res.status(401).json({ message: "Unauthorized" });

  req.user = user;

  next();
};
