"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const zodMiddleware_1 = __importDefault(require("../utils/middleware/zod/zodMiddleware"));
const zodUserSchema_1 = require("../utils/zodSchema/zodUserSchema");
const router = (0, express_1.Router)();
router.post('/', (0, zodMiddleware_1.default)(zodUserSchema_1.createUserSchema), UserController_1.createUser);
exports.default = router;
