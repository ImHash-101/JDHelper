const online = {
  PRIVATE_KEY: "helper",
  HOST:"0.0.0.0",
  WEB_PORT : 5701,
  DB_CONFIG :{
      host:     "172.17.0.1",
      database: "jd",
      protocol:  "mysql",
      port:        3618,
      user:      "helper",
      password:  "passwd",
    }
}

const test = {
  PRIVATE_KEY: "helper",
  HOST:"0.0.0.0",
  WEB_PORT : 5701,
  DB_CONFIG :{
      host:     "127.17.0.1",
      database: "jd",
      protocol:  "mysql",
      port:        3306,
      user:      "root",
      password:  "root",
    }
}

module.exports = test