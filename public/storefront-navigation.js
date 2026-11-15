(function () {
  const routes = new Set([
    "home",
    "shop-01",
    "shop-02",
    "product-details",
    "dashboard",
    "order-history",
    "order-details",
    "account-setting",
    "shopping-cart",
    "checkout",
    "wishlist",
    "sign-in",
    "create-account",
    "forgot-password",
    "faq",
    "about",
    "contact",
    "become-a-vendor",
    "blog-list",
    "single-blog",
    "track-order",
    "order-success",
    "terms",
    "privacy",
  ]);

  document.addEventListener(
    "click",
    function (event) {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!link || link.target || link.hasAttribute("download")) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash) return;

      const route = url.pathname.replace(/\/+$/, "").split("/").pop() || "home";
      if (!routes.has(route)) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      document.querySelectorAll(".drawer-screen.open").forEach(function (drawer) {
        drawer.classList.remove("open");
      });
      window.history.pushState({}, "", url.pathname + url.search);
      window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
    },
    true,
  );
})();
