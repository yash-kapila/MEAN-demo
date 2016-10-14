# MEAN-demo #

A test application using MEAN stack. 

#### Install Mongo DB ####

Follow steps in below link for windows installation.

`https://docs.mongodb.com/manual/tutorial/install-mongodb-enterprise-on-windows/?_ga=1.126492238.235148219.1476313836`

#### Create a dummy Contacts DB ####

DB running on port 27017. Execute following steps to create a dummy database, collection and documents.

```bash
use contacts
	-- creates a new DB if it doesn't exist already. Otherwise, switches to existing DB.

db.contactlist.insert({name: "ABC", email: "abc@test.com", number: "111-111-1111"})
	-- creates a collection(table) named contactlist if it doesn't exist already. Otherwise, switches to existing collection. Inserts one document(row) after creating collection.

db.contactlist.insert([{name: "XYZ", email: "xyz@test.com", number: "222-222-2222"}, {name: "LMN", email: "lmn@test.com", number: "333-333-3333"}])
	-- adds multiple documents to collection

db.contactlist.find().pretty()
	-- displays all documents in the collection
```