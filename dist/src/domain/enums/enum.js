"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryMovementType = exports.ActiveStatus = exports.Role = void 0;
const graphql_1 = require("@nestjs/graphql");
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["MANAGER"] = "manager";
    Role["ADMIN"] = "admin";
    Role["STAFF"] = "staff";
})(Role || (exports.Role = Role = {}));
var ActiveStatus;
(function (ActiveStatus) {
    ActiveStatus["active"] = "active";
    ActiveStatus["inactive"] = "inactive";
    ActiveStatus["all"] = "all";
})(ActiveStatus || (exports.ActiveStatus = ActiveStatus = {}));
(0, graphql_1.registerEnumType)(ActiveStatus, {
    name: 'ActiveStatus',
    description: 'Filter for active, inactive, or all items',
});
var InventoryMovementType;
(function (InventoryMovementType) {
    InventoryMovementType["IN"] = "in";
    InventoryMovementType["OUT"] = "out";
    InventoryMovementType["TRANSFER"] = "transfer";
    InventoryMovementType["ADJUST"] = "adjust";
})(InventoryMovementType || (exports.InventoryMovementType = InventoryMovementType = {}));
(0, graphql_1.registerEnumType)(InventoryMovementType, {
    name: 'InventoryMovementType',
    description: 'Type of inventory movement: in, out, transfer, or adjust',
});
//# sourceMappingURL=enum.js.map