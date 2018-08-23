import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products: [
            { name: "banana", price: 20 },
            { name: "whaa", price: 90 },
            { name: "loooo", price: 80 },
            { name: "baaa", price: 70 }
          ]
    },
    getters:{ 
        saleProducts: state =>{
        var salePriducts = state.products.map(product =>{
            return {
                name:'**' + product.name + '**',
                price: product.price /2
            }
        });
        return salePriducts;
    }
    },
    mutations:{
        down: (state, payload) =>{
        state.products.forEach(product =>{
                product.price -= payload 
        })
    }
},
actions:{
    down: (context, payload) =>{
setTimeout(()=>{
    context.commit('down', payload)
}, 1000)
    }
}
})