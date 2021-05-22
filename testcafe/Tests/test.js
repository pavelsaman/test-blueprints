import getBaseUrl from '../Helpers/baseUrl';
import  { getEnv } from '../Helpers/env';
import { Selector } from 'testcafe';


const baseUrl = getBaseUrl();
const env = getEnv();


fixture `Test`    
    .page(baseUrl);   

test
    .meta({
        author: 'Pavel Saman',
        creationDate: '22/05/2021',
        env: env,
        url: baseUrl,
        retired: '0',
        purpose: 'TestCafe example test case.'
    })            
    ('Test case', async t => {

        const title = await Selector('title').innerText;
        await t
            .expect(title).eql('ALPINE PRO OUTLET – Nejlepší ceny outdoor oblečení');
});
