import { useState, useEffect } from 'react';
import { Package, TrendingUp, Filter, Search } from 'lucide-react';
import { supabase, Drawer } from '../lib/supabase';

export default function DrawerAnalysis() {
  const [drawers, setDrawers] = useState<Drawer[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchDrawers();
  }, []);

  const fetchDrawers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('drawers')
      .select('*')
      .order('total_items', { ascending: false });

    if (!error && data) {
      setDrawers(data);
    }
    setLoading(false);
  };

  const filteredDrawers = drawers.filter((drawer) => {
    const matchesType = filterType === 'all' || drawer.flight_type === filterType;
    const matchesCategory = filterCategory === 'all' || drawer.drawer_category === filterCategory;
    const matchesSearch = drawer.drawer_id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesCategory && matchesSearch;
  });

  const getComplexityLevel = (totalItems: number, uniqueTypes: number) => {
    if (totalItems < 15 && uniqueTypes < 6) {
      return { level: 'Bajo', color: 'text-emerald-600 bg-emerald-50', score: 1 };
    } else if (totalItems <= 25 && uniqueTypes <= 10) {
      return { level: 'Medio', color: 'text-yellow-600 bg-yellow-50', score: 2 };
    } else {
      return { level: 'Alto', color: 'text-red-600 bg-red-50', score: 3 };
    }
  };

  const getEstimatedTime = (totalItems: number, uniqueTypes: number, flightType: string) => {
    const baseTime = 60;
    const timePerItem = 2;
    const timePerUniqueType = 5;
    const businessBonus = flightType === 'Business' ? 15 : 0;

    return baseTime + (totalItems * timePerItem) + (uniqueTypes * timePerUniqueType) + businessBonus;
  };

  const stats = {
    total: filteredDrawers.length,
    avgItems: Math.round(filteredDrawers.reduce((acc, d) => acc + d.total_items, 0) / filteredDrawers.length) || 0,
    avgTypes: Math.round(filteredDrawers.reduce((acc, d) => acc + d.unique_item_types, 0) / filteredDrawers.length) || 0,
    business: filteredDrawers.filter(d => d.flight_type === 'Business').length,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Análisis de Cajones</h2>
          <p className="text-slate-600">Exploración de complejidad y características de cajones</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <p className="text-sm text-slate-600 mb-1">Total Cajones</p>
          <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <p className="text-sm text-slate-600 mb-1">Promedio Ítems</p>
          <p className="text-2xl font-bold text-slate-900">{stats.avgItems}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <p className="text-sm text-slate-600 mb-1">Promedio Tipos</p>
          <p className="text-2xl font-bold text-slate-900">{stats.avgTypes}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <p className="text-sm text-slate-600 mb-1">Business Class</p>
          <p className="text-2xl font-bold text-slate-900">{stats.business}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por ID de cajón..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-3">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Todos los tipos</option>
              <option value="Business">Business</option>
              <option value="Economy">Economy</option>
            </select>

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Todas las categorías</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Snack">Snack</option>
              <option value="Beverage">Beverage</option>
              <option value="Amenities">Amenities</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">ID Cajón</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Tipo Vuelo</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Categoría</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Total Ítems</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Tipos Únicos</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Complejidad</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Tiempo Est.</th>
              </tr>
            </thead>
            <tbody>
              {filteredDrawers.slice(0, 20).map((drawer) => {
                const complexity = getComplexityLevel(drawer.total_items, drawer.unique_item_types);
                const estimatedTime = getEstimatedTime(drawer.total_items, drawer.unique_item_types, drawer.flight_type);

                return (
                  <tr key={drawer.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4">
                      <span className="font-medium text-slate-900">{drawer.drawer_id}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                        drawer.flight_type === 'Business'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {drawer.flight_type}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-slate-600">{drawer.drawer_category}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="font-semibold text-slate-900">{drawer.total_items}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="font-semibold text-slate-900">{drawer.unique_item_types}</span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded-md text-xs font-semibold ${complexity.color}`}>
                        {complexity.level}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="font-semibold text-slate-900">{estimatedTime}s</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredDrawers.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">No se encontraron cajones con los filtros aplicados</p>
          </div>
        )}
      </div>
    </div>
  );
}
