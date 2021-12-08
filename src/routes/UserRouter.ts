import express, { Request, Response } from 'express';
import { UserService } from '../services/UserService';

const router = express.Router();

const service = new UserService();

router.get('/', service.getUsers);

router.post('/', service.registrar);

router.get('/:userId',service.getUser);

router.delete('/:userId', service.delete);

router.put('/:userId', service.put);

router.patch('/:userId', service.patch);

module.exports = router;
