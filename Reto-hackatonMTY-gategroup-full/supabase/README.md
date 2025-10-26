# Base de Datos - Drawer Productivity Management System

## Descripción

Este proyecto utiliza Supabase como base de datos PostgreSQL con las siguientes tablas:

1. **products**: Productos de aerolínea (comidas, bebidas, etc.)
2. **drawers**: Cajones de vuelo con sus configuraciones
3. **employee_efficiency**: Registros de eficiencia de empleados en el ensamblaje

## Estructura de Migraciones

Las migraciones están ubicadas en `supabase/migrations/`:

- `20251025172021_create_drawer_productivity_schema.sql`: Crea las tablas y políticas
- `20251025172022_insert_seed_data.sql`: Inserta datos de ejemplo

## Cómo Ejecutar las Migraciones

### Opción 1: Con Supabase CLI (Recomendado)

Si tienes un proyecto de Supabase:

```bash
# Iniciar Supabase localmente
supabase start

# Aplicar migraciones
supabase db reset
```

### Opción 2: Con SQL directo

Si prefieres ejecutar las migraciones manualmente:

1. Conecta a tu base de datos PostgreSQL
2. Ejecuta `20251025172021_create_drawer_productivity_schema.sql`
3. Ejecuta `20251025172022_insert_seed_data.sql`

### Opción 3: Desde el Dashboard de Supabase

1. Ve a tu proyecto en [Supabase Dashboard](https://supabase.com)
2. Navega a **SQL Editor**
3. Copia y pega el contenido de cada archivo de migración
4. Ejecuta cada uno en orden

## Verificar Datos

Después de ejecutar las migraciones, puedes verificar los datos:

```sql
-- Ver productos
SELECT * FROM products LIMIT 10;

-- Ver cajones
SELECT * FROM drawers LIMIT 10;

-- Ver registros de empleados
SELECT * FROM employee_efficiency LIMIT 10;

-- Estadísticas
SELECT 
  COUNT(*) as total_products,
  (SELECT COUNT(*) FROM drawers) as total_drawers,
  (SELECT COUNT(*) FROM employee_efficiency) as total_records
FROM products;
```

## Datos Insertados

### Products (10 productos)
- Productos de comida, bebidas y snacks
- Con fechas de caducidad, lotes y cantidades

### Drawers (10 cajones)
- Diferentes tipos de vuelo (Business, Economy)
- Diferentes categorías (Breakfast, Snack, Beverage, Amenities)
- Configuraciones variadas de items

### Employee Efficiency (15 registros)
- Registros de desempeño de empleados
- Incluye duraciones, puntuaciones de precisión y notas del supervisor
- Algunos con banderas de rework para análisis

## Notas de Seguridad

Las políticas RLS (Row Level Security) están habilitadas pero permiten acceso público para fines de demostración. En un entorno de producción, deberías:

1. Restringir el acceso público
2. Crear políticas específicas por rol
3. Implementar autenticación adecuada
4. Usar variables de entorno para conexiones seguras

## Scripts Útiles

### Limpiar y reiniciar datos

```sql
-- Eliminar todos los datos
TRUNCATE products, drawers, employee_efficiency CASCADE;

-- Luego ejecuta nuevamente la migración de seed data
```

### Agregar más datos de prueba

Puedes agregar más registros siguiendo el mismo patrón en `20251025172022_insert_seed_data.sql` y ejecutar:

```bash
supabase db reset
```
