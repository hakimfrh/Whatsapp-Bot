require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')

const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

module.exports = Bot = async (Bot, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageCon            textinfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(global.prefa)
        const command = body.replace(global.prefa, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Bot.decodeJid(Bot.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await Bot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user)) user.afkReason = ''
            if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
            afkTime: -1,
            afkReason: '',
            limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
            if (!('mute' in chats)) chats.mute = false
            if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
            mute: false,
            antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
        const reply = (teks) => {
            Bot.sendMessage(m.chat, {text: teks}, { quoted: m})
        }
        
        //const reply = (teks) => {
        //    Bot.sendMessage(m.chat, { text: teks, con            textinfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Gojo-Satoru`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./GojoMedia/gojo.jpg`),"sourceUrl": "https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg"}}}, { quoted: m})
        //}
	
        //Public & Self\\
        if (!Bot.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            //Bot.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

    //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await Bot.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await Bot.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

    //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    Bot.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    Bot.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) Bot.sendText(roof.p, `Please Select \ngunting✂️ \\ batu🗿 \\ kertas📄\n\nketik pilihanmu`, m)
	    if (!roof.pilih2) Bot.sendText(roof.p2, `Please Select \ngunting✂️ \\ batu🗿 \\ kertas📄\n\nketik pilihanmu`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) Bot.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    Bot.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) Bot.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) Bot.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    Bot.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	   
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await Bot.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh🐦`)
        Bot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

      //Mute Chat\\
    if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
        return
    }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
    if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: Bot.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, Bot.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        Bot.ev.emit('messages.upsert', msg)
    }


    if (body === 'gunting' || body === 'batu' || body === 'kertas' || /^\d$/.test(body)) {
    }else{
        if(!isCmd && !m.isGroup) return reply("Ketik *.menu*\nJangan lupa titiknya.")
    }
    if(!isCmd) return
    switch(command) {
        case 'menu':{
            menu =` ┏━「 *${botname}* 」━━⭓ \n`
            menu+=` ┃ Halo ${Bot.getName(m.sender)} 😋😋😋\n`
            menu+=` ┃\n`
            menu+=` ┃╔═✪「 Tools 」\n`
            menu+=` ┃╠ ${prefix}Sticker [image/video]\n`
            menu+=` ┃╠ ${prefix}ytmp3 [url / link]\n`
            menu+=` ┃╠ ${prefix}ytmp4 [url / link]\n`
            menu+=` ┃╠ ${prefix}toimage\n`
            menu+=` ┃╠ ${prefix}tomp3\n`
            menu+=` ┃╠ ${prefix}tovn\n`
            menu+=` ┃╚════✪\n`
            menu+=` ┃╔═✪「 Group 」\n`
            menu+=` ┃╠ ${prefix}join [group link]\n`
            menu+=` ┃╠ ${prefix}leave \n`
            menu+=` ┃╠ ${prefix}add [number / quote / tag]\n`
            menu+=` ┃╠ ${prefix}kick [number / quote / tag]\n`
            menu+=` ┃╠ ${prefix}promote [number / quote / tag]\n`
            menu+=` ┃╠ ${prefix}demote [number / quote / tag]\n`
            menu+=` ┃╚════✪\n`
            menu+=` ┃╔═✪「 Fun / Games 」\n`
            menu+=` ┃╠ ${prefix}emojimix [emoji + emoji]\n`
            menu+=` ┃╠ ${prefix}suit [group only | multiplayer]\n`
            menu+=` ┃╠ ${prefix}tictactoe [group only | multiplayer]\n`
            menu+=` ┃╚════✪\n`
            menu+=` ┃╔═✪「 Bot Info 」\n`
            menu+=` ┃╠ ${prefix}stats\n`
            menu+=` ┃╠ ${prefix}info\n`
            menu+=` ┃╠ ${prefix}speedtest\n`
            menu+=` ┃╚════✪\n`
            menu+=` ┃ Botnya masih belum jadi.\n`
            menu+=` ┃ Ownernya lagi malaz 👍\n`
            menu+=` ┗━━━⭓`
            reply(menu)
        }break
        case 'stats':{
            const used = process.memoryUsage()
            const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
            return cpu
            })
            const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
            last.speed += cpu.speed / length
            last.times.user += cpu.times.user
            last.times.nice += cpu.times.nice
            last.times.sys += cpu.times.sys
            last.times.idle += cpu.times.idle
            last.times.irq += cpu.times.irq
            return last
            }, {
            speed: 0,
            total: 0,
            times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0
            }
            })
            let timestamp = speed()
            let latensi = speed() - timestamp
            neww = performance.now()
            oldd = performance.now()
            respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
            `.trim()
            reply(respon)
        
        }break
        case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
            let o
            try {
                o = await exec('python speed.py')
            } catch (e) {
            o = e
            } finally {
            let { stdout, stderr } = o
            if (stdout.trim()) reply(stdout)
            if (stderr.trim()) reply(stderr)
            }
            }
            break
        case 'info':{
            timestampe = speed();
            latensie = speed() - timestampe
            textinfo  =`┌─❖\n`
            textinfo +=`│「 Hi 👋 」\n`
            textinfo +=`└┬❖ 「 ${pushname} 」\n`
            textinfo +=`┌┤✑   😋😋😋\n`
            textinfo +=`│└───────────────┈ ⳹\n`
            textinfo +=`│ 「 BOT INFO 」\n`
            textinfo +=`│✙ 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds\n`
            textinfo +=`│✙ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}\n`
            textinfo +=`│✙ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}\n`
            textinfo +=`│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}\n`
            textinfo +=`│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}\n`
            textinfo +=`│✙ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}\n`
            textinfo +=`│✙ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}`
            textinfo +=`│✙ 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}\n`
            textinfo +=`└┬──────────────┈ ⳹\n`
            textinfo +=` │✑  Kalau ada error kabarin yaa. 😋😋😋\n`
            textinfo +=` └───────────────┈ ⳹`
            reply(textinfo)
}break
        case 'join': {
            //if (!isCreator) return reply(`${mess.owner}`)
            if (!text) return reply(`Enter The Group Link!`)
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`Invalid Link!`)
            reply(mess.wait)
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await Bot.groupAcceptInvite(result)
        }break
        case 'leave': {
            if (!isAdmins) return reply(`${mess.admin}`)
            reply('Adios')
            await Bot.groupLeave(m.chat)
        }break
        case 'kick': {
            if (!m.isGroup) return reply(`${mess.group}`)
                if (!isBotAdmins) return reply(`${mess.botAdmin}`)
                if (!isAdmins) return reply(`${mess.admin}`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await Bot.groupParticipantsUpdate(m.chat, [users], 'remove')
        }break
        case 'add': {
            if (!m.isGroup) return reply(`${mess.group}`)
                if (!isBotAdmins) return reply(`${mess.botAdmin}`)
                if (!isAdmins) return reply(`${mess.admin}`)
            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await Bot.groupParticipantsUpdate(m.chat, [users], 'add')
        }break
        case 'promote': {
            if (!m.isGroup) return reply(`${mess.group}`)
                if (!isBotAdmins) return reply(`${mess.botAdmin}`)
                if (!isAdmins) return reply(`${mess.admin}`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await Bot.groupParticipantsUpdate(m.chat, [users], 'promote')   
        }break
        case 'demote': {
            if (!m.isGroup) return reply(`${mess.group}`)
                if (!isBotAdmins) return reply(`${mess.botAdmin}`)
                if (!isAdmins) return reply(`${mess.admin}`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await Bot.groupParticipantsUpdate(m.chat, [users], 'demote')
        }break
        case 'block': {
            if (!isCreator) return reply(`${mess.owner}`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await Bot.updateBlockStatus(users, 'block')
        }break
        case 'unblock': {
            if (!isCreator) return reply(`${mess.owner}`)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
            await Bot.updateBlockStatus(users, 'unblock')
        }break
        case 'sticker': case 's': case 'stiker':{
            if (!quoted) return reply(`Reply Video/Image With Caption ${prefix + command}`)
            desc = text==''?global.author:text
            if (/image/.test(mime)) {
                Bot.react(m.chat, '👌',m.key)
                let media = await quoted.download()
                let encmedia = await Bot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: desc })
            await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
            Bot.react(m.chat, '👌',m.key)
                let media = await quoted.download()
                let encmedia = await Bot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: desc })
            await fs.unlinkSync(encmedia)
            } else {
            reply(`Kirim gambar atau video(max 10 detik) dengan caption ${prefix + command}`)
            }
            }break
        case 'ytmp3': {
            let { yta } = require('./lib/y2mate')
            if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
            let quality = args[1] ? args[1] : '320kbps'
            let media = await yta(text, quality)
            if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
            reply('Downloading...')
            await Bot.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            Bot.react(m.chat,'👌',m.key)
        }break
        case 'ytmp4': {
            let { ytv } = require('./lib/y2mate')
            if (!text) return reply(`Example : ${prefix + command} https://www.youtube.com/watch?v=dQw4w9WgXcQ 360p`)
            let quality = args[1] ? args[1] : '360p'
            let media = await ytv(text, quality)
            if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
            reply('Downloading...')
            await Bot.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: ` Title : ${media.title}\n File Size : ${media.filesizeF}\n Url : ${isUrl(text)}\n Ext : MP3\n Resolution : ${args[1] || '360p'}` }, { quoted: m })
            Bot.react(m.chat,'👌',m.key)
        }break
        case 'toimage': case 'toimg': {
            if (!quoted) return reply(`Reply Image`)
            if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
            reply(mess.wait)
            let media = await Bot.downloadAndSaveMediaMessage(quoted)
            let ran = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) reply(err)
            let buffer = fs.readFileSync(ran)
            Bot.sendMessage(m.chat, { image: buffer }, { quoted: m })
            fs.unlinkSync(ran)
            })
        }break
        case 'tomp3': {
            if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
            reply('Downloading...')
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            Bot.react(m.chat,'👌',m.key)
            Bot.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
        }break
        case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply('Downloading')
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            Bot.react(m.chat,'👌',m.key)
            Bot.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
        }break
        case 'emojimix': {
	        if (!text) return reply(`Example : ${prefix + command} 😅+🤔`)
		    let [emoji1, emoji2] = text.split`+`
		    let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		    for (let res of anu.results) {
		        let encmedia = await Bot.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		        await fs.unlinkSync(encmedia)
		    }
	    }break
        case 'suitpvp': case 'suit': {
            if (!m.isGroup) return reply(`${mess.group}`)
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete Your Previous Suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit

Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
            this.suit[id] = {
            chat: await Bot.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) Bot.sendText(m.chat, `_Suit Time Out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
        case 'ttc': case 'ttt': case 'tictactoe': {
            if (!m.isGroup) return reply(`${mess.group}`)
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}
    
    ${arr.slice(0, 3).join('')}
    ${arr.slice(3, 6).join('')}
    ${arr.slice(6).join('')}
    
    Waiting @${room.game.currentTurn.split('@')[0]}
    
    Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await Bot.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await Bot.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
        }break
        case 'delttc': case 'delttt': {
            if (!m.isGroup) return reply(`${mess.group}`)
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            Bot.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe🎮 Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
        }break

        case 'button':{
            const buttons = [
            {buttonId: 'id1', buttonText: {displayText: '1'}, type: 1},
            {buttonId: 'id2', buttonText: {displayText: '2'}, type: 1},
            {buttonId: 'id3', buttonText: {displayText: '3'}, type: 1}
            ]  
            const buttonMessage = {
            text: "Atau tekan tombol dibawah",
            footer: 'tidak semua device support button message',
            buttons: buttons,
            headerType: 2
            }
            await Bot.sendMessage(m.chat, buttonMessage)   
        }break
        case 'list' :{
            const sections = [
            {
            title: "Section 1",
            rows: [
                {title: "Option 1", rowId: "option1"},
                {title: "Option 2", rowId: "option2", description: "This is a description"}
            ]
            },
               {
            title: "Section 2",
            rows: [
                {title: "Option 3", rowId: "option3"},
                {title: "Option 4", rowId: "option4", description: "This is a description V2"}
            ]
            },
            ]
            
            const listMessage = {
              text: "This is a list",
              footer: "nice footer, link: https://google.com",
              title: "Amazing boldfaced list title",
              buttonText: "Required, text on the button to view the list",
              sections
            }
            
            await Bot.sendMessage(m.chat, listMessage)
        }break
        case 'react' :{
            Bot.react(m.chat, '👌',m.key)
        }break
        case 'delete': case 'del':{
            if (!m.quoted) reply(false)
            let { chat, fromMe, id, isBaileys } = m.quoted
            if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
            Bot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
        
        }break

        default:
            reply("Ndak tawu.\n\nGunakan *.menu* untuk melihat menu yang tersedia")
    }
} catch (err) {
        m.reply(util.format(err))
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
