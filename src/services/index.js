import axiosInstance from './AxionInstance'

export async function login(formData){
    return axiosInstance.post("https://rest-production-c243.up.railway.app/auth/login", formData);
}

export async function getMarques(){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/marques");
}

export async function getCategories(){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/categories");
}

export async function getCarburants(){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/carburants");
}

export async function getTransmissions(){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/transmissions");
}

export async function getModeles(){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/modeles");
}

export async function getEquipements(){
    return axiosInstance.get("https://rest-production-c243.up.railway.app/equipements");
}

export async function insertMarque(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("https://rest-production-c243.up.railway.app/marques", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertModele(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("https://rest-production-c243.up.railway.app/modeles", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertCategorie(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("https://rest-production-c243.up.railway.app/categories", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertCarburant(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("https://rest-production-c243.up.railway.app/carburants", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertEquipement(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("https://rest-production-c243.up.railway.app/equipements", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertTransmission(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("https://rest-production-c243.up.railway.app/transmissions", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteMarque(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("https://rest-production-c243.up.railway.app/marques/" + id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteModele(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("https://rest-production-c243.up.railway.app/modeles/" + id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteCategorie(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("https://rest-production-c243.up.railway.app/categories/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteCarburant(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("https://rest-production-c243.up.railway.app/carburants/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteEquipement(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("https://rest-production-c243.up.railway.app/equipements/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteTransmission(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("https://rest-production-c243.up.railway.app/transmissions/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function updateCommission(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.put("https://rest-production-c243.up.railway.app/commissions", data, {
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export async function getCommission(){
    let token = localStorage.getItem("auth");
    return axiosInstance.get("https://rest-production-c243.up.railway.app/commissions", {
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export function images(path){
    return "https://rest-production-c243.up.railway.app/images/" + path;
}

export async function getAnnonces(){
    let token = localStorage.getItem("auth");
    return axiosInstance.get("https://rest-production-c243.up.railway.app/validation/annonces", {
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export async function validateannonce(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.put("https://rest-production-c243.up.railway.app/validation/annonces/" + id, null,{
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export async function refuser(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("https://rest-production-c243.up.railway.app/validation/annonces/" + id,{
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export async function stat(){
    let token = localStorage.getItem("auth");
    return axiosInstance.get("https://rest-production-c243.up.railway.app/statistiques",{
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export async function statvente(year){
    let token = localStorage.getItem("auth");
    return axiosInstance.get("https://rest-production-c243.up.railway.app/statistiques/ventes?year=" + year,{
        headers: {"Authorization": `Bearer ${token}`}
    });
}

