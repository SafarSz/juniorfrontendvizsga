const {By, Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require("assert");
const script = require('jest');

const url   = 'http://localhost:8083/varosok.html'

describe('Junior frontend fejlesztő szakma vizsgafeladat 1. feladat automatikus tesztelés', () => {
    let driver;
    var server;

    beforeAll(async function () {
      
      var app = require('./app');
      var http = require('http');
      var port = 8083;
      app.set('port', port);
      server = http.createServer(app);
      server.listen(port);
      server.on('error', onError);
      
      function onError(error) {
        if (error.syscall !== 'listen') {
          throw error;
        }
      
        var bind = typeof port === 'string'
          ? 'Pipe ' + port
          : 'Port ' + port;
      
        switch (error.code) {
          case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
          case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
          default:
            throw error;
        }
      }
      
      let options = new chrome.Options();
      options.addArguments("--test-type","--ignore-certificate-errors", "--disable-web-security", "--log-level=3");
      driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();    
    });

    afterAll(async () => {
      await driver.quit();
      await server.close();
    });


    test('Az „Újsághír:” szövegrésszel kezdődő teljes bekezdés vastag (bold) betűs.', async () => {
      await driver.get(url);
      await driver.findElement(By.css('#ujsaghir>p')).then((element)=> {
        element.getCssValue("font-weight").then((css) => {
          return expect(css).toBe('700');
        });
      });
    });

    test('Az első szélső doboz sárga (yellow) háttérszínű.', async () => {
      await driver.get(url);
      
      await driver.findElements(By.css('#informaciok>div')).then((element)=> {
        element[0].getCssValue("background-color").then((css) => {
          return expect(css).toBe('rgba(255, 255, 0, 1)');
        });
      });
    });

    test('Az utolsó szélső doboz sárga (yellow) háttérszínű.', async () => {
      await driver.get(url);
      
      await driver.findElements(By.css('#informaciok>div')).then((elements)=> {
        elements[2].getCssValue("background-color").then((css) => {
          return expect(css).toBe('rgba(255, 255, 0, 1)');
        });
      });
    });

    test('A középső doboz zöldessárga (greenyellow) háttérszínű.', async () => {
      await driver.get(url);
      
      await driver.findElements(By.css('#informaciok>div')).then((elements)=> {
        elements[1].getCssValue("background-color").then((css) => {
          return expect(css).toBe('rgba(173, 255, 47, 1)');
        });
      });
    });

    test('A dobozok magassága 200px.', async () => {
      await driver.get(url);
      
      await driver.findElements(By.css('#informaciok>div')).then((elements)=> {
        elements[0].getCssValue("height").then((css) => {
          return expect(css).toBe('200px');
        });
      });
    });
    
    test('A dobozok minden sarka 30 pixel sugárban lekerekített.', async () => {
      await driver.get(url);
      
      await driver.findElements(By.css('#informaciok>div')).then((elements)=> {
        elements[0].getCssValue("border-radius").then((css) => {
          return expect(css).toBe('30px');
        });
      });
    });

    test('A bal oldali dobozban található bekezdések számozatlan listára alakította.', async () => {
      await driver.get(url);
      
      await driver.findElements(By.css('#informaciok>div>ul>li')).then((elements)=> {
        return expect(elements).not.toHaveLength(0);
      });
    });

    test('A táblázat első sorában és a bal oldali oszlopában van fejléc típusú cella.', async () => {
      await driver.get(url);
      
      await driver.findElements(By.css('#informaciok>div>table>tbody>tr>th')).then((elements)=> {
          return expect(elements).not.toHaveLength(0);
        }
      );
    });

    test('A táblázat első sora és a bal oldali oszlopa összes fejléc típusú cella.', async () => {
      await driver.get(url);
      
      await driver.findElements(By.css('#informaciok>div>table>tbody>tr>th')).then((elements)=> {
        return expect(elements).toHaveLength(10);
      });
    });

    test('Az adatcellákban olvasható pontszámokat középre igazítottak.', async () => {
      await driver.get(url);
      
      await driver.findElements(By.css('#informaciok>div>table>tbody>tr>td')).then((elements)=> {
        elements[0].getCssValue("text-align").then((css) => {
          return expect(css).toBe('center');
        });
      });
    });

});  
