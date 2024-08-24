import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import {createFakeContact} from '../utils/createFakeContact.js';

export const addOneContact = async (number) => {
    const contactList = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const newContact = Array(number).fill(0).map(createFakeContact);
    try{
        contactList.push(newContact);
        await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2), 'utf-8');
    }catch(err){
        console.log(err);
    }
};

addOneContact(1);
