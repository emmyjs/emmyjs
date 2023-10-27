import { load } from "emmy-dom";
import './components/UnderConstruction.js';

function Contact () {
    this.className = 'flex flex-col justify-center items-center space-y-3 relative bg-gray-900 bg-opacity-90 w-full h-full';
    this.behave('div');
    
    return /*html*/`
        <UnderConstruction></UnderConstruction>
        <div class="text-white text-3xl font-bold mb-4">Contact</div>
    `;
}

load(Contact, 'Contact');
