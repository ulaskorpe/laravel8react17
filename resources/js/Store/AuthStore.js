import {observable, action, makeAutoObservable } from 'mobx';
import jwt_decode from "jwt-decode";
import CryptoJS from 'crypto-js';
import sign from "jwt-encode";

class AuthStore {

    appState = null ;

    constructor(){
        makeAutoObservable(this,{
            appState:observable,
            saveToken : action,
            getToken : action
        })
    }

    saveToken= (appState) => {
        try 
        {
                //localStorage.setItem('appState',appState);
        localStorage.setItem('appState',CryptoJS.AES.encrypt(sign(appState,"secret"),'udemy-laravel-js').toString());
        this.getToken()

        }catch(e){
                console.log(e);
        }
    }

    getToken = ()=>{
        try{

            const appStateData = localStorage.getItem('appState');
            if(appStateData){
                var bytes = CryptoJS.AES.decrypt(appStateData,'udemy-laravel-js');
                var originalText = bytes.toString(CryptoJS.enc.Utf8);
          //  this.appState = appStateData;
                this.appState = jwt_decode(originalText);
          
            }else{
                this.appState = null;
            }
        }catch(e){
            console.log(e);
        }
    }
}

export default new AuthStore;