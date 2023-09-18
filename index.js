const { Bot, webhookCallback } = require("grammy");
const express = require("express");

require("dotenv").config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("dialilped", (ctx) => {
  const message = `
🔧Cara Beli paket Edukasi:🔨
❗️Telkomsel: Ilmupedia/Kuota Belajar (*363*844#)
❕Indosat: Fredoom Edu Apps (*123*445#)
❗️Smartfren: Edukasi (*123*3*8#)
  `;
  ctx.reply(message);
});

bot.command("Vision", (ctx) => {
  const message = `
New BUG XL VISION 

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
dev-legacy.visionplus.id,110.50.83.172
  `;
  ctx.reply(message);
});

bot.command("bugxl", (ctx) => {
  const bugxlMessage = `
XL VISION SSL ONLY
certify.alexametrics.com
graph.facebook.com

EDU XL WS/WSS
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
  ctx.reply(bugxlMessage);
});

bot.command("wifiid", (ctx) => {
  const message = `
#Trik Cara Inject WifiID

Bagi yang di daerahnya ada Wifi.id nganggur (tanpa password), coba cara bypass ini:
1. Ikuti tutor bolak balik disini : [https://t.me/teammerah/54](https://t.me/teammerah/54)
2. Lalu masukkan/gunakan bug : 
gov.ruangguru.com 
atau 
104.18.2.2 
104.18.3.2
3. Jika tidak work, gunakan mode wss
*Gunakan bug gov.ruangguru.com jika menggunakan WSS

NB: Hanya untuk wifi.id yang open (tanpa password Wi-FI)
  `;
  ctx.reply(message);
});

bot.command("buggame", (ctx) => {
  const message = `
List Game Axis | Internet Gratis Hoax 😡

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
-------------------
  `;
  ctx.reply(message);
});

bot.command("edu", (ctx) => {
  const message = `
UPDATE List Edukasi Isat | Internet Gratis Hoax 😡

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
  `;
  ctx.reply(message);
});

bot.command("liveon", (ctx) => {
  const message = `
#Bug Live ON 0p0k

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
Jabar ilped pake ini bang
  `;
  ctx.reply(message);
});

bot.command("help", (ctx) => {
  const message = `
Daftar Perintah Bot:
/start - Memulai percakapan dengan bot.
/warn [username] - Memberikan peringatan kepada pengguna.
/ban [username] - Melarang pengguna dari grup.
/unwarn [username] - Menghapus peringatan pengguna.
/listBAN - Menampilkan daftar pengguna yang telah dilarang.
/dialilped - Informasi cara membeli paket Edukasi.
/bugxl - Daftar bug XL.
/Vision - Daftar bug XL Vision.
/wifiid - Trik untuk mengakses Wifi.ID (Maintenance).
/buggame - Daftar bug game Axis.
/edu - Update daftar bug edukasi Isat.
/liveon - Daftar bug Live ON 0p0k.
/help - Menampilkan daftar perintah ini.
  `;
  ctx.reply(message);
});

bot.on("message", (ctx) => ctx.reply("Got another message!"));


if (process.env.NODE_ENV === "production") {
  const app = express();
  app.use(express.json());
  app.use(webhookCallback(bot, "express"));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Bot listening on port ${PORT}`);
  });
} else {
  bot.start();
}

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
