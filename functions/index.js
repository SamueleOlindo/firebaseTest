const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.createUser = functions.region('europe-west2').auth.user().onCreate((user, context) => {
  let CF_Event_Id = context.eventId; //eventId identificativo di ogni singola CloudFunction

  return admin
    .firestore()
    .collection('users')
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)))
    .then(function () {
      console.log('✅ User ' + user.email + ' successfully written! --- CF_Event_Id: ' + CF_Event_Id);
    })
    .catch(function (error) {
      console.error('❌ Error writing a new user: ', error);
      console.log('❌ User ' + user.email + ' NOT written!! --- CF_Event_Id: ' + CF_Event_Id);
    });
});