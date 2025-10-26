import { Product, Drawer, EmployeeEfficiency } from './supabase';
import { supabase } from './supabase';

// Funciones para obtener datos desde Supabase
export const fetchProducts = async (): Promise<Product[]> => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('product_id', { ascending: true });

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data || [];
};

export const fetchDrawers = async (): Promise<Drawer[]> => {
  const { data, error } = await supabase
    .from('drawers')
    .select('*')
    .order('drawer_id', { ascending: true });

  if (error) {
    console.error('Error fetching drawers:', error);
    return [];
  }

  return data || [];
};

export const fetchEmployeeRecords = async (): Promise<EmployeeEfficiency[]> => {
  const { data, error } = await supabase
    .from('employee_efficiency')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching employee records:', error);
    return [];
  }

  return data || [];
};

// Mantener datos mock como fallback (opcional)
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
  }
];

export const mockDrawers: Drawer[] = [];
export const mockEmployeeRecords: EmployeeEfficiency[] = [];
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
