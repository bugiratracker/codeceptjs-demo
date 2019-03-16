
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    login(email, password) {
      this.amOnPage('https://bugira.app/auth');
      this.fillField('Email', email);
      this.click('Login');
      this.waitInUrl('codeceptjs.bugira.app', 20);
      this.fillField('Password', password);
      this.click('Sign in');
      this.see('CodeceptJS Projects');      
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
