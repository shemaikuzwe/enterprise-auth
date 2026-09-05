module.exports = [
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/broadcast-channel.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGlobalBroadcastChannel",
    ()=>getGlobalBroadcastChannel,
    "kBroadcastChannel",
    ()=>kBroadcastChannel
]);
//#region src/client/broadcast-channel.ts
const kBroadcastChannel = Symbol.for("better-auth:broadcast-channel");
const now = ()=>Math.floor(Date.now() / 1e3);
var WindowBroadcastChannel = class {
    listeners = /* @__PURE__ */ new Set();
    name;
    constructor(name = "better-auth.message"){
        this.name = name;
    }
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>{
            this.listeners.delete(listener);
        };
    }
    post(message) {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
    setup() {
        if ("TURBOPACK compile-time truthy", 1) return ()=>{};
        //TURBOPACK unreachable
        ;
        const handler = undefined;
    }
};
function getGlobalBroadcastChannel(name = "better-auth.message") {
    if (!globalThis[kBroadcastChannel]) globalThis[kBroadcastChannel] = new WindowBroadcastChannel(name);
    return globalThis[kBroadcastChannel];
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/config.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClientConfig",
    ()=>getClientConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/utils/url.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$parser$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/parser.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$fetch$2d$plugins$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/fetch-plugins.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$session$2d$atom$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/session-atom.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$7$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/defu@6.1.7/node_modules/defu/dist/defu.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-fetch+fetch@1.3.1/node_modules/@better-fetch/fetch/dist/index.js [middleware] (ecmascript)");
;
;
;
;
;
;
//#region src/client/config.ts
const resolvePublicAuthUrl = (basePath)=>{
    if (typeof process === "undefined") return void 0;
    const path = basePath ?? "/api/auth";
    if (process.env.NEXT_PUBLIC_AUTH_URL) return process.env.NEXT_PUBLIC_AUTH_URL;
    if ("TURBOPACK compile-time truthy", 1) {
        if (process.env.NEXTAUTH_URL) try {
            return process.env.NEXTAUTH_URL;
        } catch  {}
        if (process.env.VERCEL_URL) try {
            const protocol = process.env.VERCEL_URL.startsWith("http") ? "" : "https://";
            return `${new URL(`${protocol}${process.env.VERCEL_URL}`).origin}${path}`;
        } catch  {}
    }
};
const getClientConfig = (options, loadEnv)=>{
    const isCredentialsSupported = "credentials" in Request.prototype;
    const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getBaseURL"])(options?.baseURL, options?.basePath, void 0, loadEnv) ?? resolvePublicAuthUrl(options?.basePath) ?? "/api/auth";
    const pluginsFetchPlugins = options?.plugins?.flatMap((plugin)=>plugin.fetchPlugins).filter((pl)=>pl !== void 0) || [];
    const lifeCyclePlugin = {
        id: "lifecycle-hooks",
        name: "lifecycle-hooks",
        hooks: {
            onSuccess: options?.fetchOptions?.onSuccess,
            onError: options?.fetchOptions?.onError,
            onRequest: options?.fetchOptions?.onRequest,
            onResponse: options?.fetchOptions?.onResponse
        }
    };
    const { onSuccess: _onSuccess, onError: _onError, onRequest: _onRequest, onResponse: _onResponse, ...restOfFetchOptions } = options?.fetchOptions || {};
    const $fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1$2f$node_modules$2f40$better$2d$fetch$2f$fetch$2f$dist$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createFetch"])({
        baseURL,
        ...isCredentialsSupported ? {
            credentials: "include"
        } : {},
        method: "GET",
        jsonParser (text) {
            if (!text) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$parser$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["parseJSON"])(text, {
                strict: false
            });
        },
        customFetchImpl: fetch,
        ...restOfFetchOptions,
        plugins: [
            lifeCyclePlugin,
            ...restOfFetchOptions.plugins || [],
            ...options?.disableDefaultFetchPlugins ? [] : [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$fetch$2d$plugins$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["redirectPlugin"]
            ],
            ...pluginsFetchPlugins
        ]
    });
    const { $sessionSignal, session, broadcastSessionUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$session$2d$atom$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getSessionAtom"])($fetch, options);
    let hasHydrated = false;
    const hydrateSession = (sessionData)=>{
        if (hasHydrated || sessionData === null) return;
        hasHydrated = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$session$2d$atom$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["hydrateSessionAtom"])(session, sessionData);
    };
    const plugins = options?.plugins || [];
    let pluginsActions = {};
    const pluginsAtoms = {
        $sessionSignal,
        session
    };
    const pluginPathMethods = {
        "/sign-out": "POST",
        "/revoke-sessions": "POST",
        "/revoke-other-sessions": "POST",
        "/delete-user": "POST"
    };
    const atomListeners = [
        {
            signal: "$sessionSignal",
            matcher (path) {
                return path === "/sign-out" || path === "/update-user" || path === "/update-session" || path === "/sign-up/email" || path === "/sign-in/email" || path === "/delete-user" || path === "/verify-email" || path === "/revoke-sessions" || path === "/revoke-session" || path === "/revoke-other-sessions" || path === "/change-email" || path === "/change-password";
            },
            callback (path) {
                if (path === "/sign-out") broadcastSessionUpdate("signout");
                else if (path === "/update-user" || path === "/update-session") broadcastSessionUpdate("updateUser");
            }
        }
    ];
    for (const plugin of plugins){
        if (plugin.getAtoms) Object.assign(pluginsAtoms, plugin.getAtoms?.($fetch));
        if (plugin.pathMethods) Object.assign(pluginPathMethods, plugin.pathMethods);
        if (plugin.atomListeners) atomListeners.push(...plugin.atomListeners);
    }
    const $store = {
        notify: (signal)=>{
            pluginsAtoms[signal].set(!pluginsAtoms[signal].get());
        },
        listen: (signal, listener)=>{
            pluginsAtoms[signal].subscribe(listener);
        },
        atoms: pluginsAtoms
    };
    for (const plugin of plugins)if (plugin.getActions) pluginsActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$defu$40$6$2e$1$2e$7$2f$node_modules$2f$defu$2f$dist$2f$defu$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["defu"])(plugin.getActions?.($fetch, $store, options) ?? {}, pluginsActions);
    return {
        get baseURL () {
            return baseURL;
        },
        pluginsActions,
        pluginsAtoms,
        pluginPathMethods,
        atomListeners,
        hydrateSession,
        $fetch,
        $store
    };
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/equality.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isJsonEqual",
    ()=>isJsonEqual,
    "withEquality",
    ()=>withEquality
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanostores@1.5.2/node_modules/nanostores/lifecycle/index.js [middleware] (ecmascript)");
;
//#region src/client/equality.ts
function isPlainObject(value) {
    if (typeof value !== "object" || value === null) return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
}
/**
* Deep structural equality for JSON-serializable values.
* Handles: primitives, null, arrays, and plain objects.
* Short-circuits on referential equality at every recursion level.
*/ function isJsonEqual(a, b) {
    if (a === b) return true;
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        for(let i = 0; i < a.length; i++)if (!isJsonEqual(a[i], b[i])) return false;
        return true;
    }
    if (isPlainObject(a) && isPlainObject(b)) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        for (const key of keysA)if (!(key in b) || !isJsonEqual(a[key], b[key])) return false;
        return true;
    }
    return false;
}
/**
* Attach an equality gate to a nanostores atom via `onSet`.
* When `isEqual(currentValue, newValue)` returns true, the `set()` call
* is aborted: no listeners fire, no framework re-renders occur.
*
* Returns the unsubscribe function from `onSet`.
*/ function withEquality(store, isEqual) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["onSet"])(store, ({ newValue, abort })=>{
        if (isEqual(store.value, newValue)) abort();
    });
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/fetch-plugins.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "redirectPlugin",
    ()=>redirectPlugin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/utils/url.mjs [middleware] (ecmascript)");
