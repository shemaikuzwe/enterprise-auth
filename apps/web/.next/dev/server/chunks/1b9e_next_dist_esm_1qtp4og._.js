module.exports = [
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/build/output/log.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bootstrap",
    ()=>bootstrap,
    "error",
    ()=>error,
    "errorOnce",
    ()=>errorOnce,
    "event",
    ()=>event,
    "info",
    ()=>info,
    "prefixes",
    ()=>prefixes,
    "ready",
    ()=>ready,
    "trace",
    ()=>trace,
    "wait",
    ()=>wait,
    "warn",
    ()=>warn,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/picocolors.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/lru-cache.js [middleware] (ecmascript)");
;
;
const prefixes = {
    wait: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["white"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["bold"])('○')),
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["red"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["bold"])('⨯')),
    warn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["yellow"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["bold"])('⚠')),
    ready: '▲',
    info: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["white"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["bold"])(' ')),
    event: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["green"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["bold"])('✓')),
    trace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["magenta"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["bold"])('»'))
};
const LOGGING_METHOD = {
    log: 'log',
    warn: 'warn',
    error: 'error'
};
function prefixedLog(prefixType, ...message) {
    if ((message[0] === '' || message[0] === undefined) && message.length === 1) {
        message.shift();
    }
    const consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : 'log';
    const prefix = prefixes[prefixType];
    // If there's no message, don't print the prefix but a new line
    if (message.length === 0) {
        console[consoleMethod]('');
    } else {
        // Ensure if there's ANSI escape codes it's concatenated into one string.
        // Chrome DevTool can only handle color if it's in one string.
        if (message.length === 1 && typeof message[0] === 'string') {
            console[consoleMethod](prefix + ' ' + message[0]);
        } else {
            console[consoleMethod](prefix, ...message);
        }
    }
}
function bootstrap(message) {
    console.log(message);
}
function wait(...message) {
    prefixedLog('wait', ...message);
}
function error(...message) {
    prefixedLog('error', ...message);
}
function warn(...message) {
    prefixedLog('warn', ...message);
}
function ready(...message) {
    prefixedLog('ready', ...message);
}
function info(...message) {
    prefixedLog('info', ...message);
}
function event(...message) {
    prefixedLog('event', ...message);
}
function trace(...message) {
    prefixedLog('trace', ...message);
}
const warnOnceCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LRUCache"](10000, (value)=>value.length);
function warnOnce(...message) {
    const key = message.join(' ');
    if (!warnOnceCache.has(key)) {
        warnOnceCache.set(key, key);
        warn(...message);
    }
}
const errorOnceCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LRUCache"](10000, (value)=>value.length);
function errorOnce(...message) {
    const key = message.join(' ');
    if (!errorOnceCache.has(key)) {
        errorOnceCache.set(key, key);
        error(...message);
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/build/templates/middleware.js { INNER_MIDDLEWARE_MODULE => \"[project]/apps/web/proxy.ts [middleware] (ecmascript)\" } [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "handler",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$build$2f$adapter$2f$setup$2d$node$2d$env$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$build$2f$adapter$2f$setup$2d$node$2d$env$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/build/adapter/setup-node-env.external.js [external] (next/dist/build/adapter/setup-node-env.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$adapter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/adapter.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$incremental$2d$cache$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/incremental-cache/index.js [middleware] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$proxy$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/proxy.ts [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/is-next-router-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
;
;
;
;
const incrementalCacheHandler = null;
;
;
;
;
const mod = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$proxy$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__
};
const page = "/proxy";
const isProxy = page === '/proxy' || page === '/src/proxy';
const handlerUserland = (("TURBOPACK compile-time truthy", 1) ? mod.proxy : "TURBOPACK unreachable") || mod.default;
class ProxyMissingExportError extends Error {
    constructor(message){
        super(message);
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
        // Stack isn't useful here, remove it considering it spams logs during development.
        this.stack = '';
    }
}
// TODO: This spams logs during development. Find a better way to handle this.
// Removing this will spam "fn is not a function" logs which is worse.
if (typeof handlerUserland !== 'function') {
    throw new ProxyMissingExportError(`The ${("TURBOPACK compile-time truthy", 1) ? 'Proxy' : "TURBOPACK unreachable"} file "${page}" must export a function named \`${("TURBOPACK compile-time truthy", 1) ? 'proxy' : "TURBOPACK unreachable"}\` or a default function.`);
}
// Proxy will only sent out the FetchEvent to next server,
// so load instrumentation module here and track the error inside proxy module.
function errorHandledHandler(fn) {
    return async (...args)=>{
        try {
            return await fn(...args);
        } catch (err) {
            // In development, error the navigation API usage in runtime,
            // since it's not allowed to be used in proxy as it's outside of react component tree.
            if ("TURBOPACK compile-time truthy", 1) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$is$2d$next$2d$router$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isNextRouterError"])(err)) {
                    err.message = `Next.js navigation API is not allowed to be used in ${("TURBOPACK compile-time truthy", 1) ? 'Proxy' : "TURBOPACK unreachable"}.`;
                    throw err;
                }
            }
            const req = args[0];
            const url = new URL(req.url);
            const resource = url.pathname + url.search;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["edgeInstrumentationOnRequestError"])(err, {
                path: resource,
                method: req.method,
                headers: Object.fromEntries(req.headers.entries())
            }, {
                routerKind: 'Pages Router',
                routePath: '/proxy',
                routeType: 'proxy',
                revalidateReason: undefined
            });
            throw err;
        }
    };
}
const internalHandler = async (opts)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        var _opts_request_requestMeta, _opts_request_requestMeta1;
        // This mirrors what `RouteModule#prepare` does for routes
        // edge runtime handles loading instrumentation at the edge adapter level
        const { join, relative } = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
        const { ensureInstrumentationRegistered } = __turbopack_context__.r("[externals]/next/dist/server/lib/router-utils/instrumentation-globals.external.js [external] (next/dist/server/lib/router-utils/instrumentation-globals.external.js, cjs)");
        const absoluteProjectDir = join(/* turbopackIgnore: true */ process.cwd(), ((_opts_request_requestMeta = opts.request.requestMeta) == null ? void 0 : _opts_request_requestMeta.relativeProjectDir) || '');
        const absoluteDistDir = (_opts_request_requestMeta1 = opts.request.requestMeta) == null ? void 0 : _opts_request_requestMeta1.distDir;
        const distDir = absoluteDistDir ? relative(absoluteProjectDir, absoluteDistDir) : '.next';
        await ensureInstrumentationRegistered(absoluteProjectDir, distDir);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$adapter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["adapter"])({
        ...opts,
        IncrementalCache: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$incremental$2d$cache$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCache"],
        incrementalCacheHandler,
        page,
        handler: errorHandledHandler(handlerUserland)
    });
};
async function handler(request, ctx) {
    const result = await internalHandler({
        request: {
            url: request.url,
            method: request.method,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(request.headers),
            nextConfig: {
                basePath: ("TURBOPACK compile-time value", ""),
                i18n: ("TURBOPACK compile-time value", ""),
                trailingSlash: Boolean(("TURBOPACK compile-time value", false)),
                experimental: {
                    cacheLife: ("TURBOPACK compile-time value", {
                        "default": ("TURBOPACK compile-time value", {
                            "stale": ("TURBOPACK compile-time value", 300),
                            "revalidate": ("TURBOPACK compile-time value", 900),
                            "expire": ("TURBOPACK compile-time value", 4294967294)
                        }),
                        "seconds": ("TURBOPACK compile-time value", {
                            "stale": ("TURBOPACK compile-time value", 30),
                            "revalidate": ("TURBOPACK compile-time value", 1),
                            "expire": ("TURBOPACK compile-time value", 60)
                        }),
                        "minutes": ("TURBOPACK compile-time value", {
                            "stale": ("TURBOPACK compile-time value", 300),
                            "revalidate": ("TURBOPACK compile-time value", 60),
                            "expire": ("TURBOPACK compile-time value", 3600)
                        }),
                        "hours": ("TURBOPACK compile-time value", {
                            "stale": ("TURBOPACK compile-time value", 300),
                            "revalidate": ("TURBOPACK compile-time value", 3600),
                            "expire": ("TURBOPACK compile-time value", 86400)
                        }),
                        "days": ("TURBOPACK compile-time value", {
                            "stale": ("TURBOPACK compile-time value", 300),
                            "revalidate": ("TURBOPACK compile-time value", 86400),
                            "expire": ("TURBOPACK compile-time value", 604800)
                        }),
                        "weeks": ("TURBOPACK compile-time value", {
                            "stale": ("TURBOPACK compile-time value", 300),
                            "revalidate": ("TURBOPACK compile-time value", 604800),
                            "expire": ("TURBOPACK compile-time value", 2592000)
                        }),
                        "max": ("TURBOPACK compile-time value", {
                            "stale": ("TURBOPACK compile-time value", 300),
                            "revalidate": ("TURBOPACK compile-time value", 2592000),
                            "expire": ("TURBOPACK compile-time value", 31536000)
                        })
                    }),
                    authInterrupts: Boolean(("TURBOPACK compile-time value", false)),
                    clientParamParsingOrigins: ("TURBOPACK compile-time value", [])
                }
            },
            page: {
                name: page
            },
            body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body ?? undefined : undefined,
            waitUntil: ctx.waitUntil,
            requestMeta: ctx.requestMeta,
            signal: ctx.signal || new AbortController().signal
        }
    });
    ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, result.waitUntil);
    return result.response;
}
const __TURBOPACK__default__export__ = internalHandler;
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_HEADER",
    ()=>ACTION_HEADER,
    "FLIGHT_HEADERS",
    ()=>FLIGHT_HEADERS,
    "NEXT_ACTION_NOT_FOUND_HEADER",
    ()=>NEXT_ACTION_NOT_FOUND_HEADER,
    "NEXT_ACTION_REVALIDATED_HEADER",
    ()=>NEXT_ACTION_REVALIDATED_HEADER,
    "NEXT_DID_POSTPONE_HEADER",
    ()=>NEXT_DID_POSTPONE_HEADER,
    "NEXT_HMR_REFRESH_HEADER",
    ()=>NEXT_HMR_REFRESH_HEADER,
    "NEXT_HTML_REQUEST_ID_HEADER",
    ()=>NEXT_HTML_REQUEST_ID_HEADER,
    "NEXT_INSTANT_TEST_COOKIE",
    ()=>NEXT_INSTANT_TEST_COOKIE,
    "NEXT_IS_PRERENDER_HEADER",
    ()=>NEXT_IS_PRERENDER_HEADER,
    "NEXT_REQUEST_ID_HEADER",
    ()=>NEXT_REQUEST_ID_HEADER,
    "NEXT_REWRITTEN_PATH_HEADER",
    ()=>NEXT_REWRITTEN_PATH_HEADER,
    "NEXT_REWRITTEN_QUERY_HEADER",
    ()=>NEXT_REWRITTEN_QUERY_HEADER,
    "NEXT_ROUTER_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_PREFETCH_HEADER,
    "NEXT_ROUTER_SEGMENT_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_SEGMENT_PREFETCH_HEADER,
    "NEXT_ROUTER_STALE_TIME_HEADER",
    ()=>NEXT_ROUTER_STALE_TIME_HEADER,
    "NEXT_ROUTER_STATE_TREE_HEADER",
    ()=>NEXT_ROUTER_STATE_TREE_HEADER,
    "NEXT_RSC_UNION_QUERY",
    ()=>NEXT_RSC_UNION_QUERY,
    "NEXT_URL",
    ()=>NEXT_URL,
    "RSC_CONTENT_TYPE_HEADER",
    ()=>RSC_CONTENT_TYPE_HEADER,
    "RSC_HEADER",
    ()=>RSC_HEADER
]);
const RSC_HEADER = 'rsc';
const ACTION_HEADER = 'next-action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'next-router-state-tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'next-router-prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'next-router-segment-prefetch';
const NEXT_HMR_REFRESH_HEADER = 'next-hmr-refresh';
const NEXT_URL = 'next-url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const NEXT_INSTANT_TEST_COOKIE = 'next-instant-navigation-testing';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
const NEXT_REQUEST_ID_HEADER = 'x-nextjs-request-id';
const NEXT_HTML_REQUEST_ID_HEADER = 'x-nextjs-html-request-id';
const NEXT_ACTION_REVALIDATED_HEADER = 'x-action-revalidated';
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTTPAccessErrorStatus",
    ()=>HTTPAccessErrorStatus,
    "HTTP_ERROR_FALLBACK_ERROR_CODE",
    ()=>HTTP_ERROR_FALLBACK_ERROR_CODE,
    "getAccessFallbackErrorTypeByStatus",
    ()=>getAccessFallbackErrorTypeByStatus,
    "getAccessFallbackHTTPStatus",
    ()=>getAccessFallbackHTTPStatus,
    "isHTTPAccessFallbackError",
    ()=>isHTTPAccessFallbackError
]);
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/is-next-router-error.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNextRouterError",
    ()=>isNextRouterError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/http-access-fallback/http-access-fallback.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/redirect-error.js [middleware] (ecmascript)");
;
;
function isNextRouterError(error) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isRedirectError"])(error) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$http$2d$access$2d$fallback$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isHTTPAccessFallbackError"])(error);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/redirect-error.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REDIRECT_ERROR_CODE",
    ()=>REDIRECT_ERROR_CODE,
    "isRedirectError",
    ()=>isRedirectError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/redirect-status-code.js [middleware] (ecmascript)");
;
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RedirectStatusCode"];
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/redirect-status-code.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RedirectStatusCode",
    ()=>RedirectStatusCode
]);
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/batcher.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Batcher",
    ()=>Batcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/detached-promise.js [middleware] (ecmascript)");
