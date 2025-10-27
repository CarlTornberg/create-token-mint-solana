import { Keypair, Connection, PublicKey } from "@solana/web3.js";
import { createMint, createMintToInstruction } from "@solana/spl-token";
import fs from "fs";
import { log } from "console";

const conn = new Connection("https://api.devnet.solana.com", "confirmed");

await createNewMint();

async function createNewMint() {
  const signer = getKeypairFromFile("/home/bob/.config/solana/id.json");
  const mint = getKeypairFromFile("/home/bob/.config/solana/mint.json");
  try {
    await createMint(
      conn, 
      signer, 
      signer.publicKey, 
      null,
      6,
      mint
    );
    console.log("New mint created:", mint);
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