;
//#region src/client/fetch-plugins.ts
const redirectPlugin = {
    id: "redirect",
    name: "Redirect",
    hooks: {
        onSuccess (context) {
            if (context.data?.url && context.data?.redirect && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isSafeUrlScheme"])(context.data.url)) {
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
        }
    }
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/focus-manager.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGlobalFocusManager",
    ()=>getGlobalFocusManager,
    "kFocusManager",
    ()=>kFocusManager
]);
//#region src/client/focus-manager.ts
const kFocusManager = Symbol.for("better-auth:focus-manager");
var WindowFocusManager = class {
    listeners = /* @__PURE__ */ new Set();
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>{
            this.listeners.delete(listener);
        };
    }
    setFocused(focused) {
        this.listeners.forEach((listener)=>listener(focused));
    }
    setup() {
        if ("TURBOPACK compile-time truthy", 1) return ()=>{};
        //TURBOPACK unreachable
        ;
        const visibilityHandler = undefined;
    }
};
function getGlobalFocusManager() {
    if (!globalThis[kFocusManager]) globalThis[kFocusManager] = new WindowFocusManager();
    return globalThis[kFocusManager];
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/online-manager.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGlobalOnlineManager",
    ()=>getGlobalOnlineManager,
    "kOnlineManager",
    ()=>kOnlineManager
]);
//#region src/client/online-manager.ts
const kOnlineManager = Symbol.for("better-auth:online-manager");
var WindowOnlineManager = class {
    listeners = /* @__PURE__ */ new Set();
    isOnline = typeof navigator !== "undefined" ? navigator.onLine : true;
    subscribe(listener) {
        this.listeners.add(listener);
        return ()=>{
            this.listeners.delete(listener);
        };
    }
    setOnline(online) {
        this.isOnline = online;
        this.listeners.forEach((listener)=>listener(online));
    }
    setup() {
        if ("TURBOPACK compile-time truthy", 1) return ()=>{};
        //TURBOPACK unreachable
        ;
        const onOnline = undefined;
        const onOffline = undefined;
    }
};
function getGlobalOnlineManager() {
    if (!globalThis[kOnlineManager]) globalThis[kOnlineManager] = new WindowOnlineManager();
    return globalThis[kOnlineManager];
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/parser.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseJSON",
    ()=>parseJSON
]);
//#region src/client/parser.ts
const PROTO_POLLUTION_PATTERNS = {
    proto: /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    constructor: /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    protoShort: /"__proto__"\s*:/,
    constructorShort: /"constructor"\s*:/
};
const JSON_SIGNATURE = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
const SPECIAL_VALUES = {
    true: true,
    false: false,
    null: null,
    undefined: void 0,
    nan: NaN,
    infinity: Number.POSITIVE_INFINITY,
    "-infinity": Number.NEGATIVE_INFINITY
};
const ISO_DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/;
function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
}
function parseISODate(value) {
    const match = ISO_DATE_REGEX.exec(value);
    if (!match) return null;
    const [, year, month, day, hour, minute, second, ms, offsetSign, offsetHour, offsetMinute] = match;
    const date = new Date(Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10), parseInt(hour, 10), parseInt(minute, 10), parseInt(second, 10), ms ? parseInt(ms.padEnd(3, "0"), 10) : 0));
    if (offsetSign) {
        const offset = (parseInt(offsetHour, 10) * 60 + parseInt(offsetMinute, 10)) * (offsetSign === "+" ? -1 : 1);
        date.setUTCMinutes(date.getUTCMinutes() + offset);
    }
    return isValidDate(date) ? date : null;
}
function betterJSONParse(value, options = {}) {
    const { strict = false, warnings = false, reviver, parseDates = true } = options;
    if (typeof value !== "string") return value;
    const trimmed = value.trim();
    const lowerValue = trimmed.toLowerCase();
    if (lowerValue.length <= 9 && lowerValue in SPECIAL_VALUES) return SPECIAL_VALUES[lowerValue];
    if (!JSON_SIGNATURE.test(trimmed)) {
        if (strict) throw new SyntaxError("[better-json] Invalid JSON");
        return value;
    }
    if (Object.entries(PROTO_POLLUTION_PATTERNS).some(([key, pattern])=>{
        const matches = pattern.test(trimmed);
        if (matches && warnings) console.warn(`[better-json] Detected potential prototype pollution attempt using ${key} pattern`);
        return matches;
    }) && strict) throw new Error("[better-json] Potential prototype pollution attempt detected");
    try {
        const secureReviver = (key, value)=>{
            if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
                if (warnings) console.warn(`[better-json] Dropping "${key}" key to prevent prototype pollution`);
                return;
            }
            if (parseDates && typeof value === "string") {
                const date = parseISODate(value);
                if (date) return date;
            }
            return reviver ? reviver(key, value) : value;
        };
        return JSON.parse(trimmed, secureReviver);
    } catch (error) {
        if (strict) throw error;
        return value;
    }
}
function parseJSON(value, options = {
    strict: true
}) {
    return betterJSONParse(value, options);
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/proxy.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDynamicPathProxy",
    ()=>createDynamicPathProxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$is$2d$atom$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/utils/is-atom.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$string$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/utils/string.mjs [middleware] (ecmascript)");
;
;
//#region src/client/proxy.ts
function getMethod(path, knownPathMethods, args) {
    const method = knownPathMethods[path];
    const { fetchOptions, query: _query, ...body } = args || {};
    if (method) return method;
    if (fetchOptions?.method) return fetchOptions.method;
    if (body && Object.keys(body).length > 0) return "POST";
    return "GET";
}
function createDynamicPathProxy(routes, client, knownPathMethods, atoms, atomListeners) {
    function createProxy(path = []) {
        return new Proxy(function() {}, {
            get (_, prop) {
                if (typeof prop !== "string") return;
                if (prop === "then" || prop === "catch" || prop === "finally") return;
                const fullPath = [
                    ...path,
                    prop
                ];
                let current = routes;
                for (const segment of fullPath)if (current && typeof current === "object" && segment in current) current = current[segment];
                else {
                    current = void 0;
                    break;
                }
                if (typeof current === "function") return current;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$is$2d$atom$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isAtom"])(current)) return current;
                return createProxy(fullPath);
            },
            apply: async (_, __, args)=>{
                const routePath = "/" + path.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$string$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["toKebabCase"]).join("/");
                const arg = args[0] || {};
                const fetchOptions = args[1] || {};
                const { query, fetchOptions: argFetchOptions, ...body } = arg;
                const options = {
                    ...fetchOptions,
                    ...argFetchOptions
                };
                const method = getMethod(routePath, knownPathMethods, arg);
                return await client(routePath, {
                    ...options,
                    body: method === "GET" ? void 0 : {
                        ...body,
                        ...options?.body || {}
                    },
                    query: query || options?.query,
                    method,
                    async onSuccess (context) {
                        await options?.onSuccess?.(context);
                        if (!atomListeners || options.disableSignal) return;
                        /**
						* We trigger listeners
						*/ const matches = atomListeners.filter((s)=>s.matcher(routePath));
                        if (!matches.length) return;
                        const visited = /* @__PURE__ */ new Set();
                        for (const match of matches){
                            const signal = atoms[match.signal];
                            if (!signal) return;
                            if (visited.has(match.signal)) continue;
                            visited.add(match.signal);
                            /**
							* To avoid race conditions we set the signal in a setTimeout
							*/ const val = signal.get();
                            setTimeout(()=>{
                                signal.set(!val);
                            }, 10);
                            match.callback?.(routePath);
                        }
                    }
                });
            }
        });
    }
    return createProxy();
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/query.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthQuery",
    ()=>useAuthQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$equality$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/equality.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanostores@1.5.2/node_modules/nanostores/atom/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanostores@1.5.2/node_modules/nanostores/lifecycle/index.js [middleware] (ecmascript)");
;
;
//#region src/client/query.ts
const isServer = ()=>("TURBOPACK compile-time value", "undefined") === "undefined";
function isAuthQueryStateEqual(a, b) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$equality$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isJsonEqual"])(a.data, b.data) && a.error === b.error && a.isPending === b.isPending && a.isRefetching === b.isRefetching && a.refetch === b.refetch;
}
const useAuthQuery = (initializedAtom, path, $fetch, options)=>{
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["atom"])({
        data: null,
        error: null,
        isPending: true,
        isRefetching: false,
        refetch: (queryParams)=>fn(queryParams)
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["onMount"])(value, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$equality$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["withEquality"])(value, isAuthQueryStateEqual));
    const fn = async (queryParams)=>{
        return new Promise((resolve)=>{
            const opts = typeof options === "function" ? options({
                data: value.get().data,
                error: value.get().error,
                isPending: value.get().isPending
            }) : options;
            $fetch(path, {
                ...opts,
                query: {
                    ...opts?.query,
                    ...queryParams?.query
                },
                async onSuccess (context) {
                    const current = value.get();
                    const stableData = current.data != null && context.data != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$equality$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isJsonEqual"])(current.data, context.data) ? current.data : context.data;
                    value.set({
                        data: stableData,
                        error: null,
                        isPending: false,
                        isRefetching: false,
                        refetch: value.value.refetch
                    });
                    await opts?.onSuccess?.(context);
                },
                async onError (context) {
                    const { request } = context;
                    const retryAttempts = typeof request.retry === "number" ? request.retry : request.retry?.attempts;
                    const retryAttempt = request.retryAttempt || 0;
                    if (retryAttempts && retryAttempt < retryAttempts) return;
                    const isUnauthorized = context.error.status === 401;
                    value.set({
                        error: context.error,
                        data: isUnauthorized ? null : value.get().data,
                        isPending: false,
                        isRefetching: false,
                        refetch: value.value.refetch
                    });
                    await opts?.onError?.(context);
                },
                async onRequest (context) {
                    const currentValue = value.get();
                    value.set({
                        isPending: currentValue.data === null,
                        data: currentValue.data,
                        error: null,
                        isRefetching: true,
                        refetch: value.value.refetch
                    });
                    await opts?.onRequest?.(context);
                }
            }).catch((error)=>{
                value.set({
                    error,
                    data: value.get().data,
                    isPending: false,
                    isRefetching: false,
                    refetch: value.value.refetch
                });
            }).finally(()=>{
                resolve(void 0);
            });
        });
    };
    initializedAtom = Array.isArray(initializedAtom) ? initializedAtom : [
        initializedAtom
    ];
    let isMountFetchPending = false;
    let isMounted = false;
    let shouldRefetchAfterPending = false;
    const fetchOnMount = ()=>{
        if (isMountFetchPending) {
            shouldRefetchAfterPending = true;
            return;
        }
        isMountFetchPending = true;
        fn().finally(()=>{
            isMountFetchPending = false;
            const shouldRefetch = shouldRefetchAfterPending && isMounted;
            shouldRefetchAfterPending = false;
            if (shouldRefetch) fetchOnMount();
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["onMount"])(value, ()=>{
        if (isServer()) return;
        //TURBOPACK unreachable
        ;
        let isInitialized;
        let timeoutId;
        const cleanups = undefined;
    });
    return value;
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/react/index.mjs [middleware] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAuthClient",
    ()=>createAuthClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$config$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/config.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$proxy$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/proxy.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$react$2d$store$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/react/react-store.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$string$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/utils/string.mjs [middleware] (ecmascript)");
;
;
;
;
//#region src/client/react/index.ts
function getAtomKey(str) {
    return `use${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$string$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["capitalizeFirstLetter"])(str)}`;
}
function createAuthClient(options) {
    const { pluginPathMethods, pluginsActions, pluginsAtoms, hydrateSession, $fetch, $store, atomListeners } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$config$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getClientConfig"])(options);
    const resolvedHooks = {};
    for (const [key, value] of Object.entries(pluginsAtoms))resolvedHooks[getAtomKey(key)] = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$react$2f$react$2d$store$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["useStore"])(value);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$proxy$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["createDynamicPathProxy"])({
        ...pluginsActions,
        ...resolvedHooks,
        hydrateSession,
        $fetch,
        $store
    }, $fetch, pluginPathMethods, pluginsAtoms, atomListeners);
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/react/react-store.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$listen$2d$keys$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanostores@1.5.2/node_modules/nanostores/listen-keys/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.7_@types+node@20.19.43_babel-plugin-react-compiler@1.0.0_r_490f34a08bc075162440dbde7ae3e655/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [middleware] (ecmascript)");
;
;
//#region src/client/react/react-store.ts
/**
* Subscribe to store changes and get store's value.
*
* Can be used with store builder too.
*
* ```js
* import { useStore } from 'nanostores/react'
*
* import { router } from '../store/router'
*
* export const Layout = () => {
*   let page = useStore(router)
*   if (page.route === 'home') {
*     return <HomePage />
*   } else {
*     return <Error404 />
*   }
* }
* ```
*
* @param store Store instance.
* @returns Store value.
*/ function useStore(store, options = {}) {
    const snapshotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["useRef"])(store.get());
    const { keys, deps = [
        store,
        keys
    ] } = options;
    const subscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["useCallback"])((onChange)=>{
        const emitChange = (value)=>{
            if (snapshotRef.current === value) return;
            snapshotRef.current = value;
            onChange();
        };
        emitChange(store.value);
        if (keys?.length) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$listen$2d$keys$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["listenKeys"])(store, keys, emitChange);
        return store.listen(emitChange);
    }, deps);
    const get = ()=>snapshotRef.current;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$1_$40$babel$2b$core$40$7$2e$29$2e$7_$40$types$2b$node$40$20$2e$19$2e$43_babel$2d$plugin$2d$react$2d$compiler$40$1$2e$0$2e$0_r_490f34a08bc075162440dbde7ae3e655$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, get, get);
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/session-atom.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSessionAtom",
    ()=>getSessionAtom,
    "hydrateSessionAtom",
    ()=>hydrateSessionAtom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$equality$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/equality.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$session$2d$refresh$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/session-refresh.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanostores@1.5.2/node_modules/nanostores/lifecycle/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanostores@1.5.2/node_modules/nanostores/atom/index.js [middleware] (ecmascript)");
