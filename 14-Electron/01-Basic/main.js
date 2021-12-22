const { app, BrowserWindow } = require("electron");

const isDev = process.env.APP_DEV;

const isMac = process.platform === "darwin" ? true : false;

function createWindow() {
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: "#fff",
    });

    // 1º metodo

    // win.loadURL("https://twitter.com")

    // 2º metodo

    win.loadFile("./src/index.html");

    if (isDev) {
        win.webContents.openDevTools();
    }
}

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    console.log("todas as janelas fechadas");
    if (!isMac) {
        app.quit();
    }
});

app.on("activate", () => {
    createWindow();
});
