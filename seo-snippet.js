// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.doggydaycare81147.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.doggydaycare81147.com/","title_tag":"Dog Daycare Pagosa Springs | Doggy Daycare 81147","meta_description":"Doggy Daycare 81147 offers dog daycare, dog boarding and grooming in Pagosa Springs, CO. Safe pet socialization, exercise and care while you work or travel."},{"page_url":"https://www.doggydaycare81147.com/about","title_tag":"Dog Daycare Pagosa Springs | About Doggy Daycare 81147","meta_description":"Learn why local dog owners trust Doggy Daycare 81147 in Pagosa Springs for caring dog daycare, overnight dog care, pet socialization and attentive staff."},{"page_url":"https://www.doggydaycare81147.com/boarding-daycare","title_tag":"Dog Boarding Pagosa Springs | Doggy Daycare 81147","meta_description":"Safe, fun dog boarding and doggy day care in Pagosa Springs. Overnight dog care, dog exercise and socialization so your furry friend enjoys a vacation too."},{"page_url":"https://www.doggydaycare81147.com/grooming","title_tag":"Dog Grooming Pagosa Springs | Doggy Daycare 81147","meta_description":"Professional dog grooming in Pagosa Springs at Doggy Daycare 81147. Bath, blow out, nail trim, brush and more. Appointment only—call to schedule today."},{"page_url":"https://www.doggydaycare81147.com/contact","title_tag":"Dog Daycare Pagosa Springs | Contact Doggy Daycare 81147","meta_description":"Contact Doggy Daycare 81147 in Pagosa Springs for dog daycare, dog boarding and grooming. Book your pup’s stay today by phone, email or contact form."}],"keywords":["Dog Daycare Pagosa Springs","Dog Boarding Pagosa Springs","Dog Grooming Pagosa Springs","Doggy Day Care","Pet Socialization Pagosa Springs","Overnight Dog Care","Dog Exercise Pagosa Springs","Canine Training Pagosa Springs","Pet Care Services","Furry Friend Boarding"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.doggydaycare81147.com/#localbusiness",
  "name": "Doggy Daycare 81147",
  "url": "https://www.doggydaycare81147.com/",
  "description": "Doggy Day Care 81147 is a premier dog boarding, daycare, and grooming facility in Pagosa Springs, Colorado. We treat your dogs like our own and provide safe, fun socialization, overnight boarding, and grooming services.",
  "image": "https://static.wixstatic.com/media/c1cbf6_5d155aed04174acdb91fb36772b768bd~mv2.png/v1/crop/x_152,y_152,w_1743,h_1743/fill/w_233,h_233,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/DDC%20Logo%20Transparent%20Background.png",
  "logo": "https://static.wixstatic.com/media/c1cbf6_5d155aed04174acdb91fb36772b768bd%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/c1cbf6_5d155aed04174acdb91fb36772b768bd%7Emv2.png",
  "email": "mailto:jeffrey@doggydaycare81147.com",
  "telephone": "+1-970-264-9111",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "151 Great West Avenue",
    "addressLocality": "Pagosa Springs",
    "addressRegion": "CO",
    "postalCode": "81147",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.269,
    "longitude": -107.01
  },
  "areaServed": {
    "@type": "City",
    "name": "Pagosa Springs"
  },
  "sameAs": [],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "07:30",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "slogan": "We treat your dogs like our own",
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Dog Boarding",
      "description": "Safe and fun overnight dog boarding in Pagosa Springs, CO. Large cozy suites, regular cleaning, and professional, insured carers.",
      "price": "50",
      "priceCurrency": "USD",
      "url": "https://www.doggydaycare81147.com/boarding-daycare"
    },
    {
      "@type": "Offer",
      "name": "Dog Daycare - Half Day",
      "description": "Less than 5 hours of dog daycare including playtime and a feeding.",
      "price": "29",
      "priceCurrency": "USD",
      "url": "https://www.doggydaycare81147.com/boarding-daycare"
    },
    {
      "@type": "Offer",
      "name": "Dog Daycare - Full Day",
      "description": "5 - 10 hours of dog daycare including playtime, socialization, and fun while reinforcing proper social manners.",
      "price": "39",
      "priceCurrency": "USD",
      "url": "https://www.doggydaycare81147.com/boarding-daycare"
    },
    {
      "@type": "Offer",
      "name": "Dog Daycare Punch Card - Full Day",
      "description": "Full day punch card with 11 punches for dog daycare.",
      "price": "360",
      "priceCurrency": "USD",
      "url": "https://www.doggydaycare81147.com/boarding-daycare"
    },
    {
      "@type": "Offer",
      "name": "Dog Daycare Punch Card - Half Day",
      "description": "Half day punch card with 11 punches for dog daycare.",
      "price": "280",
      "priceCurrency": "USD",
      "url": "https://www.doggydaycare81147.com/boarding-daycare"
    },
    {
      "@type": "Offer",
      "name": "Dog Daycare Hourly Rate",
      "description": "Hourly dog daycare rate.",
      "price": "4.25",
      "priceCurrency": "USD",
      "url": "https://www.doggydaycare81147.com/boarding-daycare"
    },
    {
      "@type": "Offer",
      "name": "Dog Food",
      "description": "In-house dog food for boarded dogs.",
      "price": "2.25",
      "priceCurrency": "USD",
      "priceUnit": "C62",
      "url": "https://www.doggydaycare81147.com/boarding-daycare"
    },
    {
      "@type": "Offer",
      "name": "Dog Grooming - Basic Grooming Services",
      "description": "Basic grooming services including bath, blow out, ear cleaning, brush, nail trim, and sanitary trim. Appointment only.",
      "url": "https://www.doggydaycare81147.com/grooming"
    }
  ],
  "serviceType": "Dog boarding, dog daycare, and dog grooming services",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Doggy Daycare 81147 Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Dog Boarding",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Overnight Dog Boarding",
            "description": "Overnight boarding with large cozy suites, regular cleaning, and supervised play.",
            "price": "50",
            "priceCurrency": "USD",
            "url": "https://www.doggydaycare81147.com/boarding-daycare"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Dog Daycare",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Half Day Dog Daycare",
            "price": "29",
            "priceCurrency": "USD",
            "url": "https://www.doggydaycare81147.com/boarding-daycare"
          },
          {
            "@type": "Offer",
            "name": "Full Day Dog Daycare",
            "price": "39",
            "priceCurrency": "USD",
            "url": "https://www.doggydaycare81147.com/boarding-daycare"
          },
          {
            "@type": "Offer",
            "name": "Full Day Daycare Punch Card (11 punches)",
            "price": "360",
            "priceCurrency": "USD",
            "url": "https://www.doggydaycare81147.com/boarding-daycare"
          },
          {
            "@type": "Offer",
            "name": "Half Day Daycare Punch Card (11 punches)",
            "price": "280",
            "priceCurrency": "USD",
            "url": "https://www.doggydaycare81147.com/boarding-daycare"
          },
          {
            "@type": "Offer",
            "name": "Hourly Daycare Rate",
            "price": "4.25",
            "priceCurrency": "USD",
            "url": "https://www.doggydaycare81147.com/boarding-daycare"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Dog Grooming",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Basic Dog Grooming",
            "description": "Bath, blow out, ear cleaning, brush, nail trim, and sanitary trim. By appointment only.",
            "url": "https://www.doggydaycare81147.com/grooming"
          }
        ]
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
