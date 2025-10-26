/*
  # Insertar Datos de Ejemplo
  
  Este archivo inserta datos de ejemplo en las tablas:
  - products
  - drawers
  - employee_efficiency
*/

-- Insertar productos
INSERT INTO products (id, product_id, product_name, weight_or_volume, lot_number, expiry_date, quantity, created_at) VALUES
  ('11111111-1111-1111-1111-111111111111', 'PROD-001', 'Sandwich de Pollo Premium', '250g', 'LOT-2025-001', '2025-02-15', 50, '2025-01-01T00:00:00Z'),
  ('11111111-1111-1111-1111-111111111112', 'PROD-002', 'Ensalada César', '180g', 'LOT-2025-002', '2025-01-20', 30, '2025-01-01T00:00:00Z'),
  ('11111111-1111-1111-1111-111111111113', 'PROD-003', 'Jugo de Naranja Natural', '250ml', 'LOT-2025-003', '2025-01-18', 100, '2025-01-01T00:00:00Z'),
  ('11111111-1111-1111-1111-111111111114', 'PROD-004', 'Pastel de Chocolate', '150g', 'LOT-2025-004', '2025-02-10', 40, '2025-01-01T00:00:00Z'),
  ('11111111-1111-1111-1111-111111111115', 'PROD-005', 'Agua Embotellada', '500ml', 'LOT-2025-005', '2026-12-31', 200, '2025-01-01T00:00:00Z'),
  ('11111111-1111-1111-1111-111111111116', 'PROD-006', 'Queso Gouda Premium', '100g', 'LOT-2025-006', '2025-01-15', 25, '2025-01-01T00:00:00Z'),
  ('11111111-1111-1111-1111-111111111117', 'PROD-007', 'Frutos Secos Mixtos', '80g', 'LOT-2025-007', '2025-03-20', 60, '2025-01-01T00:00:00Z'),
  ('11111111-1111-1111-1111-111111111118', 'PROD-008', 'Café Premium', '200ml', 'LOT-2025-008', '2026-06-30', 150, '2025-01-01T00:00:00Z'),
  ('11111111-1111-1111-1111-111111111119', 'PROD-009', 'Yogur Natural', '125g', 'LOT-2025-009', '2025-01-17', 80, '2025-01-01T00:00:00Z'),
  ('11111111-1111-1111-1111-111111111120', 'PROD-010', 'Pan Integral', '100g', 'LOT-2025-010', '2025-01-16', 120, '2025-01-01T00:00:00Z')
ON CONFLICT (product_id) DO NOTHING;

-- Insertar cajones
INSERT INTO drawers (id, drawer_id, flight_type, drawer_category, total_items, unique_item_types, item_list, created_at) VALUES
  ('22222222-2222-2222-2222-222222222221', 'DRAW-BUS-001', 'Business', 'Breakfast', 18, 8, 'Sandwich Premium, Ensalada César, Jugo Natural, Pastel, Café, Agua, Mantequilla, Mermelada', '2025-01-01T00:00:00Z'),
  ('22222222-2222-2222-2222-222222222222', 'DRAW-BUS-002', 'Business', 'Snack', 15, 7, 'Queso Gouda, Frutos Secos, Galletas Premium, Agua, Chocolate, Té, Bolsa Resellable', '2025-01-01T00:00:00Z'),
  ('22222222-2222-2222-2222-222222222223', 'DRAW-BUS-003', 'Business', 'Beverage', 12, 5, 'Vino Tinto, Vino Blanco, Agua Premium, Refresco, Café', '2025-01-01T00:00:00Z'),
  ('22222222-2222-2222-2222-222222222224', 'DRAW-ECO-001', 'Economy', 'Breakfast', 14, 6, 'Sandwich, Yogur, Jugo, Pan, Mantequilla, Café', '2025-01-01T00:00:00Z'),
  ('22222222-2222-2222-2222-222222222225', 'DRAW-ECO-002', 'Economy', 'Snack', 10, 4, 'Galletas, Agua, Chocolate, Bolsa de Papas', '2025-01-01T00:00:00Z'),
  ('22222222-2222-2222-2222-222222222226', 'DRAW-ECO-003', 'Economy', 'Beverage', 8, 3, 'Agua, Refresco, Café', '2025-01-01T00:00:00Z'),
  ('22222222-2222-2222-2222-222222222227', 'DRAW-BUS-004', 'Business', 'Amenities', 20, 10, 'Almohada, Manta, Audífonos, Toallitas, Calcetines, Tapabocas, Tapón Audífonos, Revista, Bolsa, Perfume', '2025-01-01T00:00:00Z'),
  ('22222222-2222-2222-2222-222222222228', 'DRAW-ECO-004', 'Economy', 'Breakfast', 12, 5, 'Emparedado, Jugo, Galletas, Agua, Té', '2025-01-01T00:00:00Z'),
  ('22222222-2222-2222-2222-222222222229', 'DRAW-BUS-005', 'Business', 'Breakfast', 19, 9, 'Sandwich Premium, Ensalada César, Jugo Natural, Pastel, Café, Agua, Mantequilla, Mermelada, Galletas', '2025-01-02T00:00:00Z'),
  ('22222222-2222-2222-2222-222222222230', 'DRAW-ECO-005', 'Economy', 'Snack', 11, 5, 'Galletas, Agua, Chocolate, Bolsa de Papas, Goma de Mascar', '2025-01-02T00:00:00Z')
