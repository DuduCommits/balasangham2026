import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BGbW77Fb.mjs";
import { t as hero_children_default } from "./hero-children-ZVwAEVSs.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Dh5TDOL4.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Cp6ni4bk.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{ title: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം | 2026" },
			{
				name: "description",
				content: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം — 2026 സെപ്റ്റംബർ 6, കോട്ടയം അങ്ങാടി, കണ്ണൂർ."
			},
			{
				property: "og:site_name",
				content: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "theme-color",
				content: "#f7b32b"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preload",
				as: "image",
				href: hero_children_default,
				fetchPriority: "high"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Anek+Malayalam:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ml",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getRequestOrigin = createServerFn({ method: "GET" }).handler(createSsrRpc("5654329e34be191256640c8957e4eaed33fcb574dfccb4b513f44c828b16863f"));
var $$splitComponentImporter = () => import("./routes-B0MYw2HV.mjs");
var TITLE = "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം | 2026";
var DESCRIPTION = "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം — 2026 സെപ്റ്റംബർ 6, കോട്ടയം അങ്ങാടി, കണ്ണൂർ. എല്ലാവർക്കും ഹൃദയം നിറഞ്ഞ സ്വാഗതം.";
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	loader: async () => ({ origin: await getRequestOrigin() }),
	head: ({ loaderData }) => {
		const origin = loaderData?.origin ?? "";
		const image = `${origin}/og-image.jpg`;
		return {
			meta: [
				{ title: TITLE },
				{
					name: "description",
					content: DESCRIPTION
				},
				{
					property: "og:title",
					content: TITLE
				},
				{
					property: "og:description",
					content: DESCRIPTION
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:locale",
					content: "ml_IN"
				},
				{
					property: "og:url",
					content: origin || "/"
				},
				{
					property: "og:site_name",
					content: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം"
				},
				{
					property: "og:image",
					content: image
				},
				{
					property: "og:image:secure_url",
					content: image
				},
				{
					property: "og:image:type",
					content: "image/jpeg"
				},
				{
					property: "og:image:width",
					content: "1200"
				},
				{
					property: "og:image:height",
					content: "630"
				},
				{
					property: "og:image:alt",
					content: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം — 2026 സെപ്റ്റംബർ 6, കോട്ടയം അങ്ങാടി, കണ്ണൂർ"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: TITLE
				},
				{
					name: "twitter:description",
					content: DESCRIPTION
				},
				{
					name: "twitter:image",
					content: image
				},
				{
					name: "twitter:image:alt",
					content: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം — 2026 സെപ്റ്റംബർ 6, കോട്ടയം അങ്ങാടി, കണ്ണൂർ"
				}
			],
			links: [{
				rel: "canonical",
				href: "/"
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Event",
					name: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം",
					startDate: "2026-09-06",
					eventStatus: "https://schema.org/EventScheduled",
					eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
					inLanguage: "ml",
					description: DESCRIPTION,
					location: {
						"@type": "Place",
						name: "കോട്ടയം അങ്ങാടി, കണ്ണൂർ",
						hasMap: "https://maps.app.goo.gl/rUMkccbTZhMd46Kx5?g_st=aw",
						address: {
							"@type": "PostalAddress",
							addressLocality: "കോട്ടയം അങ്ങാടി, കണ്ണൂർ",
							addressRegion: "Kerala",
							addressCountry: "IN"
						}
					},
					organizer: {
						"@type": "Organization",
						name: "ബാലസംഘം പിണറായി ഏരിയ"
					}
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
