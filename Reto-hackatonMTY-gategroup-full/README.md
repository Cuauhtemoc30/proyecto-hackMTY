# Sistema de Productividad - Drawer Assembly Management

Sistema de análisis y gestión de productividad para el ensamblaje de cajones de vuelo.

## 🚀 Instalación y Uso

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Iniciar el Proyecto

```bash
npm run dev
```

¡Listo! La aplicación se ejecutará en `http://localhost:5173` con datos de ejemplo pre-cargados.

**Nota:** Esta aplicación puede funcionar con datos mock (simulados) o con una base de datos real de Supabase PostgreSQL.

## 🗄️ Base de Datos (Opcional)

El proyecto incluye scripts SQL completos para configurar una base de datos PostgreSQL:

### Opción 1: Base de Datos en Supabase (Recomendado)

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Ve al SQL Editor en el Dashboard
3. Copia y ejecuta el contenido de `database_setup.sql` (está en la raíz del proyecto)

### Opción 2: Usando las Migraciones

Si prefieres usar el sistema de migraciones de Supabase:

```bash
# Aplicar migraciones con Supabase CLI
supabase db reset
```

O ejecuta manualmente los archivos en `supabase/migrations/` en orden:
1. `20251025172021_create_drawer_productivity_schema.sql`
2. `20251025172022_insert_seed_data.sql`

### Estructura de la Base de Datos

El esquema incluye 3 tablas principales con datos de ejemplo:

- **products** (10 productos): Incluye sandwiches, ensaladas, bebidas, snacks
- **drawers** (10 cajones): Configuraciones de Business y Economy con diferentes categorías
- **employee_efficiency** (15 registros): Datos de rendimiento y eficiencia de empleados

Ver la carpeta `supabase/` para más detalles.

## 📊 Características

### Dashboard Principal
- Vista general con estadísticas principales
- Navegación entre diferentes módulos

### Análisis de Cajones
- Listado de todos los cajones
- Filtros por tipo de vuelo y categoría
- Métricas de complejidad y tiempo estimado
- Estadísticas de items y tipos únicos

### Rendimiento de Empleados
- Ranking de empleados por eficiencia
- Tasa de éxito y tiempo promedio
- Análisis de rendimiento individual
- Identificación de empleados que requieren mejora

### Calculadora de Tiempo
- Estimación de tiempo de ensamblaje
- Cálculo de complejidad según configuración
- Diferentes categorías y tipos de vuelo

### Gestión de Vencimientos
- Control de fechas de expiración de productos
- Alertas para productos próximos a vencer
- Estado de productos por días restantes

## 📁 Archivos de Base de Datos

- `database_setup.sql`: Script único con todo el esquema y datos
- `supabase/migrations/`: Migraciones organizadas
- `supabase/README.md`: Documentación detallada de la base de datos

## 🛠️ Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

## 📝 Notas

- Por defecto la aplicación utiliza datos mock (simulados) en `src/lib/mockData.ts`
- Para usar la base de datos real, configura las variables de entorno de Supabase
- Consulta `supabase/README.md` para instrucciones detalladas
- Los datos de ejemplo incluyen productos, cajones y registros de empleados realistas
