import { RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';

const USERS: { id: any; name: string }[] = [
  { id: '1', name: 'Kai Jing' },
  { id: '2', name: 'Kai Zher' },
];

export const getUsers: RequestHandler = (req, res, next) => {
  res.json(USERS);
};

export const getUserById: RequestHandler = (req, res, next) => {
  let user = USERS.find((user) => user.id === req.params.id);
  res.json(user);
};

export const createUser: RequestHandler = (req, res, next) => {
  const user = { id: uuidv4(), name: req.body.name };
  USERS.push(user);
  res.json(USERS);
};

export const updateUserById: RequestHandler = (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;

  const user = USERS.find((user) => user.id === id);
  if (user === undefined) {
    res.status(404).send('Not Found');
  } else {
    const userIndex = USERS.findIndex((user) => user.id === id);
    user.name = name;
    USERS[userIndex] = user;
    res.json(user);
  }
};

export const deleteUserById: RequestHandler = (req, res, next) => {
  const id = req.params.id;

  const user = USERS.find((user) => user.id === id);
  if (user === undefined) {
    res.status(404).send('Not Found');
  } else {
    const index = USERS.indexOf(user);
    USERS.splice(index, 1);
    res.json(user);
  }
};
