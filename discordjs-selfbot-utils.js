const fetch = require('node-fetch')

const https = require('https')

if (https.Agent) var agent = new https.Agent({ keepAlive: true });


async function leaveGuild(serverID, authorisation) {
    const requestURL = `https://discord.com/api/v8/users/@me/guilds/${serverID}`
    const headers = {
        authorization: authorisation
    }
    await fetch(requestURL, {
        method: "DELETE",
        headers,
        agent,
    }).then(res => {
        return this.status = res.status, console.log(res)
    })
    /**
     * @param serverID
     * @param authorisationToken
     */
}

async function joinGuild(inviteURL, authorisation) {
    if(!inviteURL || !authorisation) throw error('You must provide an inviteURL and authorisation token within the joinGuild function'), process.exit(1) 
    inviteURL.replace('https://discord.gg/invite', '')
    inviteURL.replace('https://discord.com/invite', '')
    inviteURL.replace('https://discord.gg/')
    inviteURL.replace('discord.gg/')
    inviteURL.replace('discord.com/invite/')

    console.log(inviteURL)

    const requestURL = `https://discord.com/api/v8/invites/${inviteURL}`
    const headers = {
        authorization: authorisation
    }
    await fetch(requestURL, {
        method: "POST",
        headers,
        agent,
    }).then(res => {
        return this.status = res.status, console.log(res)
    })
    /**
     * @param inviteURL
     * @param authorisationToken
     */
}

async function removeFriend(friendID, authorisation) {
    const requestURL = `https://discord.com/api/v8/users/@me/relationships/${friendID}`
    const headers = {
        authorization: authorisation,
    }
    await fetch(requestURL, {
        method: "DELETE",
        headers,
        agent,
    }).then(res => {
        return this.status = res.status, console.log(res)
    })
    /**
     * @param friendID
     * @param authorizationToken
     */
    
}

async function addFriend(friendID, authorisation) {
    const requestURL = `https://discord.com/api/v8/users/@me/relationships/${friendID}`
    fetch(requestURL, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB",
    "authorization": authorisation,
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
  },
  "referrer": `https://discord.com/channels/@me/${friendID}`,
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "{}",
  "method": "PUT",
  "mode": "cors"
}).then(res => {
    return this.status = res.status
})
    /**
     * @param friendID
     * @param authorizationToken
     */
    
}

async function block(userid, authorization) {
    fetch(`https://discord.com/api/v8/users/@me/relationships/${userid}`, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB",
    "authorization": authorization,
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
  },
  "referrer": `https://discord.com/channels/@me/${userid}`,
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": "{\"type\":2}",
  "method": "PUT",
  "mode": "cors"
}).then(res => {
    return this.status = res.status
})
    /**
     * @param userid
     * @param authorisationToken
     */
}

async function lightMode(authorization) {
    fetch("https://canary.discord.com/api/v8/users/@me/settings", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB",
    "authorization": authorization,
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
  },
  "body": "{\"theme\":\"light\"}",
  "method": "PATCH",
  "mode": "cors"
}).then(res => {
    return this.status = res.status
})
    /**
     * @param authorisationToken
     */
}

async function darkMode(authorization) {
    fetch("https://canary.discord.com/api/v8/users/@me/settings", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-GB",
    "authorization": authorization,
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
  },
  "body": "{\"theme\":\"dark\"}",
  "method": "PATCH",
  "mode": "cors"
}).then(res => {
    return this.status = res.status
})
    /**
     * @param authorisationToken
     */
}

module.exports = { leaveGuild, joinGuild, removeFriend, addFriend, block, lightMode, darkMode }
