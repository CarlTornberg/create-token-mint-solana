"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewMint = createNewMint;
exports.getKeypairFromFile = getKeypairFromFile;
const web3_js_1 = require("@solana/web3.js");
const spl_token_1 = require("@solana/spl-token");
const fs_1 = __importDefault(require("fs"));
const os_1 = require("os");
function createNewMint(conn, signer) {
    return __awaiter(this, void 0, void 0, function* () {
        const mint = getKeypairFromFile("/.config/solana/TimeJG4zN8g3pxVJuFVdbKtcz9HMfgRDF5KrgrZ5j4i.json");
        yield (0, spl_token_1.createMint)(conn, signer, signer.publicKey, null, 6, mint);
        return mint;
    });
}
function getKeypairFromFile(path) {
    return web3_js_1.Keypair.fromSecretKey(Uint8Array.from(JSON.parse(fs_1.default.readFileSync((0, os_1.homedir)() + path, "utf8").toString())));
}
