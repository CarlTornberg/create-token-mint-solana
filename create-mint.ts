import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { createMint, createMintToInstruction } from "@solana/spl-token";
import fs from "fs";
import { log } from "console";
import { homedir } from "os";

<<<<<<< HEAD
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
  
=======
export async function createNewMint(conn: Connection, signer: Keypair): Promise<Keypair> {
  const mint = getKeypairFromFile("~/.config/solana/TimeVaultToken_old.json.json");
  await createMint(
    conn, 
    signer, 
    signer.publicKey, 
    null,
    6,
    mint);
  return mint;
>>>>>>> 4bf8b89 (Minor changes)
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
