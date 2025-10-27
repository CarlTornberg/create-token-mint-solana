import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { createMint, createMintToInstruction } from "@solana/spl-token";
import fs from "fs";
import { log } from "console";
import { homedir } from "os";

const conn = new Connection("https://api.devnet.solana.com", "confirmed");

await createNewMint();

async function createNewMint() {
  const signer = getKeypairFromFile(homedir() + "/.config/solana/id.json");
  const mint = getKeypairFromFile(homedir() + "/.config/solana/TimeJG4zN8g3pxVJuFVdbKtcz9HMfgRDF5KrgrZ5j4i.json");
  try {
    const mintPubkey = await createMint(
      conn, 
      signer, 
      signer.publicKey, 
      null,
      6,
      mint
    );
    console.log("New mint created:", mintPubkey);
  }
  catch(e) {
    log("Could not create mint:", e);
  }
  
}

function getKeypairFromFile(path: string) {
  return Keypair.fromSecretKey(
    Uint8Array.from(
      JSON.parse(
        fs.readFileSync(path, "utf8").toString()
      )
    )
  );
}
