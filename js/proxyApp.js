import { computed, createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const proxyConfigurations = [
  {
    name: 'Page Request',
    url: 'selection4.html',
    description: 'Submit a site or game request for review by the GoldenNetwork staff team.',
    type: 'Support',
    tags: ['request', 'form']
  },
  {
    name: 'Local Proxy V2',
    url: 'mini.php',
    description: 'Modern local proxy with TLS support and the fastest response times for most sites.',
    type: 'Local Proxy',
    status: { text: 'Running', variant: 'success' },
    tags: ['local', 'proxy', 'tls']
  },
  {
    name: 'CensorDodge',
    url: 'local.html',
    description: 'Classic PHP proxy that emphasises compatibility with legacy school filtering systems.',
    type: 'Local Proxy',
    status: { text: 'Running', variant: 'success' },
    tags: ['local', 'php', 'legacy']
  },
  {
    name: 'Local PHP-Proxy',
    url: 'local-2.html',
    description: 'Alternative PHP-based proxy that balances performance with stability.',
    type: 'Local Proxy',
    status: { text: 'Running', variant: 'success' },
    tags: ['local', 'php']
  },
  {
    name: 'Local YouTube Proxy',
    url: 'youtube.html',
    description: 'Optimised proxy specifically tuned for YouTube playback and media streaming.',
    type: 'Media Proxy',
    status: { text: 'Running', variant: 'success' },
    tags: ['youtube', 'media', 'video']
  },
  {
    name: 'External Server #1: Muun',
    url: 'externalserver1.html',
    description: 'Externally hosted Muun proxy instance offering resilient access during local outages.',
    type: 'External Proxy',
    status: { text: 'Running', variant: 'success' },
    tags: ['external', 'muun']
  },
  {
    name: 'External Server #2: Node Unblocker',
    url: 'externalserver2.html',
    description: 'Node Unblocker deployment that delivers a wide range of site compatibility.',
    type: 'External Proxy',
    status: { text: 'Running', variant: 'success' },
    tags: ['external', 'node', 'proxy']
  }
];

const normalise = (value) => value.toLowerCase();

const mountProxyApp = (mountSelector) => {
  const mountPoint = document.querySelector(mountSelector);
  if (!mountPoint) {
    return;
  }

  const totalCount = proxyConfigurations.length;

  createApp({
    setup() {
      const searchTerm = ref('');

      const filteredProxies = computed(() => {
        const query = normalise(searchTerm.value.trim());
        if (!query) {
          return proxyConfigurations;
        }

        return proxyConfigurations.filter((proxy) => {
          const haystack = [proxy.name, proxy.type, proxy.description, ...(proxy.tags ?? [])]
            .filter(Boolean)
            .map((entry) => normalise(entry));

          return haystack.some((entry) => entry.includes(query));
        });
      });

      const visibleCount = computed(() => filteredProxies.value.length);
      const hasResults = computed(() => visibleCount.value > 0);

      const getStatusClass = (variant) => {
        if (variant === 'success') {
          return 'badge-soft-success';
        }
        return 'badge-soft-success';
      };

      const clearSearch = () => {
        searchTerm.value = '';
      };

      return {
        clearSearch,
        filteredProxies,
        getStatusClass,
        hasResults,
        searchTerm,
        totalCount,
        visibleCount
      };
    },
    template: /* html */ `
      <div class="content-card text-white h-100 d-flex flex-column gap-4">
        <div>
          <label class="form-label text-white-50 fw-semibold" for="proxy-search">Search proxy options</label>
          <input
            id="proxy-search"
            class="form-control form-control-lg"
            type="search"
            placeholder="Filter by name, type, or capability"
            v-model.trim="searchTerm"
            autocomplete="off"
          />
          <p class="small text-white-50 mb-0 mt-2">
            Showing {{ visibleCount }} of {{ totalCount }} options
          </p>
        </div>

        <div v-if="hasResults" class="hero-button-group">
          <a
            v-for="proxy in filteredProxies"
            :key="proxy.name"
            class="btn btn-outline-white btn-lg btn-status text-start"
            :href="proxy.url"
          >
            <span class="flex-grow-1">
              <span class="d-block fw-semibold">{{ proxy.name }}</span>
              <span class="d-block small text-white-50">{{ proxy.description }}</span>
            </span>
            <span
              v-if="proxy.status"
              class="ms-3"
              :class="getStatusClass(proxy.status.variant)"
            >
              {{ proxy.status.text }}
            </span>
          </a>
        </div>

        <div v-else class="text-center py-5">
          <p class="lead mb-3">No proxies match that search just yet.</p>
          <button class="btn btn-outline-white btn-lg" type="button" @click="clearSearch">
            Clear search
          </button>
        </div>
      </div>
    `
  }).mount(mountPoint);
};

mountProxyApp('#proxy-app');
