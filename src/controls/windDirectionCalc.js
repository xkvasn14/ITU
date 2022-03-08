// autor: Lenka Soková
// login: xsokov01

// degrees to compass direction
export function calc (i) {
    //https://community.openhab.org/t/convert-wind-direction-degrees-to-compass-points/71677
    if(i >= 349 || i <= 11){
        return +i + "° -=- S";
    } else if (i >= 12 && i <= 33) {
        return +i + "° -=- SSV";
    } else if (i >= 34 && i <= 56) {
        return +i + "° -=- SV";
    } else if (i >= 57 && i <= 78) {
        return +i + "° -=- VSV";
    } else if (i >= 79 && i <= 101) {
        return +i + "° -=- V";
    } else if (i >= 102 && i <= 123) {
        return +i + "° -=- VJV";
    } else if (i >= 124 && i <= 146) {
        return +i + "° -=- JV";
    } else if (i >= 147 && i <= 168) {
        return +i + "° -=- JJV";
    } else if (i >= 169 && i <= 191) {
        return +i + "° -=- J";
    } else if (i >= 192 && i <= 213) {
        return +i + "° -=- JJZ";
    } else if (i >= 214 && i <= 236) {
        return +i + "° -=- JZ";
    } else if (i >= 237 && i <= 258) {
        return +i + "° -=- ZJZ";
    } else if (i >= 259 && i <= 281) {
        return +i + "° -=- Z";
    } else if (i >= 282 && i <= 303) {
        return +i + "° -=- ZSZ";
    } else if (i >= 304 && i <= 326) {
        return +i + "° -=- SZ";
    } else if (i >= 327 && i <= 348) {
        return +i + "° -=- SSZ";
    }
}
