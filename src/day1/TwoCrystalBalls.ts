export default function two_crystal_balls(breaks: boolean[]): number {

    // calculate jump_amount i.e sqrt of breaks.lenght

   const jump_amount = Math.floor(Math.sqrt(breaks.length));
    
    // find out the first point where the break is 
    let i = jump_amount;
    while(i < breaks.length){
        if(breaks[i]){
            break;
        }
        i += jump_amount;
    }

    const breaking_sector = --i;

    // check for the secound target where break == false
    let j = breaking_sector-jump_amount;

    while(j < breaking_sector && j < breaks.length){
        if(breaks[j]){
            return j;
        }
        j++;
    }

    return -1;


}