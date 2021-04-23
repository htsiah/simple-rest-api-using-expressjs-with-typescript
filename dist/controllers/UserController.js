"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.updateUserById = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const uuid_1 = require("uuid");
const USERS = [
    { id: "1", name: "Kai Jing" },
    { id: "2", name: "Kai Zher" },
];
const getUsers = (req, res, next) => {
    res.json(USERS);
};
exports.getUsers = getUsers;
const getUserById = (req, res, next) => {
    let user = USERS.find((user) => user.id === req.params.id);
    res.json(user);
};
exports.getUserById = getUserById;
const createUser = (req, res, next) => {
    const user = { id: uuid_1.v4(), name: req.body.name };
    USERS.push(user);
    res.json(USERS);
};
exports.createUser = createUser;
const updateUserById = (req, res, next) => {
    const id = req.params.id;
    const name = req.body.name;
    const user = USERS.find((user) => user.id === id);
    if (user === undefined) {
        res.status(404).send("Not Found");
    }
    else {
        const userIndex = USERS.findIndex((user) => user.id === id);
        user.name = name;
        USERS[userIndex] = user;
        res.json(user);
    }
};
exports.updateUserById = updateUserById;
const deleteUserById = (req, res, next) => {
    const id = req.params.id;
    const user = USERS.find((user) => user.id === id);
    if (user === undefined) {
        res.status(404).send("Not Found");
    }
    else {
        const index = USERS.indexOf(user);
        USERS.splice(index, 1);
        res.json(user);
    }
};
exports.deleteUserById = deleteUserById;