;
class Batcher {
    constructor(cacheKeyFn, /**
     * A function that will be called to schedule the wrapped function to be
     * executed. This defaults to a function that will execute the function
     * immediately.
     */ schedulerFn = (fn)=>fn()){
        this.cacheKeyFn = cacheKeyFn;
        this.schedulerFn = schedulerFn;
        this.pending = new Map();
    }
    static create(options) {
        return new Batcher(options == null ? void 0 : options.cacheKeyFn, options == null ? void 0 : options.schedulerFn);
    }
    /**
   * Wraps a function in a promise that will be resolved or rejected only once
   * for a given key. This will allow multiple calls to the function to be
   * made, but only one will be executed at a time. The result of the first
   * call will be returned to all callers.
   *
   * @param key the key to use for the cache
   * @param fn the function to wrap
   * @returns a promise that resolves to the result of the function
   */ async batch(key, fn) {
        const cacheKey = this.cacheKeyFn ? await this.cacheKeyFn(key) : key;
        if (cacheKey === null) {
            return fn({
                resolve: (value)=>Promise.resolve(value),
                key
            });
        }
        const pending = this.pending.get(cacheKey);
        if (pending) return pending;
        const { promise, resolve, reject } = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        this.pending.set(cacheKey, promise);
        this.schedulerFn(async ()=>{
            try {
                const result = await fn({
                    resolve,
                    key
                });
                // Resolving a promise multiple times is a no-op, so we can safely
                // resolve all pending promises with the same result.
                resolve(result);
            } catch (err) {
                reject(err);
            } finally{
                this.pending.delete(cacheKey);
            }
        });
        return promise;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_SUFFIX",
    ()=>ACTION_SUFFIX,
    "APP_DIR_ALIAS",
    ()=>APP_DIR_ALIAS,
    "CACHE_ONE_YEAR_SECONDS",
    ()=>CACHE_ONE_YEAR_SECONDS,
    "DOT_NEXT_ALIAS",
    ()=>DOT_NEXT_ALIAS,
    "ESLINT_DEFAULT_DIRS",
    ()=>ESLINT_DEFAULT_DIRS,
    "GSP_NO_RETURNED_VALUE",
    ()=>GSP_NO_RETURNED_VALUE,
    "GSSP_COMPONENT_MEMBER_ERROR",
    ()=>GSSP_COMPONENT_MEMBER_ERROR,
    "GSSP_NO_RETURNED_VALUE",
    ()=>GSSP_NO_RETURNED_VALUE,
    "HTML_CONTENT_TYPE_HEADER",
    ()=>HTML_CONTENT_TYPE_HEADER,
    "INFINITE_CACHE",
    ()=>INFINITE_CACHE,
    "INSTRUMENTATION_HOOK_FILENAME",
    ()=>INSTRUMENTATION_HOOK_FILENAME,
    "JSON_CONTENT_TYPE_HEADER",
    ()=>JSON_CONTENT_TYPE_HEADER,
    "MATCHED_PATH_HEADER",
    ()=>MATCHED_PATH_HEADER,
    "MIDDLEWARE_FILENAME",
    ()=>MIDDLEWARE_FILENAME,
    "MIDDLEWARE_LOCATION_REGEXP",
    ()=>MIDDLEWARE_LOCATION_REGEXP,
    "NEXT_BODY_SUFFIX",
    ()=>NEXT_BODY_SUFFIX,
    "NEXT_CACHE_IMPLICIT_TAG_ID",
    ()=>NEXT_CACHE_IMPLICIT_TAG_ID,
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER",
    ()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER,
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER",
    ()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER,
    "NEXT_CACHE_ROOT_PARAM_TAG_ID",
    ()=>NEXT_CACHE_ROOT_PARAM_TAG_ID,
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH",
    ()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH,
    "NEXT_CACHE_TAGS_HEADER",
    ()=>NEXT_CACHE_TAGS_HEADER,
    "NEXT_CACHE_TAG_MAX_ITEMS",
    ()=>NEXT_CACHE_TAG_MAX_ITEMS,
    "NEXT_CACHE_TAG_MAX_LENGTH",
    ()=>NEXT_CACHE_TAG_MAX_LENGTH,
    "NEXT_DATA_SUFFIX",
    ()=>NEXT_DATA_SUFFIX,
    "NEXT_INTERCEPTION_MARKER_PREFIX",
    ()=>NEXT_INTERCEPTION_MARKER_PREFIX,
    "NEXT_META_SUFFIX",
    ()=>NEXT_META_SUFFIX,
    "NEXT_NAV_DEPLOYMENT_ID_HEADER",
    ()=>NEXT_NAV_DEPLOYMENT_ID_HEADER,
    "NEXT_QUERY_PARAM_PREFIX",
    ()=>NEXT_QUERY_PARAM_PREFIX,
    "NEXT_RESUME_HEADER",
    ()=>NEXT_RESUME_HEADER,
    "NEXT_RESUME_STATE_LENGTH_HEADER",
    ()=>NEXT_RESUME_STATE_LENGTH_HEADER,
    "NON_STANDARD_NODE_ENV",
    ()=>NON_STANDARD_NODE_ENV,
    "PAGES_DIR_ALIAS",
    ()=>PAGES_DIR_ALIAS,
    "PRERENDER_REVALIDATE_HEADER",
    ()=>PRERENDER_REVALIDATE_HEADER,
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER",
    ()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER,
    "PROXY_FILENAME",
    ()=>PROXY_FILENAME,
    "PROXY_LOCATION_REGEXP",
    ()=>PROXY_LOCATION_REGEXP,
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT",
    ()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT,
    "ROOT_DIR_ALIAS",
    ()=>ROOT_DIR_ALIAS,
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS",
    ()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS,
    "RSC_ACTION_ENCRYPTION_ALIAS",
    ()=>RSC_ACTION_ENCRYPTION_ALIAS,
    "RSC_ACTION_PROXY_ALIAS",
    ()=>RSC_ACTION_PROXY_ALIAS,
    "RSC_ACTION_VALIDATE_ALIAS",
    ()=>RSC_ACTION_VALIDATE_ALIAS,
    "RSC_CACHE_WRAPPER_ALIAS",
    ()=>RSC_CACHE_WRAPPER_ALIAS,
    "RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS",
    ()=>RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS,
    "RSC_MOD_REF_PROXY_ALIAS",
    ()=>RSC_MOD_REF_PROXY_ALIAS,
    "RSC_SEGMENTS_DIR_SUFFIX",
    ()=>RSC_SEGMENTS_DIR_SUFFIX,
    "RSC_SEGMENT_SUFFIX",
    ()=>RSC_SEGMENT_SUFFIX,
    "RSC_SUFFIX",
    ()=>RSC_SUFFIX,
    "SERVER_PROPS_EXPORT_ERROR",
    ()=>SERVER_PROPS_EXPORT_ERROR,
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT",
    ()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT,
    "SERVER_PROPS_SSG_CONFLICT",
    ()=>SERVER_PROPS_SSG_CONFLICT,
    "SERVER_RUNTIME",
    ()=>SERVER_RUNTIME,
    "SSG_FALLBACK_EXPORT_ERROR",
    ()=>SSG_FALLBACK_EXPORT_ERROR,
    "SSG_GET_INITIAL_PROPS_CONFLICT",
    ()=>SSG_GET_INITIAL_PROPS_CONFLICT,
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR",
    ()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR,
    "TEXT_PLAIN_CONTENT_TYPE_HEADER",
    ()=>TEXT_PLAIN_CONTENT_TYPE_HEADER,
    "UNSTABLE_REVALIDATE_RENAME_ERROR",
    ()=>UNSTABLE_REVALIDATE_RENAME_ERROR,
    "WEBPACK_LAYERS",
    ()=>WEBPACK_LAYERS,
    "WEBPACK_RESOURCE_QUERIES",
    ()=>WEBPACK_RESOURCE_QUERIES,
    "WEB_SOCKET_MAX_RECONNECTIONS",
    ()=>WEB_SOCKET_MAX_RECONNECTIONS
]);
const TEXT_PLAIN_CONTENT_TYPE_HEADER = 'text/plain';
const HTML_CONTENT_TYPE_HEADER = 'text/html; charset=utf-8';
const JSON_CONTENT_TYPE_HEADER = 'application/json; charset=utf-8';
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_NAV_DEPLOYMENT_ID_HEADER = 'x-nextjs-deployment-id';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_RESUME_STATE_LENGTH_HEADER = 'x-next-resume-state-length';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const NEXT_CACHE_ROOT_PARAM_TAG_ID = '_N_RP_';
const CACHE_ONE_YEAR_SECONDS = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const PROXY_FILENAME = 'proxy';
const PROXY_LOCATION_REGEXP = `(?:src/)?${PROXY_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
const WEB_SOCKET_MAX_RECONNECTIONS = 12;
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The Node.js bundle layer for the API routes.
   */ apiNode: 'api-node',
    /**
   * The Edge Lite bundle layer for the API routes.
   */ apiEdge: 'api-edge',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.apiNode,
            WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
;
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/detached-promise.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A `Promise.withResolvers` implementation that exposes the `resolve` and
 * `reject` functions on a `Promise`.
 *
 * @see https://tc39.es/proposal-promise-with-resolvers/
 */ __turbopack_context__.s([
    "DetachedPromise",
    ()=>DetachedPromise
]);
class DetachedPromise {
    constructor(){
        let resolve;
        let reject;
        // Create the promise and assign the resolvers to the object.
        this.promise = new Promise((res, rej)=>{
            resolve = res;
            reject = rej;
        });
        // We know that resolvers is defined because the Promise constructor runs
        // synchronously.
        this.resolve = resolve;
        this.reject = reject;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/multi-file-writer.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiFileWriter",
    ()=>MultiFileWriter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$isomorphic$2f$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/isomorphic/path.js [middleware] (ecmascript)");
;
class MultiFileWriter {
    constructor(/**
     * The file system methods to use.
     */ fs){
        this.fs = fs;
        this.tasks = [];
    }
    /**
   * Finds or creates a task for a directory.
   *
   * @param directory - The directory to find or create a task for.
   * @returns The task for the directory.
   */ findOrCreateTask(directory) {
        // See if this directory already has a task to create it.
        for (const task of this.tasks){
            if (task[0] === directory) {
                return task;
            }
        }
        const promise = this.fs.mkdir(directory);
        // Attach a catch handler so that it doesn't throw an unhandled promise
        // rejection warning.
        promise.catch(()=>{});
        // Otherwise, create a new task for this directory.
        const task = [
            directory,
            promise,
            []
        ];
        this.tasks.push(task);
        return task;
    }
    /**
   * Appends a file to the writer to be written after its containing directory
   * is created. The file writer should be awaited after all the files have been
   * appended. Any async operation that occurs between appending and awaiting
   * may cause an unhandled promise rejection warning and potentially crash the
   * process.
   *
   * @param filePath - The path to the file to write.
   * @param data - The data to write to the file.
   */ append(filePath, data) {
        // Find or create a task for the directory that contains the file.
        const task = this.findOrCreateTask(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$isomorphic$2f$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].dirname(filePath));
        const promise = task[1].then(()=>this.fs.writeFile(filePath, data));
        // Attach a catch handler so that it doesn't throw an unhandled promise
        // rejection warning.
        promise.catch(()=>{});
        // Add the file write to the task AFTER the directory promise has resolved.
        task[2].push(promise);
    }
    /**
   * Returns a promise that resolves when all the files have been written.
   */ wait() {
        return Promise.all(this.tasks.flatMap((task)=>task[2]));
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/picocolors.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bgBlack",
    ()=>bgBlack,
    "bgBlue",
    ()=>bgBlue,
    "bgCyan",
    ()=>bgCyan,
    "bgGreen",
    ()=>bgGreen,
    "bgMagenta",
    ()=>bgMagenta,
    "bgRed",
    ()=>bgRed,
    "bgWhite",
    ()=>bgWhite,
    "bgYellow",
    ()=>bgYellow,
    "black",
    ()=>black,
    "blue",
    ()=>blue,
    "bold",
    ()=>bold,
    "cyan",
    ()=>cyan,
    "dim",
    ()=>dim,
    "gray",
    ()=>gray,
    "green",
    ()=>green,
    "hidden",
    ()=>hidden,
    "inverse",
    ()=>inverse,
    "italic",
    ()=>italic,
    "magenta",
    ()=>magenta,
    "purple",
    ()=>purple,
    "red",
    ()=>red,
    "reset",
    ()=>reset,
    "strikethrough",
    ()=>strikethrough,
    "underline",
    ()=>underline,
    "white",
    ()=>white,
    "yellow",
    ()=>yellow
]);
// ISC License
// Copyright (c) 2021 Alexey Raspopov, Kostiantyn Denysov, Anton Verinov
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
//
// https://github.com/alexeyraspopov/picocolors/blob/b6261487e7b81aaab2440e397a356732cad9e342/picocolors.js#L1
var _globalThis;
const { env, stdout } = ((_globalThis = globalThis) == null ? void 0 : _globalThis.process) ?? {};
const enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (stdout == null ? void 0 : stdout.isTTY) && !env.CI && env.TERM !== 'dumb');
const replaceClose = (str, close, replace, index)=>{
    const start = str.substring(0, index) + replace;
    const end = str.substring(index + close.length);
    const nextIndex = end.indexOf(close);
    return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
const formatter = (open, close, replace = open)=>{
    if (!enabled) return String;
    return (input)=>{
        const string = '' + input;
        const index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
};
const reset = enabled ? (s)=>`\x1b[0m${s}\x1b[0m` : String;
const bold = formatter('\x1b[1m', '\x1b[22m', '\x1b[22m\x1b[1m');
const dim = formatter('\x1b[2m', '\x1b[22m', '\x1b[22m\x1b[2m');
const italic = formatter('\x1b[3m', '\x1b[23m');
const underline = formatter('\x1b[4m', '\x1b[24m');
const inverse = formatter('\x1b[7m', '\x1b[27m');
const hidden = formatter('\x1b[8m', '\x1b[28m');
const strikethrough = formatter('\x1b[9m', '\x1b[29m');
const black = formatter('\x1b[30m', '\x1b[39m');
const red = formatter('\x1b[31m', '\x1b[39m');
const green = formatter('\x1b[32m', '\x1b[39m');
const yellow = formatter('\x1b[33m', '\x1b[39m');
const blue = formatter('\x1b[34m', '\x1b[39m');
const magenta = formatter('\x1b[35m', '\x1b[39m');
const purple = formatter('\x1b[38;2;173;127;168m', '\x1b[39m');
const cyan = formatter('\x1b[36m', '\x1b[39m');
const white = formatter('\x1b[37m', '\x1b[39m');
const gray = formatter('\x1b[90m', '\x1b[39m');
const bgBlack = formatter('\x1b[40m', '\x1b[49m');
const bgRed = formatter('\x1b[41m', '\x1b[49m');
const bgGreen = formatter('\x1b[42m', '\x1b[49m');
const bgYellow = formatter('\x1b[43m', '\x1b[49m');
const bgBlue = formatter('\x1b[44m', '\x1b[49m');
const bgMagenta = formatter('\x1b[45m', '\x1b[49m');
const bgCyan = formatter('\x1b[46m', '\x1b[49m');
const bgWhite = formatter('\x1b[47m', '\x1b[49m');
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Route pattern normalization utilities for path-to-regexp compatibility.
 *
 * path-to-regexp 6.3.0+ introduced stricter validation that rejects certain
 * patterns commonly used in Next.js interception routes. This module provides
 * normalization functions to make Next.js route patterns compatible with the
 * updated library while preserving all functionality.
 */ /**
 * Internal separator used to normalize adjacent parameter patterns.
 * This unique marker is inserted between adjacent parameters and stripped out
 * during parameter extraction to avoid conflicts with real URL content.
 */ __turbopack_context__.s([
    "PARAM_SEPARATOR",
    ()=>PARAM_SEPARATOR,
    "hasAdjacentParameterIssues",
    ()=>hasAdjacentParameterIssues,
    "normalizeAdjacentParameters",
    ()=>normalizeAdjacentParameters,
    "normalizeTokensForRegexp",
    ()=>normalizeTokensForRegexp,
    "stripNormalizedSeparators",
    ()=>stripNormalizedSeparators,
    "stripParameterSeparators",
    ()=>stripParameterSeparators
]);
const PARAM_SEPARATOR = '_NEXTSEP_';
function hasAdjacentParameterIssues(route) {
    if (typeof route !== 'string') return false;
    // Check for interception route markers followed immediately by parameters
    // Pattern: /(.):param, /(..):param, /(...):param, /(.)(.):param etc.
    // These patterns cause "Must have text between two parameters" errors
    if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
    }
    // Check for basic adjacent parameters without separators
    // Pattern: :param1:param2 (but not :param* or other URL patterns)
    if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
    }
    return false;
}
function normalizeAdjacentParameters(route) {
    let normalized = route;
    // Handle interception route patterns: (.):param -> (.)_NEXTSEP_:param
    normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
    // Handle other adjacent parameter patterns: :param1:param2 -> :param1_NEXTSEP_:param2
    normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
    return normalized;
}
function normalizeTokensForRegexp(tokens) {
    return tokens.map((token)=>{
        // Token union type: Token = string | TokenObject
        // Literal path segments are strings, parameters/wildcards are objects
        if (typeof token === 'object' && token !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        'modifier' in token && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token.modifier === '*' || token.modifier === '+') && // Token objects can have different shapes depending on route pattern
        'prefix' in token && 'suffix' in token && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token.prefix === '' && token.suffix === '') {
            // Add minimal prefix to satisfy path-to-regexp validation
            // We use '/' as it's the most common path delimiter and won't break route matching
            // The prefix gets used in regex generation but doesn't affect parameter extraction
            return {
                ...token,
                prefix: '/'
            };
        }
        return token;
    });
}
function stripNormalizedSeparators(pathname) {
    // Remove separator after interception route markers
    // Pattern: (.)_NEXTSEP_ -> (.), (..)_NEXTSEP_ -> (..), etc.
    // The separator appears after the closing paren of interception markers
    return pathname.replace(new RegExp(`\\)${PARAM_SEPARATOR}`, 'g'), ')');
}
function stripParameterSeparators(params) {
    const cleaned = {};
    for (const [key, value] of Object.entries(params)){
        if (typeof value === 'string') {
            // Remove the separator if it appears at the start of parameter values
            cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), '');
        } else if (Array.isArray(value)) {
            // Handle array parameters (from repeated route segments)
            cleaned[key] = value.map((item)=>typeof item === 'string' ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), '') : item);
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/scheduler.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Schedules a function to be called on the next tick after the other promises
 * have been resolved.
 *
 * @param cb the function to schedule
 */ __turbopack_context__.s([
    "atLeastOneTask",
    ()=>atLeastOneTask,
    "scheduleImmediate",
    ()=>scheduleImmediate,
    "scheduleOnNextTick",
    ()=>scheduleOnNextTick,
    "waitAtLeastOneReactRenderTask",
    ()=>waitAtLeastOneReactRenderTask
]);
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/url.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isFullStringUrl",
    ()=>isFullStringUrl,
    "parseReqUrl",
    ()=>parseReqUrl,
    "parseUrl",
    ()=>parseUrl,
    "stripNextRscUnionQuery",
    ()=>stripNextRscUnionQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
;
const DUMMY_ORIGIN = 'http://n';
function isFullStringUrl(url) {
    return /https?:\/\//.test(url);
}
function parseUrl(url) {
    let parsed = undefined;
    try {
        parsed = new URL(url, DUMMY_ORIGIN);
    } catch  {}
    return parsed;
}
function parseReqUrl(url) {
    const parsedUrl = parseUrl(url);
    if (!parsedUrl) {
        return;
    }
    const query = {};
    for (const key of parsedUrl.searchParams.keys()){
        const values = parsedUrl.searchParams.getAll(key);
        query[key] = values.length > 1 ? values : values[0];
    }
    const legacyUrl = {
        query,
        hash: parsedUrl.hash,
        search: parsedUrl.search,
        path: parsedUrl.pathname,
        pathname: parsedUrl.pathname,
        href: `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`,
        host: '',
        hostname: '',
        auth: '',
        protocol: '',
        slashes: null,
        port: ''
    };
    return legacyUrl;
}
function stripNextRscUnionQuery(relativeUrl) {
    const urlInstance = new URL(relativeUrl, DUMMY_ORIGIN);
    urlInstance.searchParams.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]);
    return urlInstance.pathname + urlInstance.search;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/after/after-context.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AfterContext",
    ()=>AfterContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$p$2d$queue$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/p-queue/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/is-thenable.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$revalidation$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/revalidation-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/scheduler.js [middleware] (ecmascript)");
;
;
;
;
;
;
;
;
class AfterContext {
    constructor({ waitUntil, onClose, onTaskError }){
        this.isRequestClosed = false;
        this.initialOnCloseError = null;
        this.workUnitStores = new Set();
        this.waitUntil = waitUntil;
        this.onClose = onClose;
        this.onTaskError = onTaskError;
        this.callbackQueue = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$p$2d$queue$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"]();
        this.callbackQueue.pause();
        try {
            onClose(()=>{
                this.isRequestClosed = true;
                // TODO(after): it's not ideal that we'll only switch the `phase` of a WorkUnitStore
                // if `after()` was called inside it. We should probably track this whenever a store is created
                for (const workUnitStore of this.workUnitStores){
                    workUnitStore.phase = 'after';
                }
            });
        } catch (err) {
            // If onClose is broken, report errors lazily, when after() is called.
            this.initialOnCloseError = {
                error: err
            };
        }
    }
    after(task, workUnitStore) {
        if (this.initialOnCloseError) {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"](`An onClose call failed, which means after() can't work correctly.`, {
                cause: this.initialOnCloseError.error
            }), "__NEXT_ERROR_CODE", {
                value: "E1376",
                enumerable: false,
                configurable: true
            });
        }
        // Save the workUnitStore so we can switch its phase later.
        this.workUnitStores.add(workUnitStore);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isThenable"])(task)) {
            this.addThenable(task);
        } else if (typeof task === 'function') {
            // TODO(after): implement tracing
            this.addCallback(task, workUnitStore);
        } else {
            throw Object.defineProperty(new Error('`after()`: Argument must be a promise or a function'), "__NEXT_ERROR_CODE", {
                value: "E50",
                enumerable: false,
                configurable: true
            });
        }
    }
    addThenable(thenable) {
        if (!this.waitUntil) {
            errorWaitUntilNotAvailable();
        }
        this.waitUntil(new Promise((resolve)=>{
            thenable.then(()=>{
                resolve();
            }, (error)=>{
                resolve();
                this.reportTaskError('promise', error);
            });
        }));
    }
    addCallback(callback, workUnitStore) {
        // if something is wrong, throw synchronously, bubbling up to the `after` callsite.
        if (!this.waitUntil) {
            errorWaitUntilNotAvailable();
        }
        const afterTaskStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["afterTaskAsyncStorage"].getStore();
        // This is used for checking if request APIs can be called inside `after`.
        // Note that we need to check the phase in which the *topmost* `after` was called (which should be "action"),
        // not the current phase (which might be "after" if we're in a nested after).
        // Otherwise, we might allow `after(() => headers())`, but not `after(() => after(() => headers()))`.
        const rootTaskSpawnPhase = afterTaskStore ? afterTaskStore.rootTaskSpawnPhase // nested after
         : workUnitStore.phase // topmost after
        ;
        // this should only happen once.
        if (!this.runCallbacksOnClosePromise) {
            this.runCallbacksOnClosePromise = this.runCallbacksOnClose();
            this.waitUntil(this.runCallbacksOnClosePromise);
        }
        // Bind the callback to the current execution context (i.e. preserve all currently available ALS-es).
        // We do this because we want all of these to be equivalent in every regard except timing:
        //   after(() => x())
        //   after(x())
        //   await x()
        const wrappedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["bindSnapshot"])(// See: https://github.com/facebook/react/pull/34911
        async ()=>{
            try {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$after$2d$task$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["afterTaskAsyncStorage"].run({
                    rootTaskSpawnPhase
                }, ()=>callback());
            } catch (error) {
                this.reportTaskError('function', error);
            }
        });
        this.callbackQueue.add(wrappedCallback);
    }
    async runCallbacksOnClose() {
        if (!this.isRequestClosed) {
            await new Promise((resolve)=>this.onClose(resolve));
        } else {
            // The request is already closed.
            // Avoid running the callbacks too quickly to prevent userspace from
            // e.g. relying on `after` being microtasky somewhere.
            await new Promise((resolve)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["scheduleImmediate"])(resolve));
        }
        return this.runCallbacks();
    }
    async runCallbacks() {
        if (this.callbackQueue.size === 0) return;
        const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
        if (!workStore) {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('Missing workStore in AfterContext.runCallbacks'), "__NEXT_ERROR_CODE", {
                value: "E547",
                enumerable: false,
                configurable: true
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$revalidation$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["withExecuteRevalidates"])(workStore, ()=>{
            this.callbackQueue.start();
            return this.callbackQueue.onIdle();
        });
    }
    reportTaskError(taskKind, error) {
        // TODO(after): this is fine for now, but will need better intergration with our error reporting.
        // TODO(after): should we log this if we have a onTaskError callback?
        console.error(taskKind === 'promise' ? `A promise passed to \`after()\` rejected:` : `An error occurred in a function passed to \`after()\`:`, error);
        if (this.onTaskError) {
            // this is very defensive, but we really don't want anything to blow up in an error handler
            try {
                this.onTaskError == null ? void 0 : this.onTaskError.call(this, error);
            } catch (handlerError) {
                console.error(Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('`onTaskError` threw while handling an error thrown from an `after` task', {
                    cause: handlerError
                }), "__NEXT_ERROR_CODE", {
                    value: "E569",
                    enumerable: false,
                    configurable: true
                }));
            }
        }
    }
}
function errorWaitUntilNotAvailable() {
    throw Object.defineProperty(new Error('`after()` will not work correctly, because `waitUntil` is not available in the current environment.'), "__NEXT_ERROR_CODE", {
        value: "E91",
        enumerable: false,
        configurable: true
    });
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/after/builtin-request-context.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLocalRequestContext",
    ()=>createLocalRequestContext,
    "getBuiltinRequestContext",
    ()=>getBuiltinRequestContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
;
function getBuiltinRequestContext() {
    const _globalThis = globalThis;
    const ctx = _globalThis[NEXT_REQUEST_CONTEXT_SYMBOL];
    return ctx == null ? void 0 : ctx.get();
}
const NEXT_REQUEST_CONTEXT_SYMBOL = Symbol.for('@next/request-context');
function createLocalRequestContext() {
    const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAsyncLocalStorage"])();
    return {
        get: ()=>storage.getStore(),
        run: (value, callback)=>storage.run(value, callback)
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ __turbopack_context__.s([
    "getCookieParser",
    ()=>getCookieParser
]);
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/cookie/index.js [middleware] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/api-utils/index.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS",
    ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA",
    ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT",
    ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES",
    ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA",
    ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate",
    ()=>checkIsOnDemandRevalidate,
    "clearPreviewData",
    ()=>clearPreviewData,
    "redirect",
    ()=>redirect,
    "sendError",
    ()=>sendError,
    "sendStatusCode",
    ()=>sendStatusCode,
    "setLazyProp",
    ()=>setLazyProp,
    "wrapApiHandler",
    ()=>wrapApiHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw Object.defineProperty(new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`), "__NEXT_ERROR_CODE", {
            value: "E389",
            enumerable: false,
            configurable: true
        });
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(rawHeaders, previewProps) {
    // Headers is a plain object for Node.js, Headers object in Edge runtime
    if (typeof rawHeaders.get === 'function') {
        const headers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(rawHeaders);
        const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
        const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
        const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
        return {
            isOnDemandRevalidate,
            revalidateOnlyGenerated
        };
    }
    const headers = rawHeaders;
    const previewModeId = headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]];
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.hasOwnProperty(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/cookie/index.js [middleware] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bindSnapshot",
    ()=>bindSnapshot,
    "createAsyncLocalStorage",
    ()=>createAsyncLocalStorage,
    "createSnapshot",
    ()=>createSnapshot
]);
const sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: false,
    configurable: true
});
class FakeAsyncLocalStorage {
    disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    getStore() {
        // This fake implementation of AsyncLocalStorage always returns `undefined`.
        return undefined;
    }
    run() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
    }
    static bind(fn) {
        return fn;
    }
}
const maybeGlobalAsyncLocalStorage = typeof globalThis !== 'undefined' && globalThis.AsyncLocalStorage;
function createAsyncLocalStorage() {
    if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
    }
    return new FakeAsyncLocalStorage();
}
function bindSnapshot(fn) {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
    }
    return FakeAsyncLocalStorage.bind(fn);
}
function createSnapshot() {
    if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
    }
    return function(fn, ...args) {
        return fn(...args);
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DraftModeProvider",
    ()=>DraftModeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/api-utils/index.js [middleware] (ecmascript)");
;
class DraftModeProvider {
    constructor(previewProps, headers, cookies, mutableCookies){
        var _cookies_get;
        // The logic for draftMode() is very similar to tryGetPreviewData()
        // but Draft Mode does not have any data associated with it.
        const isOnDemandRevalidate = previewProps && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["checkIsOnDemandRevalidate"])(headers, previewProps).isOnDemandRevalidate;
        const cookieValue = (_cookies_get = cookies.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"])) == null ? void 0 : _cookies_get.value;
        this._isEnabled = Boolean(!isOnDemandRevalidate && cookieValue && previewProps && (cookieValue === previewProps.previewModeId || // In dev mode, the cookie can be actual hash value preview id but the preview props can still be `development-id`.
        ("TURBOPACK compile-time value", "development") !== 'production' && previewProps.previewModeId === 'development-id'));
        this._previewModeId = previewProps == null ? void 0 : previewProps.previewModeId;
        this._mutableCookies = mutableCookies;
    }
    get isEnabled() {
        return this._isEnabled;
    }
    enable() {
        if (!this._previewModeId) {
            throw Object.defineProperty(new Error('Invariant: previewProps missing previewModeId this should never happen'), "__NEXT_ERROR_CODE", {
                value: "E93",
                enumerable: false,
                configurable: true
            });
        }
        this._mutableCookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"],
            value: this._previewModeId,
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/'
        });
        this._isEnabled = true;
    }
    disable() {
        // To delete a cookie, set `expires` to a date in the past:
        // https://tools.ietf.org/html/rfc6265#section-4.1.1
        // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
        this._mutableCookies.set({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["COOKIE_NAME_PRERENDER_BYPASS"],
            value: '',
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            expires: new Date(0)
        });
        this._isEnabled = false;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/async-storage/request-store.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createRequestStore",
    ()=>createRequestStore,
    "createRequestStoreForAPI",
    ()=>createRequestStoreForAPI,
    "createRequestStoreForRender",
    ()=>createRequestStoreForRender,
    "synchronizeMutableCookies",
    ()=>synchronizeMutableCookies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$draft$2d$mode$2d$provider$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/async-storage/draft-mode-provider.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
;
;
;
;
;
;
/**
 * Internal request headers that userland `headers()` must not expose. They stay
 * on the shared request headers for framework plumbing.
 *
 * Every internal header that the client can send must be listed here. The
 * sealed userland view reads through to the shared request headers, so an
 * omission leaks the header to userland.
 *
 * The names are lowercased because `HeadersAdapter.seal` matches them in
 * lowercase.
 */ const HIDDEN_REQUEST_HEADERS = new Set([
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"],
    // The client sends these dev-only request IDs so the server can route debug
    // information back to the originating request. Like the flight headers,
    // they are internal plumbing.
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_REQUEST_ID_HEADER"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_HTML_REQUEST_ID_HEADER"]
].map((header)=>header.toLowerCase()));
function getHeaders(headers) {
    // The sealed userland view must not copy the request headers.
    // `HeadersAdapter.from` returns a `Headers` instance unchanged, so the view
    // reads through to `NextRequest.headers`. A copy detaches `headers()` from
    // the writes that Proxy makes to `NextRequest.headers` afterwards.
    //
    // The view must also not delete the internal headers. Because
    // `HeadersAdapter.from` does not copy, a delete removes them from the shared
    // `req.headers`. The dev server reads the request-id headers from the raw
    // request again, for example when it renders a redirect target after a server
    // action. Their removal breaks the dev debug channel routing.
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].seal(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers), HIDDEN_REQUEST_HEADERS);
}
function getMutableCookies(headers, onUpdateCookies) {
    const cookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MutableRequestCookiesAdapter"].wrap(cookies, onUpdateCookies);
}
/**
 * If middleware set cookies in this request (indicated by `x-middleware-set-cookie`),
 * then merge those into the existing cookie object, so that when `cookies()` is accessed
 * it's able to read the newly set cookies.
 */ function mergeMiddlewareCookies(headers, existingCookies) {
    // TODO: this only fires for `IncomingHttpHeaders`; `Headers` instances
    // silently fall through (the `in` check and bracket access don't reach header
    // values stored in internal slots). Confirm whether edge / Web `Headers`
    // callers need this merge or already handle it elsewhere.
    if ('x-middleware-set-cookie' in headers && typeof headers['x-middleware-set-cookie'] === 'string') {
        const setCookieValue = headers['x-middleware-set-cookie'];
        const responseHeaders = new Headers();
        for (const cookie of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["splitCookiesString"])(setCookieValue)){
            responseHeaders.append('set-cookie', cookie);
        }
        const responseCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](responseHeaders);
        // Transfer cookies from ResponseCookies to RequestCookies
        for (const cookie of responseCookies.getAll()){
            existingCookies.set(cookie);
        }
    }
}
function createRequestStoreForRender(req, res, url, rootParams, implicitTags, onUpdateCookies, previewProps, isHmrRefresh, serverComponentsHmrCache, resumeDataCache, fallbackParams, hmrRefreshHash) {
    return createRequestStore({
        // Pages start in render phase by default
        phase: 'render',
        headers: req.headers,
        onUpdateCookies: onUpdateCookies ?? (res ? (cookies)=>{
            res.setHeader('Set-Cookie', cookies);
        } : undefined),
        url,
        rootParams,
        implicitTags,
        resumeDataCache,
        previewProps,
        isHmrRefresh,
        serverComponentsHmrCache,
        hmrRefreshHash,
        fallbackParams
    });
}
function createRequestStoreForAPI(req, url, implicitTags, onUpdateCookies, previewProps, hmrRefreshHash) {
    return createRequestStore({
        // API routes start in action phase by default
        phase: 'action',
        headers: req.headers,
        onUpdateCookies,
        url,
        rootParams: {},
        implicitTags,
        resumeDataCache: null,
        previewProps,
        isHmrRefresh: false,
        serverComponentsHmrCache: undefined,
        hmrRefreshHash,
        fallbackParams: null
    });
}
function createRequestStore(inputs) {
    const { phase, headers, onUpdateCookies, url, rootParams, implicitTags, resumeDataCache, previewProps, isHmrRefresh, serverComponentsHmrCache, hmrRefreshHash, fallbackParams } = inputs;
    const cache = {};
    return {
        type: 'request',
        phase,
        implicitTags,
        // Rather than just using the whole `url` here, we pull the parts we want
        // to ensure we don't use parts of the URL that we shouldn't. This also
        // lets us avoid requiring an empty string for `search` in the type.
        url: {
            pathname: url.pathname,
            search: url.search ?? ''
        },
        rootParams,
        get headers () {
            if (!cache.headers) {
                // Seal the headers object that'll freeze out any methods that could
                // mutate the underlying data.
                cache.headers = getHeaders(headers);
            }
            return cache.headers;
        },
        get cookies () {
            if (!cache.cookies) {
                // if middleware is setting cookie(s), then include those in
                // the initial cached cookies so they can be read in render
                const requestCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(headers));
                mergeMiddlewareCookies(headers, requestCookies);
                // Seal the cookies object that'll freeze out any methods that could
                // mutate the underlying data.
                cache.cookies = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal(requestCookies);
            }
            return cache.cookies;
        },
        set cookies (value){
            cache.cookies = value;
        },
        get mutableCookies () {
            if (!cache.mutableCookies) {
                const mutableCookies = getMutableCookies(headers, onUpdateCookies);
                mergeMiddlewareCookies(headers, mutableCookies);
                cache.mutableCookies = mutableCookies;
            }
            return cache.mutableCookies;
        },
        get userspaceMutableCookies () {
            if (!cache.userspaceMutableCookies) {
                const userspaceMutableCookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createCookiesWithMutableAccessCheck"])(this);
                cache.userspaceMutableCookies = userspaceMutableCookies;
            }
            return cache.userspaceMutableCookies;
        },
        get draftMode () {
            if (!cache.draftMode) {
                cache.draftMode = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$draft$2d$mode$2d$provider$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DraftModeProvider"](previewProps, headers, this.cookies, this.mutableCookies);
            }
            return cache.draftMode;
        },
        resumeDataCache: resumeDataCache ?? null,
        isHmrRefresh,
        serverComponentsHmrCache: serverComponentsHmrCache || globalThis.__serverComponentsHmrCache,
        hmrRefreshHash,
        fallbackParams
    };
}
function synchronizeMutableCookies(store) {
    // TODO: does this need to update headers as well?
    store.cookies = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookiesAdapter"].seal((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$request$2d$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["responseCookiesToRequestCookies"])(store.mutableCookies));
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/async-storage/work-store.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWorkStore",
    ()=>createWorkStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$after$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/after/after-context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lazy$2d$result$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/lazy-result.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$handlers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/use-cache/handlers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/app-render/async-local-storage.js [middleware] (ecmascript)");
;
;
;
;
;
function createWorkStore({ page, renderOpts, isPrefetchRequest, buildId, deploymentId, previouslyRevalidatedTags, nonce }) {
    /**
   * Rules of Static & Dynamic HTML:
   *
   *    1.) We must generate static HTML unless the caller explicitly opts
   *        in to dynamic HTML support.
   *
   *    2.) If dynamic HTML support is requested, we must honor that request
   *        or throw an error. It is the sole responsibility of the caller to
   *        ensure they aren't e.g. requesting dynamic HTML for a static page.
   *
   *    3.) If the request is in draft mode, we must generate dynamic HTML.
   *
   *    4.) If the request is a server action, we must generate dynamic HTML.
   *
   * These rules help ensure that other existing features like request caching,
   * coalescing, and ISR continue working as intended.
   */ const isStaticGeneration = !renderOpts.supportsDynamicResponse && !renderOpts.isDraftMode && !renderOpts.isPossibleServerAction;
    const shouldTrackFetchMetrics = !!("TURBOPACK compile-time value", "1") || // The only times we want to track fetch metrics outside of development is
    // when we are performing a static generation and we either are in debug
    // mode, or tracking fetch metrics was specifically opted into.
    isStaticGeneration && (!!process.env.NEXT_DEBUG_BUILD || process.env.NEXT_SSG_FETCH_METRICS === '1');
    const store = {
        isStaticGeneration,
        page,
        route: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page),
        incrementalCache: // so that it can access the fs cache without mocks
        renderOpts.incrementalCache || globalThis.__incrementalCache,
        cacheLifeProfiles: renderOpts.cacheLifeProfiles,
        useCacheTimeout: renderOpts.experimental.useCacheTimeout,
        staticPageGenerationTimeout: renderOpts.staticPageGenerationTimeout,
        isBuildTimePrerendering: renderOpts.isBuildTimePrerendering,
        fetchCache: renderOpts.fetchCache,
        isOnDemandRevalidate: renderOpts.isOnDemandRevalidate,
        requestId: undefined,
        htmlRequestId: undefined,
        isDraftMode: renderOpts.isDraftMode,
        isPrefetchRequest,
        buildId,
        deploymentId,
        reactLoadableManifest: (renderOpts == null ? void 0 : renderOpts.reactLoadableManifest) || {},
        assetPrefix: (renderOpts == null ? void 0 : renderOpts.assetPrefix) || '',
        nonce,
        afterContext: createAfterContext(renderOpts),
        cacheComponentsEnabled: renderOpts.cacheComponents,
        validationLevel: renderOpts.validationLevel,
        previouslyRevalidatedTags,
        requestStartTime: performance.timeOrigin + performance.now(),
        refreshTagsByCacheKind: createRefreshTagsByCacheKind(),
        runInCleanSnapshot: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$async$2d$local$2d$storage$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createSnapshot"])(),
        shouldTrackFetchMetrics,
        reactServerErrorsByDigest: new Map()
    };
    // TODO: remove this when we resolve accessing the store outside the execution context
    renderOpts.store = store;
    return store;
}
function createAfterContext(renderOpts) {
    const { waitUntil, onClose, onAfterTaskError } = renderOpts;
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$after$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AfterContext"]({
        waitUntil,
        onClose,
        onTaskError: onAfterTaskError
    });
}
/**
 * Creates a map with lazy results that refresh tags for the respective cache
 * kind when they're awaited for the first time.
 */ function createRefreshTagsByCacheKind() {
    const refreshTagsByCacheKind = new Map();
    const cacheHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$handlers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getCacheHandlerEntries"])();
    if (cacheHandlers) {
        for (const [kind, cacheHandler] of cacheHandlers){
            if ('refreshTags' in cacheHandler) {
                refreshTagsByCacheKind.set(kind, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lazy$2d$result$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createLazyResult"])(async ()=>cacheHandler.refreshTags()));
            }
        }
    }
    return refreshTagsByCacheKind;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/base-http/helpers.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This file provides some helpers that should be used in conjunction with
 * explicit environment checks. When combined with the environment checks, it
 * will ensure that the correct typings are used as well as enable code
 * elimination.
 */ /**
 * Type guard to determine if a request is a WebNextRequest. This does not
 * actually check the type of the request, but rather the runtime environment.
 * It's expected that when the runtime environment is the edge runtime, that any
 * base request is a WebNextRequest.
 */ __turbopack_context__.s([
    "isNodeNextRequest",
    ()=>isNodeNextRequest,
    "isNodeNextResponse",
    ()=>isNodeNextResponse,
    "isWebNextRequest",
    ()=>isWebNextRequest,
    "isWebNextResponse",
    ()=>isWebNextResponse
]);
const isWebNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isWebNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isNodeNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") !== 'edge';
const isNodeNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") !== 'edge';
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/client-component-renderer-logger.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClientComponentLoaderMetrics",
    ()=>getClientComponentLoaderMetrics,
    "wrapClientComponentLoader",
    ()=>wrapClientComponentLoader
]);
// Combined load times for loading client components
let clientComponentLoadStart = 0;
let clientComponentLoadTimes = 0;
let clientComponentLoadCount = 0;
function wrapClientComponentLoader(ComponentMod, isTracingEnabled) {
    if (!('performance' in globalThis) || !process.env.NEXT_OTEL_PERFORMANCE_PREFIX && !isTracingEnabled) {
        return ComponentMod.__next_app__;
    }
    return {
        require: (...args)=>{
            const startTime = performance.now();
            if (clientComponentLoadStart === 0) {
                clientComponentLoadStart = startTime;
            }
            try {
                clientComponentLoadCount += 1;
                return ComponentMod.__next_app__.require(...args);
            } finally{
                clientComponentLoadTimes += performance.now() - startTime;
            }
        },
        loadChunk: (...args)=>{
            const startTime = performance.now();
            const result = ComponentMod.__next_app__.loadChunk(...args);
            // Avoid wrapping `loadChunk`'s result in an extra promise in case something like React depends on its identity.
            // We only need to know when it's settled.
            result.finally(()=>{
                clientComponentLoadTimes += performance.now() - startTime;
            });
            return result;
        }
    };
}
function getClientComponentLoaderMetrics(options = {}) {
    const metrics = clientComponentLoadStart === 0 ? undefined : {
        clientComponentLoadStart,
        clientComponentLoadTimes,
        clientComponentLoadCount
    };
    if (options.reset) {
        clientComponentLoadStart = 0;
        clientComponentLoadTimes = 0;
        clientComponentLoadCount = 0;
    }
    return metrics;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/internal-utils.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripInternalQueries",
    ()=>stripInternalQueries,
    "stripInternalSearchParams",
    ()=>stripInternalSearchParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
;
const INTERNAL_QUERY_NAMES = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]
];
function stripInternalQueries(query) {
    for (const name of INTERNAL_QUERY_NAMES){
        delete query[name];
    }
}
function stripInternalSearchParams(url) {
    const isStringUrl = typeof url === 'string';
    const instance = isStringUrl ? new URL(url) : url;
    instance.searchParams.delete(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]);
    return isStringUrl ? instance.toString() : instance;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/cache-handlers/default.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDefaultCacheHandler",
    ()=>createDefaultCacheHandler
]);
/**
 * This is the default "use cache" handler it defaults to an in-memory store.
 * In-memory caches are fragile and should not use stale-while-revalidate
 * semantics on the caches because it's not worth warming up an entry that's
 * likely going to get evicted before we get to use it anyway. However, we also
 * don't want to reuse a stale entry for too long so stale entries should be
 * considered expired/missing in such cache handlers.
 *
 * The dev server (`next dev`) is the exception: to keep reloads fast it serves
 * stale entries until they expire, relying on the wrapper's
 * stale-while-revalidate path to warm a fresh entry in the background. See
 * `get` for where this branches.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/lru-cache.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/use-cache/constants.js [middleware] (ecmascript)");
;
;
;
function createDefaultCacheHandler(maxSize) {
    // If the max size is 0, return a cache handler that doesn't cache anything,
    // this avoids an unnecessary LRUCache instance and potential memory
    // allocation.
    if (maxSize === 0) {
        return {
            get: ()=>Promise.resolve(undefined),
            set: ()=>Promise.resolve(),
            refreshTags: ()=>Promise.resolve(),
            getExpiration: ()=>Promise.resolve(0),
            updateTags: ()=>Promise.resolve()
        };
    }
    const memoryCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LRUCache"](maxSize, (entry, cacheKey)=>entry.size + cacheKey.length);
    const pendingSets = new Map();
    const debug = process.env.NEXT_PRIVATE_DEBUG_CACHE ? console.debug.bind(console, 'DefaultCacheHandler:') : undefined;
    return {
        async get (cacheKey) {
            const pendingPromise = pendingSets.get(cacheKey);
            if (pendingPromise) {
                debug == null ? void 0 : debug('get', cacheKey, 'pending');
                await pendingPromise;
            }
            const privateEntry = memoryCache.get(cacheKey);
            if (!privateEntry) {
                debug == null ? void 0 : debug('get', cacheKey, 'not found');
                return undefined;
            }
            const entry = privateEntry.entry;
            // A negative `expire` is an eviction sentinel: the tiered cache handler
            // (dev-only) marks a front entry for deletion by overwriting it with a
            // negative `expire`, since the cache-handler interface has no per-key
            // delete. Treat it as missing here, independently of the minimum
            // retention below (which would otherwise keep it alive). This is distinct
            // from `revalidate = -1` below, which keeps serving the entry but forces
            // a revalidation.
            if (entry.expire < 0) {
                debug == null ? void 0 : debug('get', cacheKey, 'evicted');
                return undefined;
            }
            // The dev server serves stale entries until they expire (see the file
            // overview); production drops them once past the revalidate time. In dev,
            // an entry is retained for at least `MIN_PRERENDERABLE_EXPIRE` so that
            // entries with a short `expire` (for example a `cacheLife({ expire: 0 })`
            // client-only cache) still linger long enough that a reload hits the
            // cache. That minimum is the same threshold below which the "use cache"
            // wrapper treats an entry as dynamic, so it only extends the retention of
            // entries that are dynamic anyway. It affects retention only; the
            // returned entry keeps its real `expire`, so staging decisions are
            // unchanged.
            const maxAgeSeconds = ("TURBOPACK compile-time truthy", 1) ? Math.max(entry.expire, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MIN_PRERENDERABLE_EXPIRE"]) : "TURBOPACK unreachable";
            if (performance.timeOrigin + performance.now() > entry.timestamp + maxAgeSeconds * 1000) {
                debug == null ? void 0 : debug('get', cacheKey, 'expired');
                return undefined;
            }
            let revalidate = entry.revalidate;
            if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["areTagsExpired"])(entry.tags, entry.timestamp)) {
                debug == null ? void 0 : debug('get', cacheKey, 'had expired tag');
                return undefined;
            }
            if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["areTagsStale"])(entry.tags, entry.timestamp)) {
                debug == null ? void 0 : debug('get', cacheKey, 'had stale tag');
                revalidate = -1;
            }
            const [returnStream, newSaved] = entry.value.tee();
            entry.value = newSaved;
            debug == null ? void 0 : debug('get', cacheKey, 'found', {
                tags: entry.tags,
                timestamp: entry.timestamp,
                expire: entry.expire,
                revalidate
            });
            return {
                ...entry,
                revalidate,
                value: returnStream
            };
        },
        async set (cacheKey, pendingEntry) {
            debug == null ? void 0 : debug('set', cacheKey, 'start');
            let resolvePending = ()=>{};
            const pendingPromise = new Promise((resolve)=>{
                resolvePending = resolve;
            });
            pendingSets.set(cacheKey, pendingPromise);
            const entry = await pendingEntry;
            let size = 0;
            try {
                // In production an `expire: 0` entry is dynamic: the "use cache"
                // wrapper regenerates it on every read instead of serving the stored
                // copy, so persisting it would be a wasted write of a value that is
                // never served back. Skip storing it so the next read is a plain miss.
                // The dev server keeps it, because its minimum retention serves the
                // previously cached value across reloads. The `finally` below still
                // resolves the pending set.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                const [value, clonedValue] = entry.value.tee();
                entry.value = value;
                const reader = clonedValue.getReader();
                for(let chunk; !(chunk = await reader.read()).done;){
                    size += Buffer.from(chunk.value).byteLength;
                }
                memoryCache.set(cacheKey, {
                    entry,
                    isErrored: false,
                    errorRetryCount: 0,
                    size
                });
                debug == null ? void 0 : debug('set', cacheKey, 'done');
            } catch (err) {
                // TODO: store partial buffer with error after we retry 3 times
                debug == null ? void 0 : debug('set', cacheKey, 'failed', err);
            } finally{
                resolvePending();
                pendingSets.delete(cacheKey);
            }
        },
        async refreshTags () {
        // Nothing to do for an in-memory cache handler.
        },
        async getExpiration (tags) {
            const expirations = tags.map((tag)=>{
                const entry = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["tagsManifest"].get(tag);
                if (!entry) return 0;
                // Return the most recent timestamp (either expired or stale)
                return entry.expired || 0;
            });
            const expiration = Math.max(...expirations, 0);
            debug == null ? void 0 : debug('getExpiration', {
                tags,
                expiration
            });
            return expiration;
        },
        async updateTags (tags, durations) {
            const now = Math.round(performance.timeOrigin + performance.now());
            debug == null ? void 0 : debug('updateTags', {
                tags,
                timestamp: now
            });
            for (const tag of tags){
                // TODO: update file-system-cache?
                const existingEntry = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["tagsManifest"].get(tag) || {};
                if (durations) {
                    // Use provided durations directly
                    const updates = {
                        ...existingEntry
                    };
                    // mark as stale immediately
                    updates.stale = now;
                    if (durations.expire !== undefined) {
                        updates.expired = now + durations.expire * 1000 // Convert seconds to ms
                        ;
                    }
                    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["tagsManifest"].set(tag, updates);
                } else {
                    // Update expired field for immediate expiration (default behavior when no durations provided)
                    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["tagsManifest"].set(tag, {
                        ...existingEntry,
                        expired: now
                    });
                }
            }
        }
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/decode-query-path-parameter.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Decodes a query path parameter.
 *
 * @param value - The value to decode.
 * @returns The decoded value.
 */ __turbopack_context__.s([
    "decodeQueryPathParameter",
    ()=>decodeQueryPathParameter
]);
function decodeQueryPathParameter(value) {
    // When deployed to Vercel, the value may be encoded, so this attempts to
    // decode it and returns the original value if it fails.
    try {
        return decodeURIComponent(value);
    } catch  {
        return value;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/encode-header-safe.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodeHeaderSafe",
    ()=>encodeHeaderSafe
]);
/**
 * Percent-encode every character other than horizontal tab and printable ASCII
 * so a value can be safely serialized into an HTTP header.
 *
 * Node's `validateHeaderValue` and `fetch`'s ByteString conversion accept
 * different character ranges. Restricting values to `\t\x20-\x7e` produces a
 * conservative representation that both can serialize. Characters outside a
 * transport's accepted range (Hebrew, Arabic, Chinese, emoji, …) would
 * otherwise throw `ERR_INVALID_CHAR` or a `TypeError`, which crashes ISR or
 * fails a cache read on every affected request.
 *
 * Cache tags are encoded at the public boundaries — tag construction
 * (`getImplicitTags`, `validateTags`) and invalidation input
 * (`revalidatePath`, `revalidateTag`, `updateTag`) — so storage, comparison,
 * and the wire all see the same canonical form.
 *
 * The class is narrower than either transport accepts. Everything inside it
 * passes through byte-for-byte, including `,`, `/`, `%`, `[`, `]`, `_`, `-` and
 * `\t`, which preserves the comma-separated header format and the
 * dynamic-segment markers in derived tags (`_N_T_/[slug]/page`).
 *
 * Properties:
 * - Fast-path: input that already fits the class is returned unchanged. This
 *   makes the encoder idempotent on already-encoded `%xx` sequences.
 * - Matches *runs* of out-of-class code units so surrogate pairs (e.g. an
 *   emoji) are handed to `encodeURIComponent` as a complete code point — a
 *   per-code-unit regex would split the pair and throw `URIError`.
 */ const OUT_OF_CLASS_CHAR = /[^\t\x20-\x7e]/;
const OUT_OF_CLASS_RUN = /[^\t\x20-\x7e]+/g;
function encodeHeaderSafe(value) {
    return OUT_OF_CLASS_CHAR.test(value) ? value.replace(OUT_OF_CLASS_RUN, (run)=>encodeURIComponent(run)) : value;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/implicit-tags.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getImplicitTags",
    ()=>getImplicitTags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$handlers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/use-cache/handlers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$encode$2d$header$2d$safe$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/encode-header-safe.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lazy$2d$result$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/lazy-result.js [middleware] (ecmascript)");
;
;
;
;
const getDerivedTags = (pathname)=>{
    const derivedTags = [
        `/layout`
    ];
    // we automatically add the current path segments as tags
    // for revalidatePath handling
    if (pathname.startsWith('/')) {
        let end = pathname.indexOf('/', 1);
        while(true){
            if (end === -1) {
                end = pathname.length;
            }
            let curPathname = pathname.slice(0, end);
            if (curPathname) {
                // all derived tags other than the page are layout tags
                if (!curPathname.endsWith('/page') && !curPathname.endsWith('/route')) {
                    curPathname = `${curPathname}${!curPathname.endsWith('/') ? '/' : ''}layout`;
                }
                derivedTags.push(curPathname);
            }
            if (end === pathname.length) {
                break;
            }
            end = pathname.indexOf('/', end + 1);
        }
    }
    return derivedTags;
};
/**
 * Creates a map with lazy results that fetch the expiration value for the given
 * tags and respective cache kind when they're awaited for the first time.
 */ function createTagsExpirationsByCacheKind(tags) {
    const expirationsByCacheKind = new Map();
    const cacheHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$handlers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getCacheHandlerEntries"])();
    if (cacheHandlers) {
        for (const [kind, cacheHandler] of cacheHandlers){
            if ('getExpiration' in cacheHandler) {
                expirationsByCacheKind.set(kind, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lazy$2d$result$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createLazyResult"])(async ()=>cacheHandler.getExpiration(tags)));
            }
        }
    }
    return expirationsByCacheKind;
}
async function getImplicitTags(page, pathname, fallbackRouteParams) {
    const tags = new Set();
    // Add the derived tags from the page. Encode each tag so a non-ASCII
    // pathname doesn't trip header validation when written to
    // `x-next-cache-tags`. Idempotent on already-ASCII input.
    const derivedTags = getDerivedTags(page);
    for (let tag of derivedTags){
        tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$encode$2d$header$2d$safe$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encodeHeaderSafe"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_IMPLICIT_TAG_ID"]}${tag}`);
        tags.add(tag);
    }
    // Add the tags from the pathname. If the route has unknown params, we don't
    // want to add the pathname as a tag, as it will be invalid.
    if (pathname && (!fallbackRouteParams || fallbackRouteParams.size === 0)) {
        const tag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$encode$2d$header$2d$safe$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["encodeHeaderSafe"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_IMPLICIT_TAG_ID"]}${pathname}`);
        tags.add(tag);
    }
    if (tags.has(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_IMPLICIT_TAG_ID"]}/`)) {
        tags.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_IMPLICIT_TAG_ID"]}/index`);
    }
    if (tags.has(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_IMPLICIT_TAG_ID"]}/index`)) {
        tags.add(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_IMPLICIT_TAG_ID"]}/`);
    }
    const tagsArray = Array.from(tags);
    return {
        tags: tagsArray,
        expirationsByCacheKind: createTagsExpirationsByCacheKind(tagsArray)
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/incremental-cache/file-system-cache.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileSystemCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/response-cache/index.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/response-cache/types.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$isomorphic$2f$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/isomorphic/path.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$multi$2d$file$2d$writer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/multi-file-writer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$memory$2d$cache$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$memory$2d$cache$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/lib/incremental-cache/memory-cache.external.js [external] (next/dist/server/lib/incremental-cache/memory-cache.external.js, cjs)");
;
;
;
;
;
;
class FileSystemCache {
    static #_ = this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
    constructor(ctx){
        this.fs = ctx.fs;
        this.flushToDisk = ctx.flushToDisk;
        this.serverDistDir = ctx.serverDistDir;
        this.revalidatedTags = ctx.revalidatedTags;
        if (ctx.maxMemoryCacheSize) {
            if (!FileSystemCache.memoryCache) {
                if (FileSystemCache.debug) {
                    console.log('FileSystemCache: using memory store for fetch cache');
                }
                FileSystemCache.memoryCache = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$memory$2d$cache$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$memory$2d$cache$2e$external$2e$js$2c$__cjs$29$__["getMemoryCache"])(ctx.maxMemoryCacheSize);
            } else if (FileSystemCache.debug) {
                console.log('FileSystemCache: memory store already initialized');
            }
        } else if (FileSystemCache.debug) {
            console.log('FileSystemCache: not using memory store for fetch cache');
        }
    }
    resetRequestCache() {}
    async revalidateTag(tags, durations) {
        tags = typeof tags === 'string' ? [
            tags
        ] : tags;
        if (FileSystemCache.debug) {
            console.log('FileSystemCache: revalidateTag', tags, durations);
        }
        if (tags.length === 0) {
            return;
        }
        const now = Date.now();
        for (const tag of tags){
            const existingEntry = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["tagsManifest"].get(tag) || {};
            if (durations) {
                // Use provided durations directly
                const updates = {
                    ...existingEntry
                };
                // mark as stale immediately
                updates.stale = now;
                if (durations.expire !== undefined) {
                    updates.expired = now + durations.expire * 1000 // Convert seconds to ms
                    ;
                }
                __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["tagsManifest"].set(tag, updates);
            } else {
                // Update expired field for immediate expiration (default behavior when no durations provided)
                __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["tagsManifest"].set(tag, {
                    ...existingEntry,
                    expired: now
                });
            }
        }
    }
    async get(...args) {
        var _FileSystemCache_memoryCache, _data_value, _data_value1, _data_value2, _data_value3;
        const [key, ctx] = args;
        const { kind } = ctx;
        let data = (_FileSystemCache_memoryCache = FileSystemCache.memoryCache) == null ? void 0 : _FileSystemCache_memoryCache.get(key);
        if (FileSystemCache.debug) {
            if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH) {
                console.log('FileSystemCache: get', key, ctx.tags, kind, !!data);
            } else {
                console.log('FileSystemCache: get', key, kind, !!data);
            }
        }
        // let's check the disk for seed data
        if (!data && ("TURBOPACK compile-time value", "nodejs") !== 'edge') {
            try {
                if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_ROUTE) {
                    const filePath = this.getFilePath(`${key}.body`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_ROUTE);
                    const fileData = await this.fs.readFile(filePath);
                    const { mtime } = await this.fs.stat(filePath);
                    const meta = JSON.parse(await this.fs.readFile(filePath.replace(/\.body$/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_META_SUFFIX"]), 'utf8'));
                    data = {
                        lastModified: mtime.getTime(),
                        value: {
                            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_ROUTE,
                            body: fileData,
                            headers: meta.headers,
                            status: meta.status
                        }
                    };
                } else {
                    const filePath = this.getFilePath(kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH ? key : `${key}.html`, kind);
                    const fileData = await this.fs.readFile(filePath, 'utf8');
                    const { mtime } = await this.fs.stat(filePath);
                    if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH) {
                        var _data_value4;
                        const { tags, fetchIdx, fetchUrl } = ctx;
                        if (!this.flushToDisk) return null;
                        const lastModified = mtime.getTime();
                        const parsedData = JSON.parse(fileData);
                        data = {
                            lastModified,
                            value: parsedData
                        };
                        if (((_data_value4 = data.value) == null ? void 0 : _data_value4.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
                            var _data_value5;
                            const storedTags = (_data_value5 = data.value) == null ? void 0 : _data_value5.tags;
                            // update stored tags if a new one is being added
                            // TODO: remove this when we can send the tags
                            // via header on GET same as SET
                            if (!(tags == null ? void 0 : tags.every((tag)=>storedTags == null ? void 0 : storedTags.includes(tag)))) {
                                if (FileSystemCache.debug) {
                                    console.log('FileSystemCache: tags vs storedTags mismatch', tags, storedTags);
                                }
                                await this.set(key, data.value, {
                                    fetchCache: true,
                                    tags,
                                    fetchIdx,
                                    fetchUrl
                                });
                            }
                        }
                    } else if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE) {
                        // We try to load the metadata file, but if it fails, we don't
                        // error. We also don't load it if this is a fallback.
                        let meta;
                        try {
                            meta = JSON.parse(await this.fs.readFile(filePath.replace(/\.html$/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_META_SUFFIX"]), 'utf8'));
                        } catch  {}
                        let maybeSegmentData;
                        if (meta == null ? void 0 : meta.segmentPaths) {
                            // Collect all the segment data for this page.
                            // TODO: To optimize file system reads, we should consider creating
                            // separate cache entries for each segment, rather than storing them
                            // all on the page's entry. Though the behavior is
                            // identical regardless.
                            const segmentData = new Map();
                            maybeSegmentData = segmentData;
                            const segmentsDir = key + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RSC_SEGMENTS_DIR_SUFFIX"];
                            await Promise.all(meta.segmentPaths.map(async (segmentPath)=>{
                                const segmentDataFilePath = this.getFilePath(segmentsDir + segmentPath + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RSC_SEGMENT_SUFFIX"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE);
                                try {
                                    segmentData.set(segmentPath, await this.fs.readFile(segmentDataFilePath));
                                } catch  {
                                // This shouldn't happen, but if for some reason we fail to
                                // load a segment from the filesystem, treat it the same as if
                                // the segment is dynamic and does not have a prefetch.
                                }
                            }));
                        }
                        let rscData;
                        if (!ctx.isFallback && (!ctx.isRoutePPREnabled || (meta == null ? void 0 : meta.postponed) == null)) {
                            rscData = await this.fs.readFile(this.getFilePath(`${key}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RSC_SUFFIX"]}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE));
                        }
                        data = {
                            lastModified: mtime.getTime(),
                            value: {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
                                html: fileData,
                                rscData,
                                postponed: meta == null ? void 0 : meta.postponed,
                                headers: meta == null ? void 0 : meta.headers,
                                status: meta == null ? void 0 : meta.status,
                                segmentData: maybeSegmentData
                            }
                        };
                    } else if (kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].PAGES) {
                        let meta;
                        let pageData = {};
                        if (!ctx.isFallback) {
                            pageData = JSON.parse(await this.fs.readFile(this.getFilePath(`${key}${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_DATA_SUFFIX"]}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].PAGES), 'utf8'));
                        }
                        data = {
                            lastModified: mtime.getTime(),
                            value: {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
                                html: fileData,
                                pageData,
                                headers: meta == null ? void 0 : meta.headers,
                                status: meta == null ? void 0 : meta.status
                            }
                        };
                    } else {
                        throw Object.defineProperty(new Error(`Invariant: Unexpected route kind ${kind} in file system cache.`), "__NEXT_ERROR_CODE", {
                            value: "E445",
                            enumerable: false,
                            configurable: true
                        });
                    }
                }
                if (data) {
                    var _FileSystemCache_memoryCache1;
                    (_FileSystemCache_memoryCache1 = FileSystemCache.memoryCache) == null ? void 0 : _FileSystemCache_memoryCache1.set(key, data);
                }
            } catch  {
                return null;
            }
        }
        if ((data == null ? void 0 : (_data_value = data.value) == null ? void 0 : _data_value.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE || (data == null ? void 0 : (_data_value1 = data.value) == null ? void 0 : _data_value1.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_ROUTE || (data == null ? void 0 : (_data_value2 = data.value) == null ? void 0 : _data_value2.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES) {
            var _data_value_headers;
            const tagsHeader = (_data_value_headers = data.value.headers) == null ? void 0 : _data_value_headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
            if (typeof tagsHeader === 'string') {
                const cacheTags = tagsHeader.split(',');
                // we trigger a blocking validation if an ISR page
                // had a tag revalidated, if we want to be a background
                // revalidation instead we return data.lastModified = -1
                if (cacheTags.length > 0 && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["areTagsExpired"])(cacheTags, data.lastModified)) {
                    if (FileSystemCache.debug) {
                        console.log('FileSystemCache: expired tags', cacheTags);
                    }
                    return null;
                }
            }
        } else if ((data == null ? void 0 : (_data_value3 = data.value) == null ? void 0 : _data_value3.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
            const combinedTags = ctx.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH ? [
                ...ctx.tags || [],
                ...ctx.softTags || []
            ] : [];
            // When revalidate tag is called we don't return stale data so it's
            // updated right away.
            if (combinedTags.some((tag)=>this.revalidatedTags.includes(tag))) {
                if (FileSystemCache.debug) {
                    console.log('FileSystemCache: was revalidated', combinedTags);
                }
                return null;
            }
            if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["areTagsExpired"])(combinedTags, data.lastModified)) {
                if (FileSystemCache.debug) {
                    console.log('FileSystemCache: expired tags', combinedTags);
                }
                return null;
            }
        }
        return data ?? null;
    }
    async set(key, data, ctx) {
        var _FileSystemCache_memoryCache;
        (_FileSystemCache_memoryCache = FileSystemCache.memoryCache) == null ? void 0 : _FileSystemCache_memoryCache.set(key, {
            value: data,
            lastModified: Date.now()
        });
        if (FileSystemCache.debug) {
            console.log('FileSystemCache: set', key);
        }
        if (!this.flushToDisk || !data) return;
        // Create a new writer that will prepare to write all the files to disk
        // after their containing directory is created.
        const writer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$multi$2d$file$2d$writer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MultiFileWriter"](this.fs);
        if (data.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_ROUTE) {
            const filePath = this.getFilePath(`${key}.body`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_ROUTE);
            writer.append(filePath, data.body);
            const meta = {
                headers: data.headers,
                status: data.status,
                postponed: undefined,
                segmentPaths: undefined,
                prefetchHints: undefined
            };
            writer.append(filePath.replace(/\.body$/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_META_SUFFIX"]), JSON.stringify(meta, null, 2));
        } else if (data.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES || data.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
            const isAppPath = data.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE;
            const htmlPath = this.getFilePath(`${key}.html`, isAppPath ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].PAGES);
            writer.append(htmlPath, data.html);
            // Fallbacks don't generate a data file.
            if (!ctx.fetchCache && !ctx.isFallback && !ctx.isRoutePPREnabled) {
                writer.append(this.getFilePath(`${key}${isAppPath ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RSC_SUFFIX"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_DATA_SUFFIX"]}`, isAppPath ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].PAGES), isAppPath ? data.rscData : JSON.stringify(data.pageData));
            }
            if ((data == null ? void 0 : data.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                let segmentPaths;
                if (data.segmentData) {
                    segmentPaths = [];
                    const segmentsDir = htmlPath.replace(/\.html$/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RSC_SEGMENTS_DIR_SUFFIX"]);
                    for (const [segmentPath, buffer] of data.segmentData){
                        segmentPaths.push(segmentPath);
                        const segmentDataFilePath = segmentsDir + segmentPath + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RSC_SEGMENT_SUFFIX"];
                        writer.append(segmentDataFilePath, buffer);
                    }
                }
                const meta = {
                    headers: data.headers,
                    status: data.status,
                    postponed: data.postponed,
                    segmentPaths,
                    prefetchHints: undefined
                };
                writer.append(htmlPath.replace(/\.html$/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_META_SUFFIX"]), JSON.stringify(meta));
            }
        } else if (data.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
            const filePath = this.getFilePath(key, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH);
            writer.append(filePath, JSON.stringify({
                ...data,
                tags: ctx.fetchCache ? ctx.tags : []
            }));
        }
        // Wait for all FS operations to complete.
        await writer.wait();
    }
    getFilePath(pathname, kind) {
        switch(kind){
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH:
                // we store in .next/cache/fetch-cache so it can be persisted
                // across deploys
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$isomorphic$2f$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].join(this.serverDistDir, '..', 'cache', 'fetch-cache', pathname);
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].PAGES:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$isomorphic$2f$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].join(this.serverDistDir, 'pages', pathname);
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].IMAGE:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE:
            case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_ROUTE:
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$isomorphic$2f$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].join(this.serverDistDir, 'app', pathname);
            default:
                throw Object.defineProperty(new Error(`Unexpected file path kind: ${kind}`), "__NEXT_ERROR_CODE", {
                    value: "E479",
                    enumerable: false,
                    configurable: true
                });
        }
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/incremental-cache/index.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CacheHandler",
    ()=>CacheHandler,
    "IncrementalCache",
    ()=>IncrementalCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/response-cache/index.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/response-cache/types.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$incremental$2d$cache$2f$file$2d$system$2d$cache$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/incremental-cache/file-system-cache.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$normalize$2d$page$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/page-path/normalize-page-path.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$to$2d$route$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/to-route.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$shared$2d$cache$2d$controls$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$shared$2d$cache$2d$controls$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/lib/incremental-cache/shared-cache-controls.external.js [external] (next/dist/server/lib/incremental-cache/shared-cache-controls.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$server$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/server-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/detached-promise.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)");
;
;
;
;
;
;
;
;
;
;
;
;
function toHex(buffer) {
    // Hex-encode body bytes losslessly: decoding as UTF-8 would collapse
    // distinct bytes (0xff/0xfe to U+FFFD) and collide; Buffer isn't on edge.
    const bytes = isArrayBuffer(buffer) ? new Uint8Array(buffer) : new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
    let hex = '';
    for (const byte of bytes){
        hex += byte.toString(16).padStart(2, '0');
    }
    return hex;
}
// Duck typing to support Edge runtime
// TODO: Switch to instanceof checks once Edge runtime is removed.
function isArrayBuffer(buffer) {
    return !('buffer' in buffer);
}
function isBodyByteSequence(body) {
    return typeof body === 'object' && 'byteLength' in body;
}
function isBodyReadableStream(body) {
    return typeof body.getReader === 'function';
}
function isBodyFormDataOrURLSearchParams(body) {
    return typeof body.keys === 'function';
}
function isBodyBlob(body) {
    return typeof body.arrayBuffer === 'function';
}
class CacheHandler {
    // eslint-disable-next-line
    constructor(_ctx){}
    async get(_cacheKey, _ctx) {
        return {};
    }
    async set(_cacheKey, _data, _ctx) {}
    async revalidateTag(_tags, _durations) {}
    resetRequestCache() {}
}
async function hashString(cacheString) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        const crypto1 = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
        return crypto1.createHash('sha256').update(cacheString).digest('hex');
    }
}
// this should be bumped anytime a fix is made to cache entries
// that should bust the cache
const MAIN_KEY_PREFIX = 'v4';
class IncrementalCache {
    static #_ = this.debug = !!process.env.NEXT_PRIVATE_DEBUG_CACHE;
    constructor({ fs, dev, flushToDisk, minimalMode, serverDistDir, requestHeaders, maxMemoryCacheSize, getPrerenderManifest, fetchCacheKeyPrefix, CurCacheHandler, allowedRevalidateHeaderKeys }){
        var _this_prerenderManifest_preview, _this_prerenderManifest;
        this.locks = new Map();
        this.hasCustomCacheHandler = Boolean(CurCacheHandler);
        const cacheHandlersSymbol = Symbol.for('@next/cache-handlers');
        const _globalThis = globalThis;
        if (!CurCacheHandler) {
            // if we have a global cache handler available leverage it
            const globalCacheHandler = _globalThis[cacheHandlersSymbol];
            if (globalCacheHandler == null ? void 0 : globalCacheHandler.FetchCache) {
                CurCacheHandler = globalCacheHandler.FetchCache;
                if (IncrementalCache.debug) {
                    console.log('IncrementalCache: using global FetchCache cache handler');
                }
            } else {
                if (fs && serverDistDir) {
                    if (IncrementalCache.debug) {
                        console.log('IncrementalCache: using filesystem cache handler');
                    }
                    CurCacheHandler = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$incremental$2d$cache$2f$file$2d$system$2d$cache$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"];
                }
            }
        } else if (IncrementalCache.debug) {
            console.log('IncrementalCache: using custom cache handler', CurCacheHandler.name);
        }
        if (process.env.__NEXT_TEST_MAX_ISR_CACHE) {
            // Allow cache size to be overridden for testing purposes
            maxMemoryCacheSize = parseInt(process.env.__NEXT_TEST_MAX_ISR_CACHE, 10);
        }
        this.dev = dev;
        this.disableForTestmode = process.env.NEXT_PRIVATE_TEST_PROXY === 'true';
        // this is a hack to avoid Webpack knowing this is equal to this.minimalMode
        // because we replace this.minimalMode to true in production bundles.
        const minimalModeKey = 'minimalMode';
        this[minimalModeKey] = minimalMode;
        this.requestHeaders = requestHeaders;
        this.allowedRevalidateHeaderKeys = allowedRevalidateHeaderKeys;
        this.prerenderManifest = getPrerenderManifest();
        this.cacheControls = new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$shared$2d$cache$2d$controls$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$shared$2d$cache$2d$controls$2e$external$2e$js$2c$__cjs$29$__["SharedCacheControls"](this.prerenderManifest);
        this.fetchCacheKeyPrefix = fetchCacheKeyPrefix;
        let revalidatedTags = [];
        if (requestHeaders[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]] === ((_this_prerenderManifest = this.prerenderManifest) == null ? void 0 : (_this_prerenderManifest_preview = _this_prerenderManifest.preview) == null ? void 0 : _this_prerenderManifest_preview.previewModeId)) {
            this.isOnDemandRevalidate = true;
        }
        if (minimalMode) {
            var _this_prerenderManifest_preview1, _this_prerenderManifest1;
            revalidatedTags = this.revalidatedTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$server$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getPreviouslyRevalidatedTags"])(requestHeaders, (_this_prerenderManifest1 = this.prerenderManifest) == null ? void 0 : (_this_prerenderManifest_preview1 = _this_prerenderManifest1.preview) == null ? void 0 : _this_prerenderManifest_preview1.previewModeId);
        }
        if (CurCacheHandler) {
            this.cacheHandler = new CurCacheHandler({
                dev,
                fs,
                flushToDisk,
                serverDistDir,
                revalidatedTags,
                maxMemoryCacheSize,
                _requestHeaders: requestHeaders,
                fetchCacheKeyPrefix
            });
        }
    }
    calculateRevalidate(pathname, fromTime, dev, isFallback) {
        // in development we don't have a prerender-manifest
        // and default to always revalidating to allow easier debugging
        if (dev) return Math.floor(performance.timeOrigin + performance.now() - 1000);
        const cacheControl = this.cacheControls.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$to$2d$route$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toRoute"])(pathname));
        // if an entry isn't present in routes we fallback to a default
        // of revalidating after 1 second unless it's a fallback request.
        const initialRevalidateSeconds = cacheControl ? cacheControl.revalidate : isFallback ? false : 1;
        const revalidateAfter = typeof initialRevalidateSeconds === 'number' ? initialRevalidateSeconds * 1000 + fromTime : initialRevalidateSeconds;
        return revalidateAfter;
    }
    _getPathname(pathname, fetchCache) {
        return fetchCache ? pathname : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$normalize$2d$page$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizePagePath"])(pathname);
    }
    resetRequestCache() {
        var _this_cacheHandler_resetRequestCache, _this_cacheHandler;
        (_this_cacheHandler = this.cacheHandler) == null ? void 0 : (_this_cacheHandler_resetRequestCache = _this_cacheHandler.resetRequestCache) == null ? void 0 : _this_cacheHandler_resetRequestCache.call(_this_cacheHandler);
    }
    async lock(cacheKey) {
        // Wait for any existing lock on this cache key to be released
        // This implements a simple queue-based locking mechanism
        while(true){
            const lock = this.locks.get(cacheKey);
            if (IncrementalCache.debug) {
                console.log('IncrementalCache: lock get', cacheKey, !!lock);
            }
            // If no lock exists, we can proceed to acquire it
            if (!lock) break;
            // Wait for the existing lock to be released before trying again
            await lock;
        }
        // Create a new detached promise that will represent this lock
        // The resolve function (unlock) will be returned to the caller
        const { resolve, promise } = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        if (IncrementalCache.debug) {
            console.log('IncrementalCache: successfully locked', cacheKey);
        }
        // Store the lock promise in the locks map
        this.locks.set(cacheKey, promise);
        return ()=>{
            // Resolve the promise to release the lock.
            resolve();
            // Remove the lock from the map once it's released so that future gets
            // can acquire the lock.
            this.locks.delete(cacheKey);
        };
    }
    async revalidateTag(tags, durations) {
        var _this_cacheHandler;
        return (_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.revalidateTag(tags, durations);
    }
    async generateSimpleCacheKey(input) {
        const cacheString = JSON.stringify([
            MAIN_KEY_PREFIX,
            this.fetchCacheKeyPrefix || '',
            input
        ]);
        return hashString(cacheString);
    }
    // x-ref: https://github.com/facebook/react/blob/2655c9354d8e1c54ba888444220f63e836925caa/packages/react/src/ReactFetch.js#L23
    async generateCacheKey(url, init = {}) {
        const bodyChunks = [];
        const encoder = new TextEncoder();
        // Will be set implementing https://fetch.spec.whatwg.org/#concept-bodyinit-extract
        let bodyType = null;
        const body = init.body;
        if (body) {
            if (isBodyByteSequence(body)) {
                bodyChunks.push(`bytes:${toHex(body)}`);
                init._ogBody = body;
            } else if (isBodyReadableStream(body)) {
                const readableBody = body;
                const chunks = [];
                try {
                    await readableBody.pipeTo(new WritableStream({
                        write (chunk) {
                            chunks.push(typeof chunk === 'string' ? encoder.encode(chunk) : chunk);
                        }
                    }));
                    // Create a new buffer with all the chunks.
                    const length = chunks.reduce((total, arr)=>total + arr.length, 0);
                    const arrayBuffer = new Uint8Array(length);
                    // Push each of the chunks into the new array buffer.
                    let offset = 0;
                    for (const chunk of chunks){
                        arrayBuffer.set(chunk, offset);
                        offset += chunk.length;
                    }
                    bodyChunks.push(`bytes:${toHex(arrayBuffer)}`);
                    init._ogBody = arrayBuffer;
                } catch (err) {
                    console.error('Problem reading body', err);
                }
            } else if (isBodyFormDataOrURLSearchParams(body)) {
                bodyType = String(body) === '[object FormData]' ? 'multipart/form-data; boundary=' : 'application/x-www-form-urlencoded;charset=UTF-8';
                const iterable = body;
                init._ogBody = body;
                // Separate, tagged chunks so `["a","b"]` can't collide with `["a,b"]`.
                for (const [key, val] of iterable.entries()){
                    bodyChunks.push(`key:${key}`);
                    if (typeof val === 'string') {
                        bodyChunks.push(`str:${val}`);
                    } else {
                        bodyChunks.push('file', val.name, val.type, `bytes:${toHex(await val.arrayBuffer())}`);
                    }
                }
            // handle blob body
            } else if (isBodyBlob(body)) {
                const blob = body;
                const arrayBuffer = await blob.arrayBuffer();
                bodyChunks.push('blob', blob.type, `bytes:${toHex(arrayBuffer)}`);
                init._ogBody = new Blob([
                    arrayBuffer
                ], {
                    type: blob.type
                });
                bodyType = blob.type;
            } else if (typeof body === 'string') {
                bodyChunks.push(`str:${body}`);
                init._ogBody = body;
                bodyType = 'text/plain;charset=UTF-8';
            } else {
                body;
                throw Object.defineProperty(new Error(`Unsupported body type: ${typeof body}`), "__NEXT_ERROR_CODE", {
                    value: "E1443",
                    enumerable: false,
                    configurable: true
                });
            }
        }
        const headers = typeof (init.headers || {}).keys === 'function' ? Object.fromEntries(init.headers) : Object.assign({}, init.headers);
        // w3c trace context headers can break request caching and deduplication
        // so we remove them from the cache key
        if ('traceparent' in headers) delete headers['traceparent'];
        if ('tracestate' in headers) delete headers['tracestate'];
        const cacheString = JSON.stringify([
            MAIN_KEY_PREFIX,
            this.fetchCacheKeyPrefix || '',
            url,
            init.method,
            // Ensures default Content-Type is part of the cache key
            // TODO: Only necessary when headers are not used from the Request instance
            bodyType,
            headers,
            init.mode,
            init.redirect,
            init.credentials,
            init.referrer,
            init.referrerPolicy,
            init.integrity,
            init.cache,
            bodyChunks
        ]);
        return hashString(cacheString);
    }
    async get(cacheKey, ctx) {
        var _this_cacheHandler, _cacheData_value;
        // Unlike other caches if we have a resume data cache, we use it even if
        // testmode would normally disable it or if requestHeaders say 'no-cache'.
        if (ctx.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH) {
            const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
            const resumeDataCache = workUnitStore ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["getResumeDataCache"])(workUnitStore) : null;
            if (resumeDataCache) {
                const memoryCacheData = resumeDataCache.fetch.get(cacheKey);
                if ((memoryCacheData == null ? void 0 : memoryCacheData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
                    // Check if any tags were recently revalidated before returning RDC entry.
                    // When a server action calls updateTag(), the re-render should see fresh
                    // data instead of stale RDC data.
                    const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
                    const combinedTags = [
                        ...ctx.tags || [],
                        ...ctx.softTags || []
                    ];
                    const hasRevalidatedTag = combinedTags.some((tag)=>{
                        var _this_revalidatedTags, _workStore_pendingRevalidatedTags;
                        return ((_this_revalidatedTags = this.revalidatedTags) == null ? void 0 : _this_revalidatedTags.includes(tag)) || (workStore == null ? void 0 : (_workStore_pendingRevalidatedTags = workStore.pendingRevalidatedTags) == null ? void 0 : _workStore_pendingRevalidatedTags.some((item)=>item.tag === tag));
                    });
                    if (hasRevalidatedTag) {
                        if (IncrementalCache.debug) {
                            console.log('IncrementalCache: rdc:revalidated-tag', cacheKey);
                        }
                    // Fall through to cacheHandler lookup
                    } else {
                        if (IncrementalCache.debug) {
                            console.log('IncrementalCache: rdc:hit', cacheKey);
                        }
                        return {
                            isStale: false,
                            value: memoryCacheData
                        };
                    }
                } else if (IncrementalCache.debug) {
                    console.log('IncrementalCache: rdc:miss', cacheKey);
                }
            } else {
                if (IncrementalCache.debug) {
                    console.log('IncrementalCache: rdc:no-resume-data');
                }
            }
        }
        // we don't leverage the prerender cache in dev mode
        // so that getStaticProps is always called for easier debugging
        if (this.disableForTestmode || this.dev && (ctx.kind !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH || this.requestHeaders['cache-control'] === 'no-cache')) {
            return null;
        }
        cacheKey = this._getPathname(cacheKey, ctx.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH);
        const cacheData = await ((_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.get(cacheKey, ctx));
        if (ctx.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH) {
            var _cacheData_value1;
            if (!cacheData) {
                return null;
            }
            if (((_cacheData_value1 = cacheData.value) == null ? void 0 : _cacheData_value1.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
                var _cacheData_value2;
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"](`Expected cached value for cache key ${JSON.stringify(cacheKey)} to be a "FETCH" kind, got ${JSON.stringify((_cacheData_value2 = cacheData.value) == null ? void 0 : _cacheData_value2.kind)} instead.`), "__NEXT_ERROR_CODE", {
                    value: "E653",
                    enumerable: false,
                    configurable: true
                });
            }
            const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
            const combinedTags = [
                ...ctx.tags || [],
                ...ctx.softTags || []
            ];
            // if a tag was revalidated we don't return stale data
            if (combinedTags.some((tag)=>{
                var _this_revalidatedTags, _workStore_pendingRevalidatedTags;
                return ((_this_revalidatedTags = this.revalidatedTags) == null ? void 0 : _this_revalidatedTags.includes(tag)) || (workStore == null ? void 0 : (_workStore_pendingRevalidatedTags = workStore.pendingRevalidatedTags) == null ? void 0 : _workStore_pendingRevalidatedTags.some((item)=>item.tag === tag));
            })) {
                if (IncrementalCache.debug) {
                    console.log('IncrementalCache: expired tag', cacheKey);
                }
                return null;
            }
            // As we're able to get the cache entry for this fetch, and the prerender
            // resume data cache (RDC) is available, it must have been populated by a
            // previous fetch, but was not yet present in the in-memory cache. This
            // could be the case when performing multiple renders in parallel during
            // build time where we de-duplicate the fetch calls.
            //
            // We add it to the RDC so that the next fetch call will be able to use it
            // and it won't have to reach into the fetch cache implementation.
            const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
            if (workUnitStore) {
                const resumeDataCache = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["getResumeDataCache"])(workUnitStore);
                if (resumeDataCache == null ? void 0 : resumeDataCache.mutable) {
                    if (IncrementalCache.debug) {
                        console.log('IncrementalCache: rdc:set', cacheKey);
                    }
                    resumeDataCache.fetch.set(cacheKey, cacheData.value);
                }
            }
            const revalidate = ctx.revalidate || cacheData.value.revalidate;
            const age = (performance.timeOrigin + performance.now() - (cacheData.lastModified || 0)) / 1000;
            let isStale = age > revalidate;
            const data = cacheData.value.data;
            if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["areTagsExpired"])(combinedTags, cacheData.lastModified)) {
                return null;
            } else if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["areTagsStale"])(combinedTags, cacheData.lastModified)) {
                isStale = true;
            }
            return {
                isStale,
                value: {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH,
                    data,
                    revalidate
                }
            };
        } else if ((cacheData == null ? void 0 : (_cacheData_value = cacheData.value) == null ? void 0 : _cacheData_value.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"](`Expected cached value for cache key ${JSON.stringify(cacheKey)} not to be a ${JSON.stringify(ctx.kind)} kind, got "FETCH" instead.`), "__NEXT_ERROR_CODE", {
                value: "E652",
                enumerable: false,
                configurable: true
            });
        }
        let entry = null;
        const { isFallback } = ctx;
        const cacheControl = this.cacheControls.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$to$2d$route$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toRoute"])(cacheKey));
        let isStale;
        let revalidateAfter;
        if ((cacheData == null ? void 0 : cacheData.lastModified) === -1) {
            isStale = -1;
            revalidateAfter = -1 * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR_SECONDS"] * 1000;
        } else {
            const now = performance.timeOrigin + performance.now();
            const lastModified = (cacheData == null ? void 0 : cacheData.lastModified) || now;
            revalidateAfter = this.calculateRevalidate(cacheKey, lastModified, this.dev ?? false, ctx.isFallback);
            // If the route's `expire` time has passed, force a blocking revalidation
            // by signalling `isStale = -1`. The response cache treats `-1` as "skip
            // the early SWR resolve" and awaits a fresh render before the user sees a
            // response.
            const expireAfter = typeof (cacheControl == null ? void 0 : cacheControl.expire) === 'number' ? cacheControl.expire * 1000 + lastModified : undefined;
            if (expireAfter !== undefined && expireAfter < now) {
                isStale = -1;
            } else {
                var _cacheData_value3, _cacheData_value4;
                isStale = revalidateAfter !== false && revalidateAfter < now ? true : undefined;
                // If the stale time couldn't be determined based on the revalidation
                // time, we check if the tags are expired or stale.
                if (isStale === undefined && ((cacheData == null ? void 0 : (_cacheData_value3 = cacheData.value) == null ? void 0 : _cacheData_value3.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE || (cacheData == null ? void 0 : (_cacheData_value4 = cacheData.value) == null ? void 0 : _cacheData_value4.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_ROUTE)) {
                    var _cacheData_value_headers;
                    const tagsHeader = (_cacheData_value_headers = cacheData.value.headers) == null ? void 0 : _cacheData_value_headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                    if (typeof tagsHeader === 'string') {
                        const cacheTags = tagsHeader.split(',');
                        if (cacheTags.length > 0) {
                            if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["areTagsExpired"])(cacheTags, lastModified)) {
                                isStale = -1;
                            } else if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$lib$2f$incremental$2d$cache$2f$tags$2d$manifest$2e$external$2e$js$2c$__cjs$29$__["areTagsStale"])(cacheTags, lastModified)) {
                                isStale = true;
                            }
                        }
                    }
                }
            }
        }
        if (cacheData) {
            entry = {
                isStale,
                cacheControl,
                revalidateAfter,
                value: cacheData.value,
                isFallback
            };
        }
        if (!cacheData && this.prerenderManifest.notFoundRoutes.includes(cacheKey)) {
            // for the first hit after starting the server the cache
            // may not have a way to save notFound: true so if
            // the prerender-manifest marks this as notFound then we
            // return that entry and trigger a cache set to give it a
            // chance to update in-memory entries
            entry = {
                isStale,
                value: null,
                cacheControl,
                revalidateAfter,
                isFallback
            };
            this.set(cacheKey, entry.value, {
                ...ctx,
                cacheControl
            });
        }
        return entry;
    }
    async set(pathname, data, ctx) {
        // Even if we otherwise disable caching for testMode or if no fetchCache is
        // configured we still always stash results in the resume data cache if one
        // exists. This is because this is a transient in memory cache that
        // populates caches ahead of a dynamic render in dev mode to allow the RSC
        // debug info to have the right environment associated to it.
        if ((data == null ? void 0 : data.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
            const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
            const resumeDataCache = workUnitStore ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["getResumeDataCache"])(workUnitStore) : null;
            if (resumeDataCache == null ? void 0 : resumeDataCache.mutable) {
                if (IncrementalCache.debug) {
                    console.log('IncrementalCache: rdc:set', pathname);
                }
                resumeDataCache.fetch.set(pathname, data);
            }
        }
        if (this.disableForTestmode || this.dev && !ctx.fetchCache) return;
        pathname = this._getPathname(pathname, ctx.fetchCache);
        // FetchCache has upper limit of 2MB per-entry currently
        const itemSize = JSON.stringify(data).length;
        if (ctx.fetchCache && itemSize > 2 * 1024 * 1024 && // We ignore the size limit when custom cache handler is being used, as it
        // might not have this limit
        !this.hasCustomCacheHandler && // We also ignore the size limit when it's an implicit build-time-only
        // caching that the user isn't even aware of.
        !ctx.isImplicitBuildTimeCache) {
            const warningText = `Failed to set Next.js data cache for ${ctx.fetchUrl || pathname}, items over 2MB can not be cached (${itemSize} bytes)`;
            if (this.dev) {
                throw Object.defineProperty(new Error(warningText), "__NEXT_ERROR_CODE", {
                    value: "E1003",
                    enumerable: false,
                    configurable: true
                });
            }
            console.warn(warningText);
            return;
        }
        try {
            var _this_cacheHandler;
            if (!ctx.fetchCache && ctx.cacheControl) {
                this.cacheControls.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$to$2d$route$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toRoute"])(pathname), ctx.cacheControl);
            }
            await ((_this_cacheHandler = this.cacheHandler) == null ? void 0 : _this_cacheHandler.set(pathname, data, ctx));
        } catch (error) {
            console.warn('Failed to update prerender cache for', pathname, error);
        }
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/is-rsc-request.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Normalizes the raw RSC header value. Only the literal string "1" is treated
 * as a valid RSC request marker; malformed or repeated values are ignored.
 */ __turbopack_context__.s([
    "isRSCRequestHeader",
    ()=>isRSCRequestHeader
]);
function isRSCRequestHeader(value) {
    return value === '1';
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/lazy-result.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Calls the given function only when the returned promise-like object is
 * awaited. Afterwards, it provides the resolved value synchronously as `value`
 * property.
 */ __turbopack_context__.s([
    "createLazyResult",
    ()=>createLazyResult,
    "isResolvedLazyResult",
    ()=>isResolvedLazyResult
]);
function createLazyResult(fn) {
    let pendingResult;
    const result = {
        then (onfulfilled, onrejected) {
            if (!pendingResult) {
                pendingResult = Promise.resolve(fn());
            }
            pendingResult.then((value)=>{
                result.value = value;
            }).catch(()=>{
            // The externally awaited result will be rejected via `onrejected`. We
            // don't need to handle it here. But we do want to avoid an unhandled
            // rejection.
            });
            return pendingResult.then(onfulfilled, onrejected);
        }
    };
    return result;
}
function isResolvedLazyResult(result) {
    return result.hasOwnProperty('value');
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/lru-cache.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LRUCache",
    ()=>LRUCache
]);
/**
 * Node in the doubly-linked list used for LRU tracking.
 * Each node represents a cache entry with bidirectional pointers.
 */ class LRUNode {
    constructor(key, data, size){
        this.prev = null;
        this.next = null;
        this.key = key;
        this.data = data;
        this.size = size;
    }
}
/**
 * Sentinel node used for head/tail boundaries.
 * These nodes don't contain actual cache data but simplify list operations.
 */ class SentinelNode {
    constructor(){
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    constructor(maxSize, calculateSize, onEvict){
        this.cache = new Map();
        this.totalSize = 0;
        this.maxSize = maxSize;
        this.calculateSize = calculateSize;
        this.onEvict = onEvict;
        // Create sentinel nodes to simplify doubly-linked list operations
        // HEAD <-> TAIL (empty list)
        this.head = new SentinelNode();
        this.tail = new SentinelNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    /**
   * Adds a node immediately after the head (marks as most recently used).
   * Used when inserting new items or when an item is accessed.
   * PRECONDITION: node must be disconnected (prev/next should be null)
   */ addToHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        // head.next is always non-null (points to tail or another node)
        this.head.next.prev = node;
        this.head.next = node;
    }
    /**
   * Removes a node from its current position in the doubly-linked list.
   * Updates the prev/next pointers of adjacent nodes to maintain list integrity.
   * PRECONDITION: node must be connected (prev/next are non-null)
   */ removeNode(node) {
        // Connected nodes always have non-null prev/next
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    /**
   * Moves an existing node to the head position (marks as most recently used).
   * This is the core LRU operation - accessed items become most recent.
   */ moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }
    /**
   * Removes and returns the least recently used node (the one before tail).
   * This is called during eviction when the cache exceeds capacity.
   * PRECONDITION: cache is not empty (ensured by caller)
   */ removeTail() {
        const lastNode = this.tail.prev;
        // tail.prev is always non-null and always LRUNode when cache is not empty
        this.removeNode(lastNode);
        return lastNode;
    }
    /**
   * Sets a key-value pair in the cache.
   * If the key exists, updates the value and moves to head.
   * If new, adds at head and evicts from tail if necessary.
   *
   * Time Complexity:
   * - O(1) for uniform item sizes
   * - O(k) where k is the number of items evicted (can be O(N) for variable sizes)
   */ set(key, value) {
        const size = (this.calculateSize == null ? void 0 : this.calculateSize.call(this, value, key)) ?? 1;
        if (size <= 0) {
            throw Object.defineProperty(new Error(`LRUCache: calculateSize returned ${size}, but size must be > 0. ` + `Items with size 0 would never be evicted, causing unbounded cache growth.`), "__NEXT_ERROR_CODE", {
                value: "E1045",
                enumerable: false,
                configurable: true
            });
        }
        if (size > this.maxSize) {
            console.warn('Single item size exceeds maxSize');
            return false;
        }
        const existing = this.cache.get(key);
        if (existing) {
            // Update existing node: adjust size and move to head (most recent)
            existing.data = value;
            this.totalSize = this.totalSize - existing.size + size;
            existing.size = size;
            this.moveToHead(existing);
        } else {
            // Add new node at head (most recent position)
            const newNode = new LRUNode(key, value, size);
            this.cache.set(key, newNode);
            this.addToHead(newNode);
            this.totalSize += size;
        }
        // Evict least recently used items until under capacity
        while(this.totalSize > this.maxSize && this.cache.size > 0){
            const tail = this.removeTail();
            this.cache.delete(tail.key);
            this.totalSize -= tail.size;
            this.onEvict == null ? void 0 : this.onEvict.call(this, tail.key, tail.data);
        }
        return true;
    }
    /**
   * Checks if a key exists in the cache.
   * This is a pure query operation - does NOT update LRU order.
   *
   * Time Complexity: O(1)
   */ has(key) {
        return this.cache.has(key);
    }
    /**
   * Retrieves a value by key and marks it as most recently used.
   * Moving to head maintains the LRU property for future evictions.
   *
   * Time Complexity: O(1)
   */ get(key) {
        const node = this.cache.get(key);
        if (!node) return undefined;
        // Mark as most recently used by moving to head
        this.moveToHead(node);
        return node.data;
    }
    /**
   * Returns an iterator over the cache entries. The order is outputted in the
   * order of most recently used to least recently used.
   */ *[Symbol.iterator]() {
        let current = this.head.next;
        while(current && current !== this.tail){
            // Between head and tail, current is always LRUNode
            const node = current;
            yield [
                node.key,
                node.data
            ];
            current = current.next;
        }
    }
    /**
   * Removes a specific key from the cache.
   * Updates both the hash map and doubly-linked list.
   *
   * Note: This is an explicit removal and does NOT trigger the `onEvict`
   * callback. Use this for intentional deletions where eviction tracking
   * is not needed.
   *
   * Time Complexity: O(1)
   */ remove(key) {
        const node = this.cache.get(key);
        if (!node) return;
        this.removeNode(node);
        this.cache.delete(key);
        this.totalSize -= node.size;
    }
    /**
   * Returns the number of items in the cache.
   */ get size() {
        return this.cache.size;
    }
    /**
   * Returns the current total size of all cached items.
   * This uses the custom size calculation if provided.
   */ get currentSize() {
        return this.totalSize;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/to-route.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This transforms a URL pathname into a route. It removes any trailing slashes
 * and the `/index` suffix.
 *
 * @param pathname - The URL path that needs to be optimized.
 * @returns - The route
 *
 * @example
 * // returns '/example'
 * toRoute('/example/index/');
 *
 * @example
 * // returns '/example'
 * toRoute('/example/');
 *
 * @example
 * // returns '/'
 * toRoute('/index/');
 *
 * @example
 * // returns '/'
 * toRoute('/');
 */ __turbopack_context__.s([
    "toRoute",
    ()=>toRoute
]);
function toRoute(pathname) {
    return pathname.replace(/(?:\/index)?\/?$/, '') || '/';
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppRenderSpan",
    ()=>AppRenderSpan,
    "AppRouteRouteHandlersSpan",
    ()=>AppRouteRouteHandlersSpan,
    "BaseServerSpan",
    ()=>BaseServerSpan,
    "LoadComponentsSpan",
    ()=>LoadComponentsSpan,
    "LogSpanAllowList",
    ()=>LogSpanAllowList,
    "MiddlewareSpan",
    ()=>MiddlewareSpan,
    "NextNodeServerSpan",
    ()=>NextNodeServerSpan,
    "NextServerSpan",
    ()=>NextServerSpan,
    "NextVanillaSpanAllowlist",
    ()=>NextVanillaSpanAllowlist,
    "NodeSpan",
    ()=>NodeSpan,
    "RenderSpan",
    ()=>RenderSpan,
    "ResolveMetadataSpan",
    ()=>ResolveMetadataSpan,
    "RouterSpan",
    ()=>RouterSpan,
    "StartServerSpan",
    ()=>StartServerSpan
]);
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
var BaseServerSpan = /*#__PURE__*/ function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
    return BaseServerSpan;
}(BaseServerSpan || {});
var LoadComponentsSpan = /*#__PURE__*/ function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
    return LoadComponentsSpan;
}(LoadComponentsSpan || {});
var NextServerSpan = /*#__PURE__*/ function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getRequestHandlerWithMetadata"] = "NextServer.getRequestHandlerWithMetadata";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
    return NextServerSpan;
}(NextServerSpan || {});
var NextNodeServerSpan = /*#__PURE__*/ function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
    return NextNodeServerSpan;
}(NextNodeServerSpan || {});
var StartServerSpan = /*#__PURE__*/ function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
    return StartServerSpan;
}(StartServerSpan || {});
var RenderSpan = /*#__PURE__*/ function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
    return RenderSpan;
}(RenderSpan || {});
var AppRenderSpan = /*#__PURE__*/ function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
    AppRenderSpan["waitShellReady"] = "AppRender.waitShellReady";
    AppRenderSpan["renderToNodeFizzStream"] = "AppRender.renderToNodeFizzStream";
    AppRenderSpan["instantInsights"] = "AppRender.instantInsights";
    AppRenderSpan["instantInsightsPrepareValidation"] = "AppRender.instantInsights.prepareValidation";
    AppRenderSpan["instantInsightsRunValidation"] = "AppRender.instantInsights.runValidation";
    return AppRenderSpan;
}(AppRenderSpan || {});
var RouterSpan = /*#__PURE__*/ function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
    return RouterSpan;
}(RouterSpan || {});
var NodeSpan = /*#__PURE__*/ function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
    return NodeSpan;
}(NodeSpan || {});
var AppRouteRouteHandlersSpan = /*#__PURE__*/ function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
    return AppRouteRouteHandlersSpan;
}(AppRouteRouteHandlersSpan || {});
var ResolveMetadataSpan = /*#__PURE__*/ function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
    return ResolveMetadataSpan;
}(ResolveMetadataSpan || {});
var MiddlewareSpan = /*#__PURE__*/ function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
    return MiddlewareSpan;
}(MiddlewareSpan || {});
const NextVanillaSpanAllowlist = new Set([
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
]);
const LogSpanAllowList = new Set([
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
]);
;
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BubbledError",
    ()=>BubbledError,
    "SpanKind",
    ()=>SpanKind,
    "SpanStatusCode",
    ()=>SpanStatusCode,
    "getTracer",
    ()=>getTracer,
    "isBubbledError",
    ()=>isBubbledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/is-thenable.js [middleware] (ecmascript)");
