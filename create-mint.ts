import { Keypair, Connection } from "@solana/web3.js";
import { createMint } from "@solana/spl-token";
import fs from "fs";
import { log } from "console";
import { homedir } from "os";

const conn = new Connection("https://api.devnet.solana.com", "confirmed");

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
