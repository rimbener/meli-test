import * as cors from "cors";
import * as express from "express";
import routes from "./routes";

const app = express();

app.use(cors({ origin: ['http://localhost:4200'] }))

app.use('/api', routes);

app.get('/api', (req, res) => {
    res.send([{ message: 'working' }])
});

app.listen(4201, () => {
    console.log("Express server started on port 4201");
})
