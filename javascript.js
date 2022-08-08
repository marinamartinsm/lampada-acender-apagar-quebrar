const turnOnOff = document.getElementById('lamp-btn');
const lamp = document.getElementById('lamp');

function lampBroken() {
  lamp.src = './quebrada.jpg';
  turnOnOff.innerHTML = 'Quebrou :(';
}

function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
  if (!isLampBroken()) { //só acende ou apaga a lâmpada se ela não estiver quebrada
  lamp.src = './ligada.jpg';
  turnOnOff.textContent = 'Desligar';
  }
}

function lampOff() {
  if (!isLampBroken()) { //só acende ou apaga a lâmpada se ela não estiver quebrada
  lamp.src = './desligada.jpg';
  turnOnOff.textContent = 'Ligar';
  }
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
      lampOn();
    } else if (turnOnOff.textContent == 'Desligar') {
      lampOff();
    }
}

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
turnOnOff.addEventListener('click', lampOnOff);