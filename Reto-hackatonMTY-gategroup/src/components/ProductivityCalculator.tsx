import { useState } from 'react';
import { Calculator, TrendingUp, Clock, Package } from 'lucide-react';

export default function ProductivityCalculator() {
  const [totalItems, setTotalItems] = useState<number>(20);
  const [uniqueTypes, setUniqueTypes] = useState<number>(8);
  const [flightType, setFlightType] = useState<'Business' | 'Economy'>('Business');
  const [category, setCategory] = useState<string>('Breakfast');

  const calculateTime = () => {
    const baseTime = 60;
    const timePerItem = 2;
    const timePerUniqueType = 5;
    const businessBonus = flightType === 'Business' ? 15 : 0;

    let categoryBonus = 0;
    if (category === 'Breakfast' || category === 'Snack') {
      categoryBonus = 10;
    } else if (category === 'Beverage') {
      categoryBonus = 5;
    }

    return baseTime + (totalItems * timePerItem) + (uniqueTypes * timePerUniqueType) + businessBonus + categoryBonus;
  };

  const getComplexityScore = () => {
    const varietyRatio = uniqueTypes / totalItems;
    const complexityScore = (totalItems * 0.4) + (uniqueTypes * 0.6);
    return Math.round(complexityScore * 10) / 10;
  };

  const getComplexityLevel = () => {
    if (totalItems < 15 && uniqueTypes < 6) {
      return { level: 'Baja', color: 'text-emerald-600 bg-emerald-50 border-emerald-200', emoji: '✅' };
    } else if (totalItems <= 25 && uniqueTypes <= 10) {
      return { level: 'Media', color: 'text-yellow-600 bg-yellow-50 border-yellow-200', emoji: '⚠️' };
    } else {
      return { level: 'Alta', color: 'text-red-600 bg-red-50 border-red-200', emoji: '🔴' };
    }
  };

  const estimatedTime = calculateTime();
  const complexityScore = getComplexityScore();
  const complexity = getComplexityLevel();
  const varietyRatio = ((uniqueTypes / totalItems) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Calculadora de Tiempo de Ensamblaje</h2>
        <p className="text-slate-600">Estima el tiempo necesario según las características del cajón</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Package className="w-5 h-5 text-blue-600" />
            Configuración del Cajón
          </h3>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Total de Ítems: <span className="text-blue-600">{totalItems}</span>
              </label>
              <input
                type="range"
                min="5"
                max="50"
                value={totalItems}
                onChange={(e) => setTotalItems(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>5</span>
                <span>50</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Tipos Únicos: <span className="text-blue-600">{uniqueTypes}</span>
              </label>
              <input
                type="range"
                min="3"
                max="15"
                value={uniqueTypes}
                onChange={(e) => setUniqueTypes(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>3</span>
                <span>15</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">Tipo de Vuelo</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setFlightType('Business')}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    flightType === 'Business'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Business
                </button>
                <button
                  onClick={() => setFlightType('Economy')}
                  className={`py-3 px-4 rounded-lg font-medium transition-all ${
                    flightType === 'Economy'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Economy
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">Categoría</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Snack">Snack</option>
                <option value="Beverage">Beverage</option>
                <option value="Amenities">Amenities</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className={`rounded-xl shadow-md border-2 p-8 text-center ${complexity.color}`}>
            <div className="text-5xl mb-3">{complexity.emoji}</div>
            <Clock className="w-12 h-12 mx-auto mb-4" />
            <div className="text-5xl font-bold mb-2">{estimatedTime}s</div>
            <p className="text-lg font-semibold mb-1">Tiempo Estimado</p>
            <p className="text-sm opacity-80">≈ {Math.round(estimatedTime / 60)} min {estimatedTime % 60}s</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Métricas de Complejidad</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Nivel de Complejidad</p>
                  <p className="text-2xl font-bold text-slate-900">{complexity.level}</p>
                </div>
                <div className="text-3xl">{complexity.emoji}</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Score de Complejidad</p>
                  <p className="text-2xl font-bold text-slate-900">{complexityScore}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>

              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Ratio de Variedad</p>
                  <p className="text-2xl font-bold text-slate-900">{varietyRatio}%</p>
                </div>
                <Calculator className="w-8 h-8 text-emerald-600" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6">
            <h4 className="font-bold text-blue-900 mb-2">💡 Interpretación</h4>
            <p className="text-sm text-blue-800">
              {complexity.level === 'Baja' && 'Este cajón tiene baja complejidad y se puede ensamblar rápidamente con mínima supervisión.'}
              {complexity.level === 'Media' && 'Este cajón requiere atención moderada. Se recomienda verificar el layout antes de comenzar.'}
              {complexity.level === 'Alta' && 'Este cajón es altamente complejo. Se recomienda asignar a personal experimentado y permitir tiempo adicional.'}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Fórmula de Cálculo</h3>
        <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-700">
          <p className="mb-2">Tiempo = Base + (Items × 2s) + (Tipos × 5s) + Bonus</p>
          <p className="text-xs text-slate-600 mt-3">
            Base = 60s | Business Bonus = +15s | Category Bonus (Breakfast/Snack) = +10s
          </p>
        </div>
      </div>
    </div>
  );
}
