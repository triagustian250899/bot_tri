const TelegramBot = require('node-telegram-bot-api');
const express = require('express')

const app = express();
const port = 2525;


// Ganti 'YOUR_BOT_TOKEN' dengan token bot Anda dari BotFather
const token = '6472609232:AAHFLCu2-9seT7-5MkxFmXIFtcmb89NCdVk';

// Buat instance bot
const bot = new TelegramBot(token, { polling: true });

// Daftar untuk melacak pengguna yang telah menerima peringatan
const warnedUsers = {};

// Menangani perintah /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Halo! Ada yang bisa saya bantu, Tuan/Saudari?');
});

// Menangani perintah /warn
bot.onText(/\/warn (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const userName = msg.from.username || msg.from.first_name;
  const targetUser = match[1];

  if (!warnedUsers[targetUser]) {
    warnedUsers[targetUser] = 1;
    bot.sendMessage(chatId, `Pengguna ${targetUser} telah diberi peringatan oleh ${userName}.`);

    // Mengecek jumlah peringatan, jika sudah 3, lakukan banned
    if (warnedUsers[targetUser] === 3) {
      delete warnedUsers[targetUser];
      bot.kickChatMember(chatId, targetUser);
      bot.sendMessage(chatId, `Pengguna ${targetUser} telah dikeluarkan dari grup karena menerima 3 peringatan.`);
    }
  } else {
    bot.sendMessage(chatId, `Pengguna ${targetUser} telah menerima peringatan sebelumnya.`);
  }
});

// Menangani perintah /ban
bot.onText(/\/ban (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const userName = msg.from.username || msg.from.first_name;
  const targetUser = match[1];

  try {
    const chatMember = await bot.telegram.getChatMember(chatId, targetUser);

    if (chatMember.status !== 'member') {
      bot.sendMessage(chatId, `Pengguna ${targetUser} tidak ada di grup.`);
    } else {
      await bot.telegram.kickChatMember(chatId, targetUser);
      bot.sendMessage(chatId, `Pengguna ${targetUser} telah dikeluarkan dari grup oleh ${userName}.`);
    }
  } catch (error) {
    console.error(error);
    bot.sendMessage(chatId, 'Terjadi kesalahan saat mencoba mengeluarkan pengguna.');
  }
});



// Menangani perintah /unwarn
bot.onText(/\/unwarn (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const targetUser = match[1];

  if (warnedUsers[targetUser]) {
    delete warnedUsers[targetUser];
    bot.sendMessage(chatId, `Peringatan untuk pengguna ${targetUser} telah dihapus.`);
  } else {
    bot.sendMessage(chatId, `Pengguna ${targetUser} tidak memiliki peringatan.`);
  }
});

// Menangani perintah /listBAN
bot.onText(/\/listBAN/, (msg) => {
  const chatId = msg.chat.id;
  const bannedUsersList = Object.keys(warnedUsers);

  if (bannedUsersList.length > 0) {
    bot.sendMessage(chatId, `Daftar anggota yang telah terbanned: ${bannedUsersList.join(', ')}`);
  } else {
    bot.sendMessage(chatId, 'Tidak ada anggota yang telah terbanned.');
  }
});

// Menangani perintah /dialilped
bot.onText(/\/dialilped/, (msg) => {
  const chatId = msg.chat.id;
  const ilpedText = `🔧Cara Beli paket Edukasi:🔨
❗️Telkomsel: Ilmupedia/Kuota Belajar (*363*844#)
❕Indosat: Fredoom Edu Apps (*123*445#)
❗️Smartfren: Edukasi (*123*3*8#)`;

  bot.sendMessage(chatId, ilpedText);
});

// Menangani perintah /bugxl
bot.onText(/\/bugxl/, (msg) => {
  const chatId = msg.chat.id;
  const bugxlText = `XL VISION SSL ONLY
certify.alexametrics.com
graph.facebook.com

BUG EDU XL WS/WSS
us01st-cf.zoom.us
zoomcares.zoom.us
gopbxstatic-cf.zoom.us
psoportal.zoom.us

LINE PROXY
104.21.71.112
162.159.138.6
sourcemaking.com
cs-ocr.clova.line.me
lb.clova.line.me

BUG SOSMED WS/WSS
investor.snap.com
162.159.129.11
ads-interfaces.sc-cdn.net
smule.zendesk.com

AXIS GAME WS
104.16.106.96
104.18.23.187
Hostname: ws.flv.nimo.tv (Cloudflare)
nf-asset.miniclippt.com
104.16.109.96
avatars.pool.miniclippt.com

AKRAB WS/WSS
cdn-settings.appsflyersdk.com
104.18.22.10`;

  bot.sendMessage(chatId, bugxlText);
});

