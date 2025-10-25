import { useState } from 'react';
import { BarChart3, Clock, Package, Users, TrendingUp, AlertCircle } from 'lucide-react';
import DrawerAnalysis from './DrawerAnalysis';
import ProductivityCalculator from './ProductivityCalculator';
import EmployeePerformance from './EmployeePerformance';
import ExpirationManager from './ExpirationManager';

type View = 'overview' | 'drawers' | 'calculator' | 'employees' | 'expiration';

export default function Dashboard() {
  const [activeView, setActiveView] = useState<View>('overview');

  const menuItems = [
    { id: 'overview' as View, label: 'Vista General', icon: BarChart3 },
    { id: 'drawers' as View, label: 'Análisis de Cajones', icon: Package },
    { id: 'calculator' as View, label: 'Calculadora de Tiempo', icon: Clock },
    { id: 'employees' as View, label: 'Rendimiento de Empleados', icon: Users },
    { id: 'expiration' as View, label: 'Gestión de Vencimientos', icon: AlertCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-xl shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Sistema de Productividad</h1>
                <p className="text-sm text-slate-600">Análisis y estimación de ensamblaje</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveView(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                      <span className="text-sm">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          <main className="flex-1">
            {activeView === 'overview' && <OverviewView setActiveView={setActiveView} />}
            {activeView === 'drawers' && <DrawerAnalysis />}
            {activeView === 'calculator' && <ProductivityCalculator />}
            {activeView === 'employees' && <EmployeePerformance />}
            {activeView === 'expiration' && <ExpirationManager />}
          </main>
        </div>
      </div>
    </div>
  );
}

function OverviewView({ setActiveView }: { setActiveView: (view: View) => void }) {
  const stats = [
    {
      label: 'Cajones Analizados',
      value: '100',
      change: '+12%',
      icon: Package,
      color: 'from-blue-500 to-blue-600',
      view: 'drawers' as View,
    },
    {
      label: 'Tiempo Promedio',
      value: '52s',
      change: '-8%',
      icon: Clock,
      color: 'from-emerald-500 to-emerald-600',
      view: 'calculator' as View,
    },
    {
      label: 'Empleados Activos',
      value: '20',
      change: '+3%',
      icon: Users,
      color: 'from-violet-500 to-violet-600',
      view: 'employees' as View,
    },
    {
      label: 'Productos Próximos a Vencer',
      value: '45',
      change: '+15%',
      icon: AlertCircle,
      color: 'from-orange-500 to-orange-600',
      view: 'expiration' as View,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Vista General</h2>
        <p className="text-slate-600">
          Análisis de productividad y eficiencia en el ensamblaje de cajones de vuelo
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <button
              key={stat.label}
              onClick={() => setActiveView(stat.view)}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all hover:scale-105 text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg shadow-md`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-emerald-600">{stat.change}</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Distribución por Tipo de Vuelo</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Business</span>
                <span className="text-sm font-bold text-slate-900">48%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full" style={{ width: '48%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">Economy</span>
                <span className="text-sm font-bold text-slate-900">52%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-full rounded-full" style={{ width: '52%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Categorías de Cajones</h3>
          <div className="space-y-3">
            {[
              { name: 'Breakfast', count: 32, color: 'bg-blue-500' },
              { name: 'Snack', count: 28, color: 'bg-emerald-500' },
              { name: 'Beverage', count: 24, color: 'bg-violet-500' },
              { name: 'Amenities', count: 16, color: 'bg-orange-500' },
            ].map((cat) => (
              <div key={cat.name} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${cat.color}`}></div>
                <span className="text-sm text-slate-700 flex-1">{cat.name}</span>
                <span className="text-sm font-bold text-slate-900">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="bg-blue-500 p-3 rounded-lg shadow-md">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">Insights del Sistema</h3>
            <p className="text-blue-800 mb-3">
              Los cajones de tipo Business con categoría Breakfast tienen un 25% más de complejidad que el promedio.
              El tiempo estimado de ensamblaje puede aumentar hasta 90 segundos para configuraciones complejas.
            </p>
            <button
              onClick={() => setActiveView('calculator')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              Usar Calculadora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