;
;
const NEXT_OTEL_PERFORMANCE_PREFIX = process.env.NEXT_OTEL_PERFORMANCE_PREFIX;
const LOCAL_SPAN_RECORDER_KEY = Symbol.for('@next/local-span-recorder');
let api;
function getLocalSpanRecorder() {
    if ("TURBOPACK compile-time truthy", 1) {
        return globalThis[LOCAL_SPAN_RECORDER_KEY];
    } else //TURBOPACK unreachable
    ;
}
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    try {
        api = __turbopack_context__.r("[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)");
    } catch (err) {
        api = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/@opentelemetry/api/index.js [middleware] (ecmascript)");
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super(), this.bubble = bubble, this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const closeSpanWithError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
            span.setAttribute('error.type', error.name);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', '0.0.1');
    }
    isOpenTelemetryEnabled() {
        var _tracerProvider_getDelegate_constructor, _tracerProvider_getDelegate;
        const activeSpan = trace.getSpan(context.active());
        if (activeSpan == null ? void 0 : activeSpan.isRecording()) {
            return true;
        }
        const tracerProvider = trace.getTracerProvider();
        if (!('getDelegate' in tracerProvider)) {
            return true;
        }
        return (tracerProvider.getDelegate == null ? void 0 : (_tracerProvider_getDelegate = tracerProvider.getDelegate.call(tracerProvider)) == null ? void 0 : (_tracerProvider_getDelegate_constructor = _tracerProvider_getDelegate.constructor) == null ? void 0 : _tracerProvider_getDelegate_constructor.name) !== 'NoopTracerProvider';
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getActiveScopeSpan() {
        const localSpanRecorder = getLocalSpanRecorder();
        const activeLocalSpan = localSpanRecorder == null ? void 0 : localSpanRecorder.getActiveLocalSpan();
        if (activeLocalSpan && (localSpanRecorder == null ? void 0 : localSpanRecorder.isOpenTelemetryIsolatedSpan(activeLocalSpan))) {
            return activeLocalSpan;
        }
        const activeSpan = trace.getSpan(context.active());
        if (activeSpan || !("TURBOPACK compile-time value", "1")) {
            return activeSpan;
        }
        return activeLocalSpan;
    }
    /**
   * Run `fn` with the active span cleared, so spans created inside become new
   * roots (or parent to incoming propagated context). Used for in-process
   * Node.js middleware so its span is a sibling of the request span, matching
   * edge middleware which runs in a detached sandbox.
   */ runWithDetachedContext(fn) {
        if (!NEXT_OTEL_PERFORMANCE_PREFIX && !this.isOpenTelemetryEnabled()) {
            return fn();
        }
        return context.with(ROOT_CONTEXT, fn);
    }
    withPropagatedContext(carrier, fn, getter, force = false) {
        const activeContext = context.active();
        if (!NEXT_OTEL_PERFORMANCE_PREFIX && !this.isOpenTelemetryEnabled() && !trace.getSpanContext(activeContext)) {
            return fn();
        }
        if (force) {
            const remoteContext = propagation.extract(ROOT_CONTEXT, carrier, getter);
            if (trace.getSpanContext(remoteContext)) {
                return context.with(remoteContext, fn);
            }
            // Preserve the current active span while still merging any extracted
            // baggage/context values from the carrier.
            const mergedContext = propagation.extract(activeContext, carrier, getter);
            return context.with(mergedContext, fn);
        }
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        const [type, fnOrOptions, fnOrEmpty] = args;
        const tracingEnabled = Boolean(NEXT_OTEL_PERFORMANCE_PREFIX) || this.isOpenTelemetryEnabled();
        const localSpanRecorder = getLocalSpanRecorder();
        const localSpanRecordingEnabled = (localSpanRecorder == null ? void 0 : localSpanRecorder.isLocalSpanRecordingEnabled()) ?? false;
        if (!tracingEnabled && !localSpanRecordingEnabled) {
            return typeof fnOrOptions === 'function' ? fnOrOptions() : fnOrEmpty();
        }
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        const parentSpan = options.parentSpan ?? this.getActiveScopeSpan();
        const isolatedParentSpan = parentSpan && (localSpanRecorder == null ? void 0 : localSpanRecorder.isOpenTelemetryIsolatedSpan(parentSpan)) ? parentSpan : undefined;
        const shouldDelegateSpan = !isolatedParentSpan && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].has(type) || process.env.NEXT_OTEL_VERBOSE === '1');
        const shouldTraceSpan = shouldDelegateSpan || ((localSpanRecorder == null ? void 0 : localSpanRecorder.isRequestInsightsEnabled()) ?? false);
        if (!shouldTraceSpan || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = isolatedParentSpan ? context.active() : this.getSpanContext(parentSpan);
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
        }
        // Check if there's already a root span in the store for this trace
        // We are intentionally not checking whether there is an active context
        // from outside of nextjs to ensure that we can provide the same level
        // of telemetry when using a custom server
        const existingRootSpanId = spanContext.getValue(rootSpanIdKey);
        const isRootSpan = typeof existingRootSpanId !== 'number' || !rootSpanAttributesStore.has(existingRootSpanId);
        const spanId = getSpanId();
        options.attributes = {
            'next.span_category': 'nextjs',
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.runWithActiveSpan(spanName, options, spanContext, tracingEnabled && shouldDelegateSpan, localSpanRecordingEnabled, isolatedParentSpan, (span)=>{
                let startTime;
                if (NEXT_OTEL_PERFORMANCE_PREFIX && type && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LogSpanAllowList"].has(type)) {
                    startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                }
                let cleanedUp = false;
                const onCleanup = ()=>{
                    if (cleanedUp) return;
                    cleanedUp = true;
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime) {
                        performance.measure(`${NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                if (fn.length > 1) {
                    try {
                        return fn(span, (err)=>{
                            if (err) {
                                closeSpanWithError(span, err);
                            } else {
                                span.end();
                            }
                        });
                    } catch (err) {
                        closeSpanWithError(span, err);
                        throw err;
                    } finally{
                        onCleanup();
                    }
                }
                try {
                    const result = fn(span);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isThenable"])(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    runWithActiveSpan(spanName, options, parentContext, tracingEnabled, localSpanRecordingEnabled, isolatedParentSpan, fn) {
        if (tracingEnabled) {
            return this.getTracerInstance().startActiveSpan(spanName, options, (span)=>fn(localSpanRecordingEnabled ? this.createLocalRecordingSpan(spanName, options, parentContext, span, isolatedParentSpan) : span));
        }
        const span = this.createLocalRecordingSpan(spanName, options, parentContext, undefined, isolatedParentSpan);
        const localSpanRecorder = getLocalSpanRecorder();
        return localSpanRecorder.withLocalSpan(span, ()=>localSpanRecorder.isOpenTelemetryIsolatedSpan(span) ? fn(span) : context.with(trace.setSpan(context.active(), span), fn, undefined, span));
    }
    createLocalRecordingSpan(name, options, parentContext, delegateSpan, isolatedParentSpan) {
        const parentSpanContext = (isolatedParentSpan == null ? void 0 : isolatedParentSpan.spanContext()) ?? trace.getSpanContext(parentContext);
        const delegateSpanContext = delegateSpan == null ? void 0 : delegateSpan.spanContext();
        return getLocalSpanRecorder().createLocalSpan({
            name,
            attributes: options.attributes,
            links: options.links,
            startTime: options.startTime,
            delegateSpan,
            traceId: (delegateSpanContext == null ? void 0 : delegateSpanContext.traceId) ?? (parentSpanContext == null ? void 0 : parentSpanContext.traceId),
            spanId: delegateSpanContext == null ? void 0 : delegateSpanContext.spanId,
            parentSpanId: parentSpanContext == null ? void 0 : parentSpanContext.spanId,
            isolateOpenTelemetry: isolatedParentSpan !== undefined
        });
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].has(name) && process.env.NEXT_OTEL_VERBOSE !== '1' && !("TURBOPACK compile-time value", "1")) //TURBOPACK unreachable
        ;
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, passedOptions] = args;
        const options = passedOptions ? {
            ...passedOptions,
            attributes: {
                'next.span_category': 'nextjs',
                ...passedOptions.attributes
            }
        } : {
            attributes: {
                'next.span_category': 'nextjs'
            }
        };
        const localSpanRecorder = getLocalSpanRecorder();
        const parentSpan = options.parentSpan ?? this.getActiveScopeSpan();
        const isolatedParentSpan = parentSpan && (localSpanRecorder == null ? void 0 : localSpanRecorder.isOpenTelemetryIsolatedSpan(parentSpan)) ? parentSpan : undefined;
        const parentContext = (isolatedParentSpan ? undefined : this.getSpanContext(parentSpan)) ?? context.active();
        const localSpanRecordingEnabled = (localSpanRecorder == null ? void 0 : localSpanRecorder.isLocalSpanRecordingEnabled()) ?? false;
        if (!localSpanRecordingEnabled) {
            return this.getTracerInstance().startSpan(type, options, parentContext);
        }
        const delegateSpan = !isolatedParentSpan && this.isOpenTelemetryEnabled() ? this.getTracerInstance().startSpan(type, options, parentContext) : undefined;
        return this.createLocalRecordingSpan(type, options, parentContext, delegateSpan, isolatedParentSpan);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes && !attributes.has(key)) {
            attributes.set(key, value);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            var _getLocalSpanRecorder;
            const localSpan = (_getLocalSpanRecorder = getLocalSpanRecorder()) == null ? void 0 : _getLocalSpanRecorder.getActiveLocalSpan();
            if (localSpan) {
                localSpan.setAttribute(key, value);
            }
        }
    }
    withSpan(span, fn) {
        const recorder = getLocalSpanRecorder();
        if (recorder == null ? void 0 : recorder.isLocalRecordingSpan(span)) {
            return recorder.withLocalSpan(span, ()=>recorder.isOpenTelemetryIsolatedSpan(span) ? fn() : context.with(trace.setSpan(context.active(), span), fn));
        }
        return context.with(trace.setSpan(context.active(), span), fn);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/pipe-readable.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAbortError",
    ()=>isAbortError,
    "pipeNodeReadableToNodeResponse",
    ()=>pipeNodeReadableToNodeResponse,
    "pipeToNodeResponse",
    ()=>pipeToNodeResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/next-request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/detached-promise.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/client-component-renderer-logger.js [middleware] (ecmascript)");
;
;
;
;
;
function isAbortError(e) {
    return (e == null ? void 0 : e.name) === 'AbortError' || (e == null ? void 0 : e.name) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseAbortedName"];
}
const HAS_CLIENT_COMPONENT_METRICS_ENABLED = 'performance' in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX;
function createWriterFromResponse(res, waitUntilForEnd) {
    let started = false;
    // Create a promise that will resolve once the response has drained. See
    // https://nodejs.org/api/stream.html#stream_event_drain
    let drained = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DetachedPromise"]();
    function onDrain() {
        drained.resolve();
    }
    res.on('drain', onDrain);
    // If the finish event fires, it means we shouldn't block and wait for the
    // drain event.
    res.once('close', ()=>{
        res.off('drain', onDrain);
        drained.resolve();
    });
    // Create a promise that will resolve once the response has finished. See
    // https://nodejs.org/api/http.html#event-finish_1
    const finished = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DetachedPromise"]();
    res.once('finish', ()=>{
        finished.resolve();
    });
    // Create a writable stream that will write to the response.
    return new WritableStream({
        write: async (chunk)=>{
            // You'd think we'd want to use `start` instead of placing this in `write`
            // but this ensures that we don't actually flush the headers until we've
            // started writing chunks.
            if (!started) {
                started = true;
                if (HAS_CLIENT_COMPONENT_METRICS_ENABLED) {
                    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getClientComponentLoaderMetrics"])();
                    if (metrics) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                            start: metrics.clientComponentLoadStart,
                            end: metrics.clientComponentLoadStart + metrics.clientComponentLoadTimes
                        });
                    }
                }
                res.flushHeaders();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextNodeServerSpan"].startResponse, {
                    spanName: 'start response'
                }, ()=>undefined);
            }
            try {
                const ok = res.write(chunk);
                // Added by the `compression` middleware, this is a function that will
                // flush the partially-compressed response to the client.
                if ('flush' in res && typeof res.flush === 'function') {
                    res.flush();
                }
                // If the write returns false, it means there's some backpressure, so
                // wait until it's streamed before continuing.
                if (!ok) {
                    await drained.promise;
                    // Reset the drained promise so that we can wait for the next drain event.
                    drained = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DetachedPromise"]();
                }
            } catch (err) {
                res.end();
                throw Object.defineProperty(new Error('failed to write chunk to response', {
                    cause: err
                }), "__NEXT_ERROR_CODE", {
                    value: "E321",
                    enumerable: false,
                    configurable: true
                });
            }
        },
        abort: (err)=>{
            if (res.writableFinished) return;
            res.destroy(err);
        },
        close: async ()=>{
            // if a waitUntil promise was passed, wait for it to resolve before
            // ending the response.
            if (waitUntilForEnd) {
                await waitUntilForEnd;
            }
            if (res.writableFinished) return;
            res.end();
            return finished.promise;
        }
    });
}
async function pipeToNodeResponse(readable, res, waitUntilForEnd) {
    try {
        // If the response has already errored, then just return now.
        const { errored, destroyed } = res;
        if (errored || destroyed) return;
        // Create a new AbortController so that we can abort the readable if the
        // client disconnects.
        const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createAbortController"])(res);
        const writer = createWriterFromResponse(res, waitUntilForEnd);
        await readable.pipeTo(writer, {
            signal: controller.signal
        });
    } catch (err) {
        // If this isn't related to an abort error, re-throw it.
        if (isAbortError(err)) return;
        throw Object.defineProperty(new Error('failed to pipe response', {
            cause: err
        }), "__NEXT_ERROR_CODE", {
            value: "E180",
            enumerable: false,
            configurable: true
        });
    }
}
async function pipeNodeReadableToNodeResponse(readable, res, waitUntilForEnd) {
    try {
        const { errored, destroyed } = res;
        if (errored || destroyed) return;
        let started = false;
        const finished = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        res.once('close', ()=>{
            readable.destroy();
            finished.resolve();
        });
        readable.on('data', (chunk)=>{
            if (!started) {
                started = true;
                if ('performance' in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
                    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getClientComponentLoaderMetrics"])();
                    if (metrics) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                            start: metrics.clientComponentLoadStart,
                            end: metrics.clientComponentLoadStart + metrics.clientComponentLoadTimes
                        });
                    }
                }
                res.flushHeaders();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextNodeServerSpan"].startResponse, {
                    spanName: 'start response'
                }, ()=>undefined);
            }
            const ok = res.write(chunk);
            if ('flush' in res && typeof res.flush === 'function') {
                res.flush();
            }
            if (!ok) {
                readable.pause();
                res.once('drain', ()=>{
                    readable.resume();
                });
            }
        });
        readable.on('end', async ()=>{
            if (waitUntilForEnd) {
                await waitUntilForEnd;
            }
            if (!res.writableFinished) {
                res.end();
            }
            finished.resolve();
        });
        readable.on('error', (err)=>{
            if (isAbortError(err)) {
                finished.resolve();
                return;
            }
            res.destroy(err);
            finished.resolve();
        });
        await finished.promise;
    } catch (err) {
        if (isAbortError(err)) return;
        throw Object.defineProperty(new Error('failed to pipe response', {
            cause: err
        }), "__NEXT_ERROR_CODE", {
            value: "E180",
            enumerable: false,
            configurable: true
        });
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/render-result.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/pipe-readable.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)");
;
;
;
function isNodeReadable(value) {
    return value !== null && typeof value === 'object' && typeof value.pipe === 'function' && typeof value.on === 'function' && !(value instanceof ReadableStream);
}
class RenderResult {
    static #_ = /**
   * A render result that represents an empty response. This is used to
   * represent a response that was not found or was already sent.
   */ this.EMPTY = new RenderResult(null, {
        metadata: {},
        contentType: null
    });
    /**
   * Creates a new RenderResult instance from a static response.
   *
   * @param value the static response value
   * @param contentType the content type of the response
   * @returns a new RenderResult instance
   */ static fromStatic(value, contentType) {
        return new RenderResult(value, {
            metadata: {},
            contentType
        });
    }
    constructor(response, { contentType, waitUntil, metadata }){
        this.response = response;
        this.contentType = contentType;
        this.metadata = metadata;
        this.waitUntil = waitUntil;
    }
    assignMetadata(metadata) {
        Object.assign(this.metadata, metadata);
    }
    /**
   * Returns true if the response is null. It can be null if the response was
   * not found or was already sent.
   */ get isNull() {
        return this.response === null;
    }
    /**
   * Returns false if the response is a string. It can be a string if the page
   * was prerendered. If it's not, then it was generated dynamically.
   */ get isDynamic() {
        return typeof this.response !== 'string';
    }
    toUnchunkedString(stream = false) {
        if (this.response === null) {
            // If the response is null, return an empty string. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return '';
        }
        if (typeof this.response !== 'string') {
            if (!stream) {
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('dynamic responses cannot be unchunked. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
                    value: "E732",
                    enumerable: false,
                    configurable: true
                });
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["streamToString"])(this.readable);
        }
        return this.response;
    }
    /**
   * Returns a readable stream of the response.
   */ get readable() {
        if (this.response === null) {
            // If the response is null, return an empty stream. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return new ReadableStream({
                start (controller) {
                    controller.close();
                }
            });
        }
        if (typeof this.response === 'string') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["streamFromString"])(this.response);
        }
        if (Buffer.isBuffer(this.response)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["streamFromBuffer"])(this.response);
        }
        // If the response is an array of streams, then chain them together.
        if (Array.isArray(this.response)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["chainStreams"])(...this.response);
        }
        if (isNodeReadable(this.response)) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                let Readable;
                if ("TURBOPACK compile-time truthy", 1) {
                    Readable = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Readable;
                } else //TURBOPACK unreachable
                ;
                return Readable.toWeb(this.response);
            }
        }
        return this.response;
    }
    /**
   * Coerces the response to an array of streams. This will convert the response
   * to an array of streams if it is not already one.
   *
   * @returns An array of streams
   */ coerce() {
        if (this.response === null) {
            // If the response is null, return an empty stream. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return [];
        }
        if (typeof this.response === 'string') {
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["streamFromString"])(this.response)
            ];
        } else if (Array.isArray(this.response)) {
            return this.response;
        } else if (Buffer.isBuffer(this.response)) {
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["streamFromBuffer"])(this.response)
            ];
        } else if (isNodeReadable(this.response)) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                let Readable;
                if ("TURBOPACK compile-time truthy", 1) {
                    Readable = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Readable;
                } else //TURBOPACK unreachable
                ;
                return [
                    Readable.toWeb(this.response)
                ];
            }
        } else {
            return [
                this.response
            ];
        }
    }
    /**
   * Pipes the response through a transform stream. This converts the response
   * to a single readable stream (chaining if needed) and pipes it through the
   * provided transform.
   *
   * @param transform The transform stream to pipe through
   */ pipeThrough(transform) {
        this.response = this.readable.pipeThrough(transform);
    }
    /**
   * Unshifts a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the start of the array. When this response is piped, all of the streams
   * will be piped one after the other.
   *
   * @param readable The new stream to unshift
   */ unshift(readable) {
        // Coerce the response to an array of streams.
        this.response = this.coerce();
        // Add the new stream to the start of the array.
        this.response.unshift(readable);
    }
    /**
   * Chains a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the end. When this response is piped, all of the streams will be piped
   * one after the other.
   *
   * @param readable The new stream to chain
   */ push(readable) {
        // Coerce the response to an array of streams.
        this.response = this.coerce();
        // Add the new stream to the end of the array.
        this.response.push(readable);
    }
    /**
   * Pipes the response to a writable stream. This will close/cancel the
   * writable stream if an error is encountered. If this doesn't throw, then
   * the writable stream will be closed or aborted.
   *
   * @param writable Writable stream to pipe the response to
   */ async pipeTo(writable) {
        try {
            await this.readable.pipeTo(writable, {
                // We want to close the writable stream ourselves so that we can wait
                // for the waitUntil promise to resolve before closing it. If an error
                // is encountered, we'll abort the writable stream if we swallowed the
                // error.
                preventClose: true
            });
            // If there is a waitUntil promise, wait for it to resolve before
            // closing the writable stream.
            if (this.waitUntil) await this.waitUntil;
            // Close the writable stream.
            await writable.close();
        } catch (err) {
            // If this is an abort error, we should abort the writable stream (as we
            // took ownership of it when we started piping). We don't need to re-throw
            // because we handled the error.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isAbortError"])(err)) {
                // Abort the writable stream if an error is encountered.
                await writable.abort(err);
                return;
            }
            // We're not aborting the writer here as when this method throws it's not
            // clear as to how so the caller should assume it's their responsibility
            // to clean up the writer.
            throw err;
        }
    }
    /**
   * Pipes the response to a node response. This will close/cancel the node
   * response if an error is encountered.
   *
   * @param res
   */ async pipeToNodeResponse(res) {
        if (this.response !== null && typeof this.response !== 'string' && !Buffer.isBuffer(this.response) && !Array.isArray(this.response) && isNodeReadable(this.response)) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pipeNodeReadableToNodeResponse"])(this.response, res, this.waitUntil);
            return;
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pipeToNodeResponse"])(this.readable, res, this.waitUntil);
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/request-meta.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// FIXME: (wyattjoh) this is a temporary solution to allow us to pass data between bundled modules
__turbopack_context__.s([
    "NEXT_REQUEST_META",
    ()=>NEXT_REQUEST_META,
    "addRequestMeta",
    ()=>addRequestMeta,
    "getRequestMeta",
    ()=>getRequestMeta,
    "removeRequestMeta",
    ()=>removeRequestMeta,
    "setRequestMeta",
    ()=>setRequestMeta
]);
const NEXT_REQUEST_META = Symbol.for('NextInternalRequestMeta');
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === 'string' ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return meta;
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function removeRequestMeta(request, key) {
    const meta = getRequestMeta(request);
    delete meta[key];
    return setRequestMeta(request, meta);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/response-cache/index.js [middleware] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponseCache
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/batcher.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/lru-cache.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/build/output/log.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/scheduler.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/response-cache/utils.js [middleware] (ecmascript)");
;
;
;
;
;
/**
 * Parses an environment variable as a positive integer, returning the fallback
 * if the value is missing, not a number, or not positive.
 */ function parsePositiveInt(envValue, fallback) {
    if (!envValue) return fallback;
    const parsed = parseInt(envValue, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
/**
 * Default TTL (in milliseconds) for minimal mode response cache entries.
 * Used for cache hit validation as a fallback for providers that don't
 * send the x-invocation-id header yet.
 *
 * 10 seconds chosen because:
 * - Long enough to dedupe rapid successive requests (e.g., page + data)
 * - Short enough to not serve stale data across unrelated requests
 *
 * Can be configured via `NEXT_PRIVATE_RESPONSE_CACHE_TTL` environment variable.
 */ const DEFAULT_TTL_MS = parsePositiveInt(process.env.NEXT_PRIVATE_RESPONSE_CACHE_TTL, 10000);
/**
 * Default maximum number of entries in the response cache.
 * Can be configured via `NEXT_PRIVATE_RESPONSE_CACHE_MAX_SIZE` environment variable.
 */ const DEFAULT_MAX_SIZE = parsePositiveInt(process.env.NEXT_PRIVATE_RESPONSE_CACHE_MAX_SIZE, 150);
/**
 * Separator used in compound cache keys to join pathname and invocationID.
 * Using null byte (\0) since it cannot appear in valid URL paths or UUIDs.
 */ const KEY_SEPARATOR = '\0';
/**
 * Sentinel value used for TTL-based cache entries (when invocationID is undefined).
 * Chosen to be a clearly reserved marker for internal cache keys.
 */ const TTL_SENTINEL = '__ttl_sentinel__';
/**
 * Creates a compound cache key from pathname and invocationID.
 */ function createCacheKey(pathname, invocationID) {
    return `${pathname}${KEY_SEPARATOR}${invocationID ?? TTL_SENTINEL}`;
}
/**
 * Extracts the invocationID from a compound cache key.
 * Returns undefined if the key used TTL_SENTINEL.
 */ function extractInvocationID(compoundKey) {
    const separatorIndex = compoundKey.lastIndexOf(KEY_SEPARATOR);
    if (separatorIndex === -1) return undefined;
    const invocationID = compoundKey.slice(separatorIndex + 1);
    return invocationID === TTL_SENTINEL ? undefined : invocationID;
}
;
class ResponseCache {
    constructor(minimal_mode, maxSize = DEFAULT_MAX_SIZE, ttl = DEFAULT_TTL_MS){
        this.getBatcher = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Batcher"].create({
            // Ensure on-demand revalidate doesn't block normal requests, it should be
            // safe to run an on-demand revalidate for the same key as a normal request.
            cacheKeyFn: ({ key, isOnDemandRevalidate })=>`${key}-${isOnDemandRevalidate ? '1' : '0'}`,
            // We wait to do any async work until after we've added our promise to
            // `pendingResponses` to ensure that any any other calls will reuse the
            // same promise until we've fully finished our work.
            schedulerFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["scheduleOnNextTick"]
        });
        this.revalidateBatcher = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["Batcher"].create({
            // We wait to do any async work until after we've added our promise to
            // `pendingResponses` to ensure that any any other calls will reuse the
            // same promise until we've fully finished our work.
            schedulerFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["scheduleOnNextTick"]
        });
        /**
   * Set of invocation IDs that have had cache entries evicted.
   * Used to detect when the cache size may be too small.
   * Bounded to prevent memory growth.
   */ this.evictedInvocationIDs = new Set();
        this.minimal_mode = minimal_mode;
        this.maxSize = maxSize;
        this.ttl = ttl;
        // Create the LRU cache with eviction tracking
        this.cache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["LRUCache"](maxSize, undefined, (compoundKey)=>{
            const invocationID = extractInvocationID(compoundKey);
            if (invocationID) {
                // Bound to 100 entries to prevent unbounded memory growth.
                // FIFO eviction is acceptable here because:
                // 1. Invocations are short-lived (single request lifecycle), so older
                //    invocations are unlikely to still be active after 100 newer ones
                // 2. This warning mechanism is best-effort for developer guidance—
                //    missing occasional eviction warnings doesn't affect correctness
                // 3. If a long-running invocation is somehow evicted and then has
                //    another cache entry evicted, it will simply be re-added
                if (this.evictedInvocationIDs.size >= 100) {
                    const first = this.evictedInvocationIDs.values().next().value;
                    if (first) this.evictedInvocationIDs.delete(first);
                }
                this.evictedInvocationIDs.add(invocationID);
            }
        });
    }
    /**
   * Gets the response cache entry for the given key.
   *
   * @param key - The key to get the response cache entry for.
   * @param responseGenerator - The response generator to use to generate the response cache entry.
   * @param context - The context for the get request.
   * @returns The response cache entry.
   */ async get(key, responseGenerator, context) {
        // If there is no key for the cache, we can't possibly look this up in the
        // cache so just return the result of the response generator.
        if (!key) {
            return responseGenerator({
                hasResolved: false,
                previousCacheEntry: null
            });
        }
        // Check minimal mode cache before doing any other work.
        if (this.minimal_mode) {
            const cacheKey = createCacheKey(key, context.invocationID);
            const cachedItem = this.cache.get(cacheKey);
            if (cachedItem) {
                // With invocationID: exact match found - always a hit
                // With TTL mode: must check expiration
                if (context.invocationID !== undefined) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toResponseCacheEntry"])(cachedItem.entry);
                }
                // TTL mode: check expiration
                const now = Date.now();
                if (cachedItem.expiresAt > now) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toResponseCacheEntry"])(cachedItem.entry);
                }
                // TTL expired - clean up
                this.cache.remove(cacheKey);
            }
            // Warn if this invocation had entries evicted - indicates cache may be too small.
            if (context.invocationID && this.evictedInvocationIDs.has(context.invocationID)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["warnOnce"])(`Response cache entry was evicted for invocation ${context.invocationID}. ` + `Consider increasing NEXT_PRIVATE_RESPONSE_CACHE_MAX_SIZE (current: ${this.maxSize}).`);
            }
        }
        const { incrementalCache, isOnDemandRevalidate = false, isFallback = false, isRoutePPREnabled = false, isPrefetch = false, waitUntil, routeKind, invocationID } = context;
        const response = await this.getBatcher.batch({
            key,
            isOnDemandRevalidate
        }, ({ resolve })=>{
            const promise = this.handleGet(key, responseGenerator, {
                incrementalCache,
                isOnDemandRevalidate,
                isFallback,
                isRoutePPREnabled,
                isPrefetch,
                routeKind,
                invocationID
            }, resolve);
            // We need to ensure background revalidates are passed to waitUntil.
            if (waitUntil) waitUntil(promise);
            return promise;
        });
        if (this.minimal_mode && (response == null ? void 0 : response.cacheControl)) {
            const cacheKey = createCacheKey(key, invocationID);
            this.cache.set(cacheKey, {
                entry: response,
                expiresAt: Date.now() + this.ttl
            });
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toResponseCacheEntry"])(response);
    }
    /**
   * Handles the get request for the response cache.
   *
   * @param key - The key to get the response cache entry for.
   * @param responseGenerator - The response generator to use to generate the response cache entry.
   * @param context - The context for the get request.
   * @param resolve - The resolve function to use to resolve the response cache entry.
   * @returns The response cache entry.
   */ async handleGet(key, responseGenerator, context, resolve) {
        let previousIncrementalCacheEntry = null;
        let resolved = false;
        try {
            // Get the previous cache entry if not in minimal mode
            previousIncrementalCacheEntry = !this.minimal_mode ? await context.incrementalCache.get(key, {
                kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["routeKindToIncrementalCacheKind"])(context.routeKind),
                isRoutePPREnabled: context.isRoutePPREnabled,
                isFallback: context.isFallback
            }) : null;
            // `isStale === -1` signals that the entry is past its `expire` (either
            // via an expired tag or, with `cacheLife({ expire })`, past the route's
            // expire time in the prerender manifest). In that case we must NOT
            // early-resolve with the stale value — instead we fall through to a
            // blocking revalidation so the response returned to the user is fresh.
            if (previousIncrementalCacheEntry && !context.isOnDemandRevalidate && previousIncrementalCacheEntry.isStale !== -1) {
                resolve(previousIncrementalCacheEntry);
                resolved = true;
                if (!previousIncrementalCacheEntry.isStale || context.isPrefetch) {
                    // The cached value is still valid, so we don't need to update it yet.
                    return previousIncrementalCacheEntry;
                }
            }
            // Revalidate the cache entry.
            //
            // A prefetch request that missed must run its own response generator
            // rather than joining an in-flight revalidation through the batcher. A
            // background revalidation may be regenerating the concrete (non-fallback)
            // entry for this route — e.g. an ISR fallback-shell upgrade scheduled by
            // an earlier prefetch sub-request. Joining it would serve that concrete
            // result to the prefetch instead of the fallback shell, and which segment
            // wins would depend purely on request timing. Running the generator
            // directly lets every prefetch segment take the same fallback-shell path,
            // independent of any concurrent background upgrade.
            const incrementalResponseCacheEntry = context.isPrefetch && previousIncrementalCacheEntry === null ? await this.handleRevalidate(key, context.incrementalCache, context.isRoutePPREnabled, context.isFallback, responseGenerator, previousIncrementalCacheEntry, resolved) : await this.revalidate(key, context.incrementalCache, context.isRoutePPREnabled, context.isFallback, responseGenerator, previousIncrementalCacheEntry, resolved);
            // Handle null response
            if (!incrementalResponseCacheEntry) {
                // Remove the cache item if it was set so we don't use it again.
                if (this.minimal_mode) {
                    const cacheKey = createCacheKey(key, context.invocationID);
                    this.cache.remove(cacheKey);
                }
                return null;
            }
            // Resolve for on-demand revalidation or if not already resolved
            if (context.isOnDemandRevalidate && !resolved) {
                return incrementalResponseCacheEntry;
            }
            return incrementalResponseCacheEntry;
        } catch (err) {
            // If we've already resolved the cache entry, we can't reject as we
            // already resolved the cache entry so log the error here.
            if (resolved) {
                console.error(err);
                return null;
            }
            throw err;
        }
    }
    /**
   * Revalidates the cache entry for the given key.
   *
   * @param key - The key to revalidate the cache entry for.
   * @param incrementalCache - The incremental cache to use to revalidate the cache entry.
   * @param isRoutePPREnabled - Whether the route is PPR enabled.
   * @param isFallback - Whether the route is a fallback.
   * @param responseGenerator - The response generator to use to generate the response cache entry.
   * @param previousIncrementalCacheEntry - The previous cache entry to use to revalidate the cache entry.
   * @param hasResolved - Whether the response has been resolved.
   * @param waitUntil - Optional function to register background work.
   * @param invocationID - The invocation ID for cache key scoping.
   * @returns The revalidated cache entry.
   */ async revalidate(key, incrementalCache, isRoutePPREnabled, isFallback, responseGenerator, previousIncrementalCacheEntry, hasResolved, waitUntil) {
        return this.revalidateBatcher.batch(key, ()=>{
            const promise = this.handleRevalidate(key, incrementalCache, isRoutePPREnabled, isFallback, responseGenerator, previousIncrementalCacheEntry, hasResolved);
            // We need to ensure background revalidates are passed to waitUntil.
            if (waitUntil) waitUntil(promise);
            return promise;
        });
    }
    async handleRevalidate(key, incrementalCache, isRoutePPREnabled, isFallback, responseGenerator, previousIncrementalCacheEntry, hasResolved) {
        try {
            // Generate the response cache entry using the response generator.
            const responseCacheEntry = await responseGenerator({
                hasResolved,
                previousCacheEntry: previousIncrementalCacheEntry,
                isRevalidating: true
            });
            if (!responseCacheEntry) {
                return null;
            }
            // Convert the response cache entry to an incremental response cache entry.
            const incrementalResponseCacheEntry = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromResponseCacheEntry"])({
                ...responseCacheEntry,
                isMiss: !previousIncrementalCacheEntry
            });
            // We want to persist the result only if it has a cache control value
            // defined. The minimal mode LRU write is handled in get() so that
            // every caller — including batched invocations — populates the cache.
            if (incrementalResponseCacheEntry.cacheControl && !this.minimal_mode) {
                await incrementalCache.set(key, incrementalResponseCacheEntry.value, {
                    cacheControl: incrementalResponseCacheEntry.cacheControl,
                    isRoutePPREnabled,
                    isFallback
                });
            }
            return incrementalResponseCacheEntry;
        } catch (err) {
            // When a path is erroring we automatically re-set the existing cache
            // with new revalidate and expire times to prevent non-stop retrying.
            if (previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.cacheControl) {
                const revalidate = Math.min(Math.max(previousIncrementalCacheEntry.cacheControl.revalidate || 3, 3), 30);
                const expire = previousIncrementalCacheEntry.cacheControl.expire === undefined ? undefined : Math.max(revalidate + 3, previousIncrementalCacheEntry.cacheControl.expire);
                await incrementalCache.set(key, previousIncrementalCacheEntry.value, {
                    cacheControl: {
                        revalidate: revalidate,
                        expire: expire
                    },
                    isRoutePPREnabled,
                    isFallback
                });
            }
            // We haven't resolved yet, so let's throw to indicate an error.
            throw err;
        }
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/response-cache/types.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CachedRouteKind",
    ()=>CachedRouteKind,
    "IncrementalCacheKind",
    ()=>IncrementalCacheKind
]);
var CachedRouteKind = /*#__PURE__*/ function(CachedRouteKind) {
    CachedRouteKind["APP_PAGE"] = "APP_PAGE";
    CachedRouteKind["APP_ROUTE"] = "APP_ROUTE";
    CachedRouteKind["PAGES"] = "PAGES";
    CachedRouteKind["FETCH"] = "FETCH";
    CachedRouteKind["REDIRECT"] = "REDIRECT";
    CachedRouteKind["IMAGE"] = "IMAGE";
    return CachedRouteKind;
}({});
var IncrementalCacheKind = /*#__PURE__*/ function(IncrementalCacheKind) {
    IncrementalCacheKind["APP_PAGE"] = "APP_PAGE";
    IncrementalCacheKind["APP_ROUTE"] = "APP_ROUTE";
    IncrementalCacheKind["PAGES"] = "PAGES";
    IncrementalCacheKind["FETCH"] = "FETCH";
    IncrementalCacheKind["IMAGE"] = "IMAGE";
    return IncrementalCacheKind;
}({});
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/response-cache/utils.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromResponseCacheEntry",
    ()=>fromResponseCacheEntry,
    "routeKindToIncrementalCacheKind",
    ()=>routeKindToIncrementalCacheKind,
    "toResponseCacheEntry",
    ()=>toResponseCacheEntry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/response-cache/types.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/render-result.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/route-kind.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
;
;
;
;
async function fromResponseCacheEntry(cacheEntry) {
    var _cacheEntry_value, _cacheEntry_value1;
    return {
        ...cacheEntry,
        value: ((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
            html: await cacheEntry.value.html.toUnchunkedString(true),
            pageData: cacheEntry.value.pageData,
            headers: cacheEntry.value.headers,
            status: cacheEntry.value.status
        } : ((_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
            html: await cacheEntry.value.html.toUnchunkedString(true),
            postponed: cacheEntry.value.postponed,
            rscData: cacheEntry.value.rscData,
            headers: cacheEntry.value.headers,
            status: cacheEntry.value.status,
            segmentData: cacheEntry.value.segmentData
        } : cacheEntry.value
    };
}
async function toResponseCacheEntry(response) {
    var _response_value, _response_value1;
    if (!response) return null;
    return {
        isMiss: response.isMiss,
        isStale: response.isStale,
        cacheControl: response.cacheControl,
        isFallback: response.isFallback,
        value: ((_response_value = response.value) == null ? void 0 : _response_value.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
            html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].fromStatic(response.value.html, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HTML_CONTENT_TYPE_HEADER"]),
            pageData: response.value.pageData,
            headers: response.value.headers,
            status: response.value.status
        } : ((_response_value1 = response.value) == null ? void 0 : _response_value1.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
            html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].fromStatic(response.value.html, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["HTML_CONTENT_TYPE_HEADER"]),
            rscData: response.value.rscData,
            headers: response.value.headers,
            status: response.value.status,
            postponed: response.value.postponed,
            segmentData: response.value.segmentData
        } : response.value
    };
}
function routeKindToIncrementalCacheKind(routeKind) {
    switch(routeKind){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RouteKind"].PAGES:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].PAGES;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RouteKind"].IMAGE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].IMAGE;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RouteKind"].APP_ROUTE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_ROUTE;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API:
            // Pages Router API routes are not cached in the incremental cache.
            throw Object.defineProperty(new Error(`Unexpected route kind ${routeKind}`), "__NEXT_ERROR_CODE", {
                value: "E64",
                enumerable: false,
                configurable: true
            });
        default:
            return routeKind;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/revalidation-utils.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "executeRevalidates",
    ()=>executeRevalidates,
    "withExecuteRevalidates",
    ()=>withExecuteRevalidates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$handlers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/use-cache/handlers.js [middleware] (ecmascript)");
;
async function withExecuteRevalidates(store, callback) {
    if (!store) {
        return callback();
    }
    // If we executed any revalidates during the request, then we don't want to execute them again.
    // save the state so we can check if anything changed after we're done running callbacks.
    const savedRevalidationState = cloneRevalidationState(store);
    try {
        return await callback();
    } finally{
        // Check if we have any new revalidates, and if so, wait until they are all resolved.
        const newRevalidates = diffRevalidationState(savedRevalidationState, cloneRevalidationState(store));
        await executeRevalidates(store, newRevalidates);
    }
}
function cloneRevalidationState(store) {
    return {
        pendingRevalidatedTags: store.pendingRevalidatedTags ? [
            ...store.pendingRevalidatedTags
        ] : [],
        pendingRevalidates: {
            ...store.pendingRevalidates
        },
        pendingRevalidateWrites: store.pendingRevalidateWrites ? [
            ...store.pendingRevalidateWrites
        ] : []
    };
}
function diffRevalidationState(prev, curr) {
    const prevTagsWithProfile = new Set(prev.pendingRevalidatedTags.map((item)=>{
        const profileKey = typeof item.profile === 'object' ? JSON.stringify(item.profile) : item.profile || '';
        return `${item.tag}:${profileKey}`;
    }));
    const prevRevalidateWrites = new Set(prev.pendingRevalidateWrites);
    return {
        pendingRevalidatedTags: curr.pendingRevalidatedTags.filter((item)=>{
            const profileKey = typeof item.profile === 'object' ? JSON.stringify(item.profile) : item.profile || '';
            return !prevTagsWithProfile.has(`${item.tag}:${profileKey}`);
        }),
        pendingRevalidates: Object.fromEntries(Object.entries(curr.pendingRevalidates).filter(([key])=>!(key in prev.pendingRevalidates))),
        pendingRevalidateWrites: curr.pendingRevalidateWrites.filter((promise)=>!prevRevalidateWrites.has(promise))
    };
}
async function revalidateTags(tagsWithProfile, incrementalCache, workStore) {
    if (tagsWithProfile.length === 0) {
        return;
    }
    const handlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$handlers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getCacheHandlers"])();
    const promises = [];
    // Group tags by profile for batch processing
    const tagsByProfile = new Map();
    for (const item of tagsWithProfile){
        const profile = item.profile;
        // Find existing profile by comparing values
        let existingKey = undefined;
        for (const [key] of tagsByProfile){
            if (typeof key === 'string' && typeof profile === 'string' && key === profile) {
                existingKey = key;
                break;
            }
            if (typeof key === 'object' && typeof profile === 'object' && JSON.stringify(key) === JSON.stringify(profile)) {
                existingKey = key;
                break;
            }
            if (key === profile) {
                existingKey = key;
                break;
            }
        }
        const profileKey = existingKey || profile;
        if (!tagsByProfile.has(profileKey)) {
            tagsByProfile.set(profileKey, []);
        }
        tagsByProfile.get(profileKey).push(item.tag);
    }
    // Process each profile group
    for (const [profile, tagsForProfile] of tagsByProfile){
        // Look up the cache profile from workStore if available
        let durations;
        if (profile) {
            let cacheLife;
            if (typeof profile === 'object') {
                // Profile is already a cacheLife configuration object
                cacheLife = profile;
            } else if (typeof profile === 'string') {
                // Profile is a string key, look it up in workStore
                cacheLife = workStore == null ? void 0 : workStore.cacheLifeProfiles[profile];
                if (!cacheLife) {
                    throw Object.defineProperty(new Error(`Invalid profile provided "${profile}" must be configured under cacheLife in next.config or be "max"`), "__NEXT_ERROR_CODE", {
                        value: "E873",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (cacheLife) {
                durations = {
                    expire: cacheLife.expire
                };
            }
        }
        // If profile is not found and not 'max', durations will be undefined
        // which will trigger immediate expiration in the cache handler
        for (const handler of handlers || []){
            if (profile) {
                promises.push(handler.updateTags == null ? void 0 : handler.updateTags.call(handler, tagsForProfile, durations));
            } else {
                promises.push(handler.updateTags == null ? void 0 : handler.updateTags.call(handler, tagsForProfile));
            }
        }
        if (incrementalCache) {
            promises.push(incrementalCache.revalidateTag(tagsForProfile, durations));
        }
    }
    await Promise.all(promises);
}
function executeRevalidates(workStore, state) {
    const promises = [];
    const pendingRevalidatedTags = (state == null ? void 0 : state.pendingRevalidatedTags) ?? workStore.pendingRevalidatedTags ?? [];
    if (pendingRevalidatedTags.length > 0) {
        promises.push(revalidateTags(pendingRevalidatedTags, workStore.incrementalCache, workStore));
    }
    const pendingRevalidates = Object.values((state == null ? void 0 : state.pendingRevalidates) ?? workStore.pendingRevalidates ?? {});
    promises.push(...pendingRevalidates);
    const pendingRevalidateWrites = (state == null ? void 0 : state.pendingRevalidateWrites) ?? workStore.pendingRevalidateWrites ?? [];
    promises.push(...pendingRevalidateWrites);
    if (promises.length === 0) {
        return false;
    }
    return Promise.all(promises).then(()=>undefined);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/route-kind.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteKind",
    ()=>RouteKind
]);
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({});
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/server-utils.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPreviouslyRevalidatedTags",
    ()=>getPreviouslyRevalidatedTags,
    "getServerUtils",
    ()=>getServerUtils,
    "interpolateDynamicPath",
    ()=>interpolateDynamicPath,
    "normalizeCdnUrl",
    ()=>normalizeCdnUrl,
    "normalizeDynamicRouteParams",
    ()=>normalizeDynamicRouteParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$match$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/path-match.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$prepare$2d$destination$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/prepare-destination.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$decode$2d$query$2d$path$2d$parameter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/decode-query-path-parameter.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/format-url.js [middleware] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
function filterInternalQuery(query, paramKeys) {
    // this is used to pass query information in rewrites
    // but should not be exposed in final query
    delete query['nextInternalLocale'];
    for(const key in query){
        const isNextQueryPrefix = key !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"] && key.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"]);
        const isNextInterceptionMarkerPrefix = key !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] && key.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"]);
        if (isNextQueryPrefix || isNextInterceptionMarkerPrefix || paramKeys.includes(key)) {
            delete query[key];
        }
    }
}
function normalizeCdnUrl(req, paramKeys) {
    // make sure to normalize req.url from CDNs to strip dynamic and rewrite
    // params from the query which are added during routing
    const _parsedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parseReqUrl"])(req.url);
    // we can't normalize if we can't parse
    if (!_parsedUrl) {
        return req.url;
    }
    delete _parsedUrl.search;
    filterInternalQuery(_parsedUrl.query, paramKeys);
    req.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["formatUrl"])(_parsedUrl);
}
function interpolateDynamicPath(pathname, params, defaultRouteRegex) {
    if (!defaultRouteRegex) return pathname;
    for (const param of Object.keys(defaultRouteRegex.groups)){
        const { optional, repeat } = defaultRouteRegex.groups[param];
        let builtParam = `[${repeat ? '...' : ''}${param}]`;
        if (optional) {
            builtParam = `[${builtParam}]`;
        }
        let paramValue;
        const value = params[param];
        if (Array.isArray(value)) {
            paramValue = value.map((v)=>v && encodeURIComponent(v)).join('/');
        } else if (value) {
            paramValue = encodeURIComponent(value);
        } else {
            paramValue = '';
        }
        if (paramValue || optional) {
            pathname = pathname.replaceAll(builtParam, paramValue);
        }
    }
    return pathname;
}
function normalizeDynamicRouteParams(query, defaultRouteRegex, defaultRouteMatches, ignoreMissingOptional) {
    const isDefaultValueMatch = (candidateValue, defaultValue)=>{
        if (!candidateValue) {
            return false;
        }
        let normalizedCandidateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeRscURL"])(candidateValue);
        for(let i = 0; i < 3; i++){
            if (normalizedCandidateValue === defaultValue) {
                return true;
            }
            const decodedCandidateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$decode$2d$query$2d$path$2d$parameter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decodeQueryPathParameter"])(normalizedCandidateValue);
            if (decodedCandidateValue === normalizedCandidateValue) {
                break;
            }
            normalizedCandidateValue = decodedCandidateValue;
        }
        return false;
    };
    let hasValidParams = true;
    let params = {};
    for (const key of Object.keys(defaultRouteRegex.groups)){
        let value = query[key];
        if (typeof value === 'string') {
            value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeRscURL"])(value);
        } else if (Array.isArray(value)) {
            value = value.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeRscURL"]);
        }
        // if the value matches the default value we can't rely
        // on the parsed params, this is used to signal if we need
        // to parse x-now-route-matches or not
        const defaultValue = defaultRouteMatches[key];
        const isOptional = defaultRouteRegex.groups[key].optional;
        const isDefaultValue = Array.isArray(defaultValue) ? defaultValue.some((defaultVal)=>{
            return Array.isArray(value) ? value.some((val)=>isDefaultValueMatch(val, defaultVal)) : isDefaultValueMatch(value, defaultVal);
        }) : Array.isArray(value) ? value.some((val)=>isDefaultValueMatch(val, defaultValue)) : isDefaultValueMatch(value, defaultValue);
        if (isDefaultValue || typeof value === 'undefined' && !(isOptional && ignoreMissingOptional)) {
            return {
                params: {},
                hasValidParams: false
            };
        }
        // non-provided optional values should be undefined so normalize
        // them to undefined
        if (isOptional && (!value || Array.isArray(value) && value.length === 1 && // fallback optional catch-all SSG pages have
        // [[...paramName]] for the root path on Vercel
        (value[0] === 'index' || value[0] === `[[...${key}]]`) || value === 'index' || value === `[[...${key}]]`)) {
            value = undefined;
            delete query[key];
        }
        // query values from the proxy aren't already split into arrays
        // so make sure to normalize catch-all values
        if (value && typeof value === 'string' && defaultRouteRegex.groups[key].repeat) {
            value = value.split('/');
        }
        if (value) {
            params[key] = value;
        }
    }
    return {
        params,
        hasValidParams
    };
}
function getServerUtils({ page, i18n, basePath, rewrites, pageIsDynamic, trailingSlash, caseSensitive }) {
    let defaultRouteRegex;
    let dynamicRouteMatcher;
    let defaultRouteMatches;
    if (pageIsDynamic) {
        defaultRouteRegex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getNamedRouteRegex"])(page, {
            prefixRouteKeys: false
        });
        dynamicRouteMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getRouteMatcher"])(defaultRouteRegex);
        defaultRouteMatches = dynamicRouteMatcher(page);
    }
    function handleRewrites(req, parsedUrl) {
        // Here we deep clone the parsedUrl to avoid mutating the original. We also
        // cast this to a mutable type so we can mutate it within this scope.
        const rewrittenParsedUrl = structuredClone(parsedUrl);
        const rewriteParams = {};
        let fsPathname = rewrittenParsedUrl.pathname;
        const matchesPage = ()=>{
            const fsPathnameNoSlash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(fsPathname || '');
            return fsPathnameNoSlash === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(page) || (dynamicRouteMatcher == null ? void 0 : dynamicRouteMatcher(fsPathnameNoSlash));
        };
        const checkRewrite = (rewrite)=>{
            const matcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$match$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getPathMatch"])(rewrite.source + (trailingSlash ? '(/)?' : ''), {
                removeUnnamedParams: true,
                strict: true,
                sensitive: !!caseSensitive
            });
            if (!rewrittenParsedUrl.pathname) return false;
            let params = matcher(rewrittenParsedUrl.pathname);
            if ((rewrite.has || rewrite.missing) && params) {
                const hasParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$prepare$2d$destination$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["matchHas"])(req, rewrittenParsedUrl.query, rewrite.has, rewrite.missing);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            if (params) {
                const { parsedDestination, destQuery } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$prepare$2d$destination$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["prepareDestination"])({
                    appendParamsToQuery: true,
                    destination: rewrite.destination,
                    params: params,
                    query: rewrittenParsedUrl.query
                });
                // if the rewrite destination is external break rewrite chain
                if (parsedDestination.protocol) {
                    return true;
                }
                Object.assign(rewriteParams, destQuery, params);
                Object.assign(rewrittenParsedUrl.query, parsedDestination.query);
                delete parsedDestination.query;
                Object.assign(rewrittenParsedUrl, parsedDestination);
                fsPathname = rewrittenParsedUrl.pathname;
                if (!fsPathname) return false;
                if (basePath) {
                    fsPathname = fsPathname.replace(new RegExp(`^${basePath}`), '') || '/';
                }
                if (i18n) {
                    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(fsPathname, i18n.locales);
                    fsPathname = result.pathname;
                    rewrittenParsedUrl.query.nextInternalLocale = result.detectedLocale || params.nextInternalLocale;
                }
                if (fsPathname === page) {
                    return true;
                }
                if (pageIsDynamic && dynamicRouteMatcher) {
                    const dynamicParams = dynamicRouteMatcher(fsPathname);
                    if (dynamicParams) {
                        rewrittenParsedUrl.query = {
                            ...rewrittenParsedUrl.query,
                            ...dynamicParams
                        };
                        return true;
                    }
                }
            }
            return false;
        };
        for (const rewrite of rewrites.beforeFiles || []){
            checkRewrite(rewrite);
        }
        if (fsPathname !== page) {
            let finished = false;
            for (const rewrite of rewrites.afterFiles || []){
                finished = checkRewrite(rewrite);
                if (finished) break;
            }
            if (!finished && !matchesPage()) {
                for (const rewrite of rewrites.fallback || []){
                    finished = checkRewrite(rewrite);
                    if (finished) break;
                }
            }
        }
        return {
            rewriteParams,
            rewrittenParsedUrl
        };
    }
    function getParamsFromRouteMatches(routeMatchesHeader) {
        // If we don't have a default route regex, we can't get params from route
        // matches
        if (!defaultRouteRegex) return null;
        const { groups, routeKeys } = defaultRouteRegex;
        const matcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getRouteMatcher"])({
            re: {
                // Simulate a RegExp match from the \`req.url\` input
                exec: (str)=>{
                    // Normalize all the prefixed query params.
                    const obj = Object.fromEntries(new URLSearchParams(str));
                    for (const [key, value] of Object.entries(obj)){
                        const normalizedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeNextQueryParam"])(key);
                        if (!normalizedKey) continue;
                        obj[normalizedKey] = value;
                        delete obj[key];
                    }
                    // Use all the named route keys.
                    const result = {};
                    for (const keyName of Object.keys(routeKeys)){
                        const paramName = routeKeys[keyName];
                        // If this param name is not a valid parameter name, then skip it.
                        if (!paramName) continue;
                        const group = groups[paramName];
                        const value = obj[keyName];
                        // When we're missing a required param, we can't match the route.
                        if (!group.optional && !value) return null;
                        result[group.pos] = value;
                    }
                    return result;
                }
            },
            groups
        });
        const routeMatches = matcher(routeMatchesHeader);
        if (!routeMatches) return null;
        return routeMatches;
    }
    function normalizeQueryParams(query, routeParamKeys) {
        // this is used to pass query information in rewrites
        // but should not be exposed in final query
        delete query['nextInternalLocale'];
        for (const [key, value] of Object.entries(query)){
            const normalizedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeNextQueryParam"])(key);
            if (!normalizedKey) continue;
            // Remove the prefixed key from the query params because we want
            // to consume it for the dynamic route matcher.
            delete query[key];
            routeParamKeys.add(normalizedKey);
            if (typeof value === 'undefined') continue;
            query[normalizedKey] = Array.isArray(value) ? value.map((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$decode$2d$query$2d$path$2d$parameter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decodeQueryPathParameter"])(v)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$decode$2d$query$2d$path$2d$parameter$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["decodeQueryPathParameter"])(value);
        }
    }
    return {
        handleRewrites,
        defaultRouteRegex,
        dynamicRouteMatcher,
        defaultRouteMatches,
        normalizeQueryParams,
        getParamsFromRouteMatches,
        /**
     * Normalize dynamic route params.
     *
     * @param query - The query params to normalize.
     * @param ignoreMissingOptional - Whether to ignore missing optional params.
     * @returns The normalized params and whether they are valid.
     */ normalizeDynamicRouteParams: (query, ignoreMissingOptional)=>{
            if (!defaultRouteRegex || !defaultRouteMatches) {
                return {
                    params: {},
                    hasValidParams: false
                };
            }
            return normalizeDynamicRouteParams(query, defaultRouteRegex, defaultRouteMatches, ignoreMissingOptional);
        },
        normalizeCdnUrl: (req, paramKeys)=>normalizeCdnUrl(req, paramKeys),
        interpolateDynamicPath: (pathname, params)=>interpolateDynamicPath(pathname, params, defaultRouteRegex),
        filterInternalQuery: (query, paramKeys)=>filterInternalQuery(query, paramKeys)
    };
}
function getPreviouslyRevalidatedTags(headers, previewModeId) {
    return typeof headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_REVALIDATED_TAGS_HEADER"]] === 'string' && headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER"]] === previewModeId ? headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_CACHE_REVALIDATED_TAGS_HEADER"]].split(',') : [];
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENCODED_TAGS",
    ()=>ENCODED_TAGS
]);
const ENCODED_TAGS = {
    // opening tags do not have the closing `>` since they can contain other attributes such as `<body className=''>`
    OPENING: {
        // <html
        HTML: new Uint8Array([
            60,
            104,
            116,
            109,
            108
        ]),
        // <head
        HEAD: new Uint8Array([
            60,
            104,
            101,
            97,
            100
        ]),
        // <body
        BODY: new Uint8Array([
            60,
            98,
            111,
            100,
            121
        ])
    },
    CLOSED: {
        // </head>
        HEAD: new Uint8Array([
            60,
            47,
            104,
            101,
            97,
            100,
            62
        ]),
        // </body>
        BODY: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62
        ]),
        // </html>
        HTML: new Uint8Array([
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ]),
        // </body></html>
        BODY_AND_HTML: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62,
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ])
    },
    META: {
        // Only the match the prefix cause the suffix can be different wether it's xml compatible or not ">" or "/>"
        // <meta name="«nxt-icon»"
        // This is a special mark that will be replaced by the icon insertion script tag.
        ICON_MARK: new Uint8Array([
            60,
            109,
            101,
            116,
            97,
            32,
            110,
            97,
            109,
            101,
            61,
            34,
            194,
            171,
            110,
            120,
            116,
            45,
            105,
            99,
            111,
            110,
            194,
            187,
            34
        ])
    }
};
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLOSE_TAG",
    ()=>CLOSE_TAG,
    "chainStreams",
    ()=>chainStreams,
    "chainTransformers",
    ()=>chainTransformers,
    "continueDynamicHTMLResume",
    ()=>continueDynamicHTMLResume,
    "continueDynamicPrerender",
    ()=>continueDynamicPrerender,
    "continueFizzStream",
    ()=>continueFizzStream,
    "continueStaticFallbackPrerender",
    ()=>continueStaticFallbackPrerender,
    "continueStaticPrerender",
    ()=>continueStaticPrerender,
    "createBufferedTransformStream",
    ()=>createBufferedTransformStream,
    "createDeferredSuffixStream",
    ()=>createDeferredSuffixStream,
    "createDocumentClosingStream",
    ()=>createDocumentClosingStream,
    "createFlightDataInjectionTransformStream",
    ()=>createFlightDataInjectionTransformStream,
    "createHeadInsertionTransformStream",
    ()=>createHeadInsertionTransformStream,
    "createHtmlDataDplIdTransformStream",
    ()=>createHtmlDataDplIdTransformStream,
    "createMetadataTransformStream",
    ()=>createMetadataTransformStream,
    "createMoveSuffixStream",
    ()=>createMoveSuffixStream,
    "createRootLayoutValidatorStream",
    ()=>createRootLayoutValidatorStream,
    "createRuntimePrefetchTransformStream",
    ()=>createRuntimePrefetchTransformStream,
    "nodestreamToUint8Array",
    ()=>nodestreamToUint8Array,
    "renderToInitialFizzStream",
    ()=>renderToInitialFizzStream,
    "streamFromBuffer",
    ()=>streamFromBuffer,
    "streamFromString",
    ()=>streamFromString,
    "streamToBuffer",
    ()=>streamToBuffer,
    "streamToString",
    ()=>streamToString,
    "streamToUint8Array",
    ()=>streamToUint8Array,
    "webstreamToUint8Array",
    ()=>webstreamToUint8Array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/detached-promise.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/scheduler.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/stream-utils/uint8array-helpers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$errors$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/errors/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$cache$2d$busting$2d$search$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/cache-busting-search-param.js [middleware] (ecmascript)");
;
;
;
;
;
;
;
;
;
function voidCatch() {
// this catcher is designed to be used with pipeTo where we expect the underlying
// pipe implementation to forward errors but we don't want the pipeTo promise to reject
// and be unhandled
}
// We can share the same encoder instance everywhere
// Notably we cannot do the same for TextDecoder because it is stateful
// when handling streaming data
const encoder = new TextEncoder();
function chainStreams(...streams) {
    // If we have no streams, return an empty stream. This behavior is
    // intentional as we're now providing the `RenderResult.EMPTY` value.
    if (streams.length === 0) {
        return new ReadableStream({
            start (controller) {
                controller.close();
            }
        });
    }
    // If we only have 1 stream we fast path it by returning just this stream
    if (streams.length === 1) {
        return streams[0];
    }
    const { readable, writable } = new TransformStream();
    // We always initiate pipeTo immediately. We know we have at least 2 streams
    // so we need to avoid closing the writable when this one finishes.
    let promise = streams[0].pipeTo(writable, {
        preventClose: true
    });
    let i = 1;
    for(; i < streams.length - 1; i++){
        const nextStream = streams[i];
        promise = promise.then(()=>nextStream.pipeTo(writable, {
                preventClose: true
            }));
    }
    // We can omit the length check because we halted before the last stream and there
    // is at least two streams so the lastStream here will always be defined
    const lastStream = streams[i];
    promise = promise.then(()=>lastStream.pipeTo(writable));
    // Catch any errors from the streams and ignore them, they will be handled
    // by whatever is consuming the readable stream.
    promise.catch(voidCatch);
    return readable;
}
function streamFromString(str) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(encoder.encode(str));
            controller.close();
        }
    });
}
function streamFromBuffer(chunk) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(chunk);
            controller.close();
        }
    });
}
async function streamToChunks(stream) {
    const reader = stream.getReader();
    const chunks = [];
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
    }
    return chunks;
}
function concatUint8Arrays(chunks) {
    const totalLength = chunks.reduce((sum, chunk)=>sum + chunk.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    for (const chunk of chunks){
        result.set(chunk, offset);
        offset += chunk.length;
    }
    return result;
}
async function webstreamToUint8Array(stream) {
    return concatUint8Arrays(await streamToChunks(stream));
}
function webToReadable(stream) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        let Readable;
        if ("TURBOPACK compile-time truthy", 1) {
            Readable = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Readable;
        } else //TURBOPACK unreachable
        ;
        if (stream instanceof Readable) {
            return stream;
        }
        return Readable.fromWeb(stream);
    }
}
async function nodestreamToUint8Array(stream) {
    const chunks = [];
    for await (const chunk of webToReadable(stream)){
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    }
    return Buffer.concat(chunks);
}
async function streamToUint8Array(stream) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        let Readable;
        if ("TURBOPACK compile-time truthy", 1) {
            Readable = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)").Readable;
        } else //TURBOPACK unreachable
        ;
        if (stream instanceof Readable) {
            return nodestreamToUint8Array(stream);
        }
        return webstreamToUint8Array(stream);
    }
}
async function streamToBuffer(stream) {
    return Buffer.concat(await streamToChunks(stream));
}
async function streamToString(stream, signal) {
    const decoder = new TextDecoder('utf-8', {
        fatal: true
    });
    let string = '';
    for await (const chunk of stream){
        if (signal == null ? void 0 : signal.aborted) {
            return string;
        }
        string += decoder.decode(chunk, {
            stream: true
        });
    }
    string += decoder.decode();
    return string;
}
function createBufferedTransformStream(options = {}) {
    const { maxBufferByteLength = Infinity } = options;
    let bufferedChunks = [];
    let bufferByteLength = 0;
    let pending;
    const flush = (controller)=>{
        try {
            if (bufferedChunks.length === 0) {
                return;
            }
            const chunk = new Uint8Array(bufferByteLength);
            let copiedBytes = 0;
            for(let i = 0; i < bufferedChunks.length; i++){
                const bufferedChunk = bufferedChunks[i];
                chunk.set(bufferedChunk, copiedBytes);
                copiedBytes += bufferedChunk.byteLength;
            }
            // We just wrote all the buffered chunks so we need to reset the bufferedChunks array
            // and our bufferByteLength to prepare for the next round of buffered chunks
            bufferedChunks.length = 0;
            bufferByteLength = 0;
            controller.enqueue(chunk);
        } catch  {
        // If an error occurs while enqueuing, it can't be due to this
        // transformer. It's most likely caused by the controller having been
        // errored (for example, if the stream was cancelled).
        }
    };
    const scheduleFlush = (controller)=>{
        if (pending) {
            return;
        }
        const detached = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        pending = detached;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>{
            try {
                flush(controller);
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            // Combine the previous buffer with the new chunk.
            bufferedChunks.push(chunk);
            bufferByteLength += chunk.byteLength;
            if (bufferByteLength >= maxBufferByteLength) {
                flush(controller);
            } else {
                scheduleFlush(controller);
            }
        },
        flush () {
            return pending == null ? void 0 : pending.promise;
        }
    });
}
function renderToInitialFizzStream({ ReactDOMServer, element, streamOptions }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["AppRenderSpan"].renderToReadableStream, async ()=>ReactDOMServer.renderToReadableStream(element, streamOptions));
}
function createMetadataTransformStream(insert) {
    let chunkIndex = -1;
    let isMarkRemoved = false;
    return new TransformStream({
        async transform (chunk, controller) {
            let iconMarkIndex = -1;
            let closedHeadIndex = -1;
            chunkIndex++;
            if (isMarkRemoved) {
                controller.enqueue(chunk);
                return;
            }
            let iconMarkLength = 0;
            // Only search for the closed head tag once
            if (iconMarkIndex === -1) {
                iconMarkIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].META.ICON_MARK);
                if (iconMarkIndex === -1) {
                    controller.enqueue(chunk);
                    return;
                } else {
                    // When we found the `<meta name="«nxt-icon»"` tag prefix, we will remove it from the chunk.
                    // Its close tag could either be `/>` or `>`, checking the next char to ensure we cover both cases.
                    iconMarkLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].META.ICON_MARK.length;
                    // Check if next char is /, this is for xml mode.
                    if (chunk[iconMarkIndex + iconMarkLength] === 47) {
                        iconMarkLength += 2;
                    } else {
                        // The last char is `>`
                        iconMarkLength++;
                    }
                }
            }
            // Check if icon mark is inside <head> tag in the first chunk.
            if (chunkIndex === 0) {
                closedHeadIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
                if (iconMarkIndex !== -1) {
                    // The mark icon is located in the 1st chunk before the head tag.
                    // We do not need to insert the script tag in this case because it's in the head.
                    // Just remove the icon mark from the chunk.
                    if (iconMarkIndex < closedHeadIndex) {
                        const replaced = new Uint8Array(chunk.length - iconMarkLength);
                        // Remove the icon mark from the chunk.
                        replaced.set(chunk.subarray(0, iconMarkIndex));
                        replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex);
                        chunk = replaced;
                    } else {
                        // The icon mark is after the head tag, replace and insert the script tag at that position.
                        const insertion = await insert();
                        const encodedInsertion = encoder.encode(insertion);
                        const insertionLength = encodedInsertion.length;
                        const replaced = new Uint8Array(chunk.length - iconMarkLength + insertionLength);
                        replaced.set(chunk.subarray(0, iconMarkIndex));
                        replaced.set(encodedInsertion, iconMarkIndex);
                        replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex + insertionLength);
                        chunk = replaced;
                    }
                    isMarkRemoved = true;
                }
            // If there's no icon mark located, it will be handled later when if present in the following chunks.
            } else {
                // When it's appeared in the following chunks, we'll need to
                // remove the mark and then insert the script tag at that position.
                const insertion = await insert();
                const encodedInsertion = encoder.encode(insertion);
                const insertionLength = encodedInsertion.length;
                // Replace the icon mark with the hoist script or empty string.
                const replaced = new Uint8Array(chunk.length - iconMarkLength + insertionLength);
                // Set the first part of the chunk, before the icon mark.
                replaced.set(chunk.subarray(0, iconMarkIndex));
                // Set the insertion after the icon mark.
                replaced.set(encodedInsertion, iconMarkIndex);
                // Set the rest of the chunk after the icon mark.
                replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex + insertionLength);
                chunk = replaced;
                isMarkRemoved = true;
            }
            controller.enqueue(chunk);
        }
    });
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    // We need to track if this transform saw any bytes because if it didn't
    // we won't want to insert any server HTML at all
    let hasBytes = false;
    return new TransformStream({
        async transform (chunk, controller) {
            hasBytes = true;
            const insertion = await insert();
            if (inserted) {
                if (insertion) {
                    const encodedInsertion = encoder.encode(insertion);
                    controller.enqueue(encodedInsertion);
                }
                controller.enqueue(chunk);
            } else {
                // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
                const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
                // In fully static rendering or non PPR rendering cases:
                // `/head>` will always be found in the chunk in first chunk rendering.
                if (index !== -1) {
                    if (insertion) {
                        const encodedInsertion = encoder.encode(insertion);
                        // Get the total count of the bytes in the chunk and the insertion
                        // e.g.
                        // chunk = <head><meta charset="utf-8"></head>
                        // insertion = <script>...</script>
                        // output = <head><meta charset="utf-8"> [ <script>...</script> ] </head>
                        const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
                        // Append the first part of the chunk, before the head tag
                        insertedHeadContent.set(chunk.slice(0, index));
                        // Append the server inserted content
                        insertedHeadContent.set(encodedInsertion, index);
                        // Append the rest of the chunk
                        insertedHeadContent.set(chunk.slice(index), index + encodedInsertion.length);
                        controller.enqueue(insertedHeadContent);
                    } else {
                        controller.enqueue(chunk);
                    }
                    inserted = true;
                } else {
                    // This will happens in PPR rendering during next start, when the page is partially rendered.
                    // When the page resumes, the head tag will be found in the middle of the chunk.
                    // Where we just need to append the insertion and chunk to the current stream.
                    // e.g.
                    // PPR-static: <head>...</head><body> [ resume content ] </body>
                    // PPR-resume: [ insertion ] [ rest content ]
                    if (insertion) {
                        controller.enqueue(encoder.encode(insertion));
                    }
                    controller.enqueue(chunk);
                    inserted = true;
                }
            }
        },
        async flush (controller) {
            // Check before closing if there's anything remaining to insert.
            if (hasBytes) {
                const insertion = await insert();
                if (insertion) {
                    controller.enqueue(encoder.encode(insertion));
                }
            }
        }
    });
}
async function createClientResumeScriptInsertionTransformStream() {
    const segmentPath = '/_full';
    const cacheBustingHeader = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$cache$2d$busting$2d$search$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["computeCacheBustingSearchParam"])('1', '/_full', undefined, undefined //       headers[NEXT_URL]
    );
    const searchStr = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]}=${cacheBustingHeader}`;
    const NEXT_CLIENT_RESUME_SCRIPT = `<script>__NEXT_CLIENT_RESUME=fetch(location.pathname+'?${searchStr}',{credentials:'same-origin',headers:{'${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RSC_HEADER"]}': '1','${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]}': '1','${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_ROUTER_SEGMENT_PREFETCH_HEADER"]}': '${segmentPath}'}})</script>`;
    let didAlreadyInsert = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (didAlreadyInsert) {
                // Already inserted the script into the head. Pass through.
                controller.enqueue(chunk);
                return;
            }
            // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
            const headClosingTagIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
            if (headClosingTagIndex === -1) {
                // In fully static rendering or non PPR rendering cases:
                // `/head>` will always be found in the chunk in first chunk rendering.
                controller.enqueue(chunk);
                return;
            }
            const encodedInsertion = encoder.encode(NEXT_CLIENT_RESUME_SCRIPT);
            // Get the total count of the bytes in the chunk and the insertion
            // e.g.
            // chunk = <head><meta charset="utf-8"></head>
            // insertion = <script>...</script>
            // output = <head><meta charset="utf-8"> [ <script>...</script> ] </head>
            const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
            // Append the first part of the chunk, before the head tag
            insertedHeadContent.set(chunk.slice(0, headClosingTagIndex));
            // Append the server inserted content
            insertedHeadContent.set(encodedInsertion, headClosingTagIndex);
            // Append the rest of the chunk
            insertedHeadContent.set(chunk.slice(headClosingTagIndex), headClosingTagIndex + encodedInsertion.length);
            controller.enqueue(insertedHeadContent);
            didAlreadyInsert = true;
        }
    });
}
function createDeferredSuffixStream(suffix) {
    let flushed = false;
    let pending;
    const flush = (controller)=>{
        const detached = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        pending = detached;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>{
            try {
                controller.enqueue(encoder.encode(suffix));
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // If we've already flushed, we're done.
            if (flushed) return;
            // Schedule the flush to happen.
            flushed = true;
            flush(controller);
        },
        flush (controller) {
            if (pending) return pending.promise;
            if (flushed) return;
            // Flush now.
            controller.enqueue(encoder.encode(suffix));
        }
    });
}
function createFlightDataInjectionTransformStream(stream, delayDataUntilFirstHtmlChunk) {
    let htmlStreamFinished = false;
    let pull = null;
    let donePulling = false;
    function startOrContinuePulling(controller) {
        if (!pull) {
            pull = startPulling(controller);
        }
        return pull;
    }
    async function startPulling(controller) {
        const reader = stream.getReader();
        if (delayDataUntilFirstHtmlChunk) {
            // NOTE: streaming flush
            // We are buffering here for the inlined data stream because the
            // "shell" stream might be chunkenized again by the underlying stream
            // implementation, e.g. with a specific high-water mark. To ensure it's
            // the safe timing to pipe the data stream, this extra tick is
            // necessary.
            // We don't start reading until we've left the current Task to ensure
            // that it's inserted after flushing the shell. Note that this implementation
            // might get stale if impl details of Fizz change in the future.
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["atLeastOneTask"])();
        }
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) {
                    donePulling = true;
                    return;
                }
                // We want to prioritize HTML over RSC data.
                // The SSR render is based on the same RSC stream, so when we get a new RSC chunk,
                // we're likely to produce an HTML chunk as well, so give it a chance to flush first.
                if (!delayDataUntilFirstHtmlChunk && !htmlStreamFinished) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["atLeastOneTask"])();
                }
                controller.enqueue(value);
            }
        } catch (err) {
            controller.error(err);
        }
    }
    return new TransformStream({
        start (controller) {
            if (!delayDataUntilFirstHtmlChunk) {
                startOrContinuePulling(controller);
            }
        },
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // Start the streaming if it hasn't already been started yet.
            if (delayDataUntilFirstHtmlChunk) {
                startOrContinuePulling(controller);
            }
        },
        flush (controller) {
            htmlStreamFinished = true;
            if (donePulling) {
                return;
            }
            return startOrContinuePulling(controller);
        }
    });
}
const CLOSE_TAG = '</body></html>';
function createMoveSuffixStream() {
    let foundSuffix = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (foundSuffix) {
                return controller.enqueue(chunk);
            }
            const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
            if (index > -1) {
                foundSuffix = true;
                // If the whole chunk is the suffix, then don't write anything, it will
                // be written in the flush.
                if (chunk.length === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length) {
                    return;
                }
                // Write out the part before the suffix.
                const before = chunk.slice(0, index);
                controller.enqueue(before);
                // In the case where the suffix is in the middle of the chunk, we need
                // to split the chunk into two parts.
                if (chunk.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length + index) {
                    // Write out the part after the suffix.
                    const after = chunk.slice(index + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length);
                    controller.enqueue(after);
                }
            } else {
                controller.enqueue(chunk);
            }
        },
        flush (controller) {
            // Even if we didn't find the suffix, the HTML is not valid if we don't
            // add it, so insert it at the end.
            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
        }
    });
}
function createStripDocumentClosingTagsTransform() {
    return new TransformStream({
        transform (chunk, controller) {
            // We rely on the assumption that chunks will never break across a code unit.
            // This is reasonable because we currently concat all of React's output from a single
            // flush into one chunk before streaming it forward which means the chunk will represent
            // a single coherent utf-8 string. This is not safe to use if we change our streaming to no
            // longer do this large buffered chunk
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HTML)) {
                // the entire chunk is the closing tags; return without enqueueing anything.
                return;
            }
            // We assume these tags will go at together at the end of the document and that
            // they won't appear anywhere else in the document. This is not really a safe assumption
            // but until we revamp our streaming infra this is a performant way to string the tags
            chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeFromUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY);
            chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeFromUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HTML);
            controller.enqueue(chunk);
        }
    });
}
function createHtmlDataDplIdTransformStream(dplId) {
    let didTransform = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (didTransform) {
                controller.enqueue(chunk);
                return;
            }
            const htmlTagIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.HTML);
            if (htmlTagIndex === -1) {
                controller.enqueue(chunk);
                return;
            }
            // Insert the data-dpl-id attribute right after "<html "
            const insertionPoint = htmlTagIndex + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.HTML.length;
            const attribute = ` data-dpl-id="${dplId}"`;
            const encodedAttribute = encoder.encode(attribute);
            const modifiedChunk = new Uint8Array(chunk.length + encodedAttribute.length);
            // Copy everything before the insertion point
            modifiedChunk.set(chunk.subarray(0, insertionPoint));
            // Insert the attribute
            modifiedChunk.set(encodedAttribute, insertionPoint);
            // Copy everything after
            modifiedChunk.set(chunk.subarray(insertionPoint), insertionPoint + encodedAttribute.length);
            controller.enqueue(modifiedChunk);
            didTransform = true;
        }
    });
}
function createRootLayoutValidatorStream() {
    let foundHtml = false;
    let foundBody = false;
    return new TransformStream({
        async transform (chunk, controller) {
            // Peek into the streamed chunk to see if the tags are present.
            if (!foundHtml && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.HTML) > -1) {
                foundHtml = true;
            }
            if (!foundBody && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.BODY) > -1) {
                foundBody = true;
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [];
            if (!foundHtml) missingTags.push('html');
            if (!foundBody) missingTags.push('body');
            if (!missingTags.length) return;
            controller.enqueue(encoder.encode(`<html id="__next_error__">
            <template
              data-next-error-message="Missing ${missingTags.map((c)=>`<${c}>`).join(missingTags.length > 1 ? ' and ' : '')} tags in the root layout.\nRead more at https://nextjs.org/docs/messages/missing-root-layout-tags"
              data-next-error-digest="${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$errors$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MISSING_ROOT_TAGS_ERROR"]}"
              data-next-error-stack=""
            ></template>
          `));
        }
    });
}
function chainTransformers(readable, transformers) {
    let stream = readable;
    for (const transformer of transformers){
        if (!transformer) continue;
        stream = stream.pipeThrough(transformer);
    }
    return stream;
}
async function continueFizzStream(renderStream, { suffix, inlinedDataStream, isStaticGeneration, deploymentId, getServerInsertedHTML, getServerInsertedMetadata, validateRootLayout }) {
    // Suffix itself might contain close tags at the end, so we need to split it.
    const suffixUnclosed = suffix ? suffix.split(CLOSE_TAG, 1)[0] : null;
    if (isStaticGeneration) {
        // If we're generating static HTML we need to wait for it to resolve before continuing.
        await renderStream.allReady;
    } else {
        // Otherwise, we want to make sure Fizz is done with all microtasky work
        // before we start pulling the stream and cause a flush.
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["waitAtLeastOneReactRenderTask"])();
    }
    return chainTransformers(renderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Insert data-dpl-id attribute on the html tag
        deploymentId ? createHtmlDataDplIdTransformStream(deploymentId) : null,
        // Transform metadata
        createMetadataTransformStream(getServerInsertedMetadata),
        // Insert suffix content
        suffixUnclosed != null && suffixUnclosed.length > 0 ? createDeferredSuffixStream(suffixUnclosed) : null,
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        inlinedDataStream ? createFlightDataInjectionTransformStream(inlinedDataStream, true) : null,
        // Validate the root layout for missing html or body tags
        validateRootLayout ? createRootLayoutValidatorStream() : null,
        // Close tags should always be deferred to the end
        createMoveSuffixStream(),
        // Special head insertions
        // TODO-APP: Insert server side html to end of head in app layout rendering, to avoid
        // hydration errors. Remove this once it's ready to be handled by react itself.
        createHeadInsertionTransformStream(getServerInsertedHTML)
    ]);
}
async function continueDynamicPrerender(prerenderStream, { getServerInsertedHTML, getServerInsertedMetadata, deploymentId }) {
    return chainTransformers(prerenderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        createStripDocumentClosingTagsTransform(),
        // Insert data-dpl-id attribute on the html tag
        deploymentId ? createHtmlDataDplIdTransformStream(deploymentId) : null,
        // Insert generated tags to head
        createHeadInsertionTransformStream(getServerInsertedHTML),
        // Transform metadata
        createMetadataTransformStream(getServerInsertedMetadata)
    ]);
}
async function continueStaticPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata, deploymentId }) {
    return chainTransformers(prerenderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Add build id comment to start of the HTML document (in export mode)
        // Insert data-dpl-id attribute on the html tag
        deploymentId ? createHtmlDataDplIdTransformStream(deploymentId) : null,
        // Insert generated tags to head
        createHeadInsertionTransformStream(getServerInsertedHTML),
        // Transform metadata
        createMetadataTransformStream(getServerInsertedMetadata),
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        createFlightDataInjectionTransformStream(inlinedDataStream, true),
        // Close tags should always be deferred to the end
        createMoveSuffixStream()
    ]);
}
async function continueStaticFallbackPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata, deploymentId }) {
    // Same as `continueStaticPrerender`, but also inserts an additional script
    // to instruct the client to start fetching the hydration data as early
    // as possible.
    return chainTransformers(prerenderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Insert data-dpl-id attribute on the html tag
        deploymentId ? createHtmlDataDplIdTransformStream(deploymentId) : null,
        // Insert generated tags to head
        createHeadInsertionTransformStream(getServerInsertedHTML),
        // Insert the client resume script into the head
        await createClientResumeScriptInsertionTransformStream(),
        // Transform metadata
        createMetadataTransformStream(getServerInsertedMetadata),
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        createFlightDataInjectionTransformStream(inlinedDataStream, true),
        // Close tags should always be deferred to the end
        createMoveSuffixStream()
    ]);
}
async function continueDynamicHTMLResume(renderStream, { delayDataUntilFirstHtmlChunk, inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata, deploymentId }) {
    return chainTransformers(renderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Insert data-dpl-id attribute on the html tag
        deploymentId ? createHtmlDataDplIdTransformStream(deploymentId) : null,
        // Insert generated tags to head
        createHeadInsertionTransformStream(getServerInsertedHTML),
        // Transform metadata
        createMetadataTransformStream(getServerInsertedMetadata),
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        createFlightDataInjectionTransformStream(inlinedDataStream, delayDataUntilFirstHtmlChunk),
        // Close tags should always be deferred to the end
        createMoveSuffixStream()
    ]);
}
function createDocumentClosingStream() {
    return streamFromString(CLOSE_TAG);
}
function createRuntimePrefetchTransformStream(sentinel, isPartial, staleTime) {
    const enc = new TextEncoder();
    // Search for: [<sentinel>]
    // Replace with: [<isPartial>,<staleTime>]
    const search = enc.encode(`[${sentinel}]`);
    const first = search[0];
    const replace = enc.encode(`[${isPartial},${staleTime}]`);
    const searchLen = search.length;
    let currentChunk = null;
    let found = false;
    function processChunk(controller, nextChunk) {
        if (found) {
            if (nextChunk) {
                controller.enqueue(nextChunk);
            }
            return;
        }
        if (currentChunk) {
            // We can't search past the index that can contain a full match
            let exclusiveUpperBound = currentChunk.length - (searchLen - 1);
            if (nextChunk) {
                // If we have any overflow bytes we can search up to the chunk's final byte
                exclusiveUpperBound += Math.min(nextChunk.length, searchLen - 1);
            }
            if (exclusiveUpperBound < 1) {
                // we can't match the current chunk.
                controller.enqueue(currentChunk);
                currentChunk = nextChunk // advance so we don't process this chunk again
                ;
                return;
            }
            let currentIndex = currentChunk.indexOf(first);
            // check the current candidate match if it is within the bounds of our search space for the currentChunk
            candidateLoop: while(-1 < currentIndex && currentIndex < exclusiveUpperBound){
                // We already know index 0 matches because we used indexOf to find the candidateIndex so we start at index 1
                let matchIndex = 1;
                while(matchIndex < searchLen){
                    const candidateIndex = currentIndex + matchIndex;
                    const candidateValue = candidateIndex < currentChunk.length ? currentChunk[candidateIndex] : nextChunk[candidateIndex - currentChunk.length];
                    if (candidateValue !== search[matchIndex]) {
                        // No match, reset and continue the search from the next position
                        currentIndex = currentChunk.indexOf(first, currentIndex + 1);
                        continue candidateLoop;
                    }
                    matchIndex++;
                }
                // We found a complete match. currentIndex is our starting point to replace the value.
                found = true;
                // enqueue everything up to the match
                controller.enqueue(currentChunk.subarray(0, currentIndex));
                // enqueue the replacement value
                controller.enqueue(replace);
                // If there are bytes in the currentChunk after the match enqueue them
                if (currentIndex + searchLen < currentChunk.length) {
                    controller.enqueue(currentChunk.slice(currentIndex + searchLen));
                }
                // If we have a next chunk we enqueue it now
                if (nextChunk) {
                    // if replacement spills over to the next chunk we first exclude the replaced bytes
                    const overflowBytes = currentIndex + searchLen - currentChunk.length;
                    const truncatedChunk = overflowBytes > 0 ? nextChunk.subarray(overflowBytes) : nextChunk;
                    controller.enqueue(truncatedChunk);
                }
                // We are now in found mode and don't need to track currentChunk anymore
                currentChunk = null;
                return;
            }
            // No match found in this chunk, emit it and wait for the next one
            controller.enqueue(currentChunk);
        }
        // Advance to the next chunk
        currentChunk = nextChunk;
    }
    return new TransformStream({
        transform (chunk, controller) {
            processChunk(controller, chunk);
        },
        flush (controller) {
            processChunk(controller, null);
        }
    });
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/stream-utils/uint8array-helpers.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Find the starting index of Uint8Array `b` within Uint8Array `a`.
 */ __turbopack_context__.s([
    "indexOfUint8Array",
    ()=>indexOfUint8Array,
    "isEquivalentUint8Arrays",
    ()=>isEquivalentUint8Arrays,
    "removeFromUint8Array",
    ()=>removeFromUint8Array
]);
function indexOfUint8Array(a, b) {
    if (b.length === 0) return 0;
    if (a.length === 0 || b.length > a.length) return -1;
    // Use Node's native implementation when available.
    if (typeof Buffer !== 'undefined') {
        const haystack = Buffer.isBuffer(a) ? a : Buffer.from(a.buffer, a.byteOffset, a.byteLength);
        return haystack.indexOf(b);
    }
    // start iterating through `a`
    for(let i = 0; i <= a.length - b.length; i++){
        let completeMatch = true;
        // from index `i`, iterate through `b` and check for mismatch
        for(let j = 0; j < b.length; j++){
            // if the values do not match, then this isn't a complete match, exit `b` iteration early and iterate to next index of `a`.
            if (a[i + j] !== b[j]) {
                completeMatch = false;
                break;
            }
        }
        if (completeMatch) {
            return i;
        }
    }
    return -1;
}
function isEquivalentUint8Arrays(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function removeFromUint8Array(a, b) {
    const tagIndex = indexOfUint8Array(a, b);
    if (tagIndex === 0) return a.subarray(b.length);
    if (tagIndex > -1) {
        const removed = new Uint8Array(a.length - b.length);
        removed.set(a.subarray(0, tagIndex));
        removed.set(a.subarray(tagIndex + b.length), tagIndex);
        return removed;
    } else {
        return a;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/use-cache/clone-cache-entry.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Tees a cache entry's single-use value stream into two independent entries.
 * The original entry is mutated to hold one branch of the tee, and a clone is
 * returned holding the other, so both can be consumed independently.
 */ __turbopack_context__.s([
    "cloneCacheEntry",
    ()=>cloneCacheEntry
]);
function cloneCacheEntry(entry) {
    const [streamA, streamB] = entry.value.tee();
    entry.value = streamA;
    const clonedEntry = {
        value: streamB,
        timestamp: entry.timestamp,
        revalidate: entry.revalidate,
        expire: entry.expire,
        stale: entry.stale,
        tags: entry.tags
    };
    return [
        entry,
        clonedEntry
    ];
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/use-cache/constants.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MIN_PREFETCHABLE_STALE",
    ()=>MIN_PREFETCHABLE_STALE,
    "MIN_PRERENDERABLE_EXPIRE",
    ()=>MIN_PRERENDERABLE_EXPIRE,
    "MIN_SHELL_STALE",
    ()=>MIN_SHELL_STALE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)");
;
const MIN_PRERENDERABLE_EXPIRE = 300 // 5 minutes
;
const MIN_PREFETCHABLE_STALE = 30 // 30 seconds
;
const MIN_SHELL_STALE = 300 // 5 minutes
;
if ("TURBOPACK compile-time truthy", 1) {
    if (MIN_PREFETCHABLE_STALE > MIN_SHELL_STALE) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('MIN_PREFETCHABLE_STALE must not exceed MIN_SHELL_STALE.'), "__NEXT_ERROR_CODE", {
            value: "E1422",
            enumerable: false,
            configurable: true
        });
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/use-cache/handlers.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCacheHandler",
    ()=>getCacheHandler,
    "getCacheHandlerEntries",
    ()=>getCacheHandlerEntries,
    "getCacheHandlers",
    ()=>getCacheHandlers,
    "getDevTieredCacheHandler",
    ()=>getDevTieredCacheHandler,
    "getPrivateCacheHandler",
    ()=>getPrivateCacheHandler,
    "initializeCacheHandlers",
    ()=>initializeCacheHandlers,
    "isBuiltInCacheHandler",
    ()=>isBuiltInCacheHandler,
    "isCustomCacheHandler",
    ()=>isCustomCacheHandler,
    "isMemoryCacheDisabled",
    ()=>isMemoryCacheDisabled,
    "setCacheHandler",
    ()=>setCacheHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$handlers$2f$default$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/cache-handlers/default.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$tiered$2d$cache$2d$handler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/use-cache/tiered-cache-handler.js [middleware] (ecmascript)");
;
;
const debug = process.env.NEXT_PRIVATE_DEBUG_CACHE ? (message, ...args)=>{
    console.log(`use-cache: ${message}`, ...args);
} : undefined;
const handlersSymbol = Symbol.for('@next/cache-handlers');
const handlersMapSymbol = Symbol.for('@next/cache-handlers-map');
const handlersSetSymbol = Symbol.for('@next/cache-handlers-set');
const privateHandlerSymbol = Symbol.for('@next/cache-handlers-private');
const builtInHandlersSymbol = Symbol.for('@next/cache-handlers-built-in');
const devFrontHandlersSymbol = Symbol.for('@next/cache-handlers-dev-fronts');
const devTieredHandlersSymbol = Symbol.for('@next/cache-handlers-dev-tiered');
const memoryCacheDisabledSymbol = Symbol.for('@next/cache-handlers-memory-disabled');
/**
 * The in-memory size used for the dev-only built-in handlers (the private
 * handler, the size-0 replacement, and the per-kind front handlers for custom
 * kinds). Mirrors the framework default so `cacheMaxMemorySize: 0` does not
 * disable caching in development.
 */ const DEV_MEMORY_CACHE_SIZE = 50 * 1024 * 1024;
/**
 * The reference to the cache handlers. We store the cache handlers on the
 * global object so that we can access the same instance across different
 * boundaries (such as different copies of the same module).
 */ const reference = globalThis;
function initializeCacheHandlers(cacheMaxMemorySize) {
    // If the cache handlers have already been initialized, don't do it again.
    if (reference[handlersMapSymbol]) {
        debug == null ? void 0 : debug('cache handlers already initialized');
        return false;
    }
    debug == null ? void 0 : debug('initializing cache handlers');
    const handlersMap = new Map();
    reference[handlersMapSymbol] = handlersMap;
    const builtInHandlers = new Set();
    reference[builtInHandlersSymbol] = builtInHandlers;
    // In development, `cacheMaxMemorySize: 0` would make the built-in default
    // handler a no-op, so every reload would miss. Use a real in-memory size
    // instead so dev stays fast; the "use cache" wrapper forces a dynamic cache
    // life for this case so it still behaves close to "no cache" (serve stale,
    // regenerate in the background). Production keeps the no-op handler.
    const builtInSize = ("TURBOPACK compile-time value", "1") && cacheMaxMemorySize === 0 ? DEV_MEMORY_CACHE_SIZE : cacheMaxMemorySize;
    // Initialize the cache from the symbol contents first.
    if (reference[handlersSymbol]) {
        let fallback;
        if (reference[handlersSymbol].DefaultCache) {
            debug == null ? void 0 : debug('setting "default" cache handler from symbol');
            fallback = reference[handlersSymbol].DefaultCache;
        } else {
            debug == null ? void 0 : debug('setting "default" cache handler from default');
            fallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$handlers$2f$default$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createDefaultCacheHandler"])(builtInSize);
            builtInHandlers.add(fallback);
        }
        handlersMap.set('default', fallback);
        if (reference[handlersSymbol].RemoteCache) {
            debug == null ? void 0 : debug('setting "remote" cache handler from symbol');
            handlersMap.set('remote', reference[handlersSymbol].RemoteCache);
        } else {
            debug == null ? void 0 : debug('setting "remote" cache handler from default');
            handlersMap.set('remote', fallback);
        }
    } else {
        const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$handlers$2f$default$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createDefaultCacheHandler"])(builtInSize);
        builtInHandlers.add(handler);
        debug == null ? void 0 : debug('setting "default" cache handler from default');
        handlersMap.set('default', handler);
        debug == null ? void 0 : debug('setting "remote" cache handler from default');
        handlersMap.set('remote', handler);
    }
    // Create a set of the cache handlers.
    reference[handlersSetSymbol] = new Set(handlersMap.values());
    // In development we add dedicated built-in in-memory handlers so that reloads
    // are fast. These are always built-in handlers, never a user-configured one,
    // and are gated on the dev server so production behaves exactly as
    // configured.
    if ("TURBOPACK compile-time truthy", 1) {
        reference[memoryCacheDisabledSymbol] = cacheMaxMemorySize === 0;
        // Private caches are persisted here so reloads are fast. Private entries
        // can hold data specific to the incoming request (for example, derived from
        // its cookies or headers), so this is never the user-configured `default`
        // alias. Sized so it still caches under `cacheMaxMemorySize: 0` (otherwise
        // it would become the no-op stub and private reloads would miss).
        reference[privateHandlerSymbol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$handlers$2f$default$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createDefaultCacheHandler"])(DEV_MEMORY_CACHE_SIZE);
        // Built-in front handlers, one per custom kind, and the tiered handlers
        // that place a front in front of a (possibly slow or remote) backing
        // handler so cache hits resolve in a microtask, are both created per kind
        // in `setCacheHandler`.
        reference[devFrontHandlersSymbol] = new Map();
        reference[devTieredHandlersSymbol] = new Map();
    }
    return true;
}
function getCacheHandler(kind) {
    // This should never be called before initializeCacheHandlers.
    if (!reference[handlersMapSymbol]) {
        throw Object.defineProperty(new Error('Cache handlers not initialized'), "__NEXT_ERROR_CODE", {
            value: "E649",
            enumerable: false,
            configurable: true
        });
    }
    return reference[handlersMapSymbol].get(kind);
}
function getPrivateCacheHandler() {
    // This should never be called before initializeCacheHandlers.
    if (!reference[handlersMapSymbol]) {
        throw Object.defineProperty(new Error('Cache handlers not initialized'), "__NEXT_ERROR_CODE", {
            value: "E649",
            enumerable: false,
            configurable: true
        });
    }
    return reference[privateHandlerSymbol];
}
function isMemoryCacheDisabled() {
    return reference[memoryCacheDisabledSymbol] ?? false;
}
function isCustomCacheHandler(kind) {
    var _reference_devFrontHandlersSymbol;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return ((_reference_devFrontHandlersSymbol = reference[devFrontHandlersSymbol]) == null ? void 0 : _reference_devFrontHandlersSymbol.has(kind)) ?? false;
}
function isBuiltInCacheHandler(kind) {
    var _reference_handlersMapSymbol, _reference_builtInHandlersSymbol;
    const handler = (_reference_handlersMapSymbol = reference[handlersMapSymbol]) == null ? void 0 : _reference_handlersMapSymbol.get(kind);
    return handler !== undefined && Boolean((_reference_builtInHandlersSymbol = reference[builtInHandlersSymbol]) == null ? void 0 : _reference_builtInHandlersSymbol.has(handler));
}
function getDevTieredCacheHandler(kind) {
    var _reference_devTieredHandlersSymbol;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (_reference_devTieredHandlersSymbol = reference[devTieredHandlersSymbol]) == null ? void 0 : _reference_devTieredHandlersSymbol.get(kind);
}
function getCacheHandlers() {
    const handlersSet = reference[handlersSetSymbol];
    if (!handlersSet) {
        return undefined;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return iterateCacheHandlersWithDevBuiltIns(handlersSet);
    }
    //TURBOPACK unreachable
    ;
}
/**
 * Yields the registered handlers plus the dev-only built-in handlers (the
 * private handler and the per-kind front handlers). The built-in handlers are
 * not part of the registered set, but tag operations must still reach them:
 * their `updateTags` writes the shared tags manifest that their `get` consults,
 * so `revalidateTag` can invalidate their entries.
 */ function* iterateCacheHandlersWithDevBuiltIns(handlersSet) {
    yield* handlersSet;
    const privateHandler = reference[privateHandlerSymbol];
    if (privateHandler) {
        yield privateHandler;
    }
    const devFrontHandlers = reference[devFrontHandlersSymbol];
    if (devFrontHandlers) {
        yield* devFrontHandlers.values();
    }
}
function getCacheHandlerEntries() {
    const handlersMap = reference[handlersMapSymbol];
    if (!handlersMap) {
        return undefined;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return iterateCacheHandlerEntriesWithDevBuiltIns(handlersMap);
    }
    //TURBOPACK unreachable
    ;
}
/**
 * Yields the registered entries plus the dev-only private handler under its
 * kind, so that per-kind tag operations (`refreshTags` / `getExpiration` for
 * implicit tags) apply to private entries. Custom-kind front handlers are
 * intentionally omitted: the backing handler (already in the map) is
 * authoritative for that kind's `getExpiration`, and a front entry is discarded
 * via that same value.
 */ function* iterateCacheHandlerEntriesWithDevBuiltIns(handlersMap) {
    yield* handlersMap.entries();
    const privateHandler = reference[privateHandlerSymbol];
    if (privateHandler) {
        const privateEntry = [
            'private',
            privateHandler
        ];
        yield privateEntry;
    }
}
function setCacheHandler(kind, cacheHandler) {
    // This should never be called before initializeCacheHandlers.
    if (!reference[handlersMapSymbol] || !reference[handlersSetSymbol]) {
        throw Object.defineProperty(new Error('Cache handlers not initialized'), "__NEXT_ERROR_CODE", {
            value: "E649",
            enumerable: false,
            configurable: true
        });
    }
    debug == null ? void 0 : debug('setting cache handler for "%s"', kind);
    reference[handlersMapSymbol].set(kind, cacheHandler);
    reference[handlersSetSymbol].add(cacheHandler);
    // A user-configured handler may be slow or remote. In development, give it a
    // dedicated built-in in-memory front handler so cache hits resolve in a
    // microtask, and pair the two into a tiered handler the wrapper reads
    // through. Both are created alongside registration so their lifecycle matches
    // the backing handler's, and the front handler's presence is the signal that
    // this kind is backed by a real handler (see `isCustomCacheHandler`). Being a
    // built-in default handler, the front inherits the dev minimum retention, so
    // a short-`expire` value still hits the front instead of falling through to
    // the slow backing on every read.
    if ("TURBOPACK compile-time truthy", 1) {
        var _reference_devFrontHandlersSymbol, _reference_devTieredHandlersSymbol;
        const frontHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$handlers$2f$default$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createDefaultCacheHandler"])(DEV_MEMORY_CACHE_SIZE);
        (_reference_devFrontHandlersSymbol = reference[devFrontHandlersSymbol]) == null ? void 0 : _reference_devFrontHandlersSymbol.set(kind, frontHandler);
        (_reference_devTieredHandlersSymbol = reference[devTieredHandlersSymbol]) == null ? void 0 : _reference_devTieredHandlersSymbol.set(kind, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$tiered$2d$cache$2d$handler$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createTieredCacheHandler"])(frontHandler, cacheHandler));
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/use-cache/tiered-cache-handler.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTieredCacheHandler",
    ()=>createTieredCacheHandler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$clone$2d$cache$2d$entry$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/use-cache/clone-cache-entry.js [middleware] (ecmascript)");
;
;
function createTieredCacheHandler(front, backing) {
    // Holds the in-flight (or chained) background sync per key, so a sync for a
    // key runs after any earlier one for that key rather than in parallel.
    const inFlightSyncs = new Map();
    function scheduleBackgroundSync(cacheKey, sync) {
        // Serialize syncs per key: chain this one after any in-flight sync rather
        // than running a second in parallel. The trailing sync still re-reads the
        // backing, so the front converges to the latest state; a later read is
        // never dropped in favor of an earlier, possibly stale, in-flight read.
        const previous = inFlightSyncs.get(cacheKey);
        let pending;
        if (previous) {
            pending = previous.then(sync);
        } else {
            pending = sync();
        }
        pending = pending.finally(()=>{
            if (inFlightSyncs.get(cacheKey) === pending) {
                inFlightSyncs.delete(cacheKey);
            }
        });
        inFlightSyncs.set(cacheKey, pending);
        // Register the sync on the current request's revalidation writes so it is
        // awaited rather than left untracked. Reading the work store here (rather
        // than capturing it at construction) is what lets the handler be a shared
        // singleton; `get` always runs within the request's async context, so the
        // store is present.
        const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
        if (workStore) {
            workStore.pendingRevalidateWrites ??= [];
            workStore.pendingRevalidateWrites.push(pending);
        }
    }
    return {
        async get (cacheKey, softTags) {
            const frontEntry = await front.get(cacheKey, softTags);
            if (frontEntry) {
                // Cache hit: serve immediately (in a microtask). A background reconcile
                // keeps the front in sync with the backing for the next read;
                // reconciles for the same key are serialized, so concurrent cache hits
                // don't hit the backing in parallel.
                scheduleBackgroundSync(cacheKey, ()=>reconcileFrontFromBacking(front, backing, cacheKey, softTags, frontEntry));
                return frontEntry;
            }
            // Cold or evicted front entry: we pay the backing latency here (this is a
            // read that may legitimately surface a cold cache indicator). A miss
            // returns undefined and the "use cache" wrapper generates the entry and
            // writes it through both tiers via `set`.
            const backingEntry = await backing.get(cacheKey, softTags);
            if (!backingEntry) {
                return undefined;
            }
            // Mirror this freshly read backing entry into the front so the next read
            // hits it. The mirror is serialized per key: if a sync is already
            // running, this chains after it, so the front converges to this read even
            // if the backing changed since that sync started.
            const [servedEntry, mirroredEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$clone$2d$cache$2d$entry$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cloneCacheEntry"])(backingEntry);
            scheduleBackgroundSync(cacheKey, ()=>mirrorIntoFront(front, cacheKey, mirroredEntry));
            return servedEntry;
        },
        async set (cacheKey, pendingEntry) {
            // Write through to both tiers. The entry's value stream is single-use, so
            // tee it into one entry per tier.
            const entry = await pendingEntry;
            const [frontEntry, backingEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$use$2d$cache$2f$clone$2d$cache$2d$entry$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["cloneCacheEntry"])(entry);
            await Promise.all([
                front.set(cacheKey, Promise.resolve(frontEntry)),
                backing.set(cacheKey, Promise.resolve(backingEntry))
            ]);
        }
    };
}
/**
 * After serving a cache hit from the front, consult the backing and mirror a
 * newer entry into the front for the next read. Runs in the background;
 * failures are non-fatal.
 */ async function reconcileFrontFromBacking(front, backing, cacheKey, softTags, frontEntry) {
    try {
        const backingEntry = await backing.get(cacheKey, softTags);
        if (!backingEntry) {
            // The backing no longer has this entry (it was purged out-of-band). The
            // cache-handler interface has no per-key delete, so evict the front entry
            // by overwriting it with an already-expired copy: the next read sees a
            // front miss, falls through to the (also empty) backing, and the wrapper
            // regenerates. The entry we just served was the last stale read.
            await front.set(cacheKey, Promise.resolve(toExpiredEntry(frontEntry)));
            return;
        }
        if (backingEntry.timestamp > frontEntry.timestamp) {
            await front.set(cacheKey, Promise.resolve(backingEntry));
        } else {
            // The front is already up to date, so the backing entry goes unused.
            // Release its stream without awaiting: a teed stream's `cancel()` only
            // settles once the sibling branch (retained by the backing handler) is
            // also cancelled, so awaiting it here would hang the reconcile.
            void backingEntry.value.cancel();
        }
    } catch  {
    // Background warming; failures are non-fatal.
    }
}
/**
 * Mirror a backing entry into the front.
 */ async function mirrorIntoFront(front, cacheKey, entry) {
    try {
        await front.set(cacheKey, Promise.resolve(entry));
    } catch  {
    // Background warming; failures are non-fatal.
    }
}
/**
 * Build an already-expired copy of an entry, used to evict it from the front
 * handler (which has no per-key delete) once the backing no longer has it. The
 * default handler treats a negative `expire` as an eviction sentinel and
 * reports the entry as missing on the next read. A negative `expire` is used
 * rather than `0` because the dev front handler enforces a minimum retention,
 * so a `0` `expire` would be kept alive by that minimum instead of evicted. The
 * value is never read once the entry is evicted, but it must carry at least one
 * byte because the built-in LRU cache refuses to store size-0 entries.
 */ function toExpiredEntry(entry) {
    return {
        ...entry,
        expire: -1,
        value: new ReadableStream({
            start (controller) {
                controller.enqueue(new Uint8Array(1));
                controller.close();
            }
        })
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/adapter.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextRequestHint",
    ()=>NextRequestHint,
    "adapter",
    ()=>adapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$internal$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/internal-utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/client/components/app-router-headers.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$request$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/async-storage/request-store.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$work$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/async-storage/work-store.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/tracer.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/trace/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$web$2d$on$2d$close$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/web-on-close.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/get-edge-preview-props.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$builtin$2d$request$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/after/builtin-request-context.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$implicit$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/implicit-tags.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/lib/is-rsc-request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/request-meta.js [middleware] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// The proxy (middleware) does not support `'use cache'`, so this work store
// never reaches the code that reads `cacheLife` (and `'use cache'` is
// disallowed on the edge runtime anyway). This sentinel satisfies the
// non-optional type while throwing if `default` is ever read, matching the
// "never read" sentinels used for the proxy's other unused renderOpts fields
// (`staticPageGenerationTimeout: 0`, `useCacheTimeout: 0`). It surfaces loudly
// rather than silently serving a misleading profile.
const proxyCacheLifeProfiles = {
    get default () {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"]('Proxy does not support `use cache`, so reading its `default` cacheLife profile is unexpected.'), "__NEXT_ERROR_CODE", {
            value: "E1406",
            enumerable: false,
            configurable: true
        });
    }
};
class NextRequestHint extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextRequest"] {
    constructor(params){
        super(params.input, params.init);
        this.sourcePage = params.page;
    }
    get request() {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        }), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    respondWith() {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        }), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    waitUntil() {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        }), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
}
const headersGetter = {
    keys: (headers)=>Array.from(headers.keys()),
    get: (headers, key)=>headers.get(key) ?? undefined
};
let propagator = (request, fn)=>{
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])();
    return tracer.withPropagatedContext(request.headers, fn, headersGetter);
};
let testApisIntercepted = false;
function ensureTestApisIntercepted() {
    if (!testApisIntercepted) {
        testApisIntercepted = true;
        if (process.env.NEXT_PRIVATE_TEST_PROXY === 'true') {
            const { interceptTestApis, wrapRequestHandler } = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/experimental/testmode/server-edge.js [middleware] (ecmascript)");
            interceptTestApis();
            propagator = wrapRequestHandler(propagator);
        }
    }
}
async function adapter(params) {
    var _getBuiltinRequestContext;
    ensureTestApisIntercepted();
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$globals$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureInstrumentationRegistered"])();
    // TODO-APP: use explicit marker for this
    const isEdgeRendering = typeof globalThis.__BUILD_MANIFEST !== 'undefined';
    params.request.url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeRscURL"])(params.request.url);
    const requestURL = params.bypassNextUrl ? new URL(params.request.url) : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](params.request.url, {
        headers: params.request.headers,
        nextConfig: params.request.nextConfig
    });
    // Iterator uses an index to keep track of the current iteration. Because of deleting and appending below we can't just use the iterator.
    // Instead we use the keys before iteration.
    const keys = [
        ...requestURL.searchParams.keys()
    ];
    for (const key of keys){
        const value = requestURL.searchParams.getAll(key);
        const normalizedKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeNextQueryParam"])(key);
        if (normalizedKey) {
            requestURL.searchParams.delete(normalizedKey);
            for (const val of value){
                requestURL.searchParams.append(normalizedKey, val);
            }
            requestURL.searchParams.delete(key);
        }
    }
    // Ensure users only see page requests, never data requests.
    let buildId = process.env.__NEXT_BUILD_ID || '';
    if ('buildId' in requestURL) {
        buildId = requestURL.buildId || '';
        requestURL.buildId = '';
    }
    let deploymentId = ("TURBOPACK compile-time value", false);
    const requestHeaders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(params.request.headers);
    const isNextDataRequest = requestHeaders.has('x-nextjs-data');
    const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$is$2d$rsc$2d$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isRSCRequestHeader"])(requestHeaders.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RSC_HEADER"]));
    if (isNextDataRequest && requestURL.pathname === '/index') {
        requestURL.pathname = '/';
    }
    const flightHeaders = new Map();
    // Headers should only be stripped for middleware
    if (!isEdgeRendering && !("TURBOPACK compile-time value", void 0)) {
        for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
            const value = requestHeaders.get(header);
            if (value !== null) {
                flightHeaders.set(header, value);
                requestHeaders.delete(header);
            }
        }
    }
    const normalizeURL = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : requestURL;
    const rscHash = normalizeURL.searchParams.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]);
    const request = new NextRequestHint({
        page: params.page,
        // Strip internal query parameters off the request.
        input: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$internal$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stripInternalSearchParams"])(normalizeURL).toString(),
        init: {
            body: params.request.body,
            headers: requestHeaders,
            method: params.request.method,
            nextConfig: params.request.nextConfig,
            signal: params.request.signal
        }
    });
    if (params.request.requestMeta) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["setRequestMeta"])(request, params.request.requestMeta);
    }
    /**
   * This allows to identify the request as a data request. The user doesn't
   * need to know about this property neither use it. We add it for testing
   * purposes.
   */ if (isNextDataRequest) {
        Object.defineProperty(request, '__isData', {
            enumerable: false,
            value: true
        });
    }
    if (// leverage the shared instance if not we need
    // to create a fresh cache instance each time
    !globalThis.__incrementalCacheShared && params.IncrementalCache) {
        ;
        globalThis.__incrementalCache = new params.IncrementalCache({
            CurCacheHandler: params.incrementalCacheHandler,
            minimalMode: ("TURBOPACK compile-time value", "development") !== 'development',
            fetchCacheKeyPrefix: ("TURBOPACK compile-time value", ""),
            dev: ("TURBOPACK compile-time value", "development") === 'development',
            requestHeaders: params.request.headers,
            getPrerenderManifest: ()=>{
                return {
                    version: -1,
                    routes: {},
                    dynamicRoutes: {},
                    notFoundRoutes: [],
                    preview: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getEdgePreviewProps"])()
                };
            }
        });
    }
    // if we're in an edge runtime sandbox, we should use the waitUntil
    // that we receive from the enclosing NextServer
    const outerWaitUntil = params.request.waitUntil ?? ((_getBuiltinRequestContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$after$2f$builtin$2d$request$2d$context$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getBuiltinRequestContext"])()) == null ? void 0 : _getBuiltinRequestContext.waitUntil);
    const event = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextFetchEvent"]({
        request,
        page: params.page,
        context: outerWaitUntil ? {
            waitUntil: outerWaitUntil
        } : undefined
    });
    let response;
    let cookiesFromResponse;
    response = await propagator(request, ()=>{
        // we only care to make async storage available for middleware
        const isMiddleware = params.page === '/middleware' || params.page === '/src/middleware' || params.page === '/proxy' || params.page === '/src/proxy';
        if (isMiddleware) {
            // if we're in an edge function, we only get a subset of `nextConfig` (no `experimental`),
            // so we have to inject it via DefinePlugin.
            // in `next start` this will be passed normally (see `NextNodeServer.runMiddleware`).
            const waitUntil = event.waitUntil.bind(event);
            const closeController = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$web$2d$on$2d$close$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["CloseController"]();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["MiddlewareSpan"].execute, {
                spanName: `middleware ${request.method}`,
                attributes: {
                    'http.target': request.nextUrl.pathname,
                    'http.method': request.method
                }
            }, async ()=>{
                try {
                    var _params_request_nextConfig_experimental, _params_request_nextConfig;
                    const onUpdateCookies = (cookies)=>{
                        cookiesFromResponse = cookies;
                    };
                    const previewProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$get$2d$edge$2d$preview$2d$props$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getEdgePreviewProps"])();
                    const page = '/' // Fake Work
                    ;
                    const fallbackRouteParams = null;
                    const implicitTags = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$implicit$2d$tags$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getImplicitTags"])(page, request.nextUrl.pathname, fallbackRouteParams);
                    const requestStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$request$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createRequestStoreForAPI"])(request, request.nextUrl, implicitTags, onUpdateCookies, previewProps, // refresh hash to thread through here.
                    undefined);
                    const workStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$async$2d$storage$2f$work$2d$store$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createWorkStore"])({
                        page,
                        renderOpts: {
                            cacheLifeProfiles: proxyCacheLifeProfiles,
                            // Proxy doesn't do static generation, so this value does not
                            // apply here. 0 is a sentinel: if something ever reads it,
                            // it'll surface loudly instead of silently using a misleading
                            // default.
                            staticPageGenerationTimeout: 0,
                            cacheComponents: false,
                            // Proxy doesn't run instant validation; the level value is
                            // irrelevant here.
                            // TODO: remove validationLevel and other global config from renderOpts
                            validationLevel: 'warning',
                            experimental: {
                                isRoutePPREnabled: false,
                                authInterrupts: !!((_params_request_nextConfig = params.request.nextConfig) == null ? void 0 : (_params_request_nextConfig_experimental = _params_request_nextConfig.experimental) == null ? void 0 : _params_request_nextConfig_experimental.authInterrupts),
                                // Proxy doesn't fill Cache Components entries, so this value
                                // is never read. 0 is a sentinel: if something ever reads it,
                                // the cache fill will time out immediately and surface the
                                // bug.
                                useCacheTimeout: 0
                            },
                            supportsDynamicResponse: true,
                            waitUntil,
                            onClose: closeController.onClose.bind(closeController),
                            onAfterTaskError: undefined
                        },
                        isPrefetchRequest: request.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]) === '1',
                        buildId: buildId ?? '',
                        deploymentId: deploymentId ?? '',
                        previouslyRevalidatedTags: []
                    });
                    return await __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].run(workStore, ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].run(requestStore, params.handler, request, event));
                } finally{
                    // middleware cannot stream, so we can consider the response closed
                    // as soon as the handler returns.
                    // we can delay running it until a bit later --
                    // if it's needed, we'll have a `waitUntil` lock anyway.
                    setTimeout(()=>{
                        closeController.dispatchClose();
                    }, 0);
                }
            });
        }
        return params.handler(request, event);
    });
    // check if response is a Response object
    if (response && !(response instanceof Response)) {
        throw Object.defineProperty(new TypeError('Expected an instance of Response to be returned'), "__NEXT_ERROR_CODE", {
            value: "E567",
            enumerable: false,
            configurable: true
        });
    }
    if (response && cookiesFromResponse) {
        response.headers.set('set-cookie', cookiesFromResponse);
    }
    /**
   * For rewrites we must always include the locale in the final pathname
   * so we re-create the NextURL forcing it to include it when the it is
   * an internal rewrite. Also we make sure the outgoing rewrite URL is
   * a data URL if the request was a data request.
   */ const rewrite = response == null ? void 0 : response.headers.get('x-middleware-rewrite');
    if (response && rewrite && (isRSCRequest || !isEdgeRendering)) {
        var _params_request_nextConfig_experimental_clientParamParsingOrigins, _params_request_nextConfig_experimental, _params_request_nextConfig;
        const destination = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](rewrite, {
            forceLocale: true,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        if (!("TURBOPACK compile-time value", void 0) && !isEdgeRendering) {
            if (destination.host === request.nextUrl.host) {
                destination.buildId = buildId || destination.buildId;
                response.headers.set('x-middleware-rewrite', String(destination));
            }
        }
        /**
     * When the request is a data request we must show if there was a rewrite
     * with an internal header so the client knows which component to load
     * from the data request.
     */ const { url: relativeDestination, isRelative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parseRelativeURL"])(destination.toString(), requestURL.toString());
        if (!isEdgeRendering && isNextDataRequest && // if the rewrite is external and external rewrite
        // resolving config is enabled don't add this header
        // so the upstream app can set it instead
        !(("TURBOPACK compile-time value", false) && relativeDestination.match(/http(s)?:\/\//))) {
            response.headers.set('x-nextjs-rewrite', relativeDestination);
        }
        // Check to see if this is a non-relative rewrite. If it is, we need
        // to check to see if it's an allowed origin to receive the rewritten
        // headers.
        const isAllowedOrigin = !isRelative ? (_params_request_nextConfig = params.request.nextConfig) == null ? void 0 : (_params_request_nextConfig_experimental = _params_request_nextConfig.experimental) == null ? void 0 : (_params_request_nextConfig_experimental_clientParamParsingOrigins = _params_request_nextConfig_experimental.clientParamParsingOrigins) == null ? void 0 : _params_request_nextConfig_experimental_clientParamParsingOrigins.some((origin)=>new RegExp(origin).test(destination.origin)) : false;
        // If this is an RSC request, and the pathname or search has changed, and
        // this isn't an external rewrite, we need to set the rewritten pathname and
        // query headers.
        if (isRSCRequest && (isRelative || isAllowedOrigin)) {
            if (requestURL.pathname !== destination.pathname) {
                response.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_REWRITTEN_PATH_HEADER"], destination.pathname);
            }
            if (requestURL.search !== destination.search) {
                response.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_REWRITTEN_QUERY_HEADER"], destination.search.slice(1));
            }
        }
    }
    /**
   * Always forward the `_rsc` search parameter to the rewritten URL for RSC requests,
   * unless it's already present. This is necessary to ensure that RSC hash validation
   * works correctly after a rewrite. For internal rewrites, the server can validate the
   * RSC hash using the original URL, so forwarding the `_rsc` parameter is less critical.
   * However, for external rewrites (where the request is proxied to another Next.js server),
   * the external server does not have access to the original URL or its search parameters.
   * In these cases, forwarding the `_rsc` parameter is essential so that the external server
   * can perform the correct RSC hash validation.
   */ if (response && rewrite && isRSCRequest && rscHash) {
        const rewriteURL = new URL(rewrite);
        if (!rewriteURL.searchParams.has(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"])) {
            rewriteURL.searchParams.set(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"], rscHash);
            response.headers.set('x-middleware-rewrite', rewriteURL.toString());
        }
    }
    /**
   * For redirects we will not include the locale in case when it is the
   * default and we must also make sure the outgoing URL is a data one if
   * the incoming request was a data request.
   */ const redirect = response == null ? void 0 : response.headers.get('Location');
    if (response && redirect && !isEdgeRendering) {
        const redirectURL = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](redirect, {
            forceLocale: false,
            headers: params.request.headers,
            nextConfig: params.request.nextConfig
        });
        /**
     * Responses created from redirects have immutable headers so we have
     * to clone the response to be able to modify it.
     */ response = new Response(response.body, response);
        if ("TURBOPACK compile-time truthy", 1) {
            if (redirectURL.host === requestURL.host) {
                redirectURL.buildId = buildId || redirectURL.buildId;
                response.headers.set('Location', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getRelativeURL"])(redirectURL, requestURL));
            }
        }
        /**
     * When the request is a data request we can't use the location header as
     * it may end up with CORS error. Instead we map to an internal header so
     * the client knows the destination.
     */ if (isNextDataRequest) {
            response.headers.delete('Location');
            response.headers.set('x-nextjs-redirect', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$relativize$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getRelativeURL"])(redirectURL.toString(), requestURL.toString()));
        }
    }
    const finalResponse = response ? response : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Flight headers are not overridable / removable so they are applied at the end.
    const middlewareOverrideHeaders = finalResponse.headers.get('x-middleware-override-headers');
    const overwrittenHeaders = [];
    if (middlewareOverrideHeaders) {
        for (const [key, value] of flightHeaders){
            finalResponse.headers.set(`x-middleware-request-${key}`, value);
            overwrittenHeaders.push(key);
        }
        if (overwrittenHeaders.length > 0) {
            finalResponse.headers.set('x-middleware-override-headers', middlewareOverrideHeaders + ',' + overwrittenHeaders.join(','));
        }
    }
    return {
        response: finalResponse,
        waitUntil: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$fetch$2d$event$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getWaitUntilPromiseFromEvent"])(event) ?? Promise.resolve(),
        fetchMetrics: request.fetchMetrics
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageSignatureError",
    ()=>PageSignatureError,
    "RemovedPageError",
    ()=>RemovedPageError,
    "RemovedUAError",
    ()=>RemovedUAError
]);
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
            value: "E1177",
            enumerable: false,
            configurable: true
        });
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
            value: "E1178",
            enumerable: false,
            configurable: true
        });
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
            value: "E1172",
            enumerable: false,
            configurable: true
        });
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/get-edge-preview-props.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * In edge runtime, these props directly accessed from environment variables.
 *   - local: env vars will be injected through edge-runtime as runtime env vars
 *   - deployment: env vars will be replaced by edge build pipeline
 */ __turbopack_context__.s([
    "getEdgePreviewProps",
    ()=>getEdgePreviewProps
]);
function getEdgePreviewProps() {
    return {
        previewModeId: process.env.__NEXT_PREVIEW_MODE_ID || '',
        previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || '',
        previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || ''
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/globals.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "edgeInstrumentationOnRequestError",
    ()=>edgeInstrumentationOnRequestError,
    "ensureInstrumentationRegistered",
    ()=>ensureInstrumentationRegistered,
    "getEdgeInstrumentationModule",
    ()=>getEdgeInstrumentationModule
]);
async function getEdgeInstrumentationModule() {
    const instrumentation = '_ENTRIES' in globalThis && _ENTRIES.middleware_instrumentation && await _ENTRIES.middleware_instrumentation;
    return instrumentation;
}
let instrumentationModulePromise = null;
async function registerInstrumentation() {
    // Ensure registerInstrumentation is not called in production build
    if (process.env.NEXT_PHASE === 'phase-production-build') return;
    if (!instrumentationModulePromise) {
        instrumentationModulePromise = getEdgeInstrumentationModule();
    }
    const instrumentation = await instrumentationModulePromise;
    if (instrumentation == null ? void 0 : instrumentation.register) {
        try {
            await instrumentation.register();
        } catch (err) {
            err.message = `An error occurred while loading instrumentation hook: ${err.message}`;
            throw err;
        }
    }
}
async function edgeInstrumentationOnRequestError(...args) {
    const instrumentation = await getEdgeInstrumentationModule();
    try {
        var _instrumentation_onRequestError;
        await (instrumentation == null ? void 0 : (_instrumentation_onRequestError = instrumentation.onRequestError) == null ? void 0 : _instrumentation_onRequestError.call(instrumentation, ...args));
    } catch (err) {
        // Log the soft error and continue, since the original error has already been thrown
        console.error('Error in instrumentation.onRequestError:', err);
    }
}
let registerInstrumentationPromise = null;
function ensureInstrumentationRegistered() {
    if (!registerInstrumentationPromise) {
        registerInstrumentationPromise = registerInstrumentation();
    }
    return registerInstrumentationPromise;
}
function getUnsupportedModuleErrorMessage(module) {
    // warning: if you change these messages, you must adjust how dev-overlay's middleware detects modules not found
    return `The edge runtime does not support Node.js '${module}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
}
function __import_unsupported(moduleName) {
    const proxy = new Proxy(function() {}, {
        get (_obj, prop) {
            if (prop === 'then') {
                return {};
            }
            throw Object.defineProperty(new Error(getUnsupportedModuleErrorMessage(moduleName)), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        },
        construct () {
            throw Object.defineProperty(new Error(getUnsupportedModuleErrorMessage(moduleName)), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        },
        apply (_target, _this, args) {
            if (typeof args[0] === 'function') {
                return args[0](proxy);
            }
            throw Object.defineProperty(new Error(getUnsupportedModuleErrorMessage(moduleName)), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    });
    return new Proxy({}, {
        get: ()=>proxy
    });
}
function enhanceGlobals() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
enhanceGlobals();
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextURL",
    ()=>NextURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/get-hostname.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [middleware] (ecmascript)");
;
;
;
;
const REGEX_LOCALHOST_HOSTNAME = /^(?:127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)$/;
function parseURL(url, base) {
    const parsed = new URL(String(url), base && String(base));
    if (REGEX_LOCALHOST_HOSTNAME.test(parsed.hostname)) {
        parsed.hostname = 'localhost';
    }
    return parsed;
}
const Internal = Symbol('NextURLInternal');
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === 'object' && 'pathname' in baseOrOpts || typeof baseOrOpts === 'string') {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ''
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getNextPathnameInfo"])(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !("TURBOPACK compile-time value", void 0),
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getHostname"])(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["detectDomainLocale"])((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? '';
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["formatNextPathnameInfo"])({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? '';
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw Object.defineProperty(new TypeError(`The NextURL configuration includes no locale "${locale}"`), "__NEXT_ERROR_CODE", {
                value: "E597",
                enumerable: false,
                configurable: true
            });
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith('/') ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
            value: "E1176",
            enumerable: false,
            configurable: true
        });
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
/**
 * Builds the read methods for a sealed view that exposes all of `target`.
 */ function createPassThroughMethods(target, sealed) {
    return {
        get: target.get.bind(target),
        has: target.has.bind(target),
        getSetCookie: target.getSetCookie.bind(target),
        keys: target.keys.bind(target),
        values: target.values.bind(target),
        entries: target.entries.bind(target),
        [Symbol.iterator]: target[Symbol.iterator].bind(target),
        // The native method passes the unsealed target as the callback's `parent`
        // argument. That is a mutable handle on the underlying headers. Pass the
        // sealed view instead.
        forEach (callbackfn, thisArg) {
            for (const [name, value] of target.entries()){
                callbackfn.call(thisArg, value, name, sealed);
            }
        }
    };
}
/**
 * Builds the read methods for a sealed view that omits the header names matched
 * by `isHidden`.
 */ function createHidingMethods(target, sealed, isHidden) {
    function* entries() {
        for (const entry of target.entries()){
            if (!isHidden(entry[0])) {
                yield entry;
            }
        }
    }
    return {
        entries,
        [Symbol.iterator]: entries,
        get: (name)=>isHidden(name) ? null : target.get(name),
        has: (name)=>isHidden(name) ? false : target.has(name),
        getSetCookie: ()=>isHidden('set-cookie') ? [] : target.getSetCookie(),
        *keys () {
            for (const name of target.keys()){
                if (!isHidden(name)) {
                    yield name;
                }
            }
        },
        *values () {
            for (const [, value] of entries()){
                yield value;
            }
        },
        // The native method passes the unsealed target as the callback's `parent`
        // argument. That is a mutable handle on the underlying headers. Pass the
        // sealed view instead.
        forEach (callbackfn, thisArg) {
            for (const [name, value] of entries()){
                callbackfn.call(thisArg, value, name, sealed);
            }
        }
    };
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   *
   * The sealed view stays live. Later writes to `headers` remain visible
   * through it.
   *
   * `hidden` omits the given header names from every read operation (`get`,
   * `has`, `getSetCookie`, `forEach`, and iteration). The names must be
   * lowercase. The underlying headers are neither copied nor mutated, so hidden
   * headers remain available to the framework.
   */ static seal(headers, hidden) {
        const isHidden = hidden && hidden.size > 0 ? (name)=>hidden.has(name.toLowerCase()) : null;
        // The methods are built once per sealed view and reused, so repeated access
        // returns the same function instead of a fresh closure. They are assigned
        // after the proxy exists because `forEach` hands the proxy to its callback.
        // Creating the proxy runs no trap, so nothing can read them before then.
        let methods;
        const sealed = new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    case Symbol.iterator:
                        return methods[Symbol.iterator];
                    case 'get':
                    case 'has':
                    case 'getSetCookie':
                    case 'keys':
                    case 'values':
                    case 'entries':
                    case 'forEach':
                        return methods[prop];
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
        methods = isHidden ? createHidingMethods(headers, sealed, isHidden) : createPassThroughMethods(headers, sealed);
        return sealed;
    }
    /**
   * @param headers
   * @returns A fresh object identity backed by the original value
   */ static fresh(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/next-request.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextRequestAdapter",
    ()=>NextRequestAdapter,
    "ResponseAborted",
    ()=>ResponseAborted,
    "ResponseAbortedName",
    ()=>ResponseAbortedName,
    "createAbortController",
    ()=>createAbortController,
    "signalFromNodeResponse",
    ()=>signalFromNodeResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/request-meta.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/base-http/helpers.js [middleware] (ecmascript)");
;
;
;
;
const ResponseAbortedName = 'ResponseAborted';
class ResponseAborted extends Error {
    constructor(...args){
        super(...args), this.name = ResponseAbortedName;
    }
}
function createAbortController(response) {
    const controller = new AbortController();
    // If `finish` fires first, then `res.end()` has been called and the close is
    // just us finishing the stream on our side. If `close` fires first, then we
    // know the client disconnected before we finished.
    response.once('close', ()=>{
        if (response.writableFinished) return;
        controller.abort(new ResponseAborted());
    });
    return controller;
}
function signalFromNodeResponse(response) {
    const { errored, destroyed } = response;
    if (errored || destroyed) {
        return AbortSignal.abort(errored ?? new ResponseAborted());
    }
    const { signal } = createAbortController(response);
    return signal;
}
class NextRequestAdapter {
    static fromBaseNextRequest(request, signal) {
        if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") === 'edge' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isWebNextRequest"])(request)) //TURBOPACK unreachable
        ;
        else if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") !== 'edge' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isNodeNextRequest"])(request)) {
            return NextRequestAdapter.fromNodeNextRequest(request, signal);
        } else {
            throw Object.defineProperty(new Error('Invariant: Unsupported NextRequest type'), "__NEXT_ERROR_CODE", {
                value: "E345",
                enumerable: false,
                configurable: true
            });
        }
    }
    static fromNodeNextRequest(request, signal) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD' && request.body) {
            // @ts-expect-error - this is handled by undici, when streams/web land use it instead
            body = request.body;
        }
        let url;
        if (request.url.startsWith('http')) {
            url = new URL(request.url);
        } else {
            // Grab the full URL from the request metadata.
            const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getRequestMeta"])(request, 'initURL');
            if (!base || !base.startsWith('http')) {
                // Because the URL construction relies on the fact that the URL provided
                // is absolute, we need to provide a base URL. We can't use the request
                // URL because it's relative, so we use a dummy URL instead.
                url = new URL(request.url, 'http://n');
            } else {
                url = new URL(request.url, base);
            }
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextRequest"](url, {
            method: request.method,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(request.headers),
            duplex: 'half',
            signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...signal.aborted ? {} : {
                body
            }
        });
    }
    static fromWebNextRequest(request) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD') {
            body = request.body;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextRequest"](request.url, {
            method: request.method,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(request.headers),
            duplex: 'half',
            signal: request.request.signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...request.request.signal.aborted ? {} : {
                body
            }
        });
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReflectAdapter",
    ()=>ReflectAdapter
]);
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/request-cookies.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MutableRequestCookiesAdapter",
    ()=>MutableRequestCookiesAdapter,
    "ReadonlyRequestCookiesError",
    ()=>ReadonlyRequestCookiesError,
    "RequestCookiesAdapter",
    ()=>RequestCookiesAdapter,
    "appendMutableCookies",
    ()=>appendMutableCookies,
    "areCookiesMutableInCurrentPhase",
    ()=>areCookiesMutableInCurrentPhase,
    "createCookiesWithMutableAccessCheck",
    ()=>createCookiesWithMutableAccessCheck,
    "getModifiedCookieValues",
    ()=>getModifiedCookieValues,
    "responseCookiesToRequestCookies",
    ()=>responseCookiesToRequestCookies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$action$2d$revalidation$2d$kind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/action-revalidation-kind.js [middleware] (ecmascript)");
;
;
;
;
;
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options');
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
            value: "E1180",
            enumerable: false,
            configurable: true
        });
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'clear':
                    case 'delete':
                    case 'set':
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * @param cookies
   * @returns A fresh object identity backed by the original value
   */ static fresh(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting workStore
            const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
            if (workStore) {
                workStore.pathWasRevalidated = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$action$2d$revalidation$2d$kind$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ActionDidRevalidateStaticAndDynamic"];
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        const wrappedCookies = new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case 'delete':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case 'set':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.set(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
        return wrappedCookies;
    }
}
function createCookiesWithMutableAccessCheck(requestStore) {
    const wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get (target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().delete');
                        target.delete(...args);
                        return wrappedCookies;
                    };
                case 'set':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().set');
                        target.set(...args);
                        return wrappedCookies;
                    };
                default:
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](new Headers());
    for (const cookie of responseCookies.getAll()){
        requestCookies.set(cookie);
    }
    return requestCookies;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
;
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/fetch-event.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextFetchEvent",
    ()=>NextFetchEvent,
    "getWaitUntilPromiseFromEvent",
    ()=>getWaitUntilPromiseFromEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
;
const responseSymbol = Symbol('response');
const passThroughSymbol = Symbol('passThrough');
const waitUntilSymbol = Symbol('waitUntil');
class FetchEvent {
    constructor(_request, waitUntil){
        this[passThroughSymbol] = false;
        this[waitUntilSymbol] = waitUntil ? {
            kind: 'external',
            function: waitUntil
        } : {
            kind: 'internal',
            promises: []
        };
    }
    // TODO: is this dead code? NextFetchEvent never lets this get called
    respondWith(response) {
        if (!this[responseSymbol]) {
            this[responseSymbol] = Promise.resolve(response);
        }
    }
    // TODO: is this dead code? passThroughSymbol is unused
    passThroughOnException() {
        this[passThroughSymbol] = true;
    }
    waitUntil(promise) {
        if (this[waitUntilSymbol].kind === 'external') {
            // if we received an external waitUntil, we delegate to it
            // TODO(after): this will make us not go through `getServerError(error, 'edge-server')` in `sandbox`
            const waitUntil = this[waitUntilSymbol].function;
            return waitUntil(promise);
        } else {
            // if we didn't receive an external waitUntil, we make it work on our own
            // (and expect the caller to do something with the promises)
            this[waitUntilSymbol].promises.push(promise);
        }
    }
}
function getWaitUntilPromiseFromEvent(event) {
    return event[waitUntilSymbol].kind === 'internal' ? Promise.all(event[waitUntilSymbol].promises).then(()=>{}) : undefined;
}
class NextFetchEvent extends FetchEvent {
    constructor(params){
        var _params_context;
        super(params.request, (_params_context = params.context) == null ? void 0 : _params_context.waitUntil);
        this.sourcePage = params.page;
    }
    /**
   * @deprecated The `request` is now the first parameter and the API is now async.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ get request() {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        }), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    /**
   * @deprecated Using `respondWith` is no longer needed.
   *
   * Read more: https://nextjs.org/docs/messages/middleware-new-signature
   */ respondWith() {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PageSignatureError"]({
            page: this.sourcePage
        }), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/request.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNALS",
    ()=>INTERNALS,
    "NextRequest",
    ()=>NextRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
;
;
;
;
const INTERNALS = Symbol('internal request');
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== 'string' && 'url' in input ? input.url : String(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(url);
        // node Request instance requires duplex option when a body
        // is present or it errors, we don't handle this for
        // Request being passed in since it would have already
        // errored if this wasn't configured
        if ("TURBOPACK compile-time truthy", 1) {
            if (init.body && init.duplex !== 'half') {
                init.duplex = 'half';
            }
        }
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](url, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RequestCookies"](this.headers),
            nextUrl,
            url: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : nextUrl.toString()
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RemovedPageError"]();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["RemovedUAError"]();
    }
    get url() {
        return this[INTERNALS].url;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextResponse",
    ()=>NextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/next-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [middleware] (ecmascript)");
;
;
;
;
;
const INTERNALS = Symbol('internal response');
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw Object.defineProperty(new Error('request.headers must be an instance of Headers'), "__NEXT_ERROR_CODE", {
                value: "E119",
                enumerable: false,
                configurable: true
            });
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set('x-middleware-request-' + key, value);
            keys.push(key);
        }
        headers.set('x-middleware-override-headers', keys.join(','));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        const headers = this.headers;
        const cookies = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"](headers);
        const cookiesProxy = new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'delete':
                    case 'set':
                        {
                            return (...args)=>{
                                const result = Reflect.apply(target[prop], target, args);
                                const newHeaders = new Headers(headers);
                                if (result instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ResponseCookies"]) {
                                    headers.set('x-middleware-set-cookie', result.getAll().map((cookie)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stringifyCookie"])(cookie)).join(','));
                                }
                                handleMiddlewareField(init, newHeaders);
                                return result;
                            };
                        }
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
        this[INTERNALS] = {
            cookies: cookiesProxy,
            url: init.url ? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextURL"](init.url, {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === 'number' ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw Object.defineProperty(new RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", {
                value: "E529",
                enumerable: false,
                configurable: true
            });
        }
        const initObj = typeof init === 'object' ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set('Location', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set('x-middleware-rewrite', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["validateURL"])(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set('x-middleware-next', '1');
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/utils.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromNodeOutgoingHttpHeaders",
    ()=>fromNodeOutgoingHttpHeaders,
    "normalizeNextQueryParam",
    ()=>normalizeNextQueryParam,
    "splitCookiesString",
    ()=>splitCookiesString,
    "toNodeOutgoingHttpHeaders",
    ()=>toNodeOutgoingHttpHeaders,
    "validateURL",
    ()=>validateURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
;
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === 'undefined') continue;
            if (typeof v === 'number') {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== '=' && ch !== ';' && ch !== ',';
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ',') {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === 'set-cookie') {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw Object.defineProperty(new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        }), "__NEXT_ERROR_CODE", {
            value: "E61",
            enumerable: false,
            configurable: true
        });
    }
}
function normalizeNextQueryParam(key) {
    const prefixes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"]
    ];
    for (const prefix of prefixes){
        if (key !== prefix && key.startsWith(prefix)) {
            return key.substring(prefix.length);
        }
    }
    return null;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/web/web-on-close.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Monitor when the consumer finishes reading the response body.
that's as close as we can get to `res.on('close')` using web APIs.
*/ __turbopack_context__.s([
    "CloseController",
    ()=>CloseController,
    "trackBodyConsumed",
    ()=>trackBodyConsumed,
    "trackStreamConsumed",
    ()=>trackStreamConsumed
]);
function trackBodyConsumed(body, onEnd) {
    if (typeof body === 'string') {
        const generator = async function* generate() {
            const encoder = new TextEncoder();
            yield encoder.encode(body);
            onEnd();
        };
        // @ts-expect-error BodyInit typings doesn't seem to include AsyncIterables even though it's supported in practice
        return generator();
    } else {
        return trackStreamConsumed(body, onEnd);
    }
}
function trackStreamConsumed(stream, onEnd) {
    // NOTE: This function must handle `stream` being aborted or cancelled,
    // so it can't just be this:
    //
    //   return stream.pipeThrough(new TransformStream({ flush() { onEnd() } }))
    //
    // because that doesn't handle cancellations.
    // (and cancellation handling via `Transformer.cancel` is only available in node >20)
    const dest = new TransformStream();
    const runOnEnd = ()=>onEnd();
    stream.pipeTo(dest.writable).then(runOnEnd, runOnEnd);
    return dest.readable;
}
class CloseController {
    onClose(callback) {
        if (this.isClosed) {
            throw Object.defineProperty(new Error('Cannot subscribe to a closed CloseController'), "__NEXT_ERROR_CODE", {
                value: "E365",
                enumerable: false,
                configurable: true
            });
        }
        this.target.addEventListener('close', callback);
        this.listeners++;
    }
    dispatchClose() {
        if (this.isClosed) {
            throw Object.defineProperty(new Error('Cannot close a CloseController multiple times'), "__NEXT_ERROR_CODE", {
                value: "E229",
                enumerable: false,
                configurable: true
            });
        }
        if (this.listeners > 0) {
            this.target.dispatchEvent(new Event('close'));
        }
        this.isClosed = true;
    }
    constructor(){
        this.target = new EventTarget();
        this.listeners = 0;
        this.isClosed = false;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/action-revalidation-kind.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionDidNotRevalidate",
    ()=>ActionDidNotRevalidate,
    "ActionDidRevalidateDynamicOnly",
    ()=>ActionDidRevalidateDynamicOnly,
    "ActionDidRevalidateStaticAndDynamic",
    ()=>ActionDidRevalidateStaticAndDynamic
]);
const ActionDidNotRevalidate = 0;
const ActionDidRevalidateStaticAndDynamic = 1;
const ActionDidRevalidateDynamicOnly = 2;
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/errors/constants.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MISSING_ROOT_TAGS_ERROR",
    ()=>MISSING_ROOT_TAGS_ERROR
]);
const MISSING_ROOT_TAGS_ERROR = 'NEXT_MISSING_ROOT_TAGS';
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/escape-regexp.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeStringRegexp",
    ()=>escapeStringRegexp
]);
// regexp is based on https://github.com/sindresorhus/escape-string-regexp
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, '\\$&');
    }
    return str;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/get-hostname.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ __turbopack_context__.s([
    "getHostname",
    ()=>getHostname
]);
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if (headers?.host && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(':', 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/hash.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.
__turbopack_context__.s([
    "djb2Hash",
    ()=>djb2Hash,
    "hexHash",
    ()=>hexHash
]);
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectDomainLocale",
    ()=>detectDomainLocale
]);
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        // remove port if present
        const domainHostname = item.domain?.split(':', 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || item.locales?.some((locale)=>locale.toLowerCase() === detectedLocale)) {
            return item;
        }
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeLocalePath",
    ()=>normalizeLocalePath
]);
/**
 * A cache of lowercased locales for each list of locales. This is stored as a
 * WeakMap so if the locales are garbage collected, the cache entry will be
 * removed as well.
 */ const cache = new WeakMap();
function normalizeLocalePath(pathname, locales) {
    // If locales is undefined, return the pathname as is.
    if (!locales) return {
        pathname
    };
    // Get the cached lowercased locales or create a new cache entry.
    let lowercasedLocales = cache.get(locales);
    if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale)=>locale.toLowerCase());
        cache.set(locales, lowercasedLocales);
    }
    let detectedLocale;
    // The first segment will be empty, because it has a leading `/`. If
    // there is no further segment, there is no locale (or it's the default).
    const segments = pathname.split('/', 2);
    // If there's no second segment (ie, the pathname is just `/`), there's no
    // locale.
    if (!segments[1]) return {
        pathname
    };
    // The second segment will contain the locale part if any.
    const segment = segments[1].toLowerCase();
    // See if the segment matches one of the locales. If it doesn't, there is
    // no locale (or it's the default).
    const index = lowercasedLocales.indexOf(segment);
    if (index < 0) return {
        pathname
    };
    // Return the case-sensitive locale.
    detectedLocale = locales[index];
    // Remove the `/${locale}` part of the pathname.
    pathname = pathname.slice(detectedLocale.length + 1) || '/';
    return {
        pathname,
        detectedLocale
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvariantError",
    ()=>InvariantError
]);
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        Object.defineProperty(this, "__NEXT_ERROR_CODE", {
            value: "E1179",
            enumerable: false,
            configurable: true
        });
        this.name = 'InvariantError';
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/is-thenable.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ __turbopack_context__.s([
    "isThenable",
    ()=>isThenable
]);
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/isomorphic/path.js [middleware] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ let path;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
}
module.exports = path;
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_context__.s([
    "ensureLeadingSlash",
    ()=>ensureLeadingSlash
]);
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/page-path/normalize-page-path.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizePagePath",
    ()=>normalizePagePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/index.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$dynamic$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/is-dynamic.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/utils.js [middleware] (ecmascript)");
;
;
;
function normalizePagePath(page) {
    const normalized = /^\/index(\/|$)/.test(page) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$dynamic$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isDynamicRoute"])(page) ? `/index${page}` : page === '/' ? '/index' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(page);
    if ("TURBOPACK compile-time truthy", 1) {
        const { posix } = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
        const resolvedPage = posix.normalize(normalized);
        if (resolvedPage !== normalized) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NormalizeError"](`Requested and resolved page mismatch: ${normalized} ${resolvedPage}`);
        }
    }
    return normalized;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/routes/app.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInterceptionAppRoute",
    ()=>isInterceptionAppRoute,
    "isNormalizedAppRoute",
    ()=>isNormalizedAppRoute,
    "parseAppRouteSegment",
    ()=>parseAppRouteSegment,
    "parseAppRouteWithSlots",
    ()=>parseAppRouteWithSlots,
    "parseNormalizedAppRoute",
    ()=>parseNormalizedAppRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [middleware] (ecmascript)");
;
;
;
function normalizeEncodedDynamicPlaceholder(segment) {
    if (!/%5b|%5d/i.test(segment)) {
        return segment;
    }
    try {
        const decodedSegment = decodeURIComponent(segment);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getSegmentParam"])(decodedSegment) ? decodedSegment : segment;
    } catch  {
        return segment;
    }
}
function parseAppRouteSegment(segment) {
    if (segment === '') {
        return null;
    }
    // Check if the segment starts with an interception marker
    const interceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((m)=>segment.startsWith(m));
    const param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getSegmentParam"])(segment);
    if (param) {
        return {
            type: 'dynamic',
            name: segment,
            param,
            interceptionMarker
        };
    } else if (segment.startsWith('(') && segment.endsWith(')')) {
        return {
            type: 'route-group',
            name: segment,
            interceptionMarker
        };
    } else if (segment.startsWith('@')) {
        return {
            type: 'parallel-route',
            name: segment,
            interceptionMarker
        };
    } else {
        return {
            type: 'static',
            name: segment,
            interceptionMarker
        };
    }
}
function isNormalizedAppRoute(route) {
    return route.normalized;
}
function isInterceptionAppRoute(route) {
    return route.interceptionMarker !== undefined && route.interceptingRoute !== undefined && route.interceptedRoute !== undefined;
}
// Bitmask for which non-URL segment types to allow during parsing.
// By default, route groups and parallel routes are rejected because
// they should have been stripped by normalizeAppPath. These flags
// let callers opt in to allowing specific types.
const OnlyRoutableSegments = /*   */ 0;
const AllowParallelSegments = /*  */ 1;
const AllowGroupSegments = /*     */ 2;
function parseAppRouteImpl(pathname, allowedTypes) {
    const pathnameSegments = pathname.split('/').filter(Boolean);
    // Build segments array with static and dynamic segments
    const segments = [];
    // Parse if this is an interception route.
    let interceptionMarker;
    let interceptingRoute;
    let interceptedRoute;
    for (const segment of pathnameSegments){
        const normalizedSegment = normalizeEncodedDynamicPlaceholder(segment);
        // Parse the segment into an AppSegment.
        const appSegment = parseAppRouteSegment(normalizedSegment);
        if (!appSegment) {
            continue;
        }
        if (appSegment.type === 'route-group' && !(allowedTypes & AllowGroupSegments)) {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"](`${pathname} is being parsed as a normalized route, but it has a route group segment.`), "__NEXT_ERROR_CODE", {
                value: "E1151",
                enumerable: false,
                configurable: true
            });
        }
        if (appSegment.type === 'parallel-route' && !(allowedTypes & AllowParallelSegments)) {
            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"](`${pathname} is being parsed as a normalized route, but it has a parallel route segment.`), "__NEXT_ERROR_CODE", {
                value: "E1152",
                enumerable: false,
                configurable: true
            });
        }
        segments.push(appSegment);
        if (appSegment.interceptionMarker) {
            const parts = pathname.split(appSegment.interceptionMarker);
            if (parts.length !== 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${pathname}`), "__NEXT_ERROR_CODE", {
                    value: "E924",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptingRoute = parseAppRouteImpl(parts[0], allowedTypes);
            interceptedRoute = parseAppRouteImpl(parts[1], allowedTypes);
            interceptionMarker = appSegment.interceptionMarker;
        }
    }
    const dynamicSegments = segments.filter((segment)=>segment.type === 'dynamic');
    return {
        normalized: allowedTypes === OnlyRoutableSegments,
        pathname,
        segments,
        dynamicSegments,
        interceptionMarker,
        interceptingRoute,
        interceptedRoute
    };
}
function parseNormalizedAppRoute(pathname) {
    return parseAppRouteImpl(pathname, OnlyRoutableSegments);
}
function parseAppRouteWithSlots(pathname) {
    return parseAppRouteImpl(pathname, AllowParallelSegments);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLocale",
    ()=>addLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
;
;
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, '/api')) return path;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, `/${locale.toLowerCase()}`)) return path;
    }
    // Add the locale prefix to the path.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(path, `/${locale}`);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPathPrefix",
    ()=>addPathPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
