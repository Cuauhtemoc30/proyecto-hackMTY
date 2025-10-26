/*
  # Drawer Productivity Management System Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `product_id` (text, unique)
      - `product_name` (text)
      - `weight_or_volume` (text)
      - `lot_number` (text)
      - `expiry_date` (date)
      - `quantity` (integer)
      - `created_at` (timestamptz)
    
    - `drawers`
      - `id` (uuid, primary key)
      - `drawer_id` (text, unique)
      - `flight_type` (text)
      - `drawer_category` (text)
      - `total_items` (integer)
      - `unique_item_types` (integer)
      - `item_list` (text)
      - `created_at` (timestamptz)
    
    - `employee_efficiency`
      - `id` (uuid, primary key)
      - `record_id` (text, unique)
      - `employee_id` (text)
      - `flight_number` (text)
      - `spec_id` (text)
      - `start_time` (timestamptz)
      - `end_time` (timestamptz)
      - `duration_seconds` (integer)
      - `accuracy_score` (text)
      - `items_packed` (integer)
      - `rework_flag` (boolean)
      - `supervisor_notes` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (for demo purposes)
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id text UNIQUE NOT NULL,
  product_name text NOT NULL,
  weight_or_volume text,
  lot_number text,
  expiry_date date,
  quantity integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS drawers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  drawer_id text UNIQUE NOT NULL,
  flight_type text NOT NULL,
  drawer_category text NOT NULL,
  total_items integer NOT NULL,
  unique_item_types integer NOT NULL,
  item_list text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS employee_efficiency (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  record_id text UNIQUE NOT NULL,
  employee_id text NOT NULL,
  flight_number text NOT NULL,
  spec_id text NOT NULL,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  duration_seconds integer NOT NULL,
  accuracy_score text NOT NULL,
  items_packed integer NOT NULL,
  rework_flag boolean DEFAULT false,
  supervisor_notes text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE drawers ENABLE ROW LEVEL SECURITY;
ALTER TABLE employee_efficiency ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (demo purposes)
CREATE POLICY "Allow public read access to products"
  ON products FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to products"
  ON products FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public read access to drawers"
  ON drawers FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to drawers"
  ON drawers FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow public read access to employee_efficiency"
  ON employee_efficiency FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public insert to employee_efficiency"
  ON employee_efficiency FOR INSERT
  TO public
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_products_expiry ON products(expiry_date);
CREATE INDEX IF NOT EXISTS idx_drawers_flight_type ON drawers(flight_type);
CREATE INDEX IF NOT EXISTS idx_drawers_category ON drawers(drawer_category);
CREATE INDEX IF NOT EXISTS idx_employee_efficiency_employee ON employee_efficiency(employee_id);
CREATE INDEX IF NOT EXISTS idx_employee_efficiency_accuracy ON employee_efficiency(accuracy_score);