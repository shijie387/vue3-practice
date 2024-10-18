import {defineStore} from 'pinia'

export const definedPerson = defineStore(
    {
        id:"PersonPinia",
        state:()=>{
            return{
                username:"zhangsan",
                age: 2,
                hobbies:["sing","dance"]
            }
        },
        getters:{
            getAge(){
                return this.age
            },
            getHobbiesCount(){
                return this.hobbies.length
            }
        },
        actions:{
            doubleAge(){
                return this.age = this.age*2
            }
        }
    }
)