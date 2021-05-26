/* global browser */

import chai from 'chai';
import useful from 'useful-library';
import * as env from '../Helpers/env.js';
import * as options from '../Helpers/browserOptions.js';

const { expect } = chai;
const config = useful.loadJsonFile('config.json');
const baseUrl = config.baseUrl[env.env()];

/* eslint-disable max-lines-per-function, max-nested-callbacks,
   prefer-arrow-callback */
suite('Load', function () {
    const suiteName = this.title.replace(/ /g, '_');
    let context, page, isoDatetime, testName;

    suiteSetup(function () {
        isoDatetime = new Date().toISOString().replace(/:/g, '-');
    });

    setup(async function () {
        testName = this.currentTest.title.replace(/ /g, '_');
        context = await browser.newContext(options.contextConfig());
        await context.setDefaultTimeout(config.timeout);
        page = await context.newPage();
        await page.goto(baseUrl, { waitUntil: 'load' });
    });

    teardown(async function () {
        if (!env.testsRunInPipeline()) {
            const folder = suiteName.replace(/\s/g, '_');
            const filename = `${testName}-${isoDatetime}.png`.replace(/\s/g, '_');
            await await page.waitForLoadState('load');
            await page.screenshot({ path: `./Results/Screenshots/${folder}/${filename}` });
        }
        await page.close();
        await context.close();
    });

    test('Load page', async function () {
        
    });
});