;
;
;
//#region src/client/session-atom.ts
const isServer = ()=>("TURBOPACK compile-time value", "undefined") === "undefined";
const SESSION_MOUNT_DEDUPE_INTERVAL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["STORE_UNMOUNT_DELAY"];
function hydrateSessionAtom(sessionAtom, session) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const currentSession = undefined;
}
/**
* Normalize $fetch response: `throw: true` returns data directly,
* otherwise `{ data, error }`.
*/ function normalizeSessionResponse(res) {
    if (typeof res === "object" && res !== null && "data" in res && "error" in res) return res;
    return {
        data: res,
        error: null
    };
}
function normalizeSessionData(data) {
    if (!data) return null;
    if (data.session === null && data.user === null) return null;
    return data;
}
function isSessionAtomEqual(a, b) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$equality$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isJsonEqual"])(a.data, b.data) && a.error === b.error && a.isPending === b.isPending && a.isRefetching === b.isRefetching && a.refetch === b.refetch;
}
function getSessionAtom($fetch, options) {
    const $signal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["atom"])(false);
    let flight;
    let freshUntil = 0;
    let sessionRevision = 0;
    $signal.listen(()=>{
        sessionRevision++;
        freshUntil = 0;
    });
    const refetch = (queryParams)=>fetchSession(queryParams);
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["atom"])({
        data: null,
        error: null,
        isPending: true,
        isRefetching: false,
        refetch
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$equality$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["withEquality"])(session, isSessionAtomEqual);
    const executeSessionFetch = async (signal, queryParams)=>{
        const current = session.value;
        session.set({
            ...current,
            isPending: current.data === null,
            isRefetching: true,
            error: null,
            refetch
        });
        if (signal.aborted) return "aborted";
        try {
            const res = await $fetch("/get-session", {
                method: "GET",
                query: queryParams?.query,
                signal
            });
            if (signal.aborted) return "aborted";
            let { data, error } = normalizeSessionResponse(res);
            let outcome = "fresh";
            if (data?.needsRefresh) try {
                const refreshRes = await $fetch("/get-session", {
                    method: "POST",
                    signal
                });
                if (signal.aborted) return "aborted";
                ({ data, error } = normalizeSessionResponse(refreshRes));
            } catch  {
                if (signal.aborted) return "aborted";
                outcome = "stale";
            }
            if (error) {
                const latest = session.value;
                const isUnauthorized = error?.status === 401;
                session.set({
                    data: isUnauthorized ? null : latest.data,
                    error,
                    isPending: false,
                    isRefetching: false,
                    refetch
                });
                return "failed";
            }
            const sessionData = normalizeSessionData(data);
            const current = session.value;
            const stableData = current.data != null && sessionData != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$equality$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isJsonEqual"])(current.data, sessionData) ? current.data : sessionData;
            session.set({
                data: stableData,
                error: null,
                isPending: false,
                isRefetching: false,
                refetch
            });
            return outcome;
        } catch (fetchError) {
            if (signal.aborted) return "aborted";
            const latest = session.value;
            session.set({
                data: latest.data,
                error: fetchError,
                isPending: false,
                isRefetching: false,
                refetch
            });
            return "failed";
        }
    };
    const getFreshUntil = ()=>{
        const expiresAt = session.value.data?.session?.expiresAt;
        const sessionExpiresAt = expiresAt instanceof Date ? expiresAt.getTime() : Number.POSITIVE_INFINITY;
        return Math.min(Date.now() + SESSION_MOUNT_DEDUPE_INTERVAL, sessionExpiresAt);
    };
    const fetchSession = (queryParams)=>{
        freshUntil = 0;
        flight?.cancel();
        const controller = new AbortController();
        const request = {
            cancel: ()=>controller.abort(),
            promise: Promise.resolve().then(()=>{
                if (controller.signal.aborted) return "aborted";
                return executeSessionFetch(controller.signal, queryParams);
            }),
            revision: sessionRevision
        };
        flight = request;
        const settleFlight = (outcome)=>{
            if (flight !== request) return;
            flight = void 0;
            if (outcome === "fresh" && request.revision === sessionRevision) freshUntil = getFreshUntil();
        };
        request.promise.then(settleFlight, ()=>settleFlight("failed"));
        return request.promise.then(()=>void 0);
    };
    const fetchSessionOnMount = ()=>{
        if (flight?.revision === sessionRevision) return flight.promise.then(()=>void 0);
        if (Date.now() < freshUntil) return Promise.resolve();
        return fetchSession();
    };
    let broadcastSessionUpdate = ()=>{};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$lifecycle$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["onMount"])(session, ()=>{
        let timeoutId;
        if (!isServer()) //TURBOPACK unreachable
        ;
        const refreshManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$session$2d$refresh$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["createSessionRefreshManager"])({
            fetchSession,
            shouldPollSession: ()=>session.value.data != null,
            sessionSignal: $signal,
            options
        });
        refreshManager.init();
        broadcastSessionUpdate = refreshManager.broadcastSessionUpdate;
        return ()=>{
            if (timeoutId) clearTimeout(timeoutId);
            refreshManager.cleanup();
        };
    });
    return {
        session,
        $sessionSignal: $signal,
        broadcastSessionUpdate: (trigger)=>broadcastSessionUpdate(trigger)
    };
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/session-refresh.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSessionRefreshManager",
    ()=>createSessionRefreshManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$broadcast$2d$channel$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/broadcast-channel.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$focus$2d$manager$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/focus-manager.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$online$2d$manager$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/online-manager.mjs [middleware] (ecmascript)");
