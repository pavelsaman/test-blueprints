import useful from 'useful-library';

const config = useful.loadJsonFile('config.json');

export function isVisible (page, selector, shouldContain = 'visible') {
    return page.waitForFunction(({ shouldContain, selector }) => {
        const el = document.querySelector(selector);

        if (!el) return false;
        return el.getAttribute('class').includes(shouldContain);
    }, { shouldContain, selector }, { timeout: config.functionTimeout });
}

export function isNotVisible (page, selector, shouldNotContain = 'visible') {
    return page.waitForFunction(({ shouldNotContain, selector }) => {
        const el = document.querySelector(selector);

        if (!el) return false;
        return !el.getAttribute('class').includes(shouldNotContain);
    }, { shouldNotContain, selector }, { timeout: config.functionTimeout });
}
