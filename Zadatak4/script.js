function ispisi(error, token) {
    if (!error) console.log(token);
 }
 
 function getAccessToken(proslijedi) {
    let ajax = new XMLHttpRequest();
 
    ajax.onreadystatechange = function () {
       if (ajax.readyState == 4 && ajax.status == 200)
          proslijedi(null, JSON.parse(ajax.responseText).access_token);
       else if (ajax.readyState == 4)
          proslijedi(ajax.status, null);
    }
 
    ajax.open("POST", "https://bitbucket.org/site/oauth2/access_token", true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.setRequestHeader("Authorization", 'Basic ' + btoa('mr4qkatcQHKRZnTn5a:6AcXaMWM3Eb8WgFESyHhrA7SyysBL86c'));
    ajax.send("grant_type=" + encodeURIComponent("client_credentials"));
 }
 
 getAccessToken(ispisi);
 