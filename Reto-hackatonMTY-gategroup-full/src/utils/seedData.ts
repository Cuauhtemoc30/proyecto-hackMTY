import { supabase } from '../lib/supabase';

export const seedData = async () => {
  console.log('Iniciando inserción de datos...');

  // Datos de productos
  const products = [
    {
      product_id: 'PROD-001',
      product_name: 'Sandwich de Pollo Premium',
      weight_or_volume: '250g',
      lot_number: 'LOT-2025-001',
      expiry_date: '2025-02-15',
      quantity: 50
    },
    {
      product_id: 'PROD-002',
      product_name: 'Ensalada César',
      weight_or_volume: '180g',
      lot_number: 'LOT-2025-002',
      expiry_date: '2025-01-20',
      quantity: 30
    },
    {
      product_id: 'PROD-003',
      product_name: 'Jugo de Naranja Natural',
      weight_or_volume: '250ml',
      lot_number: 'LOT-2025-003',
      expiry_date: '2025-01-18',
      quantity: 100
    },
    {
      product_id: 'PROD-004',
      product_name: 'Pastel de Chocolate',
      weight_or_volume: '150g',
      lot_number: 'LOT-2025-004',
      expiry_date: '2025-02-10',
      quantity: 40
    },
    {
      product_id: 'PROD-005',
      product_name: 'Agua Embotellada',
      weight_or_volume: '500ml',
      lot_number: 'LOT-2025-005',
      expiry_date: '2026-12-31',
      quantity: 200
    },
    {
      product_id: 'PROD-006',
      product_name: 'Queso Gouda Premium',
      weight_or_volume: '100g',
      lot_number: 'LOT-2025-006',
      expiry_date: '2025-01-15',
      quantity: 25
    },
    {
      product_id: 'PROD-007',
      product_name: 'Frutos Secos Mixtos',
      weight_or_volume: '80g',
      lot_number: 'LOT-2025-007',
      expiry_date: '2025-03-20',
      quantity: 60
    }
  ];

  // Insertar productos
  const { data: productsData, error: productsError } = await supabase
    .from('products')
    .insert(products)
    .select();

  if (productsError) {
    console.error('Error insertando productos:', productsError);
  } else {
    console.log(`${productsData?.length || 0} productos insertados`);
  }

  // Datos de cajones
  const drawers = [
    {
      drawer_id: 'DRAW-BUS-001',
      flight_type: 'Business',
      drawer_category: 'Breakfast',
      total_items: 18,
      unique_item_types: 8,
      item_list: 'Sandwich Premium, Ensalada César, Jugo Natural, Pastel, Café, Agua, Mantequilla, Mermelada'
    },
    {
      drawer_id: 'DRAW-BUS-002',
      flight_type: 'Business',
      drawer_category: 'Snack',
      total_items: 15,
      unique_item_types: 7,
      item_list: 'Queso Gouda, Frutos Secos, Galletas Premium, Agua, Chocolate, Té, Bolsa Resellable'
    },
    {
      drawer_id: 'DRAW-BUS-003',
      flight_type: 'Business',
      drawer_category: 'Beverage',
      total_items: 12,
      unique_item_types: 5,
      item_list: 'Vino Tinto, Vino Blanco, Agua Premium, Refresco, Café'
    },
    {
      drawer_id: 'DRAW-ECO-001',
      flight_type: 'Economy',
      drawer_category: 'Breakfast',
      total_items: 14,
      unique_item_types: 6,
      item_list: 'Sandwich, Yogur, Jugo, Pan, Mantequilla, Café'
    },
    {
      drawer_id: 'DRAW-ECO-002',
      flight_type: 'Economy',
      drawer_category: 'Snack',
      total_items: 10,
      unique_item_types: 4,
      item_list: 'Galletas, Agua, Chocolate, Bolsa de Papas'
    },
    {
      drawer_id: 'DRAW-ECO-003',
      flight_type: 'Economy',
      drawer_category: 'Beverage',
      total_items: 8,
      unique_item_types: 3,
      item_list: 'Agua, Refresco, Café'
    },
    {
      drawer_id: 'DRAW-BUS-004',
      flight_type: 'Business',
      drawer_category: 'Amenities',
      total_items: 20,
      unique_item_types: 10,
      item_list: 'Almohada, Manta, Audífonos, Toallitas, Calcetines, Tapabocas, Tapón Audífonos, Revista, Bolsa, Perfume'
    },
    {
      drawer_id: 'DRAW-ECO-004',
      flight_type: 'Economy',
      drawer_category: 'Breakfast',
      total_items: 12,
      unique_item_types: 5,
      item_list: 'Emparedado, Jugo, Galletas, Agua, Té'
    }
  ];

  // Insertar cajones
  const { data: drawersData, error: drawersError } = await supabase
    .from('drawers')
    .insert(drawers)
    .select();

  if (drawersError) {
    console.error('Error insertando cajones:', drawersError);
  } else {
    console.log(`${drawersData?.length || 0} cajones insertados`);
  }

  // Datos de rendimiento de empleados
  const employeeRecords = [
    {
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
      supervisor_notes: 'Excelente trabajo, sin errores'
    },
    {
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
      supervisor_notes: 'Buen desempeño'
    },
    {
      record_id: 'REC-003',
      employee_id: 'EMP-003',
      flight_number: 'AA-102',
      spec_id: 'SPEC-003',
      start_time: '2025-01-15T08:10:00Z',
      end_time: '2025-01-15T08:12:45Z',
      duration_seconds: 165,
      accuracy_score: 'Pass',
      items_packed: 12,
      rework_flag: false
    },
    {
      record_id: 'REC-004',
      employee_id: 'EMP-004',
      flight_number: 'AA-103',
      spec_id: 'SPEC-004',
      start_time: '2025-01-15T08:15:00Z',
      end_time: '2025-01-15T08:17:20Z',
      duration_seconds: 140,
      accuracy_score: 'Pass',
      items_packed: 14,
      rework_flag: false
    },
    {
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
      supervisor_notes: 'Muy eficiente'
    },
    {
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
      supervisor_notes: 'Requiere revisión del layout'
    },
    {
      record_id: 'REC-007',
      employee_id: 'EMP-002',
      flight_number: 'AA-106',
      spec_id: 'SPEC-007',
      start_time: '2025-01-15T09:05:00Z',
      end_time: '2025-01-15T09:07:15Z',
      duration_seconds: 135,
      accuracy_score: 'Pass',
      items_packed: 8,
      rework_flag: false
    },
    {
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
      supervisor_notes: 'Necesita capacitación adicional'
    },
    {
      record_id: 'REC-009',
      employee_id: 'EMP-003',
      flight_number: 'AA-108',
      spec_id: 'SPEC-009',
      start_time: '2025-01-15T09:15:00Z',
      end_time: '2025-01-15T09:17:45Z',
      duration_seconds: 165,
      accuracy_score: 'Pass',
      items_packed: 15,
      rework_flag: false
    },
    {
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
      supervisor_notes: 'Rendimiento sobresaliente'
    }
  ];

  // Insertar registros de empleados
  const { data: employeeData, error: employeeError } = await supabase
    .from('employee_efficiency')
    .insert(employeeRecords)
    .select();

  if (employeeError) {
    console.error('Error insertando registros de empleados:', employeeError);
  } else {
    console.log(`${employeeData?.length || 0} registros de empleados insertados`);
  }

  console.log('Inserción de datos completada');
  return { 
    productsData: productsData || [], 
    drawersData: drawersData || [], 
    employeeData: employeeData || [] 
  };
};