ON CONFLICT (drawer_id) DO NOTHING;

-- Insertar registros de eficiencia de empleados
INSERT INTO employee_efficiency (id, record_id, employee_id, flight_number, spec_id, start_time, end_time, duration_seconds, accuracy_score, items_packed, rework_flag, supervisor_notes, created_at) VALUES
  ('33333333-3333-3333-3333-333333333331', 'REC-001', 'EMP-001', 'AA-100', 'SPEC-001', '2025-01-15T08:00:00Z', '2025-01-15T08:02:15Z', 135, 'Pass', 18, false, 'Excelente trabajo, sin errores', '2025-01-15T08:02:15Z'),
  ('33333333-3333-3333-3333-333333333332', 'REC-002', 'EMP-002', 'AA-101', 'SPEC-002', '2025-01-15T08:05:00Z', '2025-01-15T08:07:30Z', 150, 'Pass', 15, false, 'Buen desempeño', '2025-01-15T08:07:30Z'),
  ('33333333-3333-3333-3333-333333333333', 'REC-003', 'EMP-003', 'AA-102', 'SPEC-003', '2025-01-15T08:10:00Z', '2025-01-15T08:12:45Z', 165, 'Pass', 12, false, '', '2025-01-15T08:12:45Z'),
  ('33333333-3333-3333-3333-333333333334', 'REC-004', 'EMP-004', 'AA-103', 'SPEC-004', '2025-01-15T08:15:00Z', '2025-01-15T08:17:20Z', 140, 'Pass', 14, false, '', '2025-01-15T08:17:20Z'),
  ('33333333-3333-3333-3333-333333333335', 'REC-005', 'EMP-005', 'AA-104', 'SPEC-005', '2025-01-15T08:20:00Z', '2025-01-15T08:22:10Z', 130, 'Pass', 10, false, 'Muy eficiente', '2025-01-15T08:22:10Z'),
  ('33333333-3333-3333-3333-333333333336', 'REC-006', 'EMP-001', 'AA-105', 'SPEC-006', '2025-01-15T09:00:00Z', '2025-01-15T09:03:30Z', 210, 'Fail', 20, true, 'Requiere revisión del layout', '2025-01-15T09:03:30Z'),
  ('33333333-3333-3333-3333-333333333337', 'REC-007', 'EMP-002', 'AA-106', 'SPEC-007', '2025-01-15T09:05:00Z', '2025-01-15T09:07:15Z', 135, 'Pass', 8, false, '', '2025-01-15T09:07:15Z'),
  ('33333333-3333-3333-3333-333333333338', 'REC-008', 'EMP-006', 'AA-107', 'SPEC-008', '2025-01-15T09:10:00Z', '2025-01-15T09:15:00Z', 300, 'Fail', 12, true, 'Necesita capacitación adicional', '2025-01-15T09:15:00Z'),
  ('33333333-3333-3333-3333-333333333339', 'REC-009', 'EMP-003', 'AA-108', 'SPEC-009', '2025-01-15T09:15:00Z', '2025-01-15T09:17:45Z', 165, 'Pass', 15, false, '', '2025-01-15T09:17:45Z'),
  ('33333333-3333-3333-3333-333333333340', 'REC-010', 'EMP-004', 'AA-109', 'SPEC-010', '2025-01-15T09:20:00Z', '2025-01-15T09:22:00Z', 120, 'Pass', 18, false, 'Rendimiento sobresaliente', '2025-01-15T09:22:00Z'),
  ('33333333-3333-3333-3333-333333333341', 'REC-011', 'EMP-007', 'AA-110', 'SPEC-011', '2025-01-15T10:00:00Z', '2025-01-15T10:02:30Z', 150, 'Pass', 16, false, '', '2025-01-15T10:02:30Z'),
  ('33333333-3333-3333-3333-333333333342', 'REC-012', 'EMP-001', 'AA-111', 'SPEC-012', '2025-01-15T10:05:00Z', '2025-01-15T10:07:45Z', 165, 'Pass', 14, false, '', '2025-01-15T10:07:45Z'),
  ('33333333-3333-3333-3333-333333333343', 'REC-013', 'EMP-008', 'AA-112', 'SPEC-013', '2025-01-15T10:10:00Z', '2025-01-15T10:14:00Z', 240, 'Fail', 17, true, 'Errores en colocación de items', '2025-01-15T10:14:00Z'),
  ('33333333-3333-3333-3333-333333333344', 'REC-014', 'EMP-005', 'AA-113', 'SPEC-014', '2025-01-15T10:15:00Z', '2025-01-15T10:17:10Z', 130, 'Pass', 11, false, '', '2025-01-15T10:17:10Z'),
  ('33333333-3333-3333-3333-333333333345', 'REC-015', 'EMP-003', 'AA-114', 'SPEC-015', '2025-01-15T10:20:00Z', '2025-01-15T10:23:00Z', 180, 'Pass', 19, false, 'Rendimiento consistente', '2025-01-15T10:23:00Z')
ON CONFLICT (record_id) DO NOTHING;
