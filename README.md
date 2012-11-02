mongoose.helper
===============

Simple mongoose models api
Created by Mikelis Asnins
E-mail: mikelis.asnins@yahoo.com

Developed for commercial mass e-mail sending application (not spammer :D, application is usded for sending reminders, invoices, etc.)

<code>addSchema('name', MongooseSchema)</code> -> adds mongoose schema to list, for later use

<code>create(Schema or 'name', {data}, callback)</code> -> create record in db

<code>//validateAndCreate</code> -> validate data and create record (WIP)

<code>list(Schema or 'name', callback)</code> -> list all data

<code>remove(Schema or 'name', callback)</code> -> remove data

<code>find(Schema or 'name', {filter}, callback)</code> -> find record

<code>findByID(Schema or 'name', id, callback)</code> -> find record by id

<code>findOne(Schema or 'name', filter, callback)</code> -> return one record

<code>paginate(Schema or 'name', pageSize, pageNumber, callback)</code> -> simple mongoDB paginator.
  pageSize --> record count in one page,
	pageNumber --> current page number

<code>count(Schema or 'name', filter, callback)</code> -> return record count

<code>exists(Schema or 'name', filter, callback)</code> -> return true if record exists


more features comming soon!

example:
```js
var api = require('mongoose.helper');
api.addSchema('tasks', require('../models/task'));
api.addSchema('spools', require('../models/spools'));

api.create('tasks', {
					name: 'test',
					created_by: 'Mikelis'
					}, function (err, doc) {
						if (!err) {
							console.log('success');
						} else {
							console.log(err);
						}
					});

api.list('spools', {
					name: 'test',
					created_by: 'Mikelis'
					}, function(err, doc){
						if (!err) {
							console.log(doc);
						} else {
							console.log(err);
						}
					});
```