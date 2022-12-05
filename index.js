let feet = 199;

function scuberGreetingForFeet(feet){
if(feet <= 400){
  return "This one is on me!";
}

else if (feet > 2000 && feet <= 2500){
  return "I will gladly take your thirty bucks.";
}

else if (feet > 2500){
  return "No can do.";
}
}

// let city = NYC;
function ternaryCheckCity(city){
  //return city === NYC? 'Ok, Sounds good.':'No go.'; (not working!?)
  //city = NYC? ('Ok, Sounds good.') : ('No go.'); (not working!?)
  if(city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
}
}


function switchOnCharmFromTip(tip){
switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
    return 'Thank you.';
    break;
    default:
      return 'Bye.';
      break;
}
}

