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

  // ─── Zone ────────────────────────────────────────────
  ZONE_LIST: 'zone:list',
  ZONE_BY_ID: (id: string) => `zone:id:${id}`,
  ZONE_PATTERN: 'zone:*',

  // ─── Table ───────────────────────────────────────────
  TABLE_LIST: 'table:list',
  TABLE_BY_ID: (id: string) => `table:id:${id}`,
  TABLE_BY_ZONE: (zoneId: string) => `table:zone:${zoneId}`,
  TABLE_PATTERN: 'table:*',

  // ─── Menu Item ───────────────────────────────────────
  MENU_ITEM_LIST: 'menu_item:list',
  MENU_ITEM_BY_ID: (id: string) => `menu_item:id:${id}`,
  MENU_ITEM_BY_CATEGORY: (categoryId: string) => `menu_item:category:${categoryId}`,
  MENU_ITEM_PATTERN: 'menu_item:*',

  // ─── Menu Option ─────────────────────────────────────
  MENU_OPTION_BY_ITEM: (menuItemId: string) => `menu_option:item:${menuItemId}`,
  MENU_OPTION_BY_ID: (id: string) => `menu_option:id:${id}`,
  MENU_OPTION_PATTERN: 'menu_option:*',

  // ─── Order ───────────────────────────────────────────
  ORDER_LIST: 'order:list',
  ORDER_BY_ID: (id: string) => `order:id:${id}`,
  ORDER_BY_TABLE: (tableId: string) => `order:table:${tableId}`,
  ORDER_PATTERN: 'order:*',

  // ─── Payment ─────────────────────────────────────────
  PAYMENT_BY_ORDER: (orderId: string) => `payment:order:${orderId}`,
  PAYMENT_BY_ID: (id: string) => `payment:id:${id}`,
  PAYMENT_PATTERN: 'payment:*',
} as const;

