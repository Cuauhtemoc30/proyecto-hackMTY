import { useState } from 'react';
import { AlertCircle, CheckCircle2, Clock, TrendingUp, Info } from 'lucide-react';

interface PredictionResult {
  difficulty_score: number;
  level: 'low' | 'medium' | 'high';
  recommendations: string[];
}

export default function DifficultyPredictor() {
  const [totalItems, setTotalItems] = useState(15);
  const [uniqueTypes, setUniqueTypes] = useState(6);
  const [flightType, setFlightType] = useState('Business');
  const [category, setCategory] = useState('Breakfast');
  const [result, setResult] = useState<PredictionResult | null>(null);

  const calculateDifficulty = (): PredictionResult => {
    // Calcular ratio de variedad
    const varietyRatio = uniqueTypes / totalItems;
    const itemsPerType = totalItems / uniqueTypes;
    
    // Factores de complejidad
    let complexity = 0;
    
    // Factor de cantidad total
    if (totalItems > 25) complexity += 3;
    else if (totalItems > 15) complexity += 2;
    else complexity += 1;
    
    // Factor de variedad
    if (uniqueTypes > 10) complexity += 3;
    else if (uniqueTypes > 6) complexity += 2;
    else complexity += 1;
    
    // Factor de tipo de vuelo
    if (flightType === 'Business') complexity += 2;
    else complexity += 1;
    
    // Factor de categoría
    if (category === 'Amenities') complexity += 3;
    else if (category === 'Breakfast') complexity += 2;
    else complexity += 1;
    
    // Factor de ratio de variedad
    if (varietyRatio > 0.6) complexity += 2;
    else if (varietyRatio > 0.4) complexity += 1;
    
    // Calcular score (0-20)
    const difficulty_score = Math.min(complexity * 1.5, 20);
    
    // Determinar nivel
    let level: 'low' | 'medium' | 'high';
    let recommendations: string[] = [];
    
    if (difficulty_score >= 15) {
      level = 'high';
      recommendations = [
        '🔴 ALTA DIFICULTAD - Asignar empleado experimentado',
        'Considerar dividir en múltiples cajones',
        'Preparar con anticipación (15 min extra)',
        'Verificar disponibilidad de todos los productos'
      ];
    } else if (difficulty_score >= 10) {
      level = 'medium';
      recommendations = [
        '🟡 MEDIA DIFICULTAD - Supervisión recomendada',
        'Verificar disponibilidad de productos',
        'Asignar tiempo extra de 8-10 minutos',
        'Preparar layout específico antes de ensamblar'
      ];
    } else {
      level = 'low';
      recommendations = [
        '🟢 BAJA DIFICULTAD - Procedimiento estándar',
        'Puede asignarse a cualquier empleado',
        'Tiempo estimado estándar aplica'
      ];
    }
    
    // Recomendaciones específicas por tipo de vuelo
    if (flightType === 'Business') {
      recommendations.push('✈️ Verificar calidad premium de productos');
    }
    
    // Recomendaciones por categoría
    if (category === 'Amenities') {
      recommendations.push('📦 Usar material de embalaje especial');
    } else if (category === 'Beverage') {
      recommendations.push('🧊 Verificar cadena de frío si aplica');
    }
    
    return { difficulty_score, level, recommendations };
  };

  const handlePredict = () => {
    const prediction = calculateDifficulty();
    setResult(prediction);
  };

  const getColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      default: return 'text-emerald-600 bg-emerald-50 border-emerald-200';
    }
  };

  const getIcon = (level: string) => {
    switch (level) {
      case 'high': return AlertCircle;
      case 'medium': return Clock;
      default: return CheckCircle2;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Predictor de Dificultad</h2>
        <p className="text-slate-600">
          Estima el nivel de dificultad y genera recomendaciones automáticas basadas en las características del cajón
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Panel de Configuración */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-600" />
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
                Tipos Únicos: <span className="text-emerald-600">{uniqueTypes}</span>
              </label>
              <input
                type="range"
                min="2"
                max="20"
                value={uniqueTypes}
                onChange={(e) => setUniqueTypes(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>2</span>
                <span>20</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Tipo de Vuelo
              </label>
              <select
                value={flightType}
                onChange={(e) => setFlightType(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Business">Business</option>
                <option value="Economy">Economy</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Categoría
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Snack">Snack</option>
                <option value="Beverage">Beverage</option>
                <option value="Amenities">Amenities</option>
              </select>
            </div>

            <button
              onClick={handlePredict}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              <TrendingUp className="w-5 h-5 inline-block mr-2" />
              Predecir Dificultad
            </button>
          </div>
        </div>

        {/* Panel de Resultados */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Resultado de la Predicción</h3>

          {result ? (
            <div className="space-y-6">
              {/* Score de Dificultad */}
              <div className={`border-2 rounded-xl p-6 ${getColor(result.level)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {(() => {
                      const Icon = getIcon(result.level);
                      return <Icon className="w-6 h-6" />;
                    })()}
                    <h4 className="text-xl font-bold">
                      {result.level === 'high' ? 'Alta Dificultad' : 
                       result.level === 'medium' ? 'Media Dificultad' : 'Baja Dificultad'}
                    </h4>
                  </div>
                </div>
                <p className="text-3xl font-bold mt-3">Score: {result.difficulty_score.toFixed(2)}</p>
              </div>

              {/* Recomendaciones */}
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-4">Recomendaciones</h4>
                <ul className="space-y-2">
                  {result.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <span className="mt-0.5">•</span>
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Métricas */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-600 mb-1">Ratio Variedad</p>
                  <p className="text-lg font-bold text-slate-900">
                    {(uniqueTypes / totalItems * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                  <p className="text-xs text-slate-600 mb-1">Ítems/Tipo</p>
                  <p className="text-lg font-bold text-slate-900">
                    {(totalItems / uniqueTypes).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-center">
              <div className="text-slate-400">
                <TrendingUp className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p className="text-sm">Configura los parámetros y haz clic en "Predecir Dificultad"</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
