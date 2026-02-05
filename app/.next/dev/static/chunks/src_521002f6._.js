(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/NILDealRegistry.abi.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"AlreadySigned","type":"error"},{"inputs":[],"name":"DealNotSigned","type":"error"},{"inputs":[],"name":"NotAuthorized","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"dealId","type":"uint256"},{"indexed":false,"internalType":"address","name":"attestor","type":"address"}],"name":"ComplianceAttested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"dealId","type":"uint256"},{"indexed":false,"internalType":"address","name":"athlete","type":"address"},{"indexed":false,"internalType":"address","name":"brand","type":"address"}],"name":"DealRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"dealId","type":"uint256"},{"indexed":false,"internalType":"address","name":"signer","type":"address"}],"name":"DealSigned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"dealId","type":"uint256"}],"name":"attestCompliance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deals","outputs":[{"internalType":"address","name":"athlete","type":"address"},{"internalType":"address","name":"brand","type":"address"},{"internalType":"bytes32","name":"contractHash","type":"bytes32"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"string","name":"dealType","type":"string"},{"internalType":"uint64","name":"startDate","type":"uint64"},{"internalType":"uint64","name":"endDate","type":"uint64"},{"internalType":"bool","name":"athleteSigned","type":"bool"},{"internalType":"bool","name":"brandSigned","type":"bool"},{"internalType":"enum NILDealRegistry.Status","name":"status","type":"uint8"},{"internalType":"bool","name":"complianceAttested","type":"bool"},{"internalType":"address","name":"complianceAttestor","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"dealId","type":"uint256"}],"name":"getDeal","outputs":[{"components":[{"internalType":"address","name":"athlete","type":"address"},{"internalType":"address","name":"brand","type":"address"},{"internalType":"bytes32","name":"contractHash","type":"bytes32"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"string","name":"dealType","type":"string"},{"internalType":"uint64","name":"startDate","type":"uint64"},{"internalType":"uint64","name":"endDate","type":"uint64"},{"internalType":"bool","name":"athleteSigned","type":"bool"},{"internalType":"bool","name":"brandSigned","type":"bool"},{"internalType":"enum NILDealRegistry.Status","name":"status","type":"uint8"},{"internalType":"bool","name":"complianceAttested","type":"bool"},{"internalType":"address","name":"complianceAttestor","type":"address"}],"internalType":"struct NILDealRegistry.Deal","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextDealId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"athlete","type":"address"},{"internalType":"address","name":"brand","type":"address"},{"internalType":"bytes32","name":"contractHash","type":"bytes32"},{"internalType":"string","name":"contractURI","type":"string"},{"internalType":"string","name":"dealType","type":"string"},{"internalType":"uint64","name":"startDate","type":"uint64"},{"internalType":"uint64","name":"endDate","type":"uint64"}],"name":"registerDeal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"dealId","type":"uint256"}],"name":"signDeal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]);}),
"[project]/src/lib/registry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getReadContract",
    ()=>getReadContract,
    "getWriteContract",
    ()=>getWriteContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// app/src/lib/registry.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-client] (ecmascript) <export * as ethers>");
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
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider(RPC_URL);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$NILDealRegistry$2e$abi$2e$json__$28$json$29$__["default"], provider);
}
async function getWriteContract() {
    const w = window;
    if (!w.ethereum) throw new Error("MetaMask not found");
    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(w.ethereum);
    const network = await provider.getNetwork();
    if (network.chainId !== 31337n) {
        throw new Error("Please switch MetaMask to Localhost 8545");
    }
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(CONTRACT_ADDRESS, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$NILDealRegistry$2e$abi$2e$json__$28$json$29$__["default"], signer);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/test/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/registry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TestPage() {
    _s();
    const [nextDealId, setNextDealId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loading...");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestPage.useEffect": ()=>{
            ({
                "TestPage.useEffect": async ()=>{
                    const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$registry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReadContract"])();
                    const id = await c.nextDealId();
                    setNextDealId(id.toString());
                }
            })["TestPage.useEffect"]().catch({
                "TestPage.useEffect": (e)=>setNextDealId(`error: ${e.message}`)
            }["TestPage.useEffect"]);
        }
    }["TestPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Contract Read Test"
            }, void 0, false, {
                fileName: "[project]/src/app/test/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(TestPage, "I0IjjSqH+LRBjB5X9ZZfKAX6jc8=");
_c = TestPage;
var _c;
__turbopack_context__.k.register(_c, "TestPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_521002f6._.js.map