;
;
;
//#region src/client/session-refresh.ts
const now = ()=>Math.floor(Date.now() / 1e3);
/**
* Rate limit: don't refetch on focus if a session request was made within this many seconds
*/ const FOCUS_REFETCH_RATE_LIMIT_SECONDS = 5;
function createSessionRefreshManager(opts) {
    const { fetchSession, shouldPollSession = ()=>true, sessionSignal, options = {} } = opts;
    const refetchInterval = options.sessionOptions?.refetchInterval ?? 0;
    const refetchOnWindowFocus = options.sessionOptions?.refetchOnWindowFocus ?? true;
    const refetchWhenOffline = options.sessionOptions?.refetchWhenOffline ?? false;
    const state = {
        isInitialized: false,
        lastSessionRequest: 0
    };
    const shouldRefetch = ()=>{
        return refetchWhenOffline || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$online$2d$manager$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getGlobalOnlineManager"])().isOnline;
    };
    const triggerRefetch = (event)=>{
        if (!shouldRefetch()) return;
        if (event?.event === "storage") {
            fetchSession();
            return;
        }
        if (event?.event === "poll") {
            state.lastSessionRequest = now();
            fetchSession();
            return;
        }
        if (event?.event === "visibilitychange") {
            if (now() - state.lastSessionRequest < FOCUS_REFETCH_RATE_LIMIT_SECONDS) return;
            state.lastSessionRequest = now();
            fetchSession();
            return;
        }
        fetchSession();
    };
    const broadcastSessionUpdate = (trigger)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$broadcast$2d$channel$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getGlobalBroadcastChannel"])().post({
            event: "session",
            data: {
                trigger
            },
            clientId: Math.random().toString(36).substring(7)
        });
    };
    const setupPolling = ()=>{
        if (refetchInterval && refetchInterval > 0) state.pollInterval = setInterval(()=>{
            if (shouldPollSession()) triggerRefetch({
                event: "poll"
            });
        }, refetchInterval * 1e3);
    };
    const setupBroadcast = ()=>{
        state.unsubscribeBroadcast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$broadcast$2d$channel$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getGlobalBroadcastChannel"])().subscribe(()=>{
            triggerRefetch({
                event: "storage"
            });
        });
    };
    const setupFocusRefetch = ()=>{
        if (!refetchOnWindowFocus) return;
        state.unsubscribeFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$focus$2d$manager$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getGlobalFocusManager"])().subscribe(()=>{
            triggerRefetch({
                event: "visibilitychange"
            });
        });
    };
    const setupOnlineRefetch = ()=>{
        state.unsubscribeOnline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$online$2d$manager$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getGlobalOnlineManager"])().subscribe((online)=>{
            if (online) triggerRefetch({
                event: "visibilitychange"
            });
        });
    };
    const setupSignalSubscription = ()=>{
        state.unsubscribeSignal = sessionSignal.listen(()=>{
            fetchSession();
        });
    };
    const init = ()=>{
        if (state.isInitialized) return;
        state.isInitialized = true;
        setupPolling();
        setupBroadcast();
        setupFocusRefetch();
        setupOnlineRefetch();
        setupSignalSubscription();
        state.cleanupBroadcastSetup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$broadcast$2d$channel$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getGlobalBroadcastChannel"])().setup();
        state.cleanupFocusSetup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$focus$2d$manager$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getGlobalFocusManager"])().setup();
        state.cleanupOnlineSetup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$online$2d$manager$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["getGlobalOnlineManager"])().setup();
    };
    const cleanup = ()=>{
        if (!state.isInitialized) return;
        if (state.pollInterval) {
            clearInterval(state.pollInterval);
            state.pollInterval = void 0;
        }
        if (state.unsubscribeBroadcast) {
            state.unsubscribeBroadcast();
            state.unsubscribeBroadcast = void 0;
        }
        if (state.unsubscribeFocus) {
            state.unsubscribeFocus();
            state.unsubscribeFocus = void 0;
        }
        if (state.unsubscribeOnline) {
            state.unsubscribeOnline();
            state.unsubscribeOnline = void 0;
        }
        if (state.unsubscribeSignal) {
            state.unsubscribeSignal();
            state.unsubscribeSignal = void 0;
        }
        if (state.cleanupBroadcastSetup) {
            state.cleanupBroadcastSetup();
            state.cleanupBroadcastSetup = void 0;
        }
        if (state.cleanupFocusSetup) {
            state.cleanupFocusSetup();
            state.cleanupFocusSetup = void 0;
        }
        if (state.cleanupOnlineSetup) {
            state.cleanupOnlineSetup();
            state.cleanupOnlineSetup = void 0;
        }
        state.isInitialized = false;
        state.lastSessionRequest = 0;
    };
    return {
        init,
        cleanup,
        triggerRefetch,
        broadcastSessionUpdate
    };
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/package.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
//#region package.json
var version = "1.7.1";
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/access/access.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAccessControl",
    ()=>createAccessControl,
    "role",
    ()=>role
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/error/index.mjs [middleware] (ecmascript) <locals>");
;
//#region src/plugins/access/access.ts
function unknownResourceResponse(requestedResource) {
    return {
        success: false,
        error: `You are not allowed to access resource: ${requestedResource}`
    };
}
function unauthorizedResourceResponse(requestedResource) {
    return {
        success: false,
        error: `unauthorized to access resource "${requestedResource}"`
    };
}
function normalizeConnector(connector) {
    return connector === "OR" ? "OR" : "AND";
}
function isActionList(actions) {
    return Array.isArray(actions);
}
function normalizeActionRequest(requestedActions) {
    if (isActionList(requestedActions)) return {
        actions: requestedActions,
        connector: "AND"
    };
    if (!requestedActions || typeof requestedActions !== "object") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"]("Invalid access control request");
    const { actions, connector } = requestedActions;
    if (!isActionList(actions)) return {
        actions: [],
        connector: normalizeConnector(connector)
    };
    return {
        actions,
        connector: normalizeConnector(connector)
    };
}
function hasAllowedAction(allowedActions, requestedAction) {
    return typeof requestedAction === "string" && allowedActions.includes(requestedAction);
}
function isResourceAuthorized(allowedActions, { actions, connector }) {
    if (actions.length === 0) return false;
    if (connector === "OR") return actions.some((requestedAction)=>hasAllowedAction(allowedActions, requestedAction));
    return actions.every((requestedAction)=>hasAllowedAction(allowedActions, requestedAction));
}
function role(statements) {
    return {
        authorize (request, connector = "AND") {
            let hasAuthorizedResource = false;
            for (const [requestedResource, requestedActions] of Object.entries(request)){
                const allowedActions = statements[requestedResource];
                if (!allowedActions) {
                    if (connector === "AND") return unknownResourceResponse(requestedResource);
                    continue;
                }
                const isAuthorized = isResourceAuthorized(allowedActions, normalizeActionRequest(requestedActions));
                if (isAuthorized) hasAuthorizedResource = true;
                if (isAuthorized && connector === "OR") return {
                    success: true
                };
                if (!isAuthorized && connector === "AND") return unauthorizedResourceResponse(requestedResource);
            }
            if (hasAuthorizedResource) return {
                success: true
            };
            return {
                success: false,
                error: "Not authorized"
            };
        },
        statements
    };
}
function createAccessControl(s) {
    return {
        newRole (statements) {
            return role(statements);
        },
        statements: s
    };
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/admin/access/statement.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminAc",
    ()=>adminAc,
    "defaultAc",
    ()=>defaultAc,
    "defaultRoles",
    ()=>defaultRoles,
    "defaultStatements",
    ()=>defaultStatements,
    "userAc",
    ()=>userAc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$access$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/access/access.mjs [middleware] (ecmascript)");
;
//#region src/plugins/admin/access/statement.ts
const defaultStatements = {
    user: [
        "create",
        "list",
        "set-role",
        "ban",
        "impersonate",
        "impersonate-admins",
        "delete",
        "set-password",
        "set-email",
        "get",
        "update"
    ],
    session: [
        "list",
        "revoke",
        "delete"
    ]
};
const defaultAc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$access$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["createAccessControl"])(defaultStatements);
const adminAc = defaultAc.newRole({
    user: [
        "create",
        "list",
        "set-role",
        "ban",
        "impersonate",
        "delete",
        "set-password",
        "set-email",
        "get",
        "update"
    ],
    session: [
        "list",
        "revoke",
        "delete"
    ]
});
const userAc = defaultAc.newRole({
    user: [],
    session: []
});
const defaultRoles = {
    admin: adminAc,
    user: userAc
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/admin/client.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminClient",
    ()=>adminClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/version.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/admin/access/statement.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/admin/error-codes.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/admin/has-permission.mjs [middleware] (ecmascript)");
;
;
;
;
//#region src/plugins/admin/client.ts
const adminClient = (options)=>{
    const roles = {
        admin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["adminAc"],
        user: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["userAc"],
        ...options?.roles
    };
    return {
        id: "admin-client",
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["PACKAGE_VERSION"],
        $InferServerPlugin: {},
        getActions: ()=>({
                admin: {
                    checkRolePermission: (data)=>{
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$has$2d$permission$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["hasPermission"])({
                            role: data.role,
                            options: {
                                ac: options?.ac,
                                roles
                            },
                            permissions: data.permissions
                        });
                    }
                }
            }),
        pathMethods: {
            "/admin/list-users": "GET",
            "/admin/impersonate-user": "POST",
            "/admin/stop-impersonating": "POST"
        },
        atomListeners: [
            {
                matcher: (path)=>path === "/admin/impersonate-user" || path === "/admin/stop-impersonating",
                signal: "$sessionSignal"
            }
        ],
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["ADMIN_ERROR_CODES"]
    };
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/admin/error-codes.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADMIN_ERROR_CODES",
    ()=>ADMIN_ERROR_CODES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware] (ecmascript)");
;
//#region src/plugins/admin/error-codes.ts
const ADMIN_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    FAILED_TO_CREATE_USER: "Failed to create user",
    USER_ALREADY_EXISTS: "User already exists.",
    USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "User already exists. Use another email.",
    YOU_CANNOT_BAN_YOURSELF: "You cannot ban yourself",
    YOU_ARE_NOT_ALLOWED_TO_CHANGE_USERS_ROLE: "You are not allowed to change users role",
    YOU_ARE_NOT_ALLOWED_TO_CREATE_USERS: "You are not allowed to create users",
    YOU_ARE_NOT_ALLOWED_TO_LIST_USERS: "You are not allowed to list users",
    YOU_ARE_NOT_ALLOWED_TO_LIST_USERS_SESSIONS: "You are not allowed to list users sessions",
    YOU_ARE_NOT_ALLOWED_TO_BAN_USERS: "You are not allowed to ban users",
    YOU_ARE_NOT_ALLOWED_TO_IMPERSONATE_USERS: "You are not allowed to impersonate users",
    YOU_ARE_NOT_ALLOWED_TO_REVOKE_USERS_SESSIONS: "You are not allowed to revoke users sessions",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_USERS: "You are not allowed to delete users",
    YOU_ARE_NOT_ALLOWED_TO_SET_USERS_PASSWORD: "You are not allowed to set users password",
    BANNED_USER: "You have been banned from this application",
    YOU_ARE_NOT_ALLOWED_TO_GET_USER: "You are not allowed to get user",
    NO_DATA_TO_UPDATE: "No data to update",
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_USERS: "You are not allowed to update users",
    YOU_CANNOT_REMOVE_YOURSELF: "You cannot remove yourself",
    YOU_ARE_NOT_ALLOWED_TO_SET_NON_EXISTENT_VALUE: "You are not allowed to set a non-existent role value",
    YOU_CANNOT_IMPERSONATE_ADMINS: "You cannot impersonate admins",
    INVALID_ROLE_TYPE: "Invalid role type",
    YOU_ARE_NOT_ALLOWED_TO_SET_USERS_EMAIL: "You are not allowed to update users email",
    PASSWORD_CANNOT_BE_UPDATED_VIA_UPDATE_USER: "Password cannot be updated through update-user. Use the set-user-password endpoint instead"
});
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/admin/has-permission.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasPermission",
    ()=>hasPermission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/admin/access/statement.mjs [middleware] (ecmascript)");
