
**Start MongoDB**

"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"

**Connect to MongoDB**

"C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe"

### Power shell commands

**Mostrar bancos de dados:**

> show dbs

**Checar**

**Checar qual esta sendo usando**

> db

**Apagar o banco de dados que sendo usado**

> db.dropDatabase()

**Alterar banco de dados**

> use banco

**Criar um novo banco de dados**

> use newBanco

**Criar uma coleção dentro do banco**

> db.createCollection('somecolection')

**Deletar uma coleção**

> db.nameCollection.drop()

**Ver as coleções do banco de dados**

> show collections

**Inserir objeto na coleção**

> db.nameCollection.insertOne({nome:"Igor", password:"1234"})
>
> db.nameCollection.insertMany([{nome:"Igor", password:"1234"}, {nome:"Igor", password:"1234"}])

**Encontrar um documento**

> db.nameCollection.findOne()
>
> db.nameCollection.find()
>
> db.nameCollection.find().limit(2).pretty()
>
> db.nameCollection.find({tel:"2345678"}).pretty()
>
> db.nameCollection.find({tel:"2345678"}).count()
>
> db.nameCollection.find().sort({name:-1}).pretty()

**Update**

> db.nameCollection.updateOne({name:"Marcela"},{$set:{tel:"3334444"}})
>
> db.nameCollection.updateMany({},{$set:{class:"2001"}})
>
> db.nameCollection.updateMany({},{$unset:{class:""}})
>
> db.nameCollection.updateMany({},{$rename:{name:"Igor"}})
>
> db.nameCollection.updateMany({},{$set:{views:0"}})
>
> db.nameCollection.updateOne({name:"Marcela"},{$inc:{views:1}})

**Update acha o elemento e recria o elemento**

> db.nameCollection.update({name:"Igor"},{name:"Igor", password:"12345"})

**Update acha o elemento e recria o elemento ou cria um novo elemento**

> db.nameCollection.update({name:"Igor"},{name:"Igor", password:"12345"},{upsert: true})


