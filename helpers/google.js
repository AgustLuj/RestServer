const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '179951943953-5ml0notl12ndnfprefpuafhjhkr0jim4.apps.googleusercontent.com';


const googleSignIn = ()=>{
    const client = new OAuth2Client(CLIENT_ID);
    async function verify() {
      const ticket = await client.verifyIdToken({
          idToken: 'ya29.a0AfH6SMAVACgxqHpIa2O3pmufEdIdOCc-uQfqwzBRMkgQk4faNuMrbGbaphTHI24eWNZrsNIX_cmg3b_oMYyoFZva6NFOGIby5sRFGqugJnRaRLhb-_-Z5JklqypHJ5s2JBp--EAi65MbZ8sJgDde1uvFNtLPJg',
          audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
          // Or, if multiple clients access the backend:
          //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      const userid = payload['sub'];
      console.log(userid);
      // If request specified a G Suite domain:
      // const domain = payload['hd'];
    }
    verify().catch(console.error);
}
module.exports ={
    googleSignIn
}
