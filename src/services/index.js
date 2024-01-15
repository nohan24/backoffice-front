import axios from "axios";

export async function login(formData){
    return axios.post("https://backoffice-production-0434.up.railway.app/auth/login", formData);
}

export async function getMarques(){
    return axios.get("https://backoffice-production-0434.up.railway.app/details/marques");
}

export async function getCategories(){
    return axios.get("https://backoffice-production-0434.up.railway.app/details/categories");
}

export async function getCarburants(){
    return axios.get("https://backoffice-production-0434.up.railway.app/details/carburants");
}

export async function getTransmissions(){
    return axios.get("https://backoffice-production-0434.up.railway.app/details/transmissions");
}

export async function getModeles(){
    return axios.get("https://backoffice-production-0434.up.railway.app/details/modeles");
}

export async function getEquipements(){
    return axios.get("https://backoffice-production-0434.up.railway.app/details/equipements");
}

export async function insertMarque(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/details/marques", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertModele(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/details/modeles", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertCategorie(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/details/categories", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertCarburant(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/details/carburants", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertEquipement(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/details/equipements", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertTransmission(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/details/transmissions", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteMarque(id){
    let token = localStorage.getItem("auth");
    return axios.delete("https://backoffice-production-0434.up.railway.app/details/marques/" + id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteModele(id){
    let token = localStorage.getItem("auth");
    return axios.delete("https://backoffice-production-0434.up.railway.app/details/modeles/" + id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteCategorie(id){
    let token = localStorage.getItem("auth");
    return axios.delete("https://backoffice-production-0434.up.railway.app/details/categories/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteCarburant(id){
    let token = localStorage.getItem("auth");
    return axios.delete("https://backoffice-production-0434.up.railway.app/details/carburants/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteEquipement(id){
    let token = localStorage.getItem("auth");
    return axios.delete("https://backoffice-production-0434.up.railway.app/details/equipements/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function deleteTransmission(id){
    let token = localStorage.getItem("auth");
    return axios.delete("https://backoffice-production-0434.up.railway.app/details/transmissions/"+id, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function updateCommission(data){
    let token = localStorage.getItem("auth");
    return axios.put("https://backoffice-production-0434.up.railway.app/details/commissions", data, {
        headers: {"Authorization": `Bearer ${token}`}
    });
}

export async function getCommission(){
    let token = localStorage.getItem("auth");
    return axios.get("https://backoffice-production-0434.up.railway.app/details/commissions", {
        headers: {"Authorization": `Bearer ${token}`}
    });
}
