import axios from 'axios';

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2607";
const API = BASE_URL + COHORT;


export async function getGuestList(){
    try{
        const { data } = await axios.get(API + '/guests');
        return data;
    } catch (error){
        console.error('Error fetching data:', error);
        return [];
    }
}

export async function getGuestDetail(id){
    try{
        const { data } = await axios.get(API + `/guests/` + id);
        return data;
    } catch (error){
        console.error(`Error fetching data: `, error);
        return [];
    }
}

