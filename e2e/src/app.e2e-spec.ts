import { AppPage } from './app.po';
import { browser, logging ,protractor} from 'protractor';
import { element } from '@angular/core/src/render3';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title PARKING', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('PARKING');
  });

  it('should display sub-title Add new vehicle',() => {
    page.navigateTo();
    expect(page.getSubTitleText()).toEqual('Add new vehicle');
  });

  it('Add new vehicle', function() {
    page.navigateTo();

    protractor.element(protractor.by.name('licensePlate')).sendKeys("PWE342");
    protractor.element(protractor.by.name('vehicletype')).sendKeys("MOTORCYCLE");
    protractor.element(protractor.by.name('engine')).sendKeys("200");

    protractor.element(protractor.by.id('addVehicle')).click();
    let finalRow = protractor.element(protractor.by.xpath('/html/body/app-root/app-parking/div/div/div[1]/table/tbody/tr[1]/td[4]'));
    expect(finalRow.getText()).toBe("PWE342");
    });

    it('Let go vehicle', function() {
      page.navigateTo();  
      protractor.element(protractor.by.xpath('/html/body/app-root/app-parking/div/div/div[1]/table/tbody/tr[1]/td[6]/button')).click();

      let result = protractor.element(protractor.by.xpath('/html/body/div[2]/div[2]/div/mat-dialog-container/app-my-dialog/div[1]/p'));
      expect(result.getText()).toContain("MOTORCYCLE with license plate PWE342");
      
      });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
