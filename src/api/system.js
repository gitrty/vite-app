import { http } from '@/plugin/axios'

export function getData(data) {
    http.get(``, { params: data })
} 