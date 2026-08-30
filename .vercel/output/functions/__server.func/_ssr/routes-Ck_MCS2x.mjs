import { r as __toESM } from "../_runtime.mjs";
import { t as hero_children_default } from "./hero-children-ZVwAEVSs.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { _ as Download, a as Share2, b as CalendarDays, c as Music, d as Link2, f as Instagram, g as Facebook, h as Flag, i as Sparkles, l as Menu, m as Gamepad2, n as Users, o as Palette, p as HeartHandshake, r as Twitter, s as Navigation, t as X, u as MapPin, v as Check, x as ArrowRight, y as CalendarPlus } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Ck_MCS2x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var balasangham_logo_default = "/assets/balasangham-logo-C7c6dP_h.webp";
var LINKS = [
	{
		href: "#aamukham",
		label: "ആമുഖം"
	},
	{
		href: "#sammelanam",
		label: "സമ്മേളനം"
	},
	{
		href: "#paripadikal",
		label: "പരിപാടികൾ"
	},
	{
		href: "#game",
		label: "കളികൾ"
	},
	{
		href: "#ormakal",
		label: "ഓർമ്മകൾ"
	},
	{
		href: "#sthalam",
		label: "സ്ഥലം"
	}
];
var IDS = LINKS.map((l) => l.href.slice(1));
function useActiveSection() {
	const [active, setActive] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const compute = () => {
			const line = window.innerHeight * .32;
			let current = null;
			for (const id of IDS) {
				const el = document.getElementById(id);
				if (!el) continue;
				const rect = el.getBoundingClientRect();
				if (rect.top <= line && rect.bottom > line) current = id;
			}
			if (!current && window.scrollY + window.innerHeight >= document.body.scrollHeight - 4) current = IDS[IDS.length - 1] ?? null;
			setActive(current);
		};
		compute();
		window.addEventListener("scroll", compute, { passive: true });
		window.addEventListener("resize", compute);
		return () => {
			window.removeEventListener("scroll", compute);
			window.removeEventListener("resize", compute);
		};
	}, []);
	return active;
}
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [solid, setSolid] = (0, import_react.useState)(false);
	const active = useActiveSection();
	const sheetRef = (0, import_react.useRef)(null);
	const toggleRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "Escape" && open) {
				e.preventDefault();
				setOpen(false);
				toggleRef.current?.focus();
				return;
			}
			if (e.key !== "Tab" || !open || !sheetRef.current) return;
			const focusables = Array.from(sheetRef.current.querySelectorAll("a[href], button:not([disabled])")).filter((el) => el.offsetParent !== null);
			const items = toggleRef.current ? [toggleRef.current, ...focusables] : focusables;
			if (items.length === 0) return;
			const first = items[0];
			const last = items[items.length - 1];
			const activeEl = document.activeElement;
			if (e.shiftKey && (activeEl === first || !items.includes(activeEl))) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && activeEl === last) {
				e.preventDefault();
				first.focus();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const t = window.setTimeout(() => {
			sheetRef.current?.querySelector("a[href]")?.focus();
		}, 60);
		return () => window.clearTimeout(t);
	}, [open]);
	const goTo = (0, import_react.useCallback)((href) => {
		const el = document.getElementById(href.slice(1));
		if (!el) return false;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const top = el.getBoundingClientRect().top + window.scrollY - 72;
		window.scrollTo({
			top: Math.max(top, 0),
			behavior: reduce ? "auto" : "smooth"
		});
		if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
		el.focus({ preventScroll: true });
		if (history.replaceState) history.replaceState(null, "", href);
		return true;
	}, []);
	const handleClick = (href) => (e) => {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
		if (goTo(href)) e.preventDefault();
		setOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed left-3 right-3 top-2 z-50 rounded-2xl border border-ink/[0.05] shadow-[0_8px_28px_-22px_var(--ink)] transition-all duration-300 sm:left-5 sm:right-5 sm:top-3 sm:rounded-3xl lg:left-8 lg:right-8 ${solid || open ? "bg-[oklch(0.89_0.07_94/0.9)]" : "bg-[oklch(0.91_0.07_95/0.82)]"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "പ്രധാന നാവിഗേഷൻ",
			className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6 sm:py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					onClick: handleClick("#top"),
					className: "group flex min-w-0 items-center gap-2.5 rounded-2xl py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-cream shadow-sm transition-transform duration-300 group-hover:-rotate-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							loading: "lazy",
							decoding: "async",
							src: balasangham_logo_default,
							alt: "",
							"aria-hidden": true,
							width: 44,
							height: 44,
							className: "h-10 w-10 object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "type-display truncate text-lg text-berry sm:text-xl",
						children: "ബാലസംഘം"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "ml-auto hidden items-center gap-6 md:flex",
					children: [
						LINKS.map((l) => {
							const isActive = active === l.href.slice(1);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: l.href,
								onClick: handleClick(l.href),
								"aria-current": isActive ? "true" : void 0,
								className: `group relative flex min-h-11 items-center font-body text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-berry ${isActive ? "text-berry" : "text-ink/80 hover:text-berry"}`,
								children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: `absolute inset-x-0 bottom-2 h-[3px] origin-left rounded-full bg-berry transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`
								})]
							}) }, l.href);
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#aamukham",
							onClick: handleClick("#aamukham"),
							className: "rounded-full bg-berry px-5 py-2.5 font-display text-base font-bold text-berry-foreground shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
							children: "സ്വാഗതം"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2 pl-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.instagram.com/balasangham_pinarayi/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "grid h-10 w-10 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry",
									"aria-label": "Instagram",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.facebook.com/share/1CA9ncygHb/",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "grid h-10 w-10 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry",
									"aria-label": "Facebook",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.threads.net/@balasangham_pinarayi",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "grid h-10 w-10 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry",
									"aria-label": "Threads",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										width: "20",
										height: "20",
										viewBox: "0 0 24 24",
										fill: "none",
										stroke: "currentColor",
										strokeWidth: "2",
										strokeLinecap: "round",
										strokeLinejoin: "round",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 12V13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13V11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11V12Z" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 13C10 14.1046 10.8954 15 12 15H12.5C14.433 15 16 13.433 16 11.5C16 9.567 14.433 8 12.5 8H12C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18H14.5" })
										]
									})
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					ref: toggleRef,
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-expanded": open,
					"aria-controls": "mobile-menu",
					"aria-label": open ? "മെനു അടയ്ക്കുക" : "മെനു തുറക്കുക",
					className: "ml-auto grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-berry text-berry-foreground shadow-md transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "mobile-menu",
		ref: sheetRef,
		hidden: !open,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "മെനു",
		className: `fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-[oklch(0.91_0.07_95/0.96)] transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "dotgrid pointer-events-none absolute inset-x-0 top-4 h-28 text-berry/15"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "relative flex flex-col gap-1.5 px-5 pt-5 pb-[calc(2rem+env(safe-area-inset-bottom))]",
			children: [
				LINKS.map((l, i) => {
					const isActive = active === l.href.slice(1);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: l.href,
						onClick: handleClick(l.href),
						"aria-current": isActive ? "true" : void 0,
						className: `flex min-h-[56px] items-center justify-between rounded-2xl px-5 font-display text-2xl font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry active:bg-festival ${isActive ? "bg-festival text-berry ring-2 ring-berry/40" : "bg-cream/70 text-ink"} ${open ? "rise-in" : ""}`,
						style: { animationDelay: `${.04 * i + .04}s` },
						children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-5 w-5 shrink-0 text-berry",
							"aria-hidden": true
						})]
					}) }, l.href);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#aamukham",
						onClick: handleClick("#aamukham"),
						className: "flex min-h-[60px] items-center justify-center rounded-2xl bg-berry px-5 text-center font-display text-xl font-bold leading-snug text-berry-foreground ring-poster focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
						children: "സമ്മേളനത്തിലേക്ക് സ്വാഗതം"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "pt-4 pb-2 flex justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.instagram.com/balasangham_pinarayi/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "grid h-12 w-12 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform active:scale-95",
							"aria-label": "Instagram",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.facebook.com/share/1CA9ncygHb/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "grid h-12 w-12 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform active:scale-95",
							"aria-label": "Facebook",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.threads.net/@balasangham_pinarayi",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "grid h-12 w-12 place-items-center rounded-full bg-berry text-cream shadow-md transition-transform active:scale-95",
							"aria-label": "Threads",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 12V13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13V11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11V12Z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 13C10 14.1046 10.8954 15 12 15H12.5C14.433 15 16 13.433 16 11.5C16 9.567 14.433 8 12.5 8H12C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18H14.5" })
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "pt-4 text-center font-ui text-sm text-ink/60",
					children: "2026 സെപ്റ്റംബർ 6 · കോട്ടയം അങ്ങാടി, കണ്ണൂർ"
				})
			]
		})]
	})] });
}
function prefersReducedMotion() {
	return typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
}
/**
* Returns a normalized scroll progress (0 at page top, grows with scroll) in px,
* throttled through requestAnimationFrame. Returns 0 with reduced motion.
*/
function useScrollOffset() {
	const [offset, setOffset] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (prefersReducedMotion()) return;
		let frame = 0;
		const onScroll = () => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				setOffset(window.scrollY);
			});
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);
	return offset;
}
/**
* Pointer position relative to the viewport center, range roughly -1..1.
* Stays at the origin on touch devices and with reduced motion.
*/
function usePointerTilt() {
	const [tilt, setTilt] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		if (prefersReducedMotion()) return;
		if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) return;
		let frame = 0;
		const onMove = (event) => {
			if (frame) return;
			frame = requestAnimationFrame(() => {
				frame = 0;
				setTilt({
					x: (event.clientX / window.innerWidth - .5) * 2,
					y: (event.clientY / window.innerHeight - .5) * 2
				});
			});
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => {
			window.removeEventListener("pointermove", onMove);
			if (frame) cancelAnimationFrame(frame);
		};
	}, []);
	return tilt;
}
var FESTIVAL_COLORS = [
	"var(--berry)",
	"var(--grape)",
	"var(--sky)",
	"var(--mango)",
	"var(--leaf)"
];
/** Extremely subtle paper grain overlay for a section. */
function Grain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: "grain-layer pointer-events-none absolute inset-0"
	});
}
/** Festival bunting: triangular flags on a gently curved string. */
function Bunting({ count = 22, className = "top-0" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: `pointer-events-none absolute inset-x-0 overflow-hidden ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 1200 40",
			preserveAspectRatio: "none",
			className: "h-6 w-full sm:h-9",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 4 Q300 40 600 22 T1200 4",
				fill: "none",
				stroke: "color-mix(in oklab, var(--ink) 35%, transparent)",
				strokeWidth: "2.5"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "-mt-5 flex w-full items-start justify-between px-1 sm:-mt-7",
			children: Array.from({ length: count }).map((_, i) => {
				const t = i / (count - 1);
				const sag = Math.round(Math.sin(t * Math.PI) * 18 * 100) / 100;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sway-slow block h-7 w-4 shrink-0 sm:h-11 sm:w-6",
					style: {
						backgroundColor: FESTIVAL_COLORS[i % FESTIVAL_COLORS.length],
						clipPath: "polygon(0 0, 100% 0, 50% 100%)",
						transform: `translateY(${sag}px)`,
						marginTop: `${Math.round(sag * 90) / 100}px`,
						animationDelay: `${i % 7 * .22}s`
					}
				}, i);
			})
		})]
	});
}
var CONFETTI = Array.from({ length: 30 }).map((_, i) => ({
	left: (i * 3.9 + i % 5 * 2.1) % 100,
	delay: i % 13 * .85,
	duration: 10 + i % 7,
	size: 6 + i % 4 * 3,
	color: FESTIVAL_COLORS[i % FESTIVAL_COLORS.length],
	shape: i % 3
}));
/** Gently falling confetti; purely decorative. */
function Confetti({ opacity = .7 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: CONFETTI.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute top-0 block",
			style: {
				left: `${c.left}%`,
				width: c.size,
				height: c.shape === 0 ? c.size : c.size * 1.9,
				backgroundColor: c.color,
				borderRadius: c.shape === 0 ? "999px" : c.shape === 1 ? "2px" : "40% 60% 55% 45%",
				opacity,
				animation: `confetti-fall ${c.duration}s linear ${c.delay}s infinite`
			}
		}, i))
	});
}
/** Hand-drawn style star. */
function Star({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		"aria-hidden": true,
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 1.8l2.9 6.2 6.8.8-5 4.6 1.3 6.8-6-3.4-6 3.4L7.3 13.4l-5-4.6 6.8-.8L12 1.8z" })
	});
}
/** Hand-drawn spiral. */
function Spiral({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 64 64",
		"aria-hidden": true,
		className,
		fill: "none",
		stroke: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M32 32c0-5 4-9 9-9s9 4 9 9-5 13-14 13-18-7-18-17S26 8 39 8s21 10 21 22",
			strokeWidth: "3",
			strokeLinecap: "round"
		})
	});
}
/** Small five-petal flower. */
function Flower({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 40 40",
		"aria-hidden": true,
		className,
		fill: "currentColor",
		children: [[
			0,
			72,
			144,
			216,
			288
		].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
			cx: "20",
			cy: "10",
			rx: "6",
			ry: "9",
			transform: `rotate(${a} 20 20)`
		}, a)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "20",
			cy: "20",
			r: "4.5",
			fill: "var(--sun)"
		})]
	});
}
/** Paper plane, used for the "dreams take flight" idea. */
function PaperPlane({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 64 64",
		"aria-hidden": true,
		className,
		fill: "currentColor",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M62 4L2 28l20 6 4 22 12-16 18 8L62 4zM24 32L50 12 28 38l-4-6z",
			opacity: "0.95"
		})
	});
}
/** Abstract wings backdrop for oversized typography. */
function Wings({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 600 300",
		"aria-hidden": true,
		className,
		fill: "none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			stroke: "currentColor",
			strokeWidth: "6",
			strokeLinecap: "round",
			opacity: "0.55",
			children: [[
				0,
				1,
				2,
				3,
				4
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M300 150 C ${220 - i * 30} ${140 - i * 26}, ${120 - i * 20} ${180 + i * 6}, ${40 - i * 6} ${120 + i * 30}` }, `l${i}`)), [
				0,
				1,
				2,
				3,
				4
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M300 150 C ${380 + i * 30} ${140 - i * 26}, ${480 + i * 20} ${180 + i * 6}, ${560 + i * 6} ${120 + i * 30}` }, `r${i}`))]
		})
	});
}
/** Simple dove silhouette. */
function Dove({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 80",
		"aria-hidden": true,
		className,
		fill: "currentColor",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 52c14 6 30 8 44 4 10-3 16-10 24-18 6-6 14-10 22-9-3-6-9-10-16-10 4-4 9-6 15-6-8-5-19-5-27 1-8 6-12 15-20 21-9 7-22 9-34 6-4-1-8-2-11-4l3 15z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "88",
			cy: "19",
			r: "2.5",
			fill: "var(--ink)"
		})]
	});
}
/** Organic curved divider that transitions between two section colors. */
function CurveDivider({ color = "var(--cream)", flip = false, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: `pointer-events-none absolute inset-x-0 ${flip ? "top-0" : "bottom-0"} ${className}`,
		style: { transform: flip ? "scaleY(-1)" : void 0 },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 1440 120",
			preserveAspectRatio: "none",
			className: "h-10 w-full sm:h-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 96 C 220 20, 420 132, 700 74 C 960 22, 1180 118, 1440 60 L1440 120 L0 120 Z",
				fill: color
			})
		})
	});
}
/** Row of small dots used as an eyebrow accent. */
function DotRow({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		"aria-hidden": true,
		className: `inline-flex items-center gap-1.5 ${className}`,
		children: FESTIVAL_COLORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block h-2 w-2 rounded-full",
			style: { backgroundColor: c }
		}, c))
	});
}
function Hero() {
	const scroll = useScrollOffset();
	const tilt = usePointerTilt();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate flex min-h-[100svh] flex-col overflow-hidden pb-10 pt-24 sm:pb-24 sm:pt-32",
		style: { backgroundImage: "radial-gradient(115% 85% at 18% 4%, var(--sun) 0%, var(--festival) 46%, var(--festival-deep) 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -left-28 top-24 block h-80 w-80 rounded-full bg-mango/25 blur-[2px]",
						style: { transform: `translate3d(${tilt.x * 14}px, ${scroll * -.06 + tilt.y * 10}px, 0)` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -right-24 top-10 block h-72 w-72 rounded-[46%_54%_38%_62%] bg-berry/15",
						style: { transform: `translate3d(${tilt.x * -18}px, ${scroll * -.03}px, 0)` }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "spin-slow absolute right-8 top-40 block h-40 w-40 rounded-full border-[10px] border-dashed border-grape/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "float-slow absolute bottom-40 left-8 block h-20 w-20 rotate-12 rounded-3xl bg-sky/25" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spiral, { className: "float-fast absolute left-[6%] top-[42%] h-16 w-16 text-berry/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spiral, { className: "drift-slow absolute right-[10%] bottom-[30%] h-20 w-20 text-grape/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower, { className: "float-slow absolute left-[42%] top-[14%] h-9 w-9 text-berry/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower, { className: "float-fast absolute right-[26%] top-[58%] h-7 w-7 text-grape/60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "float-fast absolute left-[18%] top-[18%] h-8 w-8 text-berry/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "float-slow absolute right-[16%] top-[24%] h-6 w-6 text-sky/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperPlane, { className: "drift-slow absolute right-[8%] top-[36%] h-10 w-10 text-cream" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bunting, { className: "top-16 sm:top-20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-5 pt-16 sm:px-6 sm:pt-20 lg:grid lg:items-center lg:gap-6 lg:pt-24 lg:grid-cols-[1.08fr_0.92fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-20 text-center lg:text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: balasangham_logo_default,
							alt: "ബാലസംഘം ചിഹ്നം — സമാധാനത്തിന്റെ പ്രാവും കുട്ടികളും",
							width: 320,
							height: 320,
							decoding: "async",
							className: "pop-in mx-auto block h-20 w-20 object-contain drop-shadow-[0_10px_18px_rgba(60,30,0,0.18)] sm:h-24 sm:w-24 lg:mx-0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rise-in mt-4 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-cream/70 px-5 py-1.5 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 backdrop-blur-sm sm:text-sm",
							style: { animationDelay: "0.05s" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, {}), "2026"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 sm:mt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "rise-in type-display-tight block text-[clamp(2.5rem,12.6vw,6.5rem)] text-berry text-poster-shadow",
									style: { animationDelay: "0.12s" },
									children: "ബാലസംഘം"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "rise-in type-display-tight relative z-10 block text-[clamp(1.65rem,7vw,3.1rem)] text-grape lg:ml-[0.35em]",
									style: { animationDelay: "0.22s" },
									children: "പിണറായി ഏരിയ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "rise-in type-display-tight block text-[clamp(2.25rem,10.9vw,5.4rem)] text-grape text-poster-shadow",
									style: { animationDelay: "0.3s" },
									children: "സമ്മേളനം"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise-in mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-stretch sm:justify-center lg:justify-start",
							style: { animationDelay: "0.42s" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "-rotate-1 rounded-2xl bg-berry px-5 py-3 text-center ring-poster",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-ui text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-berry-foreground/70",
									children: "Date"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "type-display block whitespace-nowrap text-[clamp(1.35rem,6vw,1.9rem)] text-berry-foreground",
									children: "2026 സെപ്റ്റംബർ 6"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rotate-1 rounded-2xl bg-cream px-5 py-3 text-center ring-poster",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-ui text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-ink/50",
									children: "Venue"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "type-display block text-balance text-[clamp(1.1rem,4.6vw,1.6rem)] leading-[1.5] text-sky lg:whitespace-nowrap",
									children: "കോട്ടയം അങ്ങാടി, കണ്ണൂർ"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise-in mx-auto mt-6 max-w-lg text-balance text-lg leading-[1.9] text-ink/80 sm:text-xl lg:mx-0",
							style: { animationDelay: "0.5s" },
							children: "കുട്ടികളുടെ സൗഹൃദത്തിന്റെയും സ്നേഹത്തിന്റെയും ആഘോഷത്തിലേക്ക് സ്വാഗതം"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise-in mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start",
							style: { animationDelay: "0.58s" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#aamukham",
								className: "flex min-h-[52px] items-center justify-center rounded-2xl bg-grape px-7 text-center font-display text-lg font-bold text-accent-foreground ring-poster transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
								children: "സ്വാഗതം"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#paripadikal",
								className: "flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-ink/15 bg-cream/70 px-7 text-center font-display text-lg font-bold text-ink backdrop-blur-sm transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
								children: "പരിപാടികൾ"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 -mx-5 mt-2 sm:mx-0 lg:-mb-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "absolute left-1/2 top-[46%] -z-10 block h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[48%_52%_46%_54%] bg-cream/55 blur-[1px]",
							style: { transform: `translate(-50%,-50%) translate3d(${tilt.x * -10}px, ${tilt.y * -8}px, 0)` }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "dotgrid absolute right-2 bottom-6 -z-10 block h-32 w-32 text-berry/30 sm:-right-2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_children_default,
							alt: "ആഹ്ലാദത്തോടെ കൈകൾ ഉയർത്തി ചാടുന്ന കുട്ടികൾ",
							width: 1280,
							height: 1024,
							fetchPriority: "high",
							decoding: "async",
							className: "pop-in relative mx-auto block w-full max-w-[34rem] drop-shadow-[0_28px_40px_rgba(60,30,0,0.22)]",
							style: {
								animationDelay: "0.3s",
								transform: `translate3d(${tilt.x * 8}px, ${scroll * -.04 + tilt.y * 6}px, 0)`
							}
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { opacity: .75 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurveDivider, { color: "var(--sun)" })
		]
	});
}
/**
* Adds a one-shot scroll-reveal state when the element enters the viewport.
* Falls back to visible when IntersectionObserver is unavailable.
*/
function useReveal() {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el || typeof IntersectionObserver === "undefined") {
			setShown(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				setShown(true);
				observer.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -8% 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return {
		ref,
		shown,
		className: shown ? "reveal reveal-in" : "reveal"
	};
}
var TARGET = (/* @__PURE__ */ new Date("2026-09-06T00:00:00+05:30")).getTime();
function remaining() {
	const diff = Math.max(0, TARGET - Date.now());
	return {
		days: Math.floor(diff / 864e5),
		hours: Math.floor(diff / 36e5 % 24),
		minutes: Math.floor(diff / 6e4 % 60),
		seconds: Math.floor(diff / 1e3 % 60)
	};
}
var LABELS = [
	{
		key: "days",
		label: "ദിവസം",
		color: "bg-berry text-berry-foreground",
		tilt: "-1.6deg"
	},
	{
		key: "hours",
		label: "മണിക്കൂർ",
		color: "bg-grape text-accent-foreground",
		tilt: "1.4deg"
	},
	{
		key: "minutes",
		label: "മിനിറ്റ്",
		color: "bg-sky text-accent-foreground",
		tilt: "-1.2deg"
	},
	{
		key: "seconds",
		label: "സെക്കന്റ്",
		color: "bg-mango text-ink",
		tilt: "1.8deg"
	}
];
function Countdown() {
	const [parts, setParts] = (0, import_react.useState)(null);
	const reveal = useReveal();
	(0, import_react.useEffect)(() => {
		const next = remaining();
		setParts(next);
		if (TARGET - Date.now() <= 0) return;
		const id = setInterval(() => {
			const value = remaining();
			setParts(value);
			if (TARGET - Date.now() <= 0) clearInterval(id);
		}, 1e3);
		return () => clearInterval(id);
	}, []);
	const isOver = parts !== null && parts.days === 0 && parts.hours === 0 && parts.minutes === 0 && parts.seconds === 0 && TARGET - Date.now() <= 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-16 sm:py-24",
		style: { backgroundImage: "linear-gradient(168deg, var(--sun) 0%, var(--festival) 40%, var(--festival-deep) 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { opacity: .35 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "spin-slow absolute -left-20 top-10 block h-56 w-56 rounded-full border-[12px] border-dotted border-berry/20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "float-slow absolute right-6 bottom-10 block h-24 w-24 rounded-[40%_60%_55%_45%] bg-grape/20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: reveal.ref,
				className: `${reveal.className} relative mx-auto max-w-6xl px-5 sm:px-6`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "float-fast h-8 w-8 text-berry" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "type-display text-[clamp(1.9rem,7vw,3.6rem)] text-berry text-poster-shadow",
						children: isOver ? "സമ്മേളനം സമാപിച്ചു" : "സമ്മേളനത്തിന് ഇനി"
					})]
				}), isOver ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-8 max-w-2xl rounded-[2rem] bg-cream px-6 py-10 text-center ring-poster sm:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "type-display text-[clamp(1.4rem,5.4vw,2.4rem)] leading-[1.5] text-grape",
						children: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം സന്തോഷത്തോടെ സമാപിച്ചു"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg leading-[1.9] text-ink/75",
						children: "2026 സെപ്റ്റംബർ 6 · കോട്ടയം അങ്ങാടി, കണ്ണൂർ — പങ്കെടുത്ത എല്ലാവർക്കും നന്ദി."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4",
					children: LABELS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `${item.color} relative overflow-hidden rounded-[1.75rem] px-5 py-7 text-center ring-poster transition-transform duration-300 hover:rotate-0 hover:-translate-y-1.5 sm:py-9`,
						style: { transform: `rotate(${item.tilt})` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "dotgrid pointer-events-none absolute inset-0 opacity-15"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "tick-up relative font-ui text-[clamp(2.8rem,11vw,4.6rem)] font-extrabold leading-none tabular-nums",
								children: parts ? String(parts[item.key]).padStart(2, "0") : "--"
							}, parts ? parts[item.key] : "idle"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-3 font-display text-lg font-bold opacity-90 sm:text-xl",
								children: item.label
							})
						]
					}, item.key))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurveDivider, { color: "var(--cream)" })
		]
	});
}
var intro_children_default = "/assets/intro-children-Z_CyiRPB.webp";
var FRAGMENTS = [
	{
		text: "സൗഹൃദം",
		className: "-left-2 top-6 -rotate-6 text-berry"
	},
	{
		text: "ഒരുമ",
		className: "right-0 top-16 rotate-6 text-grape"
	},
	{
		text: "സർഗാത്മകത",
		className: "left-2 bottom-10 -rotate-3 text-sky"
	},
	{
		text: "സ്വപ്നങ്ങൾ",
		className: "right-2 bottom-24 rotate-3 text-leaf"
	}
];
function Intro() {
	const reveal = useReveal();
	const tilt = usePointerTilt();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "aamukham",
		className: "relative overflow-hidden bg-cream py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "absolute -left-32 top-10 block h-72 w-72 rounded-full bg-sun/70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "dotgrid absolute right-6 top-10 block h-40 w-40 text-mango/40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: reveal.ref,
				className: `${reveal.className} relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "type-display-tight block text-[clamp(2.4rem,9vw,4.6rem)] text-berry text-poster-shadow",
								children: "സ്നേഹപൂർവ്വം"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "type-display-tight block text-[clamp(2.4rem,9vw,4.6rem)] text-grape lg:ml-[0.4em]",
								children: "സ്വാഗതം"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "mt-4 block h-2.5 w-32 rounded-full bg-mango"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 max-w-xl space-y-5 text-lg leading-[1.95] text-ink/80 sm:text-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "border-l-4 border-berry/50 pl-5 font-medium text-ink",
									children: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം കുട്ടികളുടെ സൗഹൃദവും സർഗാത്മകതയും ഒരുമയും ആഘോഷിക്കുന്ന ഒരു സംഗമമാണ്."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "പാട്ടും കളിയും കലയും ചിരിയും നിറഞ്ഞ ഒരു ദിവസം. ഓരോ കുട്ടിയുടെയും സ്വപ്നങ്ങൾക്ക് ഇടം നൽകുന്ന വേദി." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "നാടിന്റെ നാളെയെ സ്വപ്നം കാണുന്ന കൂട്ടുകാർക്കൊപ്പം നിങ്ങളും ചേരൂ." })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "absolute left-1/2 top-1/2 -z-10 block h-[86%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[52%_48%_44%_56%] bg-festival",
							style: { transform: `translate(-50%,-50%) rotate(${tilt.x * 3}deg)` }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "spin-slow absolute -right-6 top-2 -z-10 block h-32 w-32 rounded-full border-8 border-dashed border-berry/25"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spiral, { className: "float-slow absolute -left-3 bottom-8 h-14 w-14 text-grape/50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower, { className: "float-fast absolute right-6 top-2 h-8 w-8 text-berry/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "float-slow absolute left-8 top-0 h-7 w-7 text-mango" }),
						FRAGMENTS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: `absolute z-10 rounded-full bg-cream/90 px-3.5 py-1.5 font-display text-sm font-bold shadow-sm backdrop-blur-sm sm:text-base ${f.className}`,
							children: f.text
						}, f.text)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: intro_children_default,
							alt: "കൈകോർത്ത് ചിരിച്ചു ചാടുന്ന മൂന്ന് കുട്ടികൾ",
							width: 1024,
							height: 1024,
							loading: "lazy",
							decoding: "async",
							className: "float-slow mx-auto w-full max-w-lg drop-shadow-[0_24px_36px_rgba(60,30,0,0.18)]",
							style: { transform: `translate3d(${tilt.x * 6}px, ${tilt.y * 5}px, 0)` }
						})
					]
				})]
			})
		]
	});
}
var PILLARS = [
	{
		title: "സൗഹൃദം",
		text: "കൈകോർത്ത് വളരുന്ന കൂട്ടുകാർ"
	},
	{
		title: "സമത്വം",
		text: "എല്ലാ കുട്ടികൾക്കും ഒരേ ഇടം"
	},
	{
		title: "സമാധാനം",
		text: "സ്നേഹത്തിന്റെ ഭാഷ മാത്രം"
	},
	{
		title: "സർഗാത്മകത",
		text: "പാട്ടും ചിത്രവും കഥയും"
	},
	{
		title: "പഠനം",
		text: "അറിവിന്റെ പുതിയ വഴികൾ"
	},
	{
		title: "സ്വപ്നങ്ങൾ",
		text: "ചിറകുവിരിക്കുന്ന നാളെ"
	}
];
function CoreMessage() {
	const reveal = useReveal();
	const scroll = useScrollOffset();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-16 sm:py-28",
		style: { backgroundImage: "linear-gradient(160deg, var(--festival) 0%, var(--festival-deep) 55%, var(--mango) 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wings, { className: "pointer-events-none absolute left-1/2 top-1/2 h-auto w-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 text-cream/50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaperPlane, { className: "drift-slow pointer-events-none absolute right-[12%] top-16 h-12 w-12 text-cream" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "float-slow pointer-events-none absolute left-[8%] bottom-16 h-10 w-10 text-berry/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: reveal.ref,
				className: `${reveal.className} relative mx-auto max-w-6xl px-5 sm:px-6`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "relative",
					style: { transform: `translateY(${scroll * -.012}px)` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-display-tight block text-[clamp(2.1rem,10vw,7rem)] text-berry text-poster-shadow",
							children: "കുട്ടികളുടെ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-display-tight block text-[clamp(1.9rem,9vw,6.4rem)] text-berry-foreground text-sticker sm:ml-[0.3em]",
							children: "സ്വപ്നങ്ങൾക്ക്"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-display-tight block text-[clamp(2.1rem,10vw,7rem)] text-grape text-poster-shadow sm:ml-[0.9em]",
							children: "ചിറകേകാം"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-16 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3",
					children: PILLARS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "group border-l-[5px] border-berry/60 pl-5 transition-all duration-300 hover:border-grape hover:pl-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "type-display text-2xl text-berry sm:text-[1.7rem]",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-lg leading-relaxed text-ink/75",
							children: p.text
						})]
					}, p.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurveDivider, { color: "var(--sky)" })
		]
	});
}
var EVENT_TITLE = "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം";
var EVENT_DATE_ML = "2026 സെപ്റ്റംബർ 6";
var EVENT_LOCATION = "കോട്ടയം അങ്ങാടി, കണ്ണൂർ";
var EVENT_DESCRIPTION = `${EVENT_TITLE} — ${EVENT_DATE_ML}.`;
var EVENT_SHARE_TEXT = `${EVENT_TITLE} — ${EVENT_DATE_ML}, ${EVENT_LOCATION}.`;
var MAPS_URL$1 = "https://maps.app.goo.gl/rUMkccbTZhMd46Kx5?g_st=aw";
/** All-day event: 2026-09-06 (DTEND is exclusive). */
var START = "20260906";
var END = "20260907";
var GOOGLE_CALENDAR_URL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(EVENT_TITLE)}&dates=${START}/${END}&details=${encodeURIComponent(EVENT_DESCRIPTION)}&location=${encodeURIComponent(EVENT_LOCATION)}`;
function foldLine(line) {
	const encoder = new TextEncoder();
	if (encoder.encode(line).length <= 73) return line;
	const out = [];
	let current = "";
	let bytes = 0;
	for (const char of line) {
		const size = encoder.encode(char).length;
		if (bytes + size > 73) {
			out.push(current);
			current = "";
			bytes = 0;
		}
		current += char;
		bytes += size;
	}
	if (current) out.push(current);
	return out.join("\r\n ");
}
function escapeIcs(value) {
	return value.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
}
function buildIcs() {
	const stamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
	return [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Balasangham Pinarayi Area//Sammelanam 2026//ML",
		"CALSCALE:GREGORIAN",
		"METHOD:PUBLISH",
		"BEGIN:VEVENT",
		`UID:balasangham-pinarayi-sammelanam-2026@${START}`,
		`DTSTAMP:${stamp}`,
		`DTSTART;VALUE=DATE:${START}`,
		`DTEND;VALUE=DATE:${END}`,
		`SUMMARY:${escapeIcs(EVENT_TITLE)}`,
		`LOCATION:${escapeIcs(EVENT_LOCATION)}`,
		`DESCRIPTION:${escapeIcs(EVENT_DESCRIPTION)}`,
		"TRANSP:TRANSPARENT",
		"X-MICROSOFT-CDO-ALLDAYEVENT:TRUE",
		"END:VEVENT",
		"END:VCALENDAR"
	].map(foldLine).join("\r\n") + "\r\n";
}
function downloadIcs() {
	const blob = new Blob([buildIcs()], { type: "text/calendar;charset=utf-8" });
	const href = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = href;
	a.download = "balasangham-sammelanam-2026.ics";
	a.rel = "noopener";
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(href), 4e3);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.931L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
	});
}
function useShareUrl() {
	const [url, setUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		try {
			setUrl(window.location.href);
		} catch {
			setUrl("/");
		}
	}, []);
	return url;
}
function ShareBar() {
	const url = useShareUrl();
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [copyFailed, setCopyFailed] = (0, import_react.useState)(false);
	const encodedText = encodeURIComponent(EVENT_SHARE_TEXT);
	const encodedUrl = encodeURIComponent(url || "https://balasangham.pinarayiarea.org");
	const links = [
		{
			key: "wa",
			label: "WhatsApp",
			aria: "Share on WhatsApp (opens in a new tab)",
			href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
			icon: WhatsAppIcon,
			color: "bg-[#25D366] text-white ring-[#25D366]/30"
		},
		{
			key: "fb",
			label: "Facebook",
			aria: "Share on Facebook (opens in a new tab)",
			href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
			icon: Facebook,
			color: "bg-[#1877F2] text-white ring-[#1877F2]/30"
		},
		{
			key: "x",
			label: "X",
			aria: "Share on X (opens in a new tab)",
			href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
			icon: Twitter,
			color: "bg-[#0f1419] text-white ring-black/20"
		}
	];
	const handleCopy = async () => {
		const target = url || window.location.href;
		try {
			await navigator.clipboard.writeText(target);
			setCopied(true);
			setCopyFailed(false);
			window.setTimeout(() => setCopied(false), 2400);
		} catch {
			setCopied(false);
			setCopyFailed(true);
			window.setTimeout(() => setCopyFailed(false), 2400);
		}
	};
	const btnBase = "flex h-14 w-full min-w-0 items-center justify-start gap-3 rounded-2xl px-4 ring-1 transition duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2 flex flex-col gap-2.5",
		children: [
			links.map((item) => {
				const Icon = item.icon;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: item.href,
					target: "_blank",
					rel: "noopener noreferrer",
					"aria-label": item.aria,
					className: `${btnBase} ${item.color}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-5 w-5 shrink-0",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-ui text-sm font-semibold leading-[1.6]",
						children: item.label
					})]
				}, item.key);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: handleCopy,
				"aria-label": copied ? "Link copied" : "Copy link",
				className: `${btnBase} bg-cream text-ink ring-ink/10`,
				children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
					className: "h-5 w-5 shrink-0 text-leaf",
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, {
					className: "h-5 w-5 shrink-0",
					"aria-hidden": "true"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate font-ui text-sm font-semibold leading-[1.6]",
					children: copied ? "Copied" : "Copy Link"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				"aria-live": "polite",
				"aria-atomic": "true",
				className: `mt-2 min-h-[1.25rem] text-center font-ui text-xs leading-[1.6] transition-opacity duration-200 ${copied || copyFailed ? "opacity-100" : "opacity-0"} ${copyFailed ? "text-destructive" : "text-ink/60"}`,
				children: copied ? "Link copied to clipboard" : copyFailed ? "Couldn't copy — please copy manually" : ""
			})
		]
	});
}
var BTN = "inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 font-display text-base font-bold leading-[1.5] ring-poster transition-transform duration-200 motion-safe:hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink sm:w-auto sm:min-w-[13rem] will-change-transform";
function EventActions() {
	const [canNativeShare, setCanNativeShare] = (0, import_react.useState)(false);
	const [shareOpen, setShareOpen] = (0, import_react.useState)(false);
	const [calendarOpen, setCalendarOpen] = (0, import_react.useState)(false);
	const [note, setNote] = (0, import_react.useState)("");
	const noteTimer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		setCanNativeShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
		return () => {
			if (noteTimer.current) window.clearTimeout(noteTimer.current);
		};
	}, []);
	const flash = (message) => {
		setNote(message);
		if (noteTimer.current) window.clearTimeout(noteTimer.current);
		noteTimer.current = window.setTimeout(() => setNote(""), 3e3);
	};
	const handleCalendarConfirm = () => {
		setCalendarOpen(false);
		try {
			downloadIcs();
			flash("കലണ്ടർ ഫയൽ ഡൗൺലോഡ് ചെയ്തു");
		} catch {
			try {
				window.open(GOOGLE_CALENDAR_URL, "_blank", "noopener,noreferrer");
			} catch {
				flash("കലണ്ടറിൽ ചേർക്കാൻ കഴിഞ്ഞില്ല");
			}
		}
	};
	const handleShare = async () => {
		if (canNativeShare) try {
			await navigator.share({
				title: EVENT_TITLE,
				text: EVENT_SHARE_TEXT,
				url: window.location.href
			});
			flash("പങ്കിട്ടതിന് നന്ദി!");
			return;
		} catch (err) {
			if (err instanceof DOMException && err.name === "AbortError") {
				flash("പങ്കിടൽ റദ്ദാക്കി — എപ്പോൾ വേണമെങ്കിലും വീണ്ടും ശ്രമിക്കാം");
				return;
			}
		}
		setShareOpen(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setCalendarOpen(true),
						"aria-haspopup": "dialog",
						"aria-label": `Add to Calendar — ${EVENT_TITLE}, 2026 സെപ്റ്റംബർ 6`,
						className: `${BTN} bg-berry text-berry-foreground`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
							alt: "",
							className: "h-5 w-5 shrink-0",
							"aria-hidden": true
						}), "Add to Calendar"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: MAPS_URL$1,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": `വഴികാട്ടി — ${EVENT_LOCATION} ഗൂഗിൾ മാപ്പിൽ തുറക്കും (പുതിയ ടാബിൽ)`,
						className: `${BTN} bg-sky text-accent-foreground`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
							className: "h-5 w-5 shrink-0",
							"aria-hidden": true
						}), "Navigate"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleShare,
						"aria-expanded": canNativeShare ? void 0 : shareOpen,
						"aria-label": `പങ്കിടുക — ${EVENT_TITLE}`,
						className: `${BTN} bg-ink text-cream`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, {
							className: "h-5 w-5 shrink-0",
							"aria-hidden": true
						}), "Share"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: shareOpen,
				onOpenChange: setShareOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-xs rounded-[1.75rem] bg-cream text-ink ring-poster sm:max-w-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-display text-xl font-bold leading-[1.5]",
						children: "Share Event"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "font-body text-sm leading-[1.7] text-ink/70",
						children: "Select an app to share with your friends"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareBar, {})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "status",
				"aria-live": "polite",
				"aria-atomic": "true",
				className: "mt-2 min-h-[1.25rem] text-center font-ui text-xs text-ink/70",
				children: note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: calendarOpen,
				onOpenChange: setCalendarOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "max-w-sm rounded-[1.75rem] bg-cream text-ink ring-poster",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-display text-xl font-bold leading-[1.5]",
							children: "പരിപാടിയുടെ വിശദാംശങ്ങൾ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "font-body text-sm leading-[1.7] text-ink/70",
							children: "കലണ്ടറിൽ ചേർക്കുന്നതിന് മുൻപ് ഒന്ന് പരിശോധിക്കൂ"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-2 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
										className: "mt-1 h-5 w-5 shrink-0 text-berry",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-ui text-xs font-semibold uppercase tracking-[0.14em] text-ink/60",
										children: "പരിപാടി"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-body text-base font-bold leading-[1.6]",
										children: EVENT_TITLE
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarPlus, {
										className: "mt-1 h-5 w-5 shrink-0 text-berry",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-ui text-xs font-semibold uppercase tracking-[0.14em] text-ink/60",
										children: "തീയതി"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "font-body text-base font-bold leading-[1.6]",
										children: [
											EVENT_DATE_ML,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-ui text-sm font-normal text-ink/60",
												children: "(എല്ലായിടത്തും)"
											})
										]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "mt-1 h-5 w-5 shrink-0 text-berry",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-ui text-xs font-semibold uppercase tracking-[0.14em] text-ink/60",
										children: "സ്ഥലം"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "font-body text-base font-bold leading-[1.6]",
										children: EVENT_LOCATION
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-2.5 sm:flex-row sm:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setCalendarOpen(false),
								className: "inline-flex min-h-11 items-center justify-center rounded-2xl px-5 py-2.5 font-display text-sm font-bold text-ink ring-poster transition hover:bg-ink/5 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink",
								children: "റദ്ദാക്കുക"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: handleCalendarConfirm,
								className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-berry px-5 py-2.5 font-display text-sm font-bold text-berry-foreground transition motion-safe:hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
									className: "h-4 w-4 shrink-0",
									"aria-hidden": true
								}), "ഡൗൺലോഡ് ചെയ്യുക"]
							})]
						})
					]
				})
			})
		]
	});
}
var BLOCKS = [
	{
		icon: CalendarDays,
		kicker: "Date",
		lines: [
			"06",
			"സെപ്റ്റംബർ",
			"2026"
		],
		surface: "bg-berry text-berry-foreground",
		accent: "text-sun",
		tilt: "-1.4deg"
	},
	{
		icon: MapPin,
		kicker: "Venue",
		lines: ["കോട്ടയം അങ്ങാടി,", "കണ്ണൂർ"],
		surface: "bg-sky text-accent-foreground",
		accent: "text-sun",
		tilt: "1.2deg"
	},
	{
		icon: Users,
		kicker: "Event",
		lines: ["ബാലസംഘം", "പിണറായി ഏരിയ"],
		surface: "bg-grape text-accent-foreground",
		accent: "text-mango",
		tilt: "-0.8deg"
	}
];
function Details() {
	const reveal = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "sammelanam",
		className: "relative overflow-hidden bg-festival py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "dotgrid absolute left-6 top-10 block h-32 w-32 text-berry/25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spiral, { className: "float-slow absolute right-8 top-14 h-16 w-16 text-grape/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: reveal.ref,
				className: `${reveal.className} relative mx-auto max-w-6xl px-5 sm:px-6`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-display mt-3 text-[clamp(2rem,7.5vw,3.8rem)] text-berry text-poster-shadow",
							children: "സമ്മേളന വിവരങ്ങൾ"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid gap-7 md:grid-cols-3",
						children: BLOCKS.map(({ icon: Icon, ...b }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `${b.surface} group relative overflow-hidden rounded-[2rem] p-8 ring-poster transition-all duration-300 hover:rotate-0 hover:-translate-y-2`,
							style: { transform: `rotate(${b.tilt})` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "dotgrid absolute inset-0 opacity-10"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "absolute -right-10 -top-10 block h-32 w-32 rounded-full bg-cream/15 transition-transform duration-500 group-hover:scale-125"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-ui text-[0.7rem] font-bold uppercase tracking-[0.24em] opacity-70",
										children: b.kicker
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-6 w-6 opacity-80",
										"aria-hidden": true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative mt-6",
									children: b.lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `type-display-tight block ${/^[0-9]+$/.test(line) ? `font-ui text-[clamp(3.4rem,13vw,5rem)] font-extrabold leading-none ${b.accent}` : i === 0 ? "text-[clamp(1.8rem,6vw,2.5rem)]" : "text-[clamp(1.5rem,5vw,2rem)] opacity-90"}`,
										children: line
									}, line))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `relative mt-6 h-6 w-6 ${b.accent} transition-transform duration-500 group-hover:rotate-45` })
							]
						}, b.kicker))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventActions, {})
				]
			})
		]
	});
}
var PROGRAMS = [
	{
		icon: Flag,
		title: "ഉദ്ഘാടന സമ്മേളനം",
		text: "സമ്മേളനത്തിന് തുടക്കമിടുന്ന ആഹ്ലാദ നിമിഷം",
		tint: "bg-berry text-berry-foreground"
	},
	{
		icon: Palette,
		title: "കലാപരിപാടികൾ",
		text: "ചിത്രവും നൃത്തവും അഭിനയവും",
		tint: "bg-grape text-accent-foreground"
	},
	{
		icon: Music,
		title: "സാംസ്കാരിക പരിപാടികൾ",
		text: "നാടിന്റെ പാട്ടും താളവും",
		tint: "bg-sky text-accent-foreground"
	},
	{
		icon: HeartHandshake,
		title: "സൗഹൃദ സംഗമം",
		text: "പുതിയ കൂട്ടുകാരെ കാണാൻ ഒരു ഇടം",
		tint: "bg-leaf text-accent-foreground"
	},
	{
		icon: Sparkles,
		title: "സർഗാത്മക പ്രകടനങ്ങൾ",
		text: "ഓരോ കുട്ടിയുടെയും കഴിവിന് വേദി",
		tint: "bg-mango text-ink"
	}
];
function Programs() {
	const reveal = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "paripadikal",
		className: "relative overflow-hidden py-16 sm:py-24",
		style: { backgroundImage: "linear-gradient(180deg, var(--cream) 0%, var(--sun) 55%, var(--festival) 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "spin-slow absolute -right-24 top-24 block h-64 w-64 rounded-full border-[14px] border-dashed border-grape/15"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: reveal.ref,
				className: `${reveal.className} relative mx-auto max-w-5xl px-5 sm:px-6`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-display mt-3 text-[clamp(2rem,7.5vw,3.8rem)] text-berry text-poster-shadow",
							children: "സമ്മേളന വിശേഷങ്ങൾ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-lg leading-relaxed text-ink/75",
							children: "സമ്മേളന ദിവസത്തെ പ്രധാന ആകർഷണങ്ങൾ"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
					className: "relative mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute left-6 top-2 bottom-2 w-[3px] rounded-full bg-berry/25 sm:left-1/2 sm:-translate-x-1/2"
					}), PROGRAMS.map(({ icon: Icon, ...p }, i) => {
						const right = i % 2 === 1;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `relative pb-12 pl-20 last:pb-0 sm:w-1/2 ${right ? "sm:ml-auto sm:pl-16 sm:pr-0 sm:text-left" : "sm:pl-0 sm:pr-16 sm:text-right"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `${p.tint} absolute top-1 grid h-14 w-14 place-items-center rounded-2xl ring-poster transition-transform duration-300 ${right ? "left-0 sm:left-[-1.75rem]" : "left-0 sm:left-auto sm:right-[-1.75rem]"}`,
									style: { transform: `rotate(${right ? 4 : -4}deg)` },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-7 w-7",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "type-display text-[clamp(1.4rem,5vw,2.1rem)] text-ink",
											children: p.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-lg leading-relaxed text-ink/75",
											children: p.text
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											className: `mt-3 block h-[3px] w-14 rounded-full bg-berry/40 transition-all duration-300 group-hover:w-24 group-hover:bg-berry ${right ? "" : "sm:ml-auto"}`
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									"aria-hidden": true,
									className: `float-slow absolute top-0 hidden h-5 w-5 text-mango sm:block ${right ? "right-4" : "left-4"}`
								})
							]
						}, p.title);
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurveDivider, { color: "var(--cream)" })
		]
	});
}
var peace_dove_default = "/assets/peace-dove-fV18FWwQ.webp";
function Peace() {
	const reveal = useReveal();
	const tilt = usePointerTilt();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-16 sm:py-28",
		style: { backgroundImage: "linear-gradient(180deg, var(--sky) 0%, color-mix(in oklab, var(--sky) 55%, var(--cream)) 62%, var(--cream) 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[8%] top-14 block h-24 w-56 rounded-full bg-cream/45 blur-md" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-[12%] top-28 block h-16 w-40 rounded-full bg-cream/35 blur-md" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-[38%] top-6 block h-14 w-36 rounded-full bg-cream/30 blur-md" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dove, { className: "float-slow absolute right-[16%] top-16 h-14 w-20 text-cream" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dove, { className: "float-fast absolute left-[14%] top-40 h-9 w-14 text-cream/80" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				"aria-hidden": true,
				viewBox: "0 0 1440 160",
				preserveAspectRatio: "none",
				className: "pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full text-ink/15 sm:h-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "currentColor",
					d: "M0 160V96h60V64h40v32h50V40h46v56h54V70h44v26h60V52h50v44h58V74h52v22h56V44h48v52h60V72h50v24h56V50h52v46h60V80h48v16h60V60h50v36h60v64z"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: reveal.ref,
				className: `${reveal.className} relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "order-2 lg:order-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-display-tight block text-[clamp(2.1rem,8.4vw,4.4rem)] text-cream text-poster-shadow",
							children: "സമാധാനത്തിനും"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-display-tight block text-[clamp(2.1rem,8.4vw,4.4rem)] text-ink",
							children: "സൗഹൃദത്തിനും"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-display-tight block text-[clamp(2.1rem,8.4vw,4.4rem)] text-berry text-sticker",
							children: "ഒരുമിച്ച്"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 max-w-xl space-y-4 text-lg leading-[1.95] text-ink/80 sm:text-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ink",
							children: "യുദ്ധത്തിന്റെ നിഴലുകൾക്കിടയിലും കുട്ടികൾ സ്വപ്നം കാണുന്നത് സമാധാനമാണ്. ആ സ്വപ്നത്തിന് കൂട്ടായി നിൽക്കാം."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "ഒലിവിന്റെ ചില്ലയും വെളുത്ത പ്രാവും ഓർമ്മിപ്പിക്കുന്നത് ഒന്നുമാത്രം — സ്നേഹമാണ് നമ്മുടെ ഭാഷ." })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative order-1 lg:order-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute left-1/2 top-1/2 -z-10 block h-[94%] w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cream/60"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: peace_dove_default,
						alt: "ഒലിവ് ചില്ലയുമായി പറക്കുന്ന വെളുത്ത പ്രാവും കൈകോർത്തു നിൽക്കുന്ന രണ്ട് കുട്ടികളും",
						width: 1280,
						height: 1280,
						loading: "lazy",
						decoding: "async",
						className: "mx-auto w-full max-w-lg rounded-[50%] shadow-[0_30px_60px_-30px_rgba(20,30,60,0.55)]",
						style: { transform: `translate3d(${tilt.x * -6}px, ${tilt.y * -5}px, 0)` }
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurveDivider, { color: "var(--festival)" })
		]
	});
}
/** Swap these entries to change the gallery images. */
var IMAGES = [
	{
		src: "/assets/gallery-1-DJkk457q.webp",
		alt: "വേദിയിൽ കലാപരിപാടി അവതരിപ്പിക്കുന്ന കുട്ടികൾ",
		caption: "വേദിയിലെ വിസ്മയം",
		w: 900,
		h: 1200,
		span: "sm:col-span-3 sm:row-span-2",
		tilt: "-1.2deg"
	},
	{
		src: "/assets/gallery-2-Drz5oz_K.webp",
		alt: "ഒരുമിച്ച് വലിയ ചുവർചിത്രം വരയ്ക്കുന്ന കുട്ടികൾ",
		caption: "നിറങ്ങളുടെ ലോകം",
		w: 1200,
		h: 900,
		span: "sm:col-span-3",
		tilt: "1deg"
	},
	{
		src: "/assets/gallery-3-CcrC0Vob.webp",
		alt: "കൊടികളുമായി ആഹ്ലാദ പ്രകടനത്തിൽ പങ്കെടുക്കുന്ന കുട്ടികൾ",
		caption: "ഒരുമയുടെ കൊടികൾ",
		w: 1e3,
		h: 1e3,
		span: "sm:col-span-3",
		tilt: "-0.8deg"
	},
	{
		src: "/assets/gallery-4-D3SpXwKK.webp",
		alt: "മരത്തണലിൽ ഒരുമിച്ച് പുസ്തകം വായിക്കുന്ന കുട്ടികൾ",
		caption: "വായനയുടെ തണൽ",
		w: 900,
		h: 1100,
		span: "sm:col-span-2",
		tilt: "1.4deg"
	},
	{
		src: "/assets/gallery-5-Dq_bCKvH.webp",
		alt: "അലങ്കരിച്ച വേദിയിൽ ഗാനമാലപിക്കുന്ന കുട്ടികൾ",
		caption: "പാട്ടിന്റെ താളം",
		w: 1200,
		h: 800,
		span: "sm:col-span-2",
		tilt: "-1deg"
	},
	{
		src: "/assets/gallery-6-BmmIyEk2.webp",
		alt: "നാട്ടുമുറ്റത്ത് കളിക്കുന്ന കുട്ടികൾ",
		caption: "കളിയുടെ മുറ്റം",
		w: 1e3,
		h: 1200,
		span: "sm:col-span-2",
		tilt: "0.9deg"
	}
];
function Gallery() {
	const reveal = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "ormakal",
		className: "relative overflow-hidden bg-cream py-16 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "dotgrid absolute right-8 top-12 block h-36 w-36 text-berry/20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: reveal.ref,
				className: `${reveal.className} relative mx-auto max-w-6xl px-5 sm:px-6`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "type-display mt-3 text-[clamp(2rem,7.5vw,3.8rem)] text-berry text-poster-shadow",
								children: "ഓർമ്മകളിലേക്ക്"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-lg leading-relaxed text-ink/75",
								children: "കഴിഞ്ഞ സംഗമങ്ങളിലെ ചിരികളും നിറങ്ങളും"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 sm:grid-cols-6",
						children: IMAGES.map((img) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `group relative overflow-hidden rounded-2xl bg-sun ring-poster transition-transform duration-500 hover:rotate-0 hover:-translate-y-1.5 ${img.span}`,
							style: { transform: `rotate(${img.tilt})` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img.src,
									alt: img.alt,
									width: img.w,
									height: img.h,
									loading: "lazy",
									decoding: "async",
									sizes: "(min-width: 640px) 33vw, 100vw",
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-80"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 shrink-0 text-mango" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg font-bold text-cream",
										children: img.caption
									})]
								})
							]
						}, img.caption))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-center font-ui text-sm text-ink/50",
						children: "ചിത്രങ്ങൾ പിന്നീട് യഥാർത്ഥ സമ്മേളന ചിത്രങ്ങൾ കൊണ്ട് മാറ്റാവുന്നതാണ്"
					})
				]
			})
		]
	});
}
function Game() {
	const reveal = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "game",
		className: "relative overflow-hidden py-16 sm:py-24",
		style: { backgroundImage: "linear-gradient(180deg, var(--cream) 0%, var(--mango) 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: reveal.ref,
				className: `${reveal.className} relative mx-auto max-w-5xl px-5 sm:px-6`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-display mt-3 text-[clamp(2rem,7.5vw,3.8rem)] text-berry text-poster-shadow",
							children: "കളികൾ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-lg leading-relaxed text-ink/75",
							children: "ചിത്രം ചേർത്ത് വയ്ക്കാം"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://interacty.me/projects/bfb0db2fbae646a2",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-berry px-10 py-5 font-bold text-cream ring-poster transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-berry",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-white/20 translate-y-full transition-transform group-hover:translate-y-0" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gamepad2, { className: "h-6 w-6 relative z-10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative z-10 text-xl tracking-wide uppercase",
								children: "Play Game"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurveDivider, { color: "var(--sun)" })
		]
	});
}
var MAPS_URL = "https://maps.app.goo.gl/rUMkccbTZhMd46Kx5?g_st=aw";
function Location() {
	const reveal = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "sthalam",
		className: "relative overflow-hidden py-16 sm:py-24",
		style: { backgroundImage: "linear-gradient(150deg, var(--festival) 0%, var(--festival-deep) 60%, var(--mango) 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "spin-slow absolute -left-20 bottom-10 block h-56 w-56 rounded-full border-[12px] border-dotted border-cream/30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: reveal.ref,
				className: `${reveal.className} relative mx-auto grid max-w-6xl items-stretch gap-8 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-[2rem] bg-cream p-8 ring-poster sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "type-display-tight mt-4 text-[clamp(2rem,8vw,3.6rem)] text-berry text-poster-shadow",
							children: "Kottayam Angadi, Kannur"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-lg leading-[1.9] text-ink/80",
							children: "The event venue is located at Kottayam Angadi, Kannur. More details will be announced soon."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-sun/70 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
									className: "flex items-center gap-2 font-ui text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink/55",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, {
										className: "h-4 w-4 text-berry",
										"aria-hidden": true
									}), "Date"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "type-display mt-1 text-xl text-ink",
									children: "September 06, 2026"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-sun/70 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
									className: "flex items-center gap-2 font-ui text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink/55",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "h-4 w-4 text-sky",
										"aria-hidden": true
									}), "Venue"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "type-display mt-1 text-xl text-ink",
									children: "Kottayam Angadi, Kannur"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: MAPS_URL,
							target: "_blank",
							rel: "noreferrer noopener",
							"aria-label": "Navigate — Open Kottayam Angadi, Kannur in Google Maps (New Tab)",
							className: "mt-8 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-berry px-7 py-4 font-display text-lg font-bold text-berry-foreground ring-poster transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-ink focus-visible:ring-4 focus-visible:ring-berry/30 sm:inline-flex sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
								className: "h-5 w-5",
								"aria-hidden": true
							}), "Navigate"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-[350px] w-full overflow-hidden rounded-[2rem] bg-cream ring-poster h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Event Location",
						src: "https://maps.google.com/maps?q=GHSS%20Kottayam-Malabar,%20Kerala&hl=en&z=15&output=embed",
						className: "absolute inset-0 h-full w-full border-0",
						allowFullScreen: true,
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-ink/10" })]
				})]
			})
		]
	});
}
function FinalCta() {
	const reveal = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pb-0 pt-16 sm:pt-28",
		style: { backgroundImage: "radial-gradient(120% 90% at 50% 8%, var(--sun) 0%, var(--festival) 42%, var(--festival-deep) 78%, var(--mango) 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bunting, { className: "top-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, { opacity: .8 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower, { className: "float-slow absolute left-[10%] top-28 h-10 w-10 text-berry/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "float-fast absolute right-[12%] top-32 h-9 w-9 text-grape/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: reveal.ref,
				className: `${reveal.className} relative mx-auto max-w-4xl px-5 text-center sm:px-6`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, { className: "justify-center" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-display-tight block text-[clamp(2.4rem,11vw,5.6rem)] text-berry text-poster-shadow",
							children: "നമ്മൾ ഒരുമിച്ച്"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-display-tight block text-[clamp(2.4rem,11vw,5.6rem)] text-grape text-sticker",
							children: "ആഘോഷിക്കാം!"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-7 max-w-2xl text-balance text-lg leading-[1.95] text-ink/85 sm:text-xl",
						children: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനത്തിലേക്ക് എല്ലാവർക്കും ഹൃദയം നിറഞ്ഞ സ്വാഗതം"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "mt-10 inline-block rounded-3xl bg-berry px-10 py-5 font-display text-xl font-bold text-berry-foreground ring-poster transition-transform hover:-translate-y-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:text-2xl",
						children: "സമ്മേളനത്തിൽ കാണാം"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				loading: "lazy",
				decoding: "async",
				src: hero_children_default,
				alt: "",
				"aria-hidden": true,
				width: 1280,
				height: 1024,
				loading: "lazy",
				decoding: "async",
				className: "relative mx-auto mt-10 block w-full max-w-3xl translate-y-2 drop-shadow-[0_20px_30px_rgba(60,30,0,0.18)]"
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden bg-ink pb-[calc(3.5rem+env(safe-area-inset-bottom))] pt-12 text-center text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "dotgrid absolute inset-x-0 top-0 h-24 text-cream/10"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-4xl px-5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "type-display text-[clamp(1.4rem,5.5vw,2.4rem)] text-sun",
					children: "ബാലസംഘം പിണറായി ഏരിയ സമ്മേളനം"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-ui text-lg text-cream/75",
					children: "2026 സെപ്റ്റംബർ 6 · കോട്ടയം അങ്ങാടി, കണ്ണൂർ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex justify-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.instagram.com/balasangham_pinarayi/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-berry focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream",
							"aria-label": "Instagram",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.facebook.com/share/1CA9ncygHb/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-berry focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream",
							"aria-label": "Facebook",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.threads.net/@balasangham_pinarayi",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "grid h-12 w-12 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-berry focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream",
							"aria-label": "Threads",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "24",
								height: "24",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 12V13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13V11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11V12Z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 13C10 14.1046 10.8954 15 12 15H12.5C14.433 15 16 13.433 16 11.5C16 9.567 14.433 8 12.5 8H12C9.23858 8 7 10.2386 7 13C7 15.7614 9.23858 18 12 18H14.5" })
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotRow, { className: "mt-6 justify-center" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://linktr.ee/DhyandevRTX",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group inline-flex min-h-[44px] items-center gap-1 rounded-full px-3 py-1.5 font-ui text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun/70 sm:text-sm",
						"aria-label": "Built by Dhyan (opens in a new tab)",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream/50 transition-colors group-hover:text-cream/65",
							children: "Built by"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-cream/80 transition-colors group-hover:text-cream",
							children: "Dhyan"
						})]
					})
				})
			]
		})]
	});
}
/** Mobile-only sticky bottom CTA, appears after the hero and hides near the footer. */
function MobileCta() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const y = window.scrollY;
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setShow(y > window.innerHeight * .7 && y < max - 320);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `fixed inset-x-0 bottom-0 z-40 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] transition-all duration-300 md:hidden ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: "#sthalam",
			className: "flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-berry px-5 text-center font-display text-lg font-bold leading-snug text-berry-foreground ring-poster focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
				className: "h-5 w-5 shrink-0",
				"aria-hidden": true
			}), "സമ്മേളനത്തിലേക്ക് സ്വാഗതം"]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoreMessage, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Peace, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Details, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Programs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Game, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
		]
	});
}
//#endregion
export { Index as component };
