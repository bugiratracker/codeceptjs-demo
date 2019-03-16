const faker = require('faker');

Feature('Ticket');

Before(login => login('admin'));

Scenario('create and close ticket', (I, project) => {
  let title = faker.lorem.words(3);
  let desc = faker.lorem.sentence();

  I.amOnPage(`/project/${project}/tickets`);
  I.waitForElement('#list', 10);
  I.click('New Ticket');
  I.say(`Creating ticket ${title}`);
  I.fillField('title', title);
  I.fillField({ css: 'trix-editor' }, desc);
  I.click('Create');
  I.waitForInvisible('#detail');
  I.see(title , '.ticket-item');
  I.click(title, '#list');
  I.click(title, '#list'); // not sure but 1 click not enough :) 
  I.waitForVisible('#detail');
  I.click('Close');
  I.see('closed','.head');
});

Scenario('close new ticket', async (I, project) => {
  const data = await I.have('ticket');
  I.amOnPage(`/project/${project}/tickets/${data.ticket.cid}`);
  I.waitForElement('#detail');
  I.click('Close');
  I.see('closed','.head');
}).tag('close');

xScenario('change priority of ticket', async (I, project) => {
  const data = await I.have('ticket');
  I.amOnPage(`/project/${project}/tickets/${data.ticket.cid}`);
  I.waitForElement('#detail');
  pause()
});
