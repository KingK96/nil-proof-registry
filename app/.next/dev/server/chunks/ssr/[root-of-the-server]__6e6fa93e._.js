module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/src/lib/NILDealRegistry.abi.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadySigned","type":"error"},{"inputs":[],"name":"DealNotSigned","type":"error"},{"inputs":[],"name":"NotAuthorized","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"dealId","type":"uint256"},{"indexed":false,"internalType":"address","name":"attestor","type":"address"}],"name":"ComplianceAttested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"dealId","type":"uint256"},{"indexed":false,"internalType":"address","name":"athlete","type":"address"},{"indexed":false,"internalType":"address","name":"brand","type":"address"}],"name":"DealRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"dealId","type":"uint256"},{"indexed":false,"internalType":"address","name":"signer","type":"address"}],"name":"DealSigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"dealId","type":"uint256"}],"name":"attestCompliance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deals","outputs":[{"internalType":"address","name":"athlete","type":"address"},{"internalType":"address","name":"brand","type":"address"},{"internalType":"bytes32","name":"contractHash","type":"bytes32"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"string","name":"dealType","type":"string"},{"internalType":"uint64","name":"startDate","type":"uint64"},{"internalType":"uint64","name":"endDate","type":"uint64"},{"internalType":"bool","name":"athleteSigned","type":"bool"},{"internalType":"bool","name":"brandSigned","type":"bool"},{"internalType":"enum NILDealRegistry.Status","name":"status","type":"uint8"},{"internalType":"bool","name":"complianceAttested","type":"bool"},{"internalType":"address","name":"complianceAttestor","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"dealId","type":"uint256"}],"name":"getDeal","outputs":[{"components":[{"internalType":"address","name":"athlete","type":"address"},{"internalType":"address","name":"brand","type":"address"},{"internalType":"bytes32","name":"contractHash","type":"bytes32"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"string","name":"dealType","type":"string"},{"internalType":"uint64","name":"startDate","type":"uint64"},{"internalType":"uint64","name":"endDate","type":"uint64"},{"internalType":"bool","name":"athleteSigned","type":"bool"},{"internalType":"bool","name":"brandSigned","type":"bool"},{"internalType":"enum NILDealRegistry.Status","name":"status","type":"uint8"},{"internalType":"bool","name":"complianceAttested","type":"bool"},{"internalType":"address","name":"complianceAttestor","type":"address"}],"internalType":"struct NILDealRegistry.Deal","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextDealId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"athlete","type":"address"},{"internalType":"address","name":"brand","type":"address"},{"internalType":"bytes32","name":"contractHash","type":"bytes32"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"string","name":"dealType","type":"string"},{"internalType":"uint64","name":"startDate","type":"uint64"},{"internalType":"uint64","name":"endDate","type":"uint64"}],"name":"registerDeal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"dealId","type":"uint256"}],"name":"signDeal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]);}),
"[project]/src/lib/registry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReadContract",
    ()=>getReadContract,
    "getSigner",
    ()=>getSigner,
    "getWriteContract",
    ()=>getWriteContract
]);
// app/src/lib/registry.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$NILDealRegistry$2e$abi$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/NILDealRegistry.abi.json (json)");
;
;
const RPC_URL = ("TURBOPACK compile-time value", "http://127.0.0.1:8545");
const CONTRACT_ADDRESS = ("TURBOPACK compile-time value", "0x5FbDB2315678afecb367f032d93F642f64180aa3");
function getReadContract() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(RPC_URL);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$NILDealRegistry$2e$abi$2e$json__$28$json$29$__["default"], provider);
}
async function getWriteContract() {
    const w = window;
    if (!w.ethereum) throw new Error("MetaMask not found");
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(w.ethereum);
    const network = await provider.getNetwork();
    if (network.chainId !== 31337n) {
        throw new Error("Please switch MetaMask to Localhost 8545");
    }
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$NILDealRegistry$2e$abi$2e$json__$28$json$29$__["default"], signer);
}
async function getSigner() {
    const w = window;
    if (!w.ethereum) throw new Error("MetaMask not found");
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(w.ethereum);
    const network = await provider.getNetwork();
    // local hardhat only
    if (Number(network.chainId) !== 31337) {
        throw new Error("Please switch MetaMask to Localhost 8545");
    }
    await provider.send("eth_requestAccounts", []);
    return await provider.getSigner();
}
}),
"[project]/src/app/test/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/registry.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function TestPage() {
    const [nextDealId, setNextDealId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("loading...");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$registry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReadContract"])();
            const id = await c.nextDealId();
            setNextDealId(id.toString());
        })().catch((e)=>setNextDealId(`error: ${e.message}`));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Contract Read Test"
            }, void 0, false, {
                fileName: "[project]/src/app/test/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "nextDealId: ",
                    nextDealId
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/test/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/test/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6e6fa93e._.js.map