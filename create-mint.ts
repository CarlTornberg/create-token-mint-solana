import { Keypair, Connection } from "@solana/web3.js";
import { createMint } from "@solana/spl-token";
import fs from "fs";
import { homedir } from "os";

export async function createNewMint(conn: Connection): Promise<Keypair> {
  const signer = getKeypairFromFile(homedir() + "/.config/solana/id.json");
  const mint = getKeypairFromFile(homedir() + "/.config/solana/TimeJG4zN8g3pxVJuFVdbKtcz9HMfgRDF5KrgrZ5j4i.json");
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
