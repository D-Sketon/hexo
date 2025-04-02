import type Hexo from '../hexo';
import { DataSchema } from '../types';
declare const _default: (ctx: Hexo) => import("warehouse/dist/schema").default<DataSchema>;
export = _default;
