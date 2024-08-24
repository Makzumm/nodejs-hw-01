import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import {createFakeContact} from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    const contactList = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const newContacts = Array(number).fill(0).map(createFakeContact);
    try{
        contactList.push(...newContacts);
        await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2), 'utf-8');
    }catch(err){
        console.log(err);
    }
};

generateContacts(5);