;
//#region src/plugins/admin/has-permission.ts
const hasPermission = (input)=>{
    if (input.userId && input.options?.adminUserIds?.includes(input.userId)) return true;
    if (!input.permissions) return false;
    const roles = (input.role || input.options?.defaultRole || "user").split(",");
    const acRoles = input.options?.roles || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$admin$2f$access$2f$statement$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["defaultRoles"];
    for (const role of roles)if (acRoles[role]?.authorize(input.permissions)?.success) return true;
    return false;
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/device-authorization/client.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deviceAuthorizationClient",
    ()=>deviceAuthorizationClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/version.mjs [middleware] (ecmascript)");
;
//#region src/plugins/device-authorization/client.ts
const deviceAuthorizationClient = ()=>{
    return {
        id: "device-authorization",
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["PACKAGE_VERSION"],
        $InferServerPlugin: {},
        pathMethods: {
            "/device/code": "POST",
            "/device/token": "POST",
            "/device": "GET",
            "/device/approve": "POST",
            "/device/deny": "POST"
        }
    };
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/email-otp/client.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emailOTPClient",
    ()=>emailOTPClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/version.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/email-otp/error-codes.mjs [middleware] (ecmascript)");
;
;
//#region src/plugins/email-otp/client.ts
const emailOTPClient = ()=>{
    return {
        id: "email-otp",
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["PACKAGE_VERSION"],
        $InferServerPlugin: {},
        atomListeners: [
            {
                matcher: (path)=>path === "/email-otp/verify-email" || path === "/sign-in/email-otp" || path === "/email-otp/request-email-change",
                signal: "$sessionSignal"
            }
        ],
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$email$2d$otp$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["EMAIL_OTP_ERROR_CODES"]
    };
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/email-otp/error-codes.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMAIL_OTP_ERROR_CODES",
    ()=>EMAIL_OTP_ERROR_CODES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware] (ecmascript)");
;
//#region src/plugins/email-otp/error-codes.ts
const EMAIL_OTP_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    OTP_EXPIRED: "OTP expired",
    INVALID_OTP: "Invalid OTP",
    TOO_MANY_ATTEMPTS: "Too many attempts"
});
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/one-tap/client.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "oneTapClient",
    ()=>oneTapClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/version.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/utils/url.mjs [middleware] (ecmascript)");
;
;
//#region src/plugins/one-tap/client.ts
let isRequestInProgress = false;
function isFedCMSupported() {
    return ("TURBOPACK compile-time value", "undefined") !== "undefined" && "IdentityCredential" in window;
}
/**
* Reasons that should NOT trigger a retry.
* @see https://developers.google.com/identity/gsi/web/reference/js-reference
*/ const noRetryReasons = {
    dismissed: [
        "credential_returned",
        "cancel_called"
    ],
    skipped: [
        "user_cancel",
        "tap_outside"
    ]
};
const oneTapClient = (options)=>{
    return {
        id: "one-tap",
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["PACKAGE_VERSION"],
        fetchPlugins: [
            {
                id: "fedcm-signout-handle",
                name: "FedCM Sign-Out Handler",
                hooks: {
                    async onResponse (ctx) {
                        if (!ctx.request.url.toString().includes("/sign-out")) return;
                        if (options.promptOptions?.fedCM === false || !isFedCMSupported()) return;
                        //TURBOPACK unreachable
                        ;
                    }
                }
            }
        ],
        getActions: ($fetch, _$store, _options)=>{
            return {
                oneTap: async (opts, fetchOptions)=>{
                    if (isRequestInProgress) {
                        console.warn("A Google One Tap request is already in progress. Please wait.");
                        return;
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.warn("Google One Tap is only available in browser environments");
                        return;
                    }
                    //TURBOPACK unreachable
                    ;
                    async function callback(idToken) {
                        if ((await $fetch("/one-tap/callback", {
                            method: "POST",
                            body: {
                                idToken,
                                callbackURL: opts?.callbackURL
                            },
                            ...opts?.fetchOptions,
                            ...fetchOptions
                        }))?.error) return;
                        if (!opts?.fetchOptions && !fetchOptions || opts?.callbackURL) {
                            const target = opts?.callbackURL ?? "/";
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isSafeUrlScheme"])(target)) window.location.href = target;
                        }
                    }
                    async function callback1(idToken) {
                        if ((await $fetch("/one-tap/callback", {
                            method: "POST",
                            body: {
                                idToken,
                                callbackURL: opts?.callbackURL
                            },
                            ...opts?.fetchOptions,
                            ...fetchOptions
                        }))?.error) return;
                        if (!opts?.fetchOptions && !fetchOptions || opts?.callbackURL) {
                            const target = opts?.callbackURL ?? "/";
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isSafeUrlScheme"])(target)) window.location.href = target;
                        }
                    }
                    const autoSelect = undefined, cancelOnTapOutside = undefined, context = undefined;
                    const contextValue = undefined;
                }
            };
        },
        getAtoms ($fetch) {
            return {};
        }
    };
};
const loadGoogleScript = ()=>{
    return new Promise((resolve, reject)=>{
        if (window.googleScriptInitialized) {
            resolve();
            return;
        }
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        script.onload = ()=>{
            window.googleScriptInitialized = true;
            resolve();
        };
        script.onerror = ()=>{
            reject(/* @__PURE__ */ new Error("Failed to load Google Identity Services script"));
        };
        document.head.appendChild(script);
    });
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/organization/access/statement.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminAc",
    ()=>adminAc,
    "defaultAc",
    ()=>defaultAc,
    "defaultRoles",
    ()=>defaultRoles,
    "defaultStatements",
    ()=>defaultStatements,
    "memberAc",
    ()=>memberAc,
    "ownerAc",
    ()=>ownerAc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$access$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/access/access.mjs [middleware] (ecmascript)");
;
//#region src/plugins/organization/access/statement.ts
const defaultStatements = {
    organization: [
        "update",
        "delete"
    ],
    member: [
        "create",
        "update",
        "delete"
    ],
    invitation: [
        "create",
        "cancel"
    ],
    team: [
        "create",
        "update",
        "delete"
    ],
    ac: [
        "create",
        "read",
        "update",
        "delete"
    ]
};
const defaultAc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$access$2f$access$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["createAccessControl"])(defaultStatements);
const adminAc = defaultAc.newRole({
    organization: [
        "update"
    ],
    invitation: [
        "create",
        "cancel"
    ],
    member: [
        "create",
        "update",
        "delete"
    ],
    team: [
        "create",
        "update",
        "delete"
    ],
    ac: [
        "create",
        "read",
        "update",
        "delete"
    ]
});
const ownerAc = defaultAc.newRole({
    organization: [
        "update",
        "delete"
    ],
    member: [
        "create",
        "update",
        "delete"
    ],
    invitation: [
        "create",
        "cancel"
    ],
    team: [
        "create",
        "update",
        "delete"
    ],
    ac: [
        "create",
        "read",
        "update",
        "delete"
    ]
});
const memberAc = defaultAc.newRole({
    organization: [],
    member: [],
    invitation: [],
    team: [],
    ac: [
        "read"
    ]
});
const defaultRoles = {
    admin: adminAc,
    owner: ownerAc,
    member: memberAc
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/organization/client.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientSideHasPermission",
    ()=>clientSideHasPermission,
    "inferOrgAdditionalFields",
    ()=>inferOrgAdditionalFields,
    "organizationClient",
    ()=>organizationClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/version.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$query$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/client/query.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$access$2f$statement$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/organization/access/statement.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/organization/error-codes.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$permission$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/organization/permission.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/nanostores@1.5.2/node_modules/nanostores/atom/index.js [middleware] (ecmascript)");
;
;
;
;
;
;
//#region src/plugins/organization/client.ts
/**
* Using the same `hasPermissionFn` function, but without the need for a `ctx` parameter or the `organizationId` parameter.
*/ const clientSideHasPermission = (input)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$permission$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["hasPermissionFn"])(input, input.options.roles || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$access$2f$statement$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["defaultRoles"]);
};
const organizationClient = (options)=>{
    const $listOrg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["atom"])(false);
    const $activeOrgSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["atom"])(false);
    const $activeMemberSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["atom"])(false);
    const $activeMemberRoleSignal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$nanostores$40$1$2e$5$2e$2$2f$node_modules$2f$nanostores$2f$atom$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["atom"])(false);
    const roles = {
        admin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$access$2f$statement$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["adminAc"],
        member: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$access$2f$statement$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["memberAc"],
        owner: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$access$2f$statement$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["ownerAc"],
        ...options?.roles
    };
    return {
        id: "organization",
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["PACKAGE_VERSION"],
        $InferServerPlugin: {},
        getActions: ($fetch, _$store, co)=>({
                $Infer: {
                    ActiveOrganization: {},
                    Organization: {},
                    Invitation: {},
                    Member: {},
                    Team: {}
                },
                organization: {
                    checkRolePermission: (data)=>{
                        return clientSideHasPermission({
                            role: data.role,
                            options: {
                                ac: options?.ac,
                                roles
                            },
                            permissions: data.permissions
                        });
                    }
                }
            }),
        getAtoms: ($fetch)=>{
            const listOrganizations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$query$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["useAuthQuery"])($listOrg, "/organization/list", $fetch, {
                method: "GET"
            });
            return {
                $listOrg,
                $activeOrgSignal,
                $activeMemberSignal,
                $activeMemberRoleSignal,
                activeOrganization: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$query$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["useAuthQuery"])([
                    $activeOrgSignal
                ], "/organization/get-full-organization", $fetch, ()=>({
                        method: "GET"
                    })),
                listOrganizations,
                activeMember: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$query$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["useAuthQuery"])([
                    $activeOrgSignal,
                    $activeMemberSignal
                ], "/organization/get-active-member", $fetch, {
                    method: "GET"
                }),
                activeMemberRole: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$client$2f$query$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["useAuthQuery"])([
                    $activeOrgSignal,
                    $activeMemberRoleSignal
                ], "/organization/get-active-member-role", $fetch, {
                    method: "GET"
                })
            };
        },
        pathMethods: {
            "/organization/get-full-organization": "GET",
            "/organization/list-user-teams": "GET"
        },
        atomListeners: [
            {
                matcher (path) {
                    return path === "/organization/create" || path === "/organization/delete" || path === "/organization/update";
                },
                signal: "$listOrg"
            },
            {
                matcher (path) {
                    return path === "/sign-out" || path.startsWith("/organization");
                },
                signal: "$activeOrgSignal"
            },
            {
                matcher (path) {
                    return path.startsWith("/organization/set-active") || path === "/organization/create" || path === "/organization/delete" || path === "/organization/remove-member" || path === "/organization/leave" || path === "/organization/accept-invitation";
                },
                signal: "$sessionSignal"
            },
            {
                matcher (path) {
                    return path.includes("/organization/update-member-role") || path.startsWith("/organization/set-active");
                },
                signal: "$activeMemberSignal"
            },
            {
                matcher (path) {
                    return path.includes("/organization/update-member-role") || path.startsWith("/organization/set-active");
                },
                signal: "$activeMemberRoleSignal"
            }
        ],
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$organization$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["ORGANIZATION_ERROR_CODES"]
    };
};
const inferOrgAdditionalFields = (schema)=>{
    return {};
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/organization/error-codes.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ORGANIZATION_ERROR_CODES",
    ()=>ORGANIZATION_ERROR_CODES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware] (ecmascript)");
