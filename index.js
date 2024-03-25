function scuberGreetingForFeet(distancefeet){
  // Write your code here!
  if (distancefeet <= 400){
    return 'This one is on me!';
  } else if (distancefeet > 400 && distancefeet <= 2000){
    return 'That will be twenty bucks.';
  } else if (distancefeet > 2000 && distancefeet <= 2500){
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

function ternaryCheckCity(){
  // Write your code here!
  let Chekcity = 'NYC';
  return (Chekcity === 'NYC') ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(){
  // Write your code here!
  switch (true) {
    case (tip === 'generous'): {
      return 'Thank you so much.';
    } 
  }
  case (tip === 'not as generous'); {
    return 'Thank you.'
  }

  case (tip === 'thanks for everything'); {
    return 'Bye.'
  }
  default: {
    return 'Bye.'
  }
  }

