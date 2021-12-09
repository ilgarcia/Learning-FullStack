module.exports = {
    posts: [
        {
            id: "0", 
            title: "Este é o título de uma mensagem de teste",
            description: "A ideia aqui é ter um mural de cards com título e descrição "
        }
    ],

    getAll(){
        return this.posts
    },

    newPost(title, description){
        this.posts.push({id: generateID(), title, description})
    }

}

function generateID() {
    return Math.random().toString(36).substr(2,9)
}