;
//#region src/plugins/organization/error-codes.ts
const ORGANIZATION_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_ORGANIZATION: "You are not allowed to create a new organization",
    YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_ORGANIZATIONS: "You have reached the maximum number of organizations",
    ORGANIZATION_ALREADY_EXISTS: "Organization already exists",
    ORGANIZATION_SLUG_ALREADY_TAKEN: "Organization slug already taken",
    ORGANIZATION_NOT_FOUND: "Organization not found",
    USER_IS_NOT_A_MEMBER_OF_THE_ORGANIZATION: "User is not a member of the organization",
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_ORGANIZATION: "You are not allowed to update this organization",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_ORGANIZATION: "You are not allowed to delete this organization",
    NO_ACTIVE_ORGANIZATION: "No active organization",
    USER_IS_ALREADY_A_MEMBER_OF_THIS_ORGANIZATION: "User is already a member of this organization",
    MEMBER_NOT_FOUND: "Member not found",
    ROLE_NOT_FOUND: "Role not found",
    YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM: "You are not allowed to create a new team",
    TEAM_ALREADY_EXISTS: "Team already exists",
    TEAM_NOT_FOUND: "Team not found",
    YOU_CANNOT_LEAVE_THE_ORGANIZATION_AS_THE_ONLY_OWNER: "You cannot leave the organization as the only owner",
    YOU_CANNOT_LEAVE_THE_ORGANIZATION_WITHOUT_AN_OWNER: "You cannot leave the organization without an owner",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_MEMBER: "You are not allowed to delete this member",
    YOU_ARE_NOT_ALLOWED_TO_INVITE_USERS_TO_THIS_ORGANIZATION: "You are not allowed to invite users to this organization",
    USER_IS_ALREADY_INVITED_TO_THIS_ORGANIZATION: "User is already invited to this organization",
    INVITATION_NOT_FOUND: "Invitation not found",
    YOU_ARE_NOT_THE_RECIPIENT_OF_THE_INVITATION: "You are not the recipient of the invitation",
    EMAIL_VERIFICATION_REQUIRED_BEFORE_ACCEPTING_OR_REJECTING_INVITATION: "Email verification required before accepting or rejecting invitation",
    EMAIL_VERIFICATION_REQUIRED_FOR_INVITATION: "Email verification required to view or list invitations for the session email",
    YOU_ARE_NOT_ALLOWED_TO_CANCEL_THIS_INVITATION: "You are not allowed to cancel this invitation",
    INVITER_IS_NO_LONGER_A_MEMBER_OF_THE_ORGANIZATION: "Inviter is no longer a member of the organization",
    YOU_ARE_NOT_ALLOWED_TO_INVITE_USER_WITH_THIS_ROLE: "You are not allowed to invite a user with this role",
    FAILED_TO_RETRIEVE_INVITATION: "Failed to retrieve invitation",
    YOU_HAVE_REACHED_THE_MAXIMUM_NUMBER_OF_TEAMS: "You have reached the maximum number of teams",
    UNABLE_TO_REMOVE_LAST_TEAM: "Unable to remove last team",
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_MEMBER: "You are not allowed to update this member",
    ORGANIZATION_MEMBERSHIP_LIMIT_REACHED: "Organization membership limit reached",
    YOU_ARE_NOT_ALLOWED_TO_CREATE_TEAMS_IN_THIS_ORGANIZATION: "You are not allowed to create teams in this organization",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_TEAMS_IN_THIS_ORGANIZATION: "You are not allowed to delete teams in this organization",
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_THIS_TEAM: "You are not allowed to update this team",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_THIS_TEAM: "You are not allowed to delete this team",
    INVITATION_LIMIT_REACHED: "Invitation limit reached",
    TEAM_MEMBER_LIMIT_REACHED: "Team member limit reached",
    USER_IS_NOT_A_MEMBER_OF_THE_TEAM: "User is not a member of the team",
    YOU_CAN_NOT_ACCESS_THE_MEMBERS_OF_THIS_TEAM: "You are not allowed to list the members of this team",
    YOU_DO_NOT_HAVE_AN_ACTIVE_TEAM: "You do not have an active team",
    YOU_ARE_NOT_ALLOWED_TO_CREATE_A_NEW_TEAM_MEMBER: "You are not allowed to create a new member",
    YOU_ARE_NOT_ALLOWED_TO_REMOVE_A_TEAM_MEMBER: "You are not allowed to remove a team member",
    YOU_ARE_NOT_ALLOWED_TO_ACCESS_THIS_ORGANIZATION: "You are not allowed to access this organization as an owner",
    YOU_ARE_NOT_A_MEMBER_OF_THIS_ORGANIZATION: "You are not a member of this organization",
    MISSING_AC_INSTANCE: "Dynamic Access Control requires a pre-defined ac instance on the server auth plugin. Read server logs for more information",
    YOU_MUST_BE_IN_AN_ORGANIZATION_TO_CREATE_A_ROLE: "You must be in an organization to create a role",
    YOU_ARE_NOT_ALLOWED_TO_CREATE_A_ROLE: "You are not allowed to create a role",
    YOU_ARE_NOT_ALLOWED_TO_UPDATE_A_ROLE: "You are not allowed to update a role",
    YOU_ARE_NOT_ALLOWED_TO_DELETE_A_ROLE: "You are not allowed to delete a role",
    YOU_ARE_NOT_ALLOWED_TO_READ_A_ROLE: "You are not allowed to read a role",
    YOU_ARE_NOT_ALLOWED_TO_LIST_A_ROLE: "You are not allowed to list a role",
    YOU_ARE_NOT_ALLOWED_TO_GET_A_ROLE: "You are not allowed to get a role",
    TOO_MANY_ROLES: "This organization has too many roles",
    INVALID_RESOURCE: "The provided permission includes an invalid resource",
    ROLE_NAME_IS_ALREADY_TAKEN: "That role name is already taken",
    CANNOT_DELETE_A_PRE_DEFINED_ROLE: "Cannot delete a pre-defined role",
    ROLE_IS_ASSIGNED_TO_MEMBERS: "Cannot delete a role that is assigned to members. Please reassign the members to a different role first",
    INVALID_TEAM_ID: "Team id contains a reserved character"
});
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/organization/permission.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cacheAllRoles",
    ()=>cacheAllRoles,
    "hasPermissionFn",
    ()=>hasPermissionFn
]);
//#region src/plugins/organization/permission.ts
const hasPermissionFn = (input, acRoles)=>{
    if (!input.permissions) return false;
    const roles = input.role.split(",");
    const creatorRole = input.options.creatorRole || "owner";
    const isCreator = roles.includes(creatorRole);
    const allowCreatorsAllPermissions = input.allowCreatorAllPermissions || false;
    if (isCreator && allowCreatorsAllPermissions) return true;
    for (const role of roles)if (acRoles[role]?.authorize(input.permissions)?.success) return true;
    return false;
};
const cacheAllRoles = /* @__PURE__ */ new Map();
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/two-factor/client.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "twoFactorClient",
    ()=>twoFactorClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/version.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/two-factor/error-code.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/utils/url.mjs [middleware] (ecmascript)");
