// const {data} = require('../JSON/FalseJson') 
import {data} from '../JSON/FalseJson'

let is_ok = true;

const FalseFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (is_ok){
            resolve(data);
        } else {
            reject("Error");
        }
    },3000)
    })
}

export default FalseFetch

