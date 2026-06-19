/**
 * Centralized Cache Key Management
 * 
 * รวม cache key patterns ไว้ที่เดียว เพื่อ:
 * 1. ป้องกัน key ซ้ำ/สะกดผิด
 * 2. ง่ายต่อการค้นหาว่า key ไหนถูกใช้ที่ไหน
 * 3. ง่ายต่อการ invalidate ทั้งกลุ่ม
 */
export const CacheKeys = {
  // ─── Currency ───────────────────────────────────────
  CURRENCY_LIST: 'currency:list',
  CURRENCY_BY_ID: (id: string) => `currency:id:${id}`,
  CURRENCY_PATTERN: 'currency:*',

  // ─── Category ───────────────────────────────────────
  CATEGORY_LIST: 'category:list',
  CATEGORY_BY_ID: (id: string) => `category:id:${id}`,
  CATEGORY_PATTERN: 'category:*',

  // ─── Zone (สำรองไว้สำหรับอนาคต) ──────────────────────
  ZONE_LIST: 'zone:list',
  ZONE_BY_ID: (id: string) => `zone:id:${id}`,
  ZONE_PATTERN: 'zone:*',
} as const;
