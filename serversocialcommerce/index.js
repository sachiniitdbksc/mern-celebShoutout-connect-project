const app = require("express")();
import data from "./celebsData";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
	res.send(data);
});
app.listen(4000, () => console.log("the server is listening on port 4000"));
