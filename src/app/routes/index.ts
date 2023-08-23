import { Router } from 'express';
import { ProductRoutes } from '../modules/products/productRoute';
import { UserRoutes } from '../modules/users/userRoutes';

const router = Router();
const modulesRoute = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
];
modulesRoute.filter(mR => router.use(mR.path, mR.route));
export default router;
