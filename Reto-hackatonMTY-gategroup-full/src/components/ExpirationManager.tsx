import { useState, useEffect } from 'react';
import { AlertCircle, Calendar, Package, TrendingUp } from 'lucide-react';
import { Product } from '../lib/supabase';
import { fetchProducts } from '../lib/mockData';

export default function ExpirationManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<'all' | 'expired' | 'soon' | 'safe'>('all');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      console.error('Error in loadProducts:', err);
      alert('Error al cargar productos');
    } finally {
      setLoading(false);
    }
  };

  const getDaysUntilExpiry = (expiryDate: string) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getExpiryStatus = (daysUntilExpiry: number) => {
    if (daysUntilExpiry < 0) {
      return {
        status: 'expired',
        label: 'Vencido',
        color: 'text-red-600 bg-red-50 border-red-200',
        icon: '🔴'
      };
    } else if (daysUntilExpiry <= 7) {
      return {
        status: 'soon',
        label: 'Próximo a vencer',
        color: 'text-orange-600 bg-orange-50 border-orange-200',
        icon: '⚠️'
      };
    } else if (daysUntilExpiry <= 30) {
      return {
        status: 'warning',
        label: 'Atención',
        color: 'text-yellow-600 bg-yellow-50 border-yellow-200',
        icon: '⏰'
      };
    } else {
      return {
        status: 'safe',
        label: 'Seguro',
        color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
        icon: '✅'
      };
    }
  };

  const productsWithStatus = products.map(product => {
    const daysUntilExpiry = getDaysUntilExpiry(product.expiry_date);
    const status = getExpiryStatus(daysUntilExpiry);
    return { ...product, daysUntilExpiry, status };
  });

  const filteredProducts = productsWithStatus.filter(product => {
    if (filterStatus === 'all') return true;
    if (filterStatus === 'expired') return product.status.status === 'expired';
    if (filterStatus === 'soon') return product.status.status === 'soon' || product.status.status === 'warning';
    if (filterStatus === 'safe') return product.status.status === 'safe';
    return true;
  });

  const stats = {
    expired: productsWithStatus.filter(p => p.status.status === 'expired').length,
    soon: productsWithStatus.filter(p => p.status.status === 'soon').length,
    warning: productsWithStatus.filter(p => p.status.status === 'warning').length,
    safe: productsWithStatus.filter(p => p.status.status === 'safe').length,
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
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Gestión de Vencimientos</h2>
        <p className="text-slate-600">Control de fechas de expiración de productos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-sm text-slate-600">Vencidos</p>
          </div>
          <p className="text-2xl font-bold text-red-600">{stats.expired}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            <p className="text-sm text-slate-600">≤7 días</p>
          </div>
          <p className="text-2xl font-bold text-orange-600">{stats.soon}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-yellow-600" />
            <p className="text-sm text-slate-600">8-30 días</p>
          </div>
          <p className="text-2xl font-bold text-yellow-600">{stats.warning}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3 mb-2">
            <Package className="w-5 h-5 text-emerald-600" />
            <p className="text-sm text-slate-600">Seguros</p>
          </div>
          <p className="text-2xl font-bold text-emerald-600">{stats.safe}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-slate-900">Inventario de Productos</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilterStatus('expired')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === 'expired'
                  ? 'bg-red-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Vencidos
            </button>
            <button
              onClick={() => setFilterStatus('soon')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === 'soon'
                  ? 'bg-orange-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Urgentes
            </button>
            <button
              onClick={() => setFilterStatus('safe')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === 'safe'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Seguros
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Producto</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">ID</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Cantidad</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Lote</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Fecha Venc.</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Días Rest.</th>
                <th className="text-center py-3 px-4 text-sm font-semibold text-slate-700">Estado</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.slice(0, 50).map((product) => (
                <tr key={product.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="font-medium text-slate-900">{product.product_name}</span>
                    <p className="text-xs text-slate-500">{product.weight_or_volume}</p>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-slate-600 font-mono">{product.product_id}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="font-semibold text-slate-900">{product.quantity}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-sm text-slate-600 font-mono">{product.lot_number}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-sm text-slate-700">
                      {new Date(product.expiry_date).toLocaleDateString('es-ES')}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`font-semibold ${
                      product.daysUntilExpiry < 0 ? 'text-red-600' :
                      product.daysUntilExpiry <= 7 ? 'text-orange-600' :
                      product.daysUntilExpiry <= 30 ? 'text-yellow-600' :
                      'text-emerald-600'
                    }`}>
                      {product.daysUntilExpiry < 0 ?
                        `${Math.abs(product.daysUntilExpiry)} días atrás` :
                        `${product.daysUntilExpiry} días`
                      }
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className={`px-3 py-1 rounded-md text-xs font-semibold border ${product.status.color}`}>
                      {product.status.icon} {product.status.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500">No se encontraron productos con el filtro aplicado</p>
          </div>
        )}
      </div>

      {stats.expired > 0 && (
        <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-red-900 mb-2">⚠️ Acción Requerida</h3>
              <p className="text-red-800 mb-3">
                Hay {stats.expired} producto(s) vencido(s) que deben ser retirados del inventario inmediatamente.
                Además, {stats.soon} producto(s) vencerán en los próximos 7 días.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors">
                Generar Reporte de Retiro
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
