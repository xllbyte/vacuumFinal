import { requestFinal } from '@/service/request/init';

export function queryHeatValue() {
  return requestFinal.get<string>(`/param/queryHeat`);
}

export function updateHeatParam(key: string) {
  return requestFinal.post<string>(`/param/heatSave?param=${key}`);
}

export function getSum() {
  return requestFinal.get<number>(`/count/querySumCount`);
}
