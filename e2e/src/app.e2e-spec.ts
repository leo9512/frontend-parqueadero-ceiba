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

  it('should add one and two', function() {
    page.navigateTo();
    let initialRows = protractor.element.all(protractor.by.xpath('.//*[@class="ng-star-inserted"]')).count();

    protractor.element(protractor.by.name('licensePlate')).sendKeys("PWE342");
    protractor.element(protractor.by.name('vehicletype')).sendKeys("MOTORCYCLE");
    protractor.element(protractor.by.name('engine')).sendKeys("200");

    protractor.element(protractor.by.id('addVehicle')).click();
    let finalRows = protractor.element.all(protractor.by.xpath('.//*[@class="ng-star-inserted"]')).count();
    expect(initialRows).toEqual(finalRows);
    browser.pause();
    });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
