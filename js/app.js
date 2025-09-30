const LIST = [
    {
        id: 1,
        name: 'Mestre Yoda',
        avatar: 'imagens/yoda.png'
    },
    {
        id: 2,
        name: 'Darth Vader',
        avatar: 'imagens/vader.png'
    },
    {
        id: 3,
        name: 'Luke Skywalker',
        avatar: 'imagens/luke.png'
    },
    {
        id: 4,
        name: 'Princesa Leia',
        avatar: 'imagens/leia.png'
    },
    {
        id: 5,
        name: 'Chewbacca',
        avatar: 'imagens/chewbacca.png'
    },
    {
        id: 6,
        name: 'Han Solo',
        avatar: 'imagens/hansolo.png'
    },
    {
        id: 7,
        name: 'R2D2',
        avatar: 'imagens/r2d2.png'
    },
    {
        id: 8,
        name: 'C3PO',
        avatar: 'imagens/c3po.png'
    }
]

const App = new Vue({  
    el: '#app', //Define o elemento HTML onde a instância do Vue.js será montada.
    data: { 
        title: 'Star Wars Lego', 
        userName: 'Rosemeire',
        characters: LIST, //A propriedade characters é inicializada com o array LIST.
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`The character ${userName} received a like!`)
        },
        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })
            this.characters = result
        },
        search() {

            if(this.searchName === '') {
                return alert('The search field is mandatory!')
            }

            const list = this.characters = LIST //Reseta a lista de personagens para o estado original.

            const result = list.filter(item => {
                return item.name === this.searchName
            })

            if(result.length <= 0) {
                alert ('No characters found!')
            }
            else {
                this.characters = result
            }
        }
    }


}); //Cria uma nova instância do Vue.js e a atribui à constante App.