;
;
;
//#region src/plugins/two-factor/client.ts
const twoFactorClient = (options)=>{
    return {
        id: "two-factor",
        version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$version$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["PACKAGE_VERSION"],
        $InferServerPlugin: {},
        atomListeners: [
            {
                matcher: (path)=>path.startsWith("/two-factor/"),
                signal: "$sessionSignal"
            }
        ],
        pathMethods: {
            "/two-factor/disable": "POST",
            "/two-factor/enable": "POST",
            "/two-factor/send-otp": "POST",
            "/two-factor/generate-backup-codes": "POST",
            "/two-factor/get-totp-uri": "POST",
            "/two-factor/verify-totp": "POST",
            "/two-factor/verify-otp": "POST",
            "/two-factor/verify-backup-code": "POST"
        },
        fetchPlugins: [
            {
                id: "two-factor",
                name: "two-factor",
                hooks: {
                    async onSuccess (context) {
                        if (context.data?.twoFactorRedirect) {
                            if (options?.onTwoFactorRedirect) {
                                await options.onTwoFactorRedirect({
                                    twoFactorMethods: context.data.twoFactorMethods
                                });
                                return;
                            }
                            if (options?.twoFactorPage && ("TURBOPACK compile-time value", "undefined") !== "undefined" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$url$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["isSafeUrlScheme"])(options.twoFactorPage)) //TURBOPACK unreachable
                            ;
                        }
                    }
                }
            }
        ],
        $ERROR_CODES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$plugins$2f$two$2d$factor$2f$error$2d$code$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["TWO_FACTOR_ERROR_CODES"]
    };
};
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/plugins/two-factor/error-code.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TWO_FACTOR_ERROR_CODES",
    ()=>TWO_FACTOR_ERROR_CODES
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/utils/error-codes.mjs [middleware] (ecmascript)");
;
//#region src/plugins/two-factor/error-code.ts
const TWO_FACTOR_ERROR_CODES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$utils$2f$error$2d$codes$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["defineErrorCodes"])({
    OTP_NOT_ENABLED: "OTP not enabled",
    OTP_NOT_CONFIGURED: "OTP is not available",
    OTP_HAS_EXPIRED: "OTP has expired",
    TOTP_NOT_ENABLED: "TOTP not enabled",
    TOTP_NOT_CONFIGURED: "TOTP is not available",
    TWO_FACTOR_NOT_ENABLED: "Two factor isn't enabled",
    BACKUP_CODES_NOT_ENABLED: "Backup codes aren't enabled",
    INVALID_BACKUP_CODE: "Invalid backup code",
    INVALID_CODE: "Invalid code",
    TOO_MANY_ATTEMPTS_REQUEST_NEW_CODE: "Too many attempts. Please request a new code.",
    ACCOUNT_TEMPORARILY_LOCKED: "Too many failed verification attempts. Your account is temporarily locked. Please try again later.",
    INVALID_TWO_FACTOR_COOKIE: "Invalid two factor cookie"
});
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/utils/is-atom.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAtom",
    ()=>isAtom
]);
//#region src/utils/is-atom.ts
function isAtom(value) {
    return typeof value === "object" && value !== null && "get" in value && typeof value.get === "function" && "lc" in value && typeof value.lc === "number";
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/utils/url.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBaseURL",
    ()=>getBaseURL,
    "getHost",
    ()=>getHost,
    "getHostFromSource",
    ()=>getHostFromSource,
    "getOrigin",
    ()=>getOrigin,
    "getProtocol",
    ()=>getProtocol,
    "getProtocolFromSource",
    ()=>getProtocolFromSource,
    "isDynamicBaseURLConfig",
    ()=>isDynamicBaseURLConfig,
    "isRequestLike",
    ()=>isRequestLike,
    "matchesHostPattern",
    ()=>matchesHostPattern,
    "resolveBaseURL",
    ()=>resolveBaseURL,
    "resolveDynamicBaseURL",
    ()=>resolveDynamicBaseURL,
    "trimTrailingSlashes",
    ()=>trimTrailingSlashes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$wildcard$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/utils/wildcard.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/env/env-impl.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@better-auth+core@1.7.1_@better-auth+utils@0.4.2_@better-fetch+fetch@1.3.1_better-call@_0bc3d883358dd515905656865c162b69/node_modules/@better-auth/core/dist/error/index.mjs [middleware] (ecmascript) <locals>");
;
;
;
//#region src/utils/url.ts
const SLASH_CHAR_CODE = "/".charCodeAt(0);
/**
* Minimal loopback check for dev scheme inference only. Reachable from
* `client/config.ts` via `getBaseURL`, so we MUST NOT import the full
* `@better-auth/core/utils/host` classifier here: its `utils/ip` dependency
* on zod would leak into the client bundle (see `e2e/smoke/test/vite.spec.ts`).
*
* Server-side SSRF/loopback checks (oauth redirect matching, trusted-origin
* resolution, electron fetch gate) continue to use the authoritative
* `isLoopbackHost` from `@better-auth/core/utils/host`. This helper's only
* job is picking `http` vs `https` for dev ergonomics.
*/ function isLoopbackForDevScheme(host) {
    const hostname = host.replace(/:\d+$/, "").replace(/^\[|\]$/g, "").toLowerCase();
    return hostname === "localhost" || hostname.endsWith(".localhost") || hostname === "::1" || hostname.startsWith("127.");
}
function trimTrailingSlashes(value) {
    let end = value.length;
    while(end > 0 && value.charCodeAt(end - 1) === SLASH_CHAR_CODE)end--;
    return end === value.length ? value : value.slice(0, end);
}
function checkHasPath(url) {
    try {
        return (trimTrailingSlashes(new URL(url).pathname) || "/") !== "/";
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"](`Invalid base URL: ${url}. Please provide a valid base URL.`);
    }
}
function assertHasProtocol(url) {
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"](`Invalid base URL: ${url}. URL must include 'http://' or 'https://'`);
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"]) throw error;
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"](`Invalid base URL: ${url}. Please provide a valid base URL.`, {
            cause: error
        });
    }
}
function withPath(url, path = "/api/auth") {
    assertHasProtocol(url);
    if (checkHasPath(url)) return url;
    const trimmedUrl = trimTrailingSlashes(url);
    if (!path || path === "/") return trimmedUrl;
    path = path.startsWith("/") ? path : `/${path}`;
    return `${trimmedUrl}${path}`;
}
function validateProxyHeader(header, type) {
    if (!header || header.trim() === "") return false;
    if (type === "proto") return header === "http" || header === "https";
    if (type === "host") {
        if ([
            /\.\./,
            /\0/,
            /[\s]/,
            /^[.]/,
            /[<>'"]/,
            /javascript:/i,
            /file:/i,
            /data:/i
        ].some((pattern)=>pattern.test(header))) return false;
        return /^[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(:[0-9]{1,5})?$/.test(header) || /^(\d{1,3}\.){3}\d{1,3}(:[0-9]{1,5})?$/.test(header) || /^\[[0-9a-fA-F:]+\](:[0-9]{1,5})?$/.test(header) || /^localhost(:[0-9]{1,5})?$/i.test(header);
    }
    return false;
}
function getBaseURL(url, path, request, loadEnv, trustedProxyHeaders) {
    if (url) return withPath(url, path);
    if (loadEnv !== false) {
        const fromEnv = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["env"].BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["env"].PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["env"].NUXT_PUBLIC_BETTER_AUTH_URL || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["env"].NUXT_PUBLIC_AUTH_URL || (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["env"].BASE_URL !== "/" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$env$2f$env$2d$impl$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["env"].BASE_URL : void 0);
        if (fromEnv) return withPath(fromEnv, path);
    }
    const fromRequest = request?.headers.get("x-forwarded-host");
    const fromRequestProto = request?.headers.get("x-forwarded-proto");
    if (fromRequest && fromRequestProto && trustedProxyHeaders) {
        if (validateProxyHeader(fromRequestProto, "proto") && validateProxyHeader(fromRequest, "host")) try {
            return withPath(`${fromRequestProto}://${fromRequest}`, path);
        } catch (_error) {}
    }
    if (request) {
        const url = getOrigin(request.url);
        if (!url) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"]("Could not get origin from request. Please provide a valid base URL.");
        return withPath(url, path);
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function getOrigin(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.origin === "null" ? null : parsedUrl.origin;
    } catch  {
        return null;
    }
}
function getProtocol(url) {
    try {
        return new URL(url).protocol;
    } catch  {
        return null;
    }
}
function getHost(url) {
    try {
        return new URL(url).host;
    } catch  {
        return null;
    }
}
/**
* Checks if the baseURL config is a dynamic config object
*/ function isDynamicBaseURLConfig(config) {
    return typeof config === "object" && config !== null && "allowedHosts" in config && Array.isArray(config.allowedHosts);
}
/**
* Check if a value is a `Request`
* - `instanceof`: works for native Request instances
* - `toString`: handles where instanceof check fails but the object is still a
*   valid Request (e.g. cross-realm, polyfills). Paired with a shape check so
*   an object that only spoofs `Symbol.toStringTag` without the real shape is
*   rejected before downstream code tries to read `.headers` / `.url`.
*
* @param value The value to check
* @returns `true` if the value is a Request instance
*/ function isRequestLike(value) {
    if (value instanceof Request) return true;
    if (typeof value !== "object" || value === null || Object.prototype.toString.call(value) !== "[object Request]") return false;
    const v = value;
    return typeof v.url === "string" && typeof v.headers === "object" && v.headers !== null && typeof v.headers.get === "function";
}
/**
* Extracts the host from a `Request` or `Headers`.
* Honors `x-forwarded-host` only when `trustedProxyHeaders` is enabled,
* then falls back to the `host` header and finally the request URL.
*/ function getHostFromSource(source, trustedProxyHeaders) {
    const headers = isRequestLike(source) ? source.headers : source;
    if (trustedProxyHeaders) {
        const forwardedHost = headers.get("x-forwarded-host");
        if (forwardedHost && validateProxyHeader(forwardedHost, "host")) return forwardedHost;
    }
    const host = headers.get("host");
    if (host && validateProxyHeader(host, "host")) return host;
    if (isRequestLike(source)) try {
        return new URL(source.url).host;
    } catch  {
        return null;
    }
    return null;
}
/**
* Extracts the protocol from a `Request` or `Headers`.
* Honors `x-forwarded-proto` only when `trustedProxyHeaders` is enabled,
* then falls back to the request URL, then to "https".
*/ function getProtocolFromSource(source, configProtocol, trustedProxyHeaders) {
    if (configProtocol === "http" || configProtocol === "https") return configProtocol;
    const headers = isRequestLike(source) ? source.headers : source;
    if (trustedProxyHeaders) {
        const forwardedProto = headers.get("x-forwarded-proto");
        if (forwardedProto && validateProxyHeader(forwardedProto, "proto")) return forwardedProto;
    }
    if (isRequestLike(source)) try {
        const url = new URL(source.url);
        if (url.protocol === "http:" || url.protocol === "https:") return url.protocol.slice(0, -1);
    } catch  {}
    const host = getHostFromSource(source, trustedProxyHeaders);
    if (host && isLoopbackForDevScheme(host)) return "http";
    return "https";
}
/**
* Matches a hostname against a host pattern.
* Supports wildcard patterns like `*.vercel.app` or `preview-*.myapp.com`.
*
* @param host The hostname to test (e.g., "myapp.com", "preview-123.vercel.app")
* @param pattern The host pattern (e.g., "myapp.com", "*.vercel.app")
* @returns {boolean} true if the host matches the pattern, false otherwise.
*
* @example
* ```ts
* matchesHostPattern("myapp.com", "myapp.com") // true
* matchesHostPattern("preview-123.vercel.app", "*.vercel.app") // true
* matchesHostPattern("preview-123.myapp.com", "preview-*.myapp.com") // true
* matchesHostPattern("evil.com", "myapp.com") // false
* ```
*/ const matchesHostPattern = (host, pattern)=>{
    if (!host || !pattern) return false;
    const normalizedHost = host.replace(/^https?:\/\//, "").split("/")[0].toLowerCase();
    const normalizedPattern = pattern.replace(/^https?:\/\//, "").split("/")[0].toLowerCase();
    if (normalizedPattern.includes("*") || normalizedPattern.includes("?")) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$utils$2f$wildcard$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["wildcardMatch"])(normalizedPattern)(normalizedHost);
    return normalizedHost.toLowerCase() === normalizedPattern.toLowerCase();
};
/**
* Resolves the base URL from a dynamic config based on the incoming request.
* Validates the derived host against the allowedHosts allowlist.
*
* @param config The dynamic base URL config
* @param request The incoming request
* @param basePath The base path to append
* @returns The resolved base URL with path
* @throws BetterAuthError if host is not in allowedHosts and no fallback is set
*/ function resolveDynamicBaseURL(config, source, basePath, trustedProxyHeaders) {
    const host = getHostFromSource(source, trustedProxyHeaders);
    if (!host) {
        if (config.fallback) return withPath(config.fallback, basePath);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"]("Could not determine host from request headers. Please provide a fallback URL in your baseURL config.");
    }
    if (config.allowedHosts.some((pattern)=>matchesHostPattern(host, pattern))) return withPath(`${getProtocolFromSource(source, config.protocol, trustedProxyHeaders)}://${host}`, basePath);
    if (config.fallback) return withPath(config.fallback, basePath);
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$better$2d$auth$2b$core$40$1$2e$7$2e$1_$40$better$2d$auth$2b$utils$40$0$2e$4$2e$2_$40$better$2d$fetch$2b$fetch$40$1$2e$3$2e$1_better$2d$call$40$_0bc3d883358dd515905656865c162b69$2f$node_modules$2f40$better$2d$auth$2f$core$2f$dist$2f$error$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BetterAuthError"](`Host "${host}" is not in the allowed hosts list. Allowed hosts: ${config.allowedHosts.join(", ")}. Add this host to your allowedHosts config or provide a fallback URL.`);
}
/**
* Resolves the base URL from any config type (static string or dynamic object).
* This is the main entry point for base URL resolution.
*
* @param config The base URL config (string or object)
* @param basePath The base path to append
* @param request Optional request for dynamic resolution
* @param loadEnv Whether to load from environment variables
* @param trustedProxyHeaders Whether to trust proxy headers (for legacy behavior)
* @returns The resolved base URL with path
*/ function resolveBaseURL(config, basePath, source, loadEnv, trustedProxyHeaders) {
    if (isDynamicBaseURLConfig(config)) {
        if (source) return resolveDynamicBaseURL(config, source, basePath, trustedProxyHeaders);
        if (config.fallback) return withPath(config.fallback, basePath);
        return getBaseURL(void 0, basePath, void 0, loadEnv, trustedProxyHeaders);
    }
    const request = isRequestLike(source) ? source : void 0;
    if (typeof config === "string") return getBaseURL(config, basePath, request, loadEnv, trustedProxyHeaders);
    return getBaseURL(void 0, basePath, request, loadEnv, trustedProxyHeaders);
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/utils/wildcard.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "wildcardMatch",
    ()=>wildcardMatch
]);
//#region src/utils/wildcard.ts
/**
* Escapes a character if it has a special meaning in regular expressions
* and returns the character as is if it doesn't
*/ function escapeRegExpChar(char) {
    if (char === "-" || char === "^" || char === "$" || char === "+" || char === "." || char === "(" || char === ")" || char === "|" || char === "[" || char === "]" || char === "{" || char === "}" || char === "*" || char === "?" || char === "\\") return `\\${char}`;
    else return char;
}
/**
* Escapes all characters in a given string that have a special meaning in regular expressions
*/ function escapeRegExpString(str) {
    let result = "";
    for(let i = 0; i < str.length; i++)result += escapeRegExpChar(str[i]);
    return result;
}
/**
* Transforms one or more glob patterns into a RegExp pattern
*/ function transform(pattern, separator = true) {
    if (Array.isArray(pattern)) return `(?:${pattern.map((p)=>`^${transform(p, separator)}$`).join("|")})`;
    let separatorSplitter = "";
    let separatorMatcher = "";
    let wildcard = ".";
    if (separator === true) {
        separatorSplitter = "/";
        separatorMatcher = "[/\\\\]";
        wildcard = "[^/\\\\]";
    } else if (separator) {
        separatorSplitter = separator;
        separatorMatcher = escapeRegExpString(separatorSplitter);
        if (separatorMatcher.length > 1) {
            separatorMatcher = `(?:${separatorMatcher})`;
            wildcard = `((?!${separatorMatcher}).)`;
        } else wildcard = `[^${separatorMatcher}]`;
    }
    const requiredSeparator = separator ? `${separatorMatcher}+?` : "";
    const optionalSeparator = separator ? `${separatorMatcher}*?` : "";
    const segments = separator ? pattern.split(separatorSplitter) : [
        pattern
    ];
    let result = "";
    for(let s = 0; s < segments.length; s++){
        const segment = segments[s];
        const nextSegment = segments[s + 1];
        let currentSeparator = "";
        if (!segment && s > 0) continue;
        if (separator) if (s === segments.length - 1) currentSeparator = optionalSeparator;
        else if (nextSegment !== "**") currentSeparator = requiredSeparator;
        else currentSeparator = "";
        if (separator && segment === "**") {
            if (currentSeparator) {
                result += s === 0 ? "" : currentSeparator;
                result += `(?:${wildcard}*?${currentSeparator})*?`;
            }
            continue;
        }
        for(let c = 0; c < segment.length; c++){
            const char = segment[c];
            if (char === "\\") {
                if (c < segment.length - 1) {
                    result += escapeRegExpChar(segment[c + 1]);
                    c++;
                }
            } else if (char === "?") result += wildcard;
            else if (char === "*") result += `${wildcard}*?`;
            else result += escapeRegExpChar(char);
        }
        result += currentSeparator;
    }
    return result;
}
function isMatch(regexp, sample) {
    if (typeof sample !== "string") throw new TypeError(`Sample must be a string, but ${typeof sample} given`);
    return regexp.test(sample);
}
/**
* Compiles one or more glob patterns into a RegExp and returns an isMatch function.
* The isMatch function takes a sample string as its only argument and returns `true`
* if the string matches the pattern(s).
*
* ```js
* wildcardMatch('src/*.js')('src/index.js') //=> true
* ```
*
* ```js
* const isMatch = wildcardMatch('*.example.com', '.')
* isMatch('foo.example.com') //=> true
* isMatch('foo.bar.com') //=> false
* ```
*/ function wildcardMatch(pattern, options) {
    if (typeof pattern !== "string" && !Array.isArray(pattern)) throw new TypeError(`The first argument must be a single pattern string or an array of patterns, but ${typeof pattern} given`);
    if (typeof options === "string" || typeof options === "boolean") options = {
        separator: options
    };
    if (arguments.length === 2 && !(typeof options === "undefined" || typeof options === "object" && options !== null && !Array.isArray(options))) throw new TypeError(`The second argument must be an options object or a string/boolean separator, but ${typeof options} given`);
    options = options || {};
    if (options.separator === "\\") throw new Error("\\ is not a valid separator because it is used for escaping. Try setting the separator to `true` instead");
    const regexpPattern = transform(pattern, options.separator);
    const regexp = new RegExp(`^${regexpPattern}$`, options.flags);
    const fn = isMatch.bind(null, regexp);
    fn.options = options;
    fn.pattern = pattern;
    fn.regexp = regexp;
    return fn;
}
;
}),
"[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/version.mjs [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PACKAGE_VERSION",
    ()=>PACKAGE_VERSION
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$package$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/better-auth@1.7.1_drizzle-kit@0.31.10_drizzle-orm@0.45.2_@types+pg@8.23.1_kysely@0.29.5_95294cd7b5a44c51c5521109adbf93ef/node_modules/better-auth/dist/package.mjs [middleware] (ecmascript)");
;
//#region src/version.ts
const PACKAGE_VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$better$2d$auth$40$1$2e$7$2e$1_drizzle$2d$kit$40$0$2e$31$2e$10_drizzle$2d$orm$40$0$2e$45$2e$2_$40$types$2b$pg$40$8$2e$23$2e$1_kysely$40$0$2e$29$2e$5_95294cd7b5a44c51c5521109adbf93ef$2f$node_modules$2f$better$2d$auth$2f$dist$2f$package$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["version"];
;
}),
];

//# sourceMappingURL=019n_better-auth_dist_0b5lonb._.js.map