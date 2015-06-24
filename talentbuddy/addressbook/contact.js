var Contact = {};

Contact.parseName = function(str) {
  // str is a string containing the name and phone number separated by commas
  // extract and return the name from str argument
  // str will always contain only one comma character
  var name = str.split(",");
  return name[0].trim();
};
Contact.parseNumber = function(str) {
  var number = str.split(",");
  return number[1].trim();
};

module.exports = Contact;
