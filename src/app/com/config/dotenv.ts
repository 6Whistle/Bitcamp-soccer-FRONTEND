import { instance } from "config/axios-config";

export default function Api(){
    
    return `${process.env.NEXT_PUBLIC_API_URL}/api`
}