// Menangani perintah /Vision
bot.onText(/\/Vision/, (msg) => {
  const chatId = msg.chat.id;
  const visionText = `New BUG XL VISION 

visionplus.id,104.21.235.171
live-event1.visionplus.id,110.50.83.172
media.visionplus.id,202.147.193.157
liveanevia.visionplus.id,110.50.83.172
misc.visionplus.id,202.147.193.158
okezone.visionplus.id,202.147.193.157
re.visionplus.id,202.147.193.158
app-config.visionplus.id,202.147.193.158
apprating.visionplus.id,202.147.193.158
web-api.visionplus.id,202.147.193.169
mail.visionplus.id,110.50.83.70
visionplus-stream.visionplus.id,202.147.204.117
sindo.visionplus.id,202.147.193.157
dl2go.visionplus.id,202.147.193.158
cluster-images.visionplus.id,202.147.193.157
adtools.visionplus.id,202.147.193.152
contents.visionplus.id,202.147.193.168
inews.visionplus.id,202.147.193.157
allyoucaneat.visionplus.id,110.50.83.18
entitlement.visionplus.id,202.147.193.163
paytv.visionplus.id,202.147.193.158
www.visionplus.id,202.147.193.162
dev-legacy.visionplus.id,110.50.83.172`;

  bot.sendMessage(chatId, visionText);
});

// Menangani perintah /wifi
bot.onText(/\/wifi/, (msg) => {
  const chatId = msg.chat.id;
  const wifiText = `#Trik Cara Inject WifiID

Bagi yang di daerahnya ada Wifi.id nganggur (tanpa password), coba cara bypass ini:
1. Ikuti tutor bolak balik disini : [https://t.me/teammerah/54](https://t.me/teammerah/54)
2. Lalu masukkan/gunakan bug : 
gov.ruangguru.com 
atau 
104.18.2.2 
104.18.3.2
3. Jika tidak work, gunakan mode wss
*Gunakan bug gov.ruangguru.com jika menggunakan WSS

NB: Hanya untuk wifi.id yang open (tanpa password Wi-FI)`;

  bot.sendMessage(chatId, wifiText, { parse_mode: "Markdown", disable_web_page_preview: true });
});

// Menangani perintah /buggame
bot.onText(/\/buggame/, (msg) => {
  const chatId = msg.chat.id;
  const buggameText = `List Game Axis | Internet Gratis Hoax 😡

SSH Ws/Trojan Go/Vmess/Vless Ws
Support Port 80/443
=================
poe.garena.com
104.19.185.16
104.19.186.16
-----------------
ffsupport.garena.com
104.16.51.111
104.16.53.111
-----------------
zendesk1.garena.com
zendesk1.appsflyer.com
162.159.128.7
162.159.138.6
-----------------
cdn.appsflyer.com
104.18.20.94
104.18.21.94
-----------------
v1-cdn.golfstrike.miniclippt.com.cdn.cloudflare.net
vx-cdn.golfbattle.miniclippt.com.cdn.cloudflare.net
vx-cdn.golfstrike.miniclippt.com.cdn.cloudflare.net
104.16.106.96
104.16.107.96
104.16.108.96
104.16.109.96
104.16.110.96
-------------------`;

  bot.sendMessage(chatId, buggameText);
});

