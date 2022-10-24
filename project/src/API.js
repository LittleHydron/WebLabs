import 'regenerator-runtime/runtime';
import axios from 'axios';

export function sleep(ms = 200){
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < ms);
}

async function baseRequest({method='get', body = null, url=''}){
    console.log(method + " request to " + url);
    let props = {
        method: method,
        url: 'http://127.0.0.1:5000/lighter' + url,
    }
    return axios(props);
}

export async function getRequest({id=null,type=null, numberOfLamps=null, creatorName=null}){
    let url = '';
    if (type){
        url = '?type=' + type;
    }
    if (id){
        if (url.length > 0 && url.at(url.length-1) !== '/') url += '&';
        else url += '?';
        url += 'id='+id;
    }
    if (numberOfLamps){
        if (url.length > 0 && url.at(url.length-1) !== '/') url += '&';
        else url += '?';
        url += 'numOfLamps='+numberOfLamps;
    }
    if (creatorName){
        if (url.length > 0 && url.at(url.length-1) !== '/') url += '&';
        else url += '?';
        url += 'creatorName='+creatorName;
    }
    return baseRequest({url: url});
}
