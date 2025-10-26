import { Product, Drawer, EmployeeEfficiency } from './supabase';

// Datos mock de productos
export const mockProducts: Product[] = [
  {
    id: '1',
    product_id: 'PROD-001',
    product_name: 'Sandwich de Pollo Premium',
    weight_or_volume: '250g',
    lot_number: 'LOT-2025-001',
    expiry_date: '2025-02-15',
    quantity: 50,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '2',
    product_id: 'PROD-002',
    product_name: 'Ensalada César',
    weight_or_volume: '180g',
    lot_number: 'LOT-2025-002',
    expiry_date: '2025-01-20',
    quantity: 30,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '3',
    product_id: 'PROD-003',
    product_name: 'Jugo de Naranja Natural',
    weight_or_volume: '250ml',
    lot_number: 'LOT-2025-003',
    expiry_date: '2025-01-18',
    quantity: 100,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '4',
    product_id: 'PROD-004',
    product_name: 'Pastel de Chocolate',
    weight_or_volume: '150g',
    lot_number: 'LOT-2025-004',
    expiry_date: '2025-02-10',
    quantity: 40,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '5',
    product_id: 'PROD-005',
    product_name: 'Agua Embotellada',
    weight_or_volume: '500ml',
    lot_number: 'LOT-2025-005',
    expiry_date: '2026-12-31',
    quantity: 200,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '6',
    product_id: 'PROD-006',
    product_name: 'Queso Gouda Premium',
    weight_or_volume: '100g',
    lot_number: 'LOT-2025-006',
    expiry_date: '2025-01-15',
    quantity: 25,
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '7',
    product_id: 'PROD-007',
    product_name: 'Frutos Secos Mixtos',
    weight_or_volume: '80g',
    lot_number: 'LOT-2025-007',
    expiry_date: '2025-03-20',
    quantity: 60,
    created_at: '2025-01-01T00:00:00Z'
  }
];

// Datos mock de cajones
export const mockDrawers: Drawer[] = [
  {
    id: '1',
    drawer_id: 'DRAW-BUS-001',
    flight_type: 'Business',
    drawer_category: 'Breakfast',
    total_items: 18,
    unique_item_types: 8,
    item_list: 'Sandwich Premium, Ensalada César, Jugo Natural, Pastel, Café, Agua, Mantequilla, Mermelada',
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '2',
    drawer_id: 'DRAW-BUS-002',
    flight_type: 'Business',
    drawer_category: 'Snack',
    total_items: 15,
    unique_item_types: 7,
    item_list: 'Queso Gouda, Frutos Secos, Galletas Premium, Agua, Chocolate, Té, Bolsa Resellable',
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '3',
    drawer_id: 'DRAW-BUS-003',
    flight_type: 'Business',
    drawer_category: 'Beverage',
    total_items: 12,
    unique_item_types: 5,
    item_list: 'Vino Tinto, Vino Blanco, Agua Premium, Refresco, Café',
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '4',
    drawer_id: 'DRAW-ECO-001',
    flight_type: 'Economy',
    drawer_category: 'Breakfast',
    total_items: 14,
    unique_item_types: 6,
    item_list: 'Sandwich, Yogur, Jugo, Pan, Mantequilla, Café',
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '5',
    drawer_id: 'DRAW-ECO-002',
    flight_type: 'Economy',
    drawer_category: 'Snack',
    total_items: 10,
    unique_item_types: 4,
    item_list: 'Galletas, Agua, Chocolate, Bolsa de Papas',
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '6',
    drawer_id: 'DRAW-ECO-003',
    flight_type: 'Economy',
    drawer_category: 'Beverage',
    total_items: 8,
    unique_item_types: 3,
    item_list: 'Agua, Refresco, Café',
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '7',
    drawer_id: 'DRAW-BUS-004',
    flight_type: 'Business',
    drawer_category: 'Amenities',
    total_items: 20,
    unique_item_types: 10,
    item_list: 'Almohada, Manta, Audífonos, Toallitas, Calcetines, Tapabocas, Tapón Audífonos, Revista, Bolsa, Perfume',
    created_at: '2025-01-01T00:00:00Z'
  },
  {
    id: '8',
    drawer_id: 'DRAW-ECO-004',
    flight_type: 'Economy',
    drawer_category: 'Breakfast',
    total_items: 12,
    unique_item_types: 5,
    item_list: 'Emparedado, Jugo, Galletas, Agua, Té',
    created_at: '2025-01-01T00:00:00Z'
  }
];

