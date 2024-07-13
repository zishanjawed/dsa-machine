export default function bs_list(haystack: number[], needle: number): boolean {

    let lo  = 0;
    let hi = haystack.length

    do{
        const m = Math.floor(lo + (hi - lo)/2);
        const v = haystack[m]
        if ( v === needle ){
            return true;
        }else if ( v < needle){
            lo = m + 1;
        }else{
            hi = m;
        }

    }while(hi > lo);

    return false;

}