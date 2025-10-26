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

**Nota:** Esta aplicación utiliza datos mock (simulados) en lugar de una base de datos real. Todos los datos se cargan automáticamente cuando inicias la aplicación.

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

## 🗂️ Estructura de Base de Datos

### Tablas

- **products**: Productos con información de vencimiento
- **drawers**: Información de cajones por tipo y categoría
- **employee_efficiency**: Registros de rendimiento de empleados

## 🛠️ Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

## 📝 Notas

- Los datos utilizados son mock (simulados) y se cargan automáticamente
- No se requiere configuración de base de datos externa
- Ideal para demostraciones y prototipos
