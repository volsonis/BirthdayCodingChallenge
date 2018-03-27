module.exports = function(app) {
  var bdays = require('../controller/controller');

  // birthday Routes
  app.route('/birthdays')
      .get(bdays.list_all_bdays)
      .post(bdays.add_a_bday)
      .delete(bdays.remove_a_bday);
}