;
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return `${prefix}${pathname}${query}${hash}`;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPathSuffix",
    ()=>addPathSuffix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
;
function addPathSuffix(path, suffix) {
    if (!path.startsWith('/') || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return `${pathname}${suffix}${query}${hash}`;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compareAppPaths",
    ()=>compareAppPaths,
    "normalizeAppPath",
    ()=>normalizeAppPath,
    "normalizeRscURL",
    ()=>normalizeRscURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)");
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function compareAppPaths(a, b) {
    const aHasSlot = a.includes('/@');
    const bHasSlot = b.includes('/@');
    if (aHasSlot && !bHasSlot) return -1;
    if (!aHasSlot && bHasSlot) return 1;
    return a.localeCompare(b);
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/cache-busting-search-param.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeCacheBustingSearchParam",
    ()=>computeCacheBustingSearchParam,
    "computeLegacyCacheBustingSearchParam",
    ()=>computeLegacyCacheBustingSearchParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$hash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/hash.js [middleware] (ecmascript)");
;
const CACHE_BUSTING_SEARCH_PARAM_DIGEST_BYTES = 12;
const textEncoder = new TextEncoder();
function encodeCacheBustingSearchParam(bytes) {
    let binary = '';
    for(let i = 0; i < bytes.length; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function normalizeCacheBustingInput(value) {
    if (value === undefined) {
        return '0';
    }
    return Array.isArray(value) ? value.join(',') : value;
}
function createCacheBustingSearchParamInput(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    if ((prefetchHeader === undefined || prefetchHeader === '0') && segmentPrefetchHeader === undefined && stateTreeHeader === undefined && nextUrlHeader === undefined) {
        return null;
    }
    return [
        prefetchHeader ?? '0',
        normalizeCacheBustingInput(segmentPrefetchHeader),
        normalizeCacheBustingInput(stateTreeHeader),
        normalizeCacheBustingInput(nextUrlHeader)
    ].join(',');
}
async function computeCacheBustingSearchParamFromInput(input) {
    // Truncate SHA-256 to 96 bits to keep `_rsc` compact
    const digest = await globalThis.crypto.subtle.digest('SHA-256', textEncoder.encode(input));
    return encodeCacheBustingSearchParam(new Uint8Array(digest).subarray(0, CACHE_BUSTING_SEARCH_PARAM_DIGEST_BYTES));
}
async function computeCacheBustingSearchParam(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    const input = createCacheBustingSearchParamInput(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader);
    if (input === null) {
        return '';
    }
    return computeCacheBustingSearchParamFromInput(input);
}
function computeLegacyCacheBustingSearchParam(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    const input = createCacheBustingSearchParamInput(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader);
    if (input === null) {
        return '';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$hash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["hexHash"])(input);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatNextPathnameInfo",
    ()=>formatNextPathnameInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [middleware] (ecmascript)");
;
;
;
;
function formatNextPathnameInfo(info) {
    let pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addLocale"])(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
    }
    if (info.buildId) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathSuffix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, `/_next/data/${info.buildId}`), info.pathname === '/' ? 'index.json' : '.json');
    }
    pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith('/') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["addPathSuffix"])(pathname, '/') : pathname : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/format-url.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatUrl",
    ()=>formatUrl,
    "formatWithValidation",
    ()=>formatWithValidation,
    "urlObjectKeys",
    ()=>urlObjectKeys
]);
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$querystring$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/querystring.js [middleware] (ecmascript)");
;
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$querystring$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["urlQueryToSearchParams"](query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PARAMETER_PATTERN",
    ()=>PARAMETER_PATTERN,
    "getDynamicParam",
    ()=>getDynamicParam,
    "interpolateParallelRouteParams",
    ()=>interpolateParallelRouteParams,
    "parseMatchedParameter",
    ()=>parseMatchedParameter,
    "parseParameter",
    ()=>parseParameter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/routes/app.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [middleware] (ecmascript)");
;
;
;
;
/**
 * Gets the value of a param from the params object. This correctly handles the
 * case where the param is a fallback route param and encodes the resulting
 * value.
 *
 * @param interpolatedParams - The params object.
 * @param segmentKey - The key of the segment.
 * @param fallbackRouteParams - The fallback route params.
 * @returns The value of the param.
 */ function getParamValue(interpolatedParams, segmentKey, fallbackRouteParams) {
    let value = interpolatedParams[segmentKey];
    if (fallbackRouteParams?.has(segmentKey)) {
        // We know that the fallback route params has the segment key because we
        // checked that above.
        const [searchValue] = fallbackRouteParams.get(segmentKey);
        value = searchValue;
    } else if (Array.isArray(value)) {
        value = value.map((i)=>encodeURIComponent(i));
    } else if (typeof value === 'string') {
        value = encodeURIComponent(value);
    }
    return value;
}
function interpolateParallelRouteParams(loaderTree, params, pagePath, fallbackRouteParams) {
    const interpolated = structuredClone(params);
    // Stack-based traversal with depth tracking
    const stack = [
        {
            tree: loaderTree,
            depth: 0
        }
    ];
    // Parse the route from the provided page path.
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parseNormalizedAppRoute"])(pagePath);
    while(stack.length > 0){
        const { tree, depth } = stack.pop();
        const { segment, parallelRoutes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parseLoaderTree"])(tree);
        const appSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$routes$2f$app$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parseAppRouteSegment"])(segment);
        if (appSegment?.type === 'dynamic' && !interpolated.hasOwnProperty(appSegment.param.paramName) && // If the param is in the fallback route params, we don't need to
        // interpolate it because it's already marked as being unknown.
        !fallbackRouteParams?.has(appSegment.param.paramName)) {
            const { paramName, paramType } = appSegment.param;
            const paramValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$resolve$2d$param$2d$value$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["resolveParamValue"])(paramName, paramType, depth, route, interpolated);
            if (paramValue !== undefined) {
                interpolated[paramName] = paramValue;
            } else if (paramType !== 'optional-catchall') {
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"](`Could not resolve param value for segment: ${paramName}`), "__NEXT_ERROR_CODE", {
                    value: "E932",
                    enumerable: false,
                    configurable: true
                });
            }
        }
        // Calculate next depth - increment if this is not a route group and not empty
        let nextDepth = depth;
        if (appSegment && appSegment.type !== 'route-group' && appSegment.type !== 'parallel-route') {
            nextDepth++;
        }
        // Add all parallel routes to the stack for processing
        for (const parallelRoute of Object.values(parallelRoutes)){
            stack.push({
                tree: parallelRoute,
                depth: nextDepth
            });
        }
    }
    return interpolated;
}
function getDynamicParam(interpolatedParams, segmentKey, dynamicParamType, fallbackRouteParams, staticSiblings) {
    let value = getParamValue(interpolatedParams, segmentKey, fallbackRouteParams);
    // handle the case where an optional catchall does not have a value,
    // e.g. `/dashboard/[[...slug]]` when requesting `/dashboard`
    if (!value || value.length === 0) {
        if (dynamicParamType === 'oc') {
            return {
                param: segmentKey,
                value: null,
                type: dynamicParamType,
                treeSegment: [
                    segmentKey,
                    '',
                    dynamicParamType,
                    staticSiblings
                ]
            };
        }
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"](`Missing value for segment key: "${segmentKey}" with dynamic param type: ${dynamicParamType}`), "__NEXT_ERROR_CODE", {
            value: "E864",
            enumerable: false,
            configurable: true
        });
    }
    const paramCacheKey = Array.isArray(value) ? value.join('/') : value;
    return {
        param: segmentKey,
        // The value that is passed to user code.
        value,
        // The value that is rendered in the router tree.
        // TODO: If the number of static siblings exceeds some threshold (e.g.,
        // dozens or hundreds), consider sending a Bloom filter instead of the full
        // array to reduce payload size. The client would then use the Bloom filter
        // to check membership with a small false positive rate.
        treeSegment: [
            segmentKey,
            paramCacheKey,
            dynamicParamType,
            staticSiblings
        ],
        type: dynamicParamType
    };
}
const PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
function parseParameter(param) {
    const match = param.match(PARAMETER_PATTERN);
    if (!match) {
        return parseMatchedParameter(param);
    }
    return parseMatchedParameter(match[2]);
}
function parseMatchedParameter(param) {
    const optional = param.startsWith('[') && param.endsWith(']');
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith('...');
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNextPathnameInfo",
    ()=>getNextPathnameInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
;
;
;
function getNextPathnameInfo(pathname, options) {
    const { basePath, i18n, trailingSlash } = options.nextConfig ?? {};
    const info = {
        pathname,
        trailingSlash: pathname !== '/' ? pathname.endsWith('/') : trailingSlash
    };
    if (basePath && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(info.pathname, basePath)) {
        info.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removePathPrefix"])(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith('/_next/data/') && info.pathname.endsWith('.json')) {
        const paths = info.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/');
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== 'index' ? `/${paths.slice(1).join('/')}` : '/';
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        info.pathname = result.pathname ?? info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getParamProperties",
    ()=>getParamProperties,
    "getSegmentParam",
    ()=>getSegmentParam,
    "isCatchAll",
    ()=>isCatchAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [middleware] (ecmascript)");
;
function getSegmentParam(segment) {
    const interceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((marker)=>segment.startsWith(marker));
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith('[[...') && segment.endsWith(']]')) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            paramType: 'optional-catchall',
            paramName: segment.slice(5, -2)
        };
    }
    if (segment.startsWith('[...') && segment.endsWith(']')) {
        return {
            paramType: interceptionMarker ? `catchall-intercepted-${interceptionMarker}` : 'catchall',
            paramName: segment.slice(4, -1)
        };
    }
    if (segment.startsWith('[') && segment.endsWith(']')) {
        return {
            paramType: interceptionMarker ? `dynamic-intercepted-${interceptionMarker}` : 'dynamic',
            paramName: segment.slice(1, -1)
        };
    }
    return null;
}
function isCatchAll(type) {
    return type === 'catchall' || type === 'catchall-intercepted-(..)(..)' || type === 'catchall-intercepted-(.)' || type === 'catchall-intercepted-(..)' || type === 'catchall-intercepted-(...)' || type === 'optional-catchall';
}
function getParamProperties(paramType) {
    let repeat = false;
    let optional = false;
    switch(paramType){
        case 'catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            repeat = true;
            break;
        case 'optional-catchall':
            repeat = true;
            optional = true;
            break;
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            break;
        default:
            paramType;
    }
    return {
        repeat,
        optional
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/index.js [middleware] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$dynamic$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/is-dynamic.js [middleware] (ecmascript)");
;
;
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/interception-prefix-from-param-type.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "interceptionPrefixFromParamType",
    ()=>interceptionPrefixFromParamType
]);
function interceptionPrefixFromParamType(paramType) {
    switch(paramType){
        case 'catchall-intercepted-(..)(..)':
        case 'dynamic-intercepted-(..)(..)':
            return '(..)(..)';
        case 'catchall-intercepted-(.)':
        case 'dynamic-intercepted-(.)':
            return '(.)';
        case 'catchall-intercepted-(..)':
        case 'dynamic-intercepted-(..)':
            return '(..)';
        case 'catchall-intercepted-(...)':
        case 'dynamic-intercepted-(...)':
            return '(...)';
        case 'catchall':
        case 'dynamic':
        case 'optional-catchall':
        default:
            return null;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERCEPTION_ROUTE_MARKERS",
    ()=>INTERCEPTION_ROUTE_MARKERS,
    "extractInterceptionRouteInformation",
    ()=>extractInterceptionRouteInformation,
    "isInterceptionRouteAppPath",
    ()=>isInterceptionRouteAppPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [middleware] (ecmascript)");
;
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeAppPath"])(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/is-dynamic.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDynamicRoute",
    ()=>isDynamicRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [middleware] (ecmascript)");
;
// Identify /.*[param].*/ in route string
const TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
// Identify /[param]/ in route string
const TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
function isDynamicRoute(route, strict = true) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isInterceptionRouteAppPath"])(route)) {
        route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["extractInterceptionRouteInformation"])(route).interceptedRoute;
    }
    if (strict) {
        return TEST_STRICT_ROUTE.test(route);
    }
    return TEST_ROUTE.test(route);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseLoaderTree",
    ()=>parseLoaderTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)");
