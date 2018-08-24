import _ from 'lodash';
import $ from 'jquery';

function component() {
    let element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

$('body').append(component());