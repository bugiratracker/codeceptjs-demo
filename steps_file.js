
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    login(email, password) {
      this.amOnPage('https://bugira.app/auth');
      this.fillField('Email', email);
      this.click('Login');
      this.wait(2); // due to some puppeteer issue that's the most stable
      this.fillField('Password', secret(password));
      this.click('Sign in');
      this.see('CodeceptJS Projects');      
    }

  });
}
