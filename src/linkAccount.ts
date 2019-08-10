'use strict';

import { Router, Request, Response } from 'express';
import { NextFunction } from 'connect';
import { get as _get } from 'lodash';

const router: Router = Router();

router.get('/:actionType/:oauthType', async (req: Request, res: Response, next: NextFunction) => {
  // verify client id, and state
});


export const LinkAccount: Router = router;
