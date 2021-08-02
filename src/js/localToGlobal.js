/* 
 = Fonction trouvée sur Stackoverflow : https://stackoverflow.com/questions/1350581/how-to-get-an-elements-top-position-relative-to-the-browsers-viewport/1350681#1350681
 */ 

// Récupération de la position d'un élément par rapport au viewport
export function localToGlobal( _el ) {
    var target = _el,
    target_width = target.offsetWidth,
    target_height = target.offsetHeight,
    target_left = target.offsetLeft,
    target_top = target.offsetTop,
    gleft = 0,
    gtop = 0,
    rect = {};

    var moonwalk = function( _parent ) {
        if (!!_parent) {
            gleft += _parent.offsetLeft;
            gtop += _parent.offsetTop;
            moonwalk( _parent.offsetParent );
        } else {
            return rect = {
            top: target.offsetTop + gtop,
            left: target.offsetLeft + gleft,
            bottom: (target.offsetTop + gtop) + target_height,
            right: (target.offsetLeft + gleft) + target_width
            };
        }
    }

    moonwalk( target.offsetParent );
    return rect;
}