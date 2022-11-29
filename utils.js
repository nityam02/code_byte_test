const crypto = require("crypto");

exports.getHexDigest=(candidate)=>crypto.createHash("sha3-512").update(candidate).digest("hex");