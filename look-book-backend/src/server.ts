import app from "./app.js";
import appConfig from "./config/app.config.js";

app.listen(appConfig.appPort, 
    () => {console.log(`server listen on port ${appConfig.appPort}`)}
);