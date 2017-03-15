const uuidV1 = require('uuid/v1');
const { asPromise } = require('../utils');
const Contact = require('./contact');

const getContact = (id) => {
	console.log('getting contact ' + id);
	return	Contact.findById(id);
}

const getContacts = () => {
	console.log('getting contacts');
	return Contact.find({}).exec();
}

const  addContact = (newContact) => {
	const contact  = new Contact({
		firstName: newContact.firstName,
		lastName: newContact.lastName,
		age: newContact.age
	});

	return contact.save();
}

const updateContact = (id, updatedContact) => {
	console.log('updating contact');
	delete updatedContact._id;
	return Contact.findByIdAndUpdate(id, updatedContact)
		.then((updatingContact) => {
			console.log ('updating contact 22 ' + updatingContact);
			if (!updatingContact) {
				throw ({
							message: `Can't find contact with id: ${id}`,
							code: 'NoSuchContact'
						});
			}
		});
}

const removeContact = (id) => {
	return Contact.findByIdAndRemove(id)
		.then (deletedContact => {
			if (!deletedContact) {
				throw ({
								message: `Can't find contact with id: ${id}`,
								code: 'NoSuchContact'
				});
			}
		})
	

};
	module.exports = {
		getContacts,
		addContact,
		getContact,
		removeContact,
		updateContact
	}