// Datos mock de empleados
export const mockEmployeeRecords: EmployeeEfficiency[] = [
  {
    id: '1',
    record_id: 'REC-001',
    employee_id: 'EMP-001',
    flight_number: 'AA-100',
    spec_id: 'SPEC-001',
    start_time: '2025-01-15T08:00:00Z',
    end_time: '2025-01-15T08:02:15Z',
    duration_seconds: 135,
    accuracy_score: 'Pass',
    items_packed: 18,
    rework_flag: false,
    supervisor_notes: 'Excelente trabajo, sin errores',
    created_at: '2025-01-15T08:02:15Z'
  },
  {
    id: '2',
    record_id: 'REC-002',
    employee_id: 'EMP-002',
    flight_number: 'AA-101',
    spec_id: 'SPEC-002',
    start_time: '2025-01-15T08:05:00Z',
    end_time: '2025-01-15T08:07:30Z',
    duration_seconds: 150,
    accuracy_score: 'Pass',
    items_packed: 15,
    rework_flag: false,
    supervisor_notes: 'Buen desempeño',
    created_at: '2025-01-15T08:07:30Z'
  },
  {
    id: '3',
    record_id: 'REC-003',
    employee_id: 'EMP-003',
    flight_number: 'AA-102',
    spec_id: 'SPEC-003',
    start_time: '2025-01-15T08:10:00Z',
    end_time: '2025-01-15T08:12:45Z',
    duration_seconds: 165,
    accuracy_score: 'Pass',
    items_packed: 12,
    rework_flag: false,
    supervisor_notes: '',
    created_at: '2025-01-15T08:12:45Z'
  },
  {
    id: '4',
    record_id: 'REC-004',
    employee_id: 'EMP-004',
    flight_number: 'AA-103',
    spec_id: 'SPEC-004',
    start_time: '2025-01-15T08:15:00Z',
    end_time: '2025-01-15T08:17:20Z',
    duration_seconds: 140,
    accuracy_score: 'Pass',
    items_packed: 14,
    rework_flag: false,
    supervisor_notes: '',
    created_at: '2025-01-15T08:17:20Z'
  },
  {
    id: '5',
    record_id: 'REC-005',
    employee_id: 'EMP-005',
    flight_number: 'AA-104',
    spec_id: 'SPEC-005',
    start_time: '2025-01-15T08:20:00Z',
    end_time: '2025-01-15T08:22:10Z',
    duration_seconds: 130,
    accuracy_score: 'Pass',
    items_packed: 10,
    rework_flag: false,
    supervisor_notes: 'Muy eficiente',
    created_at: '2025-01-15T08:22:10Z'
  },
  {
    id: '6',
    record_id: 'REC-006',
    employee_id: 'EMP-001',
    flight_number: 'AA-105',
    spec_id: 'SPEC-006',
    start_time: '2025-01-15T09:00:00Z',
    end_time: '2025-01-15T09:03:30Z',
    duration_seconds: 210,
    accuracy_score: 'Fail',
    items_packed: 20,
    rework_flag: true,
    supervisor_notes: 'Requiere revisión del layout',
    created_at: '2025-01-15T09:03:30Z'
  },
  {
    id: '7',
    record_id: 'REC-007',
    employee_id: 'EMP-002',
    flight_number: 'AA-106',
    spec_id: 'SPEC-007',
    start_time: '2025-01-15T09:05:00Z',
    end_time: '2025-01-15T09:07:15Z',
    duration_seconds: 135,
    accuracy_score: 'Pass',
    items_packed: 8,
    rework_flag: false,
    supervisor_notes: '',
    created_at: '2025-01-15T09:07:15Z'
  },
  {
    id: '8',
    record_id: 'REC-008',
    employee_id: 'EMP-006',
    flight_number: 'AA-107',
    spec_id: 'SPEC-008',
    start_time: '2025-01-15T09:10:00Z',
    end_time: '2025-01-15T09:15:00Z',
    duration_seconds: 300,
    accuracy_score: 'Fail',
    items_packed: 12,
    rework_flag: true,
    supervisor_notes: 'Necesita capacitación adicional',
    created_at: '2025-01-15T09:15:00Z'
  },
  {
    id: '9',
    record_id: 'REC-009',
    employee_id: 'EMP-003',
    flight_number: 'AA-108',
    spec_id: 'SPEC-009',
    start_time: '2025-01-15T09:15:00Z',
    end_time: '2025-01-15T09:17:45Z',
    duration_seconds: 165,
    accuracy_score: 'Pass',
    items_packed: 15,
    rework_flag: false,
    supervisor_notes: '',
    created_at: '2025-01-15T09:17:45Z'
  },
  {
    id: '10',
    record_id: 'REC-010',
    employee_id: 'EMP-004',
    flight_number: 'AA-109',
    spec_id: 'SPEC-010',
    start_time: '2025-01-15T09:20:00Z',
    end_time: '2025-01-15T09:22:00Z',
    duration_seconds: 120,
    accuracy_score: 'Pass',
    items_packed: 18,
    rework_flag: false,
    supervisor_notes: 'Rendimiento sobresaliente',
    created_at: '2025-01-15T09:22:00Z'
  }
];

// Funciones para simular delay de red
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async (): Promise<Product[]> => {
  await delay(500); // Simular delay de red
  return [...mockProducts];
};

export const fetchDrawers = async (): Promise<Drawer[]> => {
  await delay(500); // Simular delay de red
  return [...mockDrawers];
};

export const fetchEmployeeRecords = async (): Promise<EmployeeEfficiency[]> => {
  await delay(500); // Simular delay de red
  return [...mockEmployeeRecords];
};
