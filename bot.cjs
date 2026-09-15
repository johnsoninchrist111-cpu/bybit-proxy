const C=require('crypto'),F=require('fs')
const SY='MNTUSDT',BTC='BTCUSDT',NTFY='https://ntfy.sh/mnt-bamako-johnson-2025'
let K={apiKey:process.env.BYBIT_API_KEY,apiSecret:process.env.BYBIT_API_SECRET}
let s={};try{s=JSON.parse(F.readFileSync('./bot-state.json','utf8'))}catch(e){s={}}
let consec=s.consec||0,last=s.lastLossTime||0,dPnL=s.dPnL||0,pos=s.pos||null,entry=s.pos?s.pos.entry:0,qty=s.pos?s.pos.qty:0,top=s.topPrice||0,be=s.beDone||false
...