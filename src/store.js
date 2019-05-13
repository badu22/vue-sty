import Vue from 'vue'; 
Vue.config.devtools = true;

import Vuex from 'vuex';
Vue.use(Vuex);

import axios from "axios";



export const store = new Vuex.Store({
    state: {
        playersListStore: []
    },
    getters: {
        singlePlayerById: (state) => (id) => {
           return state.playersListStore.find(playerSingle => playerSingle.id == id);
        }     
    },
    mutations: {
        updatePlayers(state, players) {
            state.playersListStore = players;
        },
        sortPlayers(state) {
			state.playersListStore = state.playersListStore.reverse();
		},
    },
    actions: {
        loadPlayers({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('/players.json').then((response) => {
                    let playersData = response.data.players;

                    //sort list by score
                    playersData = _.sortBy(playersData, ['score']);	

                    //revese it			
                    playersData = playersData.reverse();	
                    
                    //add fixed index to list
                    for (var i = 0; i < playersData.length; i++) {
                        playersData[i].inx = (i + 1);
                    } 

                    commit('updatePlayers', playersData);
                    resolve();
                })
                .catch(e => {
                    this.errors.push(e);
                    reject();
                });
            });
        }
    }
});