// Menangani perintah /edu
bot.onText(/\/edu/, (msg) => {
  const chatId = msg.chat.id;
  const eduText = `UPDATE List Edukasi Isat | Internet Gratis Hoax 😡

SSH Ws/Trojan Go/Vmess/Vless Ws/Wss
Support Port 80/443
=================
"beberapa belum ada di uji coba"
news.microsoft.com
141.193.213.20
141.193.213.21 (dead)
-----------------
note.microsoft.com
104.17.70.206 (dead)
104.17.71.206
-----------------
zoomappdocs.zoom.us
104.18.30.9 (dead)
104.18.31.9 (dead)
-----------------
source.zoom.us
170.114.45.0 (dead)
170.114.46.0 (dead)
-----------------
us04web.zoom.us
170.114.52.4 (dead)

"ini sudah di uji coba"
us05web.zoom.us
170.114.52.5 (DEAD)
-----------------
www.skillacademy.com
104.18.25.139
104.18.24.139
-----------------
www.udemy.com
xl.udemy.com
axis.udemy.com
telkomsel.udemy.com
indosat.udemy.com
tri.udemy.com
104.16.66.85 (DEAD)
104.16.65.85
-----------------
callinghelp.webex.com
162.159.135.42 (dead)
-----------------
zendesk1.appsflyer.com
162.159.128.7 (DEAD)
162.159.138.6
-----------------
104.20.74.141 (dead)
104.20.75.141 (dead)
-----------------`;

  bot.sendMessage(chatId, eduText);
});

// Menangani perintah /liveon
bot.onText(/\/liveon/, (msg) => {
  const chatId = msg.chat.id;
  const liveonText = `#Bug Live ON 0p0k

🔄Mode Bolak Balik Port 80 Non TLS🔄
↯
IP:
• 104.21.8.121 (Gk malak reguler)
• 172.67.139.111 (Gk malak reguler)
• 162.159.128.7 (lampung work)
• 162.159.138.6
• 104.16.53.111
• 104.16.51.111

Host:
• beacon.liveon.id (Gk malak reguler)
• zendesk1.appsflyer.com
• support.liveon.id

⬇️Mode SSL/SNI (TKP Tertentu)⬇️
• shopee.co.id
• shopeemobile.com
• r.koubei.com

10.22.25.131
10.22.24.131
Jabar ilped pake ini bang`;

  bot.sendMessage(chatId, liveonText);
});

bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  const helpText = `
Daftar Perintah Bot:
/start - Memulai percakapan dengan bot.
/warn [username] - Memberikan peringatan kepada pengguna.
/ban [username] - Melarang pengguna dari grup.
/unwarn [username] - Menghapus peringatan pengguna.
/listBAN - Menampilkan daftar pengguna yang telah dilarang.
/dialilped - Informasi cara membeli paket Edukasi.
/bugxl - Daftar bug XL.
/Vision - Daftar bug XL Vision.
/wifi - Trik untuk mengakses Wifi.ID (Maintenance).
/buggame - Daftar bug game Axis.
/edu - Update daftar bug edukasi Isat.
/liveon - Daftar bug Live ON 0p0k.
`;

  bot.sendMessage(chatId, helpText);
});

// Menangani anggota baru yang bergabung dengan grup
bot.on('new_chat_members', (msg) => {
  const chatId = msg.chat.id;
  const newMembers = msg.new_chat_members;

  newMembers.forEach((member) => {
    // Mendapatkan nama pengguna anggota baru jika tersedia, jika tidak, menggunakan nama pertama
    const username = member.username || member.first_name;
    
    // Mengirim pesan sambutan
    bot.sendMessage(chatId, `Selamat datang di grup, ${username}!
    untuk melihat list perintah yang ada ketik "/help", Terima kasih selamat bersenang-senang :)`);
  });
});


// Menangani perintah yang tidak dikenali
bot.on('message', (msg) => {
  // Cek apakah pesan yang diterima merupakan perintah yang dikenali
  const text = msg.text;
  const chatId = msg.chat.id;

  if (text.startsWith('/start') || text.startsWith('/warn') || text.startsWith('/ban') || text.startsWith('/unwarn') || text.startsWith('/listBAN') || text.startsWith('/dialilped') || text.startsWith('/edu') || text.startsWith('/liveon') || text.startsWith('/wifi') || text.startsWith('/buggame') || text.startsWith('/bugxl') || text.startsWith('/Vision') || text.startsWith('help')) {
    // Perintah dikenali, tidak perlu merespon pesan ini
    return;
  }

  // Pesan tidak dikenali, tidak merespon atau mengirimkan pesan lain
  // Jika Anda ingin memberikan tanggapan lain, Anda dapat menambahkannya di sini
});

// Menangani error polling
bot.on('polling_error', (error) => {
  console.error(error);
});

// Memulai server Express untuk mendengarkan permintaan HTTP masuk
app.listen(port, () => {
  console.log(`Bot sedang berjalan di port ${port}`);
});