;
function parseLoaderTree(tree) {
    const [segment, parallelRoutes, modules, staticSiblings] = tree;
    const { layout, template } = modules;
    let { page } = modules;
    // a __DEFAULT__ segment means that this route didn't match any of the
    // segments in the route, so we should use the default page
    page = segment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DEFAULT_SEGMENT_KEY"] ? modules.defaultPage : page;
    const conventionPath = layout?.[1] || template?.[1] || page?.[1];
    return {
        page,
        segment,
        modules,
        /* it can be either layout / template / page */ conventionPath,
        parallelRoutes,
        staticSiblings
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ __turbopack_context__.s([
    "parsePath",
    ()=>parsePath
]);
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/parse-relative-url.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseRelativeUrl",
    ()=>parseRelativeUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$querystring$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/querystring.js [middleware] (ecmascript)");
;
;
function parseRelativeUrl(url, base, parseQuery = true) {
    const globalBase = new URL(("TURBOPACK compile-time truthy", 1) ? 'http://n' : "TURBOPACK unreachable");
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith('.') ? new URL(("TURBOPACK compile-time truthy", 1) ? 'http://n' : "TURBOPACK unreachable") : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = url.startsWith('/') ? // Not using `origin` to support other protocols
    new URL(`${resolvedBase.protocol}//${resolvedBase.host}${url}`) : new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw Object.defineProperty(new Error(`invariant: invalid relative URL, router received ${url}`), "__NEXT_ERROR_CODE", {
            value: "E159",
            enumerable: false,
            configurable: true
        });
    }
    return {
        auth: null,
        host: null,
        hostname: null,
        pathname,
        port: null,
        protocol: null,
        query: parseQuery ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$querystring$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["searchParamsToUrlQuery"])(searchParams) : undefined,
        search,
        hash,
        href: href.slice(origin.length),
        // We don't know for relative URLs at this point since we set a custom, internal
        // base that isn't surfaced to users.
        slashes: null
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/parse-url.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseUrl",
    ()=>parseUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$querystring$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/querystring.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$relative$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/parse-relative-url.js [middleware] (ecmascript)");
;
;
function parseUrl(url) {
    if (url.startsWith('/')) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$relative$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parseRelativeUrl"])(url);
    }
    const parsedURL = new URL(url);
    const username = parsedURL.username;
    const password = parsedURL.password;
    const auth = username ? password ? `${username}:${password}` : username : null;
    const pathname = parsedURL.pathname;
    const search = parsedURL.search;
    return {
        auth,
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$querystring$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["searchParamsToUrlQuery"])(parsedURL.searchParams),
        search,
        origin: parsedURL.origin,
        slashes: parsedURL.href.slice(parsedURL.protocol.length, parsedURL.protocol.length + 2) === '//'
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pathHasPrefix",
    ()=>pathHasPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [middleware] (ecmascript)");
;
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/path-match.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPathMatch",
    ()=>getPathMatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/path-to-regexp/index.js [middleware] (ecmascript)");
;
;
function getPathMatch(path, options) {
    const keys = [];
    const regexp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathToRegexp"])(path, keys, {
        delimiter: '/',
        sensitive: typeof options?.sensitive === 'boolean' ? options.sensitive : false,
        strict: options?.strict
    });
    const matcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["regexpToFunction"])(options?.regexModifier ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
    /**
   * A matcher function that will check if a given pathname matches the path
   * given in the builder function. When the path does not match it will return
   * `false` but if it does it will return an object with the matched params
   * merged with the params provided in the second argument.
   */ return (pathname, params)=>{
        // If no pathname is provided it's not a match.
        if (typeof pathname !== 'string') return false;
        const match = matcher(pathname);
        // If the path did not match `false` will be returned.
        if (!match) return false;
        /**
     * If unnamed params are not allowed they must be removed from
     * the matched parameters. path-to-regexp uses "string" for named and
     * "number" for unnamed parameters.
     */ if (options?.removeUnnamedParams) {
            for (const key of keys){
                if (typeof key.name === 'number') {
                    delete match.params[key.name];
                }
            }
        }
        return {
            ...params,
            ...match.params
        };
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/prepare-destination.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compileNonPath",
    ()=>compileNonPath,
    "matchHas",
    ()=>matchHas,
    "parseDestination",
    ()=>parseDestination,
    "prepareDestination",
    ()=>prepareDestination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/escape-regexp.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/parse-url.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [middleware] (ecmascript)");
;
;
;
;
;
/**
 * Ensure only a-zA-Z are used for param names for proper interpolating
 * with path-to-regexp
 */ function getSafeParamName(paramName) {
    let newParamName = '';
    for(let i = 0; i < paramName.length; i++){
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || // A-Z
        charCode > 96 && charCode < 123 // a-z
        ) {
            newParamName += paramName[i];
        }
    }
    return newParamName;
}
function escapeSegment(str, segmentName) {
    return str.replace(new RegExp(`:${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segmentName)}`, 'g'), `__ESC_COLON_${segmentName}`);
}
function unescapeSegments(str) {
    return str.replace(/__ESC_COLON_/gi, ':');
}
function matchHas(req, query, has = [], missing = []) {
    const params = {};
    const hasMatch = (hasItem)=>{
        let value;
        let key = hasItem.key;
        switch(hasItem.type){
            case 'header':
                {
                    key = key.toLowerCase();
                    value = req.headers[key];
                    break;
                }
            case 'cookie':
                {
                    if ('cookies' in req) {
                        value = req.cookies[hasItem.key];
                    } else {
                        const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["getCookieParser"])(req.headers)();
                        value = cookies[hasItem.key];
                    }
                    break;
                }
            case 'query':
                {
                    value = query[key];
                    break;
                }
            case 'host':
                {
                    const { host } = req?.headers || {};
                    // remove port from host if present
                    const hostname = host?.split(':', 1)[0].toLowerCase();
                    value = hostname;
                    break;
                }
            default:
                {
                    break;
                }
        }
        if (!hasItem.value && value) {
            params[getSafeParamName(key)] = value;
            return true;
        } else if (value) {
            const matcher = new RegExp(`^${hasItem.value}$`);
            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
            if (matches) {
                if (Array.isArray(matches)) {
                    if (matches.groups) {
                        Object.keys(matches.groups).forEach((groupKey)=>{
                            params[groupKey] = matches.groups[groupKey];
                        });
                    } else if (hasItem.type === 'host' && matches[0]) {
                        params.host = matches[0];
                    }
                }
                return true;
            }
        }
        return false;
    };
    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
    if (allMatch) {
        return params;
    }
    return false;
}
function compileNonPath(value, params) {
    if (!value.includes(':')) {
        return value;
    }
    for (const key of Object.keys(params)){
        if (value.includes(`:${key}`)) {
            value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
        }
    }
    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*');
    // the value needs to start with a forward-slash to be compiled
    // correctly
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["safeCompile"])(`/${value}`, {
        validate: false
    })(params).slice(1);
}
function parseDestination(args) {
    let escaped = args.destination;
    for (const param of Object.keys({
        ...args.params,
        ...args.query
    })){
        if (!param) continue;
        escaped = escapeSegment(escaped, param);
    }
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$url$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parseUrl"])(escaped);
    let pathname = parsed.pathname;
    if (pathname) {
        pathname = unescapeSegments(pathname);
    }
    let href = parsed.href;
    if (href) {
        href = unescapeSegments(href);
    }
    let hostname = parsed.hostname;
    if (hostname) {
        hostname = unescapeSegments(hostname);
    }
    let hash = parsed.hash;
    if (hash) {
        hash = unescapeSegments(hash);
    }
    let search = parsed.search;
    if (search) {
        search = unescapeSegments(search);
    }
    let origin = parsed.origin;
    if (origin) {
        origin = unescapeSegments(origin);
    }
    return {
        ...parsed,
        pathname,
        hostname,
        href,
        hash,
        search,
        origin
    };
}
function prepareDestination(args) {
    const parsedDestination = parseDestination(args);
    const { hostname: destHostname, query: destQuery, search: destSearch } = parsedDestination;
    // The following code assumes that the pathname here includes the hash if it's
    // present.
    let destPath = parsedDestination.pathname;
    if (parsedDestination.hash) {
        destPath = `${destPath}${parsedDestination.hash}`;
    }
    const destParams = [];
    const destPathParamKeys = [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["safePathToRegexp"])(destPath, destPathParamKeys);
    for (const key of destPathParamKeys){
        destParams.push(key.name);
    }
    if (destHostname) {
        const destHostnameParamKeys = [];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["safePathToRegexp"])(destHostname, destHostnameParamKeys);
        for (const key of destHostnameParamKeys){
            destParams.push(key.name);
        }
    }
    const destPathCompiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["safeCompile"])(destPath, // have already validated before we got to this point and validating
    // breaks compiling destinations with named pattern params from the source
    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
    // since compile validation is meant for reversing and not for inserting
    // params from a separate path-regex into another
    {
        validate: false
    });
    let destHostnameCompiler;
    if (destHostname) {
        destHostnameCompiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["safeCompile"])(destHostname, {
            validate: false,
            encode: encodeURIComponent
        });
    }
    // update any params in query values
    for (const [key, strOrArray] of Object.entries(destQuery)){
        // the value needs to start with a forward-slash to be compiled
        // correctly
        if (Array.isArray(strOrArray)) {
            destQuery[key] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
        } else if (typeof strOrArray === 'string') {
            destQuery[key] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
    }
    // add path params to query if it's not a redirect and not
    // already defined in destination query or path
    let paramKeys = Object.keys(args.params).filter((name)=>name !== 'nextInternalLocale');
    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
        for (const key of paramKeys){
            if (!(key in destQuery)) {
                destQuery[key] = args.params[key];
            }
        }
    }
    let newUrl;
    // The compiler also that the interception route marker is an unnamed param, hence '0',
    // so we need to add it to the params object.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["isInterceptionRouteAppPath"])(destPath)) {
        for (const segment of destPath.split('/')){
            const marker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((m)=>segment.startsWith(m));
            if (marker) {
                if (marker === '(..)(..)') {
                    args.params['0'] = '(..)';
                    args.params['1'] = '(..)';
                } else {
                    args.params['0'] = marker;
                }
                break;
            }
        }
    }
    try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split('#', 2);
        if (destHostnameCompiler) {
            parsedDestination.hostname = destHostnameCompiler(args.params);
        }
        parsedDestination.pathname = pathname;
        parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
        parsedDestination.search = destSearch ? compileNonPath(destSearch, args.params) : '';
    } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
            throw Object.defineProperty(new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`), "__NEXT_ERROR_CODE", {
                value: "E329",
                enumerable: false,
                configurable: true
            });
        }
        throw err;
    }
    // Query merge order lowest priority to highest
    // 1. initial URL query values
    // 2. path segment values
    // 3. destination specified query values
    parsedDestination.query = {
        ...args.query,
        ...parsedDestination.query
    };
    return {
        newUrl,
        destQuery,
        parsedDestination
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/querystring.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assign",
    ()=>assign,
    "searchParamsToUrlQuery",
    ()=>searchParamsToUrlQuery,
    "urlQueryToSearchParams",
    ()=>urlQueryToSearchParams
]);
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/relativize-url.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The result of parsing a URL relative to a base URL.
 */ __turbopack_context__.s([
    "getRelativeURL",
    ()=>getRelativeURL,
    "parseRelativeURL",
    ()=>parseRelativeURL
]);
function parseRelativeURL(url, base) {
    const baseURL = typeof base === 'string' ? new URL(base) : base;
    const relative = new URL(url, base);
    // The URL is relative if the origin is the same as the base URL.
    const isRelative = relative.origin === baseURL.origin;
    return {
        url: isRelative ? relative.toString().slice(baseURL.origin.length) : relative.toString(),
        isRelative
    };
}
function getRelativeURL(url, base) {
    const relative = parseRelativeURL(url, base);
    return relative.url;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removePathPrefix",
    ()=>removePathPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [middleware] (ecmascript)");
;
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathHasPrefix"])(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith('/')) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return `/${withoutPrefix}`;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Removes the trailing slash for a given route or page path. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *
 * Uses charCodeAt (47 === '/') instead of regex to avoid the overhead of
 * compiling and executing a RegExp on every call (~3-5x faster).
 */ __turbopack_context__.s([
    "removeTrailingSlash",
    ()=>removeTrailingSlash
]);
function removeTrailingSlash(route) {
    return route.charCodeAt(route.length - 1) === 47 && route.length > 1 ? route.slice(0, -1) : route;
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/resolve-param-value.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveParamValue",
    ()=>resolveParamValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/invariant-error.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/interception-prefix-from-param-type.js [middleware] (ecmascript)");
;
;
/**
 * Extracts the param value from a path segment, handling interception markers
 * based on the expected param type.
 *
 * @param pathSegment - The path segment to extract the value from
 * @param params - The current params object for resolving dynamic param references
 * @param paramType - The expected param type which may include interception marker info
 * @returns The extracted param value
 */ function getParamValueFromSegment(pathSegment, params, paramType) {
    // If the segment is dynamic, resolve it from the params object
    if (pathSegment.type === 'dynamic') {
        return params[pathSegment.param.paramName];
    }
    // If the paramType indicates this is an intercepted param, strip the marker
    // that matches the interception marker in the param type
    const interceptionPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["interceptionPrefixFromParamType"])(paramType);
    if (interceptionPrefix === pathSegment.interceptionMarker) {
        return pathSegment.name.replace(pathSegment.interceptionMarker, '');
    }
    // For static segments, use the name
    return pathSegment.name;
}
function resolveParamValue(paramName, paramType, depth, route, params) {
    switch(paramType){
        case 'catchall':
        case 'optional-catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            // For catchall routes, derive from pathname using depth to determine
            // which segments to use
            const processedSegments = [];
            // Process segments to handle any embedded dynamic params
            for(let index = depth; index < route.segments.length; index++){
                const pathSegment = route.segments[index];
                if (pathSegment.type === 'static') {
                    let value = pathSegment.name;
                    // For intercepted catch-all params, strip the marker from the first segment
                    const interceptionPrefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$prefix$2d$from$2d$param$2d$type$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["interceptionPrefixFromParamType"])(paramType);
                    if (interceptionPrefix && index === depth && interceptionPrefix === pathSegment.interceptionMarker) {
                        // Strip the interception marker from the value
                        value = value.replace(pathSegment.interceptionMarker, '');
                    }
                    processedSegments.push(value);
                } else {
                    // If the segment is a param placeholder, check if we have its value
                    if (!params.hasOwnProperty(pathSegment.param.paramName)) {
                        // If the segment is an optional catchall, we can break out of the
                        // loop because it's optional!
                        if (pathSegment.param.paramType === 'optional-catchall') {
                            break;
                        }
                        // Unknown param placeholder in pathname - can't derive full value
                        return undefined;
                    }
                    // If the segment matches a param, use the param value
                    // We don't encode values here as that's handled during retrieval.
                    const paramValue = params[pathSegment.param.paramName];
                    if (Array.isArray(paramValue)) {
                        processedSegments.push(...paramValue);
                    } else {
                        processedSegments.push(paramValue);
                    }
                }
            }
            if (processedSegments.length > 0) {
                return processedSegments;
            } else if (paramType === 'optional-catchall') {
                return undefined;
            } else {
                // We shouldn't be able to match a catchall segment without any path
                // segments if it's not an optional catchall
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected empty path segments match for a route "${route.pathname}" with param "${paramName}" of type "${paramType}"`), "__NEXT_ERROR_CODE", {
                    value: "E931",
                    enumerable: false,
                    configurable: true
                });
            }
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            // For regular dynamic parameters, take the segment at this depth
            if (depth < route.segments.length) {
                const pathSegment = route.segments[depth];
                // Check if the segment at this depth is a placeholder for an unknown param
                if (pathSegment.type === 'dynamic' && !params.hasOwnProperty(pathSegment.param.paramName)) {
                    // The segment is a placeholder like [category] and we don't have the value
                    return undefined;
                }
                // If the segment matches a param, use the param value from params object
                // Otherwise it's a static segment, just use it directly
                // We don't encode values here as that's handled during retrieval
                return getParamValueFromSegment(pathSegment, params, paramType);
            }
            return undefined;
        default:
            paramType;
    }
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeCompile",
    ()=>safeCompile,
    "safePathToRegexp",
    ()=>safePathToRegexp,
    "safeRegexpToFunction",
    ()=>safeRegexpToFunction,
    "safeRouteMatcher",
    ()=>safeRouteMatcher
]);
/**
 * Client-safe utilities for route matching that don't import server-side
 * utilities to avoid bundling issues with Turbopack
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/compiled/path-to-regexp/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [middleware] (ecmascript)");
;
;
function safePathToRegexp(route, keys, options) {
    if (typeof route !== 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathToRegexp"])(route, keys, options);
    }
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathToRegexp"])(routeToUse, keys, options);
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["pathToRegexp"])(normalizedRoute, keys, options);
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeCompile(route, options) {
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        const compiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["compile"])(routeToUse, options);
        // If we normalized the route, wrap the compiler to strip separators from output
        // The normalization inserts _NEXTSEP_ as a literal string in the pattern to satisfy
        // path-to-regexp validation, but we don't want it in the final compiled URL
        if (needsNormalization) {
            return (params)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stripNormalizedSeparators"])(compiler(params));
            };
        }
        return compiler;
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                const compiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["compile"])(normalizedRoute, options);
                // Wrap the compiler to strip separators from output
                return (params)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stripNormalizedSeparators"])(compiler(params));
                };
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeRegexpToFunction(regexp, keys) {
    const originalMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["regexpToFunction"])(regexp, keys || []);
    return (pathname)=>{
        const result = originalMatcher(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return {
            ...result,
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result.params)
        };
    };
}
function safeRouteMatcher(matcherFn) {
    return (pathname)=>{
        const result = matcherFn(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result);
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRouteMatcher",
    ()=>getRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/utils.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [middleware] (ecmascript)");
;
;
function getRouteMatcher({ re, groups }) {
    const rawMatcher = (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch  {
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["DecodeError"]('failed to decode param'), "__NEXT_ERROR_CODE", {
                    value: "E528",
                    enumerable: false,
                    configurable: true
                });
            }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)){
            const match = routeMatch[group.pos];
            if (match !== undefined) {
                if (group.repeat) {
                    params[key] = match.split('/').map((entry)=>decode(entry));
                } else {
                    params[key] = decode(match);
                }
            }
        }
        return params;
    };
    // Wrap with safe matcher to handle parameter cleaning
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["safeRouteMatcher"])(rawMatcher);
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNamedMiddlewareRegex",
    ()=>getNamedMiddlewareRegex,
    "getNamedRouteRegex",
    ()=>getNamedRouteRegex,
    "getRouteRegex",
    ()=>getRouteRegex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/lib/constants.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/escape-regexp.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [middleware] (ecmascript)");
;
;
;
;
;
function getParametrizedRoute(route, includeSuffix, includePrefix) {
    const groups = {};
    let groupIndex = 1;
    const segments = [];
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const markerMatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        if (markerMatch && paramMatches && paramMatches[2]) {
            const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(markerMatch)}([^/]+?)`);
        } else if (paramMatches && paramMatches[2]) {
            const { key, repeat, optional } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            if (includePrefix && paramMatches[1]) {
                segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1])}`);
            }
            let s = repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment)}`);
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
        }
    }
    return {
        parameterizedRoute: segments.join(''),
        groups
    };
}
function getRouteRegex(normalizedRoute, { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = {}) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
    let re = parameterizedRoute;
    if (!excludeOptionalTrailingSlash) {
        re += '(?:/)?';
    }
    return {
        re: new RegExp(`^${re}$`),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = '';
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment({ interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys }) {
    const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, '');
    if (keyPrefix) {
        cleanedKey = `${keyPrefix}${cleanedKey}`;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    const duplicateKey = cleanedKey in routeKeys;
    if (keyPrefix) {
        routeKeys[cleanedKey] = `${keyPrefix}${key}`;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(interceptionMarker) : '';
    let pattern;
    if (duplicateKey && backreferenceDuplicateKeys) {
        // Use a backreference to the key to ensure that the key is the same value
        // in each of the placeholders.
        pattern = `\\k<${cleanedKey}>`;
    } else if (repeat) {
        pattern = `(?<${cleanedKey}>.+?)`;
    } else {
        pattern = `(?<${cleanedKey}>[^/]+?)`;
    }
    return {
        key,
        pattern: optional ? `(?:/${interceptionPrefix}${pattern})?` : `/${interceptionPrefix}${pattern}`,
        cleanedKey: cleanedKey,
        optional,
        repeat
    };
}
function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys, reference = {
    names: {},
    intercepted: {}
}) {
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    const segments = [];
    const inverseParts = [];
    // Ensure we don't mutate the original reference object.
    reference = structuredClone(reference);
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const hasInterceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].some((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        const interceptionMarker = hasInterceptionMarker ? paramMatches?.[1] : undefined;
        let keyPrefix;
        if (interceptionMarker && paramMatches?.[2]) {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] : undefined;
            reference.intercepted[paramMatches[2]] = interceptionMarker;
        } else if (paramMatches?.[2] && reference.intercepted[paramMatches[2]]) {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] : undefined;
        } else {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"] : undefined;
        }
        if (interceptionMarker && paramMatches && paramMatches[2]) {
            // If there's an interception marker, add it to the segments.
            const { key, pattern, cleanedKey, repeat, optional } = getSafeKeyFromSegment({
                getSafeRouteKey,
                interceptionMarker,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix,
                backreferenceDuplicateKeys
            });
            segments.push(pattern);
            inverseParts.push(`/${paramMatches[1]}:${reference.names[key] ?? cleanedKey}${repeat ? optional ? '*' : '+' : ''}`);
            reference.names[key] ??= cleanedKey;
        } else if (paramMatches && paramMatches[2]) {
            // If there's a prefix, add it to the segments if it's enabled.
            if (includePrefix && paramMatches[1]) {
                segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1])}`);
                inverseParts.push(`/${paramMatches[1]}`);
            }
            const { key, pattern, cleanedKey, repeat, optional } = getSafeKeyFromSegment({
                getSafeRouteKey,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix,
                backreferenceDuplicateKeys
            });
            // Remove the leading slash if includePrefix already added it.
            let s = pattern;
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
            inverseParts.push(`/:${reference.names[key] ?? cleanedKey}${repeat ? optional ? '*' : '+' : ''}`);
            reference.names[key] ??= cleanedKey;
        } else {
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment)}`);
            inverseParts.push(`/${segment}`);
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
            inverseParts.push(paramMatches[3]);
        }
    }
    return {
        namedParameterizedRoute: segments.join(''),
        routeKeys,
        pathToRegexpPattern: inverseParts.join(''),
        reference
    };
}
function getNamedRouteRegex(normalizedRoute, options) {
    const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, options.includeSuffix ?? false, options.includePrefix ?? false, options.backreferenceDuplicateKeys ?? false, options.reference);
    let namedRegex = result.namedParameterizedRoute;
    if (!options.excludeOptionalTrailingSlash) {
        namedRegex += '(?:/)?';
    }
    return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: `^${namedRegex}$`,
        routeKeys: result.routeKeys,
        pathToRegexpPattern: result.pathToRegexpPattern,
        reference: result.reference
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
    const { catchAll = true } = options;
    if (parameterizedRoute === '/') {
        let catchAllRegex = catchAll ? '.*' : '';
        return {
            namedRegex: `^/${catchAllRegex}$`
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false, undefined);
    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
    return {
        namedRegex: `^${namedParameterizedRoute}${catchAllGroupedRegex}$`
    };
}
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/segment.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SEGMENT_KEY",
    ()=>DEFAULT_SEGMENT_KEY,
    "NOT_FOUND_SEGMENT_KEY",
    ()=>NOT_FOUND_SEGMENT_KEY,
    "PAGE_SEGMENT_KEY",
    ()=>PAGE_SEGMENT_KEY,
    "addSearchParamsIfPageSegment",
    ()=>addSearchParamsIfPageSegment,
    "computeSelectedLayoutSegment",
    ()=>computeSelectedLayoutSegment,
    "getSegmentValue",
    ()=>getSegmentValue,
    "getSelectedLayoutSegmentPath",
    ()=>getSelectedLayoutSegmentPath,
    "isGroupSegment",
    ()=>isGroupSegment,
    "isParallelRouteSegment",
    ()=>isParallelRouteSegment
]);
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__';
const NOT_FOUND_SEGMENT_KEY = '/_not-found';
}),
"[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/esm/shared/lib/utils.js [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */ __turbopack_context__.s([
    "DecodeError",
    ()=>DecodeError,
    "MiddlewareNotFoundError",
    ()=>MiddlewareNotFoundError,
    "MissingStaticPage",
    ()=>MissingStaticPage,
    "NormalizeError",
    ()=>NormalizeError,
    "PageNotFoundError",
    ()=>PageNotFoundError,
    "SP",
    ()=>SP,
    "ST",
    ()=>ST,
    "WEB_VITALS",
    ()=>WEB_VITALS,
    "execOnce",
    ()=>execOnce,
    "getDisplayName",
    ()=>getDisplayName,
    "getLocationOrigin",
    ()=>getLocationOrigin,
    "getURL",
    ()=>getURL,
    "isAbsoluteUrl",
    ()=>isAbsoluteUrl,
    "isResSent",
    ()=>isResSent,
    "loadGetInitialProps",
    ()=>loadGetInitialProps,
    "normalizeRepeatedSlashes",
    ()=>normalizeRepeatedSlashes,
    "stringifyError",
    ()=>stringifyError
]);
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>{
    // Fast path: an absolute URL must start with a letter (the scheme).
    // Check for a-z and A-Z without the cost of the regex.
    const c = url.charCodeAt(0);
    const isLetter = c >= 65 /* A */  && c <= 90 || c >= 97 /* a */  && c <= 122;
    /* z */ if (!isLetter) {
        return false;
    }
    return ABSOLUTE_URL_REGEX.test(url);
};
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E1035",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
];

//# sourceMappingURL=1b9e_next_dist_esm_1qtp4og._.js.map