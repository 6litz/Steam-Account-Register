//Requires;
var SteamUser = require('steam-user');
var readlineSync = require('readline-sync');
var client = new SteamUser();

client.logOn();
client.on('loggedOn', function(details) {
    createAccount();
});

function createAccount() {

    var username = readlineSync.question('Username: ');
    var password = readlineSync.question('Password: ');
    var email = "admin@steampowered.com";
  
    client.createAccount(username, password, email, function (result) {
    if (result == SteamUser.Steam.EResult.OK) { console.log('- '+username+';'+password); }
	else if (result == SteamUser.Steam.EResult.DuplicateName) { console.log('DuplicateName'); }
    else if (result == SteamUser.Steam.EResult.IllegalPassword) { console.log('IllegalPassword'); }
	else { console.log('Error:' + result); }
	createAccount();
  });
}