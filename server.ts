import app from "@/app";
import { port } from "@/configs/config.app";

app.listen(port, () => {
  console.log("WSV start on port", port);
});
