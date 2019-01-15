class Reglas {
    constructor (db) {
        this.db = db
        this.ref = this.db.ref('/')
        this.collection = this.ref.child('reglas')
    }

    async create (data) {
        const newRegla = this.collection.push()
        newRegla.set(data)
        return newRegla.key
    }

    //En el futuro modificar getAll por get(amount)
    async getAll () {
        const query = await this.collection.once('value')
        const data = query.val()
        return data
    }
}

module.exports = Reglas