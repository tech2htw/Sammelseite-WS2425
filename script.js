var button = document.createElement('a');
button.setAttribute('id', 'back-button');
button.setAttribute('href','../../index.html')
button.setAttribute('style','font-family: sans-serif; font-weight: 400; color: hsl(215, 96%, 36%); padding: 8px 16px; border-radius: 0px; border: 2px solid #0059d8; background: #fff; box-shadow: 4px 4px 0px 0px #0059d8; text-decoration: none; position: fixed; top: 24px; z-index: 9000;');

button.text = '← Zurück zur Übersicht'

var spacer = document.createElement('div');
spacer.setAttribute('class', 'spacer');
spacer.setAttribute('style', 'margin: 40px;');

spacer.setAttribute('style', 'max-width: 1200px; height: 80px; position: sticky;');

document.body.insertBefore(button, document.body.firstChild);
document.body.insertBefore(spacer, document.body.firstChild);

document.getElementById('card').setAttribute('style', 'margin-top: 0; margin-bottom: 0;');
document.body.setAttribute('style', 'padding-bottom: 4rem;')