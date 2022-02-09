"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./app/client");
const worker_1 = require("./app/worker");
/**
 * @description Basic function for creating celery client
 *
 * @function
 * @returns {Client}
 */
function createClient(broker = "amqp://", backend = "amqp://", queue = "celery", opts = null) {
    return new client_1.default(broker, backend, queue, opts);
}
exports.createClient = createClient;
/**
 * @description Basic function for creating celery worker
 *
 * @function
 * @returns {Worker}
 */
function createWorker(broker = "amqp://", backend = "amqp://", queue = "celery", opts = null) {
    return new worker_1.default(broker, backend, queue, opts);
}
exports.createWorker = createWorker;
