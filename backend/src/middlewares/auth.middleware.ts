import jwt from "jsonwebtoken";
import User from "../models/User";

const decodeToken = (req: { headers: { [x: string]: any } }) => {
  try {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];

      const data = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

      return data;
    }

    return false;
  } catch {
    return false;
  }
};
export const authMiddleware = async (req: any, res: any, next: () => void) => {
  const tokenDecoded = decodeToken(req);

  if (!tokenDecoded) return res.status(401).json({ message: "Unauthorized" });

  const user = await User.findById(tokenDecoded.id).select("-password");

  if (!user) return res.status(401).json({ message: "Unauthorized" });

  req.user = user;

  next();
};
