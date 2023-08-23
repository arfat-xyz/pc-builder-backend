import httpStatus from 'http-status';
import catchAsync from '../../../Shared/cacheAsync';
import sendResponse from '../../../Shared/sentResponse';
import { IProduct } from './productInterface';
import { ProductService } from './productService';
import { Request, Response } from 'express';
import pick from '../../../Shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { productFilterableFields } from './productConstant';

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const payload: IProduct = req.body;
  const result = await ProductService.createProduct(payload);
  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Produxt created successfully.`,
    data: result,
  });
});
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);
  const filters = pick(req.query, productFilterableFields);
  const result = await ProductService.getAllProducts(
    paginationOptions,
    filters,
  );
  sendResponse<IProduct[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Get products successfully.`,
    meta: result.meta || null,
    data: result.data || null,
  });
});
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProductService.getSingleProduct(id);
  sendResponse<IProduct>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Get product successfully.`,
    meta: null,
    data: result || null,
  });
});
const postComment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const commentData = req.body;
  const result = await ProductService.postComment(id, commentData);
  sendResponse<string>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `Post comment successfully.`,
    meta: null,
    data: result || null,
  });
});
export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  postComment,
};
