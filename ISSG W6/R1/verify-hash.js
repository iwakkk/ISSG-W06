const crypto = require("crypto");

/**
 * First of all, the RECIPIENT obtains MESSAGE and HASH
 * (can be MD5, SHA1, or SHA256) from the SENDER
 */
const message = "this is a secret key";
const senderHash = "2cf33591c3b28b382668952e236cczzz"; // md5 hash

// the RECIPIENT need to create their own version of the hash
const recipientHash = crypto.createHash("md5").update(message).digest("hex");
const isValid = (senderHash == recipientHash);
console.log("MD5 verification result is:", isValid);

const message2 = "this is a fake secret"
const senderHash2 = "2321c6d320b84c6eeb1c8b88aa44e636284c9afb"; // SH-1 hash
const recipientHash2 = crypto.createHash("sha1").update(message2).digest("hex");
const isValid2 = (senderHash2 == recipientHash2);
console.log("Sh-1 verification result is:", isValid2);

const senderHash3 = "ad6aaf9436af95ee9163f1da58b8b7af1018e3faa853209e5151c048bb058479"; // SH-2 hash
const recipientHash3 = crypto.createHash("sha256").update(message2).digest("hex");
const isValid3 = (senderHash3 == recipientHash3);
console.log("Sh-2 verification result is:", isValid3);
