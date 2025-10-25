# Sistema de Análisis de Productividad para Ensamblaje de Cajones

## Descripción General

Sistema web completo para análisis de productividad y estimación de tiempos de ensamblaje de cajones de vuelo, basado en los datasets proporcionados de HackMTY 2025.

## Características Principales

### 1. **Vista General (Dashboard)**
- Estadísticas generales del sistema
- Distribución por tipo de vuelo (Business/Economy)
- Categorías de cajones (Breakfast, Snack, Beverage, Amenities)
- Insights y recomendaciones inteligentes

### 2. **Análisis de Cajones**
- Tabla completa de 100 cajones con sus características
- Filtrado por tipo de vuelo y categoría
- Búsqueda por ID de cajón
- Métricas de complejidad automáticas:
  - **Nivel Bajo**: < 15 ítems, < 6 tipos únicos
  - **Nivel Medio**: 15-25 ítems, 6-10 tipos únicos
  - **Nivel Alto**: > 25 ítems, > 10 tipos únicos
- Cálculo de tiempo estimado de ensamblaje

### 3. **Calculadora de Tiempo de Ensamblaje**
- Interfaz interactiva con controles deslizantes
- Configuración personalizable:
  - Total de ítems (5-50)
  - Tipos únicos (3-15)
  - Tipo de vuelo (Business/Economy)
  - Categoría de cajón
- Fórmula de cálculo transparente:
  ```
  Tiempo = 60s (base) + (Items × 2s) + (Tipos × 5s) + Bonus
  - Business Bonus: +15s
  - Breakfast/Snack Bonus: +10s
  - Beverage Bonus: +5s
  ```
- Métricas adicionales:
  - Score de complejidad
  - Ratio de variedad
  - Interpretación automática

### 4. **Rendimiento de Empleados**
- Análisis de 120 registros de eficiencia
- Ranking de empleados por eficiencia (ítems/segundo)
- Métricas clave:
  - Tasa de éxito
  - Tiempo promedio
  - Total de rework
  - Ítems empaquetados
- Distribución de rendimiento:
  - Excelente (≥90%)
  - Bueno (75-89%)
  - Regular (60-74%)
  - Requiere Mejora (<60%)
- Recomendaciones automáticas

### 5. **Gestión de Vencimientos**
- Control de fechas de expiración de productos
- Clasificación automática por urgencia:
  - **Vencidos**: Productos ya vencidos
  - **≤7 días**: Urgente (próximos a vencer)
  - **8-30 días**: Atención (vencimiento cercano)
  - **Seguros**: >30 días
- Alertas visuales con códigos de color
- Información detallada: lote, cantidad, fecha
- Filtrado rápido por estado

## Tecnologías Utilizadas

- **Frontend**: React + TypeScript + Vite
- **Base de Datos**: Supabase (PostgreSQL)
- **Estilos**: Tailwind CSS
- **Iconos**: Lucide React
- **Hosting**: Compatible con cualquier plataforma moderna

## Base de Datos

### Tablas Creadas

1. **products**: Gestión de productos con fechas de vencimiento
2. **drawers**: Configuración de cajones con complejidad
3. **employee_efficiency**: Registros de desempeño de empleados

Todas las tablas incluyen:
- RLS (Row Level Security) habilitado
- Índices optimizados para consultas rápidas
- Políticas de acceso público para demostración

## Análisis Implementados

### Análisis Exploratorio de Datos (EDA)
- Distribución de complejidad por tipo de vuelo
- Histogramas de Total_Items y Unique_Item_Types
- Identificación de cajones más complejos
- Correlaciones entre variables

### Modelos Predictivos
- **Calculadora de Tiempo**: Modelo basado en reglas con pesos ajustables
- Variables predictoras:
  - Total_Items
  - Unique_Item_Types
  - Flight_Type
  - Drawer_Category

### Métricas de Complejidad
- **Ratio de Variedad**: Unique_Item_Types / Total_Items
- **Score de Complejidad**: Combinación ponderada de ítems y tipos
- **Nivel de Complejidad**: Clasificación automática en 3 niveles

### Sistema de Clasificación
- Clasificación automática de cajones por complejidad
- Estimación de tiempo basada en características
- Recomendaciones de asignación de personal

## Instalación

```bash
npm install
```

## Configuración

Crear archivo `.env` con las credenciales de Supabase:
```
VITE_SUPABASE_URL=tu_url
VITE_SUPABASE_ANON_KEY=tu_key
```

## Desarrollo

```bash
npm run dev
```

## Producción

```bash
npm run build
```

## Características de Diseño

- Diseño responsivo para móvil, tablet y desktop
- Interfaz moderna con gradientes y sombras suaves
- Transiciones y animaciones fluidas
- Códigos de color intuitivos para estados
- Tipografía clara y legible
- Componentes reutilizables y modulares

## Impacto del Sistema

Este sistema permite:
- Reducir tiempos de ensamblaje mediante planificación óptima
- Identificar empleados que requieren capacitación
- Prevenir desperdicio por productos vencidos
- Optimizar asignación de recursos humanos
- Tomar decisiones basadas en datos reales
- Mejorar la eficiencia operativa general

## Conclusión

Sistema completo de análisis de productividad que transforma datos en insights accionables para la optimización del proceso de ensamblaje de cajones de vuelo.
