import { z } from 'zod';

export const idSchema = z.string().regex(/^[a-z][a-z0-9-]{0,79}$/)
  .refine(value => !['constructor', 'prototype', '__proto__'].includes(value));
export const quantitySchema = z.number().int().min(0).max(Number.MAX_SAFE_INTEGER);
export const gearSchema = z.union([z.number().int().min(0).max(10),
  z.enum(['missing', 'below-10', 'ready-10'])])
  .transform(value => value === 'ready-10' ? 10 : value);
export type GearState = z.infer<typeof gearSchema>;
export const requirementSchema = z.discriminatedUnion('kind', [
  z.strictObject({ kind: z.literal('material'), itemId: idSchema,
    quantity: quantitySchema.refine(value => value > 0) }),
  z.strictObject({ kind: z.literal('equipment'), itemId: idSchema }),
]);
export const stageSchema = z.strictObject({
  id: idSchema, from: idSchema, to: idSchema,
  requirements: z.array(requirementSchema).min(1),
});
export const catalogSchema = z.strictObject({
  version: idSchema, region: z.literal('SA'), illustrative: z.boolean(),
  items: z.array(z.strictObject({ id: idSchema, name: z.string().min(1),
    kind: z.enum(['material', 'equipment']),
    source: z.string().url().nullable(), verifiedSA: z.boolean() })).min(1),
  routes: z.array(z.strictObject({ destination: idSchema,
    stages: z.array(stageSchema).min(1) })).min(1),
});
export const inventorySchema = z.strictObject({
  materials: z.record(idSchema, quantitySchema.nullable()),
  equipment: z.record(idSchema, gearSchema),
});
export const completionSchema = z.strictObject({ stageId: idSchema,
  materials: z.record(idSchema, quantitySchema), equipment: z.array(idSchema) });
export const projectSchema = z.strictObject({
  catalogVersion: idSchema, destination: idSchema, origin: idSchema,
  inventory: inventorySchema, history: z.array(completionSchema),
});
export type Catalog = z.infer<typeof catalogSchema>;
export type Stage = z.infer<typeof stageSchema>;
export type Requirement = z.infer<typeof requirementSchema>;
export type Inventory = z.infer<typeof inventorySchema>;
export type Completion = z.infer<typeof completionSchema>;
export type Project = z.infer<typeof projectSchema>;
