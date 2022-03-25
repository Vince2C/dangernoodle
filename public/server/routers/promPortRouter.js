"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const promPortController_1 = __importDefault(require("../controllers/promPortController"));
const router = express_1.default.Router();
router.post('/', promPortController_1.default.isPromPortUp, promPortController_1.default.savePortToElectronStore, (req, res) => {
    return res.status(200).json({ status: 'success' });
});
exports.default = router;
//# sourceMappingURL=promPortRouter.js.map