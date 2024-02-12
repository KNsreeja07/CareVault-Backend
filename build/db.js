"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.session = exports.disconnect = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("./constants");
let session;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(constants_1.MONGO_DB_URL);
        exports.session = session = yield mongoose_1.default.startSession();
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error while connecting to MongoDB:", error.message);
            process.exit(1);
        }
    }
});
exports.connect = connect;
const disconnect = () => __awaiter(void 0, void 0, void 0, function* () {
    session === null || session === void 0 ? void 0 : session.endSession();
    yield mongoose_1.default.connection.close();
});
exports.disconnect = disconnect;
