"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
const bcrypt = __importStar(require("bcrypt"));
class LoginUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(request) {
        const user = await this.userRepository.findByUsername(request.username);
        if (!user) {
            return {
                success: false,
                message: 'Invalid username or password',
            };
        }
        const isPasswordValid = await bcrypt.compare(request.password, user.password || '');
        if (!isPasswordValid) {
            if (user.password === request.password) {
                return {
                    success: true,
                    _id: user.id.toString(),
                    role: user.role,
                    message: 'Login successful (plain text)',
                    isActive: user.isActive,
                };
            }
            return {
                success: false,
                message: 'Invalid username or password',
            };
        }
        return {
            success: true,
            _id: user.id.toString(),
            role: user.role,
            message: 'Login successful',
            isActive: user.isActive,
        };
    }
}
exports.LoginUseCase = LoginUseCase;
//# sourceMappingURL=login.usecase.js.map