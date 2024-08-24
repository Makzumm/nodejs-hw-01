import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';


export const countContacts = async () => {
    const contactList = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    return contactList.length;
};

console.log(await countContacts());
