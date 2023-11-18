import reactToCSS from 'react-style-object-to-css';

export type DependencyArray = Array<(() => any) | any>;
export type RouteString = `/${string}`;
export type StyleObject = {
  [key: string]: string
}

export const html = String.raw;
export const javascript = String.raw;

export function processGenerator (generator: string): string {
  let processedGenerator = generator.replace(/<\/?[^>]+>/g, match => {
    let element = match.slice(0, -1);
    if (/^[A-Z]/.test(match.slice(1, -1))) {
      let name = element.split(' ')[0].slice(1);
      let attributes = element.split(' ').slice(1);
      return `<emmy-${name.toLowerCase()} ${attributes.join(' ')}>`;
    }
    else if (/^[A-Z]/.test(match.slice(2, -2))) {
      let name = element.split(' ')[0].slice(2);
      let attributes = element.split(' ').slice(1);
      return `</emmy-${name.toLowerCase()} ${attributes.join(' ')}>`;
    }
    return match;
  });
  return processedGenerator;
}

export function parseCSS (cssString: string): object {
  const styleObj = {};
  cssString.split(';').forEach((declaration) => {
    const [property, value] = declaration.split(':');
    if (property && value) {
      styleObj[property.trim()] = value.trim();
    }
  });
  return styleObj;
}

export function createInlineStyle (cssString: string | object): string {
  if (typeof cssString !== 'string') return reactToCSS(cssString).trim();
  const styleObj = parseCSS(cssString);
  let inlineStyle = '';
  for (const property in styleObj) {
    if (styleObj.hasOwnProperty(property)) {
      inlineStyle += `${property}: ${styleObj[property]}; `;
    }
  }
  return inlineStyle.trim();
}

export function vanillaElement (element: string): string {
  if (/^[A-Z]/.test(element)) {
    element = 'emmy-' + element.toLowerCase();
  }
  return element;
}

export function getValues (dependencies: DependencyArray): Array<any> {
  return dependencies.map((dependency) => {
    if (typeof dependency === 'function') {
      return dependency();
    }
    return dependency;
  });
}

export function useState (initialValue): [() => any, (newValue: any) => void] {
  let value = initialValue;
  const state = () => value;
  const setState = (newValue) => {
    value = newValue;
  }
  return [state, setState];
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function uncapitalizeFirstLetter(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
