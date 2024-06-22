import app from "./app.js";
import "./db.js";
import { serverTime } from "./config.js";


console.log(`[${serverTime()}] Server on port ->`, app.get("port"));