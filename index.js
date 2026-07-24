/**
 * SHAQ Freight API - JavaScript SDK
 * Free freight rate data for global shipping routes from China.
 * No API key required.
 *
 * @author SHAQ Logistics <ayang@shaq-log.com>
 * @license MIT
 * @version 1.0.0
 * @see https://search.shaq-logistics.com/developers
 */

const BASE_URL = 'https://search.shaq-logistics.com';
const VERSION = '1.0.0';

class SHAQFreight {
    /**
     * Create a SHAQ Freight API client.
     * @param {string} baseUrl - API base URL (default: https://search.shaq-logistics.com)
     */
    constructor(baseUrl = BASE_URL) {
        this.baseUrl = baseUrl.replace(/\/+$/, '');
        this.version = VERSION;
    }

    /**
     * Make an HTTP request to the API.
     * @private
     */
    async _request(path, params = {}) {
        const url = new URL(this.baseUrl + path);
        Object.keys(params).forEach(key => {
            if (params[key] !== undefined && params[key] !== null) {
                url.searchParams.append(key, params[key]);
            }
        });

        const response = await fetch(url.toString(), {
            headers: {
                'Accept': 'application/json',
                'User-Agent': `shaq-freight-js/${VERSION}`,
            },
        });

        if (!response.ok) {
            throw new Error(`API error ${response.status}: ${response.statusText}`);
        }

        return response.json();
    }

    /**
     * Get the SHAQ Freight Rate Index (SFX).
     * Returns 20 global trade lanes from China with FCL 20GP,
     * FCL 40HQ, LCL per CBM, and air freight per kg rates.
     * @returns {Promise<Object>} Freight index data
     * @see https://search.shaq-logistics.com/freight-index
     */
    async getFreightIndex() {
        return this._request('/api/freight-index');
    }

    /**
     * Get AI-optimized freight rate data.
     * Returns 9 regional shipping routes with detailed rate ranges,
     * transit times, trends, and notes.
     * @returns {Promise<Object>} AI freight data
     */
    async getAIFreightData() {
        return this._request('/api/ai-freight-data');
    }

    /**
     * Get comprehensive logistics knowledge base.
     * Returns provider info, 20 topic guides, and AI endpoint URLs.
     * @returns {Promise<Object>} Knowledge base
     */
    async getKnowledge() {
        return this._request('/api/knowledge');
    }

    /**
     * Search the logistics knowledge base.
     * @param {string} query - Search query
     * @returns {Promise<Object>} Search results
     */
    async search(query) {
        return this._request('/api/knowledge-search', { q: query });
    }

    /**
     * Get a freight quote for a specific route.
     * @param {string} origin - Origin port or city
     * @param {string} destination - Destination port or city
     * @param {Object} options - Additional options
     * @returns {Promise<Object>} Quote details
     * @see https://search.shaq-logistics.com/tools
     */
    async getQuote(origin, destination, options = {}) {
        return this._request('/api/freight-quote', {
            origin,
            destination,
            ...options,
        });
    }

    /**
     * Search HS codes for customs classification.
     * @param {string} keyword - Product keyword
     * @returns {Promise<Object>} HS code results
     */
    async getHSCodes(keyword = '') {
        return this._request('/api/hs-codes', keyword ? { q: keyword } : {});
    }
}

// CommonJS export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SHAQFreight };
}

// ES module export
if (typeof exports !== 'undefined') {
    exports.SHAQFreight = SHAQFreight;
}

// Default export for ESM
export default SHAQFreight;
export { SHAQFreight };
