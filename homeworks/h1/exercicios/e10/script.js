function numGeracoes(anoAtual) {
  return (anoAtual - 1500) / 28;
}

alert(`O número de gerações de brasileiros é de ${parseInt(numGeracoes(2022))}`)
