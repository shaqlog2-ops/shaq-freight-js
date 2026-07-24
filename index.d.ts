/**
 * TypeScript type definitions for shaq-freight
 */

export interface RateDetail {
    rate_usd: number;
    currency: string;
    unit: string;
}

export interface Rates {
    fcl_20gp: RateDetail;
    fcl_40hq: RateDetail;
    lcl_per_cbm: RateDetail;
    air_per_kg: RateDetail;
}

export interface Route {
    route: string;
    origin_port: string;
    origin_country: string;
    destination_port: string;
    destination_country: string;
    transit_days: number;
    rates: Rates;
}

export interface FreightIndex {
    index_name: string;
    publisher: string;
    publisher_url: string;
    description: string;
    updated: string;
    currency: string;
    total_routes: number;
    data_source: string;
    license: string;
    api_url: string;
    routes: Route[];
}

export interface AIFreightData {
    data_type: string;
    schema_version: string;
    last_updated: string;
    provider: {
        name: string;
        url: string;
        whatsapp: string;
        email: string;
        amy_ai: string;
    };
    rates: any[];
    citation_format: string;
    usage_rights: string;
}

export interface KnowledgeBase {
    provider: any;
    topics: any[];
    ai_endpoints: any[];
}

export interface SearchResult {
    query: string;
    results: any[];
}

export interface QuoteResult {
    origin: string;
    destination: string;
    rates: Rates;
    transit_days: number;
}

export class SHAQFreight {
    constructor(baseUrl?: string);
    getFreightIndex(): Promise<FreightIndex>;
    getAIFreightData(): Promise<AIFreightData>;
    getKnowledge(): Promise<KnowledgeBase>;
    search(query: string): Promise<SearchResult>;
    getQuote(origin: string, destination: string, options?: any): Promise<QuoteResult>;
    getHSCodes(keyword?: string): Promise<any>;
}
