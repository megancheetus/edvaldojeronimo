/**
 * Edvaldo Jerônimo — Blog Widget Embeddable
 *
 * Usage:
 *   <div id="edvaldo-blog-widget" data-posts="3" data-theme="light"></div>
 *   <script src="https://edvaldojeronimo.com.br/widget/edvaldo-blog-widget.js"></script>
 *
 * Options (data attributes on the container div):
 *   data-posts   — Number of posts to show (default: 3, max: 10)
 *   data-theme   — "light" | "dark" | "auto" (default: "auto")
 *   data-target  — Custom container selector (default: "#edvaldo-blog-widget")
 *   data-base-url — Override base URL (default: detected from script src)
 */
(function () {
  "use strict";

  // ── Detect base URL from the script tag ──────────────────────────────────
  var scripts = document.querySelectorAll("script[src]");
  var baseUrl = "";
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf("edvaldo-blog-widget") !== -1) {
      baseUrl = scripts[i].src.replace(/\/widget\/edvaldo-blog-widget\.js.*$/, "");
      break;
    }
  }
  if (!baseUrl) baseUrl = "https://edvaldojeronimo.com.br";

  // ── Find container ───────────────────────────────────────────────────────
  var container =
    document.querySelector("[data-target]") ||
    document.getElementById("edvaldo-blog-widget");

  if (!container) {
    console.warn("[EdvaldoBlogWidget] Container #edvaldo-blog-widget not found.");
    return;
  }

  var maxPosts = parseInt(container.getAttribute("data-posts") || "3", 10);
  if (isNaN(maxPosts) || maxPosts < 1) maxPosts = 3;
  if (maxPosts > 10) maxPosts = 10;

  var theme = container.getAttribute("data-theme") || "auto";
  var overrideUrl = container.getAttribute("data-base-url");
  if (overrideUrl) baseUrl = overrideUrl.replace(/\/$/, "");

  // ── Styles (scoped via .ebw- prefix) ─────────────────────────────────────
  var CSS = [
    ".ebw-root{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;line-height:1.5;box-sizing:border-box}",
    ".ebw-root *,.ebw-root *::before,.ebw-root *::after{box-sizing:inherit}",

    /* Light theme (default) */
    ".ebw-root{--ebw-bg:#ffffff;--ebw-card:#ffffff;--ebw-border:#e5e7eb;--ebw-text:#1f2937;--ebw-muted:#6b7280;--ebw-accent:#2563eb;--ebw-accent-hover:#1d4ed8;--ebw-badge-bg:#f3f4f6;--ebw-badge-text:#374151;--ebw-shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06)}",

    /* Dark theme */
    ".ebw-dark{--ebw-bg:#0f172a;--ebw-card:#1e293b;--ebw-border:#334155;--ebw-text:#f1f5f9;--ebw-muted:#94a3b8;--ebw-accent:#60a5fa;--ebw-accent-hover:#93bbfc;--ebw-badge-bg:#334155;--ebw-badge-text:#cbd5e1;--ebw-shadow:0 1px 3px rgba(0,0,0,.3)}",

    /* Auto (prefers-color-scheme) */
    "@media(prefers-color-scheme:dark){.ebw-auto{--ebw-bg:#0f172a;--ebw-card:#1e293b;--ebw-border:#334155;--ebw-text:#f1f5f9;--ebw-muted:#94a3b8;--ebw-accent:#60a5fa;--ebw-accent-hover:#93bbfc;--ebw-badge-bg:#334155;--ebw-badge-text:#cbd5e1;--ebw-shadow:0 1px 3px rgba(0,0,0,.3)}}",

    ".ebw-root{background:var(--ebw-bg);color:var(--ebw-text);padding:0;margin:0}",

    /* Header */
    ".ebw-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--ebw-border)}",
    ".ebw-header-title{font-size:18px;font-weight:700;color:var(--ebw-text);margin:0}",
    ".ebw-header-link{font-size:13px;color:var(--ebw-accent);text-decoration:none;font-weight:500}",
    ".ebw-header-link:hover{color:var(--ebw-accent-hover);text-decoration:underline}",

    /* Grid */
    ".ebw-grid{display:grid;gap:16px;grid-template-columns:1fr}",
    "@media(min-width:640px){.ebw-grid{grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}}",

    /* Card */
    ".ebw-card{border:1px solid var(--ebw-border);border-radius:12px;overflow:hidden;background:var(--ebw-card);box-shadow:var(--ebw-shadow);transition:box-shadow .2s,transform .2s;text-decoration:none;color:inherit;display:block}",
    ".ebw-card:hover{box-shadow:0 4px 12px rgba(0,0,0,.12);transform:translateY(-2px)}",

    /* Thumbnail */
    ".ebw-thumb{width:100%;height:180px;object-fit:cover;display:block;background:var(--ebw-badge-bg)}",

    /* Card body */
    ".ebw-body{padding:16px}",
    ".ebw-badge{display:inline-block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;background:var(--ebw-badge-bg);color:var(--ebw-badge-text);border-radius:6px;padding:3px 8px;margin-bottom:8px}",
    ".ebw-title{font-size:16px;font-weight:700;line-height:1.3;color:var(--ebw-text);margin:0 0 8px}",
    ".ebw-excerpt{font-size:13px;color:var(--ebw-muted);line-height:1.5;margin:0 0 12px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}",
    ".ebw-meta{display:flex;align-items:center;gap:12px;font-size:12px;color:var(--ebw-muted)}",
    ".ebw-meta svg{width:14px;height:14px;flex-shrink:0}",

    /* Footer */
    ".ebw-footer{margin-top:12px;text-align:center;padding-top:8px}",
    ".ebw-branding{font-size:11px;color:var(--ebw-muted);text-decoration:none}",
    ".ebw-branding:hover{color:var(--ebw-accent)}",

    /* Loading / Error */
    ".ebw-loading{padding:32px;text-align:center;color:var(--ebw-muted);font-size:14px}",
    ".ebw-error{padding:24px;text-align:center;color:#ef4444;font-size:14px}",
  ].join("\n");

  // Inject styles
  if (!document.getElementById("ebw-styles")) {
    var style = document.createElement("style");
    style.id = "ebw-styles";
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  // ── Theme class ──────────────────────────────────────────────────────────
  var themeClass = theme === "dark" ? "ebw-dark" : theme === "light" ? "" : "ebw-auto";
  container.classList.add("ebw-root");
  if (themeClass) container.classList.add(themeClass);

  // ── Loading state ────────────────────────────────────────────────────────
  container.innerHTML = '<div class="ebw-loading">Carregando artigos...</div>';

  // ── Helpers ──────────────────────────────────────────────────────────────
  function formatDate(dateStr) {
    var d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  function clockIcon() {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
  }

  // ── Fetch & Render ───────────────────────────────────────────────────────
  var apiUrl = baseUrl + "/api/posts.json";

  fetch(apiUrl)
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json();
    })
    .then(function (data) {
      var posts = (data.posts || []).slice(0, maxPosts);
      var siteUrl = data.baseUrl || baseUrl;

      if (!posts.length) {
        container.innerHTML = '<div class="ebw-loading">Nenhum artigo encontrado.</div>';
        return;
      }

      var html = "";

      // Header
      html += '<div class="ebw-header">';
      html += '<h3 class="ebw-header-title">Blog — Dr. Edvaldo Jerônimo</h3>';
      html += '<a class="ebw-header-link" href="' + escapeHtml(siteUrl) + '/blog" target="_blank" rel="noopener noreferrer">Ver todos →</a>';
      html += "</div>";

      // Grid
      html += '<div class="ebw-grid">';
      posts.forEach(function (post) {
        var postUrl = siteUrl + "/blog/" + encodeURIComponent(post.slug || post.id);
        var excerpt = post.excerpt.length > 160 ? post.excerpt.slice(0, 160) + "..." : post.excerpt;

        html += '<a class="ebw-card" href="' + escapeHtml(postUrl) + '" target="_blank" rel="noopener noreferrer">';

        if (post.thumbnail) {
          html += '<img class="ebw-thumb" src="' + escapeHtml(post.thumbnail) + '" alt="' + escapeHtml(post.title) + '" loading="lazy" />';
        }

        html += '<div class="ebw-body">';
        html += '<span class="ebw-badge">' + escapeHtml(post.category) + "</span>";
        html += '<h4 class="ebw-title">' + escapeHtml(post.title) + "</h4>";
        html += '<p class="ebw-excerpt">' + escapeHtml(excerpt) + "</p>";
        html += '<div class="ebw-meta">';
        html += "<span>" + escapeHtml(formatDate(post.date)) + "</span>";
        html += "<span>" + clockIcon() + " " + post.readTime + " min</span>";
        html += "</div></div></a>";
      });
      html += "</div>";

      // Footer branding
      html += '<div class="ebw-footer">';
      html += '<a class="ebw-branding" href="' + escapeHtml(siteUrl) + '" target="_blank" rel="noopener noreferrer">edvaldojeronimo.com.br</a>';
      html += "</div>";

      container.innerHTML = html;
    })
    .catch(function (err) {
      console.error("[EdvaldoBlogWidget]", err);
      container.innerHTML = '<div class="ebw-error">Não foi possível carregar os artigos.</div>';
    });
})();
