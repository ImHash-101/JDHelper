const { verfiyToken } =require("../util/jwt")

const a = verfiyToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHRfcGluIjoiamRfNjAzMWI4YzA4NzJjYiIsInB0X2tleSI6IkFBSmgxR3RHQUREVWFWWl82czRiOWZsMzhyOTFlZWY2V3drWUpGYkdjc1MzQldnZnk0RDByWVYxUFFHellTSUtSbmVfUzNXSDZxdyIsImF1dGhfbGV2ZWwiOjAsImNyZWF0ZWRBdCI6IjIwMjItMDEtMDlUMDg6MDE6NTkuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjItMDEtMDlUMDg6MDE6NTkuMDAwWiIsImlhdCI6MTY0MTcxNzE3Mn0.r2ZVV3BKO79sn5Gmf0vzBl8UAWk_Ct0m_8pzqaLeYxw")
console.log(a)