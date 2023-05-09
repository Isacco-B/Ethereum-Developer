const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
  const msg = hashMessage(message);
  return secp.recoverPublicKey(msg, signature, recoveryBit);
}
