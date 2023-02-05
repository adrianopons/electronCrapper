const puppeteer = require('puppeteer');
const {app, BrowserWindow} = require('electron');

let win;

async function getData() {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('https://www.uol.com.br/');

  // Extraia os dados que você precisa aqui
  const data = await page.evaluate(() => {
    // Selecione os elementos na página e retorne os dados que você precisa
    return {
      // exemplo:
      title: document.title,
      h1: document.querySelector('h1').innerText
    };
  });
  await page.screenshot({
    path: 'screenshot.png'
  });

  await browser.close();
}

app.on('ready', async () => {
  

  mainWindow = await new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  
  await getData();

  mainWindow.loadFile('index.html');
  

});

app.on('window-all-closed', () => {
  app.quit();
});
