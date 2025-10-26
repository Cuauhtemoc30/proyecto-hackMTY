import { useState, useEffect } from 'react';
import { Users, Award, AlertTriangle, TrendingUp } from 'lucide-react';
import { EmployeeEfficiency } from '../lib/supabase';
import { fetchEmployeeRecords } from '../lib/mockData';

export default function EmployeePerformance() {
  const [records, setRecords] = useState<EmployeeEfficiency[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadRecords();
  }, []);

  const loadRecords = async () => {
    setLoading(true);
    try {
      const data = await fetchEmployeeRecords();
      setRecords(data);
    } catch (err) {
      console.error('Error in loadRecords:', err);
      alert('Error al cargar registros');
    } finally {
      setLoading(false);
    }
  };

  const getEmployeeStats = () => {
    const employeeMap = new Map<string, {
      total: number;
      avgDuration: number;
      passCount: number;
      reworkCount: number;
      totalItems: number;
    }>();

    records.forEach((record) => {
      if (!employeeMap.has(record.employee_id)) {
        employeeMap.set(record.employee_id, {
          total: 0,
          avgDuration: 0,
          passCount: 0,
          reworkCount: 0,
          totalItems: 0,
        });
      }

      const stats = employeeMap.get(record.employee_id)!;
      stats.total++;
      stats.avgDuration += record.duration_seconds;
      stats.totalItems += record.items_packed;

      if (record.accuracy_score === 'Pass') {
        stats.passCount++;
      }
      if (record.rework_flag) {
        stats.reworkCount++;
      }
    });

    return Array.from(employeeMap.entries()).map(([id, stats]) => ({
      employee_id: id,
      total: stats.total,
      avgDuration: Math.round(stats.avgDuration / stats.total),
      passRate: Math.round((stats.passCount / stats.total) * 100),
      reworkRate: Math.round((stats.reworkCount / stats.total) * 100),
      totalItems: stats.totalItems,
      efficiency: Math.round((stats.totalItems / (stats.avgDuration / stats.total)) * 100) / 100,
    })).sort((a, b) => b.efficiency - a.efficiency);
  };

  const employeeStats = getEmployeeStats();

  const overallStats = {
    totalEmployees: employeeStats.length,
    avgPassRate: Math.round(employeeStats.reduce((acc, e) => acc + e.passRate, 0) / employeeStats.length) || 0,
    avgDuration: Math.round(records.reduce((acc, r) => acc + r.duration_seconds, 0) / records.length) || 0,
    totalRework: records.filter(r => r.rework_flag).length,
  };

  const getPerformanceBadge = (passRate: number) => {
    if (passRate >= 90) {
      return { label: 'Excelente', color: 'bg-emerald-100 text-emerald-700', icon: '🌟' };
    } else if (passRate >= 75) {
      return { label: 'Bueno', color: 'bg-blue-100 text-blue-700', icon: '👍' };
    } else if (passRate >= 60) {
      return { label: 'Regular', color: 'bg-yellow-100 text-yellow-700', icon: '⚠️' };
    } else {
      return { label: 'Requiere Mejora', color: 'bg-red-100 text-red-700', icon: '🔴' };
    }
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
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Rendimiento de Empleados</h2>
        <p className="text-slate-600">Análisis de eficiencia y calidad en el trabajo</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-slate-600">Empleados</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">{overallStats.totalEmployees}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-5 h-5 text-emerald-600" />
            <p className="text-sm text-slate-600">Tasa de Éxito</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">{overallStats.avgPassRate}%</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-violet-600" />
            <p className="text-sm text-slate-600">Tiempo Promedio</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">{overallStats.avgDuration}s</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <p className="text-sm text-slate-600">Total Rework</p>
          </div>
          <p className="text-2xl font-bold text-slate-900">{overallStats.totalRework}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-6">Ranking de Empleados</h3>

        <div className="space-y-3">
          {employeeStats.slice(0, 10).map((employee, index) => {
            const badge = getPerformanceBadge(employee.passRate);
            return (
              <div
                key={employee.employee_id}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold">
                  {index + 1}
                </div>

                <div className="flex-1">
                  <p className="font-bold text-slate-900 mb-1">{employee.employee_id}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>{employee.total} tareas</span>
                    <span>•</span>
                    <span>{employee.totalItems} ítems</span>
                    <span>•</span>
                    <span>{employee.avgDuration}s promedio</span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600 mb-1">{employee.efficiency}</p>
                  <p className="text-xs text-slate-600">ítems/seg</p>
                </div>

                <div className="w-32">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs">{badge.icon}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${badge.color}`}>
                      {employee.passRate}% éxito
                    </span>
                  </div>
                  {employee.reworkRate > 0 && (
                    <p className="text-xs text-orange-600">
                      {employee.reworkRate}% rework
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Distribución de Rendimiento</h3>
          <div className="space-y-4">
            {[
              { label: 'Excelente (≥90%)', count: employeeStats.filter(e => e.passRate >= 90).length, color: 'bg-emerald-500' },
              { label: 'Bueno (75-89%)', count: employeeStats.filter(e => e.passRate >= 75 && e.passRate < 90).length, color: 'bg-blue-500' },
              { label: 'Regular (60-74%)', count: employeeStats.filter(e => e.passRate >= 60 && e.passRate < 75).length, color: 'bg-yellow-500' },
              { label: 'Requiere Mejora (<60%)', count: employeeStats.filter(e => e.passRate < 60).length, color: 'bg-red-500' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  <span className="text-sm font-bold text-slate-900">{item.count}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${item.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${(item.count / employeeStats.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-4">🎯 Recomendaciones</h3>
          <ul className="space-y-3 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Los empleados con tasa de éxito inferior al 75% requieren capacitación adicional o revisión de procesos.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                El tiempo promedio de {overallStats.avgDuration}s puede optimizarse mejorando la organización del layout.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                Los empleados top pueden servir como mentores para mejorar el rendimiento general del equipo.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
