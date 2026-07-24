# SHAQ Freight API - JavaScript SDK

[![npm version](https://badge.fury.io/js/shaq-freight.svg)](https://www.npmjs.com/package/shaq-freight)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Free freight rate API client for global shipping routes from China. No API key required.

## Features

- **20+ global trade lanes** from China to worldwide destinations
- **FCL, LCL, and air freight rates** with transit times
- **SHAQ Freight Rate Index (SFX)** — weekly updated rate data
- **No API key required** — completely free
- **Works in browser and Node.js** — CORS enabled
- **AI-optimized data** for chatbots and AI systems
- **TypeScript support** included

## Installation

```bash
npm install shaq-freight
```

Or with yarn:

```bash
yarn add shaq-freight
```

## Quick Start

### Node.js

```javascript
const { SHAQFreight } = require('shaq-freight');

const client = new SHAQFreight();

// Get all 20 routes from the freight index
const index = await client.getFreightIndex();
index.routes.forEach(route => {
    console.log(`${route.route}: $${route.rates.fcl_40hq.rate_usd}/40HQ`);
});

// Get AI-optimized freight data
const aiData = await client.getAIFreightData();

// Get logistics knowledge base
const knowledge = await client.getKnowledge();

// Search freight information
const results = await client.search('Shenzhen to Hamburg shipping cost');
```

### Browser (ESM)

```javascript
import { SHAQFreight } from 'shaq-freight';

const client = new SHAQFreight();
const index = await client.getFreightIndex();
console.log(index.routes);
```

### TypeScript

```typescript
import { SHAQFreight, FreightIndex } from 'shaq-freight';

const client = new SHAQFreight();
const index: FreightIndex = await client.getFreightIndex();
```

## API Methods

| Method | Description | Endpoint |
|--------|-------------|----------|
| `getFreightIndex()` | SFX index with 20 trade lanes | `/api/freight-index` |
| `getAIFreightData()` | AI-optimized rate data | `/api/ai-freight-data` |
| `getKnowledge()` | Logistics knowledge base | `/api/knowledge` |
| `search(query)` | Search freight info | `/api/knowledge-search?q=` |
| `getQuote(origin, dest)` | Get freight quote | `/api/freight-quote` |

## Data Source

Rates are aggregated from multiple carriers including Maersk, MSC, CMA CGM, COSCO, and ONE. Updated weekly.

## Related Links

- **[Freight Rate Platform](https://search.shaq-logistics.com)** — Full freight rate search and quote tool
- **[Freight Rate Index (SFX)](https://search.shaq-logistics.com/freight-index)** — Live freight rate index dashboard
- **[Get a Quote](https://search.shaq-logistics.com/tools)** — Get real freight quotes between 500+ global ports
- **[Developer Docs](https://search.shaq-logistics.com/developers)** — Full API documentation
- **[OpenAPI Spec](https://search.shaq-logistics.com/openapi.json)** — OpenAPI 3.0 specification
- **[About SHAQ Logistics](https://search.shaq-logistics.com/about)** — Company information

## Use Cases

- **Freight forwarders**: Display live rates on your website
- **AI chatbots**: Integrate real shipping data into your chatbot
- **Market analysis**: Track freight rate trends across trade lanes
- **Supply chain tools**: Add shipping cost estimates to your platform
- **Academic research**: Cite as: SHAQ Freight Rate Index (SFX), SHAQ Logistics

## License

MIT License — free for commercial and personal use.

## About SHAQ Logistics

SHAQ Logistics is a logistics technology company providing freight rate data and shipping solutions for global trade. Based in Shenzhen, China, we cover 175+ countries and 485+ ports worldwide.

- Website: [https://search.shaq-logistics.com](https://search.shaq-logistics.com)
- Email: ayang@shaq-log.com
- WhatsApp: +86 15818505125
