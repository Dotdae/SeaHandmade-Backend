import app from "./app.js";
import { serverTime } from "./config.js";

app.listen(3000);

// Get current time.


console.log(`[${serverTime()}] Server on port ->`, 3000);