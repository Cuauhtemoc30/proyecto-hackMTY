import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  product_id: string;
  product_name: string;
  weight_or_volume: string;
  lot_number: string;
  expiry_date: string;
  quantity: number;
  created_at: string;
}

export interface Drawer {
  id: string;
  drawer_id: string;
  flight_type: string;
  drawer_category: string;
  total_items: number;
  unique_item_types: number;
  item_list: string;
  created_at: string;
}

export interface EmployeeEfficiency {
  id: string;
  record_id: string;
  employee_id: string;
  flight_number: string;
  spec_id: string;
  start_time: string;
  end_time: string;
  duration_seconds: number;
  accuracy_score: string;
  items_packed: number;
  rework_flag: boolean;
  supervisor_notes: string;
  created_at: string;
}
