import axios from "axios";

export async function login(formData){
    return axios.post("https://backoffice-production-0434.up.railway.app/auth/login", formData);
}

export async function getMarques(){
    return axios.get("https://backoffice-production-0434.up.railway.app/marques");
}

export async function getCategories(){
    return axios.get("https://backoffice-production-0434.up.railway.app/categories");
}

export async function getCarburants(){
    return axios.get("https://backoffice-production-0434.up.railway.app/carburants");
}

export async function getTransmissions(){
    return axios.get("https://backoffice-production-0434.up.railway.app/transmissions");
}

export async function getModeles(){
    return axios.get("https://backoffice-production-0434.up.railway.app/modeles");
}

export async function getEquipements(){
    return axios.get("https://backoffice-production-0434.up.railway.app/equipements");
}

export async function insertMarque(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/marques", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertModele(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/modeles", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertCategorie(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/categories", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertCarburant(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/carburants", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertEquipement(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/equipements", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}

export async function insertTransmission(data){
    let token = localStorage.getItem("auth");
    return axios.post("https://backoffice-production-0434.up.railway.app/transmissions", data, {
        headers: {"Authorization" : `Bearer ${token}`}
    });
}