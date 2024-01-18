import axiosInstance from './AxionInstance'

export async function login(formData){
    return axiosInstance.post("http://localhost:8080/auth/login", formData);
}

export async function getMarques(){
    return axiosInstance.get("http://localhost:8080/marques");
}

export async function getCategories(){
    return axiosInstance.get("http://localhost:8080/categories");
}

export async function getCarburants(){
    return axiosInstance.get("http://localhost:8080/carburants");
}

export async function getTransmissions(){
    return axiosInstance.get("http://localhost:8080/transmissions");
}

export async function getModeles(){
    return axiosInstance.get("http://localhost:8080/modeles");
}

export async function getEquipements(){
    return axiosInstance.get("http://localhost:8080/equipements");
}

export async function insertMarque(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("http://localhost:8080/marques", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertModele(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("http://localhost:8080/modeles", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertCategorie(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("http://localhost:8080/categories", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertCarburant(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("http://localhost:8080/carburants", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertEquipement(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("http://localhost:8080/equipements", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertTransmission(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.post("http://localhost:8080/transmissions", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteMarque(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("http://localhost:8080/marques/" + id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteModele(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("http://localhost:8080/modeles/" + id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteCategorie(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("http://localhost:8080/categories/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteCarburant(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("http://localhost:8080/carburants/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteEquipement(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("http://localhost:8080/equipements/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteTransmission(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("http://localhost:8080/transmissions/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function updateCommission(data){
    let token = localStorage.getItem("auth");
    return axiosInstance.put("http://localhost:8080/commissions", data, {
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export async function getCommission(){
    let token = localStorage.getItem("auth");
    return axiosInstance.get("http://localhost:8080/commissions", {
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export function images(path){
    return "http://localhost:8080/images/" + path;
}

export async function getAnnonces(){
    let token = localStorage.getItem("auth");
    return axiosInstance.get("http://localhost:8080/validation/annonces", {
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export async function validateannonce(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.put("http://localhost:8080/validation/annonces/" + id, null,{
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export async function refuser(id){
    let token = localStorage.getItem("auth");
    return axiosInstance.delete("http://localhost:8080/validation/annonces/" + id,{
        headers: {"Authorization": `Bearer ${token}`}
    });
}
