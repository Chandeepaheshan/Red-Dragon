const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}

global.alivemsg = `📤I am alive now😇
🤷‍♀️How can I help you?😉` //Costomize Alive Message (type your message in `` )


global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owner v card
global.vcardowner = ['+94722328130'] // owner number
global.ownername = "😎C.HESHAN ❯❯" // owner name
global.ytname = "HESHAN BIO GAS" // yt chanel name
global.socialm = "GitHub: HESHAN2008" // github or insta name
global.location = "India, Mizoram, Aizawl" // location

//bot body 
global.alivepic = `https://i.ibb.co/cyyCjN7/20220803-081426.png` // alive picture \\ use "https://ibb.com" to upload photos. < 1 MB

global.dragonchat = "false"  // chat bot  "true" / "false" (200 auto replies in this)
global.callblock = "false" // call block "true" / "false" ("true"  to block callers)
global.antibad = "false" // To remove bad word senders
global.antispam = "true" // To remove or block spammers
global.antilink = "false" // To remove group link sharing peoples
global.upsongvoice = "false" // true/false \\ bot can upload song as voice note (it use your data and storage bacause auto download) you can put "false" (anyone can't get songs as voice note / your data is not wasted)
global.welcom_msg = "true" // Welcome / Goodbye   [true/false]


global.owner = ['±94722328130']
global.ownertag = '+94722328130' //your tag number
global.botname = 'HESHAN BIO GAS- 𝘉𝘖𝘛' //ur bot name
global.packname = "Bot Sticker" // sticker packname
global.author = "HESHAN BIO GAS" // sticker author
global.dragonemoji = '🧩' // Menu emoji
global.footer = '[ ◉ ʀᴇᴅ-ᴅʀᴀɢᴏɴ-ᴍᴅ ]' //

//database
global.premium = ['+94722328130'] //ur premium numbers

//other
global.sessionName = 'session'
global.antitags = false
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sp = '💠'
global.mess = {
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    linkm: 'Where is the link?',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban',
    badwords: '*🚫Bad Words Not Allowed Here !*\n\n⚠️ Warning... ⚠️',
    spam: '⚠️ [SPAM] Detected ⚠️\n\nThe emergency security system was activated.\n\nPowered By: *ʀᴇᴅ-ᴅʀᴀɢᴏɴ*',
    caption: 'Generated by: ◉ *ʀᴇᴅ-ᴅʀᴀɢᴏɴ-ʙᴏᴛ*'
} // END \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thum = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur error pic
global.thumb = fs.readFileSync("./Android/AllData/theme/repl.jpg") //ur thumb pic

global.thumb = fs.readFileSync('./Android/AllData/theme/repl.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []





































// DO NOT CHANGE THIS. ERROR WARNING දාන්න තැනක් නැතුව මෙතන දැම්මෙ.
global.rep = { // All Replies = 145
    K1: 'HI😁❤️',
    K2: '🤭HI✌️💞🫶',
    K3: '😉අනවශය MASSAGE දැමීමෙන් වළකින්න 😂',
    K4: '🥴Hi😊',
    K5: '😂How Are You🥴✌️',
    K6: '😁Hey there💝 I am WhatsApp Bot😏',
    K7: '❣️Please subscribe youtube Chanel😌',
    
  

 


    K8: 'Thanks අපව සම්බන්ධ කර ගත්තාට'
    K9: Thanks'
    }






let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
