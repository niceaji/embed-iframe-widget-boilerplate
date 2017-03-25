const tpl = require('html-loader!./widget.html');
import css from './index.css';



function parseTemplate(data) {
  return new Function('data', 'return `' + tpl + '`;')(data);
}

document.querySelectorAll('.example-widget').forEach(function (item) {
  let url = item.dataset.url;
  if(url) {
    item.innerHTML = parseTemplate({url: url});
  }
});


