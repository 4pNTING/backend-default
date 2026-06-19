"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheKeys = void 0;
exports.CacheKeys = {
    CURRENCY_LIST: 'currency:list',
    CURRENCY_BY_ID: (id) => `currency:id:${id}`,
    CURRENCY_PATTERN: 'currency:*',
    CATEGORY_LIST: 'category:list',
    CATEGORY_BY_ID: (id) => `category:id:${id}`,
    CATEGORY_PATTERN: 'category:*',
    ZONE_LIST: 'zone:list',
    ZONE_BY_ID: (id) => `zone:id:${id}`,
    ZONE_PATTERN: 'zone:*',
};
//# sourceMappingURL=cache-keys.constants.js.map