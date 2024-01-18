const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\bruno_r_de-castro\\Projeto_Node\\serviceAccountKey.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
module.exports = db;
