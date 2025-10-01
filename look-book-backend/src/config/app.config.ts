type AppConfig = {
    appPort: number,
    appMode: string
}

const appPort = Number(process.env.APP_PORT) || 8080;
const appMode = process.env.APP_MODE || "debug" || "production";

const appConfig: AppConfig = {
    appPort,
    appMode
}

export default appConfig;