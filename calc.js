var cisht = false;
var hishox = 0;

function f(n) {
  if(cisht) {
    mutq.value = n;
    cisht = false;
  }
  else {
    if (mutq.value == '0')
      mutq.value = n;
    else
      mutq.value += n;
  }
}

function o() {
    cisht = true;
    mutq.value = eval(mutq.value)
}

function jnjum() {
    mutq.value = '0';
    cisht = true;
}

function memoryMs() {
  hishox = parseFloat(mutq.value);
}

function memoryM() {
  mutq.value = hishox + parseFloat(mutq.value);
}

function memory_M() {
  mutq.value = parseFloat(mutq.value) - hishox;
}

function memoryMc() {
  hishox = 0;
}

function nshan() {
  mutq.value = parseFloat(mutq.value) * (-1);
}

function verjin() {
  mutq.value = mutq.value.substring(0,mutq.value.length - 1);
}

function armat() {
  mutq.value = Math.sqrt(mutq.value);
}

function qar() {
  mutq.value *= mutq.value;
}

function xor() {
  mutq.value = mutq.value * mutq.value * mutq.value;
}