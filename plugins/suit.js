/*

    made by https://github.com/syahrularranger
*/
let timeout = 60000
let poin = 500
let poin_lose = -200
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room.id.startWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Selesaikan suit mu yang sebelumnya!'
  if (!m.mentionedJid[0]) return m.reply(`_siapa yang ingin kamu tantang?_\nTag orangnya.. Contoh\n${usedPrefix}suit @${owner[1]}`, m.chat, {contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net']}})
  if (Object.values(conn.suit).find(room => room.id.startWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
  let id = 'suit_' + new Date() *
  let caption = `
_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0],split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]}
`.trim()
  let footer = `Ketik "terima/ok/gas" untuk memulai suit\nKetik "tolak/gabisa/nanti" untuk menolak`
  conn.suit[id] = {
    chat: await conn.send2Button(m.chat, Suit, © SHIRAORI, 'Terima', 'ok', 'Tolak', 'tolak', m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),'')
    chat: await conn.send2Button(m.chat, Suit, © SHIRAORI, 'Terima', 'ok', 'Tolak', 'tolak', m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
    id: id,