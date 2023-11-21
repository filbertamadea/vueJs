try {
  self["workbox:core:7.0.0"] && _();
} catch {
}
const i = {}.NODE_ENV === "production" ? null : (() => {
  "__WB_DISABLE_DEV_LOGS" in globalThis || (self.__WB_DISABLE_DEV_LOGS = !1);
  let t = !1;
  const e = {
    debug: "#7f8c8d",
    log: "#2ecc71",
    warn: "#f39c12",
    error: "#c0392b",
    groupCollapsed: "#3498db",
    groupEnd: null
    // No colored prefix on groupEnd
  }, r = function(o, a) {
    if (self.__WB_DISABLE_DEV_LOGS)
      return;
    if (o === "groupCollapsed" && /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      console[o](...a);
      return;
    }
    const c = [
      `background: ${e[o]}`,
      "border-radius: 0.5em",
      "color: white",
      "font-weight: bold",
      "padding: 2px 0.5em"
    ], u = t ? [] : ["%cworkbox", c.join(";")];
    console[o](...u, ...a), o === "groupCollapsed" && (t = !0), o === "groupEnd" && (t = !1);
  }, s = {}, n = Object.keys(e);
  for (const o of n) {
    const a = o;
    s[a] = (...c) => {
      r(a, c);
    };
  }
  return s;
})(), Z = {
  "invalid-value": ({ paramName: t, validValueDescription: e, value: r }) => {
    if (!t || !e)
      throw new Error("Unexpected input to 'invalid-value' error.");
    return `The '${t}' parameter was given a value with an unexpected value. ${e} Received a value of ${JSON.stringify(r)}.`;
  },
  "not-an-array": ({ moduleName: t, className: e, funcName: r, paramName: s }) => {
    if (!t || !e || !r || !s)
      throw new Error("Unexpected input to 'not-an-array' error.");
    return `The parameter '${s}' passed into '${t}.${e}.${r}()' must be an array.`;
  },
  "incorrect-type": ({ expectedType: t, paramName: e, moduleName: r, className: s, funcName: n }) => {
    if (!t || !e || !r || !n)
      throw new Error("Unexpected input to 'incorrect-type' error.");
    const o = s ? `${s}.` : "";
    return `The parameter '${e}' passed into '${r}.${o}${n}()' must be of type ${t}.`;
  },
  "incorrect-class": ({ expectedClassName: t, paramName: e, moduleName: r, className: s, funcName: n, isReturnValueProblem: o }) => {
    if (!t || !r || !n)
      throw new Error("Unexpected input to 'incorrect-class' error.");
    const a = s ? `${s}.` : "";
    return o ? `The return value from '${r}.${a}${n}()' must be an instance of class ${t}.` : `The parameter '${e}' passed into '${r}.${a}${n}()' must be an instance of class ${t}.`;
  },
  "missing-a-method": ({ expectedMethod: t, paramName: e, moduleName: r, className: s, funcName: n }) => {
    if (!t || !e || !r || !s || !n)
      throw new Error("Unexpected input to 'missing-a-method' error.");
    return `${r}.${s}.${n}() expected the '${e}' parameter to expose a '${t}' method.`;
  },
  "add-to-cache-list-unexpected-type": ({ entry: t }) => `An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(t)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,
  "add-to-cache-list-conflicting-entries": ({ firstEntry: t, secondEntry: e }) => {
    if (!t || !e)
      throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");
    return `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${t} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`;
  },
  "plugin-error-request-will-fetch": ({ thrownErrorMessage: t }) => {
    if (!t)
      throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");
    return `An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${t}'.`;
  },
  "invalid-cache-name": ({ cacheNameId: t, value: e }) => {
    if (!t)
      throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");
    return `You must provide a name containing at least one character for setCacheDetails({${t}: '...'}). Received a value of '${JSON.stringify(e)}'`;
  },
  "unregister-route-but-not-found-with-method": ({ method: t }) => {
    if (!t)
      throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");
    return `The route you're trying to unregister was not  previously registered for the method type '${t}'.`;
  },
  "unregister-route-route-not-registered": () => "The route you're trying to unregister was not previously registered.",
  "queue-replay-failed": ({ name: t }) => `Replaying the background sync queue '${t}' failed.`,
  "duplicate-queue-name": ({ name: t }) => `The Queue name '${t}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,
  "expired-test-without-max-age": ({ methodName: t, paramName: e }) => `The '${t}()' method can only be used when the '${e}' is used in the constructor.`,
  "unsupported-route-type": ({ moduleName: t, className: e, funcName: r, paramName: s }) => `The supplied '${s}' parameter was an unsupported type. Please check the docs for ${t}.${e}.${r} for valid input types.`,
  "not-array-of-class": ({ value: t, expectedClass: e, moduleName: r, className: s, funcName: n, paramName: o }) => `The supplied '${o}' parameter must be an array of '${e}' objects. Received '${JSON.stringify(t)},'. Please check the call to ${r}.${s}.${n}() to fix the issue.`,
  "max-entries-or-age-required": ({ moduleName: t, className: e, funcName: r }) => `You must define either config.maxEntries or config.maxAgeSecondsin ${t}.${e}.${r}`,
  "statuses-or-headers-required": ({ moduleName: t, className: e, funcName: r }) => `You must define either config.statuses or config.headersin ${t}.${e}.${r}`,
  "invalid-string": ({ moduleName: t, funcName: e, paramName: r }) => {
    if (!r || !t || !e)
      throw new Error("Unexpected input to 'invalid-string' error.");
    return `When using strings, the '${r}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${t}.${e}() for more info.`;
  },
  "channel-name-required": () => "You must provide a channelName to construct a BroadcastCacheUpdate instance.",
  "invalid-responses-are-same-args": () => "The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.",
  "expire-custom-caches-only": () => "You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.",
  "unit-must-be-bytes": ({ normalizedRangeHeader: t }) => {
    if (!t)
      throw new Error("Unexpected input to 'unit-must-be-bytes' error.");
    return `The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${t}"`;
  },
  "single-range-only": ({ normalizedRangeHeader: t }) => {
    if (!t)
      throw new Error("Unexpected input to 'single-range-only' error.");
    return `Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${t}"`;
  },
  "invalid-range-values": ({ normalizedRangeHeader: t }) => {
    if (!t)
      throw new Error("Unexpected input to 'invalid-range-values' error.");
    return `The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${t}"`;
  },
  "no-range-header": () => "No Range header was found in the Request provided.",
  "range-not-satisfiable": ({ size: t, start: e, end: r }) => `The start (${e}) and end (${r}) values in the Range are not satisfiable by the cached response, which is ${t} bytes.`,
  "attempt-to-cache-non-get-request": ({ url: t, method: e }) => `Unable to cache '${t}' because it is a '${e}' request and only 'GET' requests can be cached.`,
  "cache-put-with-no-response": ({ url: t }) => `There was an attempt to cache '${t}' but the response was not defined.`,
  "no-response": ({ url: t, error: e }) => {
    let r = `The strategy could not generate a response for '${t}'.`;
    return e && (r += ` The underlying error is ${e}.`), r;
  },
  "bad-precaching-response": ({ url: t, status: e }) => `The precaching request for '${t}' failed` + (e ? ` with an HTTP status of ${e}.` : "."),
  "non-precached-url": ({ url: t }) => `createHandlerBoundToURL('${t}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,
  "add-to-cache-list-conflicting-integrities": ({ url: t }) => `Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${t} with different integrity values. Please remove one of them.`,
  "missing-precache-entry": ({ cacheName: t, url: e }) => `Unable to find a precached response in ${t} for ${e}.`,
  "cross-origin-copy-response": ({ origin: t }) => `workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${t}.`,
  "opaque-streams-source": ({ type: t }) => {
    const e = `One of the workbox-streams sources resulted in an '${t}' response.`;
    return t === "opaqueredirect" ? `${e} Please do not use a navigation request that results in a redirect as a source.` : `${e} Please ensure your sources are CORS-enabled.`;
  }
}, ee = (t, ...e) => {
  let r = t;
  return e.length > 0 && (r += ` :: ${JSON.stringify(e)}`), r;
}, te = (t, e = {}) => {
  const r = Z[t];
  if (!r)
    throw new Error(`Unable to find message for code '${t}'.`);
  return r(e);
}, re = {}.NODE_ENV === "production" ? ee : te;
class l extends Error {
  /**
   *
   * @param {string} errorCode The error code that
   * identifies this particular error.
   * @param {Object=} details Any relevant arguments
   * that will help developers identify issues should
   * be added as a key on the context object.
   */
  constructor(e, r) {
    const s = re(e, r);
    super(s), this.name = e, this.details = r;
  }
}
const se = (t, e) => {
  if (!Array.isArray(t))
    throw new l("not-an-array", e);
}, ne = (t, e, r) => {
  if (typeof t[e] !== "function")
    throw r.expectedMethod = e, new l("missing-a-method", r);
}, oe = (t, e, r) => {
  if (typeof t !== e)
    throw r.expectedType = e, new l("incorrect-type", r);
}, ae = (t, e, r) => {
  if (!(t instanceof e))
    throw r.expectedClassName = e.name, new l("incorrect-class", r);
}, ie = (t, e, r) => {
  if (!e.includes(t))
    throw r.validValueDescription = `Valid values are ${JSON.stringify(e)}.`, new l("invalid-value", r);
}, ce = (t, e, r) => {
  const s = new l("not-array-of-class", r);
  if (!Array.isArray(t))
    throw s;
  for (const n of t)
    if (!(n instanceof e))
      throw s;
}, h = {}.NODE_ENV === "production" ? null : {
  hasMethod: ne,
  isArray: se,
  isInstance: ae,
  isOneOf: ie,
  isType: oe,
  isArrayOfClass: ce
}, S = /* @__PURE__ */ new Set();
function ue(t) {
  ({}).NODE_ENV !== "production" && h.isType(t, "function", {
    moduleName: "workbox-core",
    funcName: "register",
    paramName: "callback"
  }), S.add(t), {}.NODE_ENV !== "production" && i.log("Registered a callback to respond to quota errors.", t);
}
const g = {
  googleAnalytics: "googleAnalytics",
  precache: "precache-v2",
  prefix: "workbox",
  runtime: "runtime",
  suffix: typeof registration < "u" ? registration.scope : ""
}, $ = (t) => [g.prefix, t, g.suffix].filter((e) => e && e.length > 0).join("-"), he = (t) => {
  for (const e of Object.keys(g))
    t(e);
}, E = {
  updateDetails: (t) => {
    he((e) => {
      typeof t[e] == "string" && (g[e] = t[e]);
    });
  },
  getGoogleAnalyticsName: (t) => t || $(g.googleAnalytics),
  getPrecacheName: (t) => t || $(g.precache),
  getPrefix: () => g.prefix,
  getRuntimeName: (t) => t || $(g.runtime),
  getSuffix: () => g.suffix
};
function M(t, e) {
  const r = new URL(t);
  for (const s of e)
    r.searchParams.delete(s);
  return r.href;
}
async function le(t, e, r, s) {
  const n = M(e.url, r);
  if (e.url === n)
    return t.match(e, s);
  const o = Object.assign(Object.assign({}, s), { ignoreSearch: !0 }), a = await t.keys(e, o);
  for (const c of a) {
    const u = M(c.url, r);
    if (n === u)
      return t.match(c, s);
  }
}
function F(t) {
  t.then(() => {
  });
}
class de {
  /**
   * Creates a promise and exposes its resolve and reject functions as methods.
   */
  constructor() {
    this.promise = new Promise((e, r) => {
      this.resolve = e, this.reject = r;
    });
  }
}
async function pe() {
  ({}).NODE_ENV !== "production" && i.log(`About to run ${S.size} callbacks to clean up caches.`);
  for (const t of S)
    await t(), {}.NODE_ENV !== "production" && i.log(t, "is complete.");
  ({}).NODE_ENV !== "production" && i.log("Finished running callbacks.");
}
const d = (t) => new URL(String(t), location.href).href.replace(new RegExp(`^${location.origin}`), "");
function H(t) {
  return new Promise((e) => setTimeout(e, t));
}
const fe = {
  get googleAnalytics() {
    return E.getGoogleAnalyticsName();
  },
  get precache() {
    return E.getPrecacheName();
  },
  get prefix() {
    return E.getPrefix();
  },
  get runtime() {
    return E.getRuntimeName();
  },
  get suffix() {
    return E.getSuffix();
  }
};
function me() {
  self.addEventListener("activate", () => self.clients.claim());
}
try {
  self["workbox:routing:7.0.0"] && _();
} catch {
}
const G = "GET", ge = [
  "DELETE",
  "GET",
  "HEAD",
  "PATCH",
  "POST",
  "PUT"
], D = (t) => t && typeof t == "object" ? ({}.NODE_ENV !== "production" && h.hasMethod(t, "handle", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), t) : ({}.NODE_ENV !== "production" && h.isType(t, "function", {
  moduleName: "workbox-routing",
  className: "Route",
  funcName: "constructor",
  paramName: "handler"
}), { handle: t });
class k {
  /**
   * Constructor for Route class.
   *
   * @param {workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, r, s = G) {
    ({}).NODE_ENV !== "production" && (h.isType(e, "function", {
      moduleName: "workbox-routing",
      className: "Route",
      funcName: "constructor",
      paramName: "match"
    }), s && h.isOneOf(s, ge, { paramName: "method" })), this.handler = D(r), this.match = e, this.method = s;
  }
  /**
   *
   * @param {workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */
  setCatchHandler(e) {
    this.catchHandler = D(e);
  }
}
class we extends k {
  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * {@link workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  constructor(e, r, s) {
    ({}).NODE_ENV !== "production" && h.isInstance(e, RegExp, {
      moduleName: "workbox-routing",
      className: "RegExpRoute",
      funcName: "constructor",
      paramName: "pattern"
    });
    const n = ({ url: o }) => {
      const a = e.exec(o.href);
      if (a) {
        if (o.origin !== location.origin && a.index !== 0) {
          ({}).NODE_ENV !== "production" && i.debug(`The regular expression '${e.toString()}' only partially matched against the cross-origin URL '${o.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);
          return;
        }
        return a.slice(1);
      }
    };
    super(n, r, s);
  }
}
class Ne {
  /**
   * Initializes a new Router.
   */
  constructor() {
    this._routes = /* @__PURE__ */ new Map(), this._defaultHandlerMap = /* @__PURE__ */ new Map();
  }
  /**
   * @return {Map<string, Array<workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */
  get routes() {
    return this._routes;
  }
  /**
   * Adds a fetch event listener to respond to events when a route matches
   * the event's request.
   */
  addFetchListener() {
    self.addEventListener("fetch", (e) => {
      const { request: r } = e, s = this.handleRequest({ request: r, event: e });
      s && e.respondWith(s);
    });
  }
  /**
   * Adds a message event listener for URLs to cache from the window.
   * This is useful to cache resources loaded on the page prior to when the
   * service worker started controlling it.
   *
   * The format of the message data sent from the window should be as follows.
   * Where the `urlsToCache` array may consist of URL strings or an array of
   * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
   *
   * ```
   * {
   *   type: 'CACHE_URLS',
   *   payload: {
   *     urlsToCache: [
   *       './script1.js',
   *       './script2.js',
   *       ['./script3.js', {mode: 'no-cors'}],
   *     ],
   *   },
   * }
   * ```
   */
  addCacheListener() {
    self.addEventListener("message", (e) => {
      if (e.data && e.data.type === "CACHE_URLS") {
        const { payload: r } = e.data;
        ({}).NODE_ENV !== "production" && i.debug("Caching URLs from the window", r.urlsToCache);
        const s = Promise.all(r.urlsToCache.map((n) => {
          typeof n == "string" && (n = [n]);
          const o = new Request(...n);
          return this.handleRequest({ request: o, event: e });
        }));
        e.waitUntil(s), e.ports && e.ports[0] && s.then(() => e.ports[0].postMessage(!0));
      }
    });
  }
  /**
   * Apply the routing rules to a FetchEvent object to get a Response from an
   * appropriate Route's handler.
   *
   * @param {Object} options
   * @param {Request} options.request The request to handle.
   * @param {ExtendableEvent} options.event The event that triggered the
   *     request.
   * @return {Promise<Response>|undefined} A promise is returned if a
   *     registered route can handle the request. If there is no matching
   *     route and there's no `defaultHandler`, `undefined` is returned.
   */
  handleRequest({ request: e, event: r }) {
    ({}).NODE_ENV !== "production" && h.isInstance(e, Request, {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "handleRequest",
      paramName: "options.request"
    });
    const s = new URL(e.url, location.href);
    if (!s.protocol.startsWith("http")) {
      ({}).NODE_ENV !== "production" && i.debug("Workbox Router only supports URLs that start with 'http'.");
      return;
    }
    const n = s.origin === location.origin, { params: o, route: a } = this.findMatchingRoute({
      event: r,
      request: e,
      sameOrigin: n,
      url: s
    });
    let c = a && a.handler;
    const u = [];
    ({}).NODE_ENV !== "production" && c && (u.push(["Found a route to handle this request:", a]), o && u.push([
      "Passing the following params to the route's handler:",
      o
    ]));
    const p = e.method;
    if (!c && this._defaultHandlerMap.has(p) && ({}.NODE_ENV !== "production" && u.push(`Failed to find a matching route. Falling back to the default handler for ${p}.`), c = this._defaultHandlerMap.get(p)), !c) {
      ({}).NODE_ENV !== "production" && i.debug(`No route found for: ${d(s)}`);
      return;
    }
    ({}).NODE_ENV !== "production" && (i.groupCollapsed(`Router is responding to: ${d(s)}`), u.forEach((m) => {
      Array.isArray(m) ? i.log(...m) : i.log(m);
    }), i.groupEnd());
    let N;
    try {
      N = c.handle({ url: s, request: e, event: r, params: o });
    } catch (m) {
      N = Promise.reject(m);
    }
    const f = a && a.catchHandler;
    return N instanceof Promise && (this._catchHandler || f) && (N = N.catch(async (m) => {
      if (f) {
        ({}).NODE_ENV !== "production" && (i.groupCollapsed(`Error thrown when responding to:  ${d(s)}. Falling back to route's Catch Handler.`), i.error("Error thrown by:", a), i.error(m), i.groupEnd());
        try {
          return await f.handle({ url: s, request: e, event: r, params: o });
        } catch (q) {
          q instanceof Error && (m = q);
        }
      }
      if (this._catchHandler)
        return {}.NODE_ENV !== "production" && (i.groupCollapsed(`Error thrown when responding to:  ${d(s)}. Falling back to global Catch Handler.`), i.error("Error thrown by:", a), i.error(m), i.groupEnd()), this._catchHandler.handle({ url: s, request: e, event: r });
      throw m;
    })), N;
  }
  /**
   * Checks a request and URL (and optionally an event) against the list of
   * registered routes, and if there's a match, returns the corresponding
   * route along with any params generated by the match.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {boolean} options.sameOrigin The result of comparing `url.origin`
   *     against the current origin.
   * @param {Request} options.request The request to match.
   * @param {Event} options.event The corresponding event.
   * @return {Object} An object with `route` and `params` properties.
   *     They are populated if a matching route was found or `undefined`
   *     otherwise.
   */
  findMatchingRoute({ url: e, sameOrigin: r, request: s, event: n }) {
    const o = this._routes.get(s.method) || [];
    for (const a of o) {
      let c;
      const u = a.match({ url: e, sameOrigin: r, request: s, event: n });
      if (u)
        return {}.NODE_ENV !== "production" && u instanceof Promise && i.warn(`While routing ${d(e)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`, a), c = u, (Array.isArray(c) && c.length === 0 || u.constructor === Object && // eslint-disable-line
        Object.keys(u).length === 0 || typeof u == "boolean") && (c = void 0), { route: a, params: c };
    }
    return {};
  }
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to associate with this
   * default handler. Each method has its own default.
   */
  setDefaultHandler(e, r = G) {
    this._defaultHandlerMap.set(r, D(e));
  }
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   */
  setCatchHandler(e) {
    this._catchHandler = D(e);
  }
  /**
   * Registers a route with the router.
   *
   * @param {workbox-routing.Route} route The route to register.
   */
  registerRoute(e) {
    ({}).NODE_ENV !== "production" && (h.isType(e, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), h.hasMethod(e, "match", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), h.isType(e.handler, "object", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route"
    }), h.hasMethod(e.handler, "handle", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.handler"
    }), h.isType(e.method, "string", {
      moduleName: "workbox-routing",
      className: "Router",
      funcName: "registerRoute",
      paramName: "route.method"
    })), this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e);
  }
  /**
   * Unregisters a route with the router.
   *
   * @param {workbox-routing.Route} route The route to unregister.
   */
  unregisterRoute(e) {
    if (!this._routes.has(e.method))
      throw new l("unregister-route-but-not-found-with-method", {
        method: e.method
      });
    const r = this._routes.get(e.method).indexOf(e);
    if (r > -1)
      this._routes.get(e.method).splice(r, 1);
    else
      throw new l("unregister-route-route-not-registered");
  }
}
let y;
const P = () => (y || (y = new Ne(), y.addFetchListener(), y.addCacheListener()), y);
function K(t, e, r) {
  let s;
  if (typeof t == "string") {
    const o = new URL(t, location.href);
    if ({}.NODE_ENV !== "production") {
      if (!(t.startsWith("/") || t.startsWith("http")))
        throw new l("invalid-string", {
          moduleName: "workbox-routing",
          funcName: "registerRoute",
          paramName: "capture"
        });
      const c = t.startsWith("http") ? o.pathname : t, u = "[*:?+]";
      new RegExp(`${u}`).exec(c) && i.debug(`The '$capture' parameter contains an Express-style wildcard character (${u}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`);
    }
    const a = ({ url: c }) => ({}.NODE_ENV !== "production" && c.pathname === o.pathname && c.origin !== o.origin && i.debug(`${t} only partially matches the cross-origin URL ${c.toString()}. This route will only handle cross-origin requests if they match the entire URL.`), c.href === o.href);
    s = new k(a, e, r);
  } else if (t instanceof RegExp)
    s = new we(t, e, r);
  else if (typeof t == "function")
    s = new k(t, e, r);
  else if (t instanceof k)
    s = t;
  else
    throw new l("unsupported-route-type", {
      moduleName: "workbox-routing",
      funcName: "registerRoute",
      paramName: "capture"
    });
  return P().registerRoute(s), s;
}
function Ee(t) {
  P().setCatchHandler(t);
}
function be(t) {
  P().setDefaultHandler(t);
}
try {
  self["workbox:cacheable-response:7.0.0"] && _();
} catch {
}
class ye {
  /**
   * To construct a new CacheableResponse instance you must provide at least
   * one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(e = {}) {
    if ({}.NODE_ENV !== "production") {
      if (!(e.statuses || e.headers))
        throw new l("statuses-or-headers-required", {
          moduleName: "workbox-cacheable-response",
          className: "CacheableResponse",
          funcName: "constructor"
        });
      e.statuses && h.isArray(e.statuses, {
        moduleName: "workbox-cacheable-response",
        className: "CacheableResponse",
        funcName: "constructor",
        paramName: "config.statuses"
      }), e.headers && h.isType(e.headers, "object", {
        moduleName: "workbox-cacheable-response",
        className: "CacheableResponse",
        funcName: "constructor",
        paramName: "config.headers"
      });
    }
    this._statuses = e.statuses, this._headers = e.headers;
  }
  /**
   * Checks a response to see whether it's cacheable or not, based on this
   * object's configuration.
   *
   * @param {Response} response The response whose cacheability is being
   * checked.
   * @return {boolean} `true` if the `Response` is cacheable, and `false`
   * otherwise.
   */
  isResponseCacheable(e) {
    ({}).NODE_ENV !== "production" && h.isInstance(e, Response, {
      moduleName: "workbox-cacheable-response",
      className: "CacheableResponse",
      funcName: "isResponseCacheable",
      paramName: "response"
    });
    let r = !0;
    if (this._statuses && (r = this._statuses.includes(e.status)), this._headers && r && (r = Object.keys(this._headers).some((s) => e.headers.get(s) === this._headers[s])), {}.NODE_ENV !== "production" && !r) {
      i.groupCollapsed(`The request for '${d(e.url)}' returned a response that does not meet the criteria for being cached.`), i.groupCollapsed("View cacheability criteria here."), i.log("Cacheable statuses: " + JSON.stringify(this._statuses)), i.log("Cacheable headers: " + JSON.stringify(this._headers, null, 2)), i.groupEnd();
      const s = {};
      e.headers.forEach((n, o) => {
        s[o] = n;
      }), i.groupCollapsed("View response status and headers here."), i.log(`Response status: ${e.status}`), i.log("Response headers: " + JSON.stringify(s, null, 2)), i.groupEnd(), i.groupCollapsed("View full response details here."), i.log(e.headers), i.log(e), i.groupEnd(), i.groupEnd();
    }
    return r;
  }
}
class _e {
  /**
   * To construct a new CacheableResponsePlugin instance you must provide at
   * least one of the `config` properties.
   *
   * If both `statuses` and `headers` are specified, then both conditions must
   * be met for the `Response` to be considered cacheable.
   *
   * @param {Object} config
   * @param {Array<number>} [config.statuses] One or more status codes that a
   * `Response` can have and be considered cacheable.
   * @param {Object<string,string>} [config.headers] A mapping of header names
   * and expected values that a `Response` can have and be considered cacheable.
   * If multiple headers are provided, only one needs to be present.
   */
  constructor(e) {
    this.cacheWillUpdate = async ({ response: r }) => this._cacheableResponse.isResponseCacheable(r) ? r : null, this._cacheableResponse = new ye(e);
  }
}
try {
  self["workbox:strategies:7.0.0"] && _();
} catch {
}
function R(t) {
  return typeof t == "string" ? new Request(t) : t;
}
class xe {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params] The return value from the
   *     {@link workbox-routing~matchCallback} (if applicable).
   */
  constructor(e, r) {
    this._cacheKeys = {}, {}.NODE_ENV !== "production" && h.isInstance(r.event, ExtendableEvent, {
      moduleName: "workbox-strategies",
      className: "StrategyHandler",
      funcName: "constructor",
      paramName: "options.event"
    }), Object.assign(this, r), this.event = r.event, this._strategy = e, this._handlerDeferred = new de(), this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = /* @__PURE__ */ new Map();
    for (const s of this._plugins)
      this._pluginStateMap.set(s, {});
    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */
  async fetch(e) {
    const { event: r } = this;
    let s = R(e);
    if (s.mode === "navigate" && r instanceof FetchEvent && r.preloadResponse) {
      const a = await r.preloadResponse;
      if (a)
        return {}.NODE_ENV !== "production" && i.log(`Using a preloaded navigation response for '${d(s.url)}'`), a;
    }
    const n = this.hasCallback("fetchDidFail") ? s.clone() : null;
    try {
      for (const a of this.iterateCallbacks("requestWillFetch"))
        s = await a({ request: s.clone(), event: r });
    } catch (a) {
      if (a instanceof Error)
        throw new l("plugin-error-request-will-fetch", {
          thrownErrorMessage: a.message
        });
    }
    const o = s.clone();
    try {
      let a;
      a = await fetch(s, s.mode === "navigate" ? void 0 : this._strategy.fetchOptions), {}.NODE_ENV !== "production" && i.debug(`Network request for '${d(s.url)}' returned a response with status '${a.status}'.`);
      for (const c of this.iterateCallbacks("fetchDidSucceed"))
        a = await c({
          event: r,
          request: o,
          response: a
        });
      return a;
    } catch (a) {
      throw {}.NODE_ENV !== "production" && i.log(`Network request for '${d(s.url)}' threw an error.`, a), n && await this.runCallbacks("fetchDidFail", {
        error: a,
        event: r,
        originalRequest: n.clone(),
        request: o.clone()
      }), a;
    }
  }
  /**
   * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
   * the response generated by `this.fetch()`.
   *
   * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
   * so you do not have to manually call `waitUntil()` on the event.
   *
   * @param {Request|string} input The request or URL to fetch and cache.
   * @return {Promise<Response>}
   */
  async fetchAndCachePut(e) {
    const r = await this.fetch(e), s = r.clone();
    return this.waitUntil(this.cachePut(e, s)), r;
  }
  /**
   * Matches a request from the cache (and invokes any applicable plugin
   * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
   * defined on the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cachedResponseWillByUsed()
   *
   * @param {Request|string} key The Request or URL to use as the cache key.
   * @return {Promise<Response|undefined>} A matching response, if found.
   */
  async cacheMatch(e) {
    const r = R(e);
    let s;
    const { cacheName: n, matchOptions: o } = this._strategy, a = await this.getCacheKey(r, "read"), c = Object.assign(Object.assign({}, o), { cacheName: n });
    s = await caches.match(a, c), {}.NODE_ENV !== "production" && (s ? i.debug(`Found a cached response in '${n}'.`) : i.debug(`No cached response found in '${n}'.`));
    for (const u of this.iterateCallbacks("cachedResponseWillBeUsed"))
      s = await u({
        cacheName: n,
        matchOptions: o,
        cachedResponse: s,
        request: a,
        event: this.event
      }) || void 0;
    return s;
  }
  /**
   * Puts a request/response pair in the cache (and invokes any applicable
   * plugin callback methods) using the `cacheName` and `plugins` defined on
   * the strategy object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - cacheKeyWillByUsed()
   * - cacheWillUpdate()
   * - cacheDidUpdate()
   *
   * @param {Request|string} key The request or URL to use as the cache key.
   * @param {Response} response The response to cache.
   * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
   * not be cached, and `true` otherwise.
   */
  async cachePut(e, r) {
    const s = R(e);
    await H(0);
    const n = await this.getCacheKey(s, "write");
    if ({}.NODE_ENV !== "production") {
      if (n.method && n.method !== "GET")
        throw new l("attempt-to-cache-non-get-request", {
          url: d(n.url),
          method: n.method
        });
      const f = r.headers.get("Vary");
      f && i.debug(`The response for ${d(n.url)} has a 'Vary: ${f}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`);
    }
    if (!r)
      throw {}.NODE_ENV !== "production" && i.error(`Cannot cache non-existent response for '${d(n.url)}'.`), new l("cache-put-with-no-response", {
        url: d(n.url)
      });
    const o = await this._ensureResponseSafeToCache(r);
    if (!o)
      return {}.NODE_ENV !== "production" && i.debug(`Response '${d(n.url)}' will not be cached.`, o), !1;
    const { cacheName: a, matchOptions: c } = this._strategy, u = await self.caches.open(a), p = this.hasCallback("cacheDidUpdate"), N = p ? await le(
      // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
      // feature. Consider into ways to only add this behavior if using
      // precaching.
      u,
      n.clone(),
      ["__WB_REVISION__"],
      c
    ) : null;
    ({}).NODE_ENV !== "production" && i.debug(`Updating the '${a}' cache with a new Response for ${d(n.url)}.`);
    try {
      await u.put(n, p ? o.clone() : o);
    } catch (f) {
      if (f instanceof Error)
        throw f.name === "QuotaExceededError" && await pe(), f;
    }
    for (const f of this.iterateCallbacks("cacheDidUpdate"))
      await f({
        cacheName: a,
        oldResponse: N,
        newResponse: o.clone(),
        request: n,
        event: this.event
      });
    return !0;
  }
  /**
   * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
   * executes any of those callbacks found in sequence. The final `Request`
   * object returned by the last plugin is treated as the cache key for cache
   * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
   * been registered, the passed request is returned unmodified
   *
   * @param {Request} request
   * @param {string} mode
   * @return {Promise<Request>}
   */
  async getCacheKey(e, r) {
    const s = `${e.url} | ${r}`;
    if (!this._cacheKeys[s]) {
      let n = e;
      for (const o of this.iterateCallbacks("cacheKeyWillBeUsed"))
        n = R(await o({
          mode: r,
          request: n,
          event: this.event,
          // params has a type any can't change right now.
          params: this.params
          // eslint-disable-line
        }));
      this._cacheKeys[s] = n;
    }
    return this._cacheKeys[s];
  }
  /**
   * Returns true if the strategy has at least one plugin with the given
   * callback.
   *
   * @param {string} name The name of the callback to check for.
   * @return {boolean}
   */
  hasCallback(e) {
    for (const r of this._strategy.plugins)
      if (e in r)
        return !0;
    return !1;
  }
  /**
   * Runs all plugin callbacks matching the given name, in order, passing the
   * given param object (merged ith the current plugin state) as the only
   * argument.
   *
   * Note: since this method runs all plugins, it's not suitable for cases
   * where the return value of a callback needs to be applied prior to calling
   * the next callback. See
   * {@link workbox-strategies.StrategyHandler#iterateCallbacks}
   * below for how to handle that case.
   *
   * @param {string} name The name of the callback to run within each plugin.
   * @param {Object} param The object to pass as the first (and only) param
   *     when executing each callback. This object will be merged with the
   *     current plugin state prior to callback execution.
   */
  async runCallbacks(e, r) {
    for (const s of this.iterateCallbacks(e))
      await s(r);
  }
  /**
   * Accepts a callback and returns an iterable of matching plugin callbacks,
   * where each callback is wrapped with the current handler state (i.e. when
   * you call each callback, whatever object parameter you pass it will
   * be merged with the plugin's current state).
   *
   * @param {string} name The name fo the callback to run
   * @return {Array<Function>}
   */
  *iterateCallbacks(e) {
    for (const r of this._strategy.plugins)
      if (typeof r[e] == "function") {
        const s = this._pluginStateMap.get(r);
        yield (o) => {
          const a = Object.assign(Object.assign({}, o), { state: s });
          return r[e](a);
        };
      }
  }
  /**
   * Adds a promise to the
   * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
   * of the event event associated with the request being handled (usually a
   * `FetchEvent`).
   *
   * Note: you can await
   * {@link workbox-strategies.StrategyHandler~doneWaiting}
   * to know when all added promises have settled.
   *
   * @param {Promise} promise A promise to add to the extend lifetime promises
   *     of the event that triggered the request.
   */
  waitUntil(e) {
    return this._extendLifetimePromises.push(e), e;
  }
  /**
   * Returns a promise that resolves once all promises passed to
   * {@link workbox-strategies.StrategyHandler~waitUntil}
   * have settled.
   *
   * Note: any work done after `doneWaiting()` settles should be manually
   * passed to an event's `waitUntil()` method (not this handler's
   * `waitUntil()` method), otherwise the service worker thread my be killed
   * prior to your work completing.
   */
  async doneWaiting() {
    let e;
    for (; e = this._extendLifetimePromises.shift(); )
      await e;
  }
  /**
   * Stops running the strategy and immediately resolves any pending
   * `waitUntil()` promises.
   */
  destroy() {
    this._handlerDeferred.resolve(null);
  }
  /**
   * This method will call cacheWillUpdate on the available plugins (or use
   * status === 200) to determine if the Response is safe and valid to cache.
   *
   * @param {Request} options.request
   * @param {Response} options.response
   * @return {Promise<Response|undefined>}
   *
   * @private
   */
  async _ensureResponseSafeToCache(e) {
    let r = e, s = !1;
    for (const n of this.iterateCallbacks("cacheWillUpdate"))
      if (r = await n({
        request: this.request,
        response: r,
        event: this.event
      }) || void 0, s = !0, !r)
        break;
    return s || (r && r.status !== 200 && (r = void 0), {}.NODE_ENV !== "production" && r && r.status !== 200 && (r.status === 0 ? i.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`) : i.debug(`The response for '${this.request.url}' returned a status code of '${e.status}' and won't be cached as a result.`))), r;
  }
}
class U {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  constructor(e = {}) {
    this.cacheName = E.getRuntimeName(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * {@link workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */
  handle(e) {
    const [r] = this.handleAll(e);
    return r;
  }
  /**
   * Similar to {@link workbox-strategies.Strategy~handle}, but
   * instead of just returning a `Promise` that resolves to a `Response` it
   * it will return an tuple of `[response, done]` promises, where the former
   * (`response`) is equivalent to what `handle()` returns, and the latter is a
   * Promise that will resolve once any promises that were added to
   * `event.waitUntil()` as part of performing the strategy have completed.
   *
   * You can await the `done` promise to ensure any extra work performed by
   * the strategy (usually caching responses) completes successfully.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   * @return {Array<Promise>} A tuple of [response, done]
   *     promises that can be used to determine when the response resolves as
   *     well as when the handler has completed all its work.
   */
  handleAll(e) {
    e instanceof FetchEvent && (e = {
      event: e,
      request: e.request
    });
    const r = e.event, s = typeof e.request == "string" ? new Request(e.request) : e.request, n = "params" in e ? e.params : void 0, o = new xe(this, { event: r, request: s, params: n }), a = this._getResponse(o, s, r), c = this._awaitComplete(a, o, s, r);
    return [a, c];
  }
  async _getResponse(e, r, s) {
    await e.runCallbacks("handlerWillStart", { event: s, request: r });
    let n;
    try {
      if (n = await this._handle(r, e), !n || n.type === "error")
        throw new l("no-response", { url: r.url });
    } catch (o) {
      if (o instanceof Error) {
        for (const a of e.iterateCallbacks("handlerDidError"))
          if (n = await a({ error: o, event: s, request: r }), n)
            break;
      }
      if (n)
        ({}).NODE_ENV !== "production" && i.log(`While responding to '${d(r.url)}', an ${o instanceof Error ? o.toString() : ""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);
      else
        throw o;
    }
    for (const o of e.iterateCallbacks("handlerWillRespond"))
      n = await o({ event: s, request: r, response: n });
    return n;
  }
  async _awaitComplete(e, r, s, n) {
    let o, a;
    try {
      o = await e;
    } catch {
    }
    try {
      await r.runCallbacks("handlerDidRespond", {
        event: n,
        request: s,
        response: o
      }), await r.doneWaiting();
    } catch (c) {
      c instanceof Error && (a = c);
    }
    if (await r.runCallbacks("handlerDidComplete", {
      event: n,
      request: s,
      response: o,
      error: a
    }), r.destroy(), a)
      throw a;
  }
}
const b = {
  strategyStart: (t, e) => `Using ${t} to respond to '${d(e.url)}'`,
  printFinalResponse: (t) => {
    t && (i.groupCollapsed("View the final response here."), i.log(t || "[No response returned]"), i.groupEnd());
  }
};
class Re extends U {
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, r) {
    const s = [];
    ({}).NODE_ENV !== "production" && h.isInstance(e, Request, {
      moduleName: "workbox-strategies",
      className: this.constructor.name,
      funcName: "makeRequest",
      paramName: "request"
    });
    let n = await r.cacheMatch(e), o;
    if (n)
      ({}).NODE_ENV !== "production" && s.push(`Found a cached response in the '${this.cacheName}' cache.`);
    else {
      ({}).NODE_ENV !== "production" && s.push(`No response found in the '${this.cacheName}' cache. Will respond with a network request.`);
      try {
        n = await r.fetchAndCachePut(e);
      } catch (a) {
        a instanceof Error && (o = a);
      }
      ({}).NODE_ENV !== "production" && (n ? s.push("Got response from network.") : s.push("Unable to get a response from the network."));
    }
    if ({}.NODE_ENV !== "production") {
      i.groupCollapsed(b.strategyStart(this.constructor.name, e));
      for (const a of s)
        i.log(a);
      b.printFinalResponse(n), i.groupEnd();
    }
    if (!n)
      throw new l("no-response", { url: e.url, error: o });
    return n;
  }
}
const ke = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: async ({ response: t }) => t.status === 200 || t.status === 0 ? t : null
};
class De extends U {
  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * {@link workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  constructor(e = {}) {
    super(e), this.plugins.some((r) => "cacheWillUpdate" in r) || this.plugins.unshift(ke), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0, {}.NODE_ENV !== "production" && this._networkTimeoutSeconds && h.isType(this._networkTimeoutSeconds, "number", {
      moduleName: "workbox-strategies",
      className: this.constructor.name,
      funcName: "constructor",
      paramName: "networkTimeoutSeconds"
    });
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, r) {
    const s = [];
    ({}).NODE_ENV !== "production" && h.isInstance(e, Request, {
      moduleName: "workbox-strategies",
      className: this.constructor.name,
      funcName: "handle",
      paramName: "makeRequest"
    });
    const n = [];
    let o;
    if (this._networkTimeoutSeconds) {
      const { id: u, promise: p } = this._getTimeoutPromise({ request: e, logs: s, handler: r });
      o = u, n.push(p);
    }
    const a = this._getNetworkPromise({
      timeoutId: o,
      request: e,
      logs: s,
      handler: r
    });
    n.push(a);
    const c = await r.waitUntil((async () => await r.waitUntil(Promise.race(n)) || // If Promise.race() resolved with null, it might be due to a network
    // timeout + a cache miss. If that were to happen, we'd rather wait until
    // the networkPromise resolves instead of returning null.
    // Note that it's fine to await an already-resolved promise, so we don't
    // have to check to see if it's still "in flight".
    await a)());
    if ({}.NODE_ENV !== "production") {
      i.groupCollapsed(b.strategyStart(this.constructor.name, e));
      for (const u of s)
        i.log(u);
      b.printFinalResponse(c), i.groupEnd();
    }
    if (!c)
      throw new l("no-response", { url: e.url });
    return c;
  }
  /**
   * @param {Object} options
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs array
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  _getTimeoutPromise({ request: e, logs: r, handler: s }) {
    let n;
    return {
      promise: new Promise((a) => {
        n = setTimeout(async () => {
          ({}).NODE_ENV !== "production" && r.push(`Timing out the network response at ${this._networkTimeoutSeconds} seconds.`), a(await s.cacheMatch(e));
        }, this._networkTimeoutSeconds * 1e3);
      }),
      id: n
    };
  }
  /**
   * @param {Object} options
   * @param {number|undefined} options.timeoutId
   * @param {Request} options.request
   * @param {Array} options.logs A reference to the logs Array.
   * @param {Event} options.event
   * @return {Promise<Response>}
   *
   * @private
   */
  async _getNetworkPromise({ timeoutId: e, request: r, logs: s, handler: n }) {
    let o, a;
    try {
      a = await n.fetchAndCachePut(r);
    } catch (c) {
      c instanceof Error && (o = c);
    }
    return e && clearTimeout(e), {}.NODE_ENV !== "production" && (a ? s.push("Got response from network.") : s.push("Unable to get a response from the network. Will respond with a cached response.")), (o || !a) && (a = await n.cacheMatch(r), {}.NODE_ENV !== "production" && (a ? s.push(`Found a cached response in the '${this.cacheName}' cache.`) : s.push(`No response found in the '${this.cacheName}' cache.`))), a;
  }
}
class $e extends U {
  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  constructor(e = {}) {
    super(e), this._networkTimeoutSeconds = e.networkTimeoutSeconds || 0;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */
  async _handle(e, r) {
    ({}).NODE_ENV !== "production" && h.isInstance(e, Request, {
      moduleName: "workbox-strategies",
      className: this.constructor.name,
      funcName: "_handle",
      paramName: "request"
    });
    let s, n;
    try {
      const o = [
        r.fetch(e)
      ];
      if (this._networkTimeoutSeconds) {
        const a = H(this._networkTimeoutSeconds * 1e3);
        o.push(a);
      }
      if (n = await Promise.race(o), !n)
        throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`);
    } catch (o) {
      o instanceof Error && (s = o);
    }
    if ({}.NODE_ENV !== "production" && (i.groupCollapsed(b.strategyStart(this.constructor.name, e)), n ? i.log("Got response from network.") : i.log("Unable to get a response from the network."), b.printFinalResponse(n), i.groupEnd()), !n)
      throw new l("no-response", { url: e.url, error: s });
    return n;
  }
}
const Ce = (t, e) => e.some((r) => t instanceof r);
let I, W;
function Te() {
  return I || (I = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function Oe() {
  return W || (W = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const J = /* @__PURE__ */ new WeakMap(), v = /* @__PURE__ */ new WeakMap(), Q = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakMap();
function Se(t) {
  const e = new Promise((r, s) => {
    const n = () => {
      t.removeEventListener("success", o), t.removeEventListener("error", a);
    }, o = () => {
      r(w(t.result)), n();
    }, a = () => {
      s(t.error), n();
    };
    t.addEventListener("success", o), t.addEventListener("error", a);
  });
  return e.then((r) => {
    r instanceof IDBCursor && J.set(r, t);
  }).catch(() => {
  }), A.set(e, t), e;
}
function ve(t) {
  if (v.has(t))
    return;
  const e = new Promise((r, s) => {
    const n = () => {
      t.removeEventListener("complete", o), t.removeEventListener("error", a), t.removeEventListener("abort", a);
    }, o = () => {
      r(), n();
    }, a = () => {
      s(t.error || new DOMException("AbortError", "AbortError")), n();
    };
    t.addEventListener("complete", o), t.addEventListener("error", a), t.addEventListener("abort", a);
  });
  v.set(t, e);
}
let V = {
  get(t, e, r) {
    if (t instanceof IDBTransaction) {
      if (e === "done")
        return v.get(t);
      if (e === "objectStoreNames")
        return t.objectStoreNames || Q.get(t);
      if (e === "store")
        return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0]);
    }
    return w(t[e]);
  },
  set(t, e, r) {
    return t[e] = r, !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store") ? !0 : e in t;
  }
};
function Ve(t) {
  V = t(V);
}
function Pe(t) {
  return t === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype) ? function(e, ...r) {
    const s = t.call(T(this), e, ...r);
    return Q.set(s, e.sort ? e.sort() : [e]), w(s);
  } : Oe().includes(t) ? function(...e) {
    return t.apply(T(this), e), w(J.get(this));
  } : function(...e) {
    return w(t.apply(T(this), e));
  };
}
function Ue(t) {
  return typeof t == "function" ? Pe(t) : (t instanceof IDBTransaction && ve(t), Ce(t, Te()) ? new Proxy(t, V) : t);
}
function w(t) {
  if (t instanceof IDBRequest)
    return Se(t);
  if (C.has(t))
    return C.get(t);
  const e = Ue(t);
  return e !== t && (C.set(t, e), A.set(e, t)), e;
}
const T = (t) => A.get(t);
function Ae(t, e, { blocked: r, upgrade: s, blocking: n, terminated: o } = {}) {
  const a = indexedDB.open(t, e), c = w(a);
  return s && a.addEventListener("upgradeneeded", (u) => {
    s(w(a.result), u.oldVersion, u.newVersion, w(a.transaction), u);
  }), r && a.addEventListener("blocked", (u) => r(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    u.oldVersion,
    u.newVersion,
    u
  )), c.then((u) => {
    o && u.addEventListener("close", () => o()), n && u.addEventListener("versionchange", (p) => n(p.oldVersion, p.newVersion, p));
  }).catch(() => {
  }), c;
}
function Le(t, { blocked: e } = {}) {
  const r = indexedDB.deleteDatabase(t);
  return e && r.addEventListener("blocked", (s) => e(
    // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
    s.oldVersion,
    s
  )), w(r).then(() => {
  });
}
const qe = ["get", "getKey", "getAll", "getAllKeys", "count"], Me = ["put", "add", "delete", "clear"], O = /* @__PURE__ */ new Map();
function B(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string"))
    return;
  if (O.get(e))
    return O.get(e);
  const r = e.replace(/FromIndex$/, ""), s = e !== r, n = Me.includes(r);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(r in (s ? IDBIndex : IDBObjectStore).prototype) || !(n || qe.includes(r))
  )
    return;
  const o = async function(a, ...c) {
    const u = this.transaction(a, n ? "readwrite" : "readonly");
    let p = u.store;
    return s && (p = p.index(c.shift())), (await Promise.all([
      p[r](...c),
      n && u.done
    ]))[0];
  };
  return O.set(e, o), o;
}
Ve((t) => ({
  ...t,
  get: (e, r, s) => B(e, r) || t.get(e, r, s),
  has: (e, r) => !!B(e, r) || t.has(e, r)
}));
try {
  self["workbox:expiration:7.0.0"] && _();
} catch {
}
const Ie = "workbox-expiration", x = "cache-entries", j = (t) => {
  const e = new URL(t, location.href);
  return e.hash = "", e.href;
};
class We {
  /**
   *
   * @param {string} cacheName
   *
   * @private
   */
  constructor(e) {
    this._db = null, this._cacheName = e;
  }
  /**
   * Performs an upgrade of indexedDB.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDb(e) {
    const r = e.createObjectStore(x, { keyPath: "id" });
    r.createIndex("cacheName", "cacheName", { unique: !1 }), r.createIndex("timestamp", "timestamp", { unique: !1 });
  }
  /**
   * Performs an upgrade of indexedDB and deletes deprecated DBs.
   *
   * @param {IDBPDatabase<CacheDbSchema>} db
   *
   * @private
   */
  _upgradeDbAndDeleteOldDbs(e) {
    this._upgradeDb(e), this._cacheName && Le(this._cacheName);
  }
  /**
   * @param {string} url
   * @param {number} timestamp
   *
   * @private
   */
  async setTimestamp(e, r) {
    e = j(e);
    const s = {
      url: e,
      timestamp: r,
      cacheName: this._cacheName,
      // Creating an ID from the URL and cache name won't be necessary once
      // Edge switches to Chromium and all browsers we support work with
      // array keyPaths.
      id: this._getId(e)
    }, o = (await this.getDb()).transaction(x, "readwrite", {
      durability: "relaxed"
    });
    await o.store.put(s), await o.done;
  }
  /**
   * Returns the timestamp stored for a given URL.
   *
   * @param {string} url
   * @return {number | undefined}
   *
   * @private
   */
  async getTimestamp(e) {
    const s = await (await this.getDb()).get(x, this._getId(e));
    return s == null ? void 0 : s.timestamp;
  }
  /**
   * Iterates through all the entries in the object store (from newest to
   * oldest) and removes entries once either `maxCount` is reached or the
   * entry's timestamp is less than `minTimestamp`.
   *
   * @param {number} minTimestamp
   * @param {number} maxCount
   * @return {Array<string>}
   *
   * @private
   */
  async expireEntries(e, r) {
    const s = await this.getDb();
    let n = await s.transaction(x).store.index("timestamp").openCursor(null, "prev");
    const o = [];
    let a = 0;
    for (; n; ) {
      const u = n.value;
      u.cacheName === this._cacheName && (e && u.timestamp < e || r && a >= r ? o.push(n.value) : a++), n = await n.continue();
    }
    const c = [];
    for (const u of o)
      await s.delete(x, u.id), c.push(u.url);
    return c;
  }
  /**
   * Takes a URL and returns an ID that will be unique in the object store.
   *
   * @param {string} url
   * @return {string}
   *
   * @private
   */
  _getId(e) {
    return this._cacheName + "|" + j(e);
  }
  /**
   * Returns an open connection to the database.
   *
   * @private
   */
  async getDb() {
    return this._db || (this._db = await Ae(Ie, 1, {
      upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
    })), this._db;
  }
}
class Be {
  /**
   * To construct a new CacheExpiration instance you must provide at least
   * one of the `config` properties.
   *
   * @param {string} cacheName Name of the cache to apply restrictions to.
   * @param {Object} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   */
  constructor(e, r = {}) {
    if (this._isRunning = !1, this._rerunRequested = !1, {}.NODE_ENV !== "production") {
      if (h.isType(e, "string", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "constructor",
        paramName: "cacheName"
      }), !(r.maxEntries || r.maxAgeSeconds))
        throw new l("max-entries-or-age-required", {
          moduleName: "workbox-expiration",
          className: "CacheExpiration",
          funcName: "constructor"
        });
      r.maxEntries && h.isType(r.maxEntries, "number", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "constructor",
        paramName: "config.maxEntries"
      }), r.maxAgeSeconds && h.isType(r.maxAgeSeconds, "number", {
        moduleName: "workbox-expiration",
        className: "CacheExpiration",
        funcName: "constructor",
        paramName: "config.maxAgeSeconds"
      });
    }
    this._maxEntries = r.maxEntries, this._maxAgeSeconds = r.maxAgeSeconds, this._matchOptions = r.matchOptions, this._cacheName = e, this._timestampModel = new We(e);
  }
  /**
   * Expires entries for the given cache and given criteria.
   */
  async expireEntries() {
    if (this._isRunning) {
      this._rerunRequested = !0;
      return;
    }
    this._isRunning = !0;
    const e = this._maxAgeSeconds ? Date.now() - this._maxAgeSeconds * 1e3 : 0, r = await this._timestampModel.expireEntries(e, this._maxEntries), s = await self.caches.open(this._cacheName);
    for (const n of r)
      await s.delete(n, this._matchOptions);
    ({}).NODE_ENV !== "production" && (r.length > 0 ? (i.groupCollapsed(`Expired ${r.length} ${r.length === 1 ? "entry" : "entries"} and removed ${r.length === 1 ? "it" : "them"} from the '${this._cacheName}' cache.`), i.log(`Expired the following ${r.length === 1 ? "URL" : "URLs"}:`), r.forEach((n) => i.log(`    ${n}`)), i.groupEnd()) : i.debug("Cache expiration ran and found no entries to remove.")), this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, F(this.expireEntries()));
  }
  /**
   * Update the timestamp for the given URL. This ensures the when
   * removing entries based on maximum entries, most recently used
   * is accurate or when expiring, the timestamp is up-to-date.
   *
   * @param {string} url
   */
  async updateTimestamp(e) {
    ({}).NODE_ENV !== "production" && h.isType(e, "string", {
      moduleName: "workbox-expiration",
      className: "CacheExpiration",
      funcName: "updateTimestamp",
      paramName: "url"
    }), await this._timestampModel.setTimestamp(e, Date.now());
  }
  /**
   * Can be used to check if a URL has expired or not before it's used.
   *
   * This requires a look up from IndexedDB, so can be slow.
   *
   * Note: This method will not remove the cached entry, call
   * `expireEntries()` to remove indexedDB and Cache entries.
   *
   * @param {string} url
   * @return {boolean}
   */
  async isURLExpired(e) {
    if (this._maxAgeSeconds) {
      const r = await this._timestampModel.getTimestamp(e), s = Date.now() - this._maxAgeSeconds * 1e3;
      return r !== void 0 ? r < s : !0;
    } else {
      if ({}.NODE_ENV !== "production")
        throw new l("expired-test-without-max-age", {
          methodName: "isURLExpired",
          paramName: "maxAgeSeconds"
        });
      return !1;
    }
  }
  /**
   * Removes the IndexedDB object store used to keep track of cache expiration
   * metadata.
   */
  async delete() {
    this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0);
  }
}
class je {
  /**
   * @param {ExpirationPluginOptions} config
   * @param {number} [config.maxEntries] The maximum number of entries to cache.
   * Entries used the least will be removed as the maximum is reached.
   * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
   * it's treated as stale and removed.
   * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
   * that will be used when calling `delete()` on the cache.
   * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
   * automatic deletion if the available storage quota has been exceeded.
   */
  constructor(e = {}) {
    if (this.cachedResponseWillBeUsed = async ({ event: r, request: s, cacheName: n, cachedResponse: o }) => {
      if (!o)
        return null;
      const a = this._isResponseDateFresh(o), c = this._getCacheExpiration(n);
      F(c.expireEntries());
      const u = c.updateTimestamp(s.url);
      if (r)
        try {
          r.waitUntil(u);
        } catch {
          ({}).NODE_ENV !== "production" && "request" in r && i.warn(`Unable to ensure service worker stays alive when updating cache entry for '${d(r.request.url)}'.`);
        }
      return a ? o : null;
    }, this.cacheDidUpdate = async ({ cacheName: r, request: s }) => {
      ({}).NODE_ENV !== "production" && (h.isType(r, "string", {
        moduleName: "workbox-expiration",
        className: "Plugin",
        funcName: "cacheDidUpdate",
        paramName: "cacheName"
      }), h.isInstance(s, Request, {
        moduleName: "workbox-expiration",
        className: "Plugin",
        funcName: "cacheDidUpdate",
        paramName: "request"
      }));
      const n = this._getCacheExpiration(r);
      await n.updateTimestamp(s.url), await n.expireEntries();
    }, {}.NODE_ENV !== "production") {
      if (!(e.maxEntries || e.maxAgeSeconds))
        throw new l("max-entries-or-age-required", {
          moduleName: "workbox-expiration",
          className: "Plugin",
          funcName: "constructor"
        });
      e.maxEntries && h.isType(e.maxEntries, "number", {
        moduleName: "workbox-expiration",
        className: "Plugin",
        funcName: "constructor",
        paramName: "config.maxEntries"
      }), e.maxAgeSeconds && h.isType(e.maxAgeSeconds, "number", {
        moduleName: "workbox-expiration",
        className: "Plugin",
        funcName: "constructor",
        paramName: "config.maxAgeSeconds"
      });
    }
    this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = /* @__PURE__ */ new Map(), e.purgeOnQuotaError && ue(() => this.deleteCacheAndMetadata());
  }
  /**
   * A simple helper method to return a CacheExpiration instance for a given
   * cache name.
   *
   * @param {string} cacheName
   * @return {CacheExpiration}
   *
   * @private
   */
  _getCacheExpiration(e) {
    if (e === E.getRuntimeName())
      throw new l("expire-custom-caches-only");
    let r = this._cacheExpirations.get(e);
    return r || (r = new Be(e, this._config), this._cacheExpirations.set(e, r)), r;
  }
  /**
   * @param {Response} cachedResponse
   * @return {boolean}
   *
   * @private
   */
  _isResponseDateFresh(e) {
    if (!this._maxAgeSeconds)
      return !0;
    const r = this._getDateHeaderTimestamp(e);
    if (r === null)
      return !0;
    const s = Date.now();
    return r >= s - this._maxAgeSeconds * 1e3;
  }
  /**
   * This method will extract the data header and parse it into a useful
   * value.
   *
   * @param {Response} cachedResponse
   * @return {number|null}
   *
   * @private
   */
  _getDateHeaderTimestamp(e) {
    if (!e.headers.has("date"))
      return null;
    const r = e.headers.get("date"), n = new Date(r).getTime();
    return isNaN(n) ? null : n;
  }
  /**
   * This is a helper method that performs two operations:
   *
   * - Deletes *all* the underlying Cache instances associated with this plugin
   * instance, by calling caches.delete() on your behalf.
   * - Deletes the metadata from IndexedDB used to keep track of expiration
   * details for each Cache instance.
   *
   * When using cache expiration, calling this method is preferable to calling
   * `caches.delete()` directly, since this will ensure that the IndexedDB
   * metadata is also cleanly removed and open IndexedDB instances are deleted.
   *
   * Note that if you're *not* using cache expiration for a given cache, calling
   * `caches.delete()` and passing in the cache's name should be sufficient.
   * There is no Workbox-specific method needed for cleanup in that case.
   */
  async deleteCacheAndMetadata() {
    for (const [e, r] of this._cacheExpirations)
      await self.caches.delete(e), await r.delete();
    this._cacheExpirations = /* @__PURE__ */ new Map();
  }
}
self.skipWaiting();
const Y = {
  race: !1,
  debug: !1,
  credentials: "same-origin",
  networkTimeoutSeconds: 0,
  fallback: "index.html"
}, L = fe.runtime, Fe = () => new De({ cacheName: L }), He = [{"revision":null,"url":"assets/index-2f9def03.css"},{"revision":null,"url":"assets/index-91bb23c6.js"},{"revision":"b2df023d5360d69bab5868ba8b115672","url":"index.html"},{"revision":"1872c500de691dce40960bb85481de07","url":"registerSW.js"},{"revision":"25e23892d1b98272cdeb2d655319c3eb","url":"favicon.ico"},{"revision":"ce3062dcf1f4e35256b6d2b41ef5baa5","url":"manifest.webmanifest"}], z = [], X = He.map(
  (t) => {
    const e = new URL(t.url, self.location);
    return z.push(new Request(e.href, {
      credentials: Y.credentials
    })), e.href;
  }
);
self.addEventListener("install", (t) => {
  t.waitUntil(
    caches.open(L).then((e) => e.addAll(z))
  );
});
self.addEventListener("activate", (t) => {
  t.waitUntil(
    caches.open(L).then((e) => {
      e.keys().then((r) => {
        r.forEach((s) => {
          X.includes(s.url) || e.delete(s).then((n) => {
          });
        });
      });
    })
  );
});
K(
  ({ url: t }) => X.includes(t.href),
  Fe()
);
K(
  /^https:\/\/jsonplaceholder.typicode.com\/todos$/,
  new Re({
    cacheName: "auth-user-cache",
    plugins: [
      new je({
        maxEntries: 10,
        maxAgeSeconds: 180
        // 3 seconds for development, adjust for production
      }),
      new _e({
        statuses: [0, 200]
      })
    ]
  })
);
be(new $e());
Ee(({ event: t }) => {
  switch (t.request.destination) {
    case "document":
      return caches.match(Y.fallback).then((e) => e ? Promise.resolve(e) : Promise.resolve(Response.error()));
    default:
      return Promise.resolve(Response.error());
  }
});
me();
