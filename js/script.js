/*
 * Portfolio page logic.
 *
 * All content lives in data/content.json — this file only loads it and
 * wires up the menu and the "active section" highlight in the nav.
 * You should not need to edit this file to change what the page says.
 */
const { createApp, nextTick } = Vue;

const CONTENT_URL = "data/content.json";

// Order sections appear on the page. Background stripes alternate in this order.
const SECTION_ORDER = ["about", "skills", "experience", "systems", "work", "education", "contact"];

const hasItems = (value) => Array.isArray(value) && value.length > 0;

createApp({
  data() {
    return {
      c: null, // the loaded content.json
      error: "",
      menuOpen: false,
      activeSection: "home",
      observer: null,
    };
  },

  computed: {
    // Systems and Projects share one card layout. A section with no items is hidden.
    projectBlocks() {
      if (!this.c) return [];
      return [
        { id: "systems", data: this.c.systems },
        { id: "work", data: this.c.projects },
      ].filter((block) => block.data && hasItems(block.data.items));
    },

    // Only sections that actually have content are shown (and linked in the nav).
    visibleSections() {
      const c = this.c;
      if (!c) return [];
      const shown = {
        about: c.about && (hasItems(c.about.paragraphs) || hasItems(c.about.facts)),
        skills: c.skills && hasItems(c.skills.groups),
        experience: c.experience && hasItems(c.experience.items),
        systems: c.systems && hasItems(c.systems.items),
        work: c.projects && hasItems(c.projects.items),
        education: c.education && (hasItems(c.education.items) || hasItems(c.education.certifications)),
        contact: !!c.contact,
      };
      return SECTION_ORDER.filter((id) => shown[id]);
    },

    navLinks() {
      const labelSource = {
        about: this.c?.about,
        skills: this.c?.skills,
        experience: this.c?.experience,
        systems: this.c?.systems,
        work: this.c?.projects,
        education: this.c?.education,
        contact: this.c?.contact,
      };
      return this.visibleSections.map((id) => ({
        id,
        label: labelSource[id]?.navLabel || id.charAt(0).toUpperCase() + id.slice(1),
      }));
    },

    telHref() {
      return (this.c?.contact?.phone || "").replace(/[^\d+]/g, "");
    },
  },

  async mounted() {
    try {
      // no-cache: after you edit content.json, visitors get the new version instead of a stale copy
      const res = await fetch(CONTENT_URL, { cache: "no-cache" });
      if (!res.ok) throw new Error(`${CONTENT_URL} returned HTTP ${res.status}`);
      this.c = await res.json();
    } catch (err) {
      this.error =
        location.protocol === "file:"
          ? "Open this site through a web server (e.g. GitHub Pages, or run `python -m http.server` in this folder) - browsers block loading data files from file://."
          : `Could not read ${CONTENT_URL}: ${err.message}. If you just edited it, check the JSON is valid (missing comma or quote?).`;
      return;
    }

    // Update the browser tab title and the search-engine description
    document.title = this.c.site.pageTitle || this.c.site.name;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && this.c.site.description) desc.setAttribute("content", this.c.site.description);

    document.addEventListener("keydown", this.onKeydown);

    await nextTick();
    this.watchSections();
  },

  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
    document.removeEventListener("keydown", this.onKeydown);
  },

  methods: {
    has: hasItems,

    isSoft(id) {
      // Alternate plain / tinted backgrounds between visible sections
      return this.visibleSections.indexOf(id) % 2 === 1;
    },

    watchSections() {
      this.observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) this.activeSection = visible.target.id;
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: [0.15, 0.3, 0.5, 0.7] }
      );
      document.querySelectorAll(".section-anchor").forEach((s) => this.observer.observe(s));
    },

    onKeydown(e) {
      if (e.key === "Escape") this.closeMenu();
    },

    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    closeMenu() {
      this.menuOpen = false;
    },
  },
}).mount("#app");
