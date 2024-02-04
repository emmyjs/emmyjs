import { load, html } from 'emmy-dom/dist/server.js'
import './components/UnderConstruction.js'

export function contact () {
    this.className = 'flex flex-col justify-center items-center space-y-3 relative bg-gray-900 bg-opacity-90 w-full h-full'
    
    return html`
        <UnderConstruction></UnderConstruction>
        <div class='text-white text-3xl font-bold mb-4'>Contact</div>
    `
}

load(contact, 'Contact')
