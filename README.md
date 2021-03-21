# This is still a work-in-progress, so there will be some bugs

Suggestions? Add my discord
# setup

for basic setup:

drag the discordjs-selfbot-utils.js file into your main folder
const toolbox = require('./discordjs-selfbot-utils.js) (or wherever this file is located)

# useful functions

toolbox.joinServer('id', 'authorization')
toolbox.leaveServer('id', 'authorization')

toolbox.addFriend('userid', 'authorization')
toolbox.removeFriend('userid', 'authorization')
toolbox.block('userid', 'authorization')

toolbox.lightMode('authorization')
toolbox.darkMode